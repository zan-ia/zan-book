/**
 * Analyzer module — DOCX/PPTX template → TemplateMapping.
 *
 * Opens a DOCX or PPTX file and produces a TemplateMapping that
 * tells the renderer which DOCX style to apply to each markdown element.
 *
 * For DOCX: reads named styles via JSZip + XML parsing.
 * For PPTX: extracts theme info (fonts, colors) to create matching DOCX styles.
 *
 * Two modes:
 * - Auto (default): Reads style names from the DOCX and applies
 *   heuristics to map them to markdown elements.
 * - AI: Uses LLM Vision to suggest mappings from rendered page images.
 */

import { mkdir, readFile, readdir, rm } from "node:fs/promises";
import { basename, extname, join } from "node:path";
import { tmpdir } from "node:os";

import JSZip from "jszip";
import { XMLParser } from "fast-xml-parser";
import { execa } from "execa";

import type { LlmProvider } from "./llm.js";
import type { TemplateMapping, Theme } from "./contracts.js";

// ─── Custom Errors ─────────────────────────────────────────────────────────

export class AnalyzerError extends Error {
  constructor(message: string, cause?: unknown) {
    super(message, { cause });
    this.name = "AnalyzerError";
  }
}

export class DocxParsingError extends AnalyzerError {
  constructor(message: string, cause?: unknown) {
    super(message, cause);
    this.name = "DocxParsingError";
  }
}

export class VisionAnalysisError extends AnalyzerError {
  constructor(message: string, cause?: unknown) {
    super(message, cause);
    this.name = "VisionAnalysisError";
  }
}

// ─── Internal Types ────────────────────────────────────────────────────────

interface DocxStyle {
  id: string;
  name: string;
}

interface DocxStyles {
  paragraphStyles: DocxStyle[];
  characterStyles: DocxStyle[];
}

interface DocxPageLayout {
  pageSize: { width: number; height: number };
  margins: { top: number; bottom: number; left: number; right: number };
}

// ─── DOCX ZIP Reading ──────────────────────────────────────────────────────

/**
 * Read paragraph and character styles from a DOCX buffer by parsing
 * word/styles.xml inside the ZIP archive.
 */
async function readDocxStyles(buffer: Buffer): Promise<DocxStyles> {
  try {
    const zip = await JSZip.loadAsync(buffer);
    const stylesFile = zip.file("word/styles.xml");
    if (!stylesFile) {
      throw new DocxParsingError("word/styles.xml not found in DOCX archive");
    }

    const stylesXml = await stylesFile.async("string");
    const parser = new XMLParser({
      ignoreAttributes: false,
      attributeNamePrefix: "@_",
      isArray: (tagName) =>
        tagName === "w:style" || tagName === "w:styles" || tagName === "w:rFonts",
    });
    const parsed = parser.parse(stylesXml);

    const stylesRoot = parsed["w:styles"] ?? parsed["styles"];
    if (!stylesRoot?.["w:style"] && !stylesRoot?.style) {
      return { paragraphStyles: [], characterStyles: [] };
    }

    const styleNodes: unknown[] = stylesRoot["w:style"] ?? stylesRoot.style ?? [];

    const paragraphStyles: DocxStyle[] = [];
    const characterStyles: DocxStyle[] = [];

    for (const node of styleNodes) {
      if (!node || typeof node !== "object") continue;
      const el = node as Record<string, unknown>;

      const type = String(el["@_w:type"] ?? el["@_type"] ?? "");
      const styleId = String(el["@_w:styleId"] ?? el["@_styleId"] ?? "");

      const nameEl = el["w:name"] ?? el["name"];
      const name =
        typeof nameEl === "object" && nameEl !== null
          ? String(
              (nameEl as Record<string, unknown>)["@_w:val"] ??
                (nameEl as Record<string, unknown>)["@_val"] ??
                "",
            )
          : "";

      if (!styleId || !name) continue;

      const entry: DocxStyle = { id: styleId, name };

      if (type === "paragraph") {
        paragraphStyles.push(entry);
      } else if (type === "character") {
        characterStyles.push(entry);
      }
    }

    return { paragraphStyles, characterStyles };
  } catch (error) {
    if (error instanceof DocxParsingError) throw error;
    throw new DocxParsingError("Failed to parse DOCX styles", error);
  }
}

/**
 * Read page layout (page size and margins) from word/document.xml.
 */
async function readDocxPageLayout(buffer: Buffer): Promise<DocxPageLayout | null> {
  try {
    const zip = await JSZip.loadAsync(buffer);
    const docFile = zip.file("word/document.xml");
    if (!docFile) return null;

    const docXml = await docFile.async("string");
    const parser = new XMLParser({
      ignoreAttributes: false,
      attributeNamePrefix: "@_",
      isArray: (tagName) =>
        tagName === "w:body" ||
        tagName === "w:p" ||
        tagName === "w:sectPr" ||
        tagName === "w:document",
    });
    const parsed = parser.parse(docXml);

    // Navigate: w:document → w:body → w:sectPr
    const docRoot = parsed["w:document"] ?? parsed["document"];
    if (!docRoot) return null;

    const body = docRoot["w:body"] ?? docRoot["body"];
    if (!body) return null;

    // Find section properties — could be nested with w:p
    let sectPr: Record<string, unknown> | undefined;

    // Try direct w:sectPr on body
    const directSectPr = body["w:sectPr"] ?? body["sectPr"];
    if (directSectPr) {
      sectPr = directSectPr;
    } else {
      // Search through paragraphs for the last sectPr
      const paragraphs: unknown[] = body["w:p"] ?? body["p"] ?? [];
      for (let i = paragraphs.length - 1; i >= 0; i--) {
        const p = paragraphs[i] as Record<string, unknown> | undefined;
        if (!p) continue;
        const pSectPr = p["w:sectPr"] ?? p["sectPr"];
        if (pSectPr) {
          sectPr = pSectPr as Record<string, unknown>;
          break;
        }
      }
    }

    if (!sectPr) return null;

    const pgSz = sectPr?.["w:pgSz"] ?? sectPr?.["pgSz"] ?? null;
    const pgMar = sectPr?.["w:pgMar"] ?? sectPr?.["pgMar"] ?? null;

    const pageSize = pgSz
      ? {
          width: Number(
            (pgSz as Record<string, unknown>)?.["@_w:w"] ??
              (pgSz as Record<string, unknown>)?.["@_w"] ??
              0,
          ),
          height: Number(
            (pgSz as Record<string, unknown>)?.["@_w:h"] ??
              (pgSz as Record<string, unknown>)?.["@_h"] ??
              0,
          ),
        }
      : { width: 11906, height: 16838 };

    const marginDefault = { top: 1440, bottom: 1440, left: 1800, right: 1800 };

    const margins = pgMar
      ? {
          top: Number(
            (pgMar as Record<string, unknown>)?.["@_w:top"] ??
              (pgMar as Record<string, unknown>)?.["@_top"] ??
              marginDefault.top,
          ),
          bottom: Number(
            (pgMar as Record<string, unknown>)?.["@_w:bottom"] ??
              (pgMar as Record<string, unknown>)?.["@_bottom"] ??
              marginDefault.bottom,
          ),
          left: Number(
            (pgMar as Record<string, unknown>)?.["@_w:left"] ??
              (pgMar as Record<string, unknown>)?.["@_left"] ??
              marginDefault.left,
          ),
          right: Number(
            (pgMar as Record<string, unknown>)?.["@_w:right"] ??
              (pgMar as Record<string, unknown>)?.["@_right"] ??
              marginDefault.right,
          ),
        }
      : marginDefault;

    return { pageSize, margins };
  } catch {
    return null;
  }
}

// ─── Unit Conversion Helpers ───────────────────────────────────────────────

// Standard page sizes in EMU (1 EMU = 1/36000 mm)
// DOCX stores page dimensions in twips (twentieths of a point)
// 1 twip = 1/20 point = 1/1440 inch
// For conversion: EMU values from w:pgSz are actually in twips * 635
// To keep it simple: detect by approximate ratio and known standards

interface PageSizeDef {
  name: string;
  widthMm: number;
  heightMm: number;
}

const STANDARD_PAGE_SIZES: PageSizeDef[] = [
  { name: "A3", widthMm: 297, heightMm: 420 },
  { name: "A4", widthMm: 210, heightMm: 297 },
  { name: "A5", widthMm: 148, heightMm: 210 },
  { name: "Letter", widthMm: 215.9, heightMm: 279.4 },
  { name: "Legal", widthMm: 215.9, heightMm: 355.6 },
  { name: "Tabloid", widthMm: 279.4, heightMm: 431.8 },
];

/**
 * Convert EMU (English Metric Units) to millimeters.
 * 1 EMU = 1/36000 mm (in the context of DOCX, the values from
 * w:pgSz are actually in twips; we use a rough conversion).
 */
function emuToMm(emu: number): number {
  // DOCX stores page dimensions in twips (1/1440 inch)
  // 1 inch = 25.4 mm
  // So mm = emu / 1440 * 25.4
  return Math.round((emu / 1440) * 25.4 * 100) / 100;
}

/**
 * Detect the page size name from width/height values (in EMU/twips).
 */
function detectPageSize(width: number, height: number): string {
  const widthMm = emuToMm(width);
  const heightMm = emuToMm(height);
  const tolerance = 5; // mm tolerance

  for (const std of STANDARD_PAGE_SIZES) {
    // Check both orientations
    if (
      (Math.abs(widthMm - std.widthMm) <= tolerance &&
        Math.abs(heightMm - std.heightMm) <= tolerance) ||
      (Math.abs(widthMm - std.heightMm) <= tolerance &&
        Math.abs(heightMm - std.widthMm) <= tolerance)
    ) {
      return std.name;
    }
  }

  // Unknown size — return as "WxH mm"
  return `${widthMm}×${heightMm} mm`;
}

/**
 * Convert margin values (in EMU/twips) to millimeters.
 */
function convertMarginsToMm(margins: {
  top: number;
  bottom: number;
  left: number;
  right: number;
}): Record<string, number> {
  return {
    top: emuToMm(margins.top),
    bottom: emuToMm(margins.bottom),
    left: emuToMm(margins.left),
    right: emuToMm(margins.right),
  };
}

// ─── Heuristic Mapping ─────────────────────────────────────────────────────

const STYLE_PATTERNS: [RegExp, string][] = [
  // Heading patterns (highest priority)
  [/heading\s*1|heading1|t[ií]tulo\s*1|t[ií]tulo1/i, "h1"],
  [/heading\s*2|heading2|t[ií]tulo\s*2|t[ií]tulo2/i, "h2"],
  [/heading\s*3|heading3|t[ií]tulo\s*3|t[ií]tulo3/i, "h3"],
  // Body text
  [/^(body|normal|paragraph|corpo)/i, "body"],
  // Code / monospace
  [/code|source|monospace|c[oó]digo|terminal|pre/i, "code"],
  // Blockquote
  [/quote|blockquote|block quote|cita[cç][aã]o/i, "blockquote"],
  // Image caption
  [/caption|legenda|image caption|figure/i, "image_caption"],
  // Lists / objectives
  [/list|bullet|lista|objectives|objetivos/i, "objectives"],
  // Table header
  [/table header|tableheading|cabe[cç]alho|table head/i, "table_header"],
  // Table cell
  [/table cell|tabletext|c[eé]lula|table text/i, "table_cell"],
  // Title fallback
  [/^title$|^t[ií]tulo$/i, "h1"],
];

const ANNOTATION_PATTERNS: [RegExp, string][] = [
  [/callout|note|nota|dica|tip|aviso/i, "callout_note"],
  [/warning|aviso|aten[cç][aã]o|cuidado/i, "callout_warning"],
  [/quick|check|checklist|verifica[cç][aã]o/i, "quick_check"],
  [/image|figure|figura|center|mind.?map|diagrama/i, "mind_map"],
  [/mermaid|diagram|flowchart|fluxograma/i, "mermaid"],
];

/**
 * Apply heuristics to map DOCX paragraph styles to semantic style keys.
 * Uses priority-ordered pattern matching against style names.
 */
function applyHeuristics(styles: DocxStyles): Record<string, string> {
  const mapping: Record<string, string> = {};
  const matched = new Set<string>();

  // Match paragraph styles against patterns in priority order
  for (const [pattern, key] of STYLE_PATTERNS) {
    for (const style of styles.paragraphStyles) {
      if (matched.has(key)) continue;
      if (pattern.test(style.name) || pattern.test(style.id)) {
        mapping[key] = style.name;
        matched.add(key);
      }
    }
  }

  return mapping;
}

/**
 * Apply heuristics to map DOCX styles to annotation style keys.
 */
function applyAnnotationHeuristics(styles: DocxStyles): Record<string, string> {
  const mapping: Record<string, string> = {};
  const matched = new Set<string>();

  // Check paragraph styles first
  for (const [pattern, key] of ANNOTATION_PATTERNS) {
    for (const style of styles.paragraphStyles) {
      if (matched.has(key)) continue;
      if (pattern.test(style.name) || pattern.test(style.id)) {
        mapping[key] = style.name;
        matched.add(key);
      }
    }
  }

  // Fall back to character styles for any remaining unmatched keys
  for (const [pattern, key] of ANNOTATION_PATTERNS) {
    if (matched.has(key)) continue;
    for (const style of styles.characterStyles) {
      if (pattern.test(style.name) || pattern.test(style.id)) {
        mapping[key] = style.name;
        matched.add(key);
      }
    }
  }

  return mapping;
}

// ─── Default Mapping ───────────────────────────────────────────────────────

const DEFAULT_STYLE_MAP: Record<string, string> = {
  h1: "Heading 1",
  h2: "Heading 2",
  h3: "Heading 3",
  body: "Body Text",
  code: "CodeBlock",
  blockquote: "Quote",
  table_header: "Table Header",
  table_cell: "Table Cell",
  image_caption: "Caption",
  objectives: "List Bullet",
  questions_title: "Heading 2",
  questions_body: "Body Text",
};

const DEFAULT_ANNOTATION_MAP: Record<string, string> = {
  quick_check: "Callout",
  callout_note: "Note",
  callout_warning: "Warning",
  mind_map: "Image Center",
  mermaid: "Image Center",
};

/**
 * Fill in missing keys with defaults from a source map.
 */
function fillDefaults(
  mapping: Record<string, string>,
  defaults: Record<string, string>,
): Record<string, string> {
  const result: Record<string, string> = { ...mapping };
  for (const [key, value] of Object.entries(defaults)) {
    if (!(key in result)) {
      result[key] = value;
    }
  }
  return result;
}

// ─── Public API ────────────────────────────────────────────────────────────

/**
 * Analyze a DOCX template using heuristics (auto mode).
 * Reads the DOCX file, parses named styles, and applies pattern matching
 * to produce a complete TemplateMapping.
 *
 * @param docxPath - Path to the .docx template file
 * @returns A validated TemplateMapping
 */
export async function analyzeTemplate(docxPath: string): Promise<TemplateMapping> {
  const ext = extname(docxPath).toLowerCase();

  if (ext === ".pptx") {
    return analyzePptxTemplate(docxPath);
  }

  // Default: DOCX analysis
  const buffer = await readFile(docxPath);
  const styles = await readDocxStyles(buffer);

  // Warn if no named paragraph styles found
  if (styles.paragraphStyles.length === 0) {
    console.warn(
      "No named paragraph styles found in DOCX. " +
        "Consider using --ai mode for Vision-based analysis.",
    );
  }

  const heuristicStyles = applyHeuristics(styles);
  const heuristicAnnotations = applyAnnotationHeuristics(styles);

  const stylesMap = fillDefaults(heuristicStyles, DEFAULT_STYLE_MAP);
  const annotationMap = fillDefaults(heuristicAnnotations, DEFAULT_ANNOTATION_MAP);

  // Detect page layout
  const layout = await readDocxPageLayout(buffer);
  const pageSize = layout ? detectPageSize(layout.pageSize.width, layout.pageSize.height) : "A4";
  const margins = layout ? convertMarginsToMm(layout.margins) : {};

  const templateId = basename(docxPath, extname(docxPath));

  return {
    id: templateId,
    name: templateId,
    docx_path: docxPath,
    layout: defaultLayout(),
    styles: stylesMap,
    annotation_styles: annotationMap,
    page_size: pageSize,
    margins,
  };
}

// ─── PPTX Theme Extraction ─────────────────────────────────────────────────

/**
 * Extract visual theme from a PPTX file and produce a TemplateMapping.
 *
 * Reads the theme XML (fonts, colors) and creates a default style mapping
 * that the renderer can use to style the output DOCX.
 */
async function analyzePptxTemplate(pptxPath: string): Promise<TemplateMapping> {
  const buffer = await readFile(pptxPath);
  const zip = await JSZip.loadAsync(buffer);

  // Extract font info from theme
  const themeFile = zip.file("ppt/theme/theme1.xml");
  let majorFont = "Calibri Light";
  let minorFont = "Calibri";
  const colors: Record<string, string> = {};

  if (themeFile) {
    const themeXml = await themeFile.async("string");
    const parser = new XMLParser({
      ignoreAttributes: false,
      attributeNamePrefix: "@_",
    });
    const parsed = parser.parse(themeXml);

    // Font scheme
    const fontScheme = parsed?.["a:theme"]?.["a:themeElements"]?.["a:fontScheme"];
    if (fontScheme) {
      const major = fontScheme["a:majorFont"]?.["a:latin"]?.["@_typeface"];
      const minor = fontScheme["a:minorFont"]?.["a:latin"]?.["@_typeface"];
      if (major) majorFont = major;
      if (minor) minorFont = minor;
    }

    // Color scheme
    const clrScheme = parsed?.["a:theme"]?.["a:themeElements"]?.["a:clrScheme"];
    if (clrScheme) {
      const colorMap: Record<string, string> = {
        "a:dk1": "dk1",
        "a:lt1": "lt1",
        "a:dk2": "dk2",
        "a:lt2": "lt2",
        "a:accent1": "accent1",
        "a:accent2": "accent2",
        "a:accent3": "accent3",
        "a:accent4": "accent4",
        "a:accent5": "accent5",
        "a:accent6": "accent6",
        "a:hlink": "hlink",
        "a:folHlink": "folHlink",
      };

      for (const [tag, key] of Object.entries(colorMap)) {
        const el = clrScheme[tag];
        if (el) {
          const srgb = el["a:srgbClr"]?.["@_val"];
          if (srgb) colors[key] = `#${srgb}`;
        }
      }
    }
  }

  const templateId = basename(pptxPath, extname(pptxPath));

  const theme: Theme = { majorFont, minorFont, colors };

  console.log(`  Font: heading="${majorFont}", body="${minorFont}"`);
  if (Object.keys(colors).length > 0) {
    const c = colors;
    console.log(
      `  Colors: accent1=${c.accent1 ?? ""} accent2=${c.accent2 ?? ""} accent3=${c.accent3 ?? ""}`,
    );
  }

  return {
    id: templateId,
    name: templateId,
    docx_path: pptxPath,
    layout: defaultLayout(),
    styles: { ...DEFAULT_STYLE_MAP },
    annotation_styles: { ...DEFAULT_ANNOTATION_MAP },
    page_size: "A4",
    margins: {},
    theme,
  };
}

/** Default layout sequence for a book document. */
function defaultLayout(): TemplateMapping["layout"] {
  return [
    { kind: "cover", source: "cover", page_break: true },
    { kind: "toc", source: "toc", page_break: true },
    { kind: "chapter", source: "lesson", page_break: true },
    { kind: "questions", source: "questions", page_break: true },
    { kind: "appendix", source: "appendix", page_break: false },
  ];
}

/**
 * Convert a DOCX file to page images using LibreOffice + pdftoppm.
 *
 * Requires:
 *   - LibreOffice (soffice) in PATH
 *   - poppler-utils (pdftoppm) in PATH
 *
 * @param docxPath - Path to the .docx file
 * @returns Array of PNG image buffers, one per page
 * @throws {VisionAnalysisError} If LibreOffice or pdftoppm is not available
 */
export async function convertDocxToImages(docxPath: string): Promise<Buffer[]> {
  // Check for LibreOffice
  try {
    await execa("soffice", ["--version"], { timeout: 5000 });
  } catch {
    throw new VisionAnalysisError(
      "LibreOffice (soffice) not found. Install it with: sudo apt install libreoffice",
    );
  }

  // Check for pdftoppm
  try {
    await execa("pdftoppm", ["--version"], { timeout: 5000 });
  } catch {
    throw new VisionAnalysisError(
      "pdftoppm not found. Install poppler-utils with: sudo apt install poppler-utils",
    );
  }

  // Create temp directory for intermediate files
  const tmpDir = join(tmpdir(), `zanbook-${Date.now()}`);

  await mkdir(tmpDir, { recursive: true });

  try {
    // Step 1: DOCX → PDF via LibreOffice
    await execa("soffice", ["--headless", "--convert-to", "pdf", "--outdir", tmpDir, docxPath], {
      timeout: 60000,
    });

    // Find the generated PDF (LibreOffice preserves the filename)
    const pdfFile = `${tmpDir}/${basename(docxPath, extname(docxPath))}.pdf`;

    // Step 2: PDF → PNG images via pdftoppm
    const images: Buffer[] = [];
    await execa("pdftoppm", ["-png", "-r", "150", pdfFile, `${tmpDir}/page`], { timeout: 60000 });

    // Read all generated page images
    const files = (await readdir(tmpDir))
      .filter((f) => f.startsWith("page-") && f.endsWith(".png"))
      .sort();

    for (const file of files) {
      images.push(await readFile(join(tmpDir, file)));
    }

    return images;
  } finally {
    // Cleanup temp files (best-effort)
    await rm(tmpDir, { recursive: true, force: true }).catch(() => {
      // Ignore cleanup errors
    });
  }
}

/**
 * Analyze a DOCX template using LLM Vision assistance.
 *
 * Renders the DOCX pages to images, sends them to the LLM Vision API,
 * and returns a complete TemplateMapping with AI-suggested mappings.
 *
 * @param docxPath - Path to the .docx template file
 * @param llm - An LlmProvider instance (OpenAI or Anthropic) with vision capability
 * @returns A validated TemplateMapping
 * @throws {VisionAnalysisError} If image conversion fails or LLM returns invalid results
 */
export async function analyzeTemplateWithAI(
  docxPath: string,
  llm?: LlmProvider,
): Promise<TemplateMapping> {
  if (!llm) {
    throw new AnalyzerError(
      "AI mode requires an LLM provider. Pass an LlmProvider instance or configure one in zanbook.config.json.",
    );
  }

  // Convert DOCX to images
  const images = await convertDocxToImages(docxPath);

  if (images.length === 0) {
    throw new VisionAnalysisError("No page images generated from the DOCX file");
  }

  // Send to LLM Vision
  const suggestion = await llm.analyzeTemplateImages(images, docxPath);

  // Build the mapping
  const stylesMap = fillDefaults(suggestion.styles, DEFAULT_STYLE_MAP);
  const annotationMap = fillDefaults(suggestion.annotation_styles, DEFAULT_ANNOTATION_MAP);

  // Detect page layout from DOCX
  const buffer = await readFile(docxPath);
  const layout = await readDocxPageLayout(buffer);
  const pageSize = layout ? detectPageSize(layout.pageSize.width, layout.pageSize.height) : "A4";
  const margins = layout ? convertMarginsToMm(layout.margins) : {};

  const templateId = basename(docxPath, extname(docxPath));

  return {
    id: templateId,
    name: templateId,
    docx_path: docxPath,
    layout: defaultLayout(),
    styles: stylesMap,
    annotation_styles: annotationMap,
    page_size: pageSize,
    margins,
  };
}

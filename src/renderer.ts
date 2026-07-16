/**
 * Renderer module — Book → DOCX.
 *
 * Traverses a validated Book AST (from remark) and produces a DOCX
 * buffer by applying styles from a TemplateMapping. Handles:
 * - Markdown syntax (headings, lists, tables, code blocks, etc.)
 * - Semantic annotations (quick check callouts, mind maps, mermaid diagrams)
 * - Mermaid diagram rendering via mermaid-cli
 * - Page layout (cover, TOC, chapters, questions, appendix)
 */

import { mkdir, writeFile, readFile, rm } from "node:fs/promises";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { randomUUID } from "node:crypto";

import { unified } from "unified";
import remarkParse from "remark-parse";
import type { Root, Content, PhrasingContent } from "mdast";
import { execa } from "execa";
import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  ImageRun,
  Table,
  TableRow,
  TableCell,
  AlignmentType,
  ExternalHyperlink,
  BorderStyle,
  type ISectionOptions,
} from "docx";

import type { Book, TemplateMapping, Lesson, Annotation, MermaidTheme } from "./contracts.js";

// ═══════════════════════════════════════════════════════════════════════════
// Custom Errors
// ═══════════════════════════════════════════════════════════════════════════

export class RendererError extends Error {
  constructor(message: string, cause?: unknown) {
    super(message, { cause });
    this.name = "RendererError";
  }
}

export class MermaidRenderingError extends RendererError {
  constructor(message: string, cause?: unknown) {
    super(message, { cause });
    this.name = "MermaidRenderingError";
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// Mermaid CLI Wrapper
// ═══════════════════════════════════════════════════════════════════════════

let _mmdcChecked = false;
let _mmdcAvailable = false;

/**
 * Check if mmdc (mermaid-cli) is available in PATH.
 * Result is cached after the first check.
 */
export async function isMmdcAvailable(): Promise<boolean> {
  if (_mmdcChecked) return _mmdcAvailable;
  try {
    await execa("mmdc", ["--version"]);
    _mmdcAvailable = true;
  } catch {
    _mmdcAvailable = false;
  }
  _mmdcChecked = true;
  return _mmdcAvailable;
}

/**
 * Render a Mermaid diagram source to a PNG image buffer via mermaid-cli.
 */
export async function renderMermaidDiagram(
  mermaidCode: string,
  theme?: MermaidTheme,
  outputPath?: string,
): Promise<Buffer> {
  const tmpDir = join(tmpdir(), `zanbook-mermaid-${randomUUID()}`);
  const inputFile = join(tmpDir, "diagram.mmd");
  const outputFile = outputPath ?? join(tmpDir, "diagram.png");

  try {
    await mkdir(tmpDir, { recursive: true });
    await writeFile(inputFile, mermaidCode, "utf-8");

    const themeArg = theme?.base ?? "default";
    const args = ["-i", inputFile, "-o", outputFile, "-w", "800", "-t", themeArg];

    await execa("mmdc", args);

    return await readFile(outputFile);
  } catch (error) {
    throw new MermaidRenderingError(
      "Failed to render Mermaid diagram. Ensure mermaid-cli is installed:\n" +
        "  npm install -g @mermaid-js/mermaid-cli\n" +
        (error instanceof Error ? `\nError: ${error.message}` : ""),
      error instanceof Error ? error : undefined,
    );
  } finally {
    await rm(tmpDir, { recursive: true, force: true }).catch(() => {
      /* cleanup best-effort */
    });
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// Inline Run Builder
// ═══════════════════════════════════════════════════════════════════════════

interface RunModifiers {
  bold?: boolean;
  italics?: boolean;
  strike?: boolean;
}

/**
 * Build DOCX paragraph children (TextRun / ExternalHyperlink) from
 * inline mdast content nodes, propagating formatting modifiers downward.
 */
function buildInlineChildren(
  nodes: PhrasingContent[],
  modifiers?: RunModifiers,
): (TextRun | ExternalHyperlink)[] {
  const children: (TextRun | ExternalHyperlink)[] = [];
  const mods = modifiers ?? {};

  for (const node of nodes) {
    switch (node.type) {
      case "text":
        children.push(new TextRun({ text: node.value, ...mods }));
        break;

      case "strong":
        children.push(...buildInlineChildren(node.children, { ...mods, bold: true }));
        break;

      case "emphasis":
        children.push(...buildInlineChildren(node.children, { ...mods, italics: true }));
        break;

      case "inlineCode":
        children.push(
          new TextRun({
            text: node.value,
            font: "Courier New",
            ...mods,
          }),
        );
        break;

      case "delete":
        children.push(...buildInlineChildren(node.children, { ...mods, strike: true }));
        break;

      case "break":
        children.push(new TextRun({ break: 1 }));
        break;

      case "link": {
        const linkRuns = buildInlineChildren(node.children, mods);
        children.push(
          new ExternalHyperlink({
            children: linkRuns.filter((c): c is TextRun => c instanceof TextRun),
            link: node.url,
          }),
        );
        break;
      }

      case "image": {
        // Inline images within a paragraph — display alt text
        children.push(
          new TextRun({
            text: node.alt ?? node.url,
            ...mods,
          }),
        );
        break;
      }
    }
  }

  return children;
}

// ═══════════════════════════════════════════════════════════════════════════
// Annotation Helpers
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Find annotations that overlap the given line range (1-based).
 */
function annotationsForLines(
  lineStart: number,
  lineEnd: number,
  annotations: Annotation[],
): Annotation[] {
  return annotations.filter(
    (a) => lineStart <= (a.line_end ?? a.line_start) && lineEnd >= a.line_start,
  );
}

/**
 * Resolve the annotation style name from the mapping.
 */
function annotationStyle(annotation: Annotation, mapping: TemplateMapping): string | undefined {
  switch (annotation.kind) {
    case "quick_check":
      return mapping.annotation_styles?.quick_check;
    case "callout": {
      const type = annotation.metadata?.type;
      if (type === "warning") return mapping.annotation_styles?.callout_warning;
      return mapping.annotation_styles?.callout_note;
    }
    case "mind_map":
      return mapping.annotation_styles?.mind_map;
    case "mermaid":
      return mapping.annotation_styles?.mermaid;
    default:
      return undefined;
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// mdast → DOCX Conversion
// ═══════════════════════════════════════════════════════════════════════════

interface ConversionContext {
  mapping: TemplateMapping;
  annotations: Annotation[];
  mermaidTheme: MermaidTheme;
  mmdcAvailable: boolean;
  /** Map of image path → resolved absolute path */
  imagePaths: Map<string, string>;
}

/**
 * Convert an mdast Root into DOCX Paragraph / Table elements.
 */
async function mdastToDocxChildren(
  root: Root,
  ctx: ConversionContext,
): Promise<(Paragraph | Table)[]> {
  const elements: (Paragraph | Table)[] = [];

  for (const node of root.children) {
    const anns = node.position
      ? annotationsForLines(node.position.start.line, node.position.end.line, ctx.annotations)
      : [];

    // Check for mermaid annotation — render via mmdc
    const mermaidAnn = anns.find((a) => a.kind === "mermaid");
    if (mermaidAnn) {
      // Extract mermaid code from the AST node (code block with language "mermaid")
      const mermaidCode =
        node.type === "code" && (node as { lang?: string | null }).lang === "mermaid"
          ? (node as { value: string }).value
          : (mermaidAnn.metadata?.code ?? "");

      if (mermaidCode && ctx.mmdcAvailable) {
        try {
          const imgBuffer = await renderMermaidDiagram(mermaidCode, ctx.mermaidTheme);
          elements.push(
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new ImageRun({
                  data: imgBuffer,
                  transformation: { width: 600, height: 450 },
                }),
              ],
            }),
          );
        } catch {
          // Fallback: render as code block
          elements.push(
            new Paragraph({
              spacing: { before: 120, after: 120 },
              children: [
                new TextRun({
                  text: mermaidCode,
                  font: "Courier New",
                  size: 20,
                }),
              ],
            }),
          );
        }
      } else if (mermaidCode) {
        // mmdc not available — render as code block
        console.warn("mmdc (mermaid-cli) not available. Rendering mermaid diagram as code block.");
        elements.push(
          new Paragraph({
            spacing: { before: 120, after: 120 },
            children: [
              new TextRun({
                text: `\`\`\`mermaid\n${mermaidCode}\n\`\`\``,
                font: "Courier New",
                size: 20,
              }),
            ],
          }),
        );
      }
      continue;
    }

    const style = anns.length > 0 ? annotationStyle(anns[0]!, ctx.mapping) : undefined;
    const element = await convertBlockNode(node, ctx, style);
    if (element) {
      elements.push(element);
    }
  }

  return elements;
}

/**
 * Convert a single block-level mdast node to a DOCX element.
 */
async function convertBlockNode(
  node: Content,
  ctx: ConversionContext,
  annotationStyleName?: string,
): Promise<Paragraph | Table | null> {
  switch (node.type) {
    case "heading":
      return createHeadingParagraph(node, ctx.mapping, annotationStyleName);

    case "paragraph":
      return createBodyParagraph(node, ctx, annotationStyleName);

    case "code":
      return createCodeParagraph(node, ctx.mapping, annotationStyleName);

    case "blockquote":
      return createBlockquoteParagraph(node, ctx, annotationStyleName);

    case "list":
      return createListParagraphs(node, ctx, annotationStyleName);

    case "table":
      return createTableElement(node, ctx, annotationStyleName);

    case "image":
      return createImageParagraph(node, ctx, annotationStyleName);

    case "thematicBreak":
      return createThematicBreakParagraph();

    case "html":
      // Skip raw HTML nodes
      return null;

    default:
      return null;
  }
}

// ─── Heading ───────────────────────────────────────────────────────────────

function createHeadingParagraph(
  node: Content,
  mapping: TemplateMapping,
  styleName?: string,
): Paragraph {
  const hNode = node as { depth: number; children: PhrasingContent[] };
  const styleKey = `h${Math.min(hNode.depth, 3)}` as "h1" | "h2" | "h3";
  const style = styleName ?? mapping.styles?.[styleKey] ?? `Heading ${hNode.depth}`;

  return new Paragraph({
    style,
    children: buildInlineChildren(hNode.children),
  });
}

// ─── Body Paragraph ────────────────────────────────────────────────────────

function createBodyParagraph(node: Content, ctx: ConversionContext, styleName?: string): Paragraph {
  const pNode = node as { children: PhrasingContent[] };
  const style = styleName ?? ctx.mapping.styles?.body ?? "Body Text";

  return new Paragraph({
    style,
    children: buildInlineChildren(pNode.children),
  });
}

// ─── Code Block ────────────────────────────────────────────────────────────

function createCodeParagraph(
  node: Content,
  mapping: TemplateMapping,
  styleName?: string,
): Paragraph {
  const cNode = node as { value: string };
  const style = styleName ?? mapping.styles?.code ?? "CodeBlock";

  return new Paragraph({
    style,
    spacing: { before: 120, after: 120 },
    children: [
      new TextRun({
        text: cNode.value,
        font: "Courier New",
        size: 20,
      }),
    ],
  });
}

// ─── Blockquote ────────────────────────────────────────────────────────────

function createBlockquoteParagraph(
  node: Content,
  ctx: ConversionContext,
  styleName?: string,
): Paragraph {
  const bqNode = node as { children: Content[] };
  const style = styleName ?? ctx.mapping.styles?.blockquote ?? "Quote";
  const children: (TextRun | ExternalHyperlink)[] = [];

  for (const child of bqNode.children) {
    if (child.type === "paragraph") {
      const pChild = child as { children: PhrasingContent[] };
      children.push(...buildInlineChildren(pChild.children));
    }
  }

  return new Paragraph({ style, children });
}

// ─── Lists ─────────────────────────────────────────────────────────────────

function createListParagraphs(
  node: Content,
  ctx: ConversionContext,
  styleName?: string,
): Paragraph[] {
  const lNode = node as { ordered: boolean | null; children: Content[]; start?: number };
  const style = styleName ?? ctx.mapping.styles?.objectives ?? "List Bullet";
  const paragraphs: Paragraph[] = [];

  for (const item of lNode.children) {
    if (item.type !== "listItem") continue;

    const liNode = item as { children: Content[] };
    const children: (TextRun | ExternalHyperlink)[] = [];

    for (const child of liNode.children) {
      if (child.type === "paragraph") {
        const pChild = child as { children: PhrasingContent[] };
        children.push(...buildInlineChildren(pChild.children));
      }
    }

    const opts: Record<string, unknown> = { style, children };

    if (lNode.ordered) {
      opts.numbering = { reference: "ordered-list", level: 0 };
    } else {
      opts.bullet = { level: 0 };
    }

    paragraphs.push(new Paragraph(opts));
  }

  return paragraphs;
}

// ─── Table ─────────────────────────────────────────────────────────────────

function createTableElement(node: Content, ctx: ConversionContext, styleName?: string): Table {
  const tNode = node as { children: Content[] };
  const rows: TableRow[] = [];
  const headerStyle = styleName ?? ctx.mapping.styles?.table_header ?? "Table Header";
  const cellStyle = styleName ?? ctx.mapping.styles?.table_cell ?? "Table Cell";

  tNode.children.forEach((row, rowIdx) => {
    if (row.type !== "tableRow") return;
    const rNode = row as { children: Content[] };

    const cells: TableCell[] = [];
    for (const cell of rNode.children) {
      if (cell.type !== "tableCell") continue;
      const cNode = cell as { children: PhrasingContent[] };
      const cellChildren = buildInlineChildren(cNode.children);

      cells.push(
        new TableCell({
          children: [
            new Paragraph({
              style: rowIdx === 0 ? headerStyle : cellStyle,
              children: cellChildren,
            }),
          ],
        }),
      );
    }

    rows.push(new TableRow({ children: cells }));
  });

  return new Table({ rows });
}

// ─── Image ─────────────────────────────────────────────────────────────────

async function createImageParagraph(
  node: Content,
  ctx: ConversionContext,
  styleName?: string,
): Promise<Paragraph> {
  const iNode = node as { url: string; alt?: string | null; title?: string | null };
  const captionStyle = styleName ?? ctx.mapping.styles?.image_caption ?? "Caption";
  let imgData: Buffer | null = null;

  // Try to resolve the image path
  const resolvedPath = ctx.imagePaths.get(iNode.url);
  const tryPath = resolvedPath ?? iNode.url;
  try {
    imgData = await readFile(tryPath);
  } catch {
    // Image not found
  }

  if (!imgData) {
    // Fallback: render alt text
    return new Paragraph({
      style: captionStyle,
      children: [new TextRun({ text: iNode.alt ?? iNode.url, italics: true })],
    });
  }

  const children: (TextRun | ImageRun)[] = [
    new ImageRun({
      data: imgData,
      transformation: { width: 400, height: 300 },
    }),
  ];

  if (iNode.alt) {
    children.push(new TextRun({ text: `\n${iNode.alt}`, italics: true, size: 18 }));
  }

  return new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { before: 200, after: 200 },
    children,
  });
}

// ─── Thematic Break ────────────────────────────────────────────────────────

function createThematicBreakParagraph(): Paragraph {
  return new Paragraph({
    spacing: { before: 200, after: 200 },
    border: {
      bottom: {
        style: BorderStyle.SINGLE,
        size: 6,
        color: "999999",
        space: 1,
      },
    },
    children: [],
  });
}

// ═══════════════════════════════════════════════════════════════════════════
// Section Builders
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Create the cover page section.
 */
function createCoverSection(book: Book, mapping: TemplateMapping): ISectionOptions {
  const children: Paragraph[] = [];

  // Spacer paragraphs to push title to vertical center
  children.push(new Paragraph({ spacing: { before: 4000 }, children: [] }));

  // Title
  children.push(
    new Paragraph({
      style: mapping.styles?.h1 ?? "Heading 1",
      alignment: AlignmentType.CENTER,
      children: [new TextRun({ text: book.title, bold: true, size: 56 })],
    }),
  );

  // Subtitle
  if (book.subtitle) {
    children.push(
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 200 },
        children: [new TextRun({ text: book.subtitle, size: 32, color: "555555" })],
      }),
    );
  }

  // Spacing
  children.push(new Paragraph({ spacing: { before: 600 }, children: [] }));

  // Metadata
  const metadataLines: string[] = [];
  if (book.metadata?.author) metadataLines.push(String(book.metadata.author));
  if (book.metadata?.date) metadataLines.push(String(book.metadata.date));
  if (book.total_lessons) metadataLines.push(`${book.total_lessons} aulas`);

  for (const line of metadataLines) {
    children.push(
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 100 },
        children: [new TextRun({ text: line, size: 24, color: "777777" })],
      }),
    );
  }

  return {
    properties: {
      page: {
        margin: { top: 1440, bottom: 1440, left: 1440, right: 1440 },
      },
    },
    children,
  };
}

/**
 * Create the table of contents section.
 */
function createTocSection(book: Book): ISectionOptions {
  const children: Paragraph[] = [];

  children.push(
    new Paragraph({
      style: "Heading 1",
      alignment: AlignmentType.CENTER,
      children: [new TextRun({ text: "Sumário" })],
    }),
  );

  children.push(new Paragraph({ spacing: { before: 400 }, children: [] }));

  for (const lesson of book.lessons) {
    children.push(
      new Paragraph({
        style: "Body Text",
        spacing: { before: 120 },
        children: [
          new TextRun({ text: `Aula ${lesson.number}`, bold: true, size: 22 }),
          new TextRun({ text: `    ${lesson.title}`, size: 22 }),
        ],
      }),
    );

    if (lesson.subtitle) {
      children.push(
        new Paragraph({
          spacing: { before: 40 },
          children: [new TextRun({ text: lesson.subtitle, size: 20, color: "777777" })],
        }),
      );
    }
  }

  return {
    properties: {
      page: {
        margin: { top: 1440, bottom: 1440, left: 1440, right: 1440 },
      },
    },
    children,
  };
}

/**
 * Create a chapter section for a lesson.
 */
async function createChapterSection(
  lesson: Lesson,
  mapping: TemplateMapping,
  ctx: ConversionContext,
): Promise<ISectionOptions> {
  const children: (Paragraph | Table)[] = [];

  // Lesson number and title
  children.push(
    new Paragraph({
      style: mapping.styles?.h1 ?? "Heading 1",
      children: [new TextRun({ text: `Aula ${lesson.number}: ${lesson.title}` })],
    }),
  );

  // Subtitle
  if (lesson.subtitle) {
    children.push(
      new Paragraph({
        style: mapping.styles?.h2 ?? "Heading 2",
        children: [new TextRun({ text: lesson.subtitle })],
      }),
    );
  }

  // Objectives
  if (lesson.objectives.length > 0) {
    children.push(
      new Paragraph({
        spacing: { before: 200, after: 100 },
        children: [new TextRun({ text: "Objetivos", bold: true, size: 24 })],
      }),
    );

    for (const obj of lesson.objectives) {
      children.push(
        new Paragraph({
          style: mapping.styles?.objectives ?? "List Bullet",
          children: [new TextRun({ text: obj })],
        }),
      );
    }
  }

  children.push(new Paragraph({ spacing: { before: 200 }, children: [] }));

  // Parse content_md and convert
  if (lesson.content_md) {
    const processor = unified().use(remarkParse);
    const ast = processor.parse(lesson.content_md) as Root;
    const contentElements = await mdastToDocxChildren(ast, ctx);

    for (const el of contentElements) {
      if (el instanceof Paragraph || el instanceof Table) {
        children.push(el);
      }
    }
  }

  return {
    properties: {
      page: {
        margin: { top: 1440, bottom: 1440, left: 1440, right: 1440 },
      },
    },
    children,
  };
}

/**
 * Create a questions section for a lesson.
 */
async function createQuestionsSection(
  lesson: Lesson,
  mapping: TemplateMapping,
  ctx: ConversionContext,
): Promise<ISectionOptions> {
  const children: (Paragraph | Table)[] = [];

  children.push(
    new Paragraph({
      style: mapping.styles?.questions_title ?? "Heading 2",
      children: [new TextRun({ text: `Questões — Aula ${lesson.number}` })],
    }),
  );

  children.push(new Paragraph({ spacing: { before: 200 }, children: [] }));

  // Parse questions_md and convert
  if (lesson.questions_md) {
    const processor = unified().use(remarkParse);
    const ast = processor.parse(lesson.questions_md) as Root;
    const contentElements = await mdastToDocxChildren(ast, ctx);

    for (const el of contentElements) {
      if (el instanceof Paragraph || el instanceof Table) {
        children.push(el);
      }
    }
  }

  return {
    properties: {
      page: {
        margin: { top: 1440, bottom: 1440, left: 1440, right: 1440 },
      },
    },
    children,
  };
}

// ═══════════════════════════════════════════════════════════════════════════
// Page Size Parsing
// ═══════════════════════════════════════════════════════════════════════════

const PAGE_SIZES: Record<string, { width: number; height: number }> = {
  A4: { width: 11906, height: 16838 },
  A5: { width: 8391, height: 11906 },
  Letter: { width: 12240, height: 15840 },
  Legal: { width: 12240, height: 20160 },
};

function parsePageSize(size: string): { width: number; height: number } {
  return PAGE_SIZES[size] ?? PAGE_SIZES.A4;
}

// ═══════════════════════════════════════════════════════════════════════════
// Public API — renderBook
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Render a Book into a DOCX buffer using the given template mapping.
 */
export async function renderBook(book: Book, mapping: TemplateMapping): Promise<Buffer> {
  const sections: ISectionOptions[] = [];

  const mermaidTheme: MermaidTheme = (book.metadata?.mermaid_theme as MermaidTheme | undefined) ?? {
    base: "default",
  };

  const mmdcAvailable = await isMmdcAvailable();

  // Build image path map — resolve lesson image paths
  const imagePaths = new Map<string, string>();
  for (const lesson of book.lessons) {
    for (const imgPath of lesson.images) {
      if (!imagePaths.has(imgPath)) {
        imagePaths.set(imgPath, imgPath);
      }
    }
  }

  const ctx: ConversionContext = {
    mapping,
    annotations: [],
    mermaidTheme,
    mmdcAvailable,
    imagePaths,
  };

  // Process layout blocks
  for (const block of mapping.layout) {
    switch (block.kind) {
      case "cover": {
        sections.push(createCoverSection(book, mapping));
        break;
      }

      case "toc": {
        sections.push(createTocSection(book));
        break;
      }

      case "chapter": {
        // If source is a specific slug, render that lesson.
        // Otherwise (source === "lesson"), render ALL lessons.
        if (block.source === "lesson") {
          for (const lesson of book.lessons) {
            const chapterCtx: ConversionContext = {
              ...ctx,
              annotations: lesson.annotations,
            };
            sections.push(await createChapterSection(lesson, mapping, chapterCtx));
          }
        } else {
          const lesson = book.lessons.find((l) => l.slug === block.source);
          if (lesson) {
            const chapterCtx: ConversionContext = {
              ...ctx,
              annotations: lesson.annotations,
            };
            sections.push(await createChapterSection(lesson, mapping, chapterCtx));
          }
        }
        break;
      }

      case "questions": {
        if (block.source === "questions") {
          for (const lesson of book.lessons) {
            if (lesson.questions_md) {
              const questionsCtx: ConversionContext = {
                ...ctx,
                annotations: lesson.annotations,
              };
              sections.push(await createQuestionsSection(lesson, mapping, questionsCtx));
            }
          }
        } else {
          const lesson = book.lessons.find((l) => l.slug === block.source);
          if (lesson && lesson.questions_md) {
            const questionsCtx: ConversionContext = {
              ...ctx,
              annotations: lesson.annotations,
            };
            sections.push(await createQuestionsSection(lesson, mapping, questionsCtx));
          }
        }
        break;
      }

      case "appendix": {
        // Appendix not yet implemented — skip
        break;
      }
    }
  }

  if (sections.length === 0) {
    throw new RendererError("No sections were generated from the layout.");
  }

  // Apply page size and margins to all sections
  const pageSize = parsePageSize(mapping.page_size);
  const margins = {
    top: mapping.margins?.top ?? 1440,
    bottom: mapping.margins?.bottom ?? 1440,
    left: mapping.margins?.left ?? 1440,
    right: mapping.margins?.right ?? 1440,
  };

  const configuredSections = sections.map((section) => ({
    ...section,
    properties: {
      ...section.properties,
      page: {
        size: pageSize,
        margin: margins,
      },
    },
  }));

  const doc = new Document({
    sections: configuredSections as unknown as readonly ISectionOptions[],
  });

  return await Packer.toBuffer(doc);
}

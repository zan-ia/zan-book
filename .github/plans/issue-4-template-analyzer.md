# Implementation Plan — Issue #4: DOCX Template Analyzer

**Issue:** [#4](https://github.com/zan-ia/zan-book/issues/4) — DOCX Template Analyzer
**Type:** feature
**Complexity:** medium
**Date:** 2026-07-16
**Branch:** `feat/template-analyzer` (already created)

---

## 1. Summary

Implement `src/analyzer.ts` with two modes: an **auto mode** that reads a DOCX file's named styles via JSZip + XML parsing and applies heuristics to produce a `TemplateMapping`, and an **AI mode** that renders DOCX pages to images via LibreOffice, sends them to an LLM Vision API, and returns AI-suggested mappings. The `src/llm.ts` provider gets a new vision method, the CLI `template add` command is wired to the analyzer, and a sample `.docx` template is added to `templates/`.

---

## 2. Files to Modify/Create

| File | Action | Description |
|------|--------|-------------|
| `src/analyzer.ts` | **MODIFY** | Full implementation with two modes: heuristic + AI vision |
| `src/llm.ts` | **MODIFY** | Add `analyzeTemplateImages()` vision method to provider interface + both implementations |
| `src/contracts.ts` | **MODIFY** | Minor: add `AnnotationStyleKind` enum for type-safe annotation style keys |
| `src/cli.ts` | **MODIFY** | Wire `template add` command to call analyzer and save mapping JSON |
| `src/index.ts` | **CHECK** | Verify exports; add `AnnotationStyleKind` if created in contracts |
| `templates/` | **CREATE** | Add a minimal sample `.docx` with named styles for testing |
| `package.json` | **MODIFY** | Add `fast-xml-parser` dependency for XML parsing |

---

## 3. Patterns to Follow

### Error Classes (from `src/llm.ts`)
Define specific error classes (`AnalyzerError`, `DocxParsingError`, `VisionAnalysisError`) extending `Error` with descriptive names — same pattern as `LlmConfigurationError` and `LlmExtractionError`.

### Provider Pattern (from `src/llm.ts`)
Add the vision method to the `LlmProvider` interface so both OpenAI and Anthropic providers can implement it. Follow the existing pattern:
- Interface method → implementation in each provider class
- Retry/backoff via `withRetry()`
- Structured output (OpenAI: `json_schema`, Anthropic: tool calling)

### Config Loading (from `src/extractor.ts`)
Use the same `loadConfig()` pattern to read `zanbook.config.json` for default margins, page size, and tool paths (e.g., `libreoffice`).

### Async File I/O (from `src/extractor.ts`)
Use `node:fs/promises` for all file operations. Follow the existing read/write patterns.

### ESM + NodeNext Conventions
- All imports use `.js` extensions
- `import`/`export` syntax only
- Type imports via `import type`

---

## 4. Implementation Order

### Step 1 — Contracts: Add `AnnotationStyleKind` enum

**File:** `src/contracts.ts`

Add an enum for the known annotation style keys to provide type safety:

```typescript
export const AnnotationStyleKind = z.enum([
  "quick_check",
  "callout_note",
  "callout_warning",
  "mind_map",
  "mermaid",
]);
export type AnnotationStyleKind = z.infer<typeof AnnotationStyleKind>;
```

No changes to `TemplateMappingSchema` itself — the `z.record(z.string()).default(...)` already handles validation. The enum just provides a named type for the analyzer to reference.

### Step 2 — Install `fast-xml-parser` dependency

```bash
npm install fast-xml-parser
```

The `docx` npm package is write-oriented (creating documents). For reading existing DOCX files, we need to parse the ZIP structure and XML files directly. `fast-xml-parser` is the lightest robust option.

### Step 3 — Implement `src/analyzer.ts` (Mode 1 — Auto)

#### 3a. DOCX ZIP Reading Utility

Create internal helpers:

```typescript
import { readFile } from "node:fs/promises";
import JSZip from "jszip"; // docx ships with jszip
import { XMLParser } from "fast-xml-parser";

interface DocxStyles {
  paragraphStyles: { id: string; name: string }[];
  characterStyles: { id: string; name: string }[];
}

interface DocxPageLayout {
  pageSize: { width: number; height: number };
  margins: { top: number; bottom: number; left: number; right: number };
}
```

**Function: `readDocxStyles(buffer: Buffer): Promise<DocxStyles>`**

1. Load ZIP via `JSZip.loadAsync(buffer)`
2. Read `word/styles.xml` from the ZIP
3. Parse XML with `XMLParser`
4. Extract `<w:style>` elements where `w:type="paragraph"` and `w:type="character"`
5. Return arrays of `{ id, name }` objects

O'xml structure of interest:
```xml
<w:styles>
  <w:style w:type="paragraph" w:styleId="Heading1">
    <w:name w:val="Heading 1"/>
  </w:style>
</w:styles>
```

**Function: `readDocxPageLayout(buffer: Buffer): Promise<DocxPageLayout | null>`**

1. Read `word/document.xml` from ZIP
2. Parse XML
3. Navigate to `w:sectPr` → `w:pgSz` (width/height) and `w:pgMar` (margins)
4. Return page layout or null if not found

Note: All measurements in EMU (English Metric Units). Convert to mm:
- `mm = emu / 36000`
- `width > height` → landscape, return standard page size name

#### 3b. Page Size Detection

Create a utility that converts EMU dimensions to a human-readable page size name:

```typescript
function detectPageSize(widthEmu: number, heightEmu: number): string {
  // Standard sizes in EMU (points * 12700 = EMU, then * ?)
  // A4: 210mm × 297mm → 11906 × 16838 twips → ...
  // Letter: 215.9mm × 279.4mm
  // Match against known standards with tolerance
}
```

Store the mapping table with common sizes: A4, A3, A5, Letter, Legal, Tabloid.

#### 3c. Heuristic Mapping

**Function: `applyHeuristics(styles: DocxStyles): TemplateMapping["styles"]`**

Rules (in priority order):

| Pattern (case-insensitive contains) | Mapping key |
|--------------------------------------|-------------|
| `"heading 1"` or `"heading1"` or `"título 1"` | `h1` |
| `"heading 2"` or `"heading2"` or `"título 2"` | `h2` |
| `"heading 3"` or `"heading3"` or `"título 3"` | `h3` |
| `"body"` or `"normal"` or `"paragraph"` or `"corpo"` | `body` |
| `"code"` or `"source"` or `"monospace"` or `"código"` | `code` |
| `"quote"` or `"blockquote"` or `"block quote"` or `"citação"` | `blockquote` |
| `"caption"` or `"legenda"` or `"image caption"` | `image_caption` |
| `"list"` or `"bullet"` or `"lista"` | `objectives` |
| `"table header"` or `"tableheading"` or `"cabeçalho"` | `table_header` |
| `"table cell"` or `"tabletext"` or `"célula"` | `table_cell` |
| `"title"` or `"título"` or `"Titulo"` | `h1` (fallback) |

Add `questions_title` and `questions_body` to defaults if not matched.

**Function: `applyAnnotationHeuristics(styles: DocxStyles): TemplateMapping["annotation_styles"]`**

| Pattern | Mapping key |
|---------|-------------|
| `"callout"` or `"note"` or `"nota"` | `callout_note` |
| `"warning"` or `"aviso"` | `callout_warning` |
| `"quick"` or `"check"` or `"checklist"` | `quick_check` |
| `"image"` or `"figure"` or `"figura"` or `"center"` | `mind_map` (and `mermaid`) |

If annotation styles are not found, use the `default()` values from the schema.

#### 3d. `analyzeTemplate()` Implementation

```typescript
export async function analyzeTemplate(docxPath: string): Promise<TemplateMapping> {
  // 1. Read file
  const buffer = await readFile(docxPath);
  
  // 2. Parse styles
  const styles = await readDocxStyles(buffer);
  
  // 3. Apply heuristics
  const styleMapping = applyHeuristics(styles);
  const annotationMapping = applyAnnotationHeuristics(styles);
  
  // 4. Detect page layout
  const layout = await readDocxPageLayout(buffer);
  const pageSize = layout ? detectPageSize(layout.pageSize.width, layout.pageSize.height) : "A4";
  const margins = layout ? layout.margins : {};
  
  // 5. If no named paragraph styles found, recommend --ai mode
  if (styles.paragraphStyles.length === 0) {
    console.warn("No named paragraph styles found in DOCX. Consider using --ai mode for Vision-based analysis.");
  }
  
  // 6. Return validated TemplateMapping
  return TemplateMappingSchema.parse({
    id: basename(docxPath, ".docx"),
    name: basename(docxPath, ".docx"),
    docx_path: docxPath,
    layout: defaultLayout(), // cover, toc, chapter, questions, appendix
    styles: styleMapping,
    annotation_styles: annotationMapping,
    page_size: pageSize,
    margins: convertMarginsToMm(margins),
  }) as TemplateMapping;
}
```

### Step 4 — Add Vision Method to `src/llm.ts`

#### 4a. Extend `LlmProvider` interface

Add to the `LlmProvider` interface:

```typescript
export interface TemplateSuggestion {
  styles: Record<string, string>;
  annotation_styles: Record<string, string>;
  confidence: "high" | "medium" | "low";
  rationale: string;
}

export interface LlmProvider {
  // ...existing methods...
  
  /**
   * Analyze DOCX page images via LLM Vision to suggest style mappings.
   * 
   * @param images - Array of page images as PNG buffers
   * @param docxPath - Path to the original DOCX (for metadata)
   * @returns Suggested style mappings based on visual analysis
   */
  analyzeTemplateImages(
    images: Buffer[],
    docxPath: string,
  ): Promise<TemplateSuggestion>;
}
```

#### 4b. Vision Prompt

Create a system prompt for template vision analysis:

```typescript
const VISION_SYSTEM_PROMPT = `You are a DOCX template analyst. You will receive images of pages from a Word document template. Your task is to identify the visual styles used in the document and suggest how they should map to markdown elements.

For each distinct visual style you see (heading levels, body text, code blocks, quotes, etc.), note:
1. The apparent style name (if visible in the style gallery or identifiable from formatting)
2. The visual characteristics (font, size, color, spacing, indentation)
3. What markdown element it likely corresponds to

Return a JSON object with:
- "styles": object mapping markdown elements ("h1", "h2", "h3", "body", "code", "blockquote", "table_header", "table_cell", "image_caption", "objectives", "questions_title", "questions_body") to the DOCX style name or description
- "annotation_styles": object mapping annotation keys ("quick_check", "callout_note", "callout_warning", "mind_map", "mermaid") to DOCX style names
- "confidence": one of "high", "medium", "low"
- "rationale": a brief explanation of your suggestions

Focus on the FIRST page and any page that shows distinct formatting.`;
```

#### 4c. Image Conversion Utility

Create a helper that converts DOCX pages to images using LibreOffice:

```typescript
import { execa } from "execa";
import { tmpdir } from "node:os";
import { mkdtemp, readdir, cp } from "node:fs/promises";
import { join } from "node:path";

async function convertDocxToImages(docxPath: string): Promise<Buffer[]> {
  const tmpDir = await mkdtemp(join(tmpdir(), "zanbook-"));
  
  // Step 1: Convert DOCX → PDF (LibreOffice)
  await execa("libreoffice", [
    "--headless",
    "--convert-to", "pdf",
    "--outdir", tmpDir,
    docxPath,
  ]);
  
  // Step 2: Convert PDF → PNG images (one per page)
  // Use `pdftoppm` (poppler-utils) or `gs` (ghostscript)
  const pdfFile = join(tmpDir, basename(docxPath, ".docx") + ".pdf");
  await execa("pdftoppm", [
    "-png",
    "-r", "150", // 150 DPI
    pdfFile,
    join(tmpDir, "page"),
  ]);
  
  // Step 3: Read all page images
  const files = await readdir(tmpDir);
  const pageFiles = files
    .filter(f => f.startsWith("page-") && f.endsWith(".png"))
    .sort();
  
  const images: Buffer[] = [];
  for (const file of pageFiles) {
    const buffer = await readFile(join(tmpDir, file));
    images.push(buffer);
  }
  
  // Note: tmpDir cleanup is caller's responsibility
  return images;
}
```

#### 4d. OpenAI Vision Implementation

```typescript
async analyzeTemplateImages(images: Buffer[], docxPath: string): Promise<TemplateSuggestion> {
  return withRetry(async () => {
    const imageContent: OpenAI.Chat.ChatContentPart[] = images.slice(0, 3).map((img) => ({
      type: "image_url" as const,
      image_url: {
        url: `data:image/png;base64,${img.toString("base64")}`,
        detail: "high" as const,
      },
    }));
    
    // Add text instruction before images
    const content: OpenAI.Chat.ChatCompletionContentPart[] = [
      { type: "text", text: `Analyze this DOCX template from "${docxPath}" and suggest style mappings.` },
      ...imageContent,
    ];
    
    const response = await this.client.chat.completions.create({
      model: this.config.model,
      messages: [
        { role: "system", content: VISION_SYSTEM_PROMPT },
        { role: "user", content },
      ],
      temperature: this.config.temperature,
      response_format: { type: "json_object" },
    });
    
    const result = response.choices[0]?.message?.content;
    if (!result) throw new LlmExtractionError("OpenAI Vision returned empty response");
    
    return JSON.parse(result) as TemplateSuggestion;
  }, this.config.maxRetries);
}
```

#### 4e. Anthropic Vision Implementation

Similar approach using Anthropic's vision API with `claude-3` models:

```typescript
async analyzeTemplateImages(images: Buffer[], docxPath: string): Promise<TemplateSuggestion> {
  return withRetry(async () => {
    const content: Anthropic.ContentBlockParam[] = [
      { type: "text", text: `Analyze this DOCX template from "${docxPath}" and suggest style mappings.` },
      ...images.slice(0, 3).map((img) => ({
        type: "image" as const,
        source: {
          type: "base64" as const,
          media_type: "image/png" as const,
          data: img.toString("base64"),
        },
      })),
    ];
    
    const response = await this.client.messages.create({
      model: this.config.model, // e.g., "claude-3-5-sonnet-20241022"
      max_tokens: 4096,
      system: VISION_SYSTEM_PROMPT,
      messages: [{ role: "user", content }],
      temperature: this.config.temperature,
    });
    
    // Parse text response as JSON
    const textBlock = response.content.find(b => b.type === "text");
    if (!textBlock) throw new LlmExtractionError("Anthropic Vision returned no text");
    
    // Extract JSON from markdown code block if present
    const jsonMatch = textBlock.text.match(/```(?:json)?\s*([\s\S]*?)```/);
    const jsonStr = jsonMatch?.[1] ?? textBlock.text;
    return JSON.parse(jsonStr) as TemplateSuggestion;
  }, this.config.maxRetries);
}
```

### Step 5 — Wire up CLI `template add` command

**File:** `src/cli.ts`

Modify the `template add` command handler to:

1. Validate that the file exists and has `.docx` extension
2. If `--ai` flag: call `analyzeTemplateWithAI(docxPath)` 
3. If no `--ai`: call `analyzeTemplate(docxPath)`
4. Save the resulting `TemplateMapping` as JSON:
   - File: `templates/{name}-mapping.json`
5. Print summary with chalk

```typescript
.action(async (options) => {
  const { analyzeTemplate, analyzeTemplateWithAI } = await import("./analyzer.js");
  
  const docxPath = resolve(options.file);
  
  // Validate
  if (!docxPath.endsWith(".docx")) {
    console.error(chalk.red("Error: File must have .docx extension"));
    process.exit(1);
  }
  
  console.log(chalk.blue("🔍 Analyzing template..."));
  
  const mapping = options.ai
    ? await analyzeTemplateWithAI(docxPath)
    : await analyzeTemplate(docxPath);
  
  // Save mapping
  const mappingPath = join(
    dirname(docxPath),
    `${basename(docxPath, ".docx")}-mapping.json`,
  );
  await writeFile(mappingPath, JSON.stringify(mapping, null, 2), "utf-8");
  
  console.log(chalk.green(`✅ Template mapping saved to: ${mappingPath}`));
  console.log(chalk.dim(`  Styles mapped: ${Object.keys(mapping.styles).length}`));
  console.log(chalk.dim(`  Page size: ${mapping.page_size}`));
});
```

### Step 6 — Create sample DOCX template

**File:** `templates/sample-template.docx`

Create a minimal `.docx` with named styles. Since we can't create a binary DOCX directly, the implementer should create it programmatically using the `docx` package in a one-off script, or create a minimal DOCX with these styles:

| Style Name | Type | Purpose |
|-----------|------|---------|
| Heading 1 | Paragraph | Chapter titles |
| Heading 2 | Paragraph | Section titles |
| Heading 3 | Paragraph | Subsection titles |
| Body Text | Paragraph | Main content |
| CodeBlock | Paragraph | Code snippets |
| Quote | Paragraph | Blockquotes |
| Caption | Paragraph | Image captions |
| List Bullet | Paragraph | Bullet lists |
| Callout | Paragraph | Pedagogical callouts |

### Step 7 — Update exports in `src/index.ts`

Add any new types exported from contracts or llm (e.g., `AnnotationStyleKind`, `TemplateSuggestion`).

### Step 8 — Run project build/lint

```bash
npm run typecheck && npm run lint
```

---

## 5. Identified Risks

| Risk | Impact | Mitigation |
|------|--------|------------|
| **DOCX parsing with JSZip** — the docx package is write-oriented; reading requires manual ZIP+XML parsing | Medium | Use `fast-xml-parser` for robust XML parsing. The ZIP structure of DOCX is standardized (OOXML). |
| **LibreOffice not installed** — Mode 2 requires LibreOffice headless | High | Check availability before use with `which libreoffice`. Fall back gracefully with clear error message suggesting installation. Consider also supporting `soffice` binary. |
| **`pdftoppm` not available** — PDF-to-image conversion needs poppler-utils | Medium | Wrap in try/catch, check with `which pdftoppm`. Alternative: use `gs` (ghostscript) or `mutool` (mupdf). |
| **LLM Vision cost/latency** — Sending multiple page images to LLM | Medium | Limit to first 3 pages. Add page count warning for documents > 5 pages. Use gpt-4o-mini by default (cheaper). |
| **Heuristic false positives** — style name may match wrong mapping key | Low | Always show mapping for user review before saving. Document override mechanism via manual JSON edit. |
| **Empty style list** — DOCX has only inline formatting, no named styles | Low | Detect and recommend `--ai` mode with clear message. |

---

## 6. Post-Implementation Verification

- [ ] `npm run typecheck` passes without errors
- [ ] `npm run lint` passes without errors
- [ ] `analyzeTemplate()` correctly reads styles from a sample DOCX
- [ ] Heuristic mapping produces reasonable defaults for standard style names
- [ ] Page size/margins are correctly extracted from section properties
- [ ] `analyzeTemplateWithAI()` invokes LLM Vision (requires API key)
- [ ] `zanbook template add --file template.docx` saves mapping JSON
- [ ] `zanbook template add --file template.docx --ai` works with API key
- [ ] Clean error messages when tools (LibreOffice, pdftoppm) are missing
- [ ] Edge case: DOCX with no named styles → recommends `--ai` mode
- [ ] Edge case: DOCX with only inline formatting → still produces a mapping with defaults

---

## 7. References

- Issue: [#4](https://github.com/zan-ia/zan-book/issues/4)
- README: Template System section (lines ~200-300)
- Contracts: `src/contracts.ts` — `TemplateMappingSchema`, `LayoutBlockSchema`
- LLM Provider Pattern: `src/llm.ts` — `LlmProvider` interface, `OpenAiLlmProvider`, `AnthropicLlmProvider`
- Config Loading: `src/extractor.ts` — `loadConfig()` function
- npm docx package: `/dolanmiu/docx` (write-oriented, use JSZip internally for reading)
- Instructions: none from `.github/instructions/` directly apply to `src/**` (the project-organization file is for SvelteKit, not this TS library)

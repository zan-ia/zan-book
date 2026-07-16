# Implementation Plan — Issue #5: DOCX Renderer

**Date:** 2026-07-16
**Type:** feature
**Complexity:** High
**Branch:** `feat/docx-renderer`

---

## 1. Approach Summary

Implement the heart of the system: a renderer that takes a validated `Book` (from the extractor) and a `TemplateMapping` (from the analyzer) and produces a professional `.docx` file. The renderer will parse each lesson's `content_md` via unified/remark into an mdast AST, traverse it converting nodes to `docx` package elements (Paragraphs, Tables, ImageRuns, etc.), apply named styles from the mapping, handle semantic annotations (callouts, mermaid diagrams), render Mermaid diagrams via `mmdc` (mermaid-cli) through execa, and assemble everything into layout-defined sections (cover, TOC, chapters, questions, appendix). The result is a `Buffer` ready for disk or PDF conversion.

---

## 2. Files to Modify

| File | Action | Description |
| ---- | ------ | ----------- |
| `src/renderer.ts` | MODIFY | Core renderer implementation: `renderBook()` + `renderMermaidDiagram()` + all internal helpers |
| `src/cli.ts` | MODIFY | Wire up the `generate` command to call `renderBook()` and write output |
| `src/index.ts` | MODIFY | Export any new public symbols from the renderer module |

No new files are needed — the renderer is self-contained in the existing module.

---

## 3. Patterns to Follow

- **Conventions (`.github/instructions/`):** `tool-usage.instructions.md` applies to `src/**`. The project uses ESM (`"type": "module"`), NodeNext module resolution, `.js` extension in imports.
- **Reference — `src/analyzer.ts`:** Uses custom `Error` subclasses (`AnalyzerError`, `DocxParsingError`) — the renderer should follow the same pattern with `RendererError` / `MermaidRenderingError`.
- **Reference — `src/extractor.ts`:** Uses `unified` + `remark-parse` + `remark-frontmatter` to parse markdown. The renderer will use the same stack but without frontmatter (already extracted) and without remark-stringify (no need to serialize back).
- **Reference — `src/cache.ts`:** `CacheManager` class with `get<T>()` / `set<T>()` — the renderer can optionally cache rendered DOCX buffers by book hash.
- **Imports:** ESM with `.js` extensions — `import { unified } from "unified"; import type { Root } from "mdast";`
- **Error handling:** Async functions with typed errors. Use `execa` for CLI subprocess calls.
- **Types:** Import inferred types from `./contracts.js` — never redefine them.

---

## 4. Implementation Order

### Step 1: Implement `renderMermaidDiagram()` — Mermaid CLI wrapper

**File:** `src/renderer.ts`

```
renderMermaidDiagram(mermaidCode: string, outputPath?: string): Promise<Buffer>
```

Flow:
1. Create a temp directory under the system tmp or `cache/mermaid/`
2. Write `mermaidCode` to `{tmpDir}/diagram-{hash}.mmd`
3. Build theme flags from `mapping.mermaid_theme` if provided (e.g. `-t dark`)
4. Execute `mmdc -i {input} -o {output} -t {theme} -w 800` via `execa()`
5. Read the generated PNG into a `Buffer`
6. Clean up temp files
7. Return the buffer

**Error handling:** Wrap execa in try/catch, throw `MermaidRenderingError` if `mmdc` is not found or rendering fails. Provide clear message suggesting `npm install -g @mermaid-js/mermaid-cli`.

### Step 2: Implement AST traversal helpers

**File:** `src/renderer.ts`

Create internal functions:

| Function | Purpose |
| -------- | ------- |
| `mdastToDocx(node: mdast.Root, mapping, doc)` | Top-level dispatcher — iterate children of Root, route to specialized handlers |
| `visitHeading(node, mapping, doc, section)` | `heading[depth=1|2|3]` → `Paragraph({ style: mapping.styles["hX"] })` |
| `visitParagraph(node, mapping, doc, section)` | `paragraph` → `Paragraph({ style: mapping.styles["body"], children: runs })` |
| `visitText(node, mapping)` | `text` → `Run({ text })` |
| `visitInlineCode(node)` | `inlineCode` → `Run({ text, font: "Courier New" })` |
| `visitStrong(node)` | `strong` → Run with `bold: true` |
| `visitEmphasis(node)` | `emphasis` → Run with `italics: true` |
| `visitList(node, mapping, doc, section)` | `list` → Paragraphs with `bullet: { level }` or `numbering` |
| `visitTable(node, mapping, doc, section)` | `table` → `Table({ rows, columns })` with header/cell styles |
| `visitCode(node, mapping, doc, section)` | `code` → `Paragraph({ style: mapping.styles["code"], children: [Run({ text, font: monospace })] })` |
| `visitBlockquote(node, mapping, doc, section)` | `blockquote` → `Paragraph({ style: mapping.styles["blockquote"] })` |
| `visitImage(node, mapping, doc, section)` | `image` → Paragraph + `ImageRun` with caption |
| `visitThematicBreak(node, mapping, doc, section)` | `thematicBreak` → Paragraph with bottom border |
| `visitLink(node, mapping, doc, section)` | `link` → Run with `hyperlink` option |
| `convertMdastChildren(children, mapping, context)` | Recursive run builder — handles inline nodes (text, strong, emphasis, inlineCode, link) |

**Inline run builder pattern:**
```typescript
function buildRuns(nodes: mdast.PhrasingContent[], mapping: TemplateMapping): docx.IRunOptions[] {
  const runs: docx.IRunOptions[] = [];
  for (const node of nodes) {
    switch (node.type) {
      case "text":
        runs.push({ text: node.value });
        break;
      case "strong":
        runs.push(...buildRuns(node.children, mapping).map(r => ({ ...r, bold: true })));
        break;
      case "emphasis":
        runs.push(...buildRuns(node.children, mapping).map(r => ({ ...r, italics: true })));
        break;
      case "inlineCode":
        runs.push({ text: node.value, font: { name: "Courier New" } });
        break;
      case "link":
        // Text runs with hyperlink option
        break;
    }
  }
  return runs;
}
```

### Step 3: Implement annotation handling

**File:** `src/renderer.ts`

Annotations (`Lesson.annotations[]`) use `line_start`/`line_end` to identify line ranges in `content_md`. The renderer needs to:

1. Split `content_md` by lines
2. For each annotation, extract the content lines and render them with the annotation style
3. For `callout` annotations, write as Paragraph with `mapping.annotation_styles["callout_note" | "callout_warning"]`
4. For `quick_check`, use `mapping.annotation_styles["quick_check"]`
5. For `mind_map`, extract the description, render as styled paragraph + optional image
6. For `mermaid`, pass the code block content to `renderMermaidDiagram()`, then insert as ImageRun

**Strategy:** Merge annotations into the AST traversal by checking if a given AST node's position (if available) falls within an annotated range. For mermaid/code-block level annotations, the annotations override the default code rendering.

### Step 4: Implement layout processing

**File:** `src/renderer.ts`

```
renderBook(book: Book, mapping: TemplateMapping): Promise<Buffer>
```

Flow:

```
for each block in mapping.layout:
  switch block.kind:
    "cover"     → createCoverSection(book, mapping)
    "toc"       → createTocSection(book, mapping)
    "chapter"   → createChapterSection(lesson, mapping)
    "questions" → createQuestionsSection(lesson, mapping)
    "appendix"  → createAppendixSection(block, mapping)

Combine sections into docx.Document with page config
Return docx.Packer.toBuffer(document)
```

**`createCoverSection(book, mapping)`**:
- Page break before (unless first)
- Centered alignment
- Book title as Heading 1 style
- Subtitle as normal text
- Metadata lines (author, date, etc.) from `book.metadata`

**`createTocSection(book, mapping)`**:
- Page break
- "Table of Contents" as heading
- List of lesson titles with page number placeholders
- Note: Word TOC fields (`<w:instrText>` = `TOC \o "1-3"`) can be inserted for auto-generation when the user opens in Word

**`createChapterSection(lesson, mapping)`**:
- Page break
- Lesson title (h1 style)
- Lesson subtitle (h2 style)
- Objectives list (objectives style)
- Rendered `content_md` with AST traversal
- Handle annotations inline

**`createQuestionsSection(lesson, mapping)`**:
- Page break
- "Questions" heading (h2 style)
- Rendered `questions_md` with AST traversal

### Step 5: Wire up the CLI generate command

**File:** `src/cli.ts`

Modify the `generate` command handler:
1. Read the book JSON from `-d` / `--data` path
2. Find the template mapping by `-t` / `--template` name (look in `templates/` directory)
3. Call `renderBook(book, mapping)`
4. Write the buffer to `-o` / `--output` path (or default `output/{book.id}.docx`)
5. Log success with file size

### Step 6: Update exports in index.ts

**File:** `src/index.ts`

Export `renderBook` and `renderMermaidDiagram` for the public API if not already exported.

---

## 5. AST Node → DOCX Element Mapping Table

| mdast Node Type | Properties Used | DOCX Element | Style / Formatting |
| --------------- | --------------- | ------------ | ------------------ |
| `heading` | `depth` (1-3), `children` | `Paragraph` | `mapping.styles["h1"\|"h2"\|"h3"]` |
| `paragraph` | `children` | `Paragraph` | `mapping.styles["body"]` |
| `text` | `value` | `Run` | Default paragraph font |
| `inlineCode` | `value` | `Run` | `font: { name: "Courier New" }` |
| `strong` | `children` | `Run` | `bold: true` |
| `emphasis` | `children` | `Run` | `italics: true` |
| `list` (ordered) | `start`, `children` | `Paragraph[]` | `mapping.styles["objectives"]` + numbering |
| `list` (unordered) | `children` | `Paragraph[]` | `mapping.styles["objectives"]` + bullets |
| `listItem` | `children` | `Paragraph` (per item) | Inherits list style |
| `table` | `children`, `align` | `Table` | Header: `mapping.styles["table_header"]`, Cells: `mapping.styles["table_cell"]` |
| `tableRow` | `children` | `TableRow` | — |
| `tableCell` | `children` | `TableCell` | — |
| `code` | `lang`, `value` | `Paragraph` | `mapping.styles["code"]`, `font: { name: "Courier New" }` |
| `blockquote` | `children` | `Paragraph` | `mapping.styles["blockquote"]` |
| `image` | `url`, `alt`, `title` | `Paragraph` + `ImageRun` | `mapping.styles["image_caption"]` |
| `thematicBreak` | — | `Paragraph` | Bottom border, spacing |
| `link` | `url`, `children` | `Run` + `Hyperlink` | Default, blue |
| `delete` | `children` | `Run` | `strike: true` |
| `break` | — | `Run` | `break: 1` |

---

## 6. Mermaid Rendering Flow

```
renderMermaidDiagram(code, outputPath?)
  │
  ├─ 1. Create temp dir:  cache/mermaid/{uuid}/
  ├─ 2. Write code →      diagram-{hash}.mmd
  ├─ 3. Build theme:      -t {mapping.mermaid_theme?.base ?? "default"}
  ├─ 4. Execute:          mmdc -i .mmd -o .png -w 800 -t {theme}
  │                        └─ via execa()
  ├─ 5. Read PNG →        Buffer
  ├─ 6. Cleanup:          rm temp files
  └─ 7. Return            Buffer
```

**Dependencies:**
- `mermaid-cli` (`mmdc`) must be installed globally or in the project
- Runtime check: `await execa("mmdc", ["--version"])` before first use, cache result
- If `mmdc` is unavailable, throw `MermaidRenderingError` with install instructions

**Error handling:** Wrap in try/catch. On failure, optionally fall back to rendering the mermaid source as a styled code block.

---

## 7. Identified Risks

| Risk | Likelihood | Mitigation |
| ---- | ---------- | ---------- |
| `mermaid-cli` (`mmdc`) not installed | Medium | Check availability at startup; throw clear error with `npm install -g @mermaid-js/mermaid-cli` instructions. Optionally fall back to rendering mermaid code as styled text. |
| DOCX file bloat from embedded images (mermaid + lesson images) | Medium | Optimize mermaid output width (800px). Consider JPEG compression for large images. The `docx` package handles image embedding natively through `ImageRun`. |
| Style name mismatches between mapping and actual DOCX template | Low | The mapping comes from the analyzer which reads actual style names. If a style is missing, `docx` silently uses default — acceptable degradation. |
| Off-by-one errors in annotation line ranges matching AST positions | Medium | Annotations use 1-based line numbers matching `content_md` lines. AST nodes from remark have `position.start.line` (1-based). Validate alignment in the first book test. |
| Very large books causing OOM | Low | Process lessons sequentially, not in parallel. If needed, add streaming section writing. |
| `docx` package v8 API changes | Low | Lock to `^8.5.0`. Major API changes between v7→v8 (sections vs headers). Verify with the installed version. |

---

## 8. Key Function Signatures

```typescript
// ─── Public API ───────────────────────────────────────────────────────────

/** Render a Book into a DOCX buffer using the given template mapping. */
export async function renderBook(book: Book, mapping: TemplateMapping): Promise<Buffer>

/** Render a Mermaid diagram string to an image buffer via mermaid-cli. */
export async function renderMermaidDiagram(
  mermaidCode: string,
  theme?: MermaidTheme,
  outputPath?: string,
): Promise<Buffer>

// ─── Internal Helpers ─────────────────────────────────────────────────────

/** Create a DOCX section for a cover page. */
function createCoverSection(book: Book, mapping: TemplateMapping): docx.ISectionOptions

/** Create a DOCX section for a table of contents. */
function createTocSection(book: Book): docx.ISectionOptions

/** Create a DOCX section for a lesson chapter (title + subtitle + objectives + content). */
function createChapterSection(lesson: Lesson, mapping: TemplateMapping): Promise<docx.ISectionOptions>

/** Create a DOCX section for lesson questions. */
function createQuestionsSection(lesson: Lesson, mapping: TemplateMapping): Promise<docx.ISectionOptions>

/** Convert an mdast Root node into DOCX children (Paragraphs, Tables, etc.). */
async function mdastToDocxChildren(
  root: mdast.Root,
  mapping: TemplateMapping,
  annotations: Annotation[],
): Promise<docx.Paragraph[]>

/** Build DOCX runs from inline mdast content nodes (text, strong, emphasis, inlineCode, link). */
function buildRuns(nodes: mdast.PhrasingContent[], mapping: TemplateMapping): docx.IRunOptions[]

/** Check if an mmdc is available in PATH; cache result. */
async function isMmdcAvailable(): Promise<boolean>

// ─── Custom Errors ────────────────────────────────────────────────────────

export class RendererError extends Error { name = "RendererError" }
export class MermaidRenderingError extends RendererError { name = "MermaidRenderingError" }
```

---

## 9. Acceptance Criteria

- [ ] `renderBook()` produces a valid `.docx` buffer for a real Book (e.g. `curso-banco-de-dados-sql`)
- [ ] All markdown heading levels (h1-h3) map to correct DOCX named styles
- [ ] Paragraphs, bold, italic, inline code, and links render correctly
- [ ] Ordered and unordered lists render with proper bullet/numbering styles
- [ ] Code blocks render with code style and monospace font
- [ ] Blockquotes render with blockquote style
- [ ] Tables render with header/cell styles
- [ ] Images from lesson `images/` directories are embedded
- [ ] Mermaid diagrams render as images (requires `mmdc` installed) with graceful fallback
- [ ] Semantic annotations (quick_check, callout note/warning) apply correct styles
- [ ] Layout blocks (cover, toc, chapter, questions, appendix) produce correctly ordered sections
- [ ] Page breaks inserted between sections per `LayoutBlock.page_break`
- [ ] Page size and margins from `mapping.page_size` / `mapping.margins` are applied
- [ ] `renderMermaidDiagram()` produces a valid PNG buffer; cleans up temp files
- [ ] Custom errors (`RendererError`, `MermaidRenderingError`) are thrown on failures
- [ ] CLI `generate` command successfully calls `renderBook()` and writes output file
- [ ] Project build/lint passes without errors (`npm run build && npm run lint`)
- [ ] Changes consistent with existing patterns (ESM imports, zod types, async/await, custom errors)

---

## 10. References

- Issue: [#5](https://github.com/zan-ia/zan-book/issues/5)
- Instructions: `.github/instructions/tool-usage.instructions.md`
- `docx` package v8 docs: https://docx.js.org/
- `mermaid-cli` docs: https://github.com/mermaid-js/mermaid-cli
- `mdast` spec: https://github.com/syntax-tree/mdast
- Existing patterns: `src/analyzer.ts` (error classes), `src/extractor.ts` (remark pipeline), `src/cache.ts` (cache manager)

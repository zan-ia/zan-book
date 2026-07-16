# Implementation Plan — Issue #3: Markdown Parser + LLM Extractor

**Date:** 2026-07-16
**Type:** feature
**Complexity:** High
**Branch:** `feat/extractor`

---

## 1. Approach Summary

Build the extraction pipeline in three layers: (1) a **deterministic markdown parser** using `unified` + `remark-parse` that extracts frontmatter, headings, objectives, images, and content_md from lesson files without any LLM involvement; (2) a **LLM provider abstraction** (`src/llm.ts`) supporting OpenAI and Anthropic with structured output/tool calling for semantic annotation and README metadata extraction; (3) a **cache layer** (`src/cache.ts`) with SHA256 hashing per file for incremental re-extraction. The `extractBook()` orchestrator in `src/extractor.ts` ties these together: discover lessons → parse each → annotate via LLM → validate with zod → cache result, with retry/backoff on failure and graceful skip per-lesson for persistent errors.

---

## 2. Files to Modify

| File | Action | Description |
|------|--------|-------------|
| `src/cache.ts` | CREATE | Hash-based cache manager: SHA256 file hashing, get/set Book JSON per hash, store in `cache/` directory, `hasChanged()` for incremental checks |
| `src/llm.ts` | CREATE | LLM provider abstraction: `LlmProvider` interface with `extractAnnotations()` and `extractBookMetadata()`; `OpenAiProvider` and `AnthropicProvider` implementations; factory `createLlmProvider(config)`; structured output via tool calling; retry with exponential backoff |
| `src/extractor.ts` | MODIFY | Full implementation of `extractBook()` and `extractLesson()`; internal helpers for lesson discovery, markdown parsing (unified/remark AST), frontmatter extraction, objectives/images detection, LLM annotation orchestration, zod validation with re-prompt, cache integration |
| `src/index.ts` | MODIFY | Add re-exports for new public API: `extractBook`, `extractLesson`, `CacheManager`, `createLlmProvider`, `LlmProvider` interface, `ExtractionOptions`, `ExtractionResult` |

---

## 3. Patterns to Follow

### Reference: Existing Structure
- **Contracts pattern** in `src/contracts.ts`: zod schemas with inferred types, all in one file with clear section comments
- **Extractor placeholder** in `src/extractor.ts`: JSDoc with `@param`/`@throws`, async functions returning `Promise<Book>`, `.js` import extensions (ESM)
- **Index re-exports** in `src/index.ts`: named exports of both schemas and types, using `export { ... } from "./module.js"`

### Conventions (from `.github/instructions/` and `README.md`)
- **ESM modules**: all imports use `.js` extension (NodeNext module resolution)
- **TypeScript strict mode**: `strict: true`, `noImplicitOverride: true`
- **No `any`**: use `unknown` with type narrowing (e.g., `z.record(z.unknown())` in metadata)
- **Error handling**: throw typed errors, retry with backoff, never silently swallow
- **LLM design principle**: "LLM extracts semantics, parser handles syntax" — parser never calls LLM, LLM only annotates
- **No hardcoded secrets**: LLM API keys come from environment variables (`OPENAI_API_KEY`, `ANTHROPIC_API_KEY`)

---

## 4. Implementation Order

### Step 1: `src/cache.ts` — Cache Manager

**Dependencies:** none (Node.js crypto, fs/promises only)

```typescript
export class CacheManager {
  constructor(private cacheDir: string) {}

  async get(hash: string): Promise<Book | null> { /* read JSON from cacheDir/{hash}.json */ }
  async set(hash: string, book: Book): Promise<void> { /* write JSON atomically */ }
  async hasChanged(filePath: string, cachedHash: string): Promise<boolean> { /* re-hash file and compare */ }

  static async hashFile(filePath: string): Promise<string> { /* SHA256 of file content */ }
  static hashContent(content: string): string { /* SHA256 of string */ }
}
```

- SHA256 via `crypto.createHash('sha256')`
- Store as `{source_hash, extracted_at, book}` JSON
- Ensure `cacheDir` exists on first write (`mkdir -p`)

### Step 2: `src/llm.ts` — LLM Provider Abstraction

**Dependencies:** `src/contracts.ts`, `openai`, `@anthropic-ai/sdk`, `zanbook.config.json` (config)

**Interface:**
```typescript
export interface LlmProviderConfig {
  provider: 'openai' | 'anthropic';
  model: string;
  apiKey?: string;           // falls back to env var
  temperature?: number;       // default 0
  maxRetries?: number;        // default 3
}

export interface LlmProvider {
  readonly config: LlmProviderConfig;
  extractAnnotations(contentMd: string): Promise<Annotation[]>;
  extractBookMetadata(readmeMd: string, lessonCount: number): Promise<{
    title: string;
    subtitle: string;
    total_lessons: number;
    metadata: Record<string, unknown>;
  }>;
}

export function createLlmProvider(config: LlmProviderConfig): LlmProvider { /* factory */ }
```

**OpenAI implementation:**
- Use `openai.beta.chat.completions.parse()` with structured output (response_format: `json_schema` or `zod_schema`)
- Prompt for annotations: identify quick_check (`> **Quick Check N:**`), callout (`> [!WARNING|NOTE|TIP|IMPORTANT]` or pedagogical blockquotes), mind_map (`![Mapa mental](...)`), mermaid (```mermaid), section_break (`---`)
- Prompt for README: extract title, subtitle, audience, prerequisites, phases, commitment from markdown

**Anthropic implementation:**
- Use `@anthropic-ai/sdk` with `tool_choice = {type: "tool", name: "..."}` for structured output
- Same prompts as OpenAI, adapted to Claude's tool-calling format

**Retry logic (shared):**
- Wrap each LLM call in `withRetry(fn, maxRetries, backoff)`
- Backoff sequence: 1s, 2s, 4s (exponential)
- On failure: log to `console.error`, retry
- On final failure: throw `LlmExtractionError`

### Step 3: `src/extractor.ts` — Full Implementation

**Dependencies:** `src/contracts.ts`, `src/cache.ts`, `src/llm.ts`, `unified`, `remark-parse`, `remark-frontmatter`, `zanbook.config.json`

**Public API:**
```typescript
export interface ExtractionOptions {
  cache?: boolean;          // enable cache (default: true)
  force?: boolean;          // force re-extract ignoring cache
  llmConfig?: LlmProviderConfig;  // override default LLM config
}

export interface LessonResult {
  lesson: Lesson;
  cached: boolean;
}

export interface BookResult {
  book: Book;
  cached: boolean;
  lessonResults: LessonResult[];
  errors: { lesson: number; error: string }[];
}

export async function extractBook(sourcePath: string, options?: ExtractionOptions): Promise<BookResult>;
export async function extractLesson(
  filePath: string,
  questionsPath?: string,
  llm?: LlmProvider
): Promise<Lesson>;
```

**Internal functions:**
```typescript
async function discoverLessons(dirPath: string): Promise<{ number: number; dir: string }[]>;
// Scan for aulaNN/ directories, sort by number, filter non-aula dirs

async function parseLessonFile(filePath: string): Promise<{
  frontmatter: Frontmatter;
  title: string;
  subtitle: string;
  objectives: string[];
  contentMd: string;
  images: string[];
}>;
// unified().use(remarkParse).use(remarkFrontmatter).process(filePath)
// Inspect AST (mdast):
//   - children[0] type==yaml → frontmatter (parse YAML)
//   - children find heading[depth=1] → title
//   - children find heading[depth=2] after H1 → subtitle
//   - children find list items starting with "- [ ]" under "Objetivos" section → objectives
//   - children find image nodes → images (relative paths)
//   - serialize non-frontmatter children back to markdown → contentMd

async function extractQuestions(filePath: string | null): Promise<string | null>;
// Read the *-questoes-de-aprendizagem.md file, return raw markdown (null if not found)

function extractAnnotationsFromLesson(contentMd: string, llm: LlmProvider): Promise<Annotation[]>;
// Delegate to llm.extractAnnotations()

async function extractBookMetadata(readmePath: string, lessonCount: number, llm: LlmProvider): Promise<...>;
// Read README.md, delegate to llm.extractBookMetadata()

function validateAndRepair(lesson: unknown, schema: typeof LessonSchema): Promise<Lesson>;
// zod parse; on ZodError, return detailed error for re-prompt
```

**`extractBook()` flow:**
```
1. Resolve sourcePath (relative or absolute)
2. Load zanbook.config.json for paths
3. Discover lesson directories → sort by number
4. Check cache: compute hash of README + each lesson file
5. If cache hit and !force, use cached Book
6. Initialize LlmProvider from config (or options.llmConfig)
7. Extract README metadata via LLM
8. For each lesson (in parallel with concurrency limit 3):
   a. Parse lesson file (deterministic)
   b. Read questions file if exists
   c. Extract annotations via LLM
   d. Validate lesson with zod
   e. If ZodError → re-prompt LLM with errors (max 3 retries)
   f. If persistent error → skip, log to cache/errors.jsonl
9. Assemble Book, validate entire Book with BookSchema
10. Cache result per-file
11. Return BookResult with errors summary
```

**`extractLesson()` flow:**
```
1. Parse markdown file (deterministic)
2. If LLM provided, extract annotations
3. Validate with zod
4. Return Lesson
```

**Concurrency control:** Use a simple semaphore (max 3 simultaneous LLM calls) to avoid rate limiting.

### Step 4: `src/index.ts` — Update Re-exports

Add:
```typescript
export { extractBook, extractLesson } from "./extractor.js";
export type { ExtractionOptions, BookResult, LessonResult } from "./extractor.js";
export { CacheManager } from "./cache.js";
export { createLlmProvider } from "./llm.js";
export type { LlmProvider, LlmProviderConfig } from "./llm.js";
```

---

## 5. LLM Prompt Templates

### Prompt A: Lesson Annotation Extraction

```
You are a semantic annotation assistant. Given the markdown content of a lesson, identify pedagogical elements and return their positions.

Return an array of annotation objects. Each annotation has:
- "kind": one of "quick_check", "callout", "mind_map", "mermaid", "section_break"
- "line_start": the 1-indexed line number where the element begins in the markdown
- "line_end": optional — the 1-indexed line where the element ends (omit if same as line_start)
- "metadata": an object with kind-specific data

Detection rules:
- quick_check: lines starting with "> **Quick Check" or "> **Quick Check N:**"
- callout: GFM callouts like "> [!WARNING]", "> [!NOTE]", "> [!TIP]", "> [!IMPORTANT]", "> [!CAUTION]", or blockquotes that serve as pedagogical emphasis (single-line "> *text*" or multi-line blockquotes teaching a concept). Set metadata.variant to: "warning", "note", "tip", "important", "caution", or "emphasis"
- mind_map: image nodes where the alt text contains "Mapa mental", "mind map", "diagrama", or "mapa conceitual". Set metadata.caption to the alt text
- mermaid: fenced code blocks with language "mermaid". Set metadata.caption if there's a preceding paragraph describing it
- section_break: thematic break lines ("---") that separate major sections (not horizontal rules inside content). Set metadata.label to the preceding heading text if any

IMPORTANT: line_start and line_end refer to line numbers in the raw markdown content, 1-indexed. The first line of the content is line 1. Be precise — annotations must match actual content.
```

### Prompt B: README Metadata Extraction

```
You are a metadata extraction assistant. Given a course README in markdown format, extract structured metadata about the course.

Return a JSON object with:
- "title": the H1 title of the README (the # heading on the first line)
- "subtitle": the first paragraph immediately after the H1 title
- "metadata": an object containing:
  - "audience": the target audience description (look for "Público-alvo", "Público", "Target audience" sections)
  - "prerequisites": what the student needs to know before starting (look for "Pré-requisitos", "Prerequisites", "O que o aluno já sabe" sections)
  - "phases": an array of phases if the README describes a phased progression (look for tables or lists with phase/etapa information). Each phase: { "name": string, "lessons": string, "description": string }
  - "commitment": the course commitment or value proposition (look for "Compromisso do módulo", "O que você vai aprender", "Ao final deste curso" sections)

Extract only what exists in the README. Do not fabricate information. Leave fields empty/omitted if not found.
```

---

## 6. Identified Risks

| Risk | Likelihood | Mitigation |
|------|-----------|------------|
| **LLM returns invalid JSON or wrong structure** | Medium | `temperature=0` + structured output (OpenAI `json_schema` / Anthropic `tool_choice`) + zod validation + re-prompt with ZodError details |
| **Large lesson files exceed LLM context window** | Low | Annotations prompt only receives `content_md` (not full file); typical lessons are 10-50KB. If needed, add chunking strategy |
| **Rate limiting on LLM API (concurrent requests)** | Medium | Semaphore limiting to 3 concurrent LLM calls; configurable `maxRetries` with backoff |
| **Missing API keys / env vars not set** | Medium | Throw clear `LlmConfigurationError` with message about required env vars; document in README |
| **Cache directory permissions** | Low | `CacheManager` creates `cacheDir` on first write; catch EACCES and fall back to no-cache with warning |
| **Frontmatter YAML parsing errors** | Low | `remark-frontmatter` extracts raw YAML string; use `yaml` parse (or `js-yaml`) with try/catch; fall back to defaults |
| **Lesson directory naming inconsistency** | Medium | Regex `/^aula(\d+)/i` for discovery; sort by extracted number; warn if gaps or unexpected names |

---

## 7. Acceptance Criteria

- [ ] `extractBook(sourcePath)` correctly discovers `aulaNN/` directories and orders them numerically
- [ ] `extractLesson(filePath)` parses markdown deterministically: extracts frontmatter, title (H1), subtitle (H2 after H1), objectives (`- [ ]` checklist), content_md (raw body), images (`![...](...)`)
- [ ] LLM annotation correctly identifies and positions: `quick_check`, `callout` (with variant), `mind_map`, `mermaid`, `section_break`
- [ ] README LLM extraction produces correct title, subtitle, and structured metadata (audience, prerequisites, phases, commitment)
- [ ] Zod validation runs after extraction; on ZodError, system re-prompts LLM with error details (max 3 retries)
- [ ] Cache layer: SHA256 file hashing, `get`/`set`/`hasChanged` work correctly; repeated extraction with unchanged files returns cached result
- [ ] Cache layer: force option (`--force` or `force: true`) bypasses cache and re-extracts
- [ ] Error handling: per-lesson failures skip gracefully, logged to `cache/errors.jsonl`; final `BookResult` reports `errors[]`
- [ ] Concurrency: max 3 simultaneous LLM calls
- [ ] Both OpenAI and Anthropic providers work with structured output
- [ ] Project build/lint passes without errors (`npm run build` + `npm run lint`)
- [ ] TypeScript strict mode compliance (`npm run typecheck`)
- [ ] New API exported from `src/index.ts` with proper types

---

## 8. References

- Issue: [#3](https://github.com/zan-ia/zan-book/issues/3)
- README: `README.md` (full architecture, book contract, design principles)
- Contracts: `src/contracts.ts` (zod schemas for Book, Lesson, Frontmatter, Annotation)
- Stack: `/memories/repo/stack.md` (technology stack decisions)
- Instructions: `.github/instructions/pipeline-workflow.instructions.md`, `.github/instructions/tool-usage.instructions.md`
- Plan template: `.github/plans/_template.md`

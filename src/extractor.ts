/**
 * Extractor module — Markdown → Book extraction pipeline.
 *
 * Parses a course directory's markdown files using unified/remark,
 * then uses an LLM to extract semantic metadata and annotations.
 * The result is validated against the Book zod schema.
 *
 * Design principle: "LLM extracts semantics, parser handles syntax."
 * The parser (unified + remark) handles ALL markdown parsing deterministically.
 * The LLM only adds semantic annotations that the parser cannot infer.
 */

import { readFile, readdir } from "node:fs/promises";
import { basename, join, resolve } from "node:path";

import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkFrontmatter from "remark-frontmatter";
import remarkStringify from "remark-stringify";
import { load as loadYaml } from "js-yaml";
import type { Root } from "mdast";

import {
  BookSchema,
  LessonSchema,
  type Annotation,
  type Book,
  type Frontmatter,
  type Lesson,
} from "./contracts.js";
import { CacheManager } from "./cache.js";
import {
  createLlmProvider,
  type BookMetadata,
  type LlmProvider,
  type LlmProviderConfig,
} from "./llm.js";

// ─── Types ─────────────────────────────────────────────────────────────────

export interface ExtractionOptions {
  /** Enable cache (default: true) */
  cache?: boolean;
  /** Force re-extract ignoring cache */
  force?: boolean;
  /** Override default LLM config */
  llmConfig?: LlmProviderConfig;
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

// ─── Config ────────────────────────────────────────────────────────────────

interface ZanBookConfig {
  llm?: {
    provider?: "openai" | "anthropic";
    model?: string;
    baseURL?: string;
    temperature?: number;
    maxRetries?: number;
  };
  paths?: {
    booksDir?: string;
    templatesDir?: string;
    cacheDir?: string;
    outputDir?: string;
  };
}

let _config: ZanBookConfig | null = null;

async function loadConfig(): Promise<ZanBookConfig> {
  if (_config) return _config;

  // Resolve config path relative to project root (using import.meta.url)
  const projectRoot = resolve(new URL(".", import.meta.url).pathname, "..");
  const configPath = join(projectRoot, "zanbook.config.json");

  try {
    const raw = await readFile(configPath, "utf-8");
    _config = JSON.parse(raw) as ZanBookConfig;
    return _config;
  } catch (error) {
    // File not found is OK — return defaults
    if (
      error instanceof Error &&
      "code" in error &&
      (error as NodeJS.ErrnoException).code === "ENOENT"
    ) {
      return {};
    }
    // Any other error (bad JSON, permissions) is a real problem
    throw new Error(
      `Failed to load config at ${configPath}: ${
        error instanceof Error ? error.message : String(error)
      }`,
    );
  }
}

// ─── Semaphore (concurrency limit) ─────────────────────────────────────────

class Semaphore {
  private current = 0;
  private queue: (() => void)[] = [];

  constructor(private maxConcurrency: number) {}

  async acquire(): Promise<void> {
    if (this.current < this.maxConcurrency) {
      this.current++;
      return;
    }
    return new Promise<void>((resolve) => {
      this.queue.push(resolve);
    });
  }

  release(): void {
    const next = this.queue.shift();
    if (next) {
      next();
    } else {
      this.current--;
    }
  }

  async run<T>(fn: () => Promise<T>): Promise<T> {
    await this.acquire();
    try {
      return await fn();
    } finally {
      this.release();
    }
  }
}

// ─── Lesson Discovery ──────────────────────────────────────────────────────

interface DiscoveredLesson {
  number: number;
  dir: string;
}

/**
 * Scan a directory for `aulaNN/` subdirectories and return them
 * sorted numerically by lesson number.
 */
async function discoverLessons(dirPath: string): Promise<DiscoveredLesson[]> {
  const entries = await readdir(dirPath, { withFileTypes: true });
  const lessons: DiscoveredLesson[] = [];

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    const match = entry.name.match(/^aula(\d+)/i);
    if (match) {
      lessons.push({
        number: parseInt(match[1]!, 10),
        dir: join(dirPath, entry.name),
      });
    }
  }

  lessons.sort((a, b) => a.number - b.number);
  return lessons;
}

// ─── Lesson File Parsing ───────────────────────────────────────────────────

interface ParsedLesson {
  frontmatter: Frontmatter;
  title: string;
  subtitle: string;
  objectives: string[];
  contentMd: string;
  images: string[];
  slug: string;
}

/**
 * Parse a single lesson markdown file deterministically using unified + remark.
 *
 * Extracts frontmatter (YAML), title (H1), subtitle (H2 after H1),
 * objectives (checklist items under "Objetivos"), images, and serializes
 * the remaining content back to markdown.
 */
async function parseLessonFile(filePath: string): Promise<ParsedLesson> {
  const raw = await readFile(filePath, "utf-8");

  const processor = unified()
    .use(remarkParse)
    .use(remarkFrontmatter, ["yaml"])
    .use(remarkStringify);

  const ast = processor.parse(raw);
  const root = ast as Root;

  // ── Extract frontmatter ──
  let frontmatter: Frontmatter = {
    titulo: "",
    modulo: "",
    aula: "",
    tags: [],
  };

  const firstChild = root.children[0];
  if (firstChild?.type === "yaml") {
    try {
      const parsed = loadYaml(firstChild.value) as Record<string, unknown>;
      frontmatter = {
        titulo: typeof parsed.titulo === "string" ? parsed.titulo : "",
        modulo: typeof parsed.modulo === "string" ? parsed.modulo : "",
        aula: typeof parsed.aula === "string" ? parsed.aula : "",
        duracao_estimada:
          typeof parsed.duracao_estimada === "string" ? parsed.duracao_estimada : undefined,
        nivel:
          typeof parsed.nivel === "string" ? (parsed.nivel as Frontmatter["nivel"]) : undefined,
        tags: Array.isArray(parsed.tags)
          ? parsed.tags.filter((t): t is string => typeof t === "string")
          : [],
        data: typeof parsed.data === "string" ? parsed.data : undefined,
      };
    } catch {
      // If YAML parsing fails, use default frontmatter
    }
  }

  // ── Extract title (H1) ──
  let title = "";
  let h1Index = -1;

  for (let i = 0; i < root.children.length; i++) {
    const child = root.children[i]!;
    if (child.type === "heading" && child.depth === 1) {
      title = extractTextFromNode(child);
      h1Index = i;
      break;
    }
  }

  // ── Extract subtitle (H2 immediately after H1) ──
  let subtitle = "";
  if (h1Index >= 0) {
    for (let i = h1Index + 1; i < root.children.length; i++) {
      const child = root.children[i]!;
      if (child.type === "heading" && child.depth === 2) {
        subtitle = extractTextFromNode(child);
        break;
      }
      // If we encounter another H1 or non-heading content, stop looking
      if (child.type !== "paragraph" && child.type !== "thematicBreak") {
        break;
      }
    }
  }

  // ── Extract objectives (checklist under "Objetivos" section) ──
  const objectives: string[] = [];
  let inObjectives = false;

  for (const child of root.children) {
    if (child.type === "heading" && child.depth === 2) {
      const headingText = extractTextFromNode(child).toLowerCase();
      inObjectives = headingText === "objetivos" || headingText === "objetivos da aula";
      if (!inObjectives) continue;
    }

    if (inObjectives && child.type === "list") {
      for (const item of child.children) {
        if (item.type === "listItem") {
          const text = extractTextFromNode(item);
          // Match checklist items: "- [ ] text" or "- [x] text"
          const checklistMatch = text.match(/^\[[\sxX]\]\s*(.+)/);
          if (checklistMatch) {
            objectives.push(checklistMatch[1]!.trim());
          } else if (text.startsWith("- ") || text.startsWith("* ")) {
            objectives.push(text.replace(/^[-*]\s+/, "").trim());
          } else {
            objectives.push(text.trim());
          }
        }
      }
      break;
    }
  }

  // ── Extract images ──
  const images: string[] = [];

  function collectImages(node: unknown): void {
    if (!node || typeof node !== "object") return;
    const obj = node as Record<string, unknown>;

    if (obj.type === "image" && typeof obj.url === "string") {
      // Store relative path from lesson directory
      const url = obj.url;
      if (!url.startsWith("http://") && !url.startsWith("https://")) {
        images.push(url);
      }
    }

    // Recurse into children
    if (Array.isArray(obj.children)) {
      for (const child of obj.children) {
        collectImages(child);
      }
    }
  }

  for (const child of root.children) {
    collectImages(child);
  }

  // ── Serialize content (excluding frontmatter) back to markdown ──
  const contentNodes = root.children.filter((child) => child.type !== "yaml");
  const contentProcessor = unified().use(remarkParse).use(remarkStringify);
  const contentAst = { ...root, children: contentNodes } as Root;
  const contentMd = contentProcessor.stringify(contentAst).trim();

  // ── Extract slug from filename ──
  const fileName = basename(filePath, ".md");
  // Remove the "aula-NN-" prefix if present
  const slug = fileName.replace(/^aula-\d+-/i, "");

  return {
    frontmatter,
    title,
    subtitle,
    objectives,
    contentMd,
    images,
    slug,
  };
}

/**
 * Recursively extract plain text from an mdast node.
 */
function extractTextFromNode(node: unknown): string {
  if (!node || typeof node !== "object") return "";
  const obj = node as Record<string, unknown>;

  if (obj.type === "text" && typeof obj.value === "string") {
    return obj.value;
  }

  if (Array.isArray(obj.children)) {
    return obj.children.map((child: unknown) => extractTextFromNode(child)).join("");
  }

  return "";
}

// ─── Questions File ────────────────────────────────────────────────────────

/**
 * Read the questions file for a lesson, if it exists.
 * Looks for `*-questoes-de-aprendizagem.md` in the same directory.
 */
async function extractQuestions(lessonDir: string): Promise<string | null> {
  try {
    const entries = await readdir(lessonDir);
    const qFile = entries.find(
      (f) => f.endsWith("-questoes-de-aprendizagem.md") || f.endsWith("-questoes.md"),
    );
    if (!qFile) return null;
    return await readFile(join(lessonDir, qFile), "utf-8");
  } catch {
    return null;
  }
}

// ─── Lesson File Discovery ─────────────────────────────────────────────────

/**
 * Find the main lesson markdown file in a lesson directory.
 * Expects a file matching `aula-NN-*.md`.
 */
async function findLessonFile(lessonDir: string): Promise<string | null> {
  const entries = await readdir(lessonDir);
  const mdFile = entries.find((f) => f.endsWith(".md") && !f.includes("questoes"));
  return mdFile ? join(lessonDir, mdFile) : null;
}

// ─── Annotation Extraction ─────────────────────────────────────────────────

/**
 * Extract semantic annotations from lesson content using the LLM provider.
 */
async function extractAnnotationsFromLesson(
  contentMd: string,
  llm: LlmProvider,
): Promise<Annotation[]> {
  try {
    return await llm.extractAnnotations(contentMd);
  } catch (error) {
    console.error(
      "LLM annotation extraction failed:",
      error instanceof Error ? error.message : String(error),
    );
    return [];
  }
}

// ─── README Metadata Extraction ────────────────────────────────────────────

/**
 * Extract structured metadata from a course README using the LLM.
 */
async function extractBookMetadataFromReadme(
  readmePath: string,
  lessonCount: number,
  llm: LlmProvider,
): Promise<BookMetadata> {
  const readmeContent = await readFile(readmePath, "utf-8");
  return llm.extractBookMetadata(readmeContent, lessonCount);
}

// ─── Validation with Re-prompt ─────────────────────────────────────────────

/**
 * Validate a lesson against the LessonSchema, returning the validated lesson
 * or throwing with detailed error information.
 */
function validateLesson(lesson: unknown): Lesson {
  return LessonSchema.parse(lesson);
}

/**
 * Validate the complete book against BookSchema.
 */
function validateBook(book: unknown): Book {
  return BookSchema.parse(book);
}

// ─── Book Extraction ───────────────────────────────────────────────────────

/**
 * Extract a complete Book from a course directory.
 *
 * Orchestrates the full pipeline:
 * 1. Discover lesson directories
 * 2. Parse each lesson's markdown content via unified + remark
 * 3. Extract README metadata via LLM
 * 4. Extract annotations from each lesson via LLM (max 3 concurrent)
 * 5. Validate against zod schemas
 * 6. Cache results by content hash
 *
 * @param sourcePath - Path to the course root directory (e.g. "books/curso-banco-de-dados-sql")
 * @param options - Extraction options (cache, force, llm config)
 * @returns A BookResult with the validated book and per-lesson results
 */
export async function extractBook(
  sourcePath: string,
  options?: ExtractionOptions,
): Promise<BookResult> {
  const opts: Required<ExtractionOptions> = {
    cache: options?.cache ?? true,
    force: options?.force ?? false,
    llmConfig: options?.llmConfig ?? (await getDefaultLlmConfig()),
  };

  const resolvedPath = resolve(sourcePath);
  const config = await loadConfig();
  const cacheDir = config.paths?.cacheDir ?? "cache";
  const cache = new CacheManager(cacheDir);

  // ── Discover lessons ──
  const discoveredLessons = await discoverLessons(resolvedPath);
  const lessonCount = discoveredLessons.length;

  // ── Extract README metadata ──
  let bookMetadata: BookMetadata;
  const readmePath = join(resolvedPath, "README.md");
  let llm: LlmProvider | null = null;

  // Compute whole-book cache key (composite hash of README + lessons)
  if (opts.cache && !opts.force) {
    try {
      const readmeHash = await CacheManager.hashFile(readmePath);
      const lessonHashes = await Promise.all(
        discoveredLessons.map(async (dl) => {
          const lessonFile = await findLessonFile(dl.dir);
          return lessonFile ? CacheManager.hashFile(lessonFile) : "";
        }),
      );
      const compositeHash = CacheManager.hashContent(JSON.stringify({ readmeHash, lessonHashes }));
      const cachedBook = await cache.get<Book>(compositeHash);
      if (cachedBook) {
        return {
          book: cachedBook,
          cached: true,
          lessonResults: discoveredLessons.map((dl) => ({
            lesson: cachedBook.lessons.find((l) => l.number === dl.number)!,
            cached: true,
          })),
          errors: [],
        };
      }
    } catch {
      // Cache check failed — proceed with extraction
    }
  }

  // Create LLM provider lazily (only if needed — not cached)
  try {
    llm = createLlmProvider(opts.llmConfig);
    bookMetadata = await extractBookMetadataFromReadme(readmePath, lessonCount, llm);
  } catch (error) {
    bookMetadata = {
      title: basename(resolvedPath),
      subtitle: "",
      total_lessons: lessonCount,
      metadata: {},
    };
    console.error(
      "README metadata extraction failed, using defaults:",
      error instanceof Error ? error.message : String(error),
    );
  }

  // ── Extract course ID from path ──
  const courseId = basename(resolvedPath);

  // ── Process each lesson ──
  const semaphore = new Semaphore(3);
  const lessonResults: LessonResult[] = [];
  const errors: { lesson: number; error: string }[] = [];

  const lessonTasks = discoveredLessons.map((dl) =>
    semaphore.run(async () => {
      try {
        // Find the lesson markdown file
        const lessonFilePath = await findLessonFile(dl.dir);
        if (!lessonFilePath) {
          errors.push({
            lesson: dl.number,
            error: "No lesson markdown file found",
          });
          return;
        }

        // Check cache
        const fileHash = await CacheManager.hashFile(lessonFilePath);
        if (opts.cache && !opts.force) {
          const cachedLesson = await cache.get<Lesson>(`${fileHash}-lesson`);
          if (cachedLesson) {
            lessonResults.push({
              lesson: cachedLesson,
              cached: true,
            });
            return;
          }
        }

        // Parse lesson file (deterministic)
        const parsed = await parseLessonFile(lessonFilePath);

        // Read questions file
        const questionsMd = await extractQuestions(dl.dir);

        // Extract annotations via LLM (create provider lazily if needed)
        if (!llm) {
          try {
            llm = createLlmProvider(opts.llmConfig);
          } catch (error) {
            errors.push({
              lesson: dl.number,
              error: `LLM provider initialization failed: ${
                error instanceof Error ? error.message : String(error)
              }`,
            });
            return;
          }
        }
        const annotations = await extractAnnotationsFromLesson(parsed.contentMd, llm);

        // Assemble lesson
        const lessonData: Lesson = {
          number: dl.number,
          slug: parsed.slug,
          frontmatter: parsed.frontmatter,
          title: parsed.title,
          subtitle: parsed.subtitle,
          objectives: parsed.objectives,
          content_md: parsed.contentMd,
          questions_md: questionsMd,
          annotations,
          images: parsed.images,
        };

        // Validate with zod — retry with LLM re-prompt on ZodError
        const maxReprompts = 3;
        let validatedLesson: Lesson;
        let currentData: Lesson = lessonData;
        let repromptCount = 0;

        while (repromptCount <= maxReprompts) {
          try {
            validatedLesson = validateLesson(currentData);
            break; // success
          } catch (validationError) {
            repromptCount++;
            if (repromptCount > maxReprompts) {
              throw new Error(
                `Zod validation failed after ${maxReprompts} re-prompts: ${
                  validationError instanceof Error
                    ? validationError.message
                    : String(validationError)
                }`,
              );
            }
            // Re-prompt LLM with ZodError details
            const zodIssues =
              validationError instanceof Error ? validationError.message : String(validationError);
            const correctedAnnotations = await llm.extractAnnotations(parsed.contentMd, zodIssues);
            currentData = { ...currentData, annotations: correctedAnnotations };
          }
        }

        // Cache the result
        if (opts.cache) {
          await cache.set(`${fileHash}-lesson`, validatedLesson!);
        }

        lessonResults.push({
          lesson: validatedLesson!,
          cached: false,
        });
      } catch (error) {
        errors.push({
          lesson: dl.number,
          error: error instanceof Error ? error.message : String(error),
        });
        // Log to errors.jsonl for persistent tracking
        try {
          const { appendFile } = await import("node:fs/promises");
          const errorEntry = JSON.stringify({
            timestamp: new Date().toISOString(),
            lesson: dl.number,
            error: error instanceof Error ? error.message : String(error),
          });
          await appendFile(join(cacheDir, "errors.jsonl"), errorEntry + "\n", "utf-8");
        } catch {
          // Ignore logging errors
        }
      }
    }),
  );

  await Promise.all(lessonTasks);

  // ── Assemble Book ──
  const allCached = lessonResults.every((r) => r.cached);
  const book: Book = {
    id: courseId,
    title: bookMetadata.title,
    subtitle: bookMetadata.subtitle,
    total_lessons: bookMetadata.total_lessons,
    metadata: bookMetadata.metadata,
    lessons: lessonResults.map((r) => r.lesson),
  };

  // Validate the entire book
  const validatedBook = validateBook(book);

  // Cache the complete book (hash based on course ID + timestamp)
  if (opts.cache) {
    const bookHash = CacheManager.hashContent(
      JSON.stringify({ id: courseId, lessons: lessonResults.length }),
    );
    await cache.set(bookHash, validatedBook);
  }

  return {
    book: validatedBook,
    cached: allCached,
    lessonResults,
    errors,
  };
}

// ─── Standalone Lesson Extraction ──────────────────────────────────────────

/**
 * Extract a single lesson from a markdown file.
 *
 * @param filePath - Path to the lesson markdown file
 * @param questionsPath - Optional path to the questions markdown file
 * @param llm - Optional LLM provider for annotation extraction
 * @returns A validated Lesson object
 */
export async function extractLesson(
  filePath: string,
  questionsPath?: string,
  llm?: LlmProvider,
): Promise<Lesson> {
  const resolvedPath = resolve(filePath);

  // Parse lesson file
  const parsed = await parseLessonFile(resolvedPath);

  // Read questions file if provided
  let questionsMd: string | null = null;
  if (questionsPath) {
    try {
      questionsMd = await readFile(resolve(questionsPath), "utf-8");
    } catch {
      questionsMd = null;
    }
  }

  // Extract annotations if LLM is provided
  let annotations: Annotation[] = [];
  if (llm) {
    annotations = await extractAnnotationsFromLesson(parsed.contentMd, llm);
  }

  // Assemble and validate
  const lessonData: Lesson = {
    number: parsed.frontmatter?.aula ? parseInt(parsed.frontmatter.aula, 10) || 1 : 1,
    slug: parsed.slug,
    frontmatter: parsed.frontmatter,
    title: parsed.title,
    subtitle: parsed.subtitle,
    objectives: parsed.objectives,
    content_md: parsed.contentMd,
    questions_md: questionsMd,
    annotations,
    images: parsed.images,
  };

  return validateLesson(lessonData);
}

// ─── Helpers ───────────────────────────────────────────────────────────────

async function getDefaultLlmConfig(): Promise<LlmProviderConfig> {
  const config = await loadConfig();
  return {
    provider: config.llm?.provider ?? "openai",
    model: config.llm?.model ?? "gpt-4o-mini",
    baseURL: config.llm?.baseURL,
    temperature: config.llm?.temperature ?? 0,
    maxRetries: config.llm?.maxRetries ?? 3,
  };
}

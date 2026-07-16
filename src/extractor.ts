/**
 * Extractor module — Markdown → Book extraction pipeline.
 *
 * Parses a course directory's markdown files using unified/remark,
 * then uses an LLM to extract semantic metadata and annotations.
 * The result is validated against the Book zod schema.
 */

import type { Book } from "./contracts.js";

/**
 * Extract a complete Book from a course directory.
 *
 * @param sourcePath - Path to the course root directory (e.g. "books/curso-banco-de-dados-sql")
 * @returns A validated Book object
 * @throws {Error} If parsing or LLM extraction fails after retries
 */
export async function extractBook(sourcePath: string): Promise<Book> {
  // TODO: Implement full extraction pipeline
  // 1. Discover lesson directories (aula01/, aula02/, …)
  // 2. Parse each lesson's markdown content via unified + remark
  // 3. Extract frontmatter YAML via remark-frontmatter
  // 4. Send content + AST to LLM for semantic annotations
  // 5. Validate against BookSchema via zod
  // 6. Cache result by content hash
  void sourcePath;
  throw new Error("Not implemented: extractBook");
}

/**
 * Extract a single lesson from a markdown file.
 *
 * @param filePath - Path to the lesson markdown file
 * @returns A validated Lesson object
 */
export async function extractLesson(filePath: string): Promise<import("./contracts.js").Lesson> {
  void filePath;
  throw new Error("Not implemented: extractLesson");
}

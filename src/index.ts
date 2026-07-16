/**
 * Zan Book — Main entry point.
 *
 * Re-exports all public API from the library modules.
 */

// Contracts (types and schemas)
export {
  LevelEnum,
  FrontmatterSchema,
  AnnotationKind,
  AnnotationSchema,
  LessonSchema,
  BookSchema,
  LayoutBlockKind,
  LayoutBlockSchema,
  TemplateMappingSchema,
  MermaidThemeSchema,
} from "./contracts.js";

export type {
  Level,
  Frontmatter,
  Annotation,
  Lesson,
  Book,
  LayoutBlock,
  TemplateMapping,
  MermaidTheme,
} from "./contracts.js";

// Extractor
export { extractBook, extractLesson } from "./extractor.js";
export type { ExtractionOptions, BookResult, LessonResult } from "./extractor.js";

// Cache
export { CacheManager } from "./cache.js";

// LLM Provider
export { createLlmProvider, LlmConfigurationError, LlmExtractionError } from "./llm.js";
export type { LlmProvider, LlmProviderConfig, BookMetadata } from "./llm.js";

// Analyzer
export { analyzeTemplate, analyzeTemplateWithAI } from "./analyzer.js";

// Renderer
export { renderBook, renderMermaidDiagram } from "./renderer.js";

// Converter
export { convertToPdf, isPandocAvailable } from "./converter.js";

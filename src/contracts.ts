import { z } from "zod";

// ─── Frontmatter ───────────────────────────────────────────────────────────

export const LevelEnum = z.enum([
  "iniciante",
  "intermediario",
  "intermediário",
  "avancado",
  "avançado",
]);

export type Level = z.infer<typeof LevelEnum>;

export const FrontmatterSchema = z.object({
  titulo: z.string(),
  modulo: z.string(),
  aula: z.string(),
  duracao_estimada: z.string().optional(),
  nivel: LevelEnum.optional(),
  tags: z.array(z.string()).default([]),
  data: z.string().date().optional(),
});

export type Frontmatter = z.infer<typeof FrontmatterSchema>;

// ─── Annotations ───────────────────────────────────────────────────────────

export const AnnotationKind = z.enum([
  "quick_check",
  "callout",
  "mind_map",
  "section_break",
  "mermaid",
]);

export type AnnotationKind = z.infer<typeof AnnotationKind>;

export const AnnotationSchema = z.object({
  kind: AnnotationKind,
  line_start: z.number().int().positive(),
  line_end: z.number().int().positive().optional(),
  metadata: z.record(z.string()).default({}),
});

export type Annotation = z.infer<typeof AnnotationSchema>;

// ─── Lesson ─────────────────────────────────────────────────────────────────

export const LessonSchema = z.object({
  number: z.number().int().positive(),
  slug: z.string(),
  frontmatter: FrontmatterSchema,
  title: z.string(),
  subtitle: z.string(),
  objectives: z.array(z.string()),
  content_md: z.string(),
  questions_md: z.string().nullable().default(null),
  annotations: z.array(AnnotationSchema).default([]),
  images: z.array(z.string()).default([]),
});

export type Lesson = z.infer<typeof LessonSchema>;

// ─── Book ───────────────────────────────────────────────────────────────────

export const BookSchema = z.object({
  id: z.string(),
  title: z.string(),
  subtitle: z.string(),
  total_lessons: z.number().int().positive(),
  metadata: z.record(z.unknown()),
  lessons: z.array(LessonSchema),
});

export type Book = z.infer<typeof BookSchema>;

// ─── Template Mapping ──────────────────────────────────────────────────────

export const LayoutBlockKind = z.enum(["cover", "toc", "chapter", "questions", "appendix"]);

export type LayoutBlockKind = z.infer<typeof LayoutBlockKind>;

export const LayoutBlockSchema = z.object({
  kind: LayoutBlockKind,
  source: z.string(),
  page_break: z.boolean().default(true),
});

export type LayoutBlock = z.infer<typeof LayoutBlockSchema>;

export const TemplateMappingSchema = z.object({
  id: z.string(),
  name: z.string(),
  docx_path: z.string(),
  layout: z.array(LayoutBlockSchema),
  styles: z.record(z.string()).default({
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
  }),
  annotation_styles: z.record(z.string()).default({
    quick_check: "Callout",
    callout_note: "Note",
    callout_warning: "Warning",
    mind_map: "Image Center",
    mermaid: "Image Center",
  }),
  page_size: z.string().default("A4"),
  margins: z.record(z.number()).default({}),
});

export type TemplateMapping = z.infer<typeof TemplateMappingSchema>;

// ─── Annotation Style Kind (for template analyzer) ────────────────────────

export const AnnotationStyleKind = z.enum([
  "quick_check",
  "callout_note",
  "callout_warning",
  "mind_map",
  "mermaid",
]);

export type AnnotationStyleKind = z.infer<typeof AnnotationStyleKind>;

// ─── Mermaid Theme ─────────────────────────────────────────────────────────

export const MermaidThemeSchema = z.object({
  base: z.enum(["default", "dark", "forest", "neutral"]).default("default"),
  primaryColor: z.string().optional(),
  secondaryColor: z.string().optional(),
  tertiaryColor: z.string().optional(),
  primaryBorderColor: z.string().optional(),
  lineColor: z.string().optional(),
  fontSize: z.string().optional(),
  fontFamily: z.string().optional(),
});

export type MermaidTheme = z.infer<typeof MermaidThemeSchema>;

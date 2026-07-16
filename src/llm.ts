/**
 * LLM Provider abstraction — semantic extraction via OpenAI or Anthropic.
 *
 * Provides a unified interface for extracting lesson annotations and
 * README metadata from markdown content. Supports OpenAI (structured
 * output via json_schema) and Anthropic (tool calling) with shared
 * retry/backoff logic.
 *
 * Design principle: "LLM extracts semantics, parser handles syntax."
 * The LLM never reconstructs markdown — it only returns structured
 * metadata (annotations, titles, descriptions).
 */

import OpenAI from "openai";
import Anthropic from "@anthropic-ai/sdk";
import type { Annotation } from "./contracts.js";

// ─── Custom Errors ─────────────────────────────────────────────────────────

export class LlmConfigurationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "LlmConfigurationError";
  }
}

export class LlmExtractionError extends Error {
  constructor(message: string, cause?: unknown) {
    super(message, { cause });
    this.name = "LlmExtractionError";
  }
}

// ─── Types ─────────────────────────────────────────────────────────────────

export interface LlmProviderConfig {
  provider: "openai" | "anthropic";
  model: string;
  apiKey?: string;
  temperature?: number;
  maxRetries?: number;
}

export interface BookMetadata {
  title: string;
  subtitle: string;
  total_lessons: number;
  metadata: Record<string, unknown>;
}

export interface TemplateSuggestion {
  styles: Record<string, string>;
  annotation_styles: Record<string, string>;
  confidence: "high" | "medium" | "low";
  rationale: string;
}

export interface LlmProvider {
  readonly config: LlmProviderConfig;

  /**
   * Extract semantic annotations from a lesson's markdown content.
   * Identifies quick_check, callout, mind_map, mermaid, section_break elements.
   *
   * @param contentMd - Raw markdown content of the lesson
   * @param previousError - Optional ZodError details for re-prompt correction
   */
  extractAnnotations(contentMd: string, previousError?: string): Promise<Annotation[]>;

  /**
   * Extract structured metadata from a course README in markdown.
   * Returns title, subtitle, lesson count, and metadata (audience, prerequisites, etc.).
   */
  extractBookMetadata(readmeMd: string, lessonCount: number): Promise<BookMetadata>;

  /**
   * Analyze DOCX template images and suggest style mappings via Vision API.
   *
   * @param images - Array of page images (PNG buffers) from the rendered DOCX
   * @param docxPath - Path to the source DOCX file (for context)
   * @returns A TemplateSuggestion with style/annotation mappings
   */
  analyzeTemplateImages(images: Buffer[], docxPath: string): Promise<TemplateSuggestion>;
}

// ─── Retry Logic ───────────────────────────────────────────────────────────

/**
 * Wrap an async function with exponential backoff retry logic.
 *
 * Backoff sequence: 1s, 2s, 4s (up to maxRetries - 1)
 */
export async function withRetry<T>(
  fn: () => Promise<T>,
  maxRetries: number = 3,
  backoffMs: number = 1000,
): Promise<T> {
  let lastError: unknown;

  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error;
      if (attempt < maxRetries - 1) {
        const delay = backoffMs * Math.pow(2, attempt);
        console.error(
          `LLM call failed (attempt ${attempt + 1}/${maxRetries}), retrying in ${delay}ms:`,
          error instanceof Error ? error.message : String(error),
        );
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    }
  }

  throw new LlmExtractionError(`LLM call failed after ${maxRetries} retries`, lastError);
}

// ─── Prompt Templates ──────────────────────────────────────────────────────

const ANNOTATION_SYSTEM_PROMPT = `You are a semantic annotation assistant. Given the markdown content of a lesson, identify pedagogical elements and return their positions.

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

IMPORTANT: line_start and line_end refer to line numbers in the raw markdown content, 1-indexed. The first line of the content is line 1. Be precise — annotations must match actual content.`;

const METADATA_SYSTEM_PROMPT = `You are a metadata extraction assistant. Given a course README in markdown format, extract structured metadata about the course.

Return a JSON object with:
- "title": the H1 title of the README (the # heading on the first line)
- "subtitle": the first paragraph immediately after the H1 title
- "metadata": an object containing:
  - "audience": the target audience description (look for "Público-alvo", "Público", "Target audience" sections)
  - "prerequisites": what the student needs to know before starting (look for "Pré-requisitos", "Prerequisites", "O que o aluno já sabe" sections)
  - "phases": an array of phases if the README describes a phased progression (look for tables or lists with phase/etapa information). Each phase: { "name": string, "lessons": string, "description": string }
  - "commitment": the course commitment or value proposition (look for "Compromisso do módulo", "O que você vai aprender", "Ao final deste curso" sections)

Extract only what exists in the README. Do not fabricate information. Leave fields empty/omitted if not found.`;

// ─── Vision Prompt ─────────────────────────────────────────────────────────

const VISION_SYSTEM_PROMPT = `You are a DOCX template analyzer. Given rendered page images of a Word template, identify the named styles used in the document and suggest how they should map to semantic markdown elements.

Return a JSON object with:
- "styles": a record mapping semantic keys (h1, h2, h3, body, code, blockquote, image_caption, objectives, table_header, table_cell, questions_title, questions_body) to the DOCX style names you observe in the images
- "annotation_styles": a record mapping annotation keys (quick_check, callout_note, callout_warning, mind_map, mermaid) to the DOCX style names used for those elements
- "confidence": "high", "medium", or "low" — how confident you are in the mapping
- "rationale": a brief explanation of your mapping decisions

Look for heading styles, body text styles, code block styles, quote styles, table styles, list styles, and any callout/note/warning styles. Pay attention to font size, boldness, indentation, and other visual cues that distinguish different style types.`;

// ─── OpenAI Provider ───────────────────────────────────────────────────────

export class OpenAiLlmProvider implements LlmProvider {
  private client: OpenAI;
  readonly config: LlmProviderConfig;

  constructor(config: LlmProviderConfig) {
    const apiKey = config.apiKey ?? process.env.OPENAI_API_KEY;
    if (!apiKey) {
      throw new LlmConfigurationError(
        "OpenAI API key not provided. Set OPENAI_API_KEY environment variable or pass apiKey in config.",
      );
    }

    this.config = {
      ...config,
      apiKey,
      temperature: config.temperature ?? 0,
      maxRetries: config.maxRetries ?? 3,
    };

    this.client = new OpenAI({ apiKey });
  }

  async extractAnnotations(contentMd: string, previousError?: string): Promise<Annotation[]> {
    return withRetry(async () => {
      const messages: OpenAI.Chat.ChatCompletionMessageParam[] = [
        { role: "system", content: ANNOTATION_SYSTEM_PROMPT },
        {
          role: "user" as const,
          content: `Extract annotations from this lesson content:\n\n${contentMd}`,
        },
      ];

      // If re-prompting after validation error, include correction feedback
      if (previousError) {
        messages.push({
          role: "user" as const,
          content: `The previous extraction had validation errors. Please correct the annotations:\n\n${previousError}\n\nReturn only the corrected array of annotations.`,
        });
      }

      const response = await this.client.chat.completions.create({
        model: this.config.model,
        messages,
        temperature: this.config.temperature,
        response_format: { type: "json_object" },
      });

      const result = response.choices[0]?.message?.content;
      if (!result) {
        throw new LlmExtractionError("OpenAI returned empty response");
      }

      const parsed = JSON.parse(result) as { annotations?: Annotation[] };
      return Array.isArray(parsed.annotations) ? parsed.annotations : [];
    }, this.config.maxRetries);
  }

  async extractBookMetadata(readmeMd: string, _lessonCount: number): Promise<BookMetadata> {
    return withRetry(async () => {
      const response = await this.client.chat.completions.create({
        model: this.config.model,
        messages: [
          { role: "system", content: METADATA_SYSTEM_PROMPT },
          { role: "user", content: `Extract metadata from this README:\n\n${readmeMd}` },
        ],
        temperature: this.config.temperature,
        response_format: { type: "json_object" },
      });

      const result = response.choices[0]?.message?.content;
      if (!result) {
        throw new LlmExtractionError("OpenAI returned empty response");
      }

      const parsed = JSON.parse(result) as {
        title?: string;
        subtitle?: string;
        metadata?: Record<string, unknown>;
      };

      return {
        title: parsed.title ?? "Untitled Course",
        subtitle: parsed.subtitle ?? "",
        total_lessons: _lessonCount,
        metadata: parsed.metadata ?? {},
      };
    }, this.config.maxRetries);
  }

  async analyzeTemplateImages(images: Buffer[], docxPath: string): Promise<TemplateSuggestion> {
    // Limit to first 3 pages to control cost and latency
    const limitedImages = images.slice(0, 3);
    if (images.length > 5) {
      console.warn(
        `Template has ${images.length} pages; analyzing first 3 only to control cost. ` +
          "For full analysis, process pages individually.",
      );
    }

    return withRetry(async () => {
      const imageContent: OpenAI.Chat.ChatCompletionContentPart[] = limitedImages.map((buffer) => ({
        type: "image_url" as const,
        image_url: {
          url: `data:image/png;base64,${buffer.toString("base64")}`,
        },
      }));

      const messages: OpenAI.Chat.ChatCompletionMessageParam[] = [
        { role: "system", content: VISION_SYSTEM_PROMPT },
        {
          role: "user" as const,
          content: [
            { type: "text" as const, text: `Analyze this DOCX template: ${docxPath}` },
            ...imageContent,
          ],
        },
      ];

      const response = await this.client.chat.completions.create({
        model: this.config.model,
        messages,
        temperature: this.config.temperature,
        response_format: { type: "json_object" },
      });

      const result = response.choices[0]?.message?.content;
      if (!result) {
        throw new LlmExtractionError("OpenAI returned empty response for template analysis");
      }

      return JSON.parse(result) as TemplateSuggestion;
    }, this.config.maxRetries);
  }
}

// ─── Anthropic Provider ────────────────────────────────────────────────────

export class AnthropicLlmProvider implements LlmProvider {
  private client: Anthropic;
  readonly config: LlmProviderConfig;

  constructor(config: LlmProviderConfig) {
    const apiKey = config.apiKey ?? process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      throw new LlmConfigurationError(
        "Anthropic API key not provided. Set ANTHROPIC_API_KEY environment variable or pass apiKey in config.",
      );
    }

    this.config = {
      ...config,
      apiKey,
      temperature: config.temperature ?? 0,
      maxRetries: config.maxRetries ?? 3,
    };

    this.client = new Anthropic({ apiKey });
  }

  async extractAnnotations(contentMd: string, previousError?: string): Promise<Annotation[]> {
    return withRetry(async () => {
      const messages: Anthropic.MessageParam[] = [
        {
          role: "user",
          content: `Extract annotations from this lesson content:\n\n${contentMd}`,
        },
      ];

      // If re-prompting after validation error, include correction feedback
      if (previousError) {
        messages.push({
          role: "user",
          content: `The previous extraction had validation errors. Please correct the annotations:\n\n${previousError}\n\nReturn only the corrected annotations.`,
        });
      }

      const response = await this.client.messages.create({
        model: this.config.model,
        max_tokens: 4096,
        system: ANNOTATION_SYSTEM_PROMPT,
        messages,
        tools: [
          {
            name: "extract_annotations",
            description: "Extract pedagogical annotations from lesson content",
            input_schema: {
              type: "object",
              properties: {
                annotations: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      kind: {
                        type: "string",
                        enum: ["quick_check", "callout", "mind_map", "mermaid", "section_break"],
                      },
                      line_start: { type: "integer", minimum: 1 },
                      line_end: { type: "integer", minimum: 1 },
                      metadata: {
                        type: "object",
                        properties: {
                          caption: { type: "string" },
                          variant: { type: "string" },
                          label: { type: "string" },
                        },
                      },
                    },
                    required: ["kind", "line_start"],
                  },
                },
              },
              required: ["annotations"],
            },
          },
        ],
        tool_choice: { type: "tool", name: "extract_annotations" },
      });

      const toolBlock = response.content.find(
        (block: Anthropic.ContentBlock) => block.type === "tool_use",
      ) as Anthropic.ToolUseBlock | undefined;

      if (!toolBlock?.input) {
        return [];
      }

      const input = toolBlock.input as { annotations?: Annotation[] };
      return Array.isArray(input.annotations) ? input.annotations : [];
    }, this.config.maxRetries);
  }

  async extractBookMetadata(readmeMd: string, _lessonCount: number): Promise<BookMetadata> {
    return withRetry(async () => {
      const response = await this.client.messages.create({
        model: this.config.model,
        max_tokens: 4096,
        system: METADATA_SYSTEM_PROMPT,
        messages: [
          {
            role: "user",
            content: `Extract metadata from this README:\n\n${readmeMd}`,
          },
        ],
        temperature: this.config.temperature,
        tools: [
          {
            name: "extract_book_metadata",
            description: "Extract structured metadata from a course README",
            input_schema: {
              type: "object",
              properties: {
                title: { type: "string" },
                subtitle: { type: "string" },
                metadata: {
                  type: "object",
                  properties: {
                    audience: { type: "string" },
                    prerequisites: { type: "string" },
                    phases: {
                      type: "array",
                      items: {
                        type: "object",
                        properties: {
                          name: { type: "string" },
                          lessons: { type: "string" },
                          description: { type: "string" },
                        },
                      },
                    },
                    commitment: { type: "string" },
                  },
                },
              },
              required: ["title", "subtitle"],
            },
          },
        ],
        tool_choice: { type: "tool", name: "extract_book_metadata" },
      });

      const toolBlock = response.content.find(
        (block: Anthropic.ContentBlock) => block.type === "tool_use",
      ) as Anthropic.ToolUseBlock | undefined;

      if (!toolBlock?.input) {
        return {
          title: "Untitled Course",
          subtitle: "",
          total_lessons: _lessonCount,
          metadata: {},
        };
      }

      const input = toolBlock.input as {
        title?: string;
        subtitle?: string;
        metadata?: Record<string, unknown>;
      };

      return {
        title: input.title ?? "Untitled Course",
        subtitle: input.subtitle ?? "",
        total_lessons: _lessonCount,
        metadata: input.metadata ?? {},
      };
    }, this.config.maxRetries);
  }

  async analyzeTemplateImages(images: Buffer[], docxPath: string): Promise<TemplateSuggestion> {
    // Limit to first 3 pages to control cost and latency
    const limitedImages = images.slice(0, 3);
    if (images.length > 5) {
      console.warn(
        `Template has ${images.length} pages; analyzing first 3 only to control cost. ` +
          "For full analysis, process pages individually.",
      );
    }

    return withRetry(async () => {
      const imageContent: Anthropic.ImageBlockParam[] = limitedImages.map((buffer) => ({
        type: "image",
        source: {
          type: "base64",
          media_type: "image/png",
          data: buffer.toString("base64"),
        },
      }));

      const response = await this.client.messages.create({
        model: this.config.model,
        max_tokens: 4096,
        system: VISION_SYSTEM_PROMPT,
        messages: [
          {
            role: "user",
            content: [
              { type: "text", text: `Analyze this DOCX template: ${docxPath}` },
              ...imageContent,
            ],
          },
        ],
        temperature: this.config.temperature,
      });

      const textBlock = response.content.find(
        (block: Anthropic.ContentBlock) => block.type === "text",
      ) as Anthropic.TextBlock | undefined;

      if (!textBlock?.text) {
        throw new LlmExtractionError("Anthropic returned empty response for template analysis");
      }

      return JSON.parse(textBlock.text) as TemplateSuggestion;
    }, this.config.maxRetries);
  }
}

// ─── Factory ───────────────────────────────────────────────────────────────

/**
 * Create an LLM provider based on the given configuration.
 *
 * @param config - Provider configuration (provider type, model, api key, etc.)
 * @returns An initialized LlmProvider instance
 * @throws {LlmConfigurationError} If the provider type is unknown or API key is missing
 */
export function createLlmProvider(config: LlmProviderConfig): LlmProvider {
  switch (config.provider) {
    case "openai":
      return new OpenAiLlmProvider(config);
    case "anthropic":
      return new AnthropicLlmProvider(config);
    default: {
      const _exhaustive: never = config.provider;
      throw new LlmConfigurationError(
        `Unknown LLM provider: ${String(_exhaustive)}. Supported: "openai", "anthropic"`,
      );
    }
  }
}

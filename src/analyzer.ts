/**
 * Analyzer module — DOCX template → TemplateMapping.
 *
 * Opens a DOCX file, lists its named styles, and produces
 * a TemplateMapping that tells the renderer which DOCX style
 * to apply to each markdown element.
 *
 * Two modes:
 * - Auto (default): Reads style names from the DOCX and applies
 *   heuristics to map them to markdown elements.
 * - AI: Uses LLM Vision to suggest mappings from rendered page images.
 */

import type { TemplateMapping } from "./contracts.js";

/**
 * Analyze a DOCX template and produce a TemplateMapping.
 *
 * @param docxPath - Path to the .docx template file
 * @returns A validated TemplateMapping
 */
export async function analyzeTemplate(docxPath: string): Promise<TemplateMapping> {
  // TODO: Implement DOCX analysis
  // 1. Open DOCX with docx package
  // 2. List named styles from the document
  // 3. Apply heuristics to map styles to markdown elements
  // 4. Return validated TemplateMapping
  void docxPath;
  throw new Error("Not implemented: analyzeTemplate");
}

/**
 * Analyze a DOCX template using LLM Vision assistance.
 *
 * @param docxPath - Path to the .docx template file
 * @returns A validated TemplateMapping with AI-suggested mappings
 */
export async function analyzeTemplateWithAI(docxPath: string): Promise<TemplateMapping> {
  // TODO: Implement AI-assisted analysis
  // 1. Render DOCX pages as images
  // 2. Send images to LLM Vision for style suggestions
  // 3. Return suggested mappings for user approval
  void docxPath;
  throw new Error("Not implemented: analyzeTemplateWithAI");
}

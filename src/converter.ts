/**
 * Converter module — DOCX → PDF.
 *
 * Uses pandoc (via execa) to convert a generated DOCX file
 * to PDF format while preserving layout and styles.
 */

import { execa } from "execa";
import { extname, resolve } from "node:path";

// ─── Custom Errors ─────────────────────────────────────────────────────────

export class ConverterError extends Error {
  constructor(message: string, cause?: unknown) {
    super(message, { cause });
    this.name = "ConverterError";
  }
}

export class PandocNotFoundError extends ConverterError {
  constructor() {
    super(
      "pandoc not found in PATH. Install it with: sudo apt install pandoc (Linux) or brew install pandoc (macOS)",
    );
    this.name = "PandocNotFoundError";
  }
}

// ─── Public API ────────────────────────────────────────────────────────────

/**
 * Convert a DOCX file to PDF using pandoc.
 *
 * @param docxPath - Path to the source .docx file
 * @param outputPath - Path for the output .pdf file (optional; derived from docxPath if omitted)
 * @returns The path to the generated PDF file
 * @throws {PandocNotFoundError} If pandoc is not installed
 * @throws {ConverterError} If conversion fails
 */
export async function convertToPdf(docxPath: string, outputPath?: string): Promise<string> {
  // Check pandoc availability
  if (!(await isPandocAvailable())) {
    throw new PandocNotFoundError();
  }

  // Resolve output path
  const resolvedDocx = resolve(docxPath);
  const resolvedOutput = outputPath ?? resolvedDocx.replace(extname(resolvedDocx), ".pdf");

  try {
    await execa("pandoc", [
      resolvedDocx,
      "-o",
      resolvedOutput,
      "--from",
      "docx",
      "--to",
      "pdf",
      "--pdf-engine",
      "pdflatex",
    ]);
  } catch (error) {
    // If pdflatex is not available, try wktexample or fall back to basic pandoc
    if (error instanceof Error && error.message.includes("pdflatex")) {
      try {
        await execa("pandoc", [
          resolvedDocx,
          "-o",
          resolvedOutput,
          "--from",
          "docx",
          "--to",
          "pdf",
        ]);
      } catch (fallbackError) {
        throw new ConverterError(
          `PDF conversion failed. Ensure pandoc and a LaTeX engine (pdflatex or wkhtmltopdf) are installed.`,
          fallbackError,
        );
      }
    } else {
      throw new ConverterError(
        `PDF conversion failed: ${error instanceof Error ? error.message : String(error)}`,
        error,
      );
    }
  }

  return resolvedOutput;
}

/**
 * Check if pandoc is available in the system PATH.
 *
 * @returns true if pandoc is installed and accessible
 */
export async function isPandocAvailable(): Promise<boolean> {
  try {
    await execa("pandoc", ["--version"], { timeout: 5000 });
    return true;
  } catch {
    return false;
  }
}

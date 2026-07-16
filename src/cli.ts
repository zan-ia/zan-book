#!/usr/bin/env node

/**
 * CLI entry point — Zan Book command-line interface.
 *
 * Uses commander to expose three main commands:
 * - `zanbook extract`   — Extract book data from markdown sources
 * - `zanbook template`  — Manage DOCX templates and mappings
 * - `zanbook generate`  — Generate DOCX/PDF from extracted data
 */

import { readFile, writeFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

import { Command } from "commander";
import chalk from "chalk";

import { analyzeTemplate, analyzeTemplateWithAI } from "./analyzer.js";
import { createLlmProvider, type LlmProviderConfig } from "./llm.js";
import { renderBook, RendererError } from "./renderer.js";
import type { Book, TemplateMapping } from "./contracts.js";

const program = new Command();

// Resolve project root
const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(__dirname, "..");

program
  .name("zanbook")
  .description("Zan Book — Gerador de Livros a partir de Markdown")
  .version("0.1.0");

// ─── Config ────────────────────────────────────────────────────────────────

interface ZanBookConfig {
  llm?: {
    provider?: "openai" | "anthropic";
    model?: string;
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

async function loadConfig(): Promise<ZanBookConfig> {
  const configPath = join(projectRoot, "zanbook.config.json");
  try {
    const raw = await readFile(configPath, "utf-8");
    return JSON.parse(raw) as ZanBookConfig;
  } catch {
    return {};
  }
}

function getTemplatesDir(config: ZanBookConfig): string {
  return config.paths?.templatesDir ?? join(projectRoot, "templates");
}

// ─── extract ───────────────────────────────────────────────────────────────

program
  .command("extract")
  .description("Extract book data from markdown sources")
  .option("-s, --source <path>", "Path to the course directory")
  .option("-o, --output <path>", "Output JSON file path")
  .option("--cache", "Use cached extraction when available")
  .action(async (options) => {
    console.log(chalk.blue("📖 extract — Not yet implemented"));
    console.log(chalk.dim("  source:"), options.source ?? "(not set)");
    console.log(chalk.dim("  output:"), options.output ?? "(not set)");
    console.log(chalk.dim("  cache:"), options.cache ? "enabled" : "disabled");
  });

// ─── template ──────────────────────────────────────────────────────────────

program
  .command("template")
  .description("Manage DOCX templates and style mappings")
  .addCommand(createTemplateAddCommand())
  .addCommand(createTemplateListCommand());

function createTemplateAddCommand(): Command {
  const cmd = new Command("add")
    .description("Register a new DOCX template")
    .option("-n, --name <name>", "Template display name")
    .option("-f, --file <path>", "Path to the .docx template file")
    .option("--ai", "Use LLM Vision for style analysis")
    .action(async (options) => {
      const docxPath = options.file;
      const name = options.name;

      if (!docxPath) {
        console.error(chalk.red("❌ --file (-f) is required. Specify the path to a .docx file."));
        process.exit(1);
      }

      if (!existsSync(docxPath)) {
        console.error(chalk.red(`❌ File not found: ${docxPath}`));
        process.exit(1);
      }

      console.log(chalk.blue("📝 Analyzing template..."));
      console.log(chalk.dim(`  file: ${docxPath}`));
      if (name) console.log(chalk.dim(`  name: ${name}`));
      if (options.ai) console.log(chalk.dim(`  mode: AI Vision`));

      try {
        let mapping;

        if (options.ai) {
          // AI mode — use LLM Vision
          console.log(chalk.yellow("  Converting DOCX to images..."));
          console.log(chalk.dim("  (requires LibreOffice + poppler-utils)"));

          const config = await loadConfig();
          const llmConfig: LlmProviderConfig = {
            provider: config.llm?.provider ?? "openai",
            model: config.llm?.model ?? "gpt-4o",
            temperature: config.llm?.temperature,
            maxRetries: config.llm?.maxRetries,
          };

          const llm = createLlmProvider(llmConfig);
          mapping = await analyzeTemplateWithAI(docxPath, llm);

          console.log(chalk.yellow("\n🤖 AI Suggestion:"));
          console.log(chalk.dim(`  Confidence: ${mapping.styles ? "medium" : "low"}`));
          console.log("");
          console.log(chalk.bold("  Style Mapping:"));
          for (const [key, value] of Object.entries(mapping.styles)) {
            console.log(`    ${chalk.cyan(key.padEnd(20))} → ${chalk.green(value)}`);
          }
          console.log("");
          console.log(chalk.bold("  Annotation Style Mapping:"));
          for (const [key, value] of Object.entries(mapping.annotation_styles)) {
            console.log(`    ${chalk.cyan(key.padEnd(20))} → ${chalk.green(value)}`);
          }
          console.log("");
          console.log(chalk.dim(`  Rationale: AI analysis based on page images`));
        } else {
          // Auto mode — use heuristics
          mapping = await analyzeTemplate(docxPath);
        }

        // Apply user-provided name or derive from filename
        const finalName = name ?? mapping.name;
        mapping.id = finalName;
        mapping.name = finalName;

        // Save mapping to templates directory
        const configData = await loadConfig();
        const templatesDir = getTemplatesDir(configData);
        await mkdir(templatesDir, { recursive: true });
        const mappingPath = join(templatesDir, `${finalName}.mapping.json`);
        await writeFile(mappingPath, JSON.stringify(mapping, null, 2), "utf-8");

        console.log(chalk.green(`\n✅ Template mapping saved to: ${mappingPath}`));
        console.log(chalk.dim(`  ID: ${mapping.id}`));
        console.log(chalk.dim(`  Page size: ${mapping.page_size}`));
        if (Object.keys(mapping.margins).length > 0) {
          console.log(chalk.dim(`  Margins: ${JSON.stringify(mapping.margins)}`));
        }
      } catch (error) {
        console.error(
          chalk.red(`\n❌ Error analyzing template:`),
          error instanceof Error ? error.message : String(error),
        );
        process.exit(1);
      }
    });
  return cmd;
}

function createTemplateListCommand(): Command {
  const cmd = new Command("list").description("List registered templates").action(async () => {
    console.log(chalk.blue("📋 template list — Not yet implemented"));
  });
  return cmd;
}

// ─── generate ──────────────────────────────────────────────────────────────

program
  .command("generate")
  .description("Generate DOCX/PDF from extracted data")
  .option("-d, --data <path>", "Path to extracted book JSON")
  .option("-t, --template <name>", "Template name to use")
  .option("-f, --format <format>", "Output format (docx|pdf)", "docx")
  .option("-o, --output <path>", "Output file path")
  .action(async (options) => {
    const dataPath = options.data;
    const templateName = options.template;
    const format = options.format ?? "docx";
    const outputPath = options.output;

    if (!dataPath) {
      console.error(
        chalk.red("❌ --data (-d) is required. Specify the path to extracted book JSON."),
      );
      process.exit(1);
    }

    if (!templateName) {
      console.error(chalk.red("❌ --template (-t) is required. Specify the template name."));
      process.exit(1);
    }

    console.log(chalk.blue("⚙️  Generating document..."));
    console.log(chalk.dim(`  data:     ${dataPath}`));
    console.log(chalk.dim(`  template: ${templateName}`));
    console.log(chalk.dim(`  format:   ${format}`));

    try {
      // 1. Read book JSON
      const bookRaw = await readFile(dataPath, "utf-8");
      const book = JSON.parse(bookRaw) as Book;

      // 2. Find template mapping
      const config = await loadConfig();
      const templatesDir = getTemplatesDir(config);
      const mappingPath = join(templatesDir, `${templateName}.mapping.json`);

      if (!existsSync(mappingPath)) {
        console.error(chalk.red(`❌ Template mapping not found: ${mappingPath}`));
        console.error(chalk.dim("  Run `zanbook template add` first to register a template."));
        process.exit(1);
      }

      const mappingRaw = await readFile(mappingPath, "utf-8");
      const mapping = JSON.parse(mappingRaw) as TemplateMapping;

      // 3. Render book to DOCX
      console.log(chalk.yellow("  Rendering book to DOCX..."));
      const docxBuffer = await renderBook(book, mapping);

      // 4. Determine output path
      const outputDir = config.paths?.outputDir ?? join(projectRoot, "output");
      await mkdir(outputDir, { recursive: true });

      const finalOutput = outputPath ?? join(outputDir, `${book.id}.${format}`);

      // 5. Write output
      if (format === "docx") {
        await writeFile(finalOutput, docxBuffer);
        console.log(chalk.green(`\n✅ DOCX generated: ${finalOutput}`));
        console.log(chalk.dim(`  Size: ${(docxBuffer.length / 1024).toFixed(1)} KB`));
      } else if (format === "pdf") {
        console.error(chalk.yellow("\n⚠️ PDF conversion is not yet implemented (see Issue #6)."));
        // Fall back to DOCX output
        const docxOutput = finalOutput.replace(/\.pdf$/i, ".docx");
        await writeFile(docxOutput, docxBuffer);
        console.log(chalk.green(`\n✅ DOCX generated instead: ${docxOutput}`));
        console.log(chalk.dim(`  Size: ${(docxBuffer.length / 1024).toFixed(1)} KB`));
      } else {
        console.error(chalk.red(`❌ Unsupported format: ${format}. Use "docx" or "pdf".`));
        process.exit(1);
      }
    } catch (error) {
      if (error instanceof RendererError) {
        console.error(chalk.red(`\n❌ Renderer error:`), error.message);
      } else if (error instanceof SyntaxError) {
        console.error(
          chalk.red(`\n❌ Invalid JSON in book data or template mapping:`),
          error.message,
        );
      } else {
        console.error(
          chalk.red(`\n❌ Error generating document:`),
          error instanceof Error ? error.message : String(error),
        );
      }
      process.exit(1);
    }
  });

// ─── Main ──────────────────────────────────────────────────────────────────

program.parseAsync(process.argv).catch((err: unknown) => {
  console.error(chalk.red("Fatal error:"), err);
  process.exit(1);
});

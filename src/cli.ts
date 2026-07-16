#!/usr/bin/env node

/**
 * CLI entry point — Zan Book command-line interface.
 *
 * Uses commander to expose three main commands:
 * - `zanbook extract`   — Extract book data from markdown sources
 * - `zanbook template`  — Manage DOCX templates and mappings
 * - `zanbook generate`  — Generate DOCX/PDF from extracted data
 */

import "dotenv/config";

import { readFile, writeFile, mkdir, rm, readdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

import { Command } from "commander";
import chalk from "chalk";

import { analyzeTemplate, analyzeTemplateWithAI } from "./analyzer.js";
import { createLlmProvider, type LlmProviderConfig } from "./llm.js";
import { renderBook, RendererError } from "./renderer.js";
import { extractBook, type BookResult } from "./extractor.js";
import type { Book, TemplateMapping } from "./contracts.js";

const program = new Command();

// Resolve project root
const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(__dirname, "..");

program
  .name("zanbook")
  .description("Zan Book — Gerador de Livros a partir de Markdown")
  .version("0.1.0")
  .option("-v, --verbose", "Enable verbose output", false);

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

function isVerbose(): boolean {
  return program.opts().verbose;
}

function logVerbose(...args: unknown[]): void {
  if (isVerbose()) {
    console.log(chalk.dim("[verbose]"), ...args);
  }
}

// ─── extract ───────────────────────────────────────────────────────────────

program
  .command("extract")
  .description("Extract book data from markdown sources")
  .option("-s, --source <path>", "Path to the course directory")
  .option("-o, --output <path>", "Output JSON file path")
  .option("--cache", "Use cached extraction when available")
  .option("--force", "Force re-extract ignoring cache")
  .action(async (options) => {
    const sourcePath = options.source;
    const outputPath = options.output;

    if (!sourcePath) {
      console.error(chalk.red("❌ --source (-s) is required. Specify the course directory."));
      process.exit(1);
    }

    if (!existsSync(sourcePath)) {
      console.error(chalk.red(`❌ Source directory not found: ${sourcePath}`));
      process.exit(1);
    }

    console.log(chalk.blue("\n📖 Extracting book..."));
    console.log(chalk.dim(`  source: ${sourcePath}`));
    console.log(chalk.dim(`  cache:  ${options.cache ? "enabled" : "disabled"}`));

    try {
      logVerbose("Starting extraction pipeline...");
      const result: BookResult = await extractBook(sourcePath, {
        cache: options.cache ?? true,
        force: options.force ?? false,
      });

      // Print summary
      console.log("");
      console.log(chalk.bold(`📚 ${result.book.title}`));
      if (result.book.subtitle) {
        console.log(chalk.dim(`   ${result.book.subtitle}`));
      }
      console.log(chalk.dim(`   ${result.book.lessons.length} aulas`));
      console.log("");

      // Print per-lesson results with cache stats
      let hits = 0;
      let misses = 0;
      for (const lr of result.lessonResults) {
        const icon = lr.cached ? chalk.blue("⚡") : chalk.green("✓");
        const cached = lr.cached ? chalk.dim(" (cached)") : "";
        console.log(`   ${icon} Aula ${lr.lesson.number}: ${lr.lesson.title}${cached}`);
        if (lr.cached) hits++;
        else misses++;
      }

      // Print cache summary
      if (options.cache && (hits > 0 || misses > 0)) {
        const total = hits + misses;
        const hitPct = ((hits / total) * 100).toFixed(0);
        console.log("");
        console.log(chalk.dim(`   ⚡ Cache: ${hits}/${total} lessons (${hitPct}% hit rate)`));
      }

      // Print errors if any
      if (result.errors.length > 0) {
        console.log("");
        console.log(chalk.yellow(`⚠️  ${result.errors.length} lesson(s) had errors:`));
        for (const err of result.errors) {
          console.log(chalk.red(`   Aula ${err.lesson}: ${err.error}`));
        }
      }

      // Save output
      const outputDir = dirname(outputPath ?? ".");
      if (outputPath) {
        await mkdir(outputDir, { recursive: true });
        await writeFile(outputPath, JSON.stringify(result.book, null, 2), "utf-8");
        console.log(chalk.green(`\n✅ Book data saved to: ${outputPath}`));
      }
    } catch (error) {
      console.error(
        chalk.red("\n❌ Extraction failed:"),
        error instanceof Error ? error.message : String(error),
      );
      process.exit(1);
    }
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
        console.error(
          chalk.dim("  Usage: zanbook template add --file template.docx --name 'My Template'"),
        );
        process.exit(1);
      }

      if (!existsSync(docxPath)) {
        console.error(chalk.red(`❌ File not found: ${docxPath}`));
        process.exit(1);
      }

      console.log(chalk.blue("\n📝 Analyzing template..."));
      console.log(chalk.dim(`  file: ${docxPath}`));
      if (name) console.log(chalk.dim(`  name: ${name}`));
      console.log(chalk.dim(`  mode: ${options.ai ? "AI Vision" : "Auto (heuristics)"}`));

      try {
        let mapping;

        if (options.ai) {
          // AI mode — use LLM Vision
          console.log(chalk.yellow("\n  Converting DOCX to images..."));
          console.log(chalk.dim("  (requires LibreOffice + poppler-utils)"));

          const config = await loadConfig();
          const llmConfig: LlmProviderConfig = {
            provider: config.llm?.provider ?? "openai",
            model: config.llm?.model ?? process.env.ZANBOOK_MODEL ?? "gpt-4o",
            baseURL: config.llm?.baseURL ?? process.env.OPENROUTER_BASE_URL,
            temperature: config.llm?.temperature,
            maxRetries: config.llm?.maxRetries,
          };

          logVerbose("Creating LLM provider...");
          const llm = createLlmProvider(llmConfig);
          mapping = await analyzeTemplateWithAI(docxPath, llm);

          console.log(chalk.yellow("\n🤖 AI Suggestion:"));
          console.log("");
          printStyleMapping(mapping.styles);
          console.log("");
          console.log(chalk.bold("  Annotation Styles:"));
          printStyleMapping(mapping.annotation_styles);
        } else {
          // Auto mode — use heuristics
          logVerbose("Running heuristic analysis...");
          mapping = await analyzeTemplate(docxPath);

          console.log(chalk.green("\n✅ Heuristic analysis complete!"));
          console.log("");
          console.log(chalk.bold(`  Page size: ${mapping.page_size}`));
          if (Object.keys(mapping.margins).length > 0) {
            console.log(
              chalk.dim(
                `  Margins: top=${mapping.margins.top} bottom=${mapping.margins.bottom} left=${mapping.margins.left} right=${mapping.margins.right}`,
              ),
            );
          }
          console.log("");
          printStyleMapping(mapping.styles);
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

        console.log(chalk.green(`\n✅ Template mapping saved!`));
        console.log(chalk.dim(`  Path: ${mappingPath}`));
      } catch (error) {
        console.error(
          chalk.red(`\n❌ Error analyzing template:`),
          error instanceof Error ? error.message : String(error),
        );
        if (isVerbose() && error instanceof Error && error.stack) {
          console.error(chalk.dim(error.stack));
        }
        process.exit(1);
      }
    });
  return cmd;
}

function createTemplateListCommand(): Command {
  const cmd = new Command("list").description("List registered templates").action(async () => {
    const config = await loadConfig();
    const templatesDir = getTemplatesDir(config);

    if (!existsSync(templatesDir)) {
      console.log(chalk.yellow("\n⚠️ No templates directory found."));
      console.log(chalk.dim(`  Expected at: ${templatesDir}`));
      console.log(chalk.dim("  Run `zanbook template add` to register a template."));
      return;
    }

    try {
      const files = await readdir(templatesDir);
      const mappingFiles = files.filter((f) => f.endsWith(".mapping.json"));

      if (mappingFiles.length === 0) {
        console.log(chalk.yellow("\n⚠️ No templates registered."));
        console.log(
          chalk.dim("  Run `zanbook template add --file template.docx` to register one."),
        );
        return;
      }

      console.log(chalk.blue(`\n📋 Registered Templates (${mappingFiles.length}):`));
      console.log("");

      for (const file of mappingFiles) {
        const filePath = join(templatesDir, file);
        try {
          const raw = await readFile(filePath, "utf-8");
          const mapping = JSON.parse(raw) as TemplateMapping;

          console.log(`  ${chalk.cyan(mapping.name)}`);
          console.log(chalk.dim(`    ID: ${mapping.id}`));
          console.log(chalk.dim(`    Styles: ${Object.keys(mapping.styles).length} mapped`));
          console.log(chalk.dim(`    Page: ${mapping.page_size}`));
          console.log(chalk.dim(`    File: ${filePath}`));
          console.log("");
        } catch {
          console.log(`  ${chalk.red("⚠️  Invalid mapping:")} ${file}`);
        }
      }
    } catch (error) {
      console.error(
        chalk.red("❌ Error listing templates:"),
        error instanceof Error ? error.message : String(error),
      );
      process.exit(1);
    }
  });
  return cmd;
}

/** Print a style mapping table to the console. */
function printStyleMapping(styles: Record<string, string>): void {
  for (const [key, value] of Object.entries(styles)) {
    console.log(`  ${chalk.cyan(key.padEnd(20))} ${chalk.dim("→")} ${chalk.green(value)}`);
  }
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

    console.log(chalk.blue("\n⚙️  Generating document..."));
    console.log(chalk.dim(`  data:     ${dataPath}`));
    console.log(chalk.dim(`  template: ${templateName}`));
    console.log(chalk.dim(`  format:   ${format}`));

    try {
      // 1. Read book JSON
      logVerbose("Reading book data...");
      const bookRaw = await readFile(dataPath, "utf-8");
      const book = JSON.parse(bookRaw) as Book;

      logVerbose(`Book: "${book.title}" (${book.lessons.length} lessons)`);

      // 2. Find template mapping
      const config = await loadConfig();
      const templatesDir = getTemplatesDir(config);
      const mappingPath = join(templatesDir, `${templateName}.mapping.json`);

      if (!existsSync(mappingPath)) {
        console.error(chalk.red(`\n❌ Template mapping not found: ${mappingPath}`));
        console.error(chalk.dim("  Run `zanbook template add` first to register a template."));
        console.error(chalk.dim("  Or list available templates with `zanbook template list`."));
        process.exit(1);
      }

      const mappingRaw = await readFile(mappingPath, "utf-8");
      const mapping = JSON.parse(mappingRaw) as TemplateMapping;

      // 3. Render book to DOCX
      console.log(chalk.yellow("\n  Rendering book..."));
      const docxBuffer = await renderBook(book, mapping);

      // 4. Determine output path
      const outputDir = config.paths?.outputDir ?? join(projectRoot, "output");
      await mkdir(outputDir, { recursive: true });

      const finalOutput = outputPath ?? join(outputDir, `${book.id}.${format}`);

      // 5. Write output
      if (format === "docx") {
        await writeFile(finalOutput, docxBuffer);
        console.log(chalk.green(`\n✅ DOCX generated!`));
        console.log(chalk.dim(`  File: ${finalOutput}`));
        console.log(chalk.dim(`  Size: ${formatBytes(docxBuffer.length)}`));
        console.log(chalk.dim(`  Pages: ${book.lessons.length} lessons`));
      } else if (format === "pdf") {
        // Write temporary DOCX, then convert via pandoc
        const tempDocx = join(outputDir, `${book.id}.tmp.docx`);
        await writeFile(tempDocx, docxBuffer);
        console.log(chalk.yellow("\n  Converting to PDF via pandoc..."));

        const { convertToPdf, PandocNotFoundError } = await import("./converter.js");
        try {
          const pdfPath = await convertToPdf(tempDocx, finalOutput);
          console.log(chalk.green(`\n✅ PDF generated!`));
          console.log(chalk.dim(`  File: ${pdfPath}`));
          console.log(chalk.dim(`  DOCX size: ${formatBytes(docxBuffer.length)}`));
        } catch (err) {
          if (err instanceof PandocNotFoundError) {
            console.error(chalk.red("\n❌ pandoc not found."));
            console.error(chalk.dim("  Install: sudo apt install pandoc (Linux)"));
            console.error(chalk.dim("  Or: brew install pandoc (macOS)"));
            // Fall back to DOCX
            const docxOutput = finalOutput.replace(/\.pdf$/i, ".docx");
            await writeFile(docxOutput, docxBuffer);
            console.log(chalk.green(`\n✅ DOCX generated instead: ${docxOutput}`));
          } else {
            throw err;
          }
        } finally {
          // Clean up temporary DOCX
          await rm(tempDocx, { force: true }).catch(() => {});
        }
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
      if (isVerbose() && error instanceof Error && error.stack) {
        console.error(chalk.dim(error.stack));
      }
      process.exit(1);
    }
  });

// ─── cache ────────────────────────────────────────────────────────────────

program
  .command("cache")
  .description("Manage extraction cache")
  .addCommand(createCacheStatsCommand())
  .addCommand(createCacheClearCommand())
  .addCommand(createCacheErrorsCommand());

function createCacheStatsCommand(): Command {
  const cmd = new Command("stats").description("Show cache statistics").action(async () => {
    const config = await loadConfig();
    const cacheDir = config.paths?.cacheDir ?? join(projectRoot, "cache");
    const { CacheManager } = await import("./cache.js");
    const cache = new CacheManager(cacheDir);

    const stats = await cache.getStats();
    console.log(chalk.blue("\n📊 Cache Statistics"));
    console.log("");
    console.log(chalk.dim(`  Directory: ${cacheDir}`));
    console.log(chalk.dim(`  Entries:   ${chalk.bold(String(stats.entries))}`));
    console.log(chalk.dim(`  Size:      ${chalk.bold(formatBytes(stats.sizeBytes))}`));
    console.log("");
    if (stats.entries === 0) {
      console.log(
        chalk.yellow("  ⚠️  Cache is empty. Run `zanbook extract --cache` to populate it."),
      );
    }
  });
  return cmd;
}

function createCacheClearCommand(): Command {
  const cmd = new Command("clear")
    .description("Clear all cached entries")
    .option("-f, --force", "Skip confirmation")
    .action(async (options) => {
      const config = await loadConfig();
      const cacheDir = config.paths?.cacheDir ?? join(projectRoot, "cache");
      const { CacheManager } = await import("./cache.js");
      const cache = new CacheManager(cacheDir);

      const stats = await cache.getStats();
      if (stats.entries === 0) {
        console.log(chalk.yellow("\n⚠️  Cache is already empty."));
        return;
      }

      if (!options.force) {
        console.log(
          chalk.yellow(
            `\n⚠️  ${stats.entries} entries (${formatBytes(stats.sizeBytes)}) will be deleted.`,
          ),
        );
        console.log(chalk.dim("  Use --force to confirm."));
        return;
      }

      const removed = await cache.clear();
      console.log(chalk.green(`\n✅ Cache cleared: ${removed} entries removed.`));
    });
  return cmd;
}

function createCacheErrorsCommand(): Command {
  const cmd = new Command("errors")
    .description("Show logged extraction errors")
    .action(async () => {
      const config = await loadConfig();
      const cacheDir = config.paths?.cacheDir ?? join(projectRoot, "cache");
      const { CacheManager } = await import("./cache.js");

      const errors = await CacheManager.getErrors(cacheDir);
      if (errors.length === 0) {
        console.log(chalk.green("\n✅ No extraction errors logged."));
        return;
      }

      console.log(chalk.yellow(`\n⚠️  ${errors.length} extraction error(s) logged:`));
      console.log("");
      for (const err of errors) {
        const date = new Date(err.timestamp).toLocaleString();
        console.log(`  ${chalk.red("✗")} Aula ${err.lesson} ${chalk.dim(`(${date})`)}`);
        console.log(chalk.dim(`    ${err.error}`));
        console.log("");
      }
      console.log(chalk.dim("  Run `zanbook cache clear` to clear errors after reviewing."));
    });
  return cmd;
}

// ─── Helpers ───────────────────────────────────────────────────────────────

/** Format bytes to human-readable string. */
function formatBytes(bytes: number): string {
  if (bytes === 0) return "0 B";
  const units = ["B", "KB", "MB", "GB"];
  const i = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), units.length - 1);
  return `${(bytes / Math.pow(1024, i)).toFixed(1)} ${units[i]}`;
}

// ─── Main ──────────────────────────────────────────────────────────────────

program.parseAsync(process.argv).catch((err: unknown) => {
  console.error(chalk.red("Fatal error:"), err);
  process.exit(1);
});

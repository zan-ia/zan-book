#!/usr/bin/env node

/**
 * CLI entry point — Zan Book command-line interface.
 *
 * Uses commander to expose three main commands:
 * - `zanbook extract`   — Extract book data from markdown sources
 * - `zanbook template`  — Manage DOCX templates and mappings
 * - `zanbook generate`  — Generate DOCX/PDF from extracted data
 */

import { Command } from "commander";
import chalk from "chalk";

const program = new Command();

program
  .name("zanbook")
  .description("Zan Book — Gerador de Livros a partir de Markdown")
  .version("0.1.0");

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
      console.log(chalk.blue("📝 template add — Not yet implemented"));
      console.log(chalk.dim("  name:"), options.name ?? "(not set)");
      console.log(chalk.dim("  file:"), options.file ?? "(not set)");
      console.log(chalk.dim("  ai:"), options.ai ? "enabled" : "disabled");
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
    console.log(chalk.blue("⚙️  generate — Not yet implemented"));
    console.log(chalk.dim("  data:"), options.data ?? "(not set)");
    console.log(chalk.dim("  template:"), options.template ?? "(not set)");
    console.log(chalk.dim("  format:"), options.format);
    console.log(chalk.dim("  output:"), options.output ?? "(not set)");
  });

// ─── Main ──────────────────────────────────────────────────────────────────

program.parseAsync(process.argv).catch((err: unknown) => {
  console.error(chalk.red("Fatal error:"), err);
  process.exit(1);
});

# Implementation Plan — Issue #1: Project Scaffolding

**Date:** 2026-07-15
**Type:** feature
**Complexity:** Low
**Branch:** `feat/project-scaffolding`

---

## 1. Approach Summary

Set up the Node.js + TypeScript foundation for Zan Book: create `package.json` with all production and dev dependencies (zod, unified ecosystem, docx, exc, commander, chalk, OpenAI/Anthropic SDKs), configure `tsconfig.json` with strict mode and ES2022 target, add `zanbook.config.json` with the default configuration, create the `src/` directory with placeholder files for each module (contracts, extractor, analyzer, renderer, converter, CLI, index), and add npm scripts for the full build/dev/lint/test cycle. The project uses ESM (`"type": "module"`) because key dependencies (unified@11, chalk@5, execa@9) are ESM-only.

## 2. Files to Create

| File | Action | Description |
|------|--------|-------------|
| `package.json` | CREATE | Project metadata, all dependencies, npm scripts |
| `tsconfig.json` | CREATE | Strict TypeScript config, ES2022 target, NodeNext module |
| `zanbook.config.json` | CREATE | Default configuration (paths, LLM, template defaults) |
| `src/contracts.ts` | CREATE | Zod schemas placeholder (Book, Lesson, TemplateMapping) |
| `src/extractor.ts` | CREATE | Extractor module placeholder (MD parser + LLM extraction) |
| `src/analyzer.ts` | CREATE | Analyzer module placeholder (DOCX → TemplateMapping) |
| `src/renderer.ts` | CREATE | Renderer module placeholder (AST → DOCX with styles) |
| `src/converter.ts` | CREATE | Converter module placeholder (DOCX → PDF via pandoc) |
| `src/cli.ts` | CREATE | CLI entry point placeholder (commander-based) |
| `src/index.ts` | CREATE | Main entry point — re-exports all public API |
| `cache/.gitkeep` | CREATE | Placeholder to version the cache directory |
| `output/.gitkeep` | CREATE | Placeholder to version the output directory |

## 3. Patterns to Follow

- **Conventions:** 
  - ESM module system (`"type": "module"` + NodeNext module resolution)
  - Strict TypeScript with explicit `import type` for type-only imports
  - Source code exclusively in `src/`, compiled output in `dist/`
  - CLI tool with `bin` entry point (commander) + programmatic API via `src/index.ts`
- **Reference:** README.md defines the full architecture — the placeholders match the module names from the README's structure diagram
- **Naming:** kebab-case for files, PascalCase for type/class names, camelCase for functions/variables
- **Dependency management:** `execa` for shell commands (pandoc, mermaid-cli), `docx` package for DOCX generation, `unified` + `remark-parse` for markdown parsing

## 4. Dependencies

### Production Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `zod` | `^3.23.8` | Runtime validation + TypeScript type inference |
| `unified` | `^11.0.5` | Markdown parsing pipeline |
| `remark-parse` | `^11.0.0` | Markdown → AST parser |
| `remark-frontmatter` | `^5.0.0` | YAML frontmatter extraction |
| `docx` | `^8.5.0` | DOCX generation with named styles |
| `execa` | `^9.3.0` | Safe subprocess execution (pandoc, mermaid-cli) |
| `commander` | `^12.1.0` | CLI framework |
| `chalk` | `^5.3.0` | Terminal colors |
| `openai` | `^4.52.0` | OpenAI SDK for LLM extraction |
| `@anthropic-ai/sdk` | `^0.27.0` | Anthropic SDK for LLM extraction (alternative) |

### Dev Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `typescript` | `^5.5.4` | TypeScript compiler |
| `@types/node` | `^20.14.0` | Node.js type definitions |
| `tsx` | `^4.16.0` | TypeScript execution for development |
| `vitest` | `^2.0.5` | Testing framework |
| `eslint` | `^9.8.0` | Linter (flat config) |
| `prettier` | `^3.3.3` | Code formatter |

## 5. Implementation Order

1. **Create directories** — `src/`, `output/`, `cache/` (with `.gitkeep` placeholders)
2. **Create `package.json`** — all deps, scripts, ESM config
3. **Create `tsconfig.json`** — strict, ES2022, NodeNext
4. **Create `zanbook.config.json`** — default config from README
5. **Create `src/contracts.ts`** — export the zod schemas defined in the README (BookSchema, LessonSchema, etc.) with proper types inferred
6. **Create `src/extractor.ts`** — placeholder with exported function signature `extractBook(sourcePath: string): Promise<Book>`
7. **Create `src/analyzer.ts`** — placeholder with exported function signature `analyzeTemplate(docxPath: string): Promise<TemplateMapping>`
8. **Create `src/renderer.ts`** — placeholder with exported function signature `renderBook(book: Book, mapping: TemplateMapping): Promise<Buffer>`
9. **Create `src/converter.ts`** — placeholder with exported function signature `convertToPdf(docxPath: string): Promise<string>`
10. **Create `src/cli.ts`** — commander-based CLI with `zanbook extract`, `zanbook template`, `zanbook generate` commands, each logging "not implemented"
11. **Create `src/index.ts`** — re-export all public API from other modules
12. **Install dependencies** — `npm install`
13. **Verify** — `npm run typecheck` + `npm run build` must pass

## 6. Key Configuration Details

### package.json Scripts

```json
{
  "scripts": {
    "build": "tsc",
    "dev": "tsx watch src/cli.ts",
    "start": "node dist/cli.js",
    "lint": "eslint src/",
    "lint:fix": "eslint src/ --fix",
    "typecheck": "tsc --noEmit",
    "test": "vitest run",
    "test:watch": "vitest",
    "format": "prettier --write src/",
    "format:check": "prettier --check src/",
    "clean": "rm -rf dist output cache"
  }
}
```

### tsconfig.json Key Options

| Option | Value | Reason |
|--------|-------|--------|
| `target` | `ES2022` | Modern Node.js (18+) supports ES2022 natively |
| `module` | `NodeNext` | Required for ESM projects with Node.js |
| `moduleResolution` | `NodeNext` | Paired with NodeNext module |
| `strict` | `true` | Full strict type checking |
| `outDir` | `dist` | Compiled output |
| `rootDir` | `src` | Source root |
| `declaration` | `true` | Generate `.d.ts` files for library consumers |
| `sourceMap` | `true` | Debugging support |

## 7. Identified Risks

| Risk | Likelihood | Mitigation |
|------|-----------|------------|
| ESM/CJS interop issues with some packages | Low | All chosen packages have ESM support; `docx` package confirmed compatible |
| `.gitignore` already excludes `zanbook.config.json` | High — it's already in `.gitignore` | The file needs to be created anyway; the config will be local-only. Add a `zanbook.config.example.json` as the tracked reference |
| Missing `output/` and `cache/` in `.gitignore` | Low | Already covered by existing `.gitignore` patterns |

## 8. Acceptance Criteria

- [ ] `package.json` created with all dependencies and scripts
- [ ] `tsconfig.json` created with strict mode and ES2022 target
- [ ] `zanbook.config.json` created with default configuration
- [ ] `src/` directory created with all placeholder files (contracts.ts, extractor.ts, analyzer.ts, renderer.ts, converter.ts, cli.ts, index.ts)
- [ ] `npm install` succeeds without errors
- [ ] `npm run typecheck` passes without errors
- [ ] `npm run build` produces `dist/` with compiled JavaScript
- [ ] `npm run dev` starts the CLI with "not implemented" output
- [ ] `output/` and `cache/` directories exist and are gitignored

## 9. References

- Issue: [#1](https://github.com/zan-ia/zan-book/issues/1) — Project Scaffolding
- Instructions: `.github/instructions/project-organization.instructions.md` (SvelteKit-specific, but general directory conventions apply)
- README: Full architecture and contract definitions

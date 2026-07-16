# Copilot Instructions — Harness Conventions

> **Harness version:** generic (project-agnostic).  
> For project-specific stack, conventions, and architecture, see the project root `README.md` and `.github/instructions/`.

## Universal Rules

### Git & PRs

- **NEVER merge directly to `main`** — ALWAYS create a Pull Request, even if merging immediately after
- PR-only mainline policy: every change lands on `main` through a PR, no exceptions
- Use Conventional Commits: `fix:`, `feat:`, `improve:`, `harness:`, `docs:`
- Branch naming: `{type}/{short-description}` (e.g., `fix/header-colors`, `feat/add-search`)

### Tool Usage

- `vscode/askQuestions` — MANDATORY for any ambiguity; never assume user preferences. NEVER ask questions in plain text
- `manage_todo_list` — Create list BEFORE starting any task with 3+ steps, 1 step in-progress at a time, mark completed immediately
- Subagents — Prefer specialized agents (`planner`, `implementer`, `reviewer`) for pipeline tasks via `runSubagent`
- Memory — Use `/memories/session/` for pipeline state tracking

### Quality

- Run project build/lint commands before committing — CI gate
- **MANDATORY: Use `vscode/askQuestions` tool for ANY user communication — NEVER ask questions in plain text**
- **MANDATORY: Use `manage_todo_list` tool to track sequential execution for any task with 3+ steps**

### Environment & Secrets

- ALL secrets in environment files — NEVER hardcode tokens or API keys
- Document all required environment variables in an example file

## Project-Specific Conventions

Consult these sources for project-specific rules (loaded automatically via `applyTo` patterns):

| Source       | Location                | Purpose                                          |
| ------------ | ----------------------- | ------------------------------------------------ |
| Instructions | `.github/instructions/` | Per-filetype rules (CSS, HTML, TypeScript, etc.) |
| Agents       | `.github/agents/`       | Specialized agent personas                       |
| Skills       | `.github/skills/`       | Reusable workflows                               |
| Prompts      | `.github/prompts/`      | Task-specific slash commands                     |

## Harness Architecture

This `.github/` harness implements a **Plan → Implement → Review** pipeline:

```
User Request → Orchestrator → Issue → Branch → Planner → Implementer → Reviewer → PR
```

See `.github/instructions/pipeline-workflow.instructions.md` for the complete workflow specification.

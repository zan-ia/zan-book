# Implementation Plan — Issue #{N}: Harness Audit Fixes

**Date:** 2026-07-15
**Type:** improvement
**Complexity:** High
**Branch:** improve/harness-audit-fixes

---

## 1. Approach Summary

Apply all fixes identified in the VS Code Copilot customization documentation audit (2026-07-15). Organized into 3 phases ordered by impact/effort ratio. Each phase can be implemented independently. The most impactful change is agent renaming (PT→EN) which has cross-cutting references in 27+ files.

---

## 2. Files to Modify

### Phase 1 — Immediate Fixes (6 items, ~20 files)

| File                                             | Action | Rationale                                                                      |
| ------------------------------------------------ | ------ | ------------------------------------------------------------------------------ |
| `.github/artifacts/README.md`                    | CREATE | Engineer agent writes workflow artifacts here; directory was missing           |
| `.github/agents/task-code-reviewer.agent.md`     | DELETE | Ghost agent — no body, no description; empty file                              |
| `.github/copilot-instructions.md`                | MODIFY | References `AGENTS.md` which doesn't exist in this repo                        |
| `.github/agents/harness-engineer.agent.md`  | MODIFY | Description doesn't mention auto-learn mode                                    |
| `.github/skills/pipeline-orchestration/SKILL.md` | MODIFY | Description says "Plan→Implement→Review" — missing Engineer phase              |
| `.github/skills/model-providers/SKILL.md`        | MODIFY | ~61 lines with residual Portuguese characters in table cells                   |
| `.github/prompts/start-research.prompt.md`       | MODIFY | Description has residual text from old flow ("Creates a 🔬 research issue...") |

### Phase 2 — Structural Cleanup (5 items, ~50 files)

| File                                                        | Action          | Rationale                                                                                                                                                                                                                                                          |
| ----------------------------------------------------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 7 agent files + cross-references in 27+ files               | RENAME + UPDATE | Rename PT-named agents to EN: `orchestrator`→`orchestrator`, `planner`→`planner`, `implementer`→`implementer`, `reviewer`→`reviewer`, `content-creator`→`content-creator`, `layout-designer`→`layout-designer`, `harness-engineer`→`harness-engineer` |
| `.github/instructions/css.instructions.md`                  | ARCHIVE/REMOVE  | SvelteKit-specific; `applyTo: src/**/*.svelte` — no Svelte files in this repo                                                                                                                                                                                      |
| `.github/instructions/svelte.instructions.md`               | ARCHIVE/REMOVE  | Svelte 5 runes — no Svelte files in this repo                                                                                                                                                                                                                      |
| `.github/instructions/typescript.instructions.md`           | ARCHIVE/REMOVE  | TypeScript for SvelteKit landing page — no TS files in this repo                                                                                                                                                                                                   |
| `.github/instructions/deploy.instructions.md`               | ARCHIVE/REMOVE  | GitHub Pages + SvelteKit adapter-static — not applicable                                                                                                                                                                                                           |
| `.github/instructions/html.instructions.md`                 | ARCHIVE/REMOVE  | Svelte components markup — no Svelte files in this repo                                                                                                                                                                                                            |
| `.github/instructions/style-architecture.instructions.md`   | ARCHIVE/REMOVE  | Glass-panel, MD3 palette, badges — SvelteKit-specific                                                                                                                                                                                                              |
| `.github/instructions/project-organization.instructions.md` | MODIFY          | Shows SvelteKit `src/` structure — should be project-agnostic                                                                                                                                                                                                      |
| `.github/skills/design-patterns/SKILL.md`                   | MODIFY          | Add `context: fork` (250+ lines, should run in dedicated subagent)                                                                                                                                                                                                 |
| `.github/skills/devops/SKILL.md`                            | MODIFY          | Add `context: fork` (280+ lines)                                                                                                                                                                                                                                   |
| `.github/skills/agents-engineering/SKILL.md`                | MODIFY          | Add `context: fork`                                                                                                                                                                                                                                                |
| `.github/skills/backend-engineering/SKILL.md`               | MODIFY          | Add `context: fork`                                                                                                                                                                                                                                                |
| `.github/skills/frontend-engineering/SKILL.md`              | MODIFY          | Add `context: fork`                                                                                                                                                                                                                                                |
| `.github/skills/system-engineering/SKILL.md`                | MODIFY          | Add `context: fork`                                                                                                                                                                                                                                                |
| `.github/skills/aesthetic-engineering/SKILL.md`             | MODIFY          | Add `context: fork`                                                                                                                                                                                                                                                |
| `.github/skills/experience-engineering/SKILL.md`            | MODIFY          | Add `context: fork`                                                                                                                                                                                                                                                |
| `.github/skills/product-engineering/SKILL.md`               | MODIFY          | Add `context: fork`                                                                                                                                                                                                                                                |
| `.github/skills/model-providers/SKILL.md`                   | MODIFY          | Add `context: fork` (200+ lines)                                                                                                                                                                                                                                   |
| `.github/skills/pipeline-orchestration/SKILL.md`            | MODIFY          | Add `context: fork`                                                                                                                                                                                                                                                |

### Phase 3 — Optimization (3 items, ~12 files)

| File                                     | Action   | Rationale                                                                       |
| ---------------------------------------- | -------- | ------------------------------------------------------------------------------- |
| Various agent handoffs                   | MODIFY   | Add `model` field to handoffs for cost optimization                             |
| 9 domain expert skill dirs               | MODIFY   | Add `templates/` or `examples/` subdirectories with reference material          |
| `task-browser`, `task-researcher` agents | MODIFY   | Rename to `browser`, `researcher` — unify naming convention (no `task-` prefix) |
| `Explore` agent                          | DOCUMENT | Note that `Explore` is a built-in VS Code agent, not a custom one               |

---

## 3. Patterns to Follow

- **Agent renames**: Use `vscode_renameSymbol` where supported; otherwise use `sed` for bulk find-and-replace
- **Fork skills**: Add `context: fork` to frontmatter, enable `github.copilot.chat.skillTool.enabled` in recommendation
- **Description updates**: Minimum change — update only the specific text, keep the rest intact
- **File renames**: Use `mv` with exact path, verify all cross-references after rename
- **Instruction cleanup**: Move to `.github/archive/` instead of deleting (preserve history)

## 4. Implementation Order

### Phase 1 (low risk, independent steps)

1. Create `.github/artifacts/README.md` — no dependencies
2. Delete `task-code-reviewer.agent.md` — no dependencies
3. Fix `copilot-instructions.md` — no dependencies
4. Update `harness-engineer` description — no dependencies
5. Update `pipeline-orchestration` description — no dependencies
6. Fix `start-research.prompt.md` description — no dependencies
7. Translate `model-providers` PT→EN — no dependencies

### Phase 2 (sequential — agent renames first, then cross-references)

1. Rename 7 agent files (`mv` old names → new names)
2. Bulk sed: replace old agent names → new names in ALL `.github/` files
3. Archive SvelteKit instructions (6 files → `.github/archive/`)
4. Modify `project-organization.instructions.md`
5. Add `context: fork` to all 11 knowledge skills

### Phase 3 (optimizations)

1. Add `model` field to handoffs
2. Create `templates/` directories
3. Unify naming convention

## 5. Identified Risks

| Risk                                                             | Likelihood | Mitigation                                              |
| ---------------------------------------------------------------- | ---------- | ------------------------------------------------------- |
| Agent rename breaks handoffs                                     | Medium     | Test each handoff after rename; sed dry-run first       |
| `context: fork` not supported without setting flag               | Medium     | Note the requirement in plan; test with one skill first |
| Removing SvelteKit instructions breaks future Svelte projects    | Low        | Archive to `.github/archive/`, don't delete             |
| Bulk sed replaces partial matches (e.g., "reviewer" in "revisar") | Low        | Use word-boundary regex (`\b`) in sed patterns          |
| `Explore` agent not actually available                           | Low        | `Explore` is a built-in VS Code agent; verify in docs   |
| Task-code-reviewer deletion referenced by orchestrator           | Medium     | Check all `agents:` lists before deleting               |

## 6. Acceptance Criteria

- [ ] `.github/artifacts/` exists with README explaining purpose
- [ ] No Portuguese agent names in `.github/**` (zero occurrences of `orchestrator`, `planner`, `implementer`, `reviewer`, `content-creator`, `layout-designer`, `harness-engineer`)
- [ ] All agent file renames complete: `orchestrator.agent.md`, `planner.agent.md`, `implementer.agent.md`, `reviewer.agent.md`, `content-creator.agent.md`, `layout-designer.agent.md`, `harness-engineer.agent.md`
- [ ] All handoffs (`handoffs.agent` field) reference valid agent names
- [ ] `task-code-reviewer.agent.md` removed
- [ ] All domain expert skills have `context: fork` in frontmatter
- [ ] `copilot-instructions.md` no longer references bogus `AGENTS.md`
- [ ] `model-providers/SKILL.md` has zero Portuguese text
- [ ] SvelteKit instructions moved to `.github/archive/` or deleted
- [ ] All descriptions updated: pipeline-orchestration (includes Engineer), harness-engineer (includes auto-learn), start-research (no residual text)

## 7. References

- VS Code Copilot Customization Docs: https://code.visualstudio.com/docs/agent-customization/overview
- Custom Agents: https://code.visualstudio.com/docs/agent-customization/custom-agents
- Agent Skills: https://code.visualstudio.com/docs/agent-customization/agent-skills
- Agentskills.io Specification: https://agentskills.io/
- Audit findings: see evaluation in chat session 2026-07-15

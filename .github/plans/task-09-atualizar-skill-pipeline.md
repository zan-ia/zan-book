# Task 09 — Atualizar SKILL.md do Pipeline de Orquestração

## Objective
Corrigir inconsistências no `.github/skills/pipeline-orquestracao/SKILL.md` — o ponto de entrada do pipeline que o Copilot lê para entender o fluxo completo. O arquivo atual está desatualizado em relação ao `AGENTS.md` e `pipeline-workflow.instructions.md`.

## Specific Responsibilities

### 1. Corrigir contagem de agents

**Texto atual (linha 16):**
> O fluxo é coordenado pelo agente `orchestrator` e executado por **3 subagents** especializados.

**Correção:** "executado por **4 agents de pipeline** (`planner`, `implementer`, `reviewer`) + **3 agents de suporte** (`content-creator`, `performance-auditor`, `refactor-css`)"

### 2. Expandir tabela de agents

**Tabela atual:** só lista 4 agents de pipeline.

**Tabela corrigida:** adicionar seção "Agentes de Suporte" com os 3 agents restantes, igual ao padrão do `AGENTS.md`:

```
| `content-creator` | Gera e atualiza conteúdos institucionais | read, search |
| `performance-auditor` | Audita Core Web Vitals e performance | read, search, browser |
| `refactor-css` | Refatora CSS escopado e audita tokens | read, search, edit |
```

### 3. Alinhar fases do fluxo com pipeline-workflow

**Diagrama atual:** 8 passos numerados (1–8), sem correspondência com Fase 0 e Fase 6 do pipeline.

**Correção:** adicionar os rótulos de fase entre parênteses alinhados com `pipeline-workflow.instructions.md`:

```
├─ (Fase 0) Entrada do usuário → classifica tipo
├─ (Fase 1) Cria Issue → 🛑 HITL
├─ (Fase 2) Cria Branch
├─ (Fase 3) PLANEJADOR → Plano
├─ (Fase 4) IMPLEMENTADOR → Código + Build
├─ (Fase 5) REVISOR → Relatório
├─ (Fase 6) Decisão → loop máx. 3x
├─ (Fase 7) Commit + Push + PR → 🛑 HITL
└─ (Fase 8) Checkout main
```

### 4. Atualizar checklist de qualidade

O checklist atual (10 dimensões) está correto, mas deve incluir uma nota de referência ao `reviewer.agent.md` para o checklist detalhado completo.

### 5. Adicionar referência cruzada

Adicionar ao final do SKILL.md:
```markdown
## Documentação Relacionada
- Pipeline detalhado: `.github/instructions/pipeline-workflow.instructions.md`
- Critérios de revisão: `.github/agents/reviewer.agent.md`
- Guia de agents: `AGENTS.md` (seção Orquestração de Agentes)
```

## Artefato de Saída
- `.github/skills/pipeline-orquestracao/SKILL.md` atualizado

## Dependencies
- **Task 06** (AGENTS.md) — tabela de agents de suporte
- **Task 07** (pipeline-workflow) — fases Fase 0–8
- **Task 08** (reviewer.agent.md) — checklist detalhado

## Acceptance Criteria
- [ ] Contagem de agents corrigida (3 → 7)
- [ ] Tabela de agents inclui os 3 de suporte
- [ ] Fases do fluxo alinhadas com pipeline-workflow (Fase 0–8)
- [ ] Checklist referencia reviewer.agent.md
- [ ] Seção "Documentação Relacionada" adicionada
- [ ] Nenhuma informação perdida na atualização

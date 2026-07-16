# Task 02 — Definição dos Agentes do Pipeline

## Objective
Create/validar as definições dos agents especializados do pipeline, garantindo que cada um tenha responsabilidades claras, tools corretas, constraints bem definidas e interaja corretamente com os demais.

## Specific Responsibilities

1. **Define/validar o `orchestrator`** (agente principal):
   - Responsável por coordenar o fluxo completo: issue → branch → planejar → implementar → revisar → commit → PR
   - Ferramentas necessárias: read, search, edit, execute, web, browser, subagents (planner, implementer, reviewer)
   - Constraints: NUNCA merge automático, SEMPRE HITL, máx. 3 iterações de revisão
   - Rastrear estado em `/memories/session/pipeline-state.md`

2. **Define/validar o `planner`** (subagente):
   - Responsável por analisar issues + codebase e gerar plano detalhado
   - Ferramentas: read, search, web (pesquisa de documentação)
   - Output: path do plano + resumo 2-3 frases + complexidade + lista de arquivos
   - Salvar plano em `.github/plans/issue-{N}-{slug}.md`

3. **Define/validar o `implementer`** (subagente):
   - Responsável por executar o plano com alterações cirúrgicas
   - Ferramentas: read, search, edit, execute (npm run check, npm run build)
   - Constraints: NUNCA modificar `build/`, verificar erros após cada arquivo
   - Output: resumo do implementado + lista de arquivos modificados + erros

4. **Define/validar o `reviewer`** (subagente):
   - Responsável por analisar diff vs plano e verificar qualidade
   - Ferramentas: read, search
   - Verificar 10 dimensões de qualidade (detalhadas na Tarefa 08)
   - Output: status (APROVADO|ALTERACOES|REJEITADO) + issues classificados + recomendação

5. **Define/validar agents auxiliares**:
   - `content-creator` — geração de conteúdo institucional
   - `performance-auditor` — auditoria de performance e Core Web Vitals
   - `refactor-css` — refatoração e otimização de CSS scoped
   - `Explore` — exploração read-only da codebase

6. **Garantir que cada agente**:
   - Tenha YAML frontmatter correto (`name`, `description`, `tools`, `agents`, `user-invocable`, `disable-model-invocation`)
   - Tenha descrição CLARA de quando deve ser invocado
   - Liste explicitamente as tools permitidas
   - Declare subagents que pode invocar
   - Defina constraints e regras de ouro

## Artefato de Saída
- 7 arquivos `.agent.md` criados/atualizados em `.github/agents/`

## Dependencies
- **Tarefa 01** (pesquisa e validação) — para conhecer o formato correto

## Acceptance Criteria
- [ ] `orchestrator.agent.md` — fluxo completo, HITL, constraints
- [ ] `planner.agent.md` — análise + geração de plano com output padronizado
- [ ] `implementer.agent.md` — execução cirúrgica + verificação de build
- [ ] `reviewer.agent.md` — 10 dimensões + classificação critical/major/minor
- [ ] `content-creator.agent.md` — consulta docs/INSTITUCIONAL.md
- [ ] `performance-auditor.agent.md` — Core Web Vitals + sugestões
- [ ] `refactor-css.agent.md` — extração de padrões + tokens
- [ ] Cada agente tem `user-invocable: true` ou `false` conforme apropriado
- [ ] `disable-model-invocation` definido corretamente para cada um

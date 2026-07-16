# Plano do Módulo: Programador Profissional com Agentes — Do Zero ao Pipeline Completo com GitHub Copilot (16 aulas)

Este arquivo é a **fonte única da verdade** sobre a sequência, numeração e escopo das 14 aulas deste módulo. O curso transforma um programador iniciante em um profissional completo — integrando GitHub Copilot (autopilot), metodologias ágeis, engenharia de software, CI/CD, MCPs, skills, subagentes e continual harness em um único fluxo de trabalho: da issue ao deploy.

## Público-alvo e ponto de partida

**Público**: programadores iniciantes que já escrevem código mas não trabalham profissionalmente. O aluno sabe programar, mas não sabe como é o dia a dia de um desenvolvedor profissional usando IA como parceira.

**O que o aluno já sabe**: HTML, CSS, JavaScript básico, Git (clone, commit, push), VS Code. Sabe criar uma página web simples e um script Node.js.

**O que o aluno NÃO sabe e o curso cobre do zero**: GitHub Copilot (todas as features, do autocomplete ao autopilot), metodologias ágeis (user stories, issues, milestones, sprints), engenharia de software aplicada (clean code, refatoração, TDD, testes E2E), CI/CD com GitHub Actions, protocolos de handoff entre sessões e agentes, skills customizadas, MCPs (Figma, Playwright, Browser, GitHub, Context7), subagentes especializados, continual harness com auto-aprendizado e o pipeline agêntico completo.

**Pré-requisito técnico**: VS Code instalado, Node.js 20+, conta GitHub, Git configurado.

**Compromisso do curso**: toda aula que introduzir um conceito novo deve explicá-lo do zero, com exemplos reais em Node.js (backend) e React (frontend). Nenhum jargão fica sem explicação. O curso não é sobre "apertar botões no Copilot" — é sobre entender conceitualmente como cada peça se encaixa e automatizar o processo manual com engenharia de software.

## Filosofia: cada aula é concreta e treinável

Esta é a maior exigência do módulo. Cada aula entrega:

1. **Conteúdo principal** (`aula-NN-<slug>.md`): explicação conceitual + demonstração guiada + prática durante a aula (Mão na Massa inline, Quick Check, Quiz rápido, Exercícios Graduados).
2. **Questões de Aprendizagem** (`aula-NN-questoes-de-aprendizagem.md`): arquivo **separado** com tarefas práticas que funcionam como checkpoint de aprendizagem — *"eu realmente entendi a matéria?"*. Cada questão tem **Objetivo → Passos de Execução → Entrega** (com template para o aluno preencher).

O arquivo de questões é um gate: *"isto é importante — você entendeu? Então tente fazer."* O aluno só avança quando consegue completar as questões por conta própria, sem reler a aula a cada passo.

## Projeto Progressivo: DevFlow (Full-Stack)

O aluno constrói um **dashboard de gerenciamento de projetos dev** ao longo do curso. O DevFlow é full-stack: backend Node.js/Express + frontend React + testes + CI/CD. Cada aula adiciona uma peça funcional que se integra às anteriores.

**Por que DevFlow?** É um produto que todo desenvolvedor entende (gerenciar tarefas e projetos), permite exemplos ricos de frontend e backend, tem stakeholders claros (o próprio time de desenvolvimento), e é divisível em milestones realistas.

| Aula | Peça adicionada ao DevFlow | O que o aluno faz |
|---|---|---|
| 01 | **Repositório + GET /health** | Inicializa o repo, configura VS Code + Copilot, cria estrutura Express básica, primeiro endpoint com Copilot |
| 02 | **`.github/copilot-instructions.md`** | Define convenções do time: stack, estilo, commits, PR template, restrições. Cria `.github/prompts/` reutilizáveis |
| 03 | **CRUD de Projetos** | Primeira feature 100% autônoma: Copilot em Agent Mode cria models, routes e controllers |
| 04 | **ADRs + Artefatos de Handoff** | Documenta decisões de arquitetura em ADRs versionados. Protocolo de handoff entre features com artefatos auditáveis |
| 05 | **Código Refatorado** | Refatora controllers com princípios de clean code. Extrai services, elimina duplicação, nomes que revelam intenção |
| 06 | **Testes Unitários + Integração** | Implementa 3 features com TDD assistido. Jest + supertest. Cobertura ≥ 80% |
| 07 | **Pipeline CI/CD** | GitHub Actions: workflow com lint → typecheck → test → build. Quality gates, cache, badges |
| 08 | **Frontend React + Testes E2E** | Cria frontend React para o DevFlow (listar/criar projetos). Testes E2E com Playwright. Backlog estruturado em GitHub Issues com milestones |
| 09 | **Skills de Documentação Viva** | Cria skills para React, Express e MUI. Copilot consulta documentação oficial via Context7 sem sair do editor |
| 10 | **MCPs de Frontend Integrados** | Conecta Figma MCP (extrai specs de design), Playwright MCP (testes visuais), Browser MCP (debugging). Do protótipo ao código |
| 11 | **GitHub MCP Nativo** | Configura GitHub MCP Server (19 toolsets). Copilot gerencia issues, PRs, actions e revisão como operações nativas |
| 12 | **Subagentes Especializados** | Cria @reviewer, @tester, @documenter em `.github/agents/`. Delegação com contexto isolado. Paralelismo |
| 13 | **Continual Harness com Auto-Aprendizado** | Implementa métricas de qualidade do harness. Feedback loops automáticos: PR review → refina instructions. O harness aprende com cada iteração |
| 14 | **Pipeline Agêntico Completo** | Fluxo integrado: issue → /plan → Agent Mode → /tests → PR automático → @reviewer → CI/CD → merge → deploy → métricas → refine. Portfólio profissional |

**Eixo transversal**: o fio condutor de todas as aulas é o **ciclo de maturidade do desenvolvedor mediado por agentes** — o aluno descobre como usar o Copilot (Bloco A), como escrever software profissional com ele (Bloco B), como expandir seu alcance com MCPs, skills e subagentes (Bloco C), e como fazer tudo isso melhorar continuamente (Bloco D). O modelo mental expande progressivamente: instrução no chat → regra permanente → agente autônomo → handoff entre sessões → código limpo → teste automatizado → pipeline CI/CD → documentação viva → ferramentas externas → subagentes → auto-aprendizado → pipeline completo.

## O mecanismo central (eixo transversal)

O fio condutor de todas as aulas é o **ciclo fundamental de execução do Copilot**:

```
[System Prompt do Copilot]
    + [Custom Instructions: copilot-instructions.md + .github/prompts/]
    + [Definições das tools disponíveis (built-in + MCPs + skills)]
    + [Contexto do workspace (@workspace, @file, @folder)]
    + [Histórico da conversa]
    = Contexto enviado ao modelo
```

A cada iteração, o modelo decide entre: responder em texto, chamar uma ferramenta, ou pedir esclarecimento. O Agent Mode adiciona o loop **Understand → Act → Validate**, onde o Copilot itera autonomamente até concluir a tarefa.

A este ciclo fundamental, o curso adiciona camadas progressivas:

```
Chat → Agent Mode → Handoff → Clean Code → TDD → CI/CD → Skills → MCPs → Subagentes → Continual Harness → Pipeline Completo
```

## Sequência das 14 Aulas

### Bloco A — Copilot Essencial (Aulas 01–04)

> **Propósito**: Dominar o GitHub Copilot como ferramenta de trabalho. Do autocomplete ao agente autônomo com handoff profissional.

---

### Aula 01: Ambiente Profissional — Setup, Git e Primeiros Passos com Copilot

**Duração estimada**: 45 min | **Nível**: Iniciante | **Pré-requisitos**: Nenhum

**Foco**: O aluno instala e configura o ambiente de desenvolvimento profissional completo: VS Code, extensão Copilot, Git/GitHub. Executa os primeiros comandos com autocomplete e Chat. Cria a estrutura inicial do projeto DevFlow.

**Fluxo da aula**: Contexto (por que um ambiente profissional importa) → Instalação (VS Code + extensão Copilot + autenticação GitHub) → Planos Copilot (Free, Pro, Pro+, Max — qual escolher) → Primeiro autocomplete (inline suggestions, Next Edit Suggestions) → Primeiro Chat (perguntar, explicar, gerar código) → Estrutura do DevFlow (`npm init`, Express, `GET /health`).

**Destaque do projeto**: repositório DevFlow criado, `GET /health` funcional, primeiro commit com Copilot.

**Conceitos-chave**: autocomplete vs Chat, planos Copilot, context awareness no VS Code, estrutura mínima de projeto Node.js/Express.

**Prática**: Instalar, autenticar, testar autocomplete com 3 cenários, criar `GET /health` com Chat.

---

### Aula 02: Custom Instructions e Convenções do Time

**Duração estimada**: 50 min | **Nível**: Iniciante | **Pré-requisitos**: Aula 01

**Foco**: O aluno cria o arquivo de instruções permanentes que guiará o Copilot em TODO o projeto. Aprende as 6 categorias de regras (stack, estilo, convenções, comandos, comunicação, restrições), o que colocar e o que NÃO colocar, e como testar se as instruções estão funcionando. Cria `.github/prompts/` com templates reutilizáveis.

**Fluxo da aula**: Por que instructions importam (consistência entre sessões, convenções do time) → As 6 categorias de regras → Exemplo completo de `copilot-instructions.md` → Anti-padrões (regras contraditórias, genéricas demais, muito longas) → `.github/prompts/` como slash commands reutilizáveis → Testando se as regras funcionam.

**Destaque do projeto**: `.github/copilot-instructions.md` com regras detalhadas para o DevFlow (stack Node/Express/React, estilo de código, convenções de commit, PR template). `.github/prompts/` com templates para criar componente, gerar teste e revisar PR.

**Conceitos-chave**: regras permanentes vs prompts sob demanda, escopo de instructions (user vs repo vs org), categorias de regras, anti-padrões.

**Prática**: Criar `copilot-instructions.md` completo para o DevFlow, criar 3 `.github/prompts/`, testar cada um.

---

### Aula 03: Agent Mode e Autopilot — Programando sem as Mãos

**Duração estimada**: 50 min | **Nível**: Iniciante | **Pré-requisitos**: Aula 02

**Foco**: O aluno entende o loop **Understand → Act → Validate** que transforma o Copilot de assistente passivo em agente autônomo. Aprende os níveis de permissão (Default Approvals → Bypass Approvals → Autopilot) e os 9 tool sets built-in. Executa a primeira feature 100% autônoma: o CRUD de Projetos do DevFlow.

**Fluxo da aula**: O loop Understand→Act→Validate (como o Copilot lê o codebase, decide o que editar, executa e valida) → Níveis de permissão (quando usar cada um, riscos do Autopilot) → Os 9 tool sets (#edit, #read, #search, #execute, #terminal, #web, #vscode, #todos, #browser) → Demonstração guiada: feature completa sem intervenção → O que observar durante a execução autônoma.

**Destaque do projeto**: CRUD de Projetos implementado 100% pelo Agent Mode. Models, routes, controllers, validações e tratamento de erros — tudo gerado e testado pelo Copilot.

**Conceitos-chave**: loop agentivo, níveis de permissão, tool sets, observabilidade da execução autônoma.

**Prática**: Executar 3 tarefas autônomas de dificuldade crescente no DevFlow.

---

### Aula 04: Handoff com Artefatos Auditáveis — O Protocolo de Ralph Wigguns

**Duração estimada**: 50 min | **Nível**: Intermediário | **Pré-requisitos**: Aula 03

**Foco**: O aluno aprende que sessões longas de chat NÃO são o caminho profissional. O protocolo de handoff usa artefatos versionados (ADRs, specs, checklists) como ponte entre sessões e entre agentes — permitindo iniciar um novo agente com contexto limpo, sem carregar histórico inflado. Inspirado no loop de Ralph Wigguns: decisões documentadas → novo agente lê apenas o artefato → executa com contexto focado.

**Fluxo da aula**: O problema do contexto inflado (por que sessões de 200+ mensagens degradam) → Sessões como unidade de trabalho → ADRs (Architecture Decision Records): formato, quando criar, exemplos reais → O protocolo de Ralph Wigguns: documentar decisão → fechar sessão → novo agente lê artefato → executa com contexto limpo → Handoff entre features do DevFlow: da feature de Projetos para a feature de Tarefas.

**Destaque do projeto**: ADR documentando a decisão de stack do DevFlow. Handoff documentado entre feature de Projetos (Aula 03) e feature de Tarefas (a ser implementada). O aluno pratica iniciar um agente novo que recebe apenas o ADR como contexto e implementa a feature de Tarefas com zero histórico da sessão anterior.

**Conceitos-chave**: contexto inflado, sessões como unidade de trabalho, ADRs, artefatos auditáveis como ponte, protocolo de Ralph Wigguns (documentar → isolar → executar).

**Prática**: Criar 2 ADRs para o DevFlow. Executar handoff completo: feature de Projetos → ADR → novo agente → feature de Tarefas.

---

### Bloco B — Engenharia de Software com Copilot (Aulas 05–08)

> **Propósito**: Aplicar princípios de engenharia de software usando o Copilot como parceiro. De código que funciona a código que evolui com segurança.

---

### Aula 05: Código Limpo e Refatoração Assistida

**Duração estimada**: 50 min | **Nível**: Intermediário | **Pré-requisitos**: Aula 04

**Foco**: O aluno aprende os princípios essenciais de clean code e como usar o Copilot para refatorar código existente. Nomes que revelam intenção, funções pequenas (SLAP), DRY, comentários como último recurso. Code smells que o Copilot identifica. Refatoração com `/fix`.

**Fluxo da aula**: Problema (código que funciona mas é ilegível — o controller de Projetos do DevFlow com 150 linhas) → Princípios: nomes, funções pequenas, SLAP, DRY, KISS, YAGNI → Code smells (bloaters, abusers, dispensables, change preventers) → Refatoração guiada com `/fix` e Agent Mode → Antes e depois: métricas de legibilidade.

**Destaque do projeto**: Controllers do DevFlow refatorados: extração de services, eliminação de duplicação entre Projetos e Tarefas, nomes que revelam intenção. O código passa de "funciona" para "evolui com segurança".

**Conceitos-chave**: SLAP, DRY, code smells, refatoração assistida, `/fix`.

**Prática**: Refatorar 3 controllers do DevFlow. Identificar 5 code smells e corrigir cada um.

---

### Aula 06: TDD com Copilot — Testes Que Provam que Funciona

**Duração estimada**: 55 min | **Nível**: Intermediário | **Pré-requisitos**: Aula 05

**Foco**: O aluno executa o ciclo TDD completo com o Copilot como parceiro. Red (escrever teste que falha) → Green (Copilot implementa o mínimo) → Refactor (melhorar com segurança). `/tests` e `/setupTests`. FIRST principles. Testes unitários (Jest) e de integração (supertest). Cobertura como rede de segurança.

**Fluxo da aula**: Por que TDD (testes não são sobre "passar" — são sobre provar que funciona) → O ciclo Red→Green→Refactor com Copilot → FIRST principles (Fast, Independent, Repeatable, Self-Validating, Timely) → Feature 1: criar tarefa com validações (TDD completo) → Feature 2: listar tarefas por projeto (TDD completo) → Feature 3: atualizar status da tarefa (TDD completo) → Cobertura: o que medir e o que ignorar.

**Destaque do projeto**: 3 features do DevFlow implementadas com TDD. Testes unitários para services, testes de integração para API. Cobertura ≥ 80%. Jest + supertest configurados.

**Conceitos-chave**: Red→Green→Refactor, FIRST, testes unitários vs integração, cobertura de código.

**Prática**: Implementar 3 features com TDD. Configurar Jest e supertest. Rodar `npx jest --coverage` e verificar ≥ 80%.

---

### Aula 07: CI/CD com GitHub Actions — O Pipeline Que Não Deixa Passar Erro

**Duração estimada**: 50 min | **Nível**: Intermediário | **Pré-requisitos**: Aula 06

**Foco**: O aluno constrói um pipeline CI/CD completo no GitHub Actions. Workflow com jobs paralelos (lint, typecheck, test, build), quality gates (cobertura mínima, lint zero warnings), cache de dependências, matrix strategy para Node.js, badges no README. Dependabot + CodeQL para segurança contínua.

**Fluxo da aula**: Por que CI/CD (o deploy manual quebrou de novo?) → Anatomia de um workflow (triggers, jobs, steps, actions) → Workflow base: lint → typecheck → test → build → Quality gates (coverage threshold, lint zero warnings) → Cache e otimização → Dependabot (atualização automática de dependências) → CodeQL (análise de segurança) → Badges no README (status, coverage).

**Destaque do projeto**: Pipeline CI/CD funcional no DevFlow. Push → lint → typecheck → test → build → status badge verde no README. Dependabot configurado. CodeQL scanning ativo.

**Conceitos-chave**: GitHub Actions, workflow YAML, jobs paralelos, quality gates, Dependabot, CodeQL.

**Prática**: Criar workflow completo. Fazer um commit que quebra o lint e ver o pipeline falhar. Corrigir e ver passar. Configurar badges.

---

### Aula 08: Testes E2E com Playwright + Metodologia Ágil na Prática

**Duração estimada**: 55 min | **Nível**: Intermediário | **Pré-requisitos**: Aula 07

**Foco**: O aluno cria o frontend React do DevFlow e aprende a testá-lo com Playwright (testes end-to-end). Em paralelo, aprende a estruturar o trabalho com metodologia ágil: GitHub Issues como backlog, user stories, milestones, sprint planning. Tudo assistido pelo Copilot.

**Fluxo da aula**: Frontend React do DevFlow (listar projetos, criar projeto, ver tarefas) → Playwright: instalação, primeiro teste, cenários E2E → Metodologia ágil: user stories → issues → milestones → labels → sprint board → Planning com `/plan` → Copilot gerando cenários de teste a partir de critérios de aceitação.

**Destaque do projeto**: Frontend React funcional (3 páginas). 5 cenários Playwright validando fluxos completos. Backlog do DevFlow estruturado em 2 milestones com 8 issues cada. Pipeline CI/CD executando testes E2E.

**Conceitos-chave**: Playwright, testes E2E, user stories, GitHub Issues, milestones, sprint planning.

**Prática**: Criar 3 componentes React. Escrever 5 cenários Playwright. Estruturar backlog com 2 milestones.

---

### Bloco C — Harness Engineering (Aulas 09–12)

> **Propósito**: Expandir as capacidades do Copilot com skills, MCPs e subagentes. O aluno constrói um harness profissional que escala além do editor.

---

### Aula 09: Skills de Documentação Viva — O Conhecimento Que o Copilot Carrega Sob Demanda

**Duração estimada**: 50 min | **Nível**: Intermediário | **Pré-requisitos**: Aula 08

**Foco**: O aluno entende a diferença entre regras permanentes (instructions) e conhecimento injetável (skills). Cria skills para documentação de bibliotecas (React, Express, MUI) usando Context7 — permitindo que o Copilot consulte documentação oficial sem sair do editor. Ciclo de vida da skill: listada → carregada → ativa → descartada.

**Fluxo da aula**: Regras vs Skills (permanente vs sob demanda, custo de tokens) → Anatomia de uma skill (SKILL.md + frontmatter + corpo) → Ciclo de vida (listada, carregada, ativa, descartada) → Context7 como fonte de documentação → Criando skills: React, Express, MUI → Demonstração: Copilot implementa paginação no DevFlow consultando documentação via skill → Quando criar uma skill (heurísticas de decisão).

**Destaque do projeto**: 3 skills criadas no `.github/skills/` do DevFlow: `react-docs`, `express-docs`, `mui-docs`. Copilot usa documentação oficial para implementar features — sem alucinações de API.

**Conceitos-chave**: skills vs instructions, ciclo de vida da skill, Context7, SKILL.md, documentação viva.

**Prática**: Criar 3 skills de documentação. Implementar uma feature complexa (paginação com filtros) usando apenas skills como referência.

---

### Aula 10: MCPs para Frontend — Do Protótipo ao Código

**Duração estimada**: 55 min | **Nível**: Intermediário | **Pré-requisitos**: Aula 09

**Foco**: O aluno conecta MCPs essenciais para desenvolvimento frontend: Figma MCP (extrai specs de design), Playwright MCP (testes visuais e de browser), Browser MCP (debugging visual). Aprende o trade-off: cada MCP custa tokens + contexto + superfície de ataque. Quando conectar e quando não.

**Fluxo da aula**: O que é MCP (arquitetura cliente-servidor, stdio vs HTTP/SSE) → Configuração no Copilot (`.vscode/mcp.json`) → Figma MCP: extrair specs de um componente, gerar código React correspondente → Playwright MCP: teste visual comparando implementação com design → Browser MCP: debugging de layout e responsividade → Trade-off: cada MCP adicionado consome tokens antes mesmo de ser usado → Auditoria de MCPs: quais valem o custo?

**Destaque do projeto**: Figma MCP conectado — specs de um componente do DevFlow extraídas e implementadas. Playwright MCP validando visualmente. Browser MCP para debugging de CSS.

**Conceitos-chave**: MCP, Figma, Playwright, Browser, trade-off capacidade vs custo, `.vscode/mcp.json`.

**Prática**: Conectar Figma MCP, extrair specs de 2 componentes, implementar no React, validar com Playwright.

---

### Aula 11: GitHub MCP Nativo no Pipeline

**Duração estimada**: 55 min | **Nível**: Intermediário | **Pré-requisitos**: Aula 10

**Foco**: O aluno configura o GitHub MCP Server (19 toolsets: issues, PRs, actions, repos, etc.) e aprende a usá-lo como parte nativa do fluxo de desenvolvimento. O Copilot gerencia issues, abre PRs, revisa código, dispara workflows — tudo por comando, seguindo as convenções do time definidas nas instructions.

**Fluxo da aula**: GitHub MCP Server: os 19 toolsets e o que cada um oferece → Configuração (autenticação, escopo, permissões) → O agente usando GitHub como ferramenta nativa: criar issue → implementar → abrir PR → adicionar labels → atribuir reviewer → monitorar CI/CD → Convenções do time aplicadas automaticamente (templates, labels, CODEOWNERS) → Exemplo completo: feature do DevFlow do início ao PR seguindo todo o fluxo.

**Destaque do projeto**: Ciclo completo via GitHub MCP: issue criada com template → branch criada → implementação → PR com descrição gerada → labels e reviewer atribuídos → CI/CD executado → status reportado. Zero interação manual com a interface do GitHub.

**Conceitos-chave**: GitHub MCP Server, toolsets, automação de fluxo GitHub, convenções automáticas, CODEOWNERS.

**Prática**: Executar 2 ciclos completos issue→PR via GitHub MCP. Configurar templates e CODEOWNERS.

---

### Aula 12: Subagentes e Delegação — Seu Time de Agentes Especializados

**Duração estimada**: 55 min | **Nível**: Avançado | **Pré-requisitos**: Aula 11

**Foco**: O aluno cria agentes especializados em `.github/agents/*.agent.md`: `@reviewer` (revisa código seguindo checklist do time), `@tester` (gera e executa testes), `@documenter` (gera documentação a partir do código). Aprende delegação com contexto isolado — cada subagente recebe uma janela limpa contendo apenas seu domínio. Paralelismo: múltiplos subagentes executando simultaneamente.

**Fluxo da aula**: Por que delegar (agente monolítico vs equipe, especialização, paralelismo, economia de contexto) → Anatomia de um custom agent (`.agent.md`, tools, modelo, instruções) → Criando @reviewer: checklist de revisão, convenções do time, tools permitidas (read, grep, gh-pr-review) → Criando @tester: geração de testes, execução, relatório de cobertura → Criando @documenter: extração de documentação, README, API docs → Delegação com `runSubagent` → Paralelismo: @reviewer e @tester executando simultaneamente após um PR.

**Destaque do projeto**: 3 subagentes no `.github/agents/` do DevFlow. Pipeline de PR: @tester gera e executa testes → @reviewer analisa código → resultado consolidado no PR. Convenções do time aplicadas por todos os agentes.

**Conceitos-chave**: custom agents, delegação, contexto isolado, paralelismo, `.agent.md`.

**Prática**: Criar 3 subagentes. Executar delegação em paralelo para revisão de PR no DevFlow.

---

### Bloco D — Pipeline Completo e Melhoria Contínua (Aulas 13–14)

> **Propósito**: Fechar o ciclo. O aluno integra tudo em um pipeline agêntico completo e aprende a fazê-lo melhorar continuamente.

---

### Aula 13: Continual Harness com Auto-Aprendizado

**Duração estimada**: 55 min | **Nível**: Avançado | **Pré-requisitos**: Aula 12

**Foco**: O aluno implementa o ciclo de melhoria contínua do harness. Métricas de qualidade: % de PRs que passam na primeira revisão, tempo médio issue→merge, cobertura de instructions. Feedback loops automáticos: cada PR revisado pelo @reviewer alimenta regras do `copilot-instructions.md`. Cada bug em produção refina as convenções. O harness aprende com cada iteração — sem intervenção manual.

**Fluxo da aula**: O que é Continual Harness (o meta-ciclo: atuar → observar → refinar) → Métricas de qualidade do harness (o que medir e por que) → Feedback loops: PR review → atualiza instructions → próximo PR usa regras melhores → Bug em produção → análise de causa → refine instructions → Ferramentas de observação (GitHub Insights, Copilot metrics) → Auto-aprendizado: configurar gatilhos que disparam refinamentos automaticamente → Quando parar, quando iterar, quando pedir ajuda humana.

**Destaque do projeto**: Métricas do DevFlow configuradas e visíveis. Feedback loop funcional: após 3 PRs revisados, `copilot-instructions.md` refinado automaticamente com novas regras. O harness do DevFlow está melhor do que na Aula 02 — e continua melhorando.

**Conceitos-chave**: continual harness, métricas de qualidade, feedback loops, auto-aprendizado, ciclo atuar→observar→refinar.

**Prática**: Implementar 3 métricas. Configurar 2 feedback loops. Executar 1 ciclo completo de melhoria automática.

---

### Aula 14: Pipeline Agêntico Completo — Da Issue ao Deploy

**Duração estimada**: 60 min | **Nível**: Avançado | **Pré-requisitos**: Aula 13

**Foco**: O aluno integra TUDO em um pipeline agêntico completo. O fluxo: Issue (GitHub MCP) → /plan (planejamento automático) → Agent Mode (implementação) → /tests (validação) → PR automático → @reviewer + @tester (revisão paralela) → CI/CD (quality gates) → Cloud Agent (aprovação) → Merge → Deploy → Métricas → Continual Harness (refinamento). E depois: o ciclo recomeça, melhor que antes.

**Fluxo da aula**: Visão geral do pipeline completo (diagrama de todas as etapas) → Demonstração ao vivo: feature nova no DevFlow do início ao deploy → Papel do desenvolvedor no pipeline agêntico (onde o humano agrega valor: decisões de arquitetura, revisão crítica, direção do produto) → O que você construiu (recapitulação do DevFlow completo: backend, frontend, testes, CI/CD, skills, MCPs, subagentes, continual harness) → Portfólio profissional (como apresentar o DevFlow e o harness em entrevistas) → Próximos passos (o que aprender depois: DDD, Clean Architecture, microservices, agentes multi-modal).

**Destaque do projeto**: DevFlow completo e funcional com pipeline agêntico integrado. Issue → Merge → Deploy → Refinar — tudo automatizado, com supervisão humana nos pontos certos. O aluno tem um portfólio profissional.

**Conceitos-chave**: pipeline agêntico completo, integração de todas as peças, papel do humano no fluxo agêntico, portfólio profissional.

**Prática**: Executar o pipeline completo para uma feature final do DevFlow. Documentar o fluxo como case de portfólio.

---

### Aula 15 (BÔNUS): Stitch — Design System com Agentes, do Prompt ao Componente React

**Duração estimada**: 55 min | **Nível**: Avançado | **Pré-requisitos**: Aulas 01-14

**Foco**: O aluno domina o ecossistema Stitch (Google) — plataforma de design UI com IA que gera telas de alta fidelidade a partir de prompts. Aprende a conectar o Stitch MCP ao Copilot, usar as 7 Stitch Agent Skills (stitch-design, enhance-prompt, design-md, stitch-loop, react-components, shadcn-ui, video-walkthrough) e executar o workflow completo: prompt → design system → componentes React + shadcn/ui → validação visual com Playwright MCP.

**Destaque do projeto**: Frontend do DevFlow redesenhado com design system profissional gerado por IA. Design tokens documentados com `design-md`. Componentes React gerados com `react-components` e integrados ao shadcn/ui. Validação visual automatizada com Playwright MCP.

**Conceitos-chave**: prompt-to-design, níveis de fidelidade, MCP servers de design, ferramentas virtuais (build_site, get_screen_code, get_screen_image), 7 skills de design, pipeline 9 etapas, conversão React, shadcn/ui.

---

### Aula 16: Playwright + Browser MCP — Automação de Navegador Profissional com Agentes

**Duração estimada**: 60 min | **Nível**: Avançado | **Pré-requisitos**: Aulas 01-15

**Foco**: O aluno aprofunda o ecossistema de automação de navegador com agentes. Aprende a arquitetura MCP vs framework direto, configura o Playwright MCP oficial com suas 23 ferramentas organizadas por capacidades, implementa interceptação de rede e mocking de API com depuração via Trace Viewer, cria testes de regressão visual com comparação pixel a pixel, usa Codegen para gerar scripts automaticamente, domina o Browser MCP com extensão para fluxos autenticados, e integra tudo em um pipeline completo de CI/CD com o Continual Harness.

**Destaque do projeto**: Playwright MCP configurado com capacidades avançadas, network interception mockando APIs do DevFlow, testes visuais com screenshots de referência e diff thresholds, pipeline CI/CD com upload de traces como artefatos de build.

**Conceitos-chave**: Playwright MCP, Browser MCP, 23 ferramentas MCP, capacidades core/network/storage/vision, interceptação de rede (page.route), API mocking (route.fulfill), Trace Viewer, regressão visual (toHaveScreenshot), component testing, Codegen, CI/CD com artefatos, flakiness, contextos isolados vs compartilhados.

---

## Arquitetura de pastas de cada aula

```
modules/programador-profissional-agentes/aulaNN/
├── aula-NN-<slug>.md                       # Conteúdo principal
├── aula-NN-questoes-de-aprendizagem.md     # Tarefas/checkpoint prático (arquivo separado)
├── aula-NN-<slug>.pdf                       # PDF para distribuição (gerado ao final)
└── images/                                  # Diagramas Mermaid renderizados como PNG
```

## Referência rápida das aulas

| Aula | Título | Bloco | Duração | Ferramenta principal | DevFlow |
|---|---|---|---|---|---|
| 01 | Ambiente Profissional | A | 45 min | VS Code + Copilot + Git | Repo + GET /health |
| 02 | Custom Instructions e Convenções | A | 50 min | copilot-instructions.md | Instructions + prompts |
| 03 | Agent Mode e Autopilot | A | 50 min | Agent Mode | CRUD de Projetos |
| 04 | Handoff com Artefatos Auditáveis | A | 50 min | ADRs | Handoff documentado |
| 05 | Código Limpo e Refatoração | B | 50 min | /fix + Agent Mode | Código refatorado |
| 06 | TDD com Copilot | B | 55 min | /tests + Jest | Testes unitários + integração |
| 07 | CI/CD com GitHub Actions | B | 50 min | GitHub Actions | Pipeline funcional |
| 08 | Testes E2E + Metodologia Ágil | B | 55 min | Playwright + Issues | Frontend React + E2E |
| 09 | Skills de Documentação Viva | C | 50 min | Context7 + Skills | 3 skills de docs |
| 10 | MCPs para Frontend | C | 55 min | Figma + Playwright + Browser MCP | MCPs integrados |
| 11 | GitHub MCP Nativo | C | 55 min | GitHub MCP Server | Pipeline GitHub nativo |
| 12 | Subagentes e Delegação | C | 55 min | Custom Agents | 3 subagentes |
| 13 | Continual Harness com Auto-Aprendizado | D | 55 min | Métricas + Feedback Loops | Harness auto-melhorável |
| 14 | Pipeline Agêntico Completo | D | 60 min | Tudo integrado | DevFlow completo |
| 15 | Stitch — Design System com Agentes | BÔNUS | 55 min | Stitch + MCP + Playwright | DevFlow redesenhado |
| 16 | Playwright + Browser MCP | C (EXT) | 60 min | Playwright MCP + Browser MCP | Testes visuais + CI/CD |

## Regras para Manutenção de Coerência

1. **Este README é a fonte única da verdade.** Alterado antes de qualquer arquivo de aula.
2. **Referências nas aulas seguem este README.** O campo "Próxima Aula", menções como "Na Aula 05...", e a "Recapitulação" devem corresponder exatamente a este plano.
3. **Títulos consistentes.** O frontmatter `titulo` de cada aula deve ser idêntico ao título neste plano.
4. **A aula N nunca referencia conceitos ou ferramentas da aula N+1.**
5. **Progressão do DevFlow**: cada aula entrega uma peça que se integra às anteriores. A aula N assume que o aluno tem os artefatos das aulas 1..N-1.
6. **Progressão conceitual**: cada aula amarra o conceito da anterior e prepara o terreno para a próxima.
7. **Revisão pós-alteração.** Após modificar este arquivo, verificar todas as aulas existentes para referências quebradas.

## Fontes consultadas

- [Documentação oficial do GitHub Copilot](https://docs.github.com/en/copilot) — features, plans, custom instructions, agents, MCP
- [VS Code Docs — Agents Overview](https://code.visualstudio.com/docs/agents/overview) — agent mode, context, custom instructions
- [GitHub Copilot SDK](https://github.com/github/copilot-sdk) — multi-language SDK
- [GitHub MCP Server](https://github.com/github/github-mcp-server) — 19 toolsets
- [MCP Registry](https://github.com/mcp) — servidores MCP curados
- [Context7](https://context7.com/) — documentação viva para LLMs
- [Playwright](https://playwright.dev/) — testes E2E
- [Figma MCP](https://github.com/figma/mcp) — extração de specs de design
- [Clean Code — Robert C. Martin](https://www.oreilly.com/library/view/clean-code-a/9780136083238/)
- [Scrum Guide 2020](https://scrumguides.org/scrum-guide.html) — Ken Schwaber e Jeff Sutherland
- [Continual Harness — Karten et al. (2026)](https://arxiv.org/abs/2601.00000) — auto-melhoria de harness
- AlphaLessons: `harness-github-copilot-vscode/README.md` — estrutura do módulo Copilot
- AlphaLessons: `engenharia-de-software/README.md` — estrutura do módulo de engenharia
- AlphaLessons: `agentes-de-codigo/README.md` — catálogo de conceitos universais

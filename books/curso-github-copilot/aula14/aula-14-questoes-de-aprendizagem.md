---
titulo: "Programador Profissional com Agentes — Aula 14 — Questoes de Aprendizagem"
modulo: "01"
aula: "14"
---

# Programador Profissional com Agentes Aula 14 — Questoes de Aprendizagem

## Como Usar Este Arquivo

Este arquivo e o seu **checkpoint final de aprendizagem** — a ultima verificacao antes de voce celebrar a conclusao do curso. A pergunta central e: *"eu realmente domino o pipeline agente completo?"*

Cada questao abaixo verifica um conceito-chave da aula. Para cada uma, voce encontra:

- **Conceito-chave**: qual secao da aula revisitar se travar
- **Objetivo**: o que voce precisa demonstrar
- **Passos de Execucao**: o que fazer, em ordem
- **Entrega**: um template Markdown para preencher e salvar

**Como proceder:**

1. Crie uma pasta `entregas-aula-14/` na raiz do DevFlow
2. Resolva as 8 questoes EM ORDEM
3. Para cada questao, crie o arquivo de entrega indicado
4. Nao releia a aula — se travar, volte a secao indicada em "Conceito-chave"
5. Esta e a ultima vez. Depois disso, voce pode celebrar.

**Dica:** As questoes 4, 5 e 6 envolvem executar o pipeline completo no DevFlow. Tenha o repositorio com todas as pecas funcionais (GitHub MCP, subagentes, CI/CD) antes de comecar.

---

## Questao 1: Mapeando o Pipeline — Qual Etapa Para Cada Tarefa

**Conceito-chave:** Visao geral do pipeline agente (Aula 14, Secao 1).

**Objetivo:** Classificar 8 cenarios na etapa correta do pipeline agente e justificar.

**Passos de Execucao:**

1. Leia cada cenario abaixo
2. Classifique em qual etapa do pipeline ele se encaixa: **Issue**, **Plan**, **Code**, **Test**, **PR**, **Review**, **CI/CD**, **Deploy** ou **Refine**
3. Justifique sua resposta em 1-2 frases

**Cenarios:**

```
Cenario 1: Um desenvolvedor percebe que a listagem de projetos esta
lenta e registra a necessidade de otimizacao.

Cenario 2: Um agente analisa a issue de otimizacao e propoe adicionar
um indice no banco e paginacao no endpoint.

Cenario 3: O assistente implementa a paginacao e o indice no banco,
modificando os arquivos do backend.

Cenario 4: O @tester gera casos de teste para o novo endpoint
paginado e executa a suite.

Cenario 5: Um PR e aberto com a descricao "Adiciona paginacao e
indice para otimizar listagem de projetos — Closes #12".

Cenario 6: O @reviewer analisa o codigo e o @tester executa os
testes simultaneamente.

Cenario 7: O GitHub Actions executa lint, typecheck, testes e
verifica cobertura minima.

Cenario 8: As metricas do ciclo sao coletadas e o continual harness
sugere uma nova regra para o copilot-instructions.md.
```

**Entrega:** crie `entregas-aula-14/01-mapeando-pipeline.md`:

~~~~
## Questao 1 — Mapeando o Pipeline

| Cenario | Etapa do Pipeline | Justificativa |
|---------|-------------------|---------------|
| Cenario 1 |  |  |
| Cenario 2 |  |  |
| Cenario 3 |  |  |
| Cenario 4 |  |  |
| Cenario 5 |  |  |
| Cenario 6 |  |  |
| Cenario 7 |  |  |
| Cenario 8 |  |  |
~~~~

---

## Questao 2: Matriz de Decisao — Delegar ou Nao Delegar?

**Conceito-chave:** O papel do humano no ciclo agentico (Aula 14, Secao 2).

**Objetivo:** Classificar 6 cenarios como "Delegar", "Nao delegar" ou "Delegar parcialmente" e justificar com base na matriz de decisao.

**Passos de Execucao:**

1. Leia cada cenario abaixo
2. Classifique: **Delegar**, **Nao delegar** ou **Delegar parcialmente**
3. Justifique sua resposta com referencia a matriz de decisao da aula

**Cenarios:**

```
A. Um desenvolvedor precisa refatorar um controller de 200 linhas
   em varios services seguindo principios de clean code.

B. O time precisa decidir se migra o banco de SQLite para PostgreSQL.

C. Um bug critico em producao: usuarios nao conseguem fazer login.

D. O backlog tem 15 issues e e preciso priorizar as 5 mais importantes
   para a sprint.

E. Um novo endpoint GET /api/projects/stats precisa ser documentado.

F. Um desenvolvedor precisa revisar um PR que mexe em dados sensiveis
   de pagamento.
```

**Entrega:** crie `entregas-aula-14/02-matriz-decisao.md`:

~~~~
## Questao 2 — Matriz de Decisao

| Cenario | Delegar / Nao delegar / Parcial | Justificativa |
|---------|--------------------------------|---------------|
| A |  |  |
| B |  |  |
| C |  |  |
| D |  |  |
| E |  |  |
| F |  |  |

## Reflexao

Em 2-3 frases, como voce decide se uma tarefa deve ser delegada a um agente ou executada por um humano?
~~~~

---

## Questao 3: Projetando a Integracao do Pipeline

**Conceito-chave:** Integracao de todas as pecas (Aula 14, Secao 3).

**Objetivo:** Desenhar a arquitetura de integracao para uma nova feature, identificando qual peca do ecossistema e responsavel por cada parte.

**Passos de Execucao:**

1. Leia o cenario: "Precisamos adicionar um sistema de notificacoes no DevFlow: quando uma tarefa e atribuida a um usuario, ele recebe um email."
2. Identifique quais pecas do ecossistema sao necessarias para cada etapa
3. Preencha a tabela de integracao

**Entrega:** crie `entregas-aula-14/03-integracao-pipeline.md`:

~~~~
## Questao 3 — Projetando a Integracao do Pipeline

## Feature: Sistema de Notificacoes

## Mapeamento de Integracao

| Etapa | Peca do ecossistema responsavel | O que faz |
|-------|--------------------------------|-----------|
| Issue |  |  |
| Plan |  |  |
| Code |  |  |
| Test |  |  |
| PR |  |  |
| Review |  |  |
| CI/CD |  |  |
| Deploy |  |  |
| Refine |  |  |

## Diagrama de Integracao

Descreva em 3-5 frases como as pecas se conectam para entregar esta feature. Qual peca depende de qual? Qual e o fluxo de dados entre elas?
~~~~

---

## Questao 4: Executar o Pipeline — Etapas 1 a 4

**Conceito-chave:** Demonstracao completa (Aula 14, Secao 4).

**Objetivo:** Executar as 4 primeiras etapas do pipeline para uma feature real no DevFlow.

**Passos de Execucao:**

1. Crie uma issue no DevFlow: "Adicionar campo de prioridade a listagem de tarefas — exibir badge colorido no frontend"
2. Solicite ao assistente um plano de implementacao
3. Implemente a feature com Agent Mode
4. Invoque @tester para gerar e executar testes
5. Documente cada etapa

**Entrega:** crie `entregas-aula-14/04-etapas-1-a-4.md`:

~~~~
## Questao 4 — Etapas 1 a 4 do Pipeline

## Etapa 1: Issue

**Numero da issue:** #[NUMERO]

**Descricao da issue:**
[cole aqui a descricao completa da issue criada]

## Etapa 2: Plan

**Plano gerado pelo assistente:**
[cole aqui o plano de implementacao]

**Voce aprovou o plano?** [Sim / Nao / Parcialmente]

**Ajustes solicitados (se aplicavel):**
[ajustes que voce pediu]

## Etapa 3: Code

**Branch criada:** feature/[NOME]

**Arquivos modificados:**
- [path/arquivo1] — [descricao da alteracao]
- [path/arquivo2] — [descricao da alteracao]
- [path/arquivo3] — [descricao da alteracao]

**Commits:**
- [hash] — [mensagem]
- [hash] — [mensagem]

## Etapa 4: Test

**Relatorio do @tester:**
[cole aqui o relatorio do @tester]

**Testes gerados:** [quantidade]
**Testes que passaram:** [quantidade]
**Cobertura reportada:** [percentual]

## Autoavaliacao

As 4 primeiras etapas foram executadas com sucesso? [Sim / Nao / Parcialmente]

Se nao, o que travou?
~~~~

---

## Questao 5: Executar o Pipeline — Etapas 5 a 8

**Conceito-chave:** Demonstracao completa (Aula 14, Secao 4).

**Objetivo:** Completar as etapas 5 a 8 do pipeline para a mesma feature da Questao 4.

**Passos de Execucao:**

1. Abra um Pull Request com a implementacao, vinculando a issue
2. Invoque @reviewer e @tester em paralelo para revisar
3. Verifique o status do CI/CD
4. Faca o merge e verifique o deploy
5. Documente cada etapa

**Entrega:** crie `entregas-aula-14/05-etapas-5-a-8.md`:

~~~~
## Questao 5 — Etapas 5 a 8 do Pipeline

## Etapa 5: PR

**Numero do PR:** #[NUMERO]

**Descricao do PR:**
[cole aqui a descricao completa]

**Vinculo com issue:** Closes #[NUMERO]

**Labels:** [labels atribuidas]

## Etapa 6: Review

**Relatorio do @reviewer:**
[cole aqui o relatorio completo]

**Status da revisao:** [Aprovado / Reprovado / Alteracoes solicitadas]

**Relatorio do @tester:**
[cole aqui o relatorio completo]

**Status dos testes:** [Passaram / Falharam]

**Correcoes aplicadas apos revisao (se aplicavel):**
- [correcao 1]
- [correcao 2]

## Etapa 7: CI/CD

**Status dos checks:**
- Lint: [Passou / Falhou]
- Typecheck: [Passou / Falhou]
- Testes: [Passou / Falhou]
- Build: [Passou / Falhou]

**Workflow URL:** [link para o workflow run]

## Etapa 8: Merge e Deploy

**Merge realizado:** [Sim / Nao]

**Hash do merge commit:** [hash]

**Deploy bem-sucedido:** [Sim / Nao]

## Consolidacao

O pipeline completo (etapas 1 a 8) foi executado com sucesso? [Sim / Nao / Parcialmente]

Tempo total estimado (da criacao da issue ao deploy): [tempo]
~~~~

---

## Questao 6: Refinar com Base em Metricas

**Conceito-chave:** O papel do humano no ciclo agentico — refine (Aula 14, Secao 2 + Secao 4, Etapa 9).

**Objetivo:** Analisar as metricas do ciclo completo executado nas questoes 4 e 5 e propor refinamentos para o copilot-instructions.md.

**Passos de Execucao:**

1. Consulte as metricas coletadas pelo continual harness no ciclo
2. Identifique 2 pontos de melhoria baseados nas metricas
3. Proponha novas regras para o copilot-instructions.md que enderecem esses pontos
4. Documente a analise

**Entrega:** crie `entregas-aula-14/06-refinar-metricas.md`:

~~~~
## Questao 6 — Refinar com Base em Metricas

## Metricas do Ciclo

| Metrica | Valor | Observacao |
|---------|-------|------------|
| Tempo issue-to-deploy |  |  |
| Taxa de aprovacao na 1a revisao |  |  |
| Cobertura de testes apos o ciclo |  |  |
| Numero de correcoes solicitadas |  |  |
| CI/CD passou na primeira tentativa? |  |  |

## Pontos de Melhoria Identificados

**Ponto 1:** [descricao do ponto]
**Evidencia:** [metrica ou observacao que comprova]
**Causa raiz:** [por que isso aconteceu?]

**Ponto 2:** [descricao do ponto]
**Evidencia:** [metrica ou observacao que comprova]
**Causa raiz:** [por que isso aconteceu?]

## Propostas de Refinamento para copilot-instructions.md

**Regra proposta 1:**
[texto da nova regra ou alteracao]

**Justificativa:**
[por que esta regra vai prevenir o problema]

**Regra proposta 2:**
[texto da nova regra ou alteracao]

**Justificativa:**
[por que esta regra vai prevenir o problema]

## Implementacao

As regras propostas foram implementadas no copilot-instructions.md? [Sim / Nao]

Se nao, por que?
~~~~

---

## Questao 7: Documentar o Case de Portifolio

**Conceito-chave:** Portifolio profissional (Aula 14, Secao 5).

**Objetivo:** Criar um documento PORTFOLIO.md completo para o DevFlow, seguindo a estrutura definida na aula.

**Passos de Execucao:**

1. Crie o arquivo `PORTFOLIO.md` na raiz do DevFlow
2. Preencha cada secao com dados reais do seu DevFlow
3. Inclua: resumo executivo, stack, arquitetura do pipeline, metricas de impacto, licoes aprendidas
4. Se possivel, inclua um screencast ou link para demo

**Entrega:** crie `entregas-aula-14/07-portfolio.md`:

~~~~
## Questao 7 — Documentar o Case de Portifolio

## Estrutura do PORTFOLIO.md

O arquivo foi criado em: `PORTFOLIO.md`

## Conteudo do PORTFOLIO.md

[cole aqui o conteudo completo do seu PORTFOLIO.md]

## Autoavaliacao

| Criterio | Atendido? |
|----------|-----------|
| Resumo executivo claro | Sim / Nao / Parcialmente |
| Stack tecnologica listada | Sim / Nao / Parcialmente |
| Arquitetura do pipeline descrita | Sim / Nao / Parcialmente |
| Metricas de impacto documentadas | Sim / Nao / Parcialmente |
| Licoes aprendidas registradas | Sim / Nao / Parcialmente |
| Instrucoes de reproducao incluidas | Sim / Nao / Parcialmente |

## Melhorias Futuras

O que voce adicionaria ou melhoraria no PORTFOLIO.md no futuro?
~~~~

---

## Questao 8: Sintese do Curso — Sua Narrativa de Evolucao

**Conceito-chave:** Recapitulacao final (Aula 14, Secao 6) e conceitos de todas as 14 aulas.

**Objetivo:** Escrever uma narrativa de 500-800 palavras contando sua jornada de aprendizado ao longo das 14 aulas.

**Passos de Execucao:**

1. Reflita sobre sua jornada: onde voce comecou e onde esta agora
2. Escreva uma narrativa que cubra os 4 blocos do curso
3. Inclua: o que voce aprendeu, o que foi mais desafiador, o que te surpreendeu
4. Termine com: onde voce quer chegar a partir daqui

**Entrega:** crie `entregas-aula-14/08-sintese-curso.md`:

~~~~
## Questao 8 — Sintese do Curso

## Titulo da Minha Jornada

[escolha um titulo que represente sua jornada]

## Narrativa

[500-800 palavras contando sua jornada. Inclua:

- Onde voce comecou (antes do curso)
- O que aprendeu em cada bloco (A, B, C, D)
- O que foi mais desafiador
- O que te surpreendeu
- O momento "aha" mais marcante
- Onde voce quer chegar a partir daqui]

## Reflexao Final

Em uma frase: o que significa ser um orquestrador de ecossistema agentico para voce?
~~~~

---

## Checklist Final: Pronto para o Mercado?

Esta e a ultima verificacao. Antes de encerrar o curso, verifique se voce consegue fazer cada um dos itens abaixo sem consultar a aula:

- [ ] **Listei** as 8 etapas do pipeline agente completo em ordem
- [ ] **Expliquei** o papel do humano como orquestrador, nao como executor
- [ ] **Identifiquei** os 5 pontos de intervencao critica e por que cada um importa
- [ ] **Classifiquei** corretamente 6 cenarios entre delegar, nao delegar ou delegar parcialmente
- [ ] **Desenhei** a arquitetura de integracao de uma nova feature, mapeando qual peca do ecossistema e responsavel por cada parte
- [ ] **Executei** o pipeline completo (etapas 1 a 8) para uma feature real no DevFlow
- [ ] **Analisei** metricas do ciclo e propus refinamentos concretos para o copilot-instructions.md
- [ ] **Criei** um PORTFOLIO.md completo para o DevFlow como case de portifolio profissional
- [ ] **Escrevi** minha narrativa de evolucao em 500-800 palavras, conectando todos os 4 blocos do curso
- [ ] **Identifiquei** meus proximos passos de aprendizado apos o curso

**Mensagem Final**

Parabens. Voce completou o curso "Programador Profissional com Agentes — Do Zero ao Pipeline Completo".

O que voce construiu ao longo de 14 aulas nao e apenas um conjunto de tecnicas — e um **ecossistema profissional completo** que vai continuar evoluindo com voce. O DevFlow e seu case de portifolio. O pipeline agente e seu metodo de trabalho. As instrucoes, skills, MCPs, subagentes e continual harness sao seu ecossistema.

O desenvolvedor que comecou a Aula 1 instalando o VS Code e fazendo um GET /health e muito diferente do profissional que conclui a Aula 14 orquestrando um pipeline completo da issue ao deploy.

O ciclo recomeca — melhor que antes.

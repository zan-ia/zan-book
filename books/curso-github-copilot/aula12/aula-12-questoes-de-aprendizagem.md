---
titulo: "Programador Profissional com Agentes — Aula 12 — Questoes de Aprendizagem"
modulo: "01"
aula: "12"
---

# Programador Profissional com Agentes Aula 12 — Questoes de Aprendizagem

## Como Usar Este Arquivo

Este arquivo e o seu **checkpoint de aprendizagem** da Aula 12. A pergunta central e: *"eu realmente entendi a materia?"*

Cada questao abaixo verifica um conceito-chave da aula. Para cada uma, voce encontra:

- **Conceito-chave**: qual secao da aula revisitar se travar
- **Objetivo**: o que voce precisa demonstrar
- **Passos de Execucao**: o que fazer, em ordem
- **Entrega**: um template Markdown para preencher e salvar

**Como proceder:**

1. Crie uma pasta `entregas-aula-12/` na raiz do DevFlow
2. Resolva as 7 questoes EM ORDEM
3. Para cada questao, crie o arquivo de entrega indicado
4. Nao releia a aula — se travar, volte a secao indicada em "Conceito-chave"
5. So avance para a Aula 13 quando completar todas as 7 questoes por conta propria

**Dica:** As questoes 3, 4 e 5 envolvem criacao e uso de subagentes no DevFlow. Tenha os arquivos `.agent.md` e o repositorio DevFlow prontos antes de comecar.

---

## Questao 1: Mapeando Especializacao — Qual Subagente Para Cada Tarefa

**Conceito-chave:** Especializacao vs Monolitico — por que delegar (Aula 12, Secao 1).

**Objetivo:** Classificar 6 cenarios do dia a dia de desenvolvimento no subagente correto e justificar a classificacao.

**Passos de Execucao:**

1. Leia cada cenario abaixo
2. Classifique qual subagente seria o mais adequado: **@reviewer**, **@tester**, **@documenter**, **Nenhum (agente generalista)** ou **Novo subagente**
3. Justifique sua resposta em 1-2 frases

**Cenarios:**

```
Cenario A: Um desenvolvedor precisa verificar se o codigo de um PR
segue os padroes de clean code do time.

Cenario B: A equipe descobriu um bug critico em producao e precisa
de uma correcao rapida — sem tempo para revisao formal.

Cenario C: Uma nova API foi implementada e precisa de documentacao
com exemplos de request e response.

Cenario D: O CI/CD esta falhando porque a cobertura de testes caiu
abaixo de 80% e ninguem sabe quais testes estao faltando.

Cenario E: O time quer mapear todas as dependencias do projeto e
verificar se alguma tem vulnerabilidade conhecida.

Cenario F: Um desenvolvedor quer refatorar um controller de 200
linhas em varios services menores.
```

**Entrega:** crie `entregas-aula-12/01-mapeando-especializacao.md`:

~~~~
## Questao 1 — Mapeando Especializacao

## Tabela de Classificacao

| Cenario | Subagente (reviewer / tester / documenter / nenhum / novo) | Justificativa |
|---|---|---|
| Cenario A |  |  |
| Cenario B |  |  |
| Cenario C |  |  |
| Cenario D |  |  |
| Cenario E |  |  |
| Cenario F |  |  |
~~~~

---

## Questao 2: Anatomia do .agent.md

**Conceito-chave:** Anatomia de um custom agent — .agent.md (Aula 12, Secao 4).

**Objetivo:** Preencher as partes faltantes de um arquivo .agent.md para o subagente `@linter`, corrigindo erros propositais.

**Passos de Execucao:**

1. Leia o arquivo `.agent.md` abaixo (contem 3 erros)
2. Identifique os 3 erros
3. Reescreva o arquivo corrigido

**Arquivo com erros:**

```markdown
---
nome: linter
ferramentas: [read, terminal, write]
---

# @linter

Voce e um linter humano.

## Comportamento esperado

- Corrija todos os erros de estilo automaticamente.
- Nao pergunte antes de modificar — so corrija.

## Ferramentas

- Use `read` para ler arquivos
- Use `terminal` para executar linters
- Use `write` para modificar arquivos

## Escopo

- **Faz**: tudo relacionado a estilo de codigo
```

**Entrega:** crie `entregas-aula-12/02-anatomia-agent-dot-md.md`:

~~~~
## Questao 2 — Anatomia do .agent.md

## Erros Identificados

1. Erro 1: _______________________________________________________________
2. Erro 2: _______________________________________________________________
3. Erro 3: _______________________________________________________________

## Arquivo Corrigido

[Insira aqui o arquivo .agent.md corrigido]
~~~~

---

## Questao 3: Criando o Subagente @reviewer

**Conceito-chave:** Criando os subagentes do DevFlow — @reviewer (Aula 12, Secao 5.1).

**Objetivo:** Criar o arquivo `.github/agents/reviewer.agent.md` no DevFlow com instrucoes completas e testar sua invocacao.

**Passos de Execucao:**

1. Crie a pasta `.github/agents/` no DevFlow (se nao existir)
2. Crie o arquivo `.github/agents/reviewer.agent.md` com:
   - Frontmatter: nome, ferramentas (read, grep, glob, search)
   - Instrucoes de comportamento: objetivo, tom construtivo, checklist de 7 pontos
   - Escopo claro: o que faz e o que NAO faz
3. Teste a invocacao: `@reviewer o que voce faz?`
4. Teste a invocacao: `@reviewer qual seu checklist de revisao?`

**Entrega:** crie `entregas-aula-12/03-criando-reviewer.md`:

~~~~
## Questao 3 — Criando o Subagente @reviewer

## Arquivo Criado

**Path:** `.github/agents/reviewer.agent.md`

## Conteudo do Arquivo

[cole aqui o conteudo completo do seu reviewer.agent.md]

## Teste de Invocacao

**Pergunta:** `@reviewer o que voce faz?`

**Resposta do subagente:**

[cole aqui a resposta que o subagente deu]

**Pergunta:** `@reviewer qual seu checklist de revisao?`

**Resposta do subagente:**

[cole aqui a resposta que o subagente deu]

## Autoavaliacao

O subagente respondeu conforme o esperado? [Sim / Nao / Parcialmente]

Se nao, o que voce ajustou?
~~~~

---

## Questao 4: Delegacao em Paralelo com @reviewer e @tester

**Conceito-chave:** Delegacao e paralelismo no fluxo de PR (Aula 12, Secao 6).

**Objetivo:** Executar @reviewer e @tester em paralelo para revisar um PR real no DevFlow e consolidar os resultados.

**Passos de Execucao:**

1. Crie uma branch `feature/ordenar-projetos` no DevFlow
2. Adicione no backend: query param `?sort=name` no `GET /api/projects` que ordena alfabeticamente
3. Adicione no frontend: um botao de ordenacao na listagem de projetos
4. Abra um PR para main com titulo "Adiciona ordenacao alfabetica de projetos"
5. Invoque @reviewer e @tester EM PARALELO para analisar o PR
6. Analise os relatorios de ambos
7. Se @reviewer apontou problemas, crie uma nova branch de correcao e ajuste
8. Reexecute os subagentes apos correcoes
9. Documente os resultados

**Entrega:** crie `entregas-aula-12/04-delegacao-paralela.md`:

~~~~
## Questao 4 — Delegacao em Paralelo com @reviewer e @tester

## PR Criado

**Branch:** feature/ordenar-projetos
**Titulo do PR:** Adiciona ordenacao alfabetica de projetos
**Numero do PR:** #[NUMERO]

## Resultado do @reviewer

**Relatorio produzido:**

[cole aqui o relatorio completo que o @reviewer produziu]

**Problemas encontrados:**

- [lista de problemas, se houver]

**Correcoes aplicadas:**

- [lista de correcoes, se houver]

## Resultado do @tester

**Relatorio produzido:**

[cole aqui o relatorio completo que o @tester produziu]

**Testes executados:** [quantidade]
**Testes que passaram:** [quantidade]
**Testes que falharam:** [quantidade]
**Cobertura reportada:** [percentual]

## Resultado Consolidado

| Aspecto | Status (Aprovado / Reprovado / Nao avaliado) |
|---|---|
| Revisao de codigo (@reviewer) |  |
| Testes (@tester) |  |
| Documentacao (@documenter) |  |

## Documentacao do Fluxo

Descreva em 3-5 frases como foi a experiencia de executar os subagentes em paralelo. O que funcionou bem? O que voce mudaria?
~~~~

---

## Questao 5: Criando e Testando o @documenter

**Conceito-chave:** Criando os subagentes do DevFlow — @documenter (Aula 12, Secao 5.3).

**Objetivo:** Criar o subagente @documenter e usa-lo para gerar documentacao da API do DevFlow.

**Passos de Execucao:**

1. Crie o arquivo `.github/agents/documenter.agent.md` no DevFlow
2. Crie um endpoint `GET /api/projects/summary` que retorna um resumo: `{ totalProjects: 20, totalTasks: 150, completionRate: 0.75 }`
3. Invoque @documenter para gerar documentacao deste endpoint
4. Verifique se a documentacao gerada inclui: endpoint, metodo, parametros, exemplo de response, codigos de erro

**Entrega:** crie `entregas-aula-12/05-criando-documenter.md`:

~~~~
## Questao 5 — Criando e Testando o @documenter

## Arquivo Criado

**Path:** `.github/agents/documenter.agent.md`

## Conteudo do Arquivo

[cole aqui o conteudo completo do seu documenter.agent.md]

## Documentacao Gerada

**Endpoint:** GET /api/projects/summary

**Documentacao produzida pelo @documenter:**

[cole aqui a documentacao que o @documenter gerou]

## Autoavaliacao

A documentacao inclui endpoint, metodo, parametros, response e erros? [Sim / Nao / Parcialmente]

O que faltou (se aplicavel)?
~~~~

---

## Questao 6: Refinando o Escopo de um Subagente

**Conceito-chave:** Anatomia de um custom agent — escopo negativo (Aula 12, Secao 4).

**Objetivo:** Analisar um cenario onde o escopo de um subagente esta mal definido e propor a correcao.

**Passos de Execucao:**

1. Leia o cenario abaixo
2. Identifique o problema de escopo
3. Proponha a correcao no arquivo `.agent.md`

**Cenario:**

> O subagente @tester foi configurado com o seguinte escopo:
> ```
> ## Escopo
> - **Faz**: gerar testes, executar testes, revisar logica de negocios,
>   verificar cobertura, sugerir melhorias de arquitetura
> - **NAO faz**: modificar codigo de producao
> ```
>
> Durante a revisao de um PR, o @tester comecou a sugerir refatoracoes
> na arquitetura do projeto e a apontar problemas de logica de negocios —
> mas deixou de gerar testes para duas novas funcoes. O desenvolvedor
> percebeu que o escopo estava mal definido e que o subagente estava
> se comportando como um generalista.

**Entrega:** crie `entregas-aula-12/06-refinando-escopo.md`:

~~~~
## Questao 6 — Refinando o Escopo de um Subagente

## Problema Identificado

[Descreva qual o problema de escopo no @tester]

## Impacto do Problema

[Explique como esse problema afeta a qualidade do trabalho do subagente]

## Escopo Corrigido (apenas a secao Escopo)

## Escopo

- **Faz**: ______________________________________________________________
- **NAO faz**: __________________________________________________________
~~~~

---

## Questao 7: Projetando um Novo Subagente

**Conceito-chave:** Especializacao, isolamento, paralelismo (Aula 12, Secoes 1-3).

**Objetivo:** Projetar um novo subagente especializado para o DevFlow, aplicando os principios de especializacao, isolamento de contexto e definicao de escopo.

**Passos de Execucao:**

1. Escolha um dominio que ainda nao tem subagente no DevFlow entre: `@performance-auditor` (auditoria de performance), `@migration-manager` (gerenciamento de migracoes de banco), `@i18n-specialist` (internacionalizacao), ou `@logging-analyzer` (analise de logs)
2. Defina o dominio, as ferramentas e o escopo negativo
3. Crie o arquivo `.agent.md` completo
4. Teste a invocacao: `@[seu-subagente] o que voce faz?`

**Entrega:** crie `entregas-aula-12/07-novo-subagente.md`:

~~~~
## Questao 7 — Projetando um Novo Subagente

## Subagente Escolhido

**Nome:** [nome do subagente]

**Dominio:** [descricao do dominio em 1-2 frases]

## Justificativa

Por que este subagente merece um arquivo proprio em vez de ser coberto por um agente generalista?

## Arquivo .agent.md

**Path:** `.github/agents/[nome].agent.md`

[cole aqui o conteudo completo do arquivo]

## Teste de Invocacao

**Pergunta:** @[nome] o que voce faz?

**Resposta do subagente:**

[cole aqui a resposta]

## Autoavaliacao

O subagente respondeu dentro do escopo esperado? [Sim / Nao / Parcialmente]

O escopo negativo foi respeitado? [Sim / Nao]
~~~~

---

## Checklist Final: Pronto para a Aula 13?

Antes de avancar para a Aula 13, verifique se voce consegue fazer cada um dos itens abaixo sem consultar a aula:

- [ ] **Expliquei** por que um time de subagentes especializados e mais eficaz que um agente monolitico em projetos complexos
- [ ] **Defini** isolamento de contexto com minhas proprias palavras e expliquei por que ele melhora a qualidade das respostas
- [ ] **Calculei** o tempo de execucao de tarefas paralelas (dominando a regra do "tempo do mais lento")
- [ ] **Identifiquei** as tres partes essenciais de um arquivo `.agent.md` (frontmatter, instrucoes, escopo)
- [ ] **Criei** o arquivo `.github/agents/reviewer.agent.md` com checklist de 7 pontos e escopo claro
- [ ] **Criei** o arquivo `.github/agents/tester.agent.md` com ferramentas de terminal e regras de geracao de testes
- [ ] **Criei** o arquivo `.github/agents/documenter.agent.md` com tipos de documentacao e escopo definido
- [ ] **Executei** @reviewer e @tester em paralelo em um PR real do DevFlow e consolidei os resultados
- [ ] **Projetei** um novo subagente para um dominio ainda nao coberto, aplicando os principios de especializacao e isolamento

**Teaser da Aula 13:** Na proxima aula, voce vai implementar o Continual Harness — o ciclo de melhoria continua que usa os relatorios dos seus subagentes para refinar automaticamente as instrucoes do projeto. O @reviewer vai alimentar as regras do `copilot-instructions.md`. O @tester vai sugerir novos padroes de teste. O harness vai aprender com cada iteracao — sem voce precisar escrever uma linha de instrucao manualmente.

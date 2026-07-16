---
titulo: "Programador Profissional com Agentes — Aula 11 — Questoes de Aprendizagem"
modulo: "01"
aula: "11"
---

# Programador Profissional com Agentes Aula 11 — Questoes de Aprendizagem

## Como Usar Este Arquivo

Este arquivo e o seu **checkpoint de aprendizagem** da Aula 11. A pergunta central e: *"eu realmente entendi a materia?"*

Cada questao abaixo verifica um conceito-chave da aula. Para cada uma, voce encontra:

- **Conceito-chave**: qual secao da aula revisitar se travar
- **Objetivo**: o que voce precisa demonstrar
- **Passos de Execucao**: o que fazer, em ordem
- **Entrega**: um template Markdown para preencher e salvar

**Como proceder:**

1. Crie uma pasta `entregas-aula-11/` na raiz do DevFlow
2. Resolva as 7 questoes EM ORDEM
3. Para cada questao, crie o arquivo de entrega indicado
4. Nao releia a aula — se travar, volte a secao indicada em "Conceito-chave"
5. So avance para a Aula 12 quando completar todas as 7 questoes por conta propria

**Dica:** As questoes 3, 4 e 5 envolvem configuracao e uso do GitHub MCP no DevFlow. Tenha o `.vscode/mcp.json` e o token de acesso pessoal prontos antes de comecar.

---

## Questao 1: Mapeando Operacoes da Plataforma

**Conceito-chave:** Operacoes fundamentais — issues, PRs, CI/CD, code review e releases (Aula 11, Secao 2).

**Objetivo:** Classificar 6 cenarios do dia a dia de desenvolvimento na operacao correta da plataforma e justificar a classificacao.

**Passos de Execucao:**

1. Leia cada cenario abaixo
2. Classifique como **Issue**, **Pull Request**, **CI/CD**, **Code Review** ou **Release**
3. Justifique sua classificacao em 1-2 frases

**Cenarios:**

```
Cenario A: Um desenvolvedor encontra um bug no calculo de prazos do DevFlow
e quer registrar para nao esquecer de corrigir.

Cenario B: A automacao do repositorio compila o codigo, executa testes
e verifica cobertura sempre que alguem propoe uma alteracao.

Cenario C: Um membro do time analisa o diff de uma alteracao proposta,
verifica se segue os padroes e deixa comentarios.

Cenario D: Uma alteracao concluida e empacotada como versao 1.3.0
com notas de release para os usuarios.

Cenario E: Um desenvolvedor quer submeter sua alteracao para
avaliacao do time antes de integrar ao codigo principal.

Cenario F: A equipe identifica que precisa de uma nova tela de
relatorios e descreve os requisitos para implementacao futura.
```

**Entrega:** crie `entregas-aula-11/01-mapeando-operacoes.md`:

~~~~
## Questao 1 — Mapeando Operacoes da Plataforma

## Tabela de Classificacao

| Cenario | Operacao (Issue / PR / CI-CD / Code Review / Release) | Justificativa |
|---|---|---|
| Cenario A |  |  |
| Cenario B |  |  |
| Cenario C |  |  |
| Cenario D |  |  |
| Cenario E |  |  |
| Cenario F |  |  |

## Analise

Em 2-3 frases: qual dessas operacoes voce considera a mais importante para a qualidade do codigo? Por que?
~~~~

---

## Questao 2: Toolsets do GitHub MCP

**Conceito-chave:** Configuracao do GitHub MCP Server (Aula 11, Secao 4).

**Objetivo:** Identificar o toolset correto para cada operacao e decidir quais toolsets ativar com base no principio do menor manifesto.

**Passos de Execucao:**

1. Para cada operacao abaixo, identifique qual toolset do GitHub MCP a disponibiliza
2. Depois, decida quais toolsets ativar para um desenvolvedor que trabalha apenas com backend do DevFlow

**Operacoes:**

```
A. Criar uma nova issue para reportar um bug
B. Listar workflows de CI/CD do repositorio
C. Abrir um pull request para revisao
D. Verificar as estrelas do repositorio
E. Gerenciar branches do repositorio
F. Consultar notificacoes nao lidas
G. Adicionar um label a uma issue
```

**Entrega:** crie `entregas-aula-11/02-toolsets.md`:

~~~~
## Questao 2 — Toolsets do GitHub MCP

## Tabela Operacao x Toolset

| Operacao | Toolset |
|---|---|
| A. Criar issue |  |
| B. Listar workflows |  |
| C. Abrir PR |  |
| D. Verificar estrelas |  |
| E. Gerenciar branches |  |
| F. Consultar notificacoes |  |
| G. Adicionar label |  |

## Decisao de Toolsets

Cenario: desenvolvedor backend que trabalha com codigo, issues e CI/CD.

**Toolsets que vou ativar:**

```
GITHUB_TOOLSETS="..."
```

**Justificativa** (explique por que voce escolheu cada toolset e por que descartou os demais):

## Reflexao

Quantos tokens de manifesto voce economiza ao nao ativar toolsets que nao vai usar? Explique em 2-3 frases.
~~~~

---

## Questao 3: Configurar GitHub MCP no DevFlow

**Conceito-chave:** Configuracao do GitHub MCP Server (Aula 11, Secao 4).

**Objetivo:** Configurar o GitHub MCP Server no `.vscode/mcp.json` do DevFlow com a opcao de servidor remoto, autenticacao por token e toolsets selecionados.

**Passos de Execucao:**

1. Crie um token de acesso pessoal no GitHub com escopos `repo` e `workflow`
2. Adicione o GitHub MCP Server ao arquivo `.vscode/mcp.json` do DevFlow (modo remoto)
3. Configure os toolsets como `default,actions,git`
4. Teste a conexao perguntando ao assistente: "liste as ferramentas do GitHub disponiveis"
5. Verifique se as ferramentas de issues, PRs, repos, actions e git estao presentes

**Entrega:** crie `entregas-aula-11/03-configuracao-github-mcp.md`:

~~~~
## Questao 3 — Configuracao GitHub MCP

## Token Criado

- Tipo: [classic / fine-grained]
- Escopos selecionados: [lista]
- Nome do token: [nome que voce deu no GitHub]

## Conteudo do .vscode/mcp.json

Copie o conteudo completo do arquivo `.vscode/mcp.json` apos adicionar o GitHub MCP:

```json
{
  "servers": {
    "github": {
      ...
    }
  },
  "inputs": [
    ...
  ]
}
```

## Teste de Conexao

Cole o comando que voce usou para testar:

```
[comando aqui]
```

**Ferramentas listadas pelo assistente:**

[cole a resposta do assistente]

## Verificacao

- [ ] Token criado com escopos `repo` e `workflow`
- [ ] `.vscode/mcp.json` atualizado com o servidor GitHub
- [ ] Toolsets configurados como `default,actions,git`
- [ ] Assistente reconhece ferramentas de issues
- [ ] Assistente reconhece ferramentas de PRs
- [ ] Assistente reconhece ferramentas de repos
- [ ] Assistente reconhece ferramentas de actions
- [ ] Assistente reconhece ferramentas de git

## Reflexao

Por que e importante usar `${input:nome}` em vez de `${VARIAVEL_DE_AMBIENTE}` para o token? Explique em 2-3 frases.
~~~~

---

## Questao 4: Gerenciando Issues com GitHub MCP

**Conceito-chave:** Gerenciamento de issues (Aula 11, Secao 5).

**Objetivo:** Criar, listar, filtrar e atualizar issues no repositorio DevFlow usando apenas comandos naturais ao assistente.

**Passos de Execucao:**

1. Crie 3 issues no DevFlow com titulos e corpos diferentes:
   - Uma do tipo bug
   - Uma do tipo enhancement
   - Uma do tipo documentation
2. Atribua labels apropriadas a cada issue
3. Liste todas as issues abertas
4. Filtre as issues por uma label especifica
5. Atualize o titulo de uma das issues

**Entrega:** crie `entregas-aula-11/04-gerenciando-issues.md`:

~~~~
## Questao 4 — Gerenciando Issues

## Issues Criadas

| Issue | Titulo | Tipo | Labels | Comando usado |
|---|---|---|---|---|
| # |  | Bug |  |  |
| # |  | Enhancement |  |  |
| # |  | Documentation |  |  |

## Comandos Utilizados

Cole os comandos exatos que voce usou no Chat:

**Criar issue bug:**
```
[comando]
```

**Criar issue enhancement:**
```
[comando]
```

**Criar issue documentation:**
```
[comando]
```

**Listar todas as issues:**
```
[comando]
```

**Filtrar por label:**
```
[comando]
```

**Atualizar issue:**
```
[comando]
```

## Resultado da Listagem

Copie a resposta do assistente ao listar as issues:

## Resultado do Filtro

Copie a resposta do assistente ao filtrar:

## Verificacao

- [ ] 3 issues criadas com tipos diferentes
- [ ] Labels apropriadas atribuidas a cada issue
- [ ] Listagem mostra todas as 3 issues
- [ ] Filtro retorna apenas issues com a label especificada
- [ ] Titulo da issue foi atualizado com sucesso

## Reflexao

Em 2-3 frases: como criar issues via assistente mudou sua experiencia comparado a criar manualmente pelo navegador?
~~~~

---

## Questao 5: Criando Pull Requests com GitHub MCP

**Conceito-chave:** Gerenciamento de pull requests (Aula 11, Secao 5).

**Objetivo:** Abrir um pull request no DevFlow com descricao detalhada, labels, vinculo com issue e revisores.

**Passos de Execucao:**

1. Crie uma branch `feature/relatorio-projetos` a partir de main (pode ser vazia ou com uma alteracao simples)
2. Abra um PR dessa branch para main com:
   - Titulo descritivo
   - Corpo explicando a mudanca
   - Vinculo com uma das issues que voce criou na Questao 4 (use "Closes #numero")
   - Labels apropriadas
   - Pelo menos um revisor (pode ser seu proprio usuario do GitHub)
3. Verifique se o PR foi criado corretamente
4. Liste os PRs abertos para confirmar

**Entrega:** crie `entregas-aula-11/05-criando-pr.md`:

~~~~
## Questao 5 — Criando Pull Request

## Comandos Utilizados

Cole os comandos exatos:

**Criar branch:**
```
[comando]
```

**Abrir PR:**
```
[comando]
```

**Verificar PR:**
```
[comando]
```

**Listar PRs abertos:**
```
[comando]
```

## Resultado

**PR criado:** [numero do PR]

**Titulo:** [titulo do PR]

**Vinculo com issue:** [numero da issue vinculada]

**Labels:** [labels atribuidas]

**Revisor(es):** [revisores atribuidos]

## Verificacao

- [ ] Branch `feature/relatorio-projetos` criada
- [ ] PR aberto com titulo descritivo
- [ ] Corpo do PR explica a mudanca
- [ ] PR contem "Closes #[issue]" no corpo
- [ ] Labels atribuidas corretamente
- [ ] Revisor atribuido
- [ ] PR aparece na listagem de PRs abertos

## Analise

O que voce achou de criar um PR completo com apenas um comando natural? Compare com o fluxo manual de criar branch, fazer commit, push e abrir PR pelo navegador. Responda em 3-4 frases.
~~~~

---

## Questao 6: Ciclo Completo com CI/CD

**Conceito-chave:** Ciclo completo no DevFlow (Aula 11, Secao 6).

**Objetivo:** Executar um ciclo completo de desenvolvimento no DevFlow — issue a PR, com verificacao de CI/CD e merge — usando apenas comandos naturais.

**Passos de Execucao:**

1. Crie uma issue para adicionar "campo de descricao no formulario de projeto"
2. Crie uma branch e implemente a alteracao (pode ser uma alteracao minima, como adicionar o campo ao schema)
3. Abra um PR vinculando a issue
4. Verifique o status do CI/CD (se voce tem GitHub Actions configurado no DevFlow da Aula 07)
5. Fac,a o merge do PR
6. Verifique se o merge disparou o workflow de deploy

**Entrega:** crie `entregas-aula-11/06-ciclo-completo.md`:

~~~~
## Questao 6 — Ciclo Completo com CI/CD

## Comandos Utilizados

Cole os comandos exatos em ordem:

**1. Criar issue:**
```
[comando]
```

**2. Criar branch e implementar:**
```
[comando]
```

**3. Abrir PR:**
```
[comando]
```

**4. Verificar CI/CD:**
```
[comando]
```

**5. Fazer merge:**
```
[comando]
```

**6. Verificar deploy:**
```
[comando]
```

## Resumo do Ciclo

| Etapa | Numero / Referencia |
|---|---|
| Issue criada | # |
| Branch criada |  |
| PR aberto | # |
| CI/CD passou? | [Sim / Nao] |
| Merge realizado | [Sim / Nao] |
| Deploy disparado | [Sim / Nao] |

## Metricas

**Tempo estimado gasto no ciclo completo:** [quantos minutos]

**Quantas vezes voce precisou abrir o navegador:** [numero]

## Verificacao

- [ ] Issue criada antes de qualquer codigo
- [ ] Branch criada a partir da issue
- [ ] PR vinculado a issue (Closes #)
- [ ] CI/CD verificado (passou ou falhou)
- [ ] Merge realizado apos verificacao
- [ ] Zero interacoes com GitHub via navegador

## Reflexao Final

Em 3-5 frases: como foi a experiencia de executar o ciclo completo sem sair do editor? O que voce ganhou em produtividade? O que voce sentiu falta ou gostaria que fosse diferente?
~~~~

---

## Questao 7: Estrategia de Automacao e Planejamento Toolsets (Projeto Progressivo)

**Conceito-chave:** Automacao de fluxo e configuracao de toolsets (Aula 11, Secoes 3 e 4).

**Objetivo:** Planejar a estrategia de automacao do DevFlow, decidindo quais toolsets ativar e documentando as decisoes em formato ADR.

**Passos de Execucao:**

1. Analise as tarefas que voce executa com mais frequencia no DevFlow
2. Decida quais toolsets do GitHub MCP ativar para o dia a dia
3. Considere: frequencia de uso, custo de tokens de manifesto, necessidade de cada operacao
4. Documente a decisao em formato ADR (seguindo o padrao da Aula 04)
5. Crie um plano de auditoria periodica dos toolsets

**Entrega:** crie `entregas-aula-11/07-estrategia-automacao.md`:

~~~~
## Questao 7 — Estrategia de Automacao

## Perfil de Uso

Liste as operacoes que voce executa com mais frequencia no DevFlow:

| Operacao | Frequencia (por sessao) | Toolset necessario |
|---|---|---|
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |

## Decisao de Toolsets

**Toolsets selecionados para o dia a dia:**

```
GITHUB_TOOLSETS="..."
```

**Toolsets que vou deixar desativados (e por que):**

| Toolset desativado | Justificativa |
|---|---|
|  |  |
|  |  |
|  |  |

## ADR de Decisao

Documente a decisao no formato ADR:

```markdown
## ADR-012: Estrategia de Toolsets do GitHub MCP

## Status
[Proposto / Aceito]

## Contexto
[Descreva seu perfil de uso e as necessidades do DevFlow]

## Decisao
[Quais toolsets ativar e quais desativar]

## Justificativa
[Por que esta configuracao e a ideal para seu fluxo]

## Custo estimado de manifesto
[Quantos tokens aproximadamente cada toolset adiciona]

## Consequencias
[O que voce ganha e o que voce perde com esta decisao]

## Plano de Auditoria
[De quanto em quanto tempo reavaliar os toolsets]
```
~~~~

## Impacto

Com base na sua decisao, responda:

**Tokens economizados por sessao:** [estime]

**Operacoes que exigirao ativar toolsets sob demanda:** [liste]

**Gatilho para reavaliar a configuracao:** [ex: quando comecar a trabalhar com seguranca, notificacoes, etc.]

## Conclusao

Em 3-4 frases: qual o equilibrio ideal entre ter todos os toolsets disponiveis versus ativar apenas os necessarios? Como voce pretende gerenciar esse equilibrio no DevFlow?

---

## Checklist Final: Pronto para a Aula 12?

Marque cada item so quando conseguir faze-lo **sem consultar a aula**:

- [ ] Sei explicar o que e uma plataforma de desenvolvimento e por que ela e importante
- [ ] Sei identificar as 5 operacoes fundamentais de uma plataforma (issues, PRs, CI/CD, code review, releases)
- [ ] Sei configurar o GitHub MCP Server no `.vscode/mcp.json` com autenticacao
- [ ] Sei listar e selecionar toolsets, entendendo o custo de manifesto de cada um
- [ ] Sei criar, listar, filtrar e atualizar issues usando comandos naturais
- [ ] Sei criar PRs com descricao, labels, vinculo com issue e revisores
- [ ] Sei verificar status de CI/CD e fazer merge via comandos naturais
- [ ] Sei executar um ciclo completo do desenvolvimento (issue ao merge) sem abrir o navegador
- [ ] Sei planejar uma estrategia de automacao e documentar decisoes em ADR

> *Acertou todos? Parabens! Voce esta pronto para a **Aula 12: Subagentes e Delegacao — Seu Time de Agentes Especializados**, onde voce vai criar subagentes como `@reviewer`, `@tester` e `@documenter` no `.github/agents/` do DevFlow. O GitHub MCP que voce configurou hoje sera a plataforma onde esses subagentes vao atuar — revisando PRs, disparando CI/CD e gerenciando issues autonomamente. Travou em algum item? Releia a secao indicada na questao correspondente antes de avancar.*

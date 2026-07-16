# Programador Profissional com Agentes Aula 07 — Questões de Aprendizagem

## Como Usar Este Arquivo

Este arquivo é o **checkpoint de domínio** da Aula 07. A pergunta central é: *"eu realmente entendi CI/CD com GitHub Actions a ponto de construir e diagnosticar um pipeline sozinho?"*

Cada questão abaixo testa um conceito-chave da aula. Você deve:

1. Fazer cada questão na ordem — elas seguem a progressão da aula (problema -> anatomia -> portões -> workflow -> segurança -> badges)
2. Para cada questão, leia o **Objetivo** e os **Passos de Execução**
3. Crie um diretório `entregas-aula-07/` na raiz do DevFlow
4. Para cada questão, crie o arquivo de entrega indicado no template
5. Complete o template — preencha as tabelas, responda as perguntas de reflexão
6. Só consulte a aula principal se travar em algum conceito

**Regra de ouro:** você só avança para a Aula 08 quando conseguir completar todas as 8 questões **sem reler a aula**.

---

## Questão 1: CI vs CD — Análise Comparativa

**Conceito-chave:** Diferença entre integração contínua e entrega contínua (Aula 07, Seção 1).

**Objetivo:** Demonstrar que você entende a diferença conceitual entre CI e CD, com exemplos do mundo real e do próprio DevFlow.

**Passos de Execução:**

1. Defina CI e CD com suas próprias palavras (sem consultar a aula)
2. Para cada conceito, de um exemplo do mundo real é um exemplo aplicado ao DevFlow
3. Explique onde um termina e o outro começa

**Entrega:** crie `entregas-aula-07/07-q1-ci-vs-cd.md`:

~~~~
# Questão 1 — CI vs CD: Análise Comparativa

## Definição (com suas palavras)

**Integração Contínua (CI):** [sua definição em 2-3 frases]

**Entrega Contínua (CD):** [sua definição em 2-3 frases]

## Tabela Comparativa

| Aspecto | CI | CD |
|---|---|---|
| Objetivo principal | [qual o proposito] | [qual o proposito] |
| Gatilho | [o que dispara] | [o que dispara] |
| Resultado esperado | [o que acontece quando passa] | [o que acontece quando passa] |
| Decisão humana necessária? | [sim ou não] | [sim ou não] |
| Exemplo do mundo real | [exemplo concreto] | [exemplo concreto] |
| Exemplo no DevFlow | [exemplo concreto] | [exemplo concreto] |

## Onde CI termina e CD começa

[Em 3-5 frases, explique o ponto de transição: o que precisa acontecer para a CI ser considerada "concluida" e a CD "iniciada". Use o fluxo do DevFlow como exemplo.]

## Conclusão
Em 2-3 frases: por que é importante distinguir CI de CD, mesmo que na prática eles operem no mesmo pipeline?
~~~~

---

## Questão 2: Anatomia de Pipeline — Diagrama Estrutural

**Conceito-chave:** Estrutura universal de pipeline: triggers, jobs, steps, quality gates, artefatos (Aula 07, Seção 2).

**Objetivo:** Construir (em texto estruturado) a anatomia de um pipeline hipotético com 3 jobs e 2 quality gates, identificando o papel de cada elemento.

**Passos de Execução:**

1. Crie um pipeline hipotético para um projeto de sua escolha (não precisa ser DevFlow)
2. Defina 3 jobs com dependências entre eles
3. Defina 2 quality gates posicionados entre jobs
4. Descreva os triggers e os artefatos de cada job

**Entrega:** crie `entregas-aula-07/07-q2-anatomia-pipeline.md`:

~~~~
# Questão 2 — Anatomia de Pipeline

## Visão Geral do Projeto Hipotético

**Nome do projeto:** [nome]
**Tecnologia principal:** [ex: Python, Node, Java, etc.]
**Descrição:** [o que o projeto faz]

## Estrutura do Pipeline

Trigger(s): [quais eventos disparam o pipeline]

### Job 1: [Nome do Job]

**Runner:** [tipo de máquina]
**Steps:**
- [step 1]
- [step 2]
- [step 3]

**Artefatos produzidos:** [arquivos gerados, se houver]

### Portão de Qualidade 1: [Nome do Portão]

**O que verifica:** [descrição]
**Critério de aprovação:** [ex: cobertura >= 80%]
**O que acontece se falhar:** [consequência]

### Job 2: [Nome do Job]

**Depende de:** [jobs anteriores]
**Steps:**
- [step 1]
- [step 2]

**Artefatos produzidos:** [arquivos gerados, se houver]

### Portão de Qualidade 2: [Nome do Portão]

**O que verifica:** [descrição]
**Critério de aprovação:** [ex: zero warnings]
**O que acontece se falhar:** [consequência]

### Job 3: [Nome do Job]

**Depende de:** [jobs anteriores + portões]
**Steps:**
- [step 1]
- [step 2]

**Artefatos produzidos:** [arquivos gerados, se houver]

## Diagrama Textual

Desenhe a estrutura com setas:

```
[Trigger] --> [Job 1] --> [Gate 1] --> [Job 2] --> [Gate 2] --> [Job 3] --> [Sucesso/Falha]
```

## Conclusão
Em 2-3 frases: qual elemento você considera mais crítico nessa estrutura e por que?
~~~~

---

## Questão 3: Portões de Qualidade — Quando e Por Que

**Conceito-chave:** Função dos quality gates, tipos e consequencias de falha (Aula 07, Seção 3).

**Objetivo:** Analisar 3 cenários e decidir qual gate aplicar, justificando a escolha com base no risco que cada gate mitiga.

**Passos de Execução:**

1. Leia cada cenário abaixo
2. Para cada cenário, identifique qual portão de qualidade seria violado
3. Explique por que aquele portão é o mais adequado
4. Descreva o que acontece quando o portão falha

**Cenário 1:** Um desenvolvedor adiciona uma biblioteca externa para formatar datas. A biblioteca tem uma vulnerabilidade conhecida (CVE) registrada a 6 meses, mas ele não sabia.

**Cenário 2:** Durante uma refatoração, uma função de calculo de frete perdeu a cobertura de testes. Os testes existentes ainda passam, mas 30% do código novo da função nunca e executado pelos testes.

**Cenário 3:** Um pull request remove a declaração de tipo de um parametro de função, tornando-o `any` implicitamente. O código funciona, mas perdeu a segurança de tipos.

**Entrega:** crie `entregas-aula-07/07-q3-quality-gates.md`:

~~~~
# Questão 3 — Portões de Qualidade: Quando e Por Que

## Cenário 1: Biblioteca com vulnerabilidade

**Portão de qualidade aplicável:** [nome do portão]

**Por que este portão:** [justificativa]

**O que acontece quando falha:** [descrição do fluxo de falha]

**Cenário 2: Cobertura reduzida após refatoração**

**Portão de qualidade aplicável:** [nome do portão]

**Por que este portão:** [justificativa]

**O que acontece quando falha:** [descrição do fluxo de falha]

**Cenário 3: Parametro sem tipo (any implicito)**

**Portão de qualidade aplicável:** [nome do portão]

**Por que este portão:** [justificativa]

**O que acontece quando falha:** [descrição do fluxo de falha]

## Tabela Resumo

| Cenário | Portão | Risco mitigado |
|---|---|---|
| 1 | [portão] | [risco] |
| 2 | [portão] | [risco] |
| 3 | [portão] | [risco] |

## Conclusão
Em 2-3 frases: qual dos três portões você considera mais importante e por que?
~~~~

---

## Questão 4: Workflow YAML — Criando do Zero

**Conceito-chave:** Estrutura YAML completa: `name`, `on`, `jobs`, `steps`, `runs-on`, ações (Aula 07, Seção 4).

**Objetivo:** Criar um workflow YAML mínimo funcional para um projeto hipotético, sem consultar exemplos prontos.

**Passos de Execução:**

1. Escolha uma stack hipotética (ex: Python com pytest, ou Node com Jest, ou Java com Maven)
2. Crie um workflow YAML com 2 jobs (test e build) que dispare em push para main e pull request
3. Use ações reutilizaveis adequadas a stack escolhida
4. Inclua cache de dependências no job de test

**Entrega:** crie `entregas-aula-07/07-q4-workflow-yaml.md`:

~~~~
# Questão 4 — Workflow YAML: Criando do Zero

## Stack escolhida

**Linguagem:** [linguagem]
**Framework de testes:** [framework]
**Gerenciador de dependências:** [ferramenta]
**Runner:** [tipo de máquina]

## Workflow YAML

```yaml
# Cole aqui seu workflow YAML completo
name: [nome do workflow]

on:
  # triggers configurados

jobs:
  # jobs definidos
```

## Explicação de cada campo

| Campo | Linha no YAML | O que faz |
|---|---|---|
| `name` | | [explicação] |
| `on` | | [explicação] |
| `jobs` | | [explicação] |
| `runs-on` | | [explicação] |
| `steps` | | [explicação] |
| `uses` | | [explicação] |
| `run` | | [explicação] |

## Conclusão
Em 2-3 frases: qual a parte mais desafiadora ao criar um workflow YAML do zero — a sintaxe, a escolha das ações ou a configuração dos triggers?
~~~~

---

## Questão 5: Pipeline do DevFlow — Explicando Cada Job

**Conceito-chave:** Função de cada job no ci.yml do DevFlow (Aula 07, Seção 5).

**Objetivo:** Explicar o proposito de cada job no pipeline do DevFlow, por que estão naquela ordem, o que acontece se cada um falhar e como os jobs se relacionam.

**Passos de Execução:**

1. Para cada job do `ci.yml` do DevFlow (lint, typecheck, test, build), responda:
   - Qual o proposito deste job?
   - O que ele verifica exatamente?
   - O que acontece se ele falhar?
   - Em que ordem ele executa em relação aos outros?
2. Explique por que `lint`, `typecheck` e `test` estão em paralelo e `build` depende deles
3. Indique onde cada conceito universal da Parte 1 aparece em cada job

**Entrega:** crie `entregas-aula-07/07-q5-pipeline-devflow.md`:

~~~~
# Questão 5 — Pipeline do DevFlow: Explicando Cada Job

## Resumo do Workflow

**Nome do workflow:** [nome]
**Arquivo:** [caminho]

## Tabela de Jobs

| Job | Proposito | O que verifica | Depende de | Se falhar | Conexão com Parte 1 |
|---|---|---|---|---|---|
| lint | [proposito] | [verificação] | [dependências] | [consequência] | [conceito universal] |
| typecheck | [proposito] | [verificação] | [dependências] | [consequência] | [conceito universal] |
| test | [proposito] | [verificação] | [dependências] | [consequência] | [conceito universal] |
| build | [proposito] | [verificação] | [dependências] | [consequência] | [conceito universal] |

## Por que lint, typecheck e test rodam em paralelo?

[Explique em 3-5 frases. Considere: independência de verificações, tempo total do pipeline, isolamento de falha.]

## Por que build depende de lint, typecheck e test?

[Explique em 3-5 frases. Considere: o que o build produz, por que não faria sentido buildar código com falhas.]

## Conclusão
Em 2-3 frases: se você pudesse remover um job do pipeline do DevFlow, qual seria e por que? Se não pudesse remover nenhum, explique por que todos são necessários.
~~~~

---

## Questão 6: Dependabot + CodeQL — Segurança Contínua

**Conceito-chave:** Configuração do Dependabot é CodeQL, diferença entre eles (Aula 07, Seção 7).

**Objetivo:** Configurar Dependabot é CodeQL no DevFlow (se ainda não estiverem configurados) e explicar o que cada um protege, com exemplos concretos de vulnerabilidades que cada um detectaria.

**Passos de Execução:**

1. Verifique se `.github/dependabot.yml` existe no DevFlow. Se não, crie-o
2. Verifique se `.github/workflows/codeql.yml` existe. Se não, crie-o
3. Para cada ferramenta, explique o tipo de vulnerabilidade que ela detecta
4. De exemplos concretos de vulnerabilidades que cada uma pegaria no código do DevFlow

**Entrega:** crie `entregas-aula-07/07-q6-dependabot-codeql.md`:

~~~~
# Questão 6 — Dependabot + CodeQL: Segurança Contínua

## Dependabot

**Arquivo de configuração:** [caminho]

**Conteudo do dependabot.yml:**

```yaml
# cole aqui
```

**O que o Dependabot protege:** [explicação em 2-3 frases]

**Exemplo de vulnerabilidade que detectaria no DevFlow:** [exemplo concreto de uma dependência vulneravel que o DevFlow usa ou poderia usar]

**Frequência de verificação:** [configurada no dependabot.yml]

**CodeQL**

**Arquivo de configuração:** [caminho]

**Conteudo do codeql.yml:**

```yaml
# cole aqui (apenas as partes principais)
```

**O que o CodeQL protege:** [explicação em 2-3 frases]

**Exemplo de vulnerabilidade que detectaria no DevFlow:** [exemplo concreto de um padrão inseguro no código do DevFlow que o CodeQL apontaria]

**Trigger agendado:** [cron configurado]

## Tabela Comparativa

| Aspecto | Dependabot | CodeQL |
|---|---|---|
| O que analisa | [dependências externas / código fonte] | [dependências externas / código fonte] |
| Tipo de vulnerabilidade | [exemplo] | [exemplo] |
| Como alerta | [PR automático / alerta na aba Security] | [PR automático / alerta na aba Security] |
| Requer configuração adicional? | [sim / não] | [sim / não] |

## Conclusão
Em 2-3 frases: se você só pudesse configurar um dos dois (Dependabot ou CodeQL), qual escolheria e por que?
~~~~

---

## Questão 7: Badges — Visibilidade do Pipeline

**Conceito-chave:** Badges de status de workflow e cobertura no README (Aula 07, Seção 7).

**Objetivo:** Adicionar badges de status ao README do DevFlow (se ainda não estiverem) e explicar o proposito de cada um, o formato da URL e o que cada badge comunica.

**Passos de Execução:**

1. Verifique se o README do DevFlow já tem badges. Se não, adicione-os
2. Para cada badge, explique:
   - O que ele mostra
   - A estrutura da URL (o que cada parte significa)
   - O que significa quando está verde, vermelho ou "unknown"
3. Explique por que badges são colocados no topo do README

**Entrega:** crie `entregas-aula-07/07-q7-badges.md`:

~~~~
# Questão 7 — Badges: Visibilidade do Pipeline

## Badges no README do DevFlow

**Localização no README:** [antes da descrição / após o título / no final]

### Badge 1: Status do Workflow

**URL do badge:**
```
[cole a URL do badge de status]
```

**O que cada parte da URL significa:**
- `https://github.com/` -> [significado]
- `SEU_USUARIO/devflow` -> [significado]
- `actions/workflows/ci.yml/badge.svg` -> [significado]

**Estados possíveis e o que significam:**
- Verde: [significado]
- Vermelho: [significado]
- Amarelo (em execução): [significado]
- "unknown" ou "error": [significado]

### Badge 2: Cobertura (se configurado)

**URL do badge:**
```
[cole a URL do badge de cobertura]
```

**O que este badge comunica:** [explicação]

## Por que badges no topo do README?

[Explique em 3-5 frases por que o padrão da comunidade e colocar badges logo após o título, antes da descrição. Considere: quem ve o README, o que eles querem saber primeiro, como badges afetam a percepcao do projeto.]

## Captura de tela descritiva (opcional)

Caso queirá, cole uma descrição textual do que o README mostra com os badges:

```
# DevFlow
[badge verde] [badge verde]
Dashboard de gerenciamento de projetos dev.
...
```

## Conclusão
Em 2-3 frases: como os badges mudam a experiência de alguém que abre o repositório do DevFlow pela primeira vez?
~~~~

---

## Questão 8: Projeto Progressivo — Pipeline Completo

**Conceito-chave:** Integração de todas as pecas (Aula 07, Seções 5-7).

**Objetivo:** Entregar o pipeline CI/CD completo do DevFlow funcional e verificado: workflow com lint, typecheck, test e build, quality gates configurados, Dependabot ativo, CodeQL rodando e badges verdes no README.

**Passos de Execução:**

1. Verifique se `.github/workflows/ci.yml` existe com todos os 4 jobs e dependências corretas
2. Verifique se `.github/dependabot.yml` existe com configuração semanal para npm
3. Verifique se `.github/workflows/codeql.yml` existe com triggers push, pull request e agendado
4. Verifique se o README tem badges de status e cobertura
5. Faca um commit forcando um warning de ESLint (variavel não usada), veja o pipeline falhar, depois corrijá é veja passar (ciclo completo quebrar -> diagnosticar -> corrigir -> passar)
6. Documente todo o processo

**Entrega:** crie `entregas-aula-07/07-q8-pipeline-completo.md`:

~~~~
# Questão 8 — Projeto Progressivo: Pipeline CI/CD Completo

## Checklist de Verificação

### Workflow CI (.github/workflows/ci.yml)

- [ ] Arquivo existe
- [ ] Trigger: push para main
- [ ] Trigger: pull request para main
- [ ] Job lint configurado
- [ ] Job typecheck configurado
- [ ] Job test configurado
- [ ] Job build configurado
- [ ] build depende de lint, typecheck e test
- [ ] Cache de dependências ativo (`cache: npm`)

### Quality Gates

- [ ] lint usa `--max-warnings 0`
- [ ] typecheck usa `tsc --noEmit`
- [ ] jest.config.js com `coverageThreshold` de 80%
- [ ] tsconfig.json com `strict: true`

### Dependabot (.github/dependabot.yml)

- [ ] Arquivo existe
- [ ] Package ecosystem: npm
- [ ] Schedule: weekly

### CodeQL (.github/workflows/codeql.yml)

- [ ] Arquivo existe
- [ ] Trigger: push para main
- [ ] Trigger: pull request para main
- [ ] Trigger agendado configurado
- [ ] Language: javascript-typescript

### Badges

- [ ] Badge de status do workflow no README
- [ ] Badge de cobertura no README (se configurado)
- [ ] Badges no topo do README (após o título)

## Ciclo Quebrar -> Diagnosticar -> Corrigir -> Passar

### Fase 1: Quebrar

**O que fiz:** [descreva o warning intencional que você introduziu]

**Arquivo alterádo:** [caminho]

**Commit:** [hash do commit]

### Fase 2: Diagnosticar

**URL do workflow falho:** [cole o link para a execução do workflow]

**Job que falhou:** [lint / typecheck / test / build]

**Mensagem de erro no log:** (copie as linhas principais)

```
[cole as linhas de erro do log do GitHub Actions]
```

**Interpretação:** [explique qual regra foi violada, em qual arquivo e linha, e por que o pipeline bloqueou]

### Fase 3: Corrigir

**O que fiz para corrigir:** [descrição da correção]

**Arquivo alterádo:** [caminho]

**Commit:** [hash do commit]

### Fase 4: Verificar

**URL do workflow bem-sucedido:** [cole o link]

**Jobs verdes:** [quantos e quais]

**Tempo total de execução:** [minutos]

## Análise de Valor

| Aspecto | Antes do pipeline (Aula 06) | Depois do pipeline (Aula 07) |
|---|---|---|
| Tempo para validar um commit | [estimativa] | [estimativa] |
| Quem garante que os testes rodarám? | [descrição] | [descrição] |
| Detecção de warning de lint | [descrição] | [descrição] |
| Visibilidade da saúde do projeto | [descrição] | [descrição] |

## Conclusão
Em 3-5 frases: qual foi o momento mais impactante ao construir o pipeline — vê ele passar pela primeira vez, vê-lo falhar e diagnosticar o erro, ou ver os badges verdes no README?
~~~~

---

## Checklist Final: Pronto para a Aula 08?

Marque cada item só quando conseguir faze-lo **sem consultar a aula**:

- [ ] Explico o problema que CI/CD resolve — por que deploys manuais falham e como a automacao previne regressões (Objetivo 1)
- [ ] Descrevo a anatomia de um pipeline de integração contínua: triggers, jobs, steps, artefatos e quality gates (Objetivo 2)
- [ ] Defino o que são portões de qualidade e como eles protegem a base de código (Objetivo 3)
- [ ] Distingo integração contínua (CI) de entrega contínua (CD) com exemplos próprios (Objetivo 4)
- [ ] Crio um workflow completo no GitHub Actions com jobs de lint, typecheck, teste e build (Objetivo 5)
- [ ] Configuro quality gates no pipeline: threshold de cobertura >= 80%, ESLint zero warnings, TypeScript strict (Objetivo 6)
- [ ] Habilito Dependabot para atualização automática de dependências e CodeQL para análise de segurança (Objetivo 7)
- [ ] Adiciono badges de status ao README do DevFlow (Objetivo 8)
- [ ] Diagnóstico falhas de pipeline — interpretar logs, identificar a causa raiz e corrigir (Objetivo 9)

> *Acertou todos? Você está pronto para a Aula 08, onde vai construir o frontend React do DevFlow, aprender Playwright para testes E2E e estruturar o trabalho com metodologia ágil usando GitHub Issues e milestones. O pipeline que você construiu hoje vai proteger cada novo commit! Travou em algum? Releia a seção indicada na questão correspondente antes de avançar.*

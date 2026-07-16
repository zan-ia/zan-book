---
titulo: "Programador Profissional com Agentes — Aula 06 — Questões de Aprendizagem"
modulo: "01"
aula: "06"
---

# Programador Profissional com Agentes Aula 06 — Questões de Aprendizagem

## Como Usar Este Arquivo

Este arquivo é o **checkpoint de domínio** da Aula 06. A pergunta central é: *"eu realmente entendi TDD com Copilot a ponto de aplicar sozinho?"*

Cada questão abaixo testa um conceito-chave da aula. Você deve:

1. Fazer cada questão na ordem — elas seguem a progressão da aula (conceitos → setup → features → cobertura)
2. Para cada questão, leia o **Objetivo** e os **Passos de Execução**
3. Crie um diretório `entregas-aula-06/` na raiz do DevFlow
4. Para cada questão, crie o arquivo de entrega indicado no template
5. Complete o template — preencha as tabelas, responda às perguntas de reflexão
6. Só consulte a aula principal se travar em algum conceito

**Regra de ouro:** você só avança para a Aula 07 quando conseguir completar todas as 8 questões **sem reler a aula**.

---

## Questão 1: Explicando o Ciclo Red → Green → Refactor

**Conceito-chave:** Ciclo TDD (Aula 06, Seção 1).

**Objetivo:** Descrever cada fase do ciclo TDD com um exemplo próprio, demonstrando que você entende o propósito de cada fase e os anti-padrões.

**Passos de Execução:**

1. Escolha uma função simples que você poderia implementar (ex: `calcularImc(peso, altura)`, `validarCpf(cpf)`, `formatarData(dia, mes, ano)`)
2. Para cada fase do ciclo (Red, Green, Refactor), descreva em uma frase o que você faria
3. Identifique um anti-padrão que poderia acontecer em cada fase

**Entrega:** crie `entregas-aula-06/06-q1-ciclo-tdd.md`:

~~~~
# Questão 1 — Explicando o Ciclo Red → Green → Refactor

**Função escolhida:** [nome da função e o que ela faz]

## Fase Red

O que eu faria: [descrição do teste que escreveria e por que ele deve falhar]

Resultado esperado ao executar o teste: [mensagem de erro esperada]

## Fase Green

O que eu faria: [código mínimo para passar o teste]

O que NÃO faria (mesmo sendo tentador): [anti-padrão que evitaria]

## Fase Refactor

Melhoria que aplicaria: [exemplo de extração, renomeação ou simplificação]

Como sei que não quebrou nada: [o que os testes garantem]

## Anti-padrões que identifiquei

| Fase | Anti-padrão | Por que é problema |
|---|---|---|
| Red | [anti-padrão] | [explicação] |
| Green | [anti-padrão] | [explicação] |
| Refactor | [anti-padrão] | [explicação] |

## Conclusão
Em 2-3 frases: por que o ciclo Red → Green → Refactor é uma disciplina de design, não apenas uma técnica de teste?
~~~~

---

## Questão 2: Aplicando FIRST a Cenários Reais

**Conceito-chave:** Princípios FIRST (Aula 06, Seção 2).

**Objetivo:** Avaliar 3 testes hipotéticos contra os 5 princípios FIRST, identificando violações e propondo correções.

**Passos de Execução:**

1. Leia cada cenário de teste abaixo
2. Identifique qual(is) princípio(s) FIRST está(ão) sendo violados
3. Justifique cada violação com uma frase
4. Proponha uma correção para cada teste

**Cenário 1:** Um teste de unidade para `calcularFrete(cepOrigem, cepDestino, peso)` que faz uma requisição HTTP real a uma API de CEP para validar os endereços antes de calcular o frete.

**Cenário 2:** Um teste de integração `Teste A` que insere um produto no banco e `Teste B` que busca os produtos e verifica se o produto de `Teste A` está na lista.

**Cenário 3:** Um teste para `gerarRelatorio(mes, ano)` que usa `new Date()` para determinar o último dia do mês, e o resultado esperado varia dependendo de quando o teste é executado.

**Entrega:** crie `entregas-aula-06/06-q2-first-principles.md`:

~~~~
# Questão 2 — Aplicando FIRST a Cenários Reais

## Cenário 1: Teste que chama API de CEP

**Princípios violados:** [lista]

**Justificativa de cada violação:**

- [Princípio]: [por que está violado]
- [Princípio]: [por que está violado]

**Correção proposta:** [como você reescreveria o teste]

## Cenário 2: Testes A e B com dependência de ordem

**Princípios violados:** [lista]

**Justificativa de cada violação:**

- [Princípio]: [por que está violado]

**Correção proposta:** [como tornar os testes independentes]

## Cenário 3: Teste que depende da data atual

**Princípios violados:** [lista]

**Justificativa de cada violação:**

- [Princípio]: [por que está violado]

**Correção proposta:** [como tornar o teste repeatable]

## Conclusão
Em 2-3 frases: qual princípio FIRST você considera mais importante e por quê?
~~~~

---

## Questão 3: Classificando Testes na Pirâmide

**Conceito-chave:** Pirâmide de testes (Aula 06, Seção 3).

**Objetivo:** Mapear 6 cenários de teste para o tipo correto (unitário, integração ou E2E) e justificar cada classificação usando a pirâmide como referência.

**Passos de Execução:**

1. Leia cada cenário
2. Classifique como Unitário, Integração ou E2E
3. Justifique com base em: o que está sendo testado, dependências externas, velocidade esperada
4. Indique quantos testes desse tipo você teria em uma pirâmide saudável (muitos, alguns, poucos)

**Cenários:**

- **A:** Testar que `helpers.validateRequired({ name: '' }, ['name'])` retorna um array contendo o erro "name is required"
- **B:** Testar que `POST /api/tasks` com título válido retorna 201 e o corpo contém a tarefa criada com ID
- **C:** Testar que o fluxo completo de criar um usuário, fazer login, criar um projeto e adicionar tarefas funciona do início ao fim
- **D:** Testar que `taskService.getTasksByProject(0)` retorna apenas tarefas com `projectId === 0`
- **E:** Testar que `PATCH /api/tasks/:id/status` com transição inválida retorna 400 com mensagem de erro
- **F:** Testar que a função `formatarMoeda(valor)` retorna "R$ 1.500,00" para o valor 1500

**Entrega:** crie `entregas-aula-06/06-q3-piramide-testes.md`:

~~~~
# Questão 3 — Classificando Testes na Pirâmide

| Cenário | Tipo (Unitário/Integração/E2E) | Justificativa | Quantidade na pirâmide |
|---|---|---|---|
| A | [tipo] | [justificativa] | [muitos/alguns/poucos] |
| B | [tipo] | [justificativa] | [muitos/alguns/poucos] |
| C | [tipo] | [justificativa] | [muitos/alguns/poucos] |
| D | [tipo] | [justificativa] | [muitos/alguns/poucos] |
| E | [tipo] | [justificativa] | [muitos/alguns/poucos] |
| F | [tipo] | [justificativa] | [muitos/alguns/poucos] |

## Conclusão
Em 2-3 frases: qual a principal diferença entre um teste unitário e um teste de integração no contexto do DevFlow?
~~~~

---

## Questão 4: Configurando o Ambiente de Testes

**Conceito-chave:** Setup com /setupTests (Aula 06, Seção 4).

**Objetivo:** Executar o setup do Jest + supertest com `/setupTests` em um projeto limpo, documentar cada alteração feita e explicar o propósito de cada opção do `jest.config.js`.

**Passos de Execução:**

1. Crie um diretório temporário fora do DevFlow (ex: `/tmp/teste-setup`)
2. Inicialize um projeto Node: `npm init -y`
3. Execute `/setupTests` no Chat do Copilot
4. Documente cada arquivo criado ou modificado
5. Explique cada campo do `jest.config.js` gerado

**Entrega:** crie `entregas-aula-06/06-q4-setup-testes.md`:

~~~~
# Questão 4 — Configurando o Ambiente de Testes

## Setup executado

**Diretório:** [caminho]

**Comando usado:** /setupTests

## Alterações realizadas

| Arquivo | Tipo (criado/modificado) | O que contém |
|---|---|---|
| [arquivo] | [criado/modificado] | [descrição] |
| [arquivo] | [criado/modificado] | [descrição] |
| [arquivo] | [criado/modificado] | [descrição] |

## Explicação do jest.config.js

```javascript
// Copie o jest.config.js gerado aqui e explique cada campo
```

| Campo | Valor | Propósito |
|---|---|---|
| testEnvironment | [valor] | [por que este ambiente para Node.js?] |
| testMatch | [valor] | [quais arquivos o Jest reconhece como testes?] |
| collectCoverageFrom | [valor] | [quais arquivos incluir na cobertura?] |
| coverageThreshold | [valor] | [o que este campo controla?] |

## Verificação pós-setup

**Comando executado:** npx jest --passWithNoTests

**Resultado:** [cole a saída]

## Conclusão
Em 2-3 frases: por que o setup do ambiente de testes é um pré-requisito importante antes de escrever o primeiro teste?
~~~~

---

## Questão 5: Feature 1 — Criar Tarefa com TDD

**Conceito-chave:** TDD completo com Jest e supertest (Aula 06, Seção 5).

**Objetivo:** Reexecutar o ciclo TDD completo para a Feature 1 (Criar Tarefa) em um branch novo, documentando cada fase com evidências (comandos, saídas, código).

**Passos de Execução:**

1. Crie um branch `feature/tdd-task-create` no DevFlow
2. Escreva os testes de integração e unitários (Red)
3. Execute e confirme que falham — copie a saída do terminal
4. Implemente as validações (Green)
5. Execute e confirme que passam — copie a saída do terminal
6. Refatore extraindo validação para helpers (Refactor)
7. Execute novamente — confirme que continuam passando
8. Execute `npx jest --coverage` e registre a cobertura do `taskService.js`

**Entrega:** crie `entregas-aula-06/06-q5-feature1-tdd.md`:

~~~~
# Questão 5 — Feature 1: Criar Tarefa com TDD

## Fase Red

**Teste de integração criado:** `__tests__/integration/tasks.test.js`

```javascript
// Cole o conteúdo do arquivo de teste de integração aqui
```

**Teste unitário criado:** `__tests__/unit/taskService.test.js`

```javascript
// Cole o conteúdo do arquivo de teste unitário aqui
```

**Saída do terminal (RED — testes falhando):**

```
[npx jest __tests__/integration/tasks.test.js -- saída]
```

## Fase Green

**Arquivos modificados:** [lista de arquivos que o Agent Mode alterou]

**Prompt usado no Agent Mode:**

> [cole o prompt]

**Saída do terminal (GREEN — testes passando):**

```
[npx jest -- saída completa]
```

## Fase Refactor

**O que foi extraído para helpers.js:** [descrição]

**Saída do terminal (REFACTOR — testes continuam passando):**

```
[npx jest -- saída]
```

## Cobertura após Feature 1

**Comando:** npx jest --coverage

**Cobertura do taskService.js:**

| Métrica | Porcentagem |
|---|---|
| Statements | % |
| Branch | % |
| Functions | % |
| Lines | % |

## Conclusão
Em 2-3 frases: o que foi mais difícil no ciclo TDD para esta feature — escrever o teste que falha, implementar o mínimo ou refatorar?
~~~~

---

## Questão 6: Feature 2 — Listar Tarefas por Projeto

**Conceito-chave:** TDD com testes de integração (Aula 06, Seção 6).

**Objetivo:** Implementar a Feature 2 (Listar Tarefas por Projeto) com TDD no DevFlow, garantindo que a Feature 1 continua funcionando após a implementação.

**Passos de Execução:**

1. No branch atual (`feature/tdd-task-create` ou crie `feature/tdd-tasks-by-project`)
2. Escreva os testes para `GET /api/projects/:id/tasks` (integração + unitário)
3. Execute e confirme que falham
4. Implemente a rota, controller e service
5. Execute TODOS os testes (Features 1 e 2) — confirme que todos passam
6. Execute `npx jest --coverage` — verifique que a cobertura não caiu

**Entrega:** crie `entregas-aula-06/06-q6-feature2-tdd.md`:

~~~~
# Questão 6 — Feature 2: Listar Tarefas por Projeto com TDD

## Teste de Integração

**Arquivo:** `__tests__/integration/projects-tasks.test.js`

```javascript
// Cole o conteúdo do teste de integração
```

## Teste Unitário Adicionado

**Arquivo:** `__tests__/unit/taskService.test.js` (novos testes)

```javascript
// Cole APENAS os novos testes (describe de getTasksByProject)
```

## RED — Testes falhando

**Saída do terminal:**

```
[npx jest -- saída mostrando falha]
```

## GREEN — Implementação

**Arquivos criados/modificados:** [lista]

**Saída do terminal (todos os testes passando):**

```
[npx jest -- saída completa]
```

## Verificação de Regressão

**A Feature 1 continua passando?** [sim/não]

**Comando usado para verificar:** npx jest

**Número total de testes passando:** [N]

## Cobertura

**Comando:** npx jest --coverage

**Cobertura dos services:**

| Arquivo | % Stmts | % Branch | % Funcs | % Lines |
|---|---|---|---|---|
| taskService.js | | | | |
| projectService.js | | | | |
| helpers.js | | | | |

## Conclusão
Em 2-3 frases: o que o teste de integração forçou você a decidir sobre o design do endpoint (formato da URL, comportamento quando projeto não existe, etc.) antes de implementar?
~~~~

---

## Questão 7: Feature 3 + Cobertura >= 80%

**Conceito-chave:** TDD completo e cobertura com thresholds (Aula 06, Seção 7).

**Objetivo:** Implementar a Feature 3 (Atualizar Status da Tarefa) com TDD, executar cobertura global, interpretar o relatório e configurar thresholds de 80%.

**Passos de Execução:**

1. No branch `feature/tdd-task-status` (novo)
2. Escreva testes para `PATCH /api/tasks/:id/status`
3. Implemente com TDD completo
4. Execute `npx jest --coverage` e analise o relatório
5. Identifique arquivos com baixa cobertura e decida se vale a pena testá-los
6. Configure `coverageThreshold` no `jest.config.js` com 80% em todas as métricas
7. Execute novamente e confirme que o build passa

**Entrega:** crie `entregas-aula-06/06-q7-feature3-cobertura.md`:

~~~~
# Questão 7 — Feature 3 + Cobertura >= 80%

## Fase Red

**Testes escritos:** [descrição dos testes de integração e unitários]

## Fase Green

**Implementação:** [descrição do que foi implementado]

## Fase Refactor

**Helper generalizado:** [o que foi extraído ou adaptado em helpers.js]

## Relatório de Cobertura Global

**Comando:** npx jest --coverage

```
/cole a tabela completa do relatorio de cobertura aqui/
```

## Análise do Relatório

| Arquivo | % Stmts | Decisão (testar mais ou ignorar?) | Justificativa |
|---|---|---|---|
| [arquivo] | [%] | [testar/ignorar] | [por quê] |
| [arquivo] | [%] | [testar/ignorar] | [por quê] |
| [arquivo] | [%] | [testar/ignorar] | [por quê] |
| [arquivo] | [%] | [testar/ignorar] | [por quê] |

## Thresholds Configurados

**Arquivo:** jest.config.js

```javascript
// Cole a seção coverageThreshold do seu jest.config.js
```

## Verificação Final

**Comando:** npx jest --coverage

**Resultado:** [build passa / build falha]

**Número total de testes passando:** [N]

**Porcentagem final de cobertura global:** [%]

## Conclusão
Em 2-3 frases: o relatório de cobertura revelou algum código não testado que você considera importante? Se sim, qual e por quê?
~~~~

---

## Questão 8: Síntese — O Valor do TDD no DevFlow

**Conceito-chave:** TDD como ferramenta de design e qualidade (Aula 06, Seções 1-7).

**Objetivo:** Refletir sobre como o TDD mudou sua forma de implementar, quais bugs os testes pegaram, onde o Copilot mais ajudou e o que você faria diferente.

**Passos de Execução:**

1. Revise mentalmente (ou no Git) o histórico das 3 features que você implementou com TDD
2. Reflita sobre cada pergunta no template
3. Responda com exemplos concretos do DevFlow — não respostas genéricas

**Entrega:** crie `entregas-aula-06/06-q8-sintese-tdd.md`:

~~~~
# Questão 8 — Síntese: O Valor do TDD no DevFlow

## 1. Como o TDD mudou sua forma de implementar?

[Descreva como foi pensar no teste antes do código. O que mudou na sua abordagem em relação às aulas anteriores (quando você implementava primeiro e testava depois)?]

## 2. Quais bugs ou problemas os testes pegaram?

[Liste casos concretos onde o teste falhou e revelou um problema que você não teria percebido testando manualmente com curl.]

## 3. Onde o Copilot mais ajudou?

| Aspecto | Como o Copilot ajudou | Nota (1-5) |
|---|---|---|
| Gerar testes com /tests | [descrição] | [nota] |
| Setup com /setupTests | [descrição] | [nota] |
| Implementar o Green | [descrição] | [nota] |
| Refatorar com seguranca | [descrição] | [nota] |
| Interpretar cobertura | [descrição] | [nota] |

## 4. O que você faria diferente?

[Se fosse implementar uma nova feature com TDD amanhã, o que você faria de diferente? Mais testes unitários? Testes de integração mais enxutos? Melhor organização dos arquivos de teste?]

## 5. Comparação: DevFlow antes e depois dos testes

| Aspecto | Antes (Aula 05) | Depois (Aula 06) |
|---|---|---|
| Confiança para alterar código | [descrição] | [descrição] |
| Tempo para testar uma mudanca | [descrição] | [descrição] |
| Documentacao do comportamento | [descrição] | [descrição] |

## Conclusão
Em 3-5 frases: o TDD vale o esforço extra de escrever o teste primeiro? Por que?
~~~~

---

## Checklist Final: Pronto para a Aula 07?

Marque cada item só quando conseguir fazê-lo **sem consultar a aula**:

- [ ] Explico por que TDD é uma disciplina de design, não uma técnica de teste (Objetivo 1)
- [ ] Descrevo as 3 fases do ciclo Red → Green → Refactor com exemplos próprios (Objetivo 2)
- [ ] Avalio um teste contra os 5 princípios FIRST e identifico violações (Objetivo 3)
- [ ] Classifico um cenário de teste como unitário, integração ou E2E usando a pirâmide (Objetivo 4)
- [ ] Configuro Jest + supertest em um projeto Node.js com /setupTests (Objetivo 5)
- [ ] Escrevo testes unitários com describe/it/expect e matchers do Jest (Objetivo 6)
- [ ] Escrevo testes de integração com supertest para endpoints da API (Objetivo 7)
- [ ] Executo o ciclo TDD completo (Red → Green → Refactor) do início ao fim (Objetivo 8)
- [ ] Executo npx jest --coverage e interpreto o relatório (Objetivo 9)
- [ ] Configuro coverageThreshold no jest.config.js e valido cobertura >= 80% (Objetivo 10)

> *Acertou todos? Você está pronto para a Aula 07, onde vai construir um pipeline CI/CD com GitHub Actions que executa esses testes automaticamente a cada push. Travou em algum? Releia a seção indicada na questão correspondente antes de avançar.*

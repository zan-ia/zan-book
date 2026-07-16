---
titulo: "Programador Profissional com Agentes — Aula 08 — Questões de Aprendizagem"
modulo: "01"
aula: "08"
---

# Programador Profissional com Agentes Aula 08 — Questões de Aprendizagem

## Como Usar Este Arquivo

Este arquivo e o seu **checkpoint de aprendizagem** da Aula 08. A pergunta central e: *"eu realmente entendi a materia?"*

Cada questao abaixo verifica um conceito-chave da aula. Para cada uma, voce encontra:

- **Conceito-chave**: qual secao da aula revisitar se travar
- **Objetivo**: o que voce precisa demonstrar
- **Passos de Execucao**: o que fazer, em ordem
- **Entrega**: um template Markdown para preencher e salvar

**Como proceder:**

1. Crie uma pasta `entregas-aula-08/` na raiz do DevFlow
2. Resolva as 8 questoes EM ORDEM
3. Para cada questao, crie o arquivo de entrega indicado
4. Nao releia a aula — se travar, volte a secao indicada em "Conceito-chave"
5. So avance para a Aula 09 quando completar todas as 8 questoes por conta propria

**Dica:** As questoes 3-5 envolvem codigo real (React, Playwright). Crie os arquivos dentro do projeto DevFlow para testar se funcionam.

---

## Questão 1: Classificando Testes na Piramide

**Conceito-chave:** Piramide de testes (Aula 08, Secao 1).

**Objetivo:** Classificar corretamente 6 cenarios de teste como unitario, integracao ou E2E, justificando cada classificacao com base no que esta sendo verificado.

**Passos de Execucao:**

1. Leia cada cenario de teste abaixo
2. Classifique como: **Unitario**, **Integracao** ou **E2E**
3. Justifique sua classificacao em 1-2 frases

**Cenarios:**

```
Cenário A: Um teste que chama a funcao calcularTotal(itens) com 3 itens
e verifica se o retorno e a soma dos precos.

Cenário B: Um teste que faz uma requisicao POST para /api/projects
com um JSON valido e verifica se o banco retorna o projeto criado com ID.

Cenário C: Um teste que abre um navegador, navega para /criar,
preenche o formulario e clica em Salvar, e verifica se a pagina
de detalhes do projeto carregou.

Cenário D: Um teste que chama a funcao formatDate(date) com uma
string ISO e verifica se retorna "dd/mm/aaaa".

Cenário E: Um teste que faz GET para /api/projects e verifica
se o array retornado contem projetos com os campos esperados
(id, name, description, createdAt).

Cenário F: Um teste que abre um navegador, navega para a pagina
inicial e verifica se o titulo da pagina contem "DevFlow".
```

**Entrega:** crie `entregas-aula-08/01-classificacao-testes.md`:

~~~~
## Questão 1 — Classificação de Testes

## Tabela de Classificação

| Cenário | Classificação (Unitario/Integracao/E2E) | Justificativa |
|---|---|---|
| Cenário A |  |  |
| Cenário B |  |  |
| Cenário C |  |  |
| Cenário D |  |  |
| Cenário E |  |  |
| Cenário F |  |  |

## Conclusão

Em 2-3 frases: qual a principal diferenca entre os tres niveis de teste que voce usou para classificar cada cenario?
~~~~

---

## Questão 2: Escrevendo User Stories para o DevFlow

**Conceito-chave:** User stories e criterios de aceitacao (Aula 08, Secao 2).

**Objetivo:** Escrever 3 user stories completas no formato canonico com criterios de aceitacao verificaveis para funcionalidades do DevFlow.

**Passos de Execucao:**

1. Escolha 3 funcionalidades do DevFlow que ainda nao foram implementadas (ou que voce imagina que seriam uteis)
2. Para cada uma, escreva a user story no formato "Como [papel], quero [acao] para [beneficio]"
3. Para cada user story, escreva 2 criterios de aceitacao no formato "Dado... Quando... Entao..."

**Entrega:** crie `entregas-aula-08/02-user-stories.md`:

~~~~
## Questão 2 — User Stories do DevFlow

## User Story 1

**Formato:** Como [papel], quero [acao] para [beneficio]

Story completa:

**Criterios de Aceitacao:**

- Cenário 1: Dado [contexto], Quando [acao], Entao [resultado esperado]
- Cenário 2: Dado [contexto], Quando [acao], Entao [resultado esperado]

## User Story 2

**Formato:** Como [papel], quero [acao] para [beneficio]

Story completa:

**Criterios de Aceitacao:**

- Cenário 1: Dado [contexto], Quando [acao], Entao [resultado esperado]
- Cenário 2: Dado [contexto], Quando [acao], Entao [resultado esperado]

## User Story 3

**Formato:** Como [papel], quero [acao] para [beneficio]

Story completa:

**Criterios de Aceitacao:**

- Cenário 1: Dado [contexto], Quando [acao], Entao [resultado esperado]
- Cenário 2: Dado [contexto], Quando [acao], Entao [resultado esperado]

## Conclusão

Por que o papel e o beneficio sao partes essenciais de uma user story? Responda em 2-3 frases.
~~~~

---

## Questão 3: Criando o Componente ProjectList do Zero

**Conceito-chave:** Frontend React com fetch de API (Aula 08, Secao 3).

**Objetivo:** Criar o componente `ProjectList` do zero com tratamento completo de estados (loading, empty, error e sucesso), consumindo `GET /api/projects`.

**Passos de Execucao:**

1. Crie o arquivo `ProjectList.jsx` dentro do diretorio `src/` do frontend React do DevFlow
2. Implemente o componente com os seguintes requisitos:
   - Estado de loading: exibir "Carregando projetos..." enquanto a requisicao nao retorna
   - Estado de error: exibir a mensagem de erro se a requisicao falhar
   - Estado de vazio: exibir "Nenhum projeto cadastrado" se o array retornar vazio
   - Estado de sucesso: exibir cada projeto em um card com nome, descricao e link para detalhes
3. O componente deve usar `useState` e `useEffect`
4. Nao use bibliotecas externas de estado — apenas React puro

**Entrega:** o arquivo `ProjectList.jsx` criado no projeto + documentacao em `entregas-aula-08/03-project-list.md`:

~~~~
## Questão 3 — Componente ProjectList

## Estrutura do Componente

Explique como voce organizou os estados no componente:

- **Loading state:** [como e quando e exibido]
- **Empty state:** [como e quando e exibido]
- **Error state:** [como e quando e exibido]
- **Success state:** [como e quando e exibido]

## Trecho de Codigo

Copie o trecho mais relevante do seu componente (a logica de fetch e tratamento de estados):

```jsx
// Seu codigo aqui
```

## Teste Manual

O componente funcionou quando voce rodou o frontend? [Sim/Nao]

Se nao, o que deu errado e como corrigiu?
~~~~

---

## Questão 4: Cenário E2E — Criação de Projeto

**Conceito-chave:** Playwright — escrevendo cenarios de teste (Aula 08, Secao 4).

**Objetivo:** Escrever um cenario E2E completo que cria um projeto via formulario, verifica o redirecionamento e confirma que o projeto aparece na lista.

**Passos de Execucao:**

1. Crie o arquivo `tests/e2e/criar-projeto.spec.js` no DevFlow
2. Escreva um teste que:
   - Navegue para `/criar`
   - Preencha o campo de nome com "Projeto Teste Questao 4"
   - Preencha o campo de descricao com "Descricao do projeto de teste"
   - Clique no botao Salvar
   - Verifique que a URL mudou para `/projetos/:id`
   - Verifique que o titulo da pagina contem "Projeto Teste Questao 4"
3. Execute `npx playwright test` e confirme que o teste passa

**Entrega:** crie `entregas-aula-08/04-cenario-criacao.md`:

~~~~
## Questão 4 — Cenário E2E de Criação de Projeto

## Codigo do Teste

```javascript
// Seu codigo completo aqui
```

## Resultado da Execucao

O teste passou na primeira execucao? [Sim/Nao]

Se nao, qual erro apareceu e como corrigiu?

## Screenshot (opcional)

Se o Playwright gerou screenshot, descreva o que ela mostra.
~~~~

---

## Questão 5: Cenário E2E — Navegação para Detalhes

**Conceito-chave:** Playwright — navegacao entre paginas (Aula 08, Secao 4).

**Objetivo:** Escrever um cenario E2E que navega da lista de projetos para a pagina de detalhes de um projeto especifico e verifica que as tarefas do projeto sao exibidas.

**Passos de Execucao:**

1. Crie o arquivo `tests/e2e/navegar-detalhes.spec.js` no DevFlow
2. Escreva um teste que:
   - Navegue para `/criar` e crie um novo projeto (reutilize a logica da Questao 4)
   - Navegue para `/` (lista de projetos)
   - Clique no link do projeto que voce acabou de criar
   - Verifique que a pagina de detalhes carregou (URL contem `/projetos/`)
   - Verifique que a secao de tarefas esta visivel
3. Execute `npx playwright test` e confirme que ambos os testes (Q4 + Q5) passam

**Entrega:** crie `entregas-aula-08/05-cenario-navegacao.md`:

~~~~
## Questão 5 — Cenário E2E de Navegação

## Codigo do Teste

```javascript
// Seu codigo completo aqui
```

## Estrategia de Navegação

Como voce garantiu que o teste clica no projeto certo e nao em outro? Explique sua estrategia de seletores.

## Resultado

O teste passou? [Sim/Nao]

Quantos cenarios E2E estao passando agora no total?
~~~~

---

## Questão 6: Estruturando Issues no GitHub

**Conceito-chave:** GitHub Issues, labels e milestones (Aula 08, Secao 5).

**Objetivo:** Estruturar 4 issues no GitHub no formato de user story, atribuir labels de tipo e prioridade, e agrupa-las em um milestone.

**Passos de Execucao:**

1. No repositorio do DevFlow, va ate a aba "Issues"
2. Crie 4 novas issues no formato de user story para o Milestone 2 ("Gestao de Tarefas e Dashboard")
3. As issues devem cobrir:
   - Issue 1: Funcionalidade de criar tarefa (feature, frontend, priority:high)
   - Issue 2: Funcionalidade de atualizar status da tarefa (feature, frontend, priority:high)
   - Issue 3: Corrigir bug ao carregar tarefas sem projeto (bug, backend, priority:high)
   - Issue 4: Melhorar layout da lista de tarefas (enhancement, frontend, priority:low)
4. Para cada issue, adicione a descricao no formato user story + criterios de aceitacao
5. Atribua as labels corretas (tipo + prioridade)
6. Atribua todas ao Milestone 2

**Entrega:** crie `entregas-aula-08/06-issues-github.md`:

~~~~
## Questão 6 — Issues no GitHub

## Tabela de Issues Criadas

| Issue | Titulo | Labels | Milestone |
|---|---|---|---|
| 1 |  |  | Gestao de Tarefas |
| 2 |  |  | Gestao de Tarefas |
| 3 |  |  | Gestao de Tarefas |
| 4 |  |  | Gestao de Tarefas |

## Exemplo de Issue Completa

Copie a descricao completa de UMA das issues que voce criou (incluindo criterios de aceitacao):

```
[Titulo da Issue]

[Descricao completa]

[Criterios de aceitacao]
```

## Reflexão

Por que e importante separar labels de tipo (feature, bug) de labels de prioridade (high, low)? Responda em 2-3 frases.
~~~~

---

## Questão 7: Executando Sprint Planning com /plan

**Conceito-chave:** Sprint planning com /plan (Aula 08, Secao 6).

**Objetivo:** Executar o /plan para um milestone do DevFlow, documentar a saida, comparar com sua propria intuicao e justificar 2 ajustes que faria no plano gerado.

**Passos de Execucao:**

1. No Chat do Copilot, execute: `/plan para o milestone "MVP — CRUD de Projetos com Frontend" do DevFlow`
2. Copie a saida completa do /plan
3. Análise a ordem sugerida e as estimativas
4. Identifique 2 pontos onde voce discorda do plano gerado
5. Justifique seus ajustes com base em conhecimento de dominio

**Entrega:** crie `entregas-aula-08/07-sprint-planning.md`:

~~~~
## Questão 7 — Sprint Planning com /plan

## Saida do /plan

Cole aqui a saida completa gerada pelo comando:

```
[Saida do /plan]
```

## Análise Critica

**Ponto 1 de discordancia:**

O /plan sugeriu:
[o que o plano disse]

Eu ajustaria para:
[sua sugestao]

Justificativa:
[por que seu ajuste faz mais sentido]

**Ponto 2 de discordancia:**

O /plan sugeriu:
[o que o plano disse]

Eu ajustaria para:
[sua sugestao]

Justificativa:
[por que seu ajuste faz mais sentido]

## Conclusão

Em 2-3 frases: qual o valor e qual o limite do /plan no processo de sprint planning?
~~~~

---

## Questão 8: Adicionando E2E ao Pipeline CI/CD (Projeto Progressivo)

**Conceito-chave:** Testes E2E no pipeline CI/CD (Aula 08, Secao 7).

**Objetivo:** Adicionar um job `e2e-tests` ao workflow CI/CD existente do DevFlow (criado na Aula 07). O job deve instalar Playwright, iniciar servidor, executar testes e publicar screenshots como artifacts em caso de falha.

**Passos de Execucao:**

1. Abra o arquivo `.github/workflows/ci.yml` do DevFlow
2. Adicione um novo job chamado `e2e-tests` que:
   - Depende do job `build` (`needs: [build]`)
   - Executa no `ubuntu-latest`
   - Faz checkout do codigo
   - Configura Node.js 20 com cache
   - Instala dependencias com `npm ci`
   - Instala Playwright com `npx playwright install --with-deps`
   - Inicia o backend em background e aguarda a porta 3000
   - Compila o frontend com `npm run build` e inicia preview na porta 3001
   - Executa `npx playwright test`
   - Em caso de falha, faz upload dos screenshots como artifact
3. Faca commit e push do arquivo modificado
4. Verifique na aba "Actions" que o pipeline executa com 5 jobs e todos passam

**Entrega:** crie `entregas-aula-08/08-pipeline-e2e.md`:

~~~~
## Questão 8 — Pipeline CI/CD com Testes E2E

## Job e2e-tests adicionado

Copie o YAML completo do job `e2e-tests` que voce adicionou ao `ci.yml`:

```yaml
## Seu job aqui
```

## Verificação

- [ ] O pipeline mostra 5 jobs na aba "Actions"
- [ ] O job `e2e-tests` executa APOS o job `build`
- [ ] Todos os 5 jobs ficaram verdes
- [ ] Os screenshots de falha estao configurados como artifacts

## Captura de Tela (opcional)

Se possivel, cole o link ou descreva o que a aba "Actions" mostra apos a execucao bem-sucedida.

## Reflexão

Por que o job E2E foi configurado como dependente do build e nao como um job paralelo? Explique em 2-3 frases.
~~~~

---

## Checklist Final: Pronto para a Aula 09?

Marque cada item so quando conseguir faze-lo **sem consultar a aula**:

- [ ] Sei classificar um teste como unitario, de integracao ou E2E pelo que ele verifica
- [ ] Consigo escrever user stories no formato canonico com criterios de aceitacao
- [ ] Consigo criar componentes React que consomem uma API REST com fetch, tratando estados de loading, empty e error
- [ ] Sei escrever cenarios Playwright que navegam, clicam, preenchem formularios e fazem assercoes
- [ ] Sei estruturar um backlog no GitHub Issues com milestones e labels
- [ ] Sei executar /plan e interpretar criticamente o plano gerado
- [ ] Sei explicar o papel dos testes E2E na piramide de qualidade como ultimo guardiao
- [ ] Sei explicar como o sprint planning transforma um backlog priorizado em um plano de execucao com escopo definido
- [ ] Sei adicionar testes E2E ao pipeline CI/CD como guardiao final de qualidade

> *Acertou todos? Parabens! Voce esta pronto para a **Aula 09: Skills de Documentacao Viva**, onde voce vai criar skills que permitem ao Copilot consultar documentacao oficial de bibliotecas sem sair do editor. Travou em algum item? Releia a secao indicada na questao correspondente antes de avancar.*

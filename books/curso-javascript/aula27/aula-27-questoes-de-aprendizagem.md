---
titulo: "JavaScript — Do Zero ao Profissional — Aula 27 — Questões de Aprendizagem"
modulo: "01"
aula: "27"
---

# JavaScript — Do Zero ao Profissional Aula 27 — Questões de Aprendizagem

## Como Usar Este Arquivo

Este arquivo contém as **questões de checkpoint** da Aula 27. Cada questão verifica um conceito-chave da aula. O objetivo é responder à pergunta "eu realmente entendi a matéria?".

**Como proceder:**

1. Complete as questões na ordem — elas seguem a progressão da aula (fundamentos → aplicação → projeto)
2. Cada questão tem um **Objetivo** (o que você deve demonstrar), **Passos de Execução** (o que fazer) e uma **Entrega** (template a preencher)
3. Crie uma pasta `entregas-aula-27/` no seu diretório de trabalho e salve cada entrega como um arquivo Markdown separado
4. Só avance para a Aula 28 quando conseguir completar todas as questões **sem consultar a aula**

> *Se travar em alguma questão, a indicação **Conceito-chave** mostra exatamente qual seção da aula revisar.*

***

## Questão 1: Promessa como Contrato — Analogias do Cotidiano

**Conceito-chave:** Promessa como valor futuro — analogia universal (Aula 27, PARTE 1, Seções 1-3).

**Objetivo:** Demonstrar que você compreende o conceito de promessa (objeto que representa um valor futuro) usando analogias do mundo real, sem mencionar JavaScript.

**Passos de Execução:**

1. Crie uma analogia ORIGINAL (diferente das usadas na aula: vale-presente, loteria, correios, pizza, jantar) que explique o que é uma promessa
2. Na sua analogia, identifique: (a) o que é a "promessa" (o objeto intermediário), (b) qual é o "valor futuro", (c) o que significaria estar pendente, cumprida e rejeitada
3. Explique por que a transição é irreversível na sua analogia

**Entrega:** crie `entregas-aula-27/01-analogia-promessa.md`:

~~~~
# Questão 1 — Minha Analogia de Promessa

## A Analogia

[Descreva sua analogia em 3-5 frases. Pode ser algo como: "comprar ingresso para um show", "inscrever-se em um concurso", "encomendar um produto artesanal" — use sua criatividade.]

## Elementos

| Elemento | Na minha analogia |
|---|---|
| **A promessa (objeto intermediário)** | [o que representa a promessa] |
| **O valor futuro** | [o que se espera receber] |
| **Estado pendente** | [quando está pendente] |
| **Estado cumprida** | [quando é cumprida] |
| **Estado rejeitada** | [quando é rejeitada] |

## Irreversibilidade

Explique por que, na sua analogia, uma promessa cumprida não pode voltar a ser pendente:

[2-3 frases explicando a irreversibilidade]
~~~~

***

## Questão 2: Estados de uma Promise — Transições Irreversíveis

**Conceito-chave:** Os três estados de uma Promise (pending, fulfilled, rejected) e suas transições (Aula 27, PARTE 1, Seção 3).

**Objetivo:** Classificar corretamente cenários do mundo real nos três estados de uma promessa e identificar transições válidas e inválidas.

**Passos de Execução:**

1. Para cada cenário abaixo, identifique o estado (pending, fulfilled ou rejected)
2. Justifique sua resposta em 1-2 frases
3. Responda: uma promessa rejeitada pode se tornar cumprida depois? Explique.

**Cenários:**
- A: Você pediu um presente em uma loja online. O pagamento foi aprovado. O status é "Separando o pedido".
- B: O pedido chegou. Você abriu a caixa e o presente está dentro.
- C: A loja informou que o produto saiu de linha e cancelou o pedido. O reembolso foi feito.
- D: Você pediu um reembolso. A loja disse que vai analisar em até 5 dias úteis.

**Entrega:** crie `entregas-aula-27/02-estados-promessa.md`:

~~~~
# Questão 2 — Estados de uma Promise

## Classificação dos Cenários

| Cenário | Estado | Justificativa |
|---|---|---|
| A - Pedido separando | [pending/fulfilled/rejected] | [justificativa] |
| B - Pedido entregue | [pending/fulfilled/rejected] | [justificativa] |
| C - Pedido cancelado | [pending/fulfilled/rejected] | [justificativa] |
| D - Aguardando analise | [pending/fulfilled/rejected] | [justificativa] |

## Irreversibilidade

Uma promessa que foi rejeitada pode se tornar cumprida depois?

Resposta: [Sim/Nao] — [explique por que em 2-3 frases]
~~~~

***

## Questão 3: Criar e Consumir Promises

**Conceito-chave:** Construtor `new Promise(executor)`, `.then()`, `.catch()`, `.finally()` (Aula 27, Seção 6).

**Objetivo:** Implementar uma função que cria uma Promise e consumi-la com os métodos .then(), .catch() e .finally().

**Passos de Execução:**

1. Crie uma função `esperar(ms)` que retorna uma Promise que resolve após `ms` milissegundos usando `setTimeout`
2. Crie uma segunda função `buscarDados()` que:
   - Usa `Math.random()` para simular sucesso/erro (50% de chance)
   - Se o número for > 0.5, resolve com `{ id: 1, nome: 'Dados carregados' }`
   - Se for <= 0.5, rejeita com `new Error('Falha ao carregar dados')`
3. Consuma `buscarDados()` com `.then()`, `.catch()` e `.finally()`:
   - `.then()` exibe os dados no console
   - `.catch()` exibe "Erro: [mensagem]" no console
   - `.finally()` exibe "Operacao finalizada" no console
4. Teste a função 5 vezes para ver os dois cenários

**Entrega:** crie `entregas-aula-27/03-criar-promise.md`:

~~~~
# Questão 3 — Criando e Consumindo Promises

## Funcao esperar(ms)

```javascript
// Cole sua implementacao aqui
```

## Funcao buscarDados()

```javascript
// Cole sua implementacao aqui
```

## Consumo

```javascript
// Cole o codigo que consume buscarDados() com .then().catch().finally()
```

## Resultado dos Testes

Execute 5 vezes e anote os resultados:

| Execucao | Resultado (sucesso/erro) |
|---|---|
| 1 | [sucesso/erro] |
| 2 | [sucesso/erro] |
| 3 | [sucesso/erro] |
| 4 | [sucesso/erro] |
| 5 | [sucesso/erro] |
~~~~

***

## Questão 4: Composição — Escolhendo a Estratégia Correta

**Conceito-chave:** `Promise.all()`, `Promise.race()`, `Promise.allSettled()` — quando usar cada um (Aula 27, Seção 7).

**Objetivo:** Decidir qual método de composição usar em cada cenário e implementar um deles.

**Passos de Execução:**

1. Para cada cenário abaixo, escolha entre `Promise.all`, `Promise.race` ou `Promise.allSettled` e justifique:
   - Cenário A: Você precisa carregar dados de perfil, configurações e notificações para montar o dashboard do usuário. Se qualquer um falhar, o dashboard não pode ser exibido.
   - Cenário B: Você faz a mesma consulta de preço em 3 APIs diferentes de e-commerce. Quer o resultado da primeira que responder.
   - Cenário C: Você envia emails de confirmação para 50 usuários. Quer saber quais foram enviados com sucesso e quais falharam.

2. Implemente o **Cenário C** usando `Promise.allSettled`:
   - Crie uma função `enviarEmail(destinatario)` que retorna uma Promise que resolve com `{ enviado: true, para: destinatario }` em 70% dos casos, e rejeita com erro em 30% dos casos
   - Crie uma lista de 5 destinatarios
   - Use `Promise.allSettled` para enviar todos
   - Exiba quantos foram enviados com sucesso e quantos falharam

**Entrega:** crie `entregas-aula-27/04-composicao.md`:

~~~~
# Questao 4 — Composicao de Promises

## Decisao dos Cenarios

| Cenario | Metodo escolhido | Justificativa |
|---|---|---|
| A - Dashboard | [all/race/allSettled] | [justificativa] |
| B - Preço mais rapido | [all/race/allSettled] | [justificativa] |
| C - Emails em lote | [all/race/allSettled] | [justificativa] |

## Implementacao do Cenario C

```javascript
// Funcao enviarEmail(destinatario)
function enviarEmail(destinatario) {
  // Sua implementacao aqui
}

// Lista de destinatarios
const destinatarios = ['user1@email.com', 'user2@email.com', 'user3@email.com', 'user4@email.com', 'user5@email.com']

// Promise.allSettled
// Sua implementacao aqui
```

## Resultado

Quantos emails foram enviados com sucesso? [numero]
Quantos falharam? [numero]
~~~~

***

## Questão 5: Fetch GET — Requisição HTTP

**Conceito-chave:** `fetch(url)`, `response.ok`, `response.json()`, tratamento de erros de rede (Aula 27, Seção 8).

**Objetivo:** Fazer uma requisição HTTP GET usando fetch, verificar o status da resposta e extrair dados JSON.

**Passos de Execução:**

1. Crie uma função `buscarFrase()` que faz fetch para `https://api.quotable.io/random`
2. Verifique `response.ok` — se falso, lance um erro com a mensagem `"HTTP error: status ${res.status}"`
3. Extraia o JSON com `response.json()`
4. Retorne um objeto formatado: `{ frase: dados.content, autor: dados.author }`
5. Trate erros de rede (sem internet) e erros HTTP (404, 500) com `.catch()`
6. Teste em três cenários: URL válida, URL inválida, e navegador offline (desative o Wi-Fi)

**Entrega:** crie `entregas-aula-27/05-fetch-get.md`:

~~~~
# Questao 5 — Fetch GET

## Codigo da funcao buscarFrase()

```javascript
// Sua implementacao aqui
```

## Testes Realizados

| Cenario | URL testada | Resultado (sucesso/erro) | Mensagem exibida |
|---|---|---|---|
| URL valida | https://api.quotable.io/random | [sucesso/erro] | [frase ou mensagem] |
| URL invalida | https://api.quotable.io/invalida | [sucesso/erro] | [mensagem exibida] |
| Offline | https://api.quotable.io/random | [sucesso/erro] | [mensagem exibida] |

## Reflexao

Por que o fetch com URL invalida (status 404) cai no .then() e nao no .catch()?

[Responda em 2-3 frases]
~~~~

***

## Questão 6: Salvando Dados com Promises — Wrapper IndexedDB

**Conceito-chave:** Enviar dados com `fetch POST` e criar wrappers Promise para operações assíncronas (Aula 27, Seção 9).

**Objetivo:** Implementar uma função que salva dados no IndexedDB usando o padrão de wrapper Promise, simulando um POST.

**Passos de Execução:**

1. Abra o banco IndexedDB `TarefasDB` com versao incrementada para ativar `onupgradeneeded`
2. No `onupgradeneeded`, crie uma object store `frases` com `keyPath: 'id'` e `autoIncrement: true`
3. Implemente a função `adicionarFrasesNoDB(frases)` que recebe um ARRAY de frases e salva todas usando uma transação:
   - Use um loop para adicionar cada frase
   - Retorne uma Promise que resolve com o array de IDs gerados
   - Se qualquer inserção falhar, rejeite a Promise
4. Teste: chame a função com 3 frases e exiba os IDs retornados

**Entrega:** crie `entregas-aula-27/06-salvar-dados.md`:

~~~~
# Questao 6 — Salvando Dados com Promise Wrapper

## Codigo da funcao adicionarFrasesNoDB()

```javascript
// Sua implementacao aqui
```

## Codigo de teste

```javascript
// Como voce chamou a funcao e testou
```

## Resultado

IDs gerados: [lista dos IDs]

Apos executar, verifique no DevTools > Application > IndexedDB > TarefasDB > frases. As 3 frases estao la?

[Sim/Nao]
~~~~

***

## Questão 7: Cancelando Requisições com AbortController

**Conceito-chave:** `AbortController`, `signal`, `AbortError`, padrão de cancelamento (Aula 27, Seção 10).

**Objetivo:** Implementar a lógica de cancelamento de requisições fetch usando AbortController, distinguindo AbortError de erros reais.

**Passos de Execução:**

1. Crie uma função `buscarComCancelamento(url)` que:
   - Mantém uma variável `abortController` no escopo externo (ou usa uma propriedade de objeto)
   - Se houver um controller anterior, chama `.abort()` nele
   - Cria um novo `AbortController`
   - Faz `fetch(url, { signal })` com o signal do novo controller
   - Retorna os dados JSON se a requisição for bem-sucedida
2. No tratamento de erro, distinga:
   - `AbortError` → retorna `null` (cancelamento intencional, ignorar)
   - Outros erros → exibe "Erro na requisicao: [mensagem]"
3. Teste: chame a função 3 vezes rapidamente com `https://api.quotable.io/random` e verifique no Network tab do DevTools que apenas a última requisição completa

**Entrega:** crie `entregas-aula-27/07-abort-controller.md`:

~~~~
# Questao 7 — Cancelamento com AbortController

## Codigo da funcao buscarComCancelamento()

```javascript
let abortController = null

async function buscarComCancelamento(url) {
  // Sua implementacao aqui
}
```

## Teste

```javascript
// Como voce testou o cancelamento
```

## Resultado

Quantas requisicoes aparecem no Network tab? [numero]
Quantas foram canceladas? [numero]

Explique o que acontece quando o usuario clica 5 vezes rapido no mesmo botao de busca:

[2-3 frases explicando o padrao de cancelamento]
~~~~

***

## Questão 8: Convertendo .then() para async/await

**Conceito-chave:** `async function`, `await`, conversão de `.then().catch()` para `async/await` + `try/catch` (Aula 27, Seção 11).

**Objetivo:** Converter código existente baseado em .then()/.catch() para a sintaxe async/await com try/catch, e explicar a diferença de legibilidade.

**Passos de Execução:**

1. Pegue o código abaixo (escrito com .then()/.catch()) e converta para async/await com try/catch:

```javascript
function buscarUsuario(id) {
  return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res => {
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      return res.json()
    })
    .then(usuario => {
      console.log('Nome:', usuario.name)
      console.log('Email:', usuario.email)
      return usuario
    })
    .catch(erro => {
      console.error('Erro ao buscar usuario:', erro.message)
    })
}
```

2. A versão convertida deve ter o MESMO comportamento (mesmas saídas no console)
3. Responda: por que `async/await` é considerado mais legível que `.then().catch()` para fluxos com múltiplas operações assíncronas?

**Entrega:** crie `entregas-aula-27/08-async-await.md`:

~~~~
# Questao 8 — Convertendo para Async/Await

## Codigo convertido

```javascript
async function buscarUsuario(id) {
  // Sua versao convertida aqui
}
```

## Comparacao

Execute as duas versoes (a original com .then() e a sua convertida com async/await). Elas produzem o mesmo resultado?

[Sim/Nao]

Por que async/await e considerado mais legivel que .then().catch() para fluxos com multiplas operacoes?

[Responda em 3-5 frases. Considere: linearidade, aninhamento, tratamento de erros, fluxo de leitura.]
~~~~

***

## Questão 9: Granularidade do try/catch

**Conceito-chave:** `try/catch/finally` com async/await, escolha de granularidade (Aula 27, Seção 12).

**Objetivo:** Decidir onde colocar try/catch em um fluxo com múltiplas operações assíncronas e implementar a abordagem escolhida.

**Passos de Execução:**

1. Analise o fluxo abaixo com 3 operações assíncronas:
   - `buscarConfiguracoes()` — carrega configs do usuário
   - `processarConfiguracoes(configs)` — processa e valida as configs
   - `salvarConfiguracoes(configsProcessadas)` — persiste no IndexedDB

2. Decida qual abordagem de try/catch usar:
   - Abordagem A: um try/catch grande para todo o fluxo
   - Abordagem B: um try/catch individual para cada operação
   - Abordagem C: try/catch por grupo lógico + finally

3. Justifique sua escolha

4. Implemente a função `executarPipeline()` com a abordagem escolhida

**Entrega:** crie `entregas-aula-27/09-try-catch.md`:

~~~~
# Questao 9 — Granularidade do Try/Catch

## Decisao

Abordagem escolhida: [A/B/C]

Justificativa: [explique por que escolheu essa abordagem para este fluxo especifico]

## Implementacao

```javascript
// Funcoes mock (nao precisam implementar a logica real)
function buscarConfiguracoes() {
  return Promise.resolve({ tema: 'escuro', idioma: 'pt-BR' })
}

function processarConfiguracoes(configs) {
  return Promise.resolve({ ...configs, processado: true })
}

function salvarConfiguracoes(configs) {
  return Promise.resolve(true)
}

// Sua funcao executarPipeline()
async function executarPipeline() {
  // Implementacao com a abordagem escolhida
}
```

## Teste

O que acontece se `processarConfiguracoes()` rejeitar? Sua implementacao captura esse erro corretamente?

[Explique o comportamento esperado]
~~~~

***

## Questão 10: Projeto Integrado — Componente de Frases Motivacionais

**Conceito-chave:** Integração completa: fetch GET + AbortController + IndexedDB + async/await + try/catch + Custom Element (Aula 27, Mão na Massa Final).

**Objetivo:** Construir o componente `<e-frases>` completo que busca frases de API pública com fetch GET, cancela requisições duplicadas com AbortController, salva favoritas no IndexedDB e trata todos os estados (carregando, sucesso, erro, cancelamento).

**Passos de Execução:**

1. Crie o componente `<e-frases>` como um Custom Element com Shadow DOM contendo:
   - Botão "Buscar Frase"
   - Container para exibir a frase (com estado inicial, carregando, sucesso e erro)
   - Botão "❤️ Salvar Favorita" (desabilitado até uma frase ser carregada)
   - Seção de "Favoritas" listando frases salvas

2. Implemente a busca com:
   - `AbortController` para cancelar requisições anteriores
   - `fetch` GET para `https://api.quotable.io/random`
   - Verificação de `response.ok`
   - Extração com `response.json()`
   - Exibição da frase e autor no container

3. Implemente o salvamento com:
   - Object store `frases` no IndexedDB
   - Wrapper Promise para a operação de salvamento
   - Botão "❤️ Salvar" que persiste a frase atual

4. Trate todos os estados:
   - Pendente: mostrar "Buscando frase..."
   - Sucesso: mostrar frase + autor, habilitar botão salvar
   - Erro de rede: "Sem conexao com a internet"
   - Erro HTTP: "API indisponivel (status: N)"
   - AbortError: ignorar silenciosamente
   - finally: esconder indicador de carregamento

5. Adicione o componente ao `index.html` e teste

**Entrega:** crie `entregas-aula-27/10-componente-frases.md`:

~~~~
# Questao 10 — Componente de Frases Motivacionais

## Codigo do Componente

```javascript
class EFrases extends HTMLElement {
  constructor() {
    super()
    // Sua implementacao aqui
  }

  connectedCallback() {
    // Sua implementacao aqui
  }

  async buscarFrase() {
    // Sua implementacao aqui
  }

  async salvarFavorita() {
    // Sua implementacao aqui
  }

  async carregarFavoritas() {
    // Sua implementacao aqui
  }
}

customElements.define('e-frases', EFrases)
```

## Checklist de Verificacao

- [ ] O componente renderiza no `index.html`
- [ ] "Buscar Frase" exibe uma frase da API
- [ ] Clicar 5 vezes rapido mostra apenas a ultima frase
- [ ] Offline exibe mensagem de erro amigavel
- [ ] "❤️ Salvar" persiste no IndexedDB
- [ ] Recarregar a pagina mantem as favoritas
- [ ] Todo codigo usa async/await com try/catch

## Captura de Tela (opcional)

Se possivel, cole aqui uma descricao do que aparece na tela apos uma busca bem-sucedida:

[Descricao textual do resultado]
~~~~

***

## Checklist Final: Pronto para a Aula 28?

Marque cada item só quando conseguir fazê-lo **sem consultar a aula**:

- [ ] Sei explicar o que é uma promessa usando analogias do cotidiano, sem mencionar JavaScript
- [ ] Identifico os 3 estados (pending, fulfilled, rejected) e sei que a transição é irreversível
- [ ] Crio Promises com `new Promise()` e as consumo com `.then()`, `.catch()` e `.finally()`
- [ ] Sei quando usar `Promise.all()`, `Promise.race()` e `Promise.allSettled()` e implemento cada um
- [ ] Faço fetch GET, verifico `response.ok`, extraio JSON com `.json()` e trato erros de rede
- [ ] Crio wrappers Promise para operações assíncronas (como transações IndexedDB)
- [ ] Cancelo requisições fetch com `AbortController` e distingo `AbortError` de erros reais
- [ ] Converto código `.then()/.catch()` para `async/await` e explico por que `await` só funciona em funções `async`
- [ ] Escolho a granularidade adequada de `try/catch` para múltiplas operações assíncronas
- [ ] Construí o componente `<e-frases>` completo que busca, exibe e salva frases motivacionais

> *Acertou todos? Você está pronto para a **Aula 28: Web Workers — Processamento em Paralelo**, onde você aprenderá a executar código JavaScript em threads separadas para processamento pesado sem congelar a interface. Travou em algum? Releia a seção indicada na questão correspondente antes de avançar.*

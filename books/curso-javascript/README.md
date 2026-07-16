# Plano do Módulo: JavaScript — Do Zero ao Profissional (31 aulas)

Este arquivo é a **fonte única da verdade** sobre a sequência, numeração e escopo das 31 aulas deste módulo. Ensina JavaScript para iniciantes absolutos em programação — de algoritmos e variáveis até projeto final profissional com módulos ES, debugging e deploy.

## Público-alvo e ponto de partida

**Público**: iniciantes absolutos em programação. Pessoas que nunca escreveram uma linha de código, não sabem o que é uma variável, um loop ou lógica booleana. Têm conhecimento básico de uso de computador (navegar na internet, usar editor de texto, terminal básico) e familiaridade com HTML/CSS em nível de estruturação de páginas simples.

**O que o aluno já sabe**: usar um computador, navegar na web, criar arquivos HTML simples com títulos, parágrafos e imagens, estilizar com CSS básico (cores, fontes, margens), abrir o terminal e navegar entre pastas.

**O que o aluno NÃO sabe**: programação. Zero conhecimento de lógica de programação, algoritmos, estruturas de dados, controle de fluxo, funções ou qualquer conceito de ciência da computação. Não sabe o que significa "declarar uma variável", "iterar um array" ou "chamar uma função".

**Compromisso do módulo**: partir do absoluto zero — "o que é um programa?" — e construir conhecimento camada por camada, sempre ancorando cada conceito novo em analogias do mundo real e prática imediata. Cada aula introduz exatamente UMA ideia nova, pratica até a exaustão com feedback imediato, e só então avança. O aluno termina o módulo com um portfólio de projetos reais e autonomia para aprender qualquer outra linguagem.

## Filosofia: cada aula é concreta e treinável

Cada aula entrega:

1. **Conteúdo principal** (`aula-NN-<slug>.md`): explicação conceitual com analogias do mundo real + demonstração guiada + prática durante a aula (Mão na Massa inline, Quick Check, Quiz rápido).
2. **Questões de Aprendizagem** (`aula-NN-questoes-de-aprendizagem.md`): um arquivo **separado** com tarefas práticas que funcionam como checkpoint de aprendizagem — *"eu realmente entendi a matéria?"*. Cada questão tem **Conceito-chave → Objetivo → Passos de Execução → Entrega** (com template para o aluno preencher).

O arquivo de questões é o gate: *"isto é importante — você entendeu? Então tente fazer."* O aluno só avança quando consegue completar as questões por conta própria, sem reler a aula a cada passo.

## Projeto Progressivo: Gerenciador de Tarefas (To-Do App)

O aluno constrói incrementalmente uma aplicação web completa — um Gerenciador de Tarefas — que evolui aula a aula, da linha de comando ao navegador com persistência local. Cada peça é funcional por si só e se ancora no que o aluno acabou de aprender.

| Fase | Aulas | O que o aluno constrói |
|---|---|---|
| Fase 1 (01-06) | Pensamento Computacional | Do console ao arquivo: primeiro código no console (A01), variáveis e arquivo HTML real com `<script>` (A02), tipos de dados (A03), operadores (A04), entrada/saída (A05), strings em profundidade (A06) |
| Fase 2 (07-11) | Controle de Fluxo | Lógica do app: adicionar/remover tarefas, filtrar por status, loop para listar |
| Fase 3 (12-17) | Objetos e Estruturas | Modelagem: tarefa como objeto (id, texto, concluída), array de objetos, CRUD completo, Map/Set para dados auxiliares, design patterns na arquitetura |
| Fase 4 (18-23) | DOM, Componentes e APIs de Interação | UI interativa: DOM + Custom Elements para renderizar lista, eventos + ciclo de vida, Shadow DOM, formulários com componentes nativos, File API, Drag & Drop, Web Storage + IndexedDB |
| Fase 5 (24-25) | Observers e APIs de Dispositivo | Intersection Observer para lazy loading, ResizeObserver, MutationObserver, Geolocalização, Notificações, Speech |
| Fase 6 (26-29) | Assincronismo, Threads e Streams | Event Loop, Promises, fetch, Web Workers, Service Workers (offline/PWA), Web Streams API |
| Fase 7 (30-31) | Profissional — Projeto Final | Código modular (ES modules), tratamento de erros, debugging, Projeto Final como PWA completa: Custom Elements na UI, IndexedDB nos dados, Service Worker offline, deploy |

## O mecanismo central (eixo transversal)

```
[Entrada] → [Processamento] → [Saída]
   ↓             ↓               ↓
 prompt     variáveis,        console,
 HTML       operações,        DOM,
 fetch      funções,          localStorage
            loops,
            condicionais
```

O aluno internaliza que TODO programa segue este fluxo: recebe dados, processa com lógica, gera resultado. A cada aula, uma nova ferramenta de processamento é adicionada ao repertório.

## Fio Condutor: Web APIs do Navegador

Cada ferramenta que o JavaScript usa no navegador — `console`, `alert`, `document`, `fetch`, `localStorage` — é uma **Web API**: uma interface padronizada que o navegador expõe para o JavaScript consumir. O aluno nunca fica no escuro sobre de onde vem cada ferramenta.

| O quê | Quando aparece | É uma Web API de... |
|---|---|---|
| `console.log` | Aula 01 | `Console` API — ferramenta de depuração |
| `alert`, `prompt` | Aula 05 | `Window` API — interação com o usuário |
| `setTimeout` | Aula 26 | `Timer` API — execução agendada |
| `document` | Aula 17 | `Document` API — árvore DOM |
| `fetch` | Aula 27 | `Fetch` API — comunicação HTTP |
| `localStorage` | Aula 22 | `Storage` API — persistência local |
| `navigator.geolocation` | Aula 25 | `Geolocation` API — localização |
| `Worker` | Aula 28 | `Web Workers` API — threads paralelas |
| `ServiceWorker` | Aula 28 | `Service Worker` API — offline/PWA |
| `ReadableStream` | Aula 28 | `Streams` API — dados sob demanda |

A cada aula, o aluno expande seu repertório de APIs do navegador, sempre sabendo qual API está usando, o que ela faz e onde consultar a documentação oficial (MDN).

## Sequência das 31 aulas

### FASE 1 — PENSAMENTO COMPUTACIONAL (Aulas 01-06)

Fundamentos universais de programação. O aluno entende o que é programar antes de escrever código complexo. Cada aula introduz exatamente UM conceito novo.

#### Aula 01: O Que É Programação? — Algoritmos, Instruções e Seu Primeiro Código

**Conteúdo**: O que é um programa (sequência de instruções). Analogia: receita de bolo. O que é algoritmo (passos ordenados para resolver um problema). JavaScript como linguagem. O console do navegador como primeiro ambiente. `console.log("Olá, mundo!")` — o aluno digita e vê o resultado. Console como "conversa com o computador". Foco total em feedback imediato — o aluno programa em menos de 10 minutos. **Comentários NÃO são introduzidos aqui** (o console é efêmero; comentários fazem sentido em arquivos, na Aula 02).

**Comandos/conceitos**: `console.log()`, abrir DevTools (F12), executar código no Console, fluxo Entrada → Processamento → Saída.

#### Aula 02: Variáveis e Memória — Do Console para o Arquivo

**Conteúdo**: O que é memória (analogia: caixinhas etiquetadas). Variável como caixinha com nome que guarda um valor. `let` para criar variáveis. `const` para valores que não mudam. Atribuição (`=`) como "guardar na caixinha". Reatribuição vs imutabilidade. 🆕 **Seção "Do Console para o Arquivo"**: criar `index.html`, tag `<script>`, escrever JavaScript em um arquivo real, abrir no navegador e ver o console. 🆕 **Comentários `//` e `/* */`** — agora fazem sentido (documentam o arquivo, duram entre sessões). Boas práticas de nomenclatura (camelCase, nomes descritivos em português).

**Conceitos**: `let`, `const`, `=`, camelCase, reatribuição, `<script>`, arquivo HTML+JS, comentários `//` e `/* */`.

#### Aula 03: Tipos de Dados Primitivos — Números, Strings e Booleanos

**Conteúdo**: Dados têm "formas" diferentes (analogia: água, gelo, vapor — mesma substância, estados diferentes). `number` (inteiros e decimais). `string` (texto entre aspas simples, duplas ou crase). `boolean` (sim/não, true/false). `typeof` para inspecionar o tipo. `null` e `undefined` (intuição: "sem valor" vs "valor não definido"). O aluno edita o `index.html` criado na Aula 02, adicionando verificações de tipo com `typeof` e variáveis booleanas ao Gerenciador de Tarefas.

**Conceitos**: `number`, `string`, `boolean`, `typeof`, `null`, `undefined`, aspas simples/duplas/crase.

#### Aula 04: Operadores — Aritmética, Comparação e Lógica

**Conteúdo**: Operadores aritméticos (`+`, `-`, `*`, `/`, `%`, `**`). Precedência (parênteses primeiro). Operadores de comparação (`===`, `!==`, `>`, `<`, `>=`, `<=`). Operadores lógicos (`&&`, `||`, `!`). Verdadeiro e falso no mundo real (analogia: "tem dinheiro E tem documento" vs "tem dinheiro OU tem cartão"). Expressões que produzem valores.

**Conceitos**: operadores aritméticos, comparação, lógicos, precedência, expressões, `===` vs `==` (introdução).

#### Aula 05: Entrada e Saída — Interagindo com o Usuário

**Conteúdo**: `prompt()` para receber dados do usuário. `alert()` para mostrar mensagens. `console.log()` como ferramenta de inspeção. Concatenando strings com `+` e template literals (`\`\${}\``). Conversão de tipos: `Number()`, `String()`, `parseInt()`, `parseFloat()`. Primeiro programa interativo: pergunta o nome, idade, calcula ano de nascimento.

**Conceitos**: `prompt()`, `alert()`, `console.log()`, template literals, conversão de tipos, concatenação.

#### Aula 06: Strings em Profundidade — Manipulação e Métodos

**Conteúdo**: Strings são sequências de caracteres (analogia: colar de contas). Índices (começam em 0). Propriedade `.length`. Métodos: `.toUpperCase()`, `.toLowerCase()`, `.trim()`, `.slice()`, `.replace()`, `.includes()`, `.startsWith()`, `.endsWith()`, `.split()`, `.indexOf()`. Imutabilidade de strings (métodos retornam nova string).

**Conceitos**: índices (0-based), `.length`, métodos de string, imutabilidade, encadeamento de métodos.

### FASE 2 — CONTROLE DE FLUXO (Aulas 07-11)

O computador começa a "tomar decisões" e "repetir tarefas". O aluno deixa de escrever código linear e passa a controlar o fluxo de execução.

#### Aula 07: Condicionais — if, else if, else e switch

**Conteúdo**: O programa precisa decidir (analogia: semáforo — se verde, anda; se vermelho, para). Estrutura `if`. `else` e `else if`. Blocos de código `{}`. Condições aninhadas. `switch` para múltiplas escolhas discretas. Truthy e falsy (o que é considerado verdadeiro/falso em uma condição). Boas práticas: evitar aninhamento profundo.

**Conceitos**: `if`, `else if`, `else`, `switch`, `case`, `break`, `default`, truthy/falsy, aninhamento.

#### Aula 08: Loops — for, while e do...while

**Conteúdo**: Repetir tarefas sem copiar e colar código (analogia: lavar 10 pratos — mesma ação, itens diferentes). `for` (sabe quantas vezes repetir). `while` (repete enquanto condição for verdadeira). `do...while` (executa pelo menos uma vez). Variável contadora. Incremento (`i++`). Loop infinito (como evitar). `break` e `continue`.

**Conceitos**: `for`, `while`, `do...while`, `i++`, `break`, `continue`, loop infinito, contador.

#### Aula 09: Arrays — Criando e Manipulando Listas

**Conteúdo**: Array como lista ordenada (analogia: lista de compras). Índices (começam em 0). `.length`. Acessar elementos por índice. Métodos: `.push()`, `.pop()`, `.shift()`, `.unshift()`, `.splice()`. Iterar arrays com `for`. Primeiro contato com `for...of`. Arrays podem conter qualquer tipo (misturado ou não).

**Conceitos**: array literal `[]`, índices, `.length`, `.push/pop/shift/unshift`, `.splice`, `for...of`, iteração manual.

#### Aula 10: Funções — Declaração, Parâmetros e Retorno

**Conteúdo**: Função como bloco nomeado que executa uma tarefa (analogia: liquidificador — você põe ingredientes, ele processa, devolve resultado). Declaração `function nome() {}`. Chamada/invocação. Parâmetros (ingredientes). `return` (resultado). Funções sem retorno (procedimentos). Reutilização: mesma função, argumentos diferentes.

**Conceitos**: `function`, declaração, invocação, parâmetros, argumentos, `return`, reutilização, DRY (Don't Repeat Yourself).

#### Aula 11: Escopo e Hoisting — Onde as Variáveis Existem

**Conteúdo**: Escopo de bloco (`let`/`const`). Escopo de função (`var` — menção histórica). Variáveis globais vs locais. Shadowing (variável local "esconde" global). Hoisting (içamento) — `var` sobe, `let`/`const` não. Temporal Dead Zone (TDZ). Closure (intuição: função "lembra" do escopo onde nasceu). Boas práticas: evitar globais, usar `const` sempre que possível.

**Conceitos**: escopo de bloco, escopo de função, global vs local, shadowing, hoisting, TDZ, closure (introdução), `var` (histórico).

### FASE 3 — OBJETOS E ESTRUTURAS DE DADOS (Aulas 12-17)

O aluno aprende a agrupar dados, estruturar informações com Map/Set, usar desestruturação, aplicar padrões de design e modelar entidades do mundo real. De arrays simples a classes e design patterns.

#### Aula 12: Objetos Literais — Propriedades e Métodos

**Conteúdo**: Objeto como coleção de pares chave-valor (analogia: ficha de cadastro — nome, idade, email). Sintaxe `{}`. Acessar propriedades: `.` (dot notation) e `[]` (bracket notation). Adicionar e remover propriedades. `Object.keys()`, `Object.values()`, `Object.entries()`. Verificar se propriedade existe: `in`, `.hasOwnProperty()`.

**Conceitos**: objeto literal, chave-valor, dot notation, bracket notation, `Object.keys/values/entries`, `in`, `hasOwnProperty`.

#### Aula 13: O this em JavaScript — Contexto de Execução

**Conteúdo**: `this` como "quem chamou a função" (analogia: "eu" muda de significado dependendo de quem fala). `this` em função global (`window` no navegador). `this` em método de objeto. Arrow functions e `this` (não têm `this` próprio — herdam do escopo pai). `.bind()`, `.call()`, `.apply()`. Armadilhas comuns e como evitar.

**Conceitos**: `this`, contexto de execução, arrow function e `this`, `.bind/call/apply`.

#### Aula 14: Funções Avançadas — Arrow Functions, Callbacks, HOFs

**Conteúdo**: Arrow functions (sintaxe concisa). Função como valor (first-class citizen). Callback: função passada como argumento. Higher-Order Functions (HOFs): funções que recebem/devolvem funções. Métodos de array: `.forEach()`, `.map()`, `.filter()`, `.reduce()`. `.find()`, `.some()`, `.every()`. Encadeamento de métodos.

**Conceitos**: arrow function, callback, HOF, `.forEach/map/filter/reduce`, `.find/some/every`, encadeamento, imutabilidade com `.map/filter`.

#### Aula 15: Prototypes e Herança Prototipal

**Conteúdo**: Todo objeto tem um protótipo (analogia: DNA — herda características). `Object.create()`. `__proto__` vs `Object.getPrototypeOf()`. Cadeia de protótipos (prototype chain). Propriedades próprias vs herdadas. `Object.hasOwn()`. Delegação de comportamento. Por que `[1,2,3].map()` funciona (Array.prototype).

**Conceitos**: protótipo, prototype chain, `Object.create`, `Object.getPrototypeOf`, `hasOwn`, delegação, built-in prototypes.

#### Aula 16: Classes — Sintaxe Moderna (ES6+)

**Conteúdo**: Classe como "fábrica de objetos" (analogia: forma de bolo — mesma forma, bolos diferentes). Sintaxe `class`. `constructor`. Métodos. `extends` (herança). `super`. Campos públicos e privados (`#`). Métodos estáticos (`static`). Getters e setters. Classes são "açúcar sintático" sobre prototypes.

**Conceitos**: `class`, `constructor`, `extends`, `super`, `#` (privado), `static`, get/set, herança.

#### Aula 17: Map, Set e Design Patterns — Estruturas de Dados

**Conteúdo**: **Map**: dicionário onde a chave pode ser qualquer tipo (objeto, função, número). Diferença para objeto literal (chaves string vs chaves any). , , , , . Iteração com , , . **Set**: coleção sem elementos duplicados. , , , . Caso de uso: remover duplicatas de array com . **WeakMap**: Map com garbage collection — chaves são objetos e não impedem coleta. **WeakSet**: Set com garbage collection. **Design Patterns via JS**: Enum com object literal (), Factory (), Singleton via campo privado . Quando usar cada estrutura.

**Conceitos**: , , , , enum via object literal, Factory Pattern, Singleton Pattern,  para enums imutáveis.

**Web APIs MDN**: , , , .



### FASE 4 — APIs DO NAVEGADOR: COMPONENTES E INTERAÇÃO (Aulas 18-23)

O código sai do console e ganha vida na página web. O aluno cria componentes reutilizáveis com Web Components, interage com arquivos e dados do usuário, e persiste informações localmente. Todas as APIs ensinadas nesta fase são da especificação [MDN Web APIs](https://developer.mozilla.org/pt-BR/docs/Web/API).

#### Aula 18: O DOM e Custom Elements — A Ponte Entre JS e HTML

**Conteúdo**: DOM como árvore de nós (analogia: árvore genealógica — pai, filhos, irmãos). `document` como raiz. `console` e `document` são Web APIs do mesmo pacote — o navegador. Seletores: `getElementById`, `querySelector`, `querySelectorAll`. NodeList vs HTMLCollection. Manipular conteúdo: `.textContent`, `.innerHTML`, `.value`. Manipular atributos: `.setAttribute`, `.getAttribute`, `.classList`. Navegar na árvore: `.parentElement`, `.children`, `.nextElementSibling`. **Custom Elements**: `customElements.define()`, classe com `extends HTMLElement`. `connectedCallback`. Primeiro componente: `<e-tarefa>`. Conexão com Aula 16 (classes: componente é uma classe que estende `HTMLElement`).

**Conceitos**: DOM, árvore de nós, seletores, `textContent/innerHTML/value`, `classList`, navegação, NodeList, Custom Elements, `customElements.define`, `connectedCallback`, `HTMLElement`.

**Web APIs MDN**: `Document`, `Element`, `CustomElementRegistry`, `HTMLElement`, `NodeList`.

#### Aula 19: Eventos + Ciclo de Vida do Componente

**Conteúdo**: Evento como algo que aconteceu (analogia: campainha — alguém tocou, você atende). `addEventListener`. Tipos: `click`, `dblclick`, `keydown`, `keyup`, `submit`, `change`, `input`, `mouseover`, `mouseout`. Objeto `event` (`.target`, `.key`, `.preventDefault()`). Event bubbling e captura. Delegação de eventos (listener no pai, verifica `event.target`). **Ciclo de vida do Custom Element**: `connectedCallback` (montado no DOM), `disconnectedCallback` (removido), `attributeChangedCallback` (reativo a atributos). Adicionar/remover listeners em cada ciclo.

**Conceitos**: `addEventListener`, tipos de evento, objeto `event`, bubbling, captura, delegação, `preventDefault`, `connectedCallback`, `disconnectedCallback`, `attributeChangedCallback`.

**Web APIs MDN**: `Event`, `EventTarget`, `MouseEvent`, `KeyboardEvent`, `CustomEvent`.

#### Aula 20: Manipulação + Shadow DOM + Templates

**Conteúdo**: `document.createElement()`. `.appendChild()`, `.insertBefore()`, `.replaceChild()`. `.remove()`, `.removeChild()`. `.cloneNode()`. **`<template>`**: conteúdo HTML inerte que se torna vivo com `.content.cloneNode(true)`. **Shadow DOM**: `.attachShadow({ mode: 'open' })`, `shadowRoot.innerHTML`. Encapsulamento de estilo (CSS não vaza para fora). **`<slot>`**: pontos de inserção para conteúdo externo. `DocumentFragment` para performance. Renderização dinâmica de listas com Custom Elements. Boas práticas (minimizar reflows).

**Conceitos**: `createElement`, `appendChild`, `remove`, `insertAdjacentHTML`, `<template>`, `ShadowRoot`, `<slot>`, `DocumentFragment`, reflow.

**Web APIs MDN**: `Node`, `ShadowRoot`, `HTMLTemplateElement`, `HTMLSlotElement`, `DocumentFragment`.

#### Aula 21: Formulários + Componentes de Formulário

**Conteúdo**: Acessar formulário: `document.forms`, `.elements`. `FormData`. Validação nativa (atributos HTML: `required`, `minlength`, `pattern`). Validação customizada com JS: `checkValidity()`, `reportValidity()`. Feedback visual (classes CSS, mensagens de erro). `submit` vs `button` + `click`. Serialização de dados. **Form-associated Custom Elements**: `FormAssociated` mixin, `elementInternals.setFormValue()`, `elementInternals.setValidity()`. Componente `<e-input-cep>` que valida CEP automaticamente.

**Conceitos**: formulários, `FormData`, validação nativa, validação customizada, `checkValidity`, form-associated Custom Elements, `ElementInternals`.

**Web APIs MDN**: `HTMLFormElement`, `FormData`, `ConstraintValidation`, `ElementInternals`.

#### Aula 22: File API, Clipboard e Drag & Drop

**Conteúdo**: **File API**: `<input type="file">`, `File`, `FileReader` (ler arquivos como texto/base64/dataURL). `Blob` — objeto de dados brutos. Limitações de segurança (same-origin). **Clipboard API**: `navigator.clipboard.writeText()`, `navigator.clipboard.readText()`. **Drag & Drop**: eventos `dragstart`, `dragover`, `drop`, `DataTransfer`. Componente `<e-upload>` que aceita arrastar arquivos e exibe preview. To-Do App: exportar tarefas como arquivo JSON.

**Conceitos**: `File`, `FileReader`, `Blob`, `DataTransfer`, `Clipboard API`, `DragEvent`, arrastar e soltar.

**Web APIs MDN**: `File`, `FileReader`, `Blob`, `Clipboard`, `DataTransfer`, `DragEvent`.

#### Aula 23: Web Storage + IndexedDB

**Conteúdo**: Por que persistir dados no navegador. `localStorage` (sobrevive ao fechar). `sessionStorage` (some ao fechar a aba). API: `.setItem`, `.getItem`, `.removeItem`, `.clear`. Limitação: apenas strings (`JSON.stringify/parse`). Cookies (`document.cookie`) — menção. **IndexedDB**: banco NoSQL no navegador. `indexedDB.open()`, `IDBDatabase`, `IDBObjectStore`, `IDBIndex`, `IDBRequest`, `IDBCursor`. Operações CRUD com transações. Quando usar localStorage vs IndexedDB. To-Do App migra de localStorage para IndexedDB (dados estruturados, consultas por status/data).

**Conceitos**: `localStorage`, `sessionStorage`, `JSON.stringify/parse`, IndexedDB, `IDBDatabase`, `IDBObjectStore`, `IDBIndex`, `IDBRequest`, transações.

**Web APIs MDN**: `Storage`, `IDBFactory`, `IDBDatabase`, `IDBObjectStore`, `IDBIndex`, `IDBCursor`, `IDBTransaction`.

---

### FASE 5 — OBSERVERS, GEOLOCALIZAÇÃO E UTILIDADES (Aulas 24-25)

O aluno descobre APIs que observam o estado da página e do dispositivo — elementos que aparecem na tela, mudanças de tamanho, localização do usuário.

#### Aula 24: Intersection Observer + Resize Observer + Mutation Observer

**Conteúdo**: O problema de detectar visibilidade (scroll listeners custosos). **`IntersectionObserver`**: `observe()`, `unobserve()`, `threshold`, `rootMargin`. Aplicações: lazy loading de imagens, scroll infinito no To-Do App, track de analytics. **`ResizeObserver`**: detectar mudanças de tamanho de elemento. **`MutationObserver`**: observar mudanças no DOM (filhos, atributos, conteúdo). Comparação: observer vs evento vs polling.

**Conceitos**: `IntersectionObserver`, `ResizeObserver`, `MutationObserver`, lazy loading, scroll infinito, observer vs evento.

**Web APIs MDN**: `IntersectionObserver`, `ResizeObserver`, `MutationObserver`, `IntersectionObserverEntry`.

#### Aula 25: Geolocation + Notifications + Speech

**Conteúdo**: **Geolocation API**: `navigator.geolocation.getCurrentPosition()`, `watchPosition()`, `Position`, `Coordinates`. Permissão do usuário. Tratamento de erro (usuário negou, timeout). **Notifications API**: `Notification.requestPermission()`, `new Notification()`. Notificações do To-Do App quando prazo se aproxima. **Web Speech API**: `SpeechSynthesis.speak()`, `SpeechSynthesisUtterance`. Leitura de tarefas em voz alta. **Vibration API**: `navigator.vibrate()`. Boas práticas: degradação graciosa (APIs podem não estar disponíveis).

**Conceitos**: `Geolocation`, `Position`, `Coordinates`, `Notification`, `SpeechSynthesis`, `SpeechSynthesisUtterance`, vibrate, permissões, degradação graciosa.

**Web APIs MDN**: `Geolocation`, `Notifications`, `SpeechSynthesis`, `Vibration`.

---

### FASE 6 — ASSINCRONISMO, THREADS E STREAMS (Aulas 26-29)

O aluno entende que nem tudo é instantâneo, aprende a lidar com operações que demoram, executa código em segundo plano e processa dados sob demanda.

#### Aula 26: Event Loop — setTimeout, Callbacks e Microtasks

**Conteúdo**: Código síncrono vs assíncrono (analogia: restaurante — síncrono é esperar o prato parado na frente do chef; assíncrono é fazer o pedido e continuar conversando). `setTimeout` e `setInterval`. `clearTimeout`, `clearInterval`. **Event Loop**: call stack, task queue (macrotasks), microtask queue. `queueMicrotask()`. **`AbortController`**: cancelar operações assíncronas (`abort()`, `signal`). Callbacks como me avise quando terminar. Problema: Callback Hell.

**Conceitos**: síncrono vs assíncrono, `setTimeout`, `setInterval`, Event Loop, call stack, macrotask, microtask, `queueMicrotask`, `AbortController`, callback hell.

**Web APIs MDN**: `setTimeout`, `setInterval`, `queueMicrotask`, `AbortController`, `AbortSignal`.

#### Aula 27: Promises, Fetch e Async/Await

**Conteúdo**: Promise como promessa de um valor futuro (analogia: vale-presente). Estados: pending, fulfilled, rejected. `.then()`, `.catch()`, `.finally()`. Encadeamento. `Promise.all()`, `Promise.race()`, `Promise.allSettled()`. Criar Promises: `new Promise((resolve, reject) => {})`. **Fetch API**: GET, POST, `response.ok`, `response.status`, `response.json()`, `response.text()`. Headers: Content-Type, Authorization. **async/await**: `async function`, `await`, try/catch com async, `Promise.all` + await. Async/Await como açúcar sintático sobre Promises. To-Do App busca frases motivacionais de API pública.

**Conceitos**: Promise, pending/fulfilled/rejected, `.then/catch/finally`, `Promise.all/race/allSettled`, `fetch`, `Response`, `Request`, `Headers`, `async`, `await`, top-level await.

**Web APIs MDN**: `Promise`, `fetch`, `Response`, `Request`, `Headers`, `AbortSignal`.

#### Aula 28: Web Workers + Service Workers

**Conteúdo**: **Web Workers**: thread separada. `new Worker('arquivo.js')`, `postMessage()`, `onmessage`. Comunicação via mensagens (cópia, não referência). Limitações: sem acesso ao DOM, sem `window`. Casos de uso: processamento pesado (exportar tarefas, filtrar listas grandes), criptografia. **Service Workers**: proxy programável entre navegador e rede. Ciclo de vida: `install`, `activate`, `fetch`. Cache API: `caches.open()`, `cache.put()`, `cache.match()`. Estratégias: Cache First, Network First, Stale While Revalidate. To-Do App roda offline (Service Worker + Cache API). Atualização e lifecycle.

**Conceitos**: `Worker`, `postMessage`, `onmessage`, `ServiceWorker`, `Cache`, `CacheStorage`, install event, activate event, fetch event, estratégias de cache, offline-first.

**Web APIs MDN**: `Worker`, `ServiceWorker`, `Cache`, `CacheStorage`, `MessageEvent`, `ExtendableEvent`.

#### Aula 29: Web Streams API

**Conteúdo**: **Streams API**: `ReadableStream`, `WritableStream`, `TransformStream`. Dados que chegam sob demanda (analogia: torneira — você abre e a água sai; não precisa ter um tanque cheio antes). `ReadableStream.getReader()`, `read()`. `TransformStream` para processar dados em pipeline. Casos de uso: streaming de fetch (respostas grandes), processamento de arquivos grandes sem carregar tudo na memória, compressão/decompressão com `CompressionStream`. `TextEncoder`/`TextDecoder`. Pipe: `readableStream.pipeThrough(transformStream).pipeTo(writableStream)`.

**Conceitos**: `ReadableStream`, `WritableStream`, `TransformStream`, `getReader`, `pipeThrough`, `pipeTo`, `CompressionStream`, `TextEncoder`, `TextDecoder`, streaming, backpressure.

**Web APIs MDN**: `ReadableStream`, `WritableStream`, `TransformStream`, `CompressionStream`, `TextEncoder`, `TextDecoder`.

---

### FASE 7 — PROFISSIONAL: PROJETO FINAL (Aulas 30-31)

O aluno organiza código como profissional, depura erros com maestria e entrega uma PWA completa.

#### Aula 30: ES Modules + Error Handling + Debugging

**Conteúdo**: Por que modularizar (analogia: gavetas — cada uma com seu tipo de roupa). Named exports vs default exports. `import { } from`, `import * as`, `import default`. `type="module"` no HTML. Dynamic `import()`. **Error Handling**: `try/catch/finally`, `throw`, tipos de erro (SyntaxError, ReferenceError, TypeError, RangeError). Criando erros customizados. **Debugging**: Chrome DevTools: breakpoints, step over/in/out, watch, call stack, scope. `console.table`, `console.group`, `console.time`. `debugger;`. Logs estruturados. Código limpo: nomes descritivos, funções pequenas, comentários úteis.

**Conceitos**: named/default export, static/dynamic import, `type="module"`, strict mode, `try/catch/finally`, `throw`, tipos de erro, DevTools debugging, breakpoints, console avançado.

**Web APIs MDN**: `console`, `Error`, `SyntaxError`, `ReferenceError`, `TypeError`.

#### Aula 31: Projeto Final — PWA Completa + Portfólio

**Conteúdo**: Consolidação de TUDO que o aluno aprendeu. O To-Do App vira uma PWA completa. Frontend com Custom Elements (componentes `<e-tarefa>`, `<e-form-tarefa>`, `<e-lista>`). Persistência com IndexedDB (dados estruturados, consultas). Service Worker para funcionamento offline. Web Worker para exportação/importação de dados. IntersectionObserver para lazy loading de tarefas antigas. Notificações para lembretes. Organização profissional: módulos ES, tratamento de erros robusto, UI polida com Shadow DOM. Funcionalidades: CRUD, filtros, estatísticas, tema claro/escuro, exportar/importar JSON, resposta a mudanças de conexão. Deploy via GitHub Pages. Próximos passos: TypeScript, frameworks (React, Vue), Node.js. Como montar portfólio.

**Conceitos**: PWA, integração de tudo, organização de projeto, deploy (GitHub Pages), portfólio, carreira, offline-first.

**Web APIs MDN**: Todas as anteriores integradas no projeto final.


## Convenções didáticas

- **Linguagem**: JavaScript puro (Vanilla JS), sem frameworks ou bibliotecas externas. O foco é dominar a linguagem, não ferramentas.
- **Analogias do mundo real**: todo conceito abstrato é ancorado em uma situação cotidiana antes de ser codificado. Ex: variável = caixinha etiquetada, função = liquidificador, array = lista de compras.
- **Didática progressiva**: cada aula introduz exatamente UM conceito novo. Pratica-se até a exaustão com feedback imediato (gabarito comentado) antes de avançar. Nunca dois conceitos novos na mesma seção.
- **Prática antes da teoria (quando possível)**: o aluno primeiro FAZ (digita o código, vê o resultado), depois ENTENDE o mecanismo. A teoria explica a experiência, não a antecipa.
- **Código sempre completo e executável**: todo exemplo de código pode ser copiado, colado no Console do navegador e executado imediatamente. Nada de snippets incompletos ou pseudocódigo.
- **Gabarito comentado**: todo exercício tem gabarito com comentários linha a linha explicando o raciocínio — não apenas o código final.
- **Português claro**: nomes de variáveis, funções e exemplos em português nas aulas iniciais (transição para inglês nas fases finais, preparando para o mercado).
- **Tom**: conversacional, paciente e encorajador. O aluno é iniciante absoluto — não existe pergunta "boba". Zero jargão sem explicação prévia.
- **Foco em "por que", não só "como"**: cada conceito responde a uma pergunta: "por que isso existe? qual problema resolve?" antes de mostrar a sintaxe.

## Arquitetura de pastas de cada aula

```
modules/curso-javascript/aulaNN/
├── aula-NN-<slug>.md                       # Conteúdo principal
├── aula-NN-questoes-de-aprendizagem.md     # Tarefas/checkpoint prático (arquivo separado)
├── aula-NN-<slug>.docx                      # DOCX para distribuição (gerado ao final)
└── images/                                  # Diagramas Mermaid renderizados como PNG
```

## Progressão de complexidade

| Fase | Aulas | Complexidade | Palavras-chave |
|---|---|---|---|
| Fase 1 | 01-06 | Iniciante absoluto | algoritmos, variáveis, tipos, operadores, entrada/saída |
| Fase 2 | 07-11 | Iniciante | if/else, for/while, arrays, funções, escopo |
| Fase 3 | 12-17 | Iniciante→Intermediário | objetos, destruturação, this, HOFs, prototypes, classes, Map, Set, design patterns |
| Fase 4 | 18-23 | Intermediário | DOM, Custom Elements, Shadow DOM, File, IndexedDB |
| Fase 5 | 24-25 | Intermediário | Observers, Geolocation, Notifications, Speech |
| Fase 6 | 26-29 | Intermediário→Avançado | Event Loop, Promises, Workers, Streams |
| Fase 7 | 30-31 | Avançado→Profissional | módulos ES, debugging, PWA, portfólio |

## Regras para Manutenção de Coerência

1. **Este README é alterado primeiro.** Se uma aula for adicionada, removida, mesclada ou reordenada, o README é atualizado **antes** de qualquer arquivo de aula.
2. **Referências nas aulas seguem o README.** O campo "Próxima Aula", menções como "Na Aula 12...", e a "Recapitulação" devem corresponder exatamente a este plano.
3. **Títulos consistentes.** O `titulo` no frontmatter de cada aula deve ser idêntico ao título no plano acima.
4. **A aula N nunca referencia conceitos ou ferramentas da aula N+1.**
5. **Questões de Aprendizagem** sempre têm `tipo: "checkpoint-pratico"` no frontmatter e seguem a estrutura `Conceito-chave → Objetivo → Passos de Execução → Entrega`.
6. **Se uma aula referencia ferramentas/conceitos de outra aula, aquela outra aula realmente cobre esses tópicos.** Verificar antes de publicar.

## Referências

### Documentação oficial
- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide) — guia oficial da Mozilla
- [MDN JavaScript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference) — referência completa
- [MDN Learn Web Development — JavaScript](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting) — currículo para iniciantes
- [ECMAScript Specification (tc39)](https://tc39.es/ecma262/) — especificação oficial da linguagem
- [ECMAScript Proposals (tc39)](https://github.com/tc39/proposals) — propostas de novas features

### Ferramentas
- [Chrome DevTools](https://developer.chrome.com/docs/devtools/) — debugging e console
- [Node.js](https://nodejs.org/) — runtime para JavaScript fora do navegador

### Recursos para alunos
- [Eloquent JavaScript](https://eloquentjavascript.net/) — livro online gratuito
- [JavaScript.info](https://javascript.info/) — tutorial moderno e completo
- [freeCodeCamp JavaScript](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/) — curso interativo gratuito

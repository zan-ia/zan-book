---
titulo: "JavaScript — Do Zero ao Profissional — Aula 14 — Questões de Aprendizagem"
modulo: "01"
aula: "14"
---

# JavaScript — Do Zero ao Profissional Aula 14 — Questões de Aprendizagem

## Como Usar Este Arquivo

Este arquivo é o **checkpoint de aprendizagem** da Aula 14. Serve para você verificar se realmente entendeu arrow functions, callbacks, HOFs e métodos de array — não apenas "li e entendi", mas "consigo fazer por conta própria".

A pergunta central é: *eu sei usar arrow functions, callbacks e os 7 métodos de array para escrever código mais expressivo e declarativo?*

**Como proceder:**

1. Crie uma pasta `entregas-aula14/` dentro do seu diretório de estudos
2. Faça cada questão na ordem — elas seguem a progressão da aula
3. Cada questão tem um **Objetivo** (o que você vai demonstrar) e **Passos de Execução** (o que fazer)
4. Copie o template de entrega e preencha com suas respostas
5. Só consulte a aula novamente se travar em uma questão — e anote o que não estava claro
6. Ao final, use o **Checklist** para decidir se está pronto para a Aula 15

> ⚡ **Regra de ouro:** se você consegue fazer todas as questões sem consultar a aula, você DOMINA os conceitos. Se trava em alguma, releia a seção correspondente e tente de novo.

---

## Questão 1: Arrow Functions — Escrevendo em Todas as Variantes

**Conceito-chave:** Arrow functions — sintaxe completa com parênteses opcionais e retorno implícito vs explícito (Aula 14, Seção 3).

**Objetivo:** Demonstrar que você consegue escrever arrow functions em todas as variantes de sintaxe, escolhendo a forma mais apropriada para cada caso.

**Passos de Execução:**

1. Leia cada função `function` tradicional abaixo
2. Converta cada uma para arrow function usando a sintaxe MAIS CONCISA possível
3. Teste no Console para confirmar que funcionam igual
4. Identifique qual regra de sintaxe você aplicou em cada conversão

**Entrega:** crie `entregas-aula14/01-arrow-functions.md`:

~~~~
# Questão 1 — Arrow Functions em Todas as Variantes

## Função A: Saudação

```javascript
// Original
function saudar(nome) {
  return 'Olá, ' + nome;
}
```

**Minha arrow function:**

```javascript
const saudar = nome => 'Olá, ' + nome;
```

**Regra aplicada:**

[Explique qual regra de sintaxe você usou: parênteses opcionais, retorno implícito, etc.]

## Função B: Soma

```javascript
// Original
function somar(a, b, c) {
  return a + b + c;
}
```

**Minha arrow function:**

```javascript

```

**Regra aplicada:**


## Função C: Par ou Ímpar

```javascript
// Original
function ehPar(numero) {
  return numero % 2 === 0;
}
```

**Minha arrow function:**

```javascript

```

**Regra aplicada:**


## Função D: Criar Pessoa

```javascript
// Original
function criarPessoa(nome, idade) {
  return { nome: nome, idade: idade };
}
```

**Minha arrow function:**

```javascript

```

**Regra aplicada:**


## Função E: Processar Dados

```javascript
// Original
function processarDados(numeros) {
  const soma = numeros.reduce((acc, n) => acc + n, 0);
  const media = soma / numeros.length;
  return media;
}
```

**Minha arrow function:**

```javascript

```

**Regra aplicada:**


## Conclusão

Em 2-3 frases: qual a maior dificuldade que você encontra ao usar arrow functions?
~~~~

---

## Questão 2: Callbacks e HOFs — Criando Funções que Recebem e Retornam Funções

**Conceito-chave:** Funções como valor, callbacks síncronos e Higher-Order Functions (Aula 14, Seção 4).

**Objetivo:** Demonstrar que você consegue criar funções que recebem callbacks e funções que retornam outras funções.

**Passos de Execução:**

1. Crie uma HOF chamada `aplicarDesconto(precoOriginal, callbackDesconto)` que recebe um preço e uma função callback. O callback recebe o preço e retorna o valor com desconto. A HOF deve retornar o preço com desconto aplicado.
2. Crie um callback `descontoFixo` que dá 10% de desconto (preco * 0.9)
3. Crie um callback `descontoProgressivo` que dá 5% se preco < 100, 10% se preco < 200, 15% caso contrário
4. Crie uma HOF `formatarMoeda(simbolo)` que recebe um símbolo monetário (ex: 'R$') e retorna uma função que formata um número com o símbolo e duas casas decimais
5. Teste no Console com `console.log(formatarMoeda('R$')(150))` deve mostrar "R$150.00"

**Entrega:** crie `entregas-aula14/02-callbacks-hofs.md`:

~~~~
# Questão 2 — Callbacks e HOFs

## HOF aplicarDesconto

```javascript
function aplicarDesconto(precoOriginal, callbackDesconto) {
  // Implemente aqui
}
```

## Callback descontoFixo

```javascript
const descontoFixo = // implemente com arrow function
```

## Callback descontoProgressivo

```javascript
const descontoProgressivo = // implemente com arrow function
```

## Testes

```javascript
console.log('Preço original: R$200');
console.log('Com desconto fixo:', aplicarDesconto(200, descontoFixo));
console.log('Com desconto progressivo 50:', aplicarDesconto(50, descontoProgressivo));
console.log('Com desconto progressivo 150:', aplicarDesconto(150, descontoProgressivo));
console.log('Com desconto progressivo 250:', aplicarDesconto(250, descontoProgressivo));
```

**Resultados esperados:**

[Preencha com os valores que apareceram no console]

## HOF formatarMoeda

```javascript
function formatarMoeda(simbolo) {
  // Retorne uma função que recebe um número e retorna string formatada
}
```

## Teste formatarMoeda

```javascript
const formatarReal = formatarMoeda('R$');
console.log(formatarReal(150));     // Deve mostrar: R$150.00
console.log(formatarReal(49.9));    // Deve mostrar: R$49.90
```

**Resultado obtido:**



## Conclusão

Em 2-3 frases: como você descreveria a utilidade de HOFs que retornam funções?
~~~~

---

## Questão 3: `.forEach()` vs `.map()` — Escolhendo a Ferramenta Certa

**Conceito-chave:** `.forEach()` para iteração, `.map()` para transformação — diferença de retorno e uso (Aula 14, Seção 5).

**Objetivo:** Demonstrar que você consegue distinguir quando usar `.forEach()` e quando usar `.map()`, e implementar ambos corretamente.

**Passos de Execução:**

1. Dado o array de alunos: `const alunos = [{ nome: 'Ana', nota: 8.5 }, { nome: 'João', nota: 6.0 }, { nome: 'Maria', nota: 9.2 }]`
2. Use `.forEach()` para exibir no console: "Nome: Ana — Nota: 8.5" para cada aluno
3. Use `.map()` para criar um novo array com objetos `{ nome, situacao }` onde situacao é 'aprovado' se nota >= 7, 'recuperação' se nota >= 5, 'reprovado' se nota < 5
4. Use `.forEach()` no novo array para exibir "Ana: aprovado"
5. Justifique por que você usou `.map()` no passo 3 e não `.forEach()`

**Entrega:** crie `entregas-aula14/03-foreach-vs-map.md`:

~~~~
# Questão 3 — forEach vs map

## Array de Alunos

```javascript
const alunos = [
  { nome: 'Ana', nota: 8.5 },
  { nome: 'João', nota: 6.0 },
  { nome: 'Maria', nota: 9.2 }
];
```

## Passo 2: Exibir com forEach

```javascript
// Implemente aqui
```

**Saída no console:**

## Passo 3: Criar novo array com map

```javascript
const alunosComSituacao = alunos.map(aluno => {
  // Implemente aqui
});
console.log(alunosComSituacao);
```

**Resultado:**

## Passo 4: Exibir situações com forEach

```javascript
// Implemente aqui
```

**Saída no console:**

## Passo 5: Justificativa

**Por que usei .map() no passo 3 e não .forEach():**

[Explique em 2-3 frases a diferença entre os dois métodos e por que .map() é a escolha correta para transformar dados]
~~~~

---

## Questão 4: Filtrando Produtos com `.filter()`

**Conceito-chave:** `.filter()` — selecionar elementos de um array por condição, criando novo array (Aula 14, Seção 6).

**Objetivo:** Demonstrar que você consegue usar `.filter()` para selecionar itens de um array com condições compostas.

**Passos de Execução:**

1. Dado o array de produtos abaixo, use `.filter()` para:
   a. Obter produtos com preço entre R$50 e R$200 (inclusive)
   b. Obter produtos da categoria 'eletrônico' COM estoque > 0
   c. Obter produtos com nome que contém 'TV' (use `.includes()`)

2. Cada filtro deve ser uma arrow function concisa

```javascript
const produtos = [
  { nome: 'Smart TV 50', preco: 2499.90, categoria: 'eletrônico', estoque: 10 },
  { nome: 'Fone Bluetooth', preco: 89.90, categoria: 'eletrônico', estoque: 0 },
  { nome: 'Camiseta Algodão', preco: 49.90, categoria: 'vestuário', estoque: 25 },
  { nome: 'TV 32 Polegadas', preco: 1599.00, categoria: 'eletrônico', estoque: 5 },
  { nome: 'Tênis Esportivo', preco: 299.90, categoria: 'calçados', estoque: 3 },
  { nome: 'Monitor 24', preco: 899.90, categoria: 'eletrônico', estoque: 0 },
  { nome: 'Carregador USB', preco: 35.00, categoria: 'eletrônico', estoque: 50 },
];
```

**Entrega:** crie `entregas-aula14/04-filter-produtos.md`:

~~~~
# Questão 4 — Filtrando Produtos

## Array de Produtos

```javascript
const produtos = [
  { nome: 'Smart TV 50', preco: 2499.90, categoria: 'eletrônico', estoque: 10 },
  { nome: 'Fone Bluetooth', preco: 89.90, categoria: 'eletrônico', estoque: 0 },
  { nome: 'Camiseta Algodão', preco: 49.90, categoria: 'vestuário', estoque: 25 },
  { nome: 'TV 32 Polegadas', preco: 1599.00, categoria: 'eletrônico', estoque: 5 },
  { nome: 'Tênis Esportivo', preco: 299.90, categoria: 'calçados', estoque: 3 },
  { nome: 'Monitor 24', preco: 899.90, categoria: 'eletrônico', estoque: 0 },
  { nome: 'Carregador USB', preco: 35.00, categoria: 'eletrônico', estoque: 50 },
];
```

## a) Produtos com preço entre R$50 e R$200

```javascript
const faixaPreco = produtos.filter(p => p.preco >= 50 && p.preco <= 200);
console.log(faixaPreco);
```

**Quantos produtos:** [número]

**Nomes:** [lista de nomes]

## b) Eletrônicos com estoque

```javascript
const eletronicosDisponiveis = // implemente aqui
console.log(eletronicosDisponiveis);
```

**Quantos produtos:** [número]

**Nomes:** [lista de nomes]

## c) Produtos com "TV" no nome

```javascript
const produtosTV = // implemente aqui
console.log(produtosTV);
```

**Quantos produtos:** [número]

**Nomes:** [lista de nomes]

## Conclusão

Em 2-3 frases: como o .filter() torna o código mais legível comparado a um loop for manual?
~~~~

---

## Questão 5: Calculando Vendas com `.reduce()`

**Conceito-chave:** `.reduce()` — acumular valores de um array em um único resultado (Aula 14, Seção 6).

**Objetivo:** Demonstrar que você consegue usar `.reduce()` para somar, contar e agrupar dados de um array.

**Passos de Execução:**

1. Dado o array de vendas abaixo, use `.reduce()` para:
   a. Calcular o valor total de vendas
   b. Calcular o valor médio por venda
   c. Criar um objeto que agrupa as vendas por vendedor
   d. Encontrar o vendedor com maior valor total de vendas (desafio)

```javascript
const vendas = [
  { vendedor: 'Ana', valor: 1500, mes: 'Janeiro' },
  { vendedor: 'João', valor: 2300, mes: 'Janeiro' },
  { vendedor: 'Ana', valor: 800, mes: 'Fevereiro' },
  { vendedor: 'Maria', valor: 3200, mes: 'Janeiro' },
  { vendedor: 'João', valor: 1000, mes: 'Fevereiro' },
  { vendedor: 'Ana', valor: 2000, mes: 'Março' },
  { vendedor: 'Maria', valor: 1800, mes: 'Fevereiro' },
];
```

**Entrega:** crie `entregas-aula14/05-reduce-vendas.md`:

~~~~
# Questão 5 — Calculando Vendas com reduce

## Array de Vendas

```javascript
const vendas = [
  { vendedor: 'Ana', valor: 1500, mes: 'Janeiro' },
  { vendedor: 'João', valor: 2300, mes: 'Janeiro' },
  { vendedor: 'Ana', valor: 800, mes: 'Fevereiro' },
  { vendedor: 'Maria', valor: 3200, mes: 'Janeiro' },
  { vendedor: 'João', valor: 1000, mes: 'Fevereiro' },
  { vendedor: 'Ana', valor: 2000, mes: 'Março' },
  { vendedor: 'Maria', valor: 1800, mes: 'Fevereiro' },
];
```

## a) Valor total de vendas

```javascript
const totalVendas = vendas.reduce((acc, v) => acc + v.valor, 0);
console.log('Total:', totalVendas);
```

**Resultado:** [preencha]

## b) Valor médio por venda

```javascript
const media = // implemente usando reduce
console.log('Média:', media);
```

**Resultado:** [preencha]

## c) Vendas agrupadas por vendedor

```javascript
const porVendedor = vendas.reduce((acc, v) => {
  // Implemente: cada chave é o nome do vendedor,
  // o valor é a soma de suas vendas
  return acc;
}, {});
console.log('Por vendedor:', porVendedor);
```

**Resultado esperado:**
```
{ Ana: 4300, João: 3300, Maria: 5000 }
```

**Resultado obtido:**

## d) Desafio — Vendedor com maior total

```javascript
const melhorVendedor = // implemente usando reduce
// Dica: comece com { nome: '', total: 0 } como valor inicial
// e compare vendedor por vendedor
console.log('Melhor vendedor:', melhorVendedor);
```

**Resultado:**

## Conclusão

Em 2-3 frases: qual a maior vantagem de usar .reduce() em vez de um loop for? E qual a maior dificuldade?
~~~~

---

## Questão 6: Busca e Teste com `.find()`, `.some()` e `.every()`

**Conceito-chave:** `.find()` para buscar, `.some()` para testar existência, `.every()` para testar universalidade (Aula 14, Seção 7).

**Objetivo:** Demonstrar que você consegue usar `.find()`, `.some()` e `.every()` para buscar elementos e verificar condições em arrays.

**Passos de Execução:**

1. Dado o array de estoque abaixo, implemente:
   a. Use `.find()` para localizar o produto com código 'P003'
   b. Use `.some()` para verificar se existe algum produto com preço acima de R$5000
   c. Use `.every()` para verificar se TODOS os produtos têm estoque > 0
   d. Use `.some()` para verificar se existe algum produto com estoque ZERO
   e. Use `.find()` para localizar o primeiro produto da categoria 'informática'

```javascript
const estoque = [
  { codigo: 'P001', nome: 'Notebook', preco: 4500, estoque: 5, categoria: 'informática' },
  { codigo: 'P002', nome: 'Mouse', preco: 80, estoque: 20, categoria: 'informática' },
  { codigo: 'P003', nome: 'Teclado Mecânico', preco: 350, estoque: 0, categoria: 'informática' },
  { codigo: 'P004', nome: 'Monitor 27', preco: 1800, estoque: 3, categoria: 'informática' },
  { codigo: 'M001', nome: 'Cadeira Ergonômica', preco: 2500, estoque: 2, categoria: 'mobiliário' },
  { codigo: 'M002', nome: 'Mesa Digital', preco: 3200, estoque: 1, categoria: 'mobiliário' },
];
```

**Entrega:** crie `entregas-aula14/06-find-some-every.md`:

~~~~
# Questão 6 — Busca e Teste com find, some e every

## Array de Estoque

```javascript
const estoque = [
  { codigo: 'P001', nome: 'Notebook', preco: 4500, estoque: 5, categoria: 'informática' },
  { codigo: 'P002', nome: 'Mouse', preco: 80, estoque: 20, categoria: 'informática' },
  { codigo: 'P003', nome: 'Teclado Mecânico', preco: 350, estoque: 0, categoria: 'informática' },
  { codigo: 'P004', nome: 'Monitor 27', preco: 1800, estoque: 3, categoria: 'informática' },
  { codigo: 'M001', nome: 'Cadeira Ergonômica', preco: 2500, estoque: 2, categoria: 'mobiliário' },
  { codigo: 'M002', nome: 'Mesa Digital', preco: 3200, estoque: 1, categoria: 'mobiliário' },
];
```

## a) Produto com código P003

```javascript
const produtoP003 = estoque.find(p => p.codigo === 'P003');
console.log('P003:', produtoP003);
```

**Resultado:**

## b) Existe produto acima de R$5000?

```javascript
const temAcima5000 = // implemente com .some()
console.log('Tem produto acima de R$5000?', temAcima5000);
```

**Resultado:**

## c) Todos os produtos têm estoque > 0?

```javascript
const todosComEstoque = // implemente com .every()
console.log('Todos com estoque?', todosComEstoque);
```

**Resultado:**

## d) Existe produto com estoque zero?

```javascript
const temEstoqueZero = // implemente com .some()
console.log('Tem estoque zero?', temEstoqueZero);
```

**Resultado:**

## e) Primeiro produto da categoria informática

```javascript
const primeiroInformatica = // implemente com .find()
console.log('Primeiro informática:', primeiroInformatica);
```

**Resultado:**

## Conclusão

Em 2-3 frases: qual método (find, some, every) você acha mais útil e por quê?
~~~~

---

## Questão 7: Pipeline com Method Chaining

**Conceito-chave:** Method chaining — encadear `.filter()`, `.map()` e `.reduce()` em um pipeline (Aula 14, Seção 7).

**Objetivo:** Demonstrar que você consegue construir pipelines de transformação de dados encadeando múltiplos métodos.

**Passos de Execução:**

1. Dado o array de pedidos abaixo, construa UM pipeline que:
   a. Filtre apenas pedidos com status 'entregue'
   b. Filtre apenas pedidos com total > 50
   c. Mapeie para objetos `{ cliente, total }`
   d. Use `.reduce()` para somar o total dos pedidos resultantes
2. Depois, crie um pipeline separado que agrupe os pedidos por status usando `.reduce()`, exibindo quantos pedidos existem em cada status

```javascript
const pedidos = [
  { id: 1, cliente: 'Ana', total: 120, status: 'entregue' },
  { id: 2, cliente: 'João', total: 45, status: 'entregue' },
  { id: 3, cliente: 'Maria', total: 200, status: 'preparando' },
  { id: 4, cliente: 'Ana', total: 30, status: 'entregue' },
  { id: 5, cliente: 'Pedro', total: 80, status: 'fila' },
  { id: 6, cliente: 'João', total: 150, status: 'preparando' },
  { id: 7, cliente: 'Maria', total: 60, status: 'entregue' },
];
```

**Entrega:** crie `entregas-aula14/07-chaining-pipeline.md`:

~~~~
# Questão 7 — Pipeline com Method Chaining

## Array de Pedidos

```javascript
const pedidos = [
  { id: 1, cliente: 'Ana', total: 120, status: 'entregue' },
  { id: 2, cliente: 'João', total: 45, status: 'entregue' },
  { id: 3, cliente: 'Maria', total: 200, status: 'preparando' },
  { id: 4, cliente: 'Ana', total: 30, status: 'entregue' },
  { id: 5, cliente: 'Pedro', total: 80, status: 'fila' },
  { id: 6, cliente: 'João', total: 150, status: 'preparando' },
  { id: 7, cliente: 'Maria', total: 60, status: 'entregue' },
];
```

## Pipeline 1: Total de pedidos entregues com total > 50

```javascript
const total = pedidos
  .filter(p => p.status === 'entregue')
  .filter(p => p.total > 50)
  .map(p => ({ cliente: p.cliente, total: p.total }))
  .reduce((acc, p) => acc + p.total, 0);

console.log('Total:', total);
```

**Valor do total:**
[preencha]

**Passo a passo — o que cada método retorna:**

- `.filter(p => p.status === 'entregue')` retorna:
  [liste os pedidos que passam]

- `.filter(p => p.total > 50)` retorna:
  [liste os pedidos que passam]

- `.map(p => ({ cliente, total }))` retorna:
  [liste os objetos resultantes]

- `.reduce(...)` retorna:
  [valor final]

## Pipeline 2: Agrupar pedidos por status

```javascript
const porStatus = pedidos.reduce((acc, p) => {
  acc[p.status] = (acc[p.status] || 0) + 1;
  return acc;
}, {});
console.log('Pedidos por status:', porStatus);
```

**Resultado esperado:**
```
{ entregue: 4, preparando: 2, fila: 1 }
```

**Resultado obtido:**

## Conclusão

Em 2-3 frases: como o method chaining melhora a legibilidade do código comparado a fazer cada operação separadamente?
~~~~

---

## Questão 8: Projeto Progressivo — Refatorar o Gerenciador de Tarefas

**Conceito-chave:** Refatorar o Gerenciador de Tarefas — substituir `for` por `.forEach()`, adicionar `.filter()` e `.map()` (Aula 14, Seções 5-7).

**Objetivo:** Demonstrar que você consegue aplicar arrow functions, `.forEach()`, `.filter()` e `.map()` na prática, refatorando o Gerenciador de Tarefas construído nas aulas anteriores.

**Passos de Execução:**

1. Abra seu Gerenciador de Tarefas (`index.html` ou o arquivo onde você mantém o projeto)
2. Localize os loops `for` que iteram sobre o array de tarefas
3. Substitua cada loop `for` por `.forEach()` com arrow function
4. Adicione uma função `filtrarPendentes()` que usa `.filter()`
5. Adicione uma função `exibirFormatado()` que usa `.map()` para criar strings formatadas e `.forEach()` para exibir
6. (Desafio opcional) Adicione uma função `contarPorStatus()` que usa `.reduce()` para contar tarefas concluídas vs pendentes

**Entrega:** crie `entregas-aula14/08-refatorar-gerenciador.md`:

~~~~
# Questão 8 — Refatorar o Gerenciador de Tarefas

## Estrutura Atual do Gerenciador

Descreva brevemente como está seu Gerenciador atualmente (quais funções existem, como estão estruturadas):

[Descreva]

## Antes e Depois: Substituindo for por forEach

**Trecho original com `for`:**

```javascript
// Cole aqui o código original com for
```

**Trecho refatorado com `.forEach()`:**

```javascript
// Cole aqui o código refatorado
```

## Nova função: filtrarPendentes()

```javascript
function filtrarPendentes() {
  // Implemente usando .filter()
}
```

**Como testei que funciona:**

[Descreva o teste que você fez e o resultado]

## Nova função: exibirFormatado()

```javascript
function exibirFormatado() {
  // Implemente usando .map() + .forEach()
}
```

**Como testei que funciona:**

[Descreva o teste e o resultado]

## (Desafio) Nova função: contarPorStatus()

```javascript
function contarPorStatus() {
  // Implemente usando .reduce()
  // Retorne um objeto { concluidas: N, pendentes: N }
}
```

**Como testei que funciona:**

[Descreva o teste e o resultado]

## Reflexão

Em 3-5 frases: O que mudou na legibilidade do código depois da refatoração? O código ficou mais fácil de entender? Você sentiu alguma dificuldade específica?
~~~~

---

## Checklist Final: Pronto para a Aula 15?

Marque cada item só quando conseguir fazê-lo **sem consultar a aula**:

- [ ] **Explicar** o conceito de função como valor (first-class citizen): sei que funções podem ser guardadas em variáveis, passadas como argumento e retornadas
- [ ] **Escrever** arrow functions em todas as variantes: com e sem parênteses, retorno implícito e explícito, objeto com parênteses
- [ ] **Criar e usar** callbacks: sei passar uma função como argumento para outra função
- [ ] **Usar** `.forEach()` para iterar arrays de forma declarativa (sem `for`)
- [ ] **Usar** `.map()` para transformar arrays, sabendo que ele NÃO modifica o original
- [ ] **Usar** `.filter()` para selecionar elementos, sabendo que ele cria um novo array
- [ ] **Usar** `.reduce()` para acumular valores (soma, contagem, agrupamento)
- [ ] **Usar** `.find()`, `.some()` e `.every()` para buscar e testar elementos
- [ ] **Aplicar** method chaining — encadear `.filter().map().forEach()` ou `.filter().map().reduce()` em um pipeline
- [ ] **Refatorar** o Gerenciador de Tarefas — trocar loops `for` por HOFs de array

> *Acertou todos? Você está pronto para a Aula 15, onde vamos explorar Prototypes e herança prototipal — você vai descobrir por que métodos como `.map()` e `.filter()` existem em todo array e como criar suas próprias cadeias de herança entre objetos. Travou em algum? Releia a seção indicada na questão correspondente antes de avançar.*

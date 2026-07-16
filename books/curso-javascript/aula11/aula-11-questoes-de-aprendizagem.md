---
titulo: "JavaScript — Do Zero ao Profissional"
modulo: "01"
---

# JavaScript — Do Zero ao Profissional Aula 11 — Questões de Aprendizagem

## Como Usar Este Arquivo

Este arquivo é o seu **checkpoint de domínio** da Aula 11. A pergunta central é: *"eu realmente entendi escopo, hoisting e closure?"*

Cada questão abaixo testa UM conceito-chave da aula. Você deve fazer todas na ordem, sem consultar a aula — se travar, a seção indicada em **Conceito-chave** mostra onde revisar.

**Como proceder:**

1. Crie uma pasta `entregas-aula11/` na mesma pasta onde você salva seus exercícios
2. Para cada questão, crie um arquivo separado seguindo o template de entrega
3. Preencha o template com SUAS respostas — sem consultar a aula
4. Só avance para a próxima questão quando a anterior estiver completa
5. Ao final, marque os itens do **Checklist Final** — todos precisam estar verdes

> **Dica:** A questão 4 é especial — ela conecta escopo ao Gerenciador de Tarefas que você construiu nas aulas 9 e 10. Volte ao código do Gerenciador se precisar.

---

## Questão 1: Diagnóstico de Escopo — Quem Vê Quem

**Conceito-chave:** Aula 11, Seções 1, 2, 3.

**Objetivo:** Identificar o escopo de cada variável em um trecho de código e explicar quem pode acessar quem, aplicando as três regras da analogia da casa.

**Passos de Execução:**

1. Analise o código abaixo e identifique o escopo de CADA variável (global, local à função, local ao bloco)
2. Preencha a tabela no template classificando cada variável
3. Responda às perguntas de reflexão

**Entrega:** crie `entregas-aula11/01-diagnostico-escopo.md`:

~~~~
# Questão 1 — Diagnóstico de Escopo

## Código Analisado

```javascript
let app = "MeuApp";

function configurar() {
  let tema = "escuro";
  const versao = "2.0";

  if (true) {
    let idioma = "pt-BR";
    var cache = "ativo";
    console.log(app);
    console.log(tema);
  }

  console.log(cache);
  console.log(idioma);
}

configurar();
console.log(app);
console.log(tema);
```

## Tabela de Classificação

| Variável | Escopo (Global / Local a configurar / Local ao bloco if) | Por que este é o escopo? |
|---|---|---|
| `app` | | |
| `tema` | | |
| `versao` | | |
| `idioma` | | |
| `cache` | | |

## Perguntas de Reflexão

1. Quais console.log vão executar sem erro? Liste a linha e o valor exibido.

2. Quais console.log vão lançar ReferenceError? Explique POR QUE em cada caso: qual regra da casa foi violada?

3. Por que `cache` se comporta diferente de `idioma` mesmo os dois estando dentro do mesmo bloco `if`?

## Conclusão

Em até 5 frases: qual foi a principal diferença entre escopo de bloco e escopo de função que este exercício revelou?
~~~~

---

## Questão 2: var vs let em Blocos — A Diferença Que Importa

**Conceito-chave:** Aula 11, Seções 2, 4.

**Objetivo:** Prever e comprovar o comportamento diferente de `var` e `let` dentro de blocos `if` e `for`, explicando por que `var` é problemático.

**Passos de Execução:**

1. Analise os dois trechos de código fornecidos
2. Preveja a saída de cada console.log antes de executar
3. Explique a diferença de comportamento entre `var` e `let` em cada caso

**Entrega:** crie `entregas-aula11/02-var-vs-let.md`:

~~~~
# Questão 2 — var vs let em Blocos

## Trecho 1 — var dentro de if

```javascript
if (true) {
  var a = 10;
  let b = 20;
}
console.log(a);
console.log(b);
```

**Previsão — o que cada console.log exibe?**

- `console.log(a)` exibe: _________

- `console.log(b)` exibe: _________

**Explicação:** Por que `a` funciona e `b` não?

## Trecho 2 — var vs let em for

```javascript
for (var i = 0; i < 3; i++) {
  // loop
}
console.log("i após o for (var):", i);

for (let j = 0; j < 3; j++) {
  // loop
}
console.log("j após o for (let):", j);
```

**Previsão — o que cada console.log exibe?**

- i após o for (var): _________

- j após o for (let): _________

**Explicação:** Por que `i` ainda existe depois do `for` mas `j` não?

## Conclusão

Em 3-4 frases: qual regra prática você vai usar daqui em diante para escolher entre `var` e `let` em blocos?
~~~~

---

## Questão 3: Escopo de Função na Prática

**Conceito-chave:** Aula 11, Seção 3.

**Objetivo:** Criar funções com variáveis locais e demonstrar que o escopo externo NÃO acessa variáveis internas, enquanto a função interna acessa variáveis externas.

**Passos de Execução:**

1. Crie uma função `externa` que declara `let mensagem = "Olá da externa";`
2. Dentro dela, crie uma função `interna` que declara `let segredo = "só interna sabe";`
3. Dentro de `interna`, exiba `mensagem` (da externa) e `segredo` (própria) com console.log
4. Fora de `externa`, tente acessar `mensagem` e `segredo`

**Entrega:** crie `entregas-aula11/03-escopo-funcao.md`:

~~~~
# Questão 3 — Escopo de Função na Prática

## Código Completo

```javascript
// Escreva aqui o código das funções aninhadas conforme os passos

```

## Tabela de Acessibilidade

Complete a tabela indicando se o acesso funciona (✅) ou lança erro (❌):

| Escopo que Acessa | `mensagem` | `segredo` |
|---|---|---|
| Dentro de `interna` | | |
| Dentro de `externa` (fora de `interna`) | | |
| Fora de `externa` (global) | | |

## Perguntas de Reflexão

1. Por que `mensagem` é acessível dentro de `interna` mas `segredo` NÃO é acessível dentro de `externa`?

2. Se você criasse uma SEGUNDA função ao lado de `externa` (mesmo nível), ela conseguiria acessar `mensagem`? Por quê?

## Conclusão

Em 2-3 frases: resuma a regra de visibilidade entre funções aninhadas com suas próprias palavras.
~~~~

---

## Questão 4: Global vs Local no Gerenciador (PROJETO PROGRESSIVO)

**Conceito-chave:** Aula 11, Seção 5.

**Objetivo:** Analisar o código do Gerenciador de Tarefas (Aula 10) e classificar CADA variável como global, local a função ou local a bloco, explicando por que `tarefas` funciona em todas as funções.

**Passos de Execução:**

1. Recupere o código do seu Gerenciador de Tarefas (versão refatorada da Aula 10)
2. Identifique TODAS as variáveis declaradas (globais, parâmetros, locais, de bloco)
3. Preencha a tabela classificando cada uma
4. Responda à pergunta central: por que `tarefas` funciona em todas as funções?

**Entrega:** crie `entregas-aula11/04-gerenciador-escopo.md`:

~~~~
# Questão 4 — Global vs Local no Gerenciador

## Código do Gerenciador

Copie aqui o código COMPLETO do seu Gerenciador de Tarefas da Aula 10:

```javascript
// SEU CÓDIGO AQUI

```

## Tabela de Classificação

| Variável | Escopo (Global / Local a função / Local a bloco) | Função onde foi declarada (ou "topo do script") | Por que este escopo? |
|---|---|---|---|
| `tarefas` | | | |
| Exemplo: `opcao` | Local a função | `exibirMenu` | Declarada com `let` dentro de `exibirMenu` |
| | | | |
| | | | |

*Adicione quantas linhas forem necessárias para cobrir TODAS as variáveis do seu Gerenciador.*

## Pergunta Central

Por que `tarefas` é acessível dentro de TODAS as funções do Gerenciador (exibirMenu, adicionarTarefa, listarTarefas) mesmo sendo declarada UMA ÚNICA vez no topo do script? Explique usando a analogia da casa com cômodos.

## Conclusão

O que mudou na sua compreensão do Gerenciador depois de classificar o escopo de cada variável?
~~~~

---

## Questão 5: Shadowing — Quando Duas Têm o Mesmo Nome

**Conceito-chave:** Aula 11, Seção 6.

**Objetivo:** Criar shadowing intencional e prever a saída do console.log em cada ponto do código, distinguindo quando uma variável local SOMBREIA a global.

**Passos de Execução:**

1. Crie uma variável global `let valor = 100;`
2. Crie uma função `testeShadowing` que declara `let valor = 200;` (shadowing)
3. Dentro da função, exiba `valor` com console.log antes e depois da declaração local
4. Fora da função, exiba `valor` novamente
5. Preveja cada saída ANTES de executar

**Entrega:** crie `entregas-aula11/05-shadowing.md`:

~~~~
# Questão 5 — Shadowing

## Código

```javascript
let valor = 100; // global

function testeShadowing() {
  console.log("1 - valor ANTES de declarar:", valor);
  let valor = 200;
  console.log("2 - valor DEPOIS de declarar:", valor);
}

testeShadowing();
console.log("3 - valor FORA da funcao:", valor);
```

## Previsões (complete antes de executar)

| console.log | Previsão (valor ou erro) | Justificativa |
|---|---|---|
| 1 - valor ANTES de declarar | | |
| 2 - valor DEPOIS de declarar | | |
| 3 - valor FORA da funcao | | |

## Verificação

Execute o código no Console do navegador. Suas previsões estavam corretas?

- [ ] Todas as previsões estavam corretas
- [ ] A previsão do console.log 1 estava errada — por quê?
- [ ] A previsão do console.log 2 estava errada — por quê?
- [ ] A previsão do console.log 3 estava errada — por quê?

## Pergunta de Reflexão

A linha 8 (`console.log("1 - valor ANTES de declarar:", valor)`) dentro da função lança ReferenceError em vez de exibir a global. Por que isso acontece? (Dica: envolve hoisting e TDZ.)

## Conclusão

Em 2-3 frases: qual cuidado você precisa ter ao declarar variáveis dentro de funções que têm o MESMO nome de variáveis globais?
~~~~

---

## Questão 6: Hoisting e TDZ — Prevendo o Comportamento

**Conceito-chave:** Aula 11, Seção 7.

**Objetivo:** Prever o que acontece ao acessar variáveis `var`, `let`, `const` e funções ANTES da declaração, explicando o mecanismo de hoisting de cada tipo.

**Passos de Execução:**

1. Analise cada um dos 4 cenários fornecidos
2. Preveja o resultado de cada console.log (valor impresso, undefined, ReferenceError ou string da função)
3. Explique o mecanismo de hoisting que causa aquele comportamento

**Entrega:** crie `entregas-aula11/06-hoisting-tdz.md`:

~~~~
# Questão 6 — Hoisting e TDZ

## Cenários

### Cenário A — var

```javascript
console.log(a);
var a = 10;
console.log(a);
```

### Cenário B — let

```javascript
console.log(b);
let b = 20;
console.log(b);
```

### Cenário C — const

```javascript
console.log(c);
const c = 30;
console.log(c);
```

### Cenário D — function

```javascript
console.log(d());
function d() {
  return "executou!";
}
console.log(d());
```

## Tabela de Previsões

| Cenário | O que o primeiro console.log exibe? | O que o segundo console.log exibe? | Explicação do hoisting |
|---|---|---|---|
| A — var | | | |
| B — let | | | |
| C — const | | | |
| D — function | | | |

## Pergunta Extra — TDZ em Bloco

```javascript
let x = "global";

if (true) {
  console.log(x);
  let x = "local";
}
```

O que este código exibe? Explique por que o `x` global não é usado.

## Conclusão

Em 3-4 frases: resuma a diferença de hoisting entre `var`, `let`/`const` e `function`. Qual deles tem o comportamento mais surpreendente para um iniciante?
~~~~

---

## Questão 7: Closure Mínima — Função Que Lembra

**Conceito-chave:** Aula 11, Seção 8.

**Objetivo:** Criar um closure simples e demonstrar que a função interna "lembra" das variáveis do escopo externo mesmo depois que a função externa terminou.

**Passos de Execução:**

1. Crie uma função `criarSaudacao` que recebe um parâmetro `nome`
2. Dentro dela, declare `let saudacao = "Olá";`
3. Retorne uma função interna que exibe `saudacao + ", " + nome + "!"`
4. Atribua o retorno a `const dizer = criarSaudacao("Maria");`
5. Chame `dizer()` três vezes e observe o resultado

**Entrega:** crie `entregas-aula11/07-closure.md`:

~~~~
# Questão 7 — Closure Mínima

## Código

```javascript
function criarSaudacao(nome) {
  let saudacao = "Ola";
  // retorne aqui a função interna

}

const dizer = criarSaudacao("Maria");
```

## Teste de Chamadas Múltiplas

Complete a previsão antes de executar:

| Chamada | O que `dizer()` exibe? |
|---|---|
| `dizer()` — 1a chamada | |
| `dizer()` — 2a chamada | |
| `dizer()` — 3a chamada | |

## Perguntas de Reflexão

1. O parâmetro `nome` da função externa `criarSaudacao` — ele ainda existe na memória quando `dizer()` é chamado? Por quê?

2. O que acontece se você criar `const dizer2 = criarSaudacao("João");` — `dizer2()` exibirá o mesmo que `dizer()`? Explique.

3. É possível acessar `saudacao` ou `nome` diretamente (sem chamar `dizer()`)? Por quê?

## Conclusão

Em 2-3 frases: o que significa dizer que uma closure "carrega uma mochila invisível"?
~~~~

---

## Questão 8: Refatoração com Boas Práticas

**Conceito-chave:** Aula 11, Seção 9.

**Objetivo:** Refatorar um trecho de código movendo variáveis para o escopo mais restrito possível, substituindo `var` por `let`/`const` onde aplicável e explicando cada modificação.

**Passos de Execução:**

1. Analise o código original fornecido — identifique TODOS os problemas de escopo
2. Crie uma versão refatorada aplicando as 4 regras de boas práticas da seção 9
3. Preencha a tabela explicando cada modificação feita

**Entrega:** crie `entregas-aula11/08-refatoracao.md`:

~~~~
# Questão 8 — Refatoração com Boas Práticas

## Código Original

```javascript
var nome = "MinhaAplicacao";
var versao = "1.0";

function processarItens() {
  for (var i = 0; i < 5; i++) {
    var item = "Item " + i;
    console.log(item);
  }

  console.log("Valor final de i:", i);
}

function exibirInfo() {
  console.log(nome + " v" + versao);
}

function contar() {
  for (var j = 0; j < 3; j++) {
    var contagem = j + 1;
    console.log("Contagem: " + contagem);
  }
}
```

## Código Refatorado

Reescreva o código acima aplicando as melhores práticas:

```javascript
// SEU CÓDIGO REFATORADO AQUI

```

## Tabela de Modificações

| O quê foi modificado | Como era (original) | Como ficou (refatorado) | Por que (qual regra da seção 9) |
|---|---|---|---|
| Exemplo | `var nome` | `const nome` | Regra 3: preferir `const` como padrão, valor nunca reatribuído |
| | | | |
| | | | |
| | | | |

*Adicione quantas linhas forem necessárias.*

## Perguntas de Reflexão

1. No código original, a variável `i` vaza do `for`. Na prática real, que tipo de bug isso pode causar?

2. Qual a vantagem de declarar `item` e `contagem` com `let` dentro do próprio `for`/bloco em vez de `var`?

## Conclusão

Em 2-3 frases: qual das 4 regras de boas práticas você considera a MAIS importante e por quê?
~~~~

---

## Checklist Final: Pronto para a Aula 12?

Marque cada item **apenas** quando conseguir fazê-lo **sem consultar a aula**:

- [ ] Sei explicar o conceito de escopo com a analogia da casa e dos cômodos — as três regras de visibilidade
- [ ] Sei identificar o escopo de uma variável observando onde foi declarada: bloco `{}`, função ou topo do script (global)
- [ ] Sei distinguir escopo de bloco (`let`/`const`) de escopo de função (`var`) — e sei por que `var` ignora blocos
- [ ] Sei reconhecer variáveis globais vs locais no Gerenciador de Tarefas — e explicar por que `tarefas` funciona em todas as funções
- [ ] Sei prever o comportamento de shadowing — variável local "esconde" a global mas não a modifica
- [ ] Sei explicar por que `var` permite acesso antes da declaração (undefined) e `let`/`const` lançam ReferenceError na TDZ
- [ ] Sei demonstrar hoisting na prática: `var` sobe com undefined, `let`/`const` na TDZ, `function` sobe completa
- [ ] Sei descrever closure como "função que lembra do escopo onde nasceu" — mesmo após a função externa terminar
- [ ] Sei aplicar boas práticas de escopo: evitar globais, preferir `const`, declarar no escopo mais restrito

> *Acertou todos? Você está pronto para a Aula 12, onde vai aprender sobre **Objetos Literais** — como agrupar múltiplos valores relacionados em uma única estrutura, como se fossem "fichas de cadastro" com etiquetas. Travou em algum? Releia a seção indicada na questão correspondente antes de avançar.*

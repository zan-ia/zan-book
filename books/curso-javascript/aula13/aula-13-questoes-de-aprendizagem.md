---
titulo: "JavaScript — Do Zero ao Profissional — Aula 13 — Questões de Aprendizagem"
modulo: "01"
aula: "13"
---

# JavaScript — Do Zero ao Profissional Aula 13 — Questões de Aprendizagem

## Como Usar Este Arquivo

Este arquivo é o **checkpoint de aprendizagem** da Aula 13. Serve para você verificar se realmente entendeu `this` em JavaScript — não apenas "li e entendi", mas "consigo fazer por conta própria".

A pergunta central é: *eu sei explicar e usar `this` em diferentes contextos sem consultar a aula?*

**Como proceder:**

1. Crie uma pasta `entregas-aula13/` dentro do seu diretório de estudos
2. Faça cada questão na ordem — elas seguem a progressão da aula
3. Cada questão tem um **Objetivo** (o que você vai demonstrar) e **Passos de Execução** (o que fazer)
4. Copie o template de entrega e preencha com suas respostas
5. Só consulte a aula novamente se travar em uma questão — e anote o que não estava claro
6. Ao final, use o **Checklist** para decidir se está pronto para a Aula 14

> ⚡ **Regra de ouro:** se você consegue fazer todas as questões sem consultar a aula, você DOMINA o `this`. Se trava em alguma, releia a seção correspondente e tente de novo.

---

## Questão 1: Identificando `this` em Diferentes Contextos

**Conceito-chave:** Valor de `this` no escopo global e em funções regulares (Aula 13, Seções 3-4).

**Objetivo:** Demonstrar que você consegue prever o valor de `this` em diferentes contextos de chamada.

**Passos de Execução:**

1. Leia cada snippet de código abaixo
2. Determine o valor de `this` no momento indicado pelo comentário `// this = ?`
3. Explique em 1 frase POR QUE `this` tem aquele valor
4. Teste no Console para confirmar

**Entrega:** crie `entregas-aula13/01-identificando-this.md`:

~~~~
# Questão 1 — Identificando `this` em Diferentes Contextos

## Snippet A

```javascript
const animal = {
  tipo: "gato",
  som: "miau",
  emitirSom() {
    console.log(this.som); // this = ?
  }
};
animal.emitirSom();
```

**Valor de `this`:**

[Preencha]

**Por quê:**

[Explique em 1 frase]

**Resultado no console (após testar):**

[Preencha]

## Snippet B

```javascript
function cumprimentar() {
  console.log(this); // this = ?
}
cumprimentar();
```

**Valor de `this`:**

[Preencha]

**Por quê:**

[Explique em 1 frase]

**Resultado no console (após testar):**

[Preencha]

## Snippet C

```javascript
const pessoa = {
  nome: "Lucas",
  falar() {
    console.log("Meu nome é " + this.nome);
  }
};

const fn = pessoa.falar;
fn(); // this dentro de fn = ?
```

**Valor de `this`:**

[Preencha]

**Por quê:**

[Explique em 1 frase]

**Resultado no console (após testar):**

[Preencha]

## Snippet D

```javascript
const produto = {
  nome: "Camiseta",
  preco: 49.90,
  descricao() {
    return this.nome + " custa R$ " + this.preco;
  }
};
console.log(produto.descricao()); // this dentro de descricao = ?
```

**Valor de `this`:**

[Preencha]

**Por quê:**

[Explique em 1 frase]

**Resultado no console (após testar):**

[Preencha]

## Conclusão
Em 2-3 frases, qual padrão você observou sobre o valor de `this` em funções regulares?
~~~~

---

## Questão 2: Criando um Objeto com Método que Usa `this`

**Conceito-chave:** Métodos de objeto com `this` (Aula 13, Seção 4).

**Objetivo:** Construir um objeto com propriedades e um método que usa `this` para acessá-las.

**Passos de Execução:**

1. Crie um objeto `livro` com as propriedades: `titulo`, `autor`, `ano`, `preco`
2. Adicione um método `resumo()` que retorna uma string formatada com todas as informações usando `this`
3. Adicione um método `aplicarDesconto(percentual)` que atualiza `this.preco` com o desconto aplicado
4. Teste no Console: chame `resumo()`, aplique 10% de desconto, chame `resumo()` novamente

**Entrega:** crie `entregas-aula13/02-objeto-livro.md`:

~~~~
# Questão 2 — Criando um Objeto com Métodos que Usam `this`

## O Objeto

```javascript
[Insira seu código aqui]
```

## Teste 1: Resumo Inicial

Chamada: `console.log(livro.resumo());`

Resultado no console:

[Preencha]

## Teste 2: Aplicar Desconto

Chamada: `livro.aplicarDesconto(10); console.log(livro.resumo());`

Resultado no console:

[Preencha]

## Reflexão

Por que o método `aplicarDesconto` conseguiu modificar o `preco` do objeto mesmo sem receber o objeto como parâmetro?

[Explique em 2-3 frases]
~~~~

---

## Questão 3: Arrow Function vs. Função Regular — Comparando `this`

**Conceito-chave:** Comportamento de `this` em arrow functions vs. funções regulares (Aula 13, Seção 5).

**Objetivo:** Demonstrar que arrow functions NÃO têm `this` próprio — herdam do escopo pai.

**Passos de Execução:**

1. Crie um objeto `testeThis` com uma propriedade `nome` e DOIS métodos:
   - `regular()` usando função regular que exibe `this.nome`
   - `arrow()` usando arrow function que exibe `this.nome`
2. Chame ambos os métodos
3. Explique por que os resultados são diferentes
4. Crie um SEGUNDO cenário: um método regular `contador()` que dentro dele tem uma arrow function que acessa `this` do método pai

**Entrega:** crie `entregas-aula13/03-arrow-vs-regular.md`:

~~~~
# Questão 3 — Arrow Function vs. Função Regular

## Cenário 1: Métodos Diretos no Objeto

```javascript
[Insira seu código com os dois métodos]
```

**Resultado da chamada `testeThis.regular()`:**

[Preencha]

**Resultado da chamada `testeThis.arrow()`:**

[Preencha]

**Explicação da diferença (2-3 frases):**

[Preencha]

## Cenário 2: Arrow Function Dentro de Método Regular

```javascript
const objeto = {
  valor: 42,
  executar() {
    const arrowInterna = () => {
      console.log(this.valor);
    };
    arrowInterna();
  }
};
objeto.executar(); // Resultado: ?
```

**Resultado esperado (antes de testar):**

[Preencha]

**Resultado real (após testar):**

[Preencha]

**Explicação de por que a arrow function dentro do método consegue acessar `this.valor`:**

[Explique em 2-3 frases]
~~~~

---

## Questão 4: Corrigindo um Método Extraído com `.bind()`

**Conceito-chave:** `.bind()` para fixar `this` em um método extraído (Aula 13, Seção 6-7).

**Objetivo:** Diagnosticar a perda de `this` ao extrair um método e corrigir com `.bind()`.

**Passos de Execução:**

1. Crie um objeto `usuario` com propriedades `nome` e `email`, e um método `exibirInfo()` que exibe ambas
2. Extraia o método para uma variável `const exibir = usuario.exibirInfo` e chame `exibir()` — observe que `this` se perde
3. Use `.bind()` para criar uma nova função `exibirFixado` que sempre tenha `this` = `usuario`
4. Chame `exibirFixado()` e confirme que funciona

**Entrega:** crie `entregas-aula13/04-corrigindo-bind.md`:

~~~~
# Questão 4 — Corrigindo Método Extraído com `.bind()`

## O Objeto Original

```javascript
[Insira o objeto usuario com nome, email e exibirInfo]
```

## Passo 1: Método Funciona Normalmente

Chamada: `usuario.exibirInfo();`

Resultado:

[Preencha]

## Passo 2: Método Extraído Perde `this`

Chamada: `const exibir = usuario.exibirInfo; exibir();`

Resultado:

[Preencha]

**Explicação do erro (1 frase):**

[Preencha]

## Passo 3: Correção com `.bind()`

```javascript
const exibirFixado = [Insira a solução com .bind()]
exibirFixado();
```

Resultado:

[Preencha]

## Reflexão

Em que situações do dia a dia você pode encontrar o problema de "método extraído perde `this`"?

[Responda em 2-3 frases]
~~~~

---

## Questão 5: Emprestando Métodos com `.call()` e `.apply()`

**Conceito-chave:** `.call()` e `.apply()` para invocar funções com `this` específico (Aula 13, Seção 6).

**Objetivo:** Usar `.call()` e `.apply()` para "emprestar" métodos entre objetos.

**Passos de Execução:**

1. Crie dois objetos `usuario1` e `usuario2`, cada um com `nome` e `saldo`
2. Crie um terceiro objeto `banco` com um método `extrato()` que usa `this.nome` e `this.saldo`
3. Use `.call()` para executar `banco.extrato()` com os dados de `usuario1`
4. Crie um método `adicionarAoSaldo(valor)` em `banco` que incrementa `this.saldo`
5. Use `.apply()` para adicionar um valor ao saldo de `usuario2` (argumento deve estar em array)

**Entrega:** crie `entregas-aula13/05-emprestando-metodos.md`:

~~~~
# Questão 5 — Emprestando Métodos com `.call()` e `.apply()`

## Os Objetos

```javascript
const usuario1 = {
  nome: "Maria",
  saldo: 5000
};

const usuario2 = {
  nome: "João",
  saldo: 3000
};

const banco = {
  // Método extrato() que usa this.nome e this.saldo
  extrato() {
    // [Preencha: use this.nome e this.saldo para montar a string]
  },
  // Método adicionarAoSaldo(valor)
  adicionarAoSaldo(valor) {
    // [Preencha: adicione valor ao this.saldo]
  }
};
```

## Passo 1: Emprestar com `.call()`

Chamada: `console.log(banco.extrato.call(usuario1));`

Resultado:

[Preencha]

## Passo 2: Emprestar com `.apply()`

Chamada: `banco.adicionarAoSaldo.apply(usuario2, [1500]); console.log(banco.extrato.call(usuario2));`

Resultado:

[Preencha]

## Passo 3: Verificar Objetos Originais

`console.log(usuario1.saldo);` → [Preencha]
`console.log(usuario2.saldo);` → [Preencha]

## Conclusão

Em 2-3 frases, explique: os objetos `usuario1` e `usuario2` foram modificados? Por quê?

[Preencha]
~~~~

---

## Questão 6: Diagnóstico e Correção de Armadilhas de `this`

**Conceito-chave:** Armadilhas comuns de `this` e como corrigi-las (Aula 13, Seção 7).

**Objetivo:** Identificar bugs de `this` em código alheio e corrigi-los.

**Passos de Execução:**

1. Analise cada snippet abaixo que contém um bug de `this`
2. Identifique qual armadilha está presente
3. Corrija o código
4. Explique a correção

**Entrega:** crie `entregas-aula13/06-diagnosticando-armadilhas.md`:

~~~~
# Questão 6 — Diagnóstico e Correção de Armadilhas de `this`

## Bug A: Saudação Quebrada

```javascript
const pessoa = {
  nome: "Elena",
  saudar: () => {
    console.log("Olá, eu sou " + this.nome);
  }
};
pessoa.saudar(); // undefined
```

**Armadilha identificada:**

[Arrow function como método / Método extraído / Função aninhada]

**Código corrigido:**

```javascript
[Insira a correção]
```

**Por que a correção funciona:**

[Explique em 1-2 frases]

## Bug B: Apresentação Perdida

```javascript
const aluno = {
  nome: "Pedro",
  notas: [8, 9, 7],
  mostrarNome() {
    console.log("Aluno: " + this.nome);

    function exibirNotas() {
      console.log("Notas: " + this.notas.join(", "));
    }

    exibirNotas(); // Erro: this.notas is undefined
  }
};
aluno.mostrarNome();
```

**Armadilha identificada:**

[Arrow function como método / Método extraído / Função aninhada]

**Código corrigido:**

```javascript
[Insira a correção]
```

**Por que a correção funciona:**

[Explique em 1-2 frases]

## Bug C: Relógio Desligado

```javascript
const relogio = {
  marca: "Rolex",
  exibirMarca: function() {
    console.log("Marca: " + this.marca);
  }
};

const exibir = relogio.exibirMarca;
exibir(); // undefined
```

**Armadilha identificada:**

[Arrow function como método / Método extraído / Função aninhada]

**Código corrigido:**

```javascript
[Insira a correção]
```

**Por que a correção funciona:**

[Explique em 1-2 frases]

## Conclusão
Em 2-3 frases, qual conselho você daria para um colega que está aprendendo `this` e cometendo esses erros?
~~~~

---

## Questão 7: Projeto — Objeto `configuracao` com Método `exibir()`

**Conceito-chave:** Aplicação de `this` em um artefato prático — o objeto `configuracao` (Aula 13, Seções 4 e 7).

**Objetivo:** Construir um objeto de configuração com método que usa `this` para referenciar suas próprias propriedades.

**Passos de Execução:**

1. Crie um objeto `configuracao` com as propriedades:
   - `tema` (string: "escuro" ou "claro")
   - `idioma` (string: "pt-BR", "en-US", etc.)
   - `notificacoes` (boolean: `true` ou `false`)
   - `versao` (string: "1.0")
2. Adicione um método `exibir()` que retorna uma string formatada com TODAS as configurações, usando `this` para acessar cada propriedade
3. Adicione um método `atualizar(chave, valor)` que atualiza uma propriedade do objeto usando `this[chave] = valor`
4. Teste: exiba as configurações, atualize o tema para "claro", exiba novamente
5. Extraia o método `exibir` para uma variável e veja se perde `this`. Depois corrija com `.bind()`

**Entrega:** crie `entregas-aula13/07-configuracao.md`:

~~~~
# Questão 7 — Objeto `configuracao` com Método `exibir()`

## O Objeto

```javascript
const configuracao = {
  tema: "escuro",
  idioma: "pt-BR",
  notificacoes: true,
  versao: "1.0",
  exibir() {
    // Retorna string formatada com todas as configs usando this
  },
  atualizar(chave, valor) {
    // Atualiza propriedade usando this[chave]
  }
};
```

Preencha os métodos:

```javascript
exibir() {
  // [Preencha: retorne uma string formatada com this.tema, this.idioma]
},

atualizar(chave, valor) {
  // [Preencha: use this[chave] para modificar a propriedade]
}
```

## Teste 1: Configurações Iniciais

Chamada: `console.log(configuracao.exibir());`

Resultado:

[Preencha]

## Teste 2: Atualizar Configuração

Chamada: `configuracao.atualizar("tema", "claro"); console.log(configuracao.exibir());`

Resultado:

[Preencha]

## Teste 3: Extrair e Perder `this`

```javascript
const exibirConfig = configuracao.exibir;
console.log(exibirConfig());
```

Resultado:

[Preencha]

**Explicação do que aconteceu:**

[Explique em 1-2 frases]

## Teste 4: Corrigir com `.bind()`

```javascript
const exibirFixado = configuracao.exibir.bind(configuracao);
console.log(exibirFixado());
```

Resultado:

[Preencha]

## Reflexão Final

Como você usaria o objeto `configuracao` em um programa real (ex: no Gerenciador de Tarefas)?

[Responda em 3-4 frases. Pense: onde você armazenaria as preferências do usuário? Como o Gerenciador consultaria essas configurações?]
~~~~

---

## Checklist Final: Pronto para a Aula 14?

Marque cada item só quando conseguir fazê-lo **sem consultar a aula**:

- [ ] **Explico** o que é `this` usando a analogia "eu muda conforme quem fala"
- [ ] **Sei qual** é o valor de `this` no escopo global do navegador
- [ ] **Diferencio** `this` em funções soltas vs. métodos de objeto (regra do ponto)
- [ ] **Crio** objetos com métodos que usam `this` para acessar e modificar propriedades
- [ ] **Explico** por que arrow functions não têm `this` próprio e que herdam do escopo pai
- [ ] **Uso** `.bind()` para fixar permanentemente o `this` de uma função
- [ ] **Uso** `.call()` e `.apply()` para invocar funções com `this` específico
- [ ] **Diagnostico** as três armadilhas comuns (método extraído, arrow como método, função aninhada)
- [ ] **Crio** um objeto `configuracao` com método `exibir()` que referencia propriedades com `this`

> *Acertou todos? Você está pronto para a Aula 14, onde vai mergulhar em arrow functions (todas as variações de sintaxe), callbacks e Higher-Order Functions — incluindo `.map()`, `.filter()` e `.reduce()` nos arrays. Travou em algum? Releia a seção indicada na questão correspondente antes de avançar.*

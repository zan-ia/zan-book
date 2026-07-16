---
titulo: "JavaScript — Do Zero ao Profissional — Aula 12 — Questões de Aprendizagem"
modulo: "01"
aula: "12"
---

# JavaScript — Do Zero ao Profissional Aula 12 — Questões de Aprendizagem

## Como Usar Este Arquivo

Este arquivo contém as questoes de **checkpoint de aprendizagem** da Aula 12. A pergunta central e: "eu realmente entendi objetos?"

Cada questao verifica um conceito-chave da aula. O objetivo é que você consiga fazer **sem consultar a aula** — se travar, volte à aula e releia a seção indicada.

**Instrucoes:**

1. Crie uma pasta `entregas-aula-12/` dentro da pasta `aula12/`
2. Para cada questao, crie o arquivo de entrega conforme o templaté indicado
3. Faca as questoes em ordem — elas seguem a progressão da aula
4. Ao final, o Checklist mostra se você está pronto para a Aula 13

---

## Questao 1: Criando uma Ficha de Cadastro

**Conceito-chave:** Objeto como agrupamento chave-valor (Aula 12, Seção 1).

**Objetivo:** Demonstrar que você entende o conceito de par chave-valor criando um objeto literal a partir de dados fornecidos.

**Passos de Execucao:**

1. Crie um objeto chamado `cliente` com as propriedades: `nome` ("Carlos"), `idade` (35), `email` ("carlos@email.com"), `ativo` (true)
2. Exiba o objeto completo no console com `console.log(cliente)`
3. Exiba apenas a propriedade `nome` usando dot notation
4. Verifique o tipo do objeto com `typeof cliente`

**Entrega:** crie `entregas-aula-12/01-objeto-cliente.md`:

~~~~
# Questao 1 — Criando uma Ficha de Cadastro

## Código executado

```javascript

// Cole aqui o código que você executou no console

```

## Saida do console

```
Cole aqui a saida que o console exibiu
```

## Reflexao

- O que o `typeof cliente` retornou? Por que?

```
Sua resposta:
```

- Como você acessou a propriedade `nome`? Poderia ter acessado de outra forma?

```
Sua resposta:
```
~~~~

---

## Questao 2: Acessando Propriedades — Dot vs Bracket

**Conceito-chave:** Dot notation e Bracket notation (Aula 12, Seção 4).

**Objetivo:** Demonstrar que você sabe acessar propriedades de um objeto usando ambas as notacoes, inclusive com chave em variável.

**Passos de Execucao:**

1. Dado o objeto abaixo, acesse `marca` com dot notation e com bracket notation:

```javascript
let produto = {
  "nome-do-produto": "Teclado Mecanico",
  marca: "Redragon",
  preco: 250,
  "em-estoque": true
};
```

2. Acesse `nome-do-produto` usando bracket notation (dot notation não funciona aqui — por que?)
3. Armazene a string `"preco"` em uma variável e use bracket notation para acessar o valor

**Entrega:** crie `entregas-aula-12/02-acessando-propriedades.md`:

~~~~
# Questao 2 — Acessando Propriedades

## Código executado

```javascript

// Cole aqui o código que você executou

```

## Saida do console

```
Cole aqui a saida
```

## Perguntas

- Por que `produto.nome-do-produto` não funciona?

```
Sua resposta:
```

- Qual a diferença entre `produto.marca` e `produto["marca"]`?

```
Sua resposta:
```

- Por que `produto[variável]` funciona quando `variável = "preco"`?

```
Sua resposta:
```
~~~~

---

## Questao 3: Manipulando um Objeto Dinamicamente

**Conceito-chave:** Adicionar, modificar e remover propriedades (Aula 12, Seção 5).

**Objetivo:** Demonstrar que você sabe manipular um objeto após a criação — adicionar, modificar e remover propriedades.

**Passos de Execucao:**

1. Crie um objeto `config` vazio: `let config = {};`
2. Adicione as propriedades: `tema` = "claro", `idioma` = "pt-BR", `volume` = 80
3. Modifique `tema` para "escuro"
4. Remova a propriedade `idioma`
5. Exiba o objeto final no console

**Entrega:** crie `entregas-aula-12/03-manipulando-objeto.md`:

~~~~
# Questao 3 — Manipulando um Objeto Dinamicamente

## Código executado

```javascript

// Cole aqui o código que você executou

```

## Saida do console após cada passo

Após adicionar as três propriedades:
```

```

Após modificar tema:
```

```

Após remover idioma:
```

```

## Reflexao

- Depois de remover `idioma`, o que `config.idioma` retorna?

```
Sua resposta:
```
~~~~

---

## Questao 4: Verificando Existencia de Propriedades

**Conceito-chave:** Operador `in` e método `hasOwnProperty` (Aula 12, Seção 6).

**Objetivo:** Demonstrar que você sabe verificar se uma propriedade existe em um objeto e diferenciar propriedades próprias de herdadas.

**Passos de Execucao:**

1. Dado o objeto:

```javascript
let carro = {
  marca: "Honda",
  modelo: "Civic",
  ano: 2022
};
```

2. Verifique se `"marca"` existe em `carro` usando o operador `in`
3. Verifique se `"ano"` existe usando `hasOwnProperty`
4. Verifique se `"toString"` existe usando `in` e depois usando `hasOwnProperty`
5. Explique a diferença nos resultados do passo 4

**Entrega:** crie `entregas-aula-12/04-verificando-existencia.md`:

~~~~
# Questao 4 — Verificando Existencia de Propriedades

## Código executado

```javascript

// Cole aqui o código que você executou

```

## Saida do console

```
Cole aqui a saida
```

## Perguntas

- `"toString" in carro` retornou `true`. Isso significa que `toString` foi definida por você?

```
Sua resposta:
```

- Qual a diferença prática entre `in` e `hasOwnProperty`?

```
Sua resposta:
```
~~~~

---

## Questao 5: Extraindo Chaves, Valores e Pares

**Conceito-chave:** `Object.keys`, `Object.values`, `Object.entries` com iteráção (Aula 12, Seção 6).

**Objetivo:** Demonstrar que você sabe extrair chaves, valores e pares de um objeto e percorre-los com `for...of`.

**Passos de Execucao:**

1. Dado o objeto:

```javascript
let livro = {
  titulo: "1984",
  autor: "George Orwell",
  ano: 1949,
  gênero: "Distopia"
};
```

2. Use `Object.keys(livro)` para obter um array de chaves
3. Use `Object.values(livro)` para obter um array de valores
4. Use `Object.entries(livro)` para obter pares `[chave, valor]`
5. Itere sobre `Object.entries(livro)` com `for...of` e exiba cada par no formato `"chave: valor"`

**Entrega:** crie `entregas-aula-12/05-extraindo-dados.md`:

~~~~
# Questao 5 — Extraindo Chaves, Valores e Pares

## Código executado

```javascript

// Cole aqui o código que você executou

```

## Saida do console

### keys:

```
Cole a saida aqui
```

### values:

```
Cole a saida aqui
```

### entries:

```
Cole a saida aqui
```

### Iterácao com for...of:

```
Cole a saida aqui
```

## Pergunta

- Quantas propriedades o objeto `livro` tem? Como você pode descobrir isso usando `Object.keys`?

```
Sua resposta:
```
~~~~

---

## Questao 6: Projeto — Atualizando o Gerenciador de Tarefas

**Conceito-chave:** Aplicar objetos no Gerenciador de Tarefas — migrar de strings para objetos (Aula 12, Seção 7).

**Objetivo:** Demonstrar que você consegue aplicar o que aprendeu sobre objetos para evoluir o Gerenciador de Tarefas.

**Passos de Execucao:**

1. Abra seu arquivo `index.html` do Gerenciador de Tarefas (criado nas aulas anteriores)
2. Substitua o array `tarefas` — em vez de strings, use objetos com `{ texto, concluida, prioridade }`
3. Atualize `adicionarTarefa()` para adicionar um objeto em vez de string
4. Atualize `listarTarefas()` para exibir status `[x]`/`[ ]`, texto e prioridade
5. Atualize `removerTarefa()` para comparar com `tarefa.texto`
6. Adicione uma função `marcarConcluida()` que modifica `tarefas[índice].concluida`
7. Teste: adicione 3 tarefas, liste, marque uma como concluida, liste novamente, remova uma, liste

**Entrega:** crie `entregas-aula-12/06-gerenciador-objetos.md`:

~~~~
# Questao 6 — Projeto: Atualizando o Gerenciador de Tarefas

## Código completo do arquivo index.html

Cole aqui o conteúdo completo do seu `index.html` atualizado:

```html

```

## Teste realizado

Descreva os comandos que você executou no console e o que cada um exibiu:

1. Adicionar tarefas:

```
Comandos:
Saida:
```

2. Listar tarefas:

```
Comandos:
Saida:
```

3. Marcar uma como concluida:

```
Comandos:
Saida:
```

4. Remover uma tarefa:

```
Comandos:
Saida:
```

## Reflexao

- Qual foi a maior dificuldade ao migrar de strings para objetos?

```
Sua resposta:
```

- O que você ganhou com essa mudança? O que agora é possível que antes não era?

```
Sua resposta:
```
~~~~

---

## Checklist Final: Pronto para a Aula 13?

Marque cada item só quando conseguir faze-lo **sem consultar a aula**:

- [ ] Sei explicar o que é um objeto e por que ele existe (agrupar dados com rótulos)
- [ ] Sei quando usar array e quando usar objeto — e que os dois podem coexistir
- [ ] Sei criar objetos com `{}` — vazios e pre-preenchidos com pares `chave: valor`
- [ ] Sei acessar propriedades com dot notation (`.`) e bracket notation (`[]`)
- [ ] Sei que bracket notation é obrigatoria para chaves com espacos ou quando o nome está em uma variável
- [ ] Sei adicionar (`obj.nova = x`), modificar (`obj.existente = y`) e remover (`delete obj.prop`) propriedades
- [ ] Sei que `const` não impede mutação de objetos — apenas reatribuição
- [ ] Sei verificar se uma propriedade existe com `in` (inclui herdadas) e `hasOwnProperty` (só próprias)
- [ ] Sei usar `Object.keys()`, `Object.values()` e `Object.entries()` para inspecionar objetos
- [ ] Atualizei meu Gerenciador de Tarefas: cada tarefa agora é um objeto `{ texto, concluida, prioridade }`

> *Acertou todos? Você está pronto para a Aula 13, onde vai aprender como dar **comportamento** aos seus objetos — métodos que usam a palavra-chave `this`. Travou em algum? Releia a seção indicada na questao correspondente antes de avancar.*

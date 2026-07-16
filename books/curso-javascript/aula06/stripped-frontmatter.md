# JavaScript — Do Zero ao Profissional Aula 06 — Questões de Aprendizagem

## Questões de Aprendizagem — Strings em Profundidade: Manipulação e Métodos

## Como Usar Este Arquivo

Este arquivo contém **questões de aprendizagem** para a Aula 06. Diferente dos exercícios que você fez durante a aula, estas questões funcionam como um **checkpoint de domínio** — você deve ser capaz de respondê-las sem consultar o conteúdo principal.

Cada questão tem um **Conceito-chave** (qual seção da aula ela verifica), um **Objetivo** claro, **Passos de Execução** que você segue no navegador, e um **Template de Entrega** que você copia e preenche.

**Instruções:**
1. Leia cada questão com atenção
2. Siga os passos de execução — todos podem ser feitos no navegador com um arquivo HTML
3. Crie a pasta `entregas-aula06/` dentro da sua pasta de estudos
4. Para cada questão, crie o arquivo de entrega seguindo o template fornecido
5. Só avance para a Aula 07 quando conseguir completar todas as questões sem reler a aula

> *Lembre-se: cada questão tem um campo **Conceito-chave** que diz exatamente qual seção da aula revisar se você travar.*

---

## Questão 1: Descobrindo o Comprimento de Strings

**Conceito-chave:** Aula 06, Seção 7 — Strings em JavaScript e .length

**Objetivo:** Demonstrar que você sabe usar `.length` para medir strings e entende a diferença entre propriedade e método.

**Passos de Execução:**

1. Abra o Console do navegador (F12)
2. Crie uma variável com seu nome completo
3. Use `.length` para descobrir quantos caracteres ele tem
4. Teste com strings variadas: string vazia `""`, string com espaços `"   "`, string com acentos `"coração"`
5. Verifique a relação: `length - 1` é sempre o último índice
6. Teste o erro: tente usar `.length()` com parênteses

**Entrega:** crie `entregas-aula06/01-comprimento-strings.md`:

~~~~
# Questão 1 — Descobrindo o Comprimento de Strings

## Código testado no Console

```javascript
// Cole aqui os comandos que você executou no Console
let meuNome = "Seu Nome Aqui";
console.log(meuNome.length);
// ... mais testes
```

## Tabela de resultados

| String | .length | Último índice (length - 1) |
|---|---|---|
| (seu nome completo) | | |
| "" (vazia) | | |
| "   " (3 espaços) | | |
| "coração" | | |
| "JavaScript" | | |

## Perguntas de reflexão

1. O que acontece quando você tenta usar `.length()` com parênteses?

**Sua resposta:**

2. Qual a diferença entre propriedade e método? Como você identifica cada um?

**Sua resposta:**

3. Se uma string tem comprimento 8, quais índices são válidos para acessar caracteres?

**Sua resposta:**
~~~~

---

## Questão 2: Acessando Caracteres por Índice

**Conceito-chave:** Aula 06, Seção 8 — Acessando caracteres por índice

**Objetivo:** Demonstrar que você sabe acessar caracteres individuais usando colchetes e entende que o primeiro índice é 0.

**Passos de Execução:**

1. Crie uma string com seu primeiro nome (ex: "Fernanda")
2. Acesse o primeiro caractere com `[0]`
3. Acesse o terceiro caractere
4. Acesse o último caractere usando `[length - 1]`
5. Acesse um índice que NÃO existe (ex: `[999]`) — veja o resultado
6. Compare com `.charAt()` em um índice inválido

**Entrega:** crie `entregas-aula06/02-acesso-indice.md`:

~~~~
# Questão 2 — Acessando Caracteres por Índice

## Código testado no Console

```javascript
// Cole aqui os comandos que você executou
let nome = "Fernanda"; // ou seu nome
console.log(nome[0]);
console.log(nome[2]);
console.log(nome[nome.length - 1]);
console.log(nome[999]);
console.log(nome.charAt(999));
```

## Tabela de resultados

| Expressão | Resultado | Explicação |
|---|---|---|
| `nome[0]` | | |
| `nome[2]` | | |
| `nome[nome.length - 1]` | | |
| `nome[999]` | | |
| `nome.charAt(999)` | | |

## Perguntas de reflexão

1. Por que o primeiro caractere está no índice 0 e não no índice 1?

**Sua resposta:**

2. Qual a diferença entre o retorno de `string[999]` e `string.charAt(999)` quando o índice não existe?

**Sua resposta:**

3. Como você acessaria o PENÚLTIMO caractere de qualquer string?

**Sua resposta:**
~~~~

---

## Questão 3: Imutabilidade na Prática

**Conceito-chave:** Aula 06, Seção 9 — Imutabilidade em JavaScript

**Objetivo:** Demonstrar que você entende que strings nunca são alteradas — métodos sempre retornam uma nova string.

**Passos de Execução:**

1. Crie uma variável `let original = "JavaScript";`
2. Aplique `.toUpperCase()` no console, sem guardar o resultado
3. Verifique se `original` mudou
4. Agora guarde o resultado em uma nova variável
5. Tente modificar por índice: `original[0] = "X"` — veja o que acontece
6. Conclusão: escreva com suas palavras o que é imutabilidade

**Entrega:** crie `entregas-aula06/03-imutabilidade.md`:

~~~~
# Questão 3 — Imutabilidade na Prática

## Código testado no Console

```javascript
let original = "JavaScript";

// Teste 1: aplicar método sem guardar
original.toUpperCase();
console.log("Original após toUpperCase():", original);

// Teste 2: guardar resultado
let modificada = original.toUpperCase();
console.log("Modificada:", modificada);
console.log("Original ainda:", original);

// Teste 3: tentar modificar por índice
original[0] = "X";
console.log("Original após tentativa de modificação:", original);
```

## Resultados observados

**Após `original.toUpperCase()` (sem guardar):**
O que apareceu no console?

**Após guardar em `modificada`:**
Qual o valor de `modificada`? E de `original`?

**Após `original[0] = "X"`:**
Qual o valor de `original`?

## Perguntas de reflexão

1. O que significa "strings são imutáveis"?

**Sua resposta:**

2. O que aconteceria se você fizesse `original = original.toUpperCase()`? A string original seria perdida?

**Sua resposta:**

3. Por que `original[0] = "X"` não gera erro mas também não altera a string?

**Sua resposta:**
~~~~

---

## Questão 4: Transformando Strings com toUpperCase, toLowerCase e trim

**Conceito-chave:** Aula 06, Seção 10 — Transformação

**Objetivo:** Demonstrar que você sabe usar `.toUpperCase()`, `.toLowerCase()` e `.trim()` para transformar strings.

**Passos de Execução:**

1. Crie `let texto = "  JavaScript é INCRÍVEL  ";`
2. Aplique `.toUpperCase()` e veja o resultado
3. Aplique `.toLowerCase()` e veja o resultado
4. Aplique `.trim()` e veja o resultado
5. Encadeie `.trim().toLowerCase()` e veja o resultado
6. Teste `.trim()` com strings que têm espaços no meio: `"  a  b  c  "`

**Entrega:** crie `entregas-aula06/04-transformacao.md`:

~~~~
# Questão 4 — Transformando Strings

## Código testado no Console

```javascript
let texto = "  JavaScript é INCRÍVEL  ";

console.log("toUpperCase:", texto.toUpperCase());
console.log("toLowerCase:", texto.toLowerCase());
console.log("trim:", texto.trim());
console.log("trim + toLowerCase:", texto.trim().toLowerCase());
console.log("Original continua:", texto);

let comEspacosMeio = "  a  b  c  ";
console.log("trim com espacos no meio:", comEspacosMeio.trim());
```

## Tabela de resultados

| Operação | Resultado |
|---|---|
| `texto.toUpperCase()` | |
| `texto.toLowerCase()` | |
| `texto.trim()` | |
| `texto.trim().toLowerCase()` | |
| `texto` (original, depois de tudo) | |
| `"  a  b  c  ".trim()` | |

## Perguntas de reflexão

1. O que `.trim()` remove? O que ele NÃO remove?

**Sua resposta:**

2. Por que é útil combinar `.trim().toLowerCase()` quando recebemos entrada do usuário?

**Sua resposta:**

3. Se o usuário digitar "  SIM  " em um prompt, qual o resultado de `resposta.trim().toLowerCase()`?

**Sua resposta:**
~~~~

---

## Questão 5: Extraindo Partes com slice

**Conceito-chave:** Aula 06, Seção 11 — Extração com .slice()

**Objetivo:** Demonstrar que você sabe usar `.slice()` para extrair trechos de strings e entende a regra do índice final excluso.

**Passos de Execução:**

1. Crie `let palavra = "Aprendizado";`
2. Extraia os 5 primeiros caracteres com `.slice(0, 5)`
3. Extraia do índice 3 ao 8
4. Extraia do índice 5 até o final (use apenas 1 argumento)
5. Extraia os 3 últimos caracteres usando índice negativo
6. Extraia os caracteres do meio usando dois índices negativos: `.slice(-8, -3)`

**Entrega:** crie `entregas-aula06/05-slice.md`:

~~~~
# Questão 5 — Extraindo Partes com slice

## Código testado no Console

```javascript
let palavra = "Aprendizado";

console.log("slice(0, 5):", palavra.slice(0, 5));
console.log("slice(3, 8):", palavra.slice(3, 8));
console.log("slice(5):", palavra.slice(5));
console.log("slice(-3):", palavra.slice(-3));
console.log("slice(-8, -3):", palavra.slice(-8, -3));
console.log("Original:", palavra);
```

## Tabela de resultados

| Expressão | Resultado | Caracteres incluídos (índices) |
|---|---|---|
| `palavra.slice(0, 5)` | | |
| `palavra.slice(3, 8)` | | |
| `palavra.slice(5)` | | |
| `palavra.slice(-3)` | | |
| `palavra.slice(-8, -3)` | | |

## Perguntas de reflexão

1. Por que o índice final em `.slice(inicio, fim)` é excluso? Qual a vantagem?

**Sua resposta:**

2. Como você extrairia exatamente os 4 primeiros caracteres de QUALQUER string?

**Sua resposta:**

3. O que acontece se você usar `.slice(10, 20)` em uma string de 8 caracteres?

**Sua resposta (teste no console antes):**
~~~~

---

## Questão 6: Buscando Conteúdo com includes, startsWith, endsWith e indexOf

**Conceito-chave:** Aula 06, Seção 12 — Busca e verificação

**Objetivo:** Demonstrar que você sabe usar os quatro métodos de busca e entende a diferença entre `.includes()` (boolean) e `.indexOf()` (número).

**Passos de Execução:**

1. Crie `let frase = "Aprender JavaScript é divertido";`
2. Use `.includes("JavaScript")` — qual o resultado?
3. Use `.includes("Python")` — qual o resultado?
4. Use `.startsWith("Aprender")` e `.startsWith("JavaScript")`
5. Use `.endsWith("divertido")` e `.endsWith("chato")`
6. Use `.indexOf("JavaScript")` — qual o resultado? (é um número!)
7. Use `.indexOf("Python")` — qual o resultado? (é -1?)
8. Teste o erro clássico: `"JavaScript".indexOf("Java")` retorna 0. Compare com `=== -1`

**Entrega:** crie `entregas-aula06/06-busca.md`:

~~~~
# Questão 6 — Buscando Conteúdo

## Código testado no Console

```javascript
let frase = "Aprender JavaScript é divertido";

console.log("includes JavaScript:", frase.includes("JavaScript"));
console.log("includes Python:", frase.includes("Python"));
console.log("startsWith Aprender:", frase.startsWith("Aprender"));
console.log("startsWith JavaScript:", frase.startsWith("JavaScript"));
console.log("endsWith divertido:", frase.endsWith("divertido"));
console.log("endsWith chato:", frase.endsWith("chato"));
console.log("indexOf JavaScript:", frase.indexOf("JavaScript"));
console.log("indexOf Python:", frase.indexOf("Python"));
console.log("indexOf Java:", frase.indexOf("Java"));
console.log("indexOf Java === -1?", frase.indexOf("Java") === -1);
```

## Tabela de resultados

| Expressão | Resultado | Tipo do resultado |
|---|---|---|
| `frase.includes("JavaScript")` | | |
| `frase.includes("Python")` | | |
| `frase.startsWith("Aprender")` | | |
| `frase.endsWith("divertido")` | | |
| `frase.indexOf("JavaScript")` | | |
| `frase.indexOf("Python")` | | |
| `frase.indexOf("Java")` | | |

## Perguntas de reflexão

1. Qual a diferença entre `.includes()` e `.indexOf()`? Quando usar cada um?

**Sua resposta:**

2. Por que `frase.indexOf("Java")` retorna 0 e não -1? O que significa retornar 0?

**Sua resposta:**

3. Como você verifica se uma substring NÃO foi encontrada usando `.indexOf()`?

**Sua resposta:**

4. Escreva uma condição `if` que verifica se a palavra "urgente" existe na string `tarefa`, ignorando maiúsculas/minúsculas:

**Sua resposta:**
~~~~

---

## Questão 7: Dividindo com split

**Conceito-chave:** Aula 06, Seção 13 — Divisão com .split()

**Objetivo:** Demonstrar que você sabe usar `.split()` para dividir strings em partes usando diferentes separadores.

**Passos de Execução:**

1. Crie `let dados = "nome:joao:idade:25";`
2. Divida usando `:` como separador — quantas partes?
3. Crie `let frutas = "maçã,banana,laranja,uva";` e divida por `,`
4. Use `.split("")` para dividir uma palavra em caracteres
5. Use `.split(" ")` para dividir uma frase em palavras
6. Conte quantas palavras tem a frase com `.split(" ").length`

**Entrega:** crie `entregas-aula06/07-split.md`:

~~~~
# Questão 7 — Dividindo com split

## Código testado no Console

```javascript
let dados = "nome:joao:idade:25";
console.log("split por ':'", dados.split(":"));
console.log("quantidade de partes:", dados.split(":").length);

let frutas = "maçã,banana,laranja,uva";
console.log("split por ',':", frutas.split(","));

let palavra = "JavaScript";
console.log("split por '' (vazio):", palavra.split(""));

let frase = "aprender JavaScript é divertido";
console.log("split por espaço:", frase.split(" "));
console.log("quantidade de palavras:", frase.split(" ").length);
```

## Tabela de resultados

| Expressão | Resultado | Número de partes |
|---|---|---|
| `"nome:joao:idade:25".split(":")` | | |
| `"maçã,banana,laranja,uva".split(",")` | | |
| `"JavaScript".split("")` | | |
| `"aprender JavaScript é divertido".split(" ")` | | |

## Perguntas de reflexão

1. O que é um array (lista)? Como você identifica um array no console?

**Sua resposta:**

2. O que acontece se o separador não for encontrado na string?

**Sua resposta (teste no console):**

3. Como você contaria o número de palavras em uma frase digitada pelo usuário?

**Sua resposta:**
~~~~

---

## Questão 8: Gerenciador de Tarefas — Validação e Limpeza

**Conceito-chave:** Aula 06, Seção 16 — Aplicação no Gerenciador de Tarefas

**Objetivo:** Aplicar TUDO que você aprendeu — `.trim()`, `.includes()`, `.toUpperCase()`, `.toLowerCase()`, `.slice()`, `.length` — no Gerenciador de Tarefas.

**Passos de Execução:**

1. Crie o código do Gerenciador de Tarefas com as seguintes funcionalidades:
   - Boas-vindas com alert
   - Pergunta o nome da tarefa (com `.trim()` imediato)
   - Verifica se o nome está vazio após o trim — se vazio, alerta erro
   - Pergunta a categoria (estudo, trabalho, pessoal) — aplica `.trim().toLowerCase()`
   - Verifica se o nome contém "urgente" (ignorando maiúsculas/minúsculas)
   - Se a categoria for "estudo", adiciona o prefixo "📚" ao nome
   - Limita o nome a 30 caracteres com `.slice(0, 30)`
   - Mostra alert com resumo formatado (nome, categoria em maiúsculas, comprimento)
   - Mostra no console o relatório completo

2. Teste com diferentes entradas:
   - Tarefa normal: "Estudar JavaScript", categoria "estudo"
   - Tarefa com espaços: "   Pagar contas   ", categoria "trabalho"
   - Tarefa urgente: "Relatório urgente", categoria "trabalho"
   - Tarefa vazia: apenas Enter no prompt

**Entrega:** crie `entregas-aula06/08-gerenciador-strings.md`:

~~~~
# Questão 8 — Gerenciador de Tarefas com Validação de Strings

## Código HTML completo

```html
<!-- Cole aqui seu código HTML completo -->
```

## Testes realizados

### Teste 1: Tarefa normal
**Nome digitado:**
**Categoria digitada:**
**O que apareceu no alert:**

### Teste 2: Tarefa com espaços
**Nome digitado:**
**Categoria digitada:**
**O que apareceu no alert:**

### Teste 3: Tarefa urgente
**Nome digitado:**
**Categoria digitada:**
**O que apareceu no alert:**

### Teste 4: Tarefa vazia
**Nome digitado:**
**O que apareceu no alert:**

## Console output de um dos testes

```
Cole aqui o que apareceu no console em um dos testes:
```

## Perguntas de reflexão

1. Por que aplicamos `.trim()` imediatamente após `prompt()`? O que isso evita?

**Sua resposta:**

2. Por que usamos `.toLowerCase()` antes de `.includes("urgente")`?

**Sua resposta:**

3. O que aconteceria se o usuário digitasse um nome com 50 caracteres? Como o `.slice(0, 30)` resolve isso?

**Sua resposta:**

4. Qual método de string você considera mais útil para o Gerenciador de Tarefas? Por quê?

**Sua resposta:**
~~~~

---

## Checklist Final: Pronto para a Aula 07?

Marque cada item abaixo só quando conseguir fazê-lo **sem consultar a aula**:

- [ ] **Definir** uma string como uma sequência ordenada de caracteres
- [ ] **Explicar** o conceito de índice — cada caractere tem uma posição que começa em 0
- [ ] **Usar** `.length` para descobrir o número de caracteres de uma string
- [ ] **Acessar** caracteres individuais com `string[0]`, `string[string.length - 1]`
- [ ] **Explicar** o princípio de imutabilidade — métodos nunca alteram a string original
- [ ] **Aplicar** `.toUpperCase()`, `.toLowerCase()` e `.trim()` para transformar strings
- [ ] **Usar** `.slice()` para extrair trechos específicos de uma string
- [ ] **Aplicar** `.includes()`, `.startsWith()`, `.endsWith()` e `.indexOf()` para buscar conteúdo e **diferenciar** `.includes()` (retorna boolean) de `.indexOf()` (retorna número ou -1)
- [ ] **Usar** `.split()` para dividir uma string em partes e `.replace()` para substituir trechos
- [ ] **Encadear** múltiplos métodos em uma única expressão (ex: `" texto ".trim().toUpperCase()`)
- [ ] **Aplicar** validação de strings no Gerenciador de Tarefas com `.trim()`, `.includes()`, `.toUpperCase()`

> *Acertou todos? Parabéns! Você está pronto para a **Aula 07: Condicionais — if, else if, else e switch**. Na próxima aula, seu programa vai finalmente TOMAR DECISÕES: "se a tarefa for urgente, faça X; se for estudo, faça Y". O Gerenciador de Tarefas vai ficar ainda mais inteligente. Travou em algum? Releia a seção indicada no campo **Conceito-chave** da questão correspondente antes de avançar.*

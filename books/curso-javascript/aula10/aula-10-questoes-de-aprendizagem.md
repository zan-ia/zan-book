---
titulo: "JavaScript — Do Zero ao Profissional — Aula 10 — Questões de Aprendizagem"
modulo: "01"
aula: "10"
---

# JavaScript — Do Zero ao Profissional Aula 10 — Questões de Aprendizagem

## Como Usar Este Arquivo

Este arquivo é o seu **checkpoint de aprendizagem**. A pergunta central é: *"eu realmente entendi a matéria?"*

Cada questão abaixo verifica um conceito-chave da Aula 10. Você deve fazer as questões NA ORDEM, sem consultar a aula principal a cada passo. Cada questão tem:

- **Conceito-chave**: o que está sendo verificado (com referência à seção da aula)
- **Objetivo**: o que você precisa demonstrar
- **Passos de Execução**: o que fazer, passo a passo
- **Entrega**: um template para você preencher e salvar

Crie uma pasta `entregas-aula-10/` dentro da pasta `aula10/` do seu projeto e salve cada entrega como `10-01-nome.md`, `10-02-nome.md`, etc.

Só avance para a Aula 11 quando conseguir completar todas as questões por conta própria, SEM reler a aula.

---

## Questão 1: Sua Primeira Função com Parâmetros

**Conceito-chave:** Declaração de função com `function`, chamada, parâmetros e argumentos (Aula 10, Seções 3 e 4).

**Objetivo:** Declarar uma função com parâmetros, chamá-la com argumentos diferentes e explicar a diferença entre declarar e chamar.

**Passos de Execução:**

1. Abra o Console do navegador e declare uma função chamada `apresentar` que recebe um parâmetro `nome` e exibe `"Olá, [nome]!"` no console.
2. Chame a função com 3 nomes diferentes.
3. Explique, em suas palavras, a diferença entre declarar a função e chamá-la.
4. Identifique qual parte é o parâmetro e qual parte é o argumento.

**Entrega:** crie `entregas-aula-10/10-01-primeira-funcao.md`:

~~~~
# Questão 1 — Minha Primeira Função com Parâmetros

## Código da Função

```javascript
// Cole aqui a declaração da função apresentar

```

## Chamadas da Função

1. Chamada 1: `apresentar("_____")` → resultado no console: ___________
2. Chamada 2: `apresentar("_____")` → resultado no console: ___________
3. Chamada 3: `apresentar("_____")` → resultado no console: ___________

## Explicação

**Declarar a função significa:** ______________________________________

**Chamar a função significa:** ________________________________________

**Diferença principal entre os dois:** ________________________________

## Parâmetro vs Argumento

Na função `function apresentar(nome) { ... }`:

- O **parâmetro** é: ______________________
- Por quê? _______________________________

Na chamada `apresentar("Maria")`:

- O **argumento** é: ______________________
- Por quê? _______________________________

## Conclusão

Em 2-3 frases, explique por que a mesma função `apresentar` funciona com nomes diferentes.
~~~~

---

## Questão 2: Funções que Devolvem Resultados

**Conceito-chave:** `return` — devolver valor e capturar em variável (Aula 10, Seção 5).

**Objetivo:** Criar funções com `return`, capturar resultados em variáveis e explicar a diferença entre `console.log` e `return`.

**Passos de Execução:**

1. Crie uma função `calcularAreaRetangulo` que recebe `largura` e `altura` e retorna a área (largura * altura).
2. Chame a função com `calcularAreaRetangulo(5, 3)` e guarde o resultado em uma variável `area1`.
3. Exiba o valor de `area1` no console.
4. Crie uma SEGUNDA função `calcularAreaRetanguloConsole` que faz a MESMA conta mas usa `console.log` em vez de `return`.
5. Chame a segunda função com `(5, 3)` e tente guardar o resultado em `area2`. Exiba `area2` no console.
6. Compare os resultados de `area1` e `area2` e explique por que são diferentes.

**Entrega:** crie `entregas-aula-10/10-02-return-vs-consolelog.md`:

~~~~
# Questão 2 — Return vs console.log

## Função com Return

```javascript
function calcularAreaRetangulo(largura, altura) {
    // Seu código aqui
}

let area1 = calcularAreaRetangulo(5, 3);
console.log(area1);
```

**Valor de area1:** ___________

**Explicação:** Por que `area1` tem esse valor?


## Função sem Return (só console.log)

```javascript
function calcularAreaRetanguloConsole(largura, altura) {
    // Seu código aqui
}

let area2 = calcularAreaRetanguloConsole(5, 3);
console.log(area2);
```

**Valor de area2:** ___________

**Explicação:** Por que `area2` tem esse valor?


## Comparação

| Característica | Com return | Sem return (só console.log) |
|---|---|---|
| O que aparece no console? | | |
| Posso guardar o valor em uma variável? | | |
| Posso usar o valor em outro cálculo? | | |

## Conclusão

Em 2-3 frases, explique quando usar `return` e quando usar `console.log`.
~~~~

---

## Questão 3: Procedimentos — Quando o Return Não É Necessário

**Conceito-chave:** Funções que executam ações sem retornar valor (Aula 10, Seção 6).

**Objetivo:** Criar um procedimento que modifica um array, explicar por que não precisa de `return` e verificar que o retorno é `undefined`.

**Passos de Execução:**

1. Crie um array vazio `let compras = []`.
2. Declare um procedimento chamado `adicionarCompra` que recebe `item` como parâmetro, adiciona `item` ao array `compras` com `.push()` e exibe `"Adicionado: [item]. Total: [N] itens."` no console.
3. Chame o procedimento 3 vezes com itens diferentes.
4. Tente capturar o retorno de uma chamada em uma variável e exiba essa variável no console.
5. Explique por que o valor é `undefined` e por que essa função é um procedimento.

**Entrega:** crie `entregas-aula-10/10-03-procedimentos.md`:

~~~~
# Questão 3 — Procedimentos

## Código do Procedimento

```javascript
let compras = [];

function adicionarCompra(item) {
    // Seu código aqui
}
```

## Chamadas

1. `adicionarCompra("_____")` → Console: ___________________
2. `adicionarCompra("_____")` → Console: ___________________
3. `adicionarCompra("_____")` → Console: ___________________

## Estado Final do Array

```javascript
console.log(compras);
```

**Resultado:** ______________________________________________

## Tentativa de Capturar Retorno

```javascript
let resultado = adicionarCompra("Teste");
console.log(resultado);
```

**Valor de resultado:** ___________

## Explicação

**Por que resultado é undefined?** ___________________________

**Esta função é um procedimento porque:** _____________________

## Conclusão

Em 2-3 frases, explique quando uma função NÃO precisa de `return`.
~~~~

---

## Questão 4: DRY na Prática — Identificando Duplicação

**Conceito-chave:** Identificar código repetitivo e propor extração para função (Aula 10, Seção 2).

**Objetivo:** Receber um trecho com código duplicado, identificar a duplicação, propor uma função com parâmetros que elimine a repetição.

**Passos de Execução:**

1. Leia o código abaixo, que calcula a área de 3 retângulos diferentes:

```javascript
let area1 = 5 * 3;
console.log("Área do retângulo 1: " + area1);

let area2 = 7 * 2;
console.log("Área do retângulo 2: " + area2);

let area3 = 10 * 4;
console.log("Área do retângulo 3: " + area3);
```

2. Identifique o que está sendo repetido (a "receita" que aparece várias vezes).
3. Crie uma função que elimine a repetição — uma função que calcule a área de um retângulo e exiba a mensagem.
4. Reescreva o código usando a função que você criou.
5. Explique: se a mensagem mudasse para "A área do retângulo é X metros quadrados", em quantos lugares você precisaria alterar na versão original vs na versão com função?

**Entrega:** crie `entregas-aula-10/10-04-dry-pratica.md`:

~~~~
# Questão 4 — DRY na Prática

## Código Original Repetitivo

```javascript
let area1 = 5 * 3;
console.log("Área do retângulo 1: " + area1);

let area2 = 7 * 2;
console.log("Área do retângulo 2: " + area2);

let area3 = 10 * 4;
console.log("Área do retângulo 3: " + area3);
```

## O Que Está Sendo Repetido?

Liste as partes que são idênticas (ou quase idênticas) em cada bloco:

1. __________________________________________________
2. __________________________________________________
3. __________________________________________________

## Código Refatorado com Função

```javascript
// Declaração da função

function calcularAreaETotal(largura, ......) {
    // Seu código aqui
}

// Chamadas
calcularAreaETotal(5, 3); // Área do retângulo 1: 15
```

Complete a função e escreva as chamadas para os 3 retângulos.

## Impacto de uma Mudança

Se a mensagem mudar para "A área do retângulo é X metros quadrados":

- **Na versão original:** preciso alterar em _____ lugar(es)
- **Na versão com função:** preciso alterar em _____ lugar(es)
- **Por que a diferença?** __________________________________

## Conclusão

Em 2-3 frases, explique como o princípio DRY se aplica neste exemplo.
~~~~

---

## Questão 5: Anatomia da Função — Nomeando Partes

**Conceito-chave:** Identificar partes de uma função: declaração, parâmetros, corpo, return, chamada (Aula 10, Seções 3 a 5).

**Objetivo:** Receber uma função completa, rotular cada parte (palavra-chave, nome, parâmetros, corpo, return) e explicar o que cada uma faz.

**Passos de Execução:**

1. Analise a função abaixo:

```javascript
function media(n1, n2, n3) {
    let soma = n1 + n2 + n3;
    return soma / 3;
}

let resultado = media(8, 7, 9);
console.log("Média: " + resultado);
```

2. Identifique cada parte da declaração da função.
3. Identifique a chamada da função e os argumentos.
4. Explique o que cada parte faz.
5. Preveja qual valor será exibido no console.

**Entrega:** crie `entregas-aula-10/10-05-anatomia.md`:

~~~~
# Questão 5 — Anatomia da Função

## Código Analisado

```javascript
function media(n1, n2, n3) {
    let soma = n1 + n2 + n3;
    return soma / 3;
}

let resultado = media(8, 7, 9);
console.log("Média: " + resultado);
```

## Identificação das Partes

| Parte | O que é? (código) | O que faz? |
|---|---|---|
| Palavra-chave | `function` | Indica que estamos declarando uma função |
| Nome da função | | |
| Parâmetros | | |
| Corpo da função | | |
| Return | | |
| Chamada da função | | |
| Argumentos | | |

## Previsão do Resultado

O console exibirá: ______________________________________________

**Cálculo passo a passo:** ______________________________________

## Conclusão

Em 2-3 frases, explique cada parte da anatomia de uma função com suas palavras.
~~~~

---

## Questão 6: Reutilização — Mesma Função, Dados Diferentes

**Conceito-chave:** Demonstrar que uma função bem projetada funciona com qualquer entrada válida (Aula 10, Seção 4).

**Objetivo:** Criar uma função que calcula IMC a partir de peso e altura, testar com 3 pessoas diferentes e mostrar que a mesma função serve para todas.

**Passos de Execução:**

1. Crie uma função `calcularIMC` que recebe `peso` (kg) e `altura` (metros) e retorna o IMC (peso / altura²).
2. Teste com 3 pessoas diferentes: (70kg, 1.75m), (55kg, 1.60m), (90kg, 1.80m).
3. Mostre os resultados no console no formato: "IMC: NN.N".
4. Explique por que a função funciona para todas as pessoas sem precisar ser reescrita.

**Entrega:** crie `entregas-aula-10/10-06-reutilizacao.md`:

~~~~
# Questão 6 — Mesma Função, Dados Diferentes

## Declaração da Função

```javascript
function calcularIMC(peso, altura) {
    // Seu código aqui — use return
}
```

## Testes

| Pessoa | Peso (kg) | Altura (m) | Chamada | Resultado |
|---|---|---|---|---|
| Pessoa 1 | 70 | 1.75 | calcularIMC(70, 1.75) | |
| Pessoa 2 | 55 | 1.60 | | |
| Pessoa 3 | | | | |

Complete a tabela com as chamadas e resultados.

## Explicação

**Por que a mesma função funciona para todas as pessoas?** ________

## Conclusão

Em 2-3 frases, explique o que torna uma função REUTILIZÁVEL.
~~~~

---

## Questão 7: Projeto Progressivo — Gerenciador Refatorado com Funções

**Conceito-chave:** Extrair blocos monolíticos do Gerenciador em funções nomeadas (Aula 10, Seção 7).

**Objetivo:** Refatorar o Gerenciador de Tarefas da Aula 09, extraindo `exibirMenu()`, `adicionarTarefa()` e `listarTarefas()`, e testar que funciona identicamente.

**Passos de Execução:**

1. Abra o `index.html` do seu Gerenciador de Tarefas (versão da Aula 09 — com array e menu, monolítico).
2. Salve uma cópia de segurança como `index-monolitico.html`.
3. Extraia o bloco de menu (do...while que valida opção) para uma função `exibirMenu()` que retorna a opção com `return`.
4. Extraia o bloco de adição (case "1") para uma função `adicionarTarefa()` (procedimento, sem return).
5. Extraia o bloco de listagem (case "2") para uma função `listarTarefas()` (procedimento, sem return).
6. Reescreva o programa principal usando as três funções.
7. Teste: adicione 3 tarefas, liste, saia. O comportamento deve ser idêntico ao original.
8. Salve o arquivo como `index-refatorado.html`.

**Entrega:** crie `entregas-aula-10/10-07-gerenciador-refatorado.md`:

~~~~
# Questão 7 — Gerenciador Refatorado

## Estrutura Antes e Depois

| Característica | ANTES (Aula 09 — monolítico) | DEPOIS (Aula 10 — com funções) |
|---|---|---|
| Número de funções | 0 | 3 |
| Nomes das funções | — | |
| Linhas do programa principal | ~15 | ~10 |
| O programa principal parece com... | Um bloco único de código | Uma orquestração de chamadas |

## Código Final (colar aqui)

```html
<script>
let tarefas = [];

// Funções

// Programa principal
</script>
```

## Checklist de Testes

- [ ] Adicionei 3 tarefas com sucesso
- [ ] Liste as tarefas e vi todas numeradas
- [ ] O menu mostra o total correto de tarefas
- [ ] Testei opção inválida no menu
- [ ] Adicionei 0 tarefas e vi a validação
- [ ] Saí do programa com a opção "Sair"

## Reflexão

**O que mudou na legibilidade do código depois da refatoração?** ____

**Se eu quisesse adicionar "4 - Remover Tarefa", onde precisaria mexer?** ____

**O que aconteceria se `exibirMenu()` não usasse `return`?** ________

## Conclusão

Em 3-4 frases, explique como funções tornam o Gerenciador mais organizado e por que isso importa para a evolução do projeto.
~~~~

---

## Checklist Final: Pronto para a Aula 11?

Marque cada item só quando conseguir fazê-lo **sem consultar a aula**:

- [ ] Sei explicar o que é uma função usando a analogia do liquidificador
- [ ] Sei declarar uma função com `function nome() { }` e chamar com `nome()`
- [ ] Entendo a diferença entre DECLARAR (criar a receita) e CHAMAR (executar a receita)
- [ ] Sei usar parâmetros para receber valores e passar argumentos na chamada
- [ ] Sei usar `return` para devolver um resultado e capturá-lo em uma variável
- [ ] Entendo a diferença entre `console.log()` (mostrar) e `return` (devolver)
- [ ] Sei criar procedimentos — funções que executam ações sem retornar valor
- [ ] Entendo o princípio DRY e sei identificar código duplicado
- [ ] Refatorei meu Gerenciador de Tarefas extraindo `exibirMenu()`, `adicionarTarefa()` e `listarTarefas()`
- [ ] Sei explicar como funções tornam o código mais organizado, legível e fácil de modificar

> *Acertou todos? Você está pronto para a Aula 11, onde vai descobrir onde as variáveis realmente existem — escopo e hoisting. Travou em algum? Releia a seção indicada na questão correspondente antes de avançar.*

# JavaScript — Do Zero ao Profissional Aula 04 — Questões de Aprendizagem

## Como Usar Este Arquivo

Este arquivo contém **questões de aprendizagem** para a Aula 04. Diferente dos exercícios que você fez durante a aula, estas questões funcionam como um **checkpoint de domínio** — você deve ser capaz de respondê-las sem consultar o conteúdo principal.

Cada questão tem um **Conceito-chave** (qual seção da aula ela verifica), um **Objetivo** claro, **Passos de Execução** que você segue no console do navegador, e um **Template de Entrega** que você copia e preenche.

**Instruções:**

1. Leia cada questão com atenção
2. Siga os passos de execução — todos podem ser feitos no console do navegador
3. Crie a pasta `entregas-aula04/` dentro da sua pasta de estudos
4. Para cada questão, crie o arquivo de entrega seguindo o template fornecido
5. Só avance para a Aula 05 quando conseguir completar todas as questões sem reler a aula

> *Lembre-se: cada questão tem um campo **Conceito-chave** que diz exatamente qual seção da aula revisar se você travar.*

---

## Questão 1: Operadores como Ferramentas

**Conceito-chave:** Aula 04, Seção 1 — O Que São Operadores?

**Objetivo:** Explicar o conceito de operador usando a analogia da caixa de ferramentas e classificar operadores por família.

**Passos de Execução:**

1. Responda: o que é um operador? Use a analogia da caixa de ferramentas
2. Liste as 3 famílias de operadores que você aprendeu
3. Para cada família, dê 2 exemplos de operadores e o que eles fazem
4. Explique a diferença entre operador e operando
5. Dê um exemplo de expressão que usa UM operador de cada família

**Entrega:** crie `entregas-aula04/01-operadores-como-ferramentas.md`:

~~~~
# Questão 1 — Operadores como Ferramentas

## Definição

O que é um operador? Use a analogia da caixa de ferramentas:

**Sua resposta:**

## Três famílias

| Família | O que faz | Exemplo de operador | O que ele faz |
|---|---|---|---|
| 1. | | | |
| 2. | | | |
| 3. | | | |

## Operador vs Operando

Explique a diferença entre operador e operando, usando `15 % 4` como exemplo:

**Sua resposta:**

## Expressão combinada

Escreva uma única expressão que use UM operador de cada família (aritmético, comparação, lógico):

**Sua expressão:**

**Resultado esperado (você calculou mentalmente):**
~~~~

---

## Questão 2: Calculadora no Console

**Conceito-chave:** Aula 04, Seção 3 — Operadores Aritméticos

**Objetivo:** Demonstrar domínio dos 6 operadores aritméticos com números e variáveis, incluindo o alerta sobre string + number.

**Passos de Execução:**

1. Abra o console do navegador (F12)
2. Crie duas variáveis: `let a = 25;` e `let b = 4;`
3. Execute cada operação da tabela abaixo e anote o resultado
4. Teste também `25 % 4` e `25 ** 4`
5. Execute: `let c = "10"; console.log(a + c);` e anote o resultado
6. Execute: `console.log(a - c);` e anote o resultado
7. Explique por que os resultados de + e - com string são diferentes

**Entrega:** crie `entregas-aula04/02-calculadora-console.md`:

~~~~
# Questão 2 — Calculadora no Console

## Variáveis

let a = ___;
let b = ___;

## Resultados

| Expressão | Resultado no console | Tipo do resultado (use typeof) |
|---|---|---|
| a + b | | |
| a - b | | |
| a * b | | |
| a / b | | |
| a % b | | |
| a ** b | | |

## Alerta: string + number

| Expressão | Resultado | Tipo do resultado |
|---|---|---|
| a + "10" | | |
| a - "10" | | |

## Pergunta de reflexão

Por que `a + "10"` produziu um resultado diferente de `a - "10"`? Explique com suas palavras:

**Sua resposta:**
~~~~

---

## Questão 3: === é o Herói

**Conceito-chave:** Aula 04, Seção 4 — Operadores de Comparação

**Objetivo:** Demonstrar domínio do operador `===`, diferenciando-o de `=` e entendendo por que `===` é preferível a `==`.

**Passos de Execução:**

1. Abra o console do navegador
2. Teste cada expressão da tabela abaixo e anote os resultados
3. Compare os resultados de `==` com `===` para os mesmos valores
4. Crie uma variável `let idade = 18;`
5. Verifique com `===` se idade é exatamente 18
6. Verifique com `===` se idade é exatamente "18"
7. Explique a diferença

Expressões para testar:

- `5 == "5"`
- `5 === "5"`
- `0 == false`
- `0 === false`
- `"" == false`
- `"" === false`
- `"true" == true`
- `"true" === true`
- `null == undefined`
- `null === undefined`

**Entrega:** crie `entregas-aula04/03-igualdade-estrita.md`:

~~~~
# Questão 3 — === é o Herói

## Tabela de comparação: == vs ===

| Expressão | Resultado com == | Resultado com === | Mesmo resultado? |
|---|---|---|---|
| 5 == "5" / 5 === "5" | | | |
| 0 == false / 0 === false | | | |
| "" == false / "" === false | | | |
| "true" == true / "true" === true | | | |
| null == undefined / null === undefined | | | |

## Teste com variável

let idade = 18;
console.log(idade === 18);   // Resultado:
console.log(idade === "18"); // Resultado:

## Pergunta de reflexão

Por que você deve usar `===` em vez de `==`? Dê pelo menos 2 razões:

**Sua resposta:**

## Erro comum

O que acontece se você escrever `let x = 5; x = 10;` quando sua intenção era COMPARAR se x é igual a 10? Qual operador você deveria ter usado?

**Sua resposta:**
~~~~

---

## Questão 4: Maior, Menor, Maior-ou-Igual

**Conceito-chave:** Aula 04, Seção 4 — Operadores Relacionais

**Objetivo:** Usar corretamente `>`, `<`, `>=`, `<=` com números e entender como funcionam com strings.

**Passos de Execução:**

1. Abra o console do navegador
2. Teste cada uma das 10 expressões abaixo e anote os resultados
3. Crie `let notaMinima = 7;` e `let notaAluno = 8.5;`
4. Verifique se o aluno passou (notaAluno >= notaMinima)
5. Teste a comparação de strings: `"casa" > "carro"` e tente explicar

Expressões para testar:

- `15 > 10`
- `10 > 15`
- `15 >= 15`
- `15 > 15`
- `8 <= 12`
- `3 >= 3`
- `-5 < 0`
- `100 <= 99`
- `"Ana" < "João"`
- `"casa" < "carro"`

**Entrega:** crie `entregas-aula04/04-relacionais.md`:

~~~~
# Questão 4 — Relacionais

## Tabela de resultados

| Expressão | Resultado | Explicação |
|---|---|---|
| 15 > 10 | | |
| 10 > 15 | | |
| 15 >= 15 | | |
| 15 > 15 | | |
| 8 <= 12 | | |
| 3 >= 3 | | |
| -5 < 0 | | |
| 100 <= 99 | | |
| "Ana" < "João" | | |
| "casa" < "carro" | | |

## Aprovação do aluno

let notaMinima = 7;
let notaAluno = 8.5;
notaAluno >= notaMinima;  // Resultado:

O aluno passou? ( ) Sim ( ) Não

## Comparação de strings

Explique por que `"casa" < "carro"` tem o resultado que tem (pense na ordem alfabética das letras):

**Sua resposta:**
~~~~

---

## Questão 5: Tabelas Verdade

**Conceito-chave:** Aula 04, Seção 5 — Operadores Lógicos

**Objetivo:** Demonstrar domínio dos operadores `&&`, `||` e `!` completando tabelas verdade e combinando condições.

**Passos de Execução:**

1. Abra o console do navegador
2. Complete mentalmente cada tabela verdade abaixo
3. Depois, confirme cada resultado no console
4. Crie duas variáveis booleanas: `let temIngresso = true;` e `let temCarteira = false;`
5. Teste: `temIngresso && temCarteira`, `temIngresso || temCarteira`, `!temCarteira`
6. Crie uma condição composta: "pode entrar se tiver ingresso E (carteira OU documento)"
7. Teste a condição com diferentes valores

**Entrega:** crie `entregas-aula04/05-tabelas-verdade.md`:

~~~~
# Questão 5 — Tabelas Verdade

## Tabela verdade do && (E)

| A | B | A && B |
|---|---|---|
| true | true | |
| true | false | |
| false | true | |
| false | false | |

## Tabela verdade do || (OU)

| A | B | A || B |
|---|---|---|
| true | true | |
| true | false | |
| false | true | |
| false | false | |

## Tabela verdade do ! (NÃO)

| A | !A |
|---|---|
| true | |
| false | |

## Teste com variáveis

let temIngresso = true;
let temCarteira = false;
let temDocumento = true;

temIngresso && temCarteira;   // Resultado:
temIngresso || temCarteira;   // Resultado:
!temCarteira;                // Resultado:

## Condição composta

"Pode entrar se tiver ingresso E (tiver carteira OU tiver documento)"

Expressão completa:

**Expressão:**

**Resultado com os valores atuais:**

## Variações

| temIngresso | temCarteira | temDocumento | Pode entrar? |
|---|---|---|---|
| true | false | true | |
| false | true | true | |
| true | true | false | |
| false | false | false | |
| true | true | true | |
~~~~

---

## Questão 6: Precedência na Prática

**Conceito-chave:** Aula 04, Seção 6 — Precedência e Parênteses

**Objetivo:** Demonstrar que você entende como a precedência afeta o resultado de expressões e que sabe usar parênteses para controlar a ordem.

**Passos de Execução:**

1. Abra o console do navegador
2. Calcule mentalmente o resultado de cada expressão abaixo
3. Depois, execute no console para confirmar
4. Se o resultado for diferente do esperado, adicione parênteses para corrigir
5. Responda: por que parênteses são importantes?

Expressões para analisar:

- `3 + 4 * 2`
- `(3 + 4) * 2`
- `10 - 5 - 2`
- `10 - (5 - 2)`
- `2 * 3 ** 2`
- `(2 * 3) ** 2`
- `10 + 5 > 12`
- `(10 + 5) > 12`
- `5 + 3 * 2 > 10 && 4 + 2 === 6`
- `(5 + 3) * 2 > 10 && (4 + 2) === 6`

**Entrega:** crie `entregas-aula04/06-precedencia.md`:

~~~~
# Questão 6 — Precedência na Prática

## Tabela de expressões

| Expressão | Resultado mental | Resultado real | Conferiu? |
|---|---|---|---|
| 3 + 4 * 2 | | | |
| (3 + 4) * 2 | | | |
| 10 - 5 - 2 | | | |
| 10 - (5 - 2) | | | |
| 2 * 3 ** 2 | | | |
| (2 * 3) ** 2 | | | |
| 10 + 5 > 12 | | | |
| (10 + 5) > 12 | | | |
| 5 + 3 * 2 > 10 && ... | | | |
| (5 + 3) * 2 > 10 && ... | | | |

## Perguntas de reflexão

1. Em `3 + 4 * 2`, qual operador executa primeiro? Por quê?

**Sua resposta:**

2. Qual expressão usou parênteses para MUDAR o resultado em relação à versão sem parênteses?

**Sua resposta:**

3. Qual a REGRA DE OURO sobre precedência?

**Sua resposta:**
~~~~

---

## Questão 7: Gerenciador de Tarefas — Verificações com Operadores

**Conceito-chave:** Aula 04, Seção 7 — Aplicando no Gerenciador de Tarefas

**Objetivo:** Aplicar operadores de comparação e lógicos para verificar status e condições de tarefas no Gerenciador.

**Passos de Execução:**

1. Crie um arquivo `verificacoes-tarefas.js` (ou teste no console)
2. Defina 3 tarefas, cada uma com: nome, status ("Pendente", "Concluida", "Cancelada"), prioridade ("Alta", "Media", "Baixa"), dias desde criação
3. Use `===` para verificar o status de cada tarefa
4. Use `&&` para encontrar tarefas PENDENTES com prioridade ALTA
5. Use `||` para identificar tarefas que podem ser removidas (CONCLUIDAS ou CANCELADAS)
6. Use operadores combinados com parênteses para criar uma regra de "precisa de atenção"
7. Teste todas as condições no console

**Entrega:** crie `entregas-aula04/07-verificacoes-tarefas.md`:

~~~~
# Questão 7 — Verificações com Operadores

## Variáveis do Gerenciador

```javascript
// Tarefa 1
let tarefa1 = "___";
let status1 = "___";
let prioridade1 = "___";
let diasCriada1 = ___;

// Tarefa 2
let tarefa2 = "___";
let status2 = "___";
let prioridade2 = "___";
let diasCriada2 = ___;

// Tarefa 3
let tarefa3 = "___";
let status3 = "___";
let prioridade3 = "___";
let diasCriada3 = ___;
```

## Verificações com ===

| Expressão | Pergunta | Resultado |
|---|---|---|
| status1 === "Concluida" | Tarefa 1 concluída? | |
| status2 === "Pendente" | Tarefa 2 pendente? | |
| status3 === "Cancelada" | Tarefa 3 cancelada? | |

## Verificações com &&

Tarefas PENDENTES E de prioridade ALTA:

(status1 === "Pendente") && (prioridade1 === "Alta")  // Resultado:
(status2 === "Pendente") && (prioridade2 === "Alta")  // Resultado:
(status3 === "Pendente") && (prioridade3 === "Alta")  // Resultado:

## Verificações com ||

Tarefas que podem ser removidas (CONCLUIDAS ou CANCELADAS):

(status1 === "Concluida") || (status1 === "Cancelada")  // Resultado:
(status2 === "Concluida") || (status2 === "Cancelada")  // Resultado:
(status3 === "Concluida") || (status3 === "Cancelada")  // Resultado:

## Regra combinada: "Precisa de atenção"

Regra: PENDENTE E (prioridade ALTA OU criada há mais de 30 dias)

(status1 === "Pendente") && (prioridade1 === "Alta" || diasCriada1 > 30)  // Resultado:
(status2 === "Pendente") && (prioridade2 === "Alta" || diasCriada2 > 30)  // Resultado:
(status3 === "Pendente") && (prioridade3 === "Alta" || diasCriada3 > 30)  // Resultado:

## Pergunta de reflexão

Como os operadores ajudam a tomar decisões no seu Gerenciador de Tarefas? Dê um exemplo concreto:

**Sua resposta:**
~~~~

---

## Questão 8: Diagnóstico Final

**Conceito-chave:** Aula 04, Seções 1 a 7 — Todos os conceitos

**Objetivo:** Identificar e corrigir 7 erros relacionados a operadores em um trecho de código, demonstrando domínio completo da aula.

**Passos de Execução:**

1. Analise o código abaixo que contém 7 erros
2. Para cada erro, identifique: o que está errado, por que está errado e a correção
3. Teste cada correção no console do navegador
4. Reescreva a versão final completa e corrigida

```javascript
let valor1 = 10;
let valor2 = "5";

// Erro 1
let soma = valor1 + valor2;
console.log(soma);  // Queria 15

// Erro 2
console.log(valor1 = valor2);  // Queria COMPARAR

// Erro 3
let resultado = valor1 + 3 * 2;
console.log(resultado);  // Queria (valor1 + 3) * 2

// Erro 4
let condicao = valor1 > 5 & valor2 < 10;
console.log(condicao);

// Erro 5
let inverso = !valor1 === 10;
console.log(inverso);

// Erro 6
let igualdadeFraca = 0 == false;
console.log(igualdadeFraca);  // Funciona, mas não deveria usar

// Erro 7
let divisao = 10 / 0;
console.log(divisao);  // Não é erro, mas o resultado é inesperado
```

**Entrega:** crie `entregas-aula04/08-diagnostico-final.md`:

~~~~
# Questão 8 — Diagnóstico Final

## Tabela de diagnóstico

| Erro # | Código com problema | O que está errado? | Por que está errado? | Correção |
|---|---|---|---|---|
| 1 | valor1 + valor2 | | | |
| 2 | valor1 = valor2 | | | |
| 3 | valor1 + 3 * 2 | | | |
| 4 | valor1 > 5 & valor2 < 10 | | | |
| 5 | !valor1 === 10 | | | |
| 6 | 0 == false | | | |
| 7 | 10 / 0 | | | |

## Código corrigido (versão final)

```javascript
// Escreva aqui o código completo corrigido com comentários explicativos

```

## O que aprendi

Em 2-3 frases, qual destes erros você considera mais fácil de cometer e como pretende evitá-lo daqui para frente:

**Sua resposta:**
~~~~

---

## Checklist Final: Pronto para a Aula 05?

Marque cada item abaixo só quando conseguir fazê-lo **sem consultar a aula**:

- [ ] **Explicar** o conceito de operador usando a analogia da caixa de ferramentas
- [ ] **Usar** os 6 operadores aritméticos (`+`, `-`, `*`, `/`, `%`, `**`) para fazer contas
- [ ] **Explicar** por que `"5" + 2` dá `"52"` mas `"5" - 2` dá `3`
- [ ] **Diferenciar** `=` (atribuição) de `===` (comparação)
- [ ] **Usar** `===` e `!==` para comparar, preferindo-os a `==` e `!=`
- [ ] **Usar** `>`, `<`, `>=`, `<=` para comparar números e strings
- [ ] **Completar** as tabelas verdade de `&&`, `||` e `!`
- [ ] **Distinguir** `&&` (lógico) de `&` (bitwise)
- [ ] **Aplicar** a regra de parênteses para controlar a precedência
- [ ] **Combinar** operadores de comparação e lógicos para criar condições
- [ ] **Usar** operadores para verificar status e condições no Gerenciador de Tarefas

> *Acertou todos? Parabéns! Você está pronto para a **Aula 05: Entrada e Saída — Interagindo com o Usuário**. Na próxima aula, você vai aprender a RECEBER dados do usuário com `prompt()`, mostrar mensagens com `alert()`, montar textos com template literals e converter tipos explicitamente. Travou em algum? Releia a seção indicada no campo Conceito-chave da questão correspondente antes de avançar.*

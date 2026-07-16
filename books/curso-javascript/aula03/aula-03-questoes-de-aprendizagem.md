---
titulo: "Aula 03 — Questões de Aprendizagem"
modulo: "01"
---

# JavaScript — Do Zero ao Profissional Aula 03 — Questões de Aprendizagem

## Como Usar Este Arquivo

Este arquivo contém **questões de aprendizagem** para a Aula 03. Diferente dos exercícios que você fez durante a aula, estas questões funcionam como um **checkpoint de domínio** — você deve ser capaz de respondê-las sem consultar o conteúdo principal.

Cada questão tem um **Conceito-chave** (que seção da aula ela verifica), um **Objetivo** claro, **Passos de Execução** que você segue no console do navegador, e um **Template de Entrega** que você copia e preenche.

**Instruções:**
1. Leia cada questão com atenção
2. Siga os passos de execução — todos podem ser feitos no console do navegador
3. Crie a pasta entregas-aula03 dentro da sua pasta de estudos
4. Para cada questão, crie o arquivo de entrega seguindo o template fornecido
5. Só avance quando conseguir completar todas as questões sem reler a aula

---

## Questão 1: Tipos como Naturezas Diferentes

**Conceito-chave:** Aula 03, Seção 1 — O Que São Tipos

**Objetivo:** Distinguir visualmente valores de tipos diferentes e explicar a analogia agua/gelo/vapor.

**Passos de Execução:**

1. Analise os 8 valores abaixo e classifique cada um como number, string ou boolean APENAS pela aparência (sem usar typeof ainda)
2. Depois, confirme cada classificação usando typeof no console
3. Anote se sua previsão estava correta ou não
4. Explique com a analogia agua/gelo/vapor por que duas pessoas podem confundir 42 com "42"

Valores para analisar:
- 42
- "42"
- "true"
- true
- "JavaScript"
- 2026
- false
- "false"

**Entrega:** crie entregas-aula03/01-tipos-como-naturezas.md:

~~~~
# Questão 1 — Tipos como Naturezas Diferentes

## Tabela de classificação

| Valor | Tipo visual (antes do typeof) | typeof confirma | Previsão correta? |
|---|---|---|---|
| 42 | | | |
| "42" | | | |
| "true" | | | |
| true | | | |
| "JavaScript" | | | |
| 2026 | | | |
| false | | | |
| "false" | | | |

## Pergunta de reflexão

Usando a analogia agua/gelo/vapor, explique por que 42 e "42" são diferentes, mesmo parecendo "a mesma coisa" para um ser humano:

**Sua resposta:**
~~~~

---

## Questão 2: typeof — A Lupa em Ação

**Conceito-chave:** Aula 03, Seção 2 — typeof

**Objetivo:** Demonstrar domínio do operador typeof inspecionando 10 valores diferentes e identificar o bug histórico do typeof null.

**Passos de Execução:**

1. Abra o console do navegador (F12)
2. Execute cada comando typeof abaixo e anote o resultado
3. Identifique qual comando produz um resultado "inesperado" e explique por quê
4. Explique como você deve verificar se um valor é null

Comandos para executar:
- typeof 100
- typeof "100"
- typeof "undefined"
- typeof undefined
- typeof null
- typeof true
- typeof false
- typeof "null"
- typeof "true"
- typeof (10 + 5)

**Entrega:** crie entregas-aula03/02-typeof-em-acao.md:

~~~~
# Questão 2 — typeof: A Lupa em Ação

## Tabela de resultados

| Comando | Resultado no console |
|---|---|
| typeof 100 | |
| typeof "100" | |
| typeof "undefined" | |
| typeof undefined | |
| typeof null | |
| typeof true | |
| typeof false | |
| typeof "null" | |
| typeof "true" | |
| typeof (10 + 5) | |

## Pergunta sobre o bug histórico

Qual comando produziu um resultado inesperado? O que ele deveria retornar, e o que retornou na prática? Por que isso acontece?

**Sua resposta:**

## Como verificar null

Qual a forma correta de verificar se uma variável é null, já que typeof null não funciona como esperado?

**Sua resposta:**
~~~~

---

## Questão 3: number — Criando e Inspecionando Números

**Conceito-chave:** Aula 03, Seção 3 — number

**Objetivo:** Criar variáveis numéricas, verificar com typeof e demonstrar a armadilha "5" + 2.

**Passos de Execução:**

1. Abra o console do navegador
2. Crie 3 variáveis do tipo number com valores diferentes (um inteiro, um decimal e um negativo)
3. Use typeof em cada uma e confirme que são todas 'number'
4. Some duas delas e verifique o tipo do resultado
5. Crie a versão "errada" de cada número — com aspas — e compare os resultados de +
6. Explique por que "5" + 2 dá "52"

**Entrega:** crie entregas-aula03/03-number.md:

~~~~
# Questão 3 — number

## Código executado no console

```javascript
let inteiro = ___;
let decimal = ___;
let negativo = ___;

console.log(typeof inteiro);  // Resultado:
console.log(typeof decimal);  // Resultado:
console.log(typeof negativo); // Resultado:
```

## Comparação: número verdadeiro vs número "falso" (com aspas)

| Expressão | Resultado | Tipo do resultado |
|---|---|---|
| 5 + 2 | | |
| "5" + 2 | | |
| 10 + 3 | | |
| "10" + 3 | | |

## Conclusão

Explique com suas palavras por que "5" + 2 não dá 7:

**Sua resposta:**
~~~~

---

## Questão 4: string — Textos e Aspas

**Conceito-chave:** Aula 03, Seção 4 — string

**Objetivo:** Criar strings com aspas simples e duplas, concatenar e verificar tipos, demonstrando o comportamento de aspas dentro de aspas.

**Passos de Execução:**

1. Abra o console do navegador
2. Crie uma string com aspas simples e outra com aspas duplas
3. Concatene as duas com + e verifique o tipo do resultado
4. Teste os 4 casos de aspas dentro de aspas:
   - 'Ela disse "ola"' (simples por fora, duplas dentro)
   - "Ele respondeu 'oi'" (duplas por fora, simples dentro)
   - 'Ela disse 'ola'' (simples por fora, simples dentro — deve falhar)
   - "Ela disse "ola"" (duplas por fora, duplas dentro — deve falhar)
5. Anote quais casos funcionam e quais dão erro

**Entrega:** crie entregas-aula03/04-string.md:

~~~~
# Questão 4 — string

## Código executado

```javascript
let comSimples = '___';
let comDupla = "___";

let concatenada = comSimples + comDupla;
console.log(concatenada);       // Resultado:
console.log(typeof concatenada); // Resultado:
```

## Aspas dentro de aspas

| Código | Funciona? (Sim/Não) | Resultado ou erro |
|---|---|---|
| 'Ela disse "ola"' | | |
| "Ele respondeu 'oi'" | | |
| 'Ela disse 'ola'' | | |
| "Ela disse "ola"" | | |

## Regra deduzida

Complete a frase: "Para incluir aspas dentro de uma string, use aspas ______ por fora e aspas ______ por dentro."

**Sua resposta:**
~~~~

---

## Questão 5: boolean, null e undefined — Os Três Tipos Especiais

**Conceito-chave:** Aula 03, Seção 5 — boolean, null e undefined

**Objetivo:** Criar e inspecionar variáveis dos tipos boolean, null e undefined; diferenciar null de undefined usando a analogia dos copos.

**Passos de Execução:**

1. Abra o console do navegador
2. Crie 2 variáveis booleanas (uma true e uma false)
3. Crie uma variável com let que recebe null
4. Crie uma variável com let que NÃO recebe valor nenhum (só declarada)
5. Use typeof em todas as variáveis e anote os resultados
6. Tente usar True (com T maiúsculo) e veja o erro
7. Explique a diferença entre null e undefined

**Entrega:** crie entregas-aula03/05-boolean-null-undefined.md:

~~~~
# Questão 5 — boolean, null e undefined

## Código executado

```javascript
let lampadaAcesa = ___;
let portaoAberto = ___;
let selecao = ___;
let futuro;
```

## Tabela de typeof

| Variável | Valor | typeof |
|---|---|---|
| lampadaAcesa | | |
| portaoAberto | | |
| selecao | | |
| futuro | | |

## Pergunta de reflexão

Usando a analogia dos copos, explique a diferença entre null e undefined:

- null é como um copo _________________________________
- undefined é como um copo _____________________________

## Erro proposital

O que acontece quando você tenta usar True (com T maiúsculo) em vez de true?

**Sua resposta:**
~~~~

---

## Questão 6: Gerenciador de Tarefas com Tipos Corretos

**Conceito-chave:** Aula 03, Seções 3, 4 e 5 — Aplicação ao Projeto

**Objetivo:** Revisitar o Gerenciador de Tarefas da Aula 02 e adicionar consciência de tipos com typeof, variáveis booleanas, null e undefined.

**Passos de Execução:**

1. Copie o código do Gerenciador de Tarefas da Aula 02 (ou recrie-o)
2. Adicione console.log(typeof ...) para CADA variável existente
3. Adicione 3 novas variáveis booleanas: tarefa1Concluida, tarefa2Concluida, tarefa3Concluida
4. Verifique typeof das novas variáveis
5. Adicione let tarefaSelecionada = null e let contador (undefined)
6. Verifique typeof de tarefaSelecionada e contador
7. Justifique cada escolha de tipo em uma tabela

**Entrega:** crie entregas-aula03/06-gerenciador-com-tipos.md:

~~~~
# Questão 6 — Gerenciador de Tarefas com Tipos Corretos

## Código completo com typeof

```javascript
const nomeDoApp = "Gerenciador de Tarefas";
console.log(typeof nomeDoApp);

// Suas tarefas aqui (adicione todas as variaveis da Aula 02 + typeof)
```

## Novas variáveis desta aula

```javascript
let tarefa1Concluida = ___;
let tarefa2Concluida = ___;
let tarefa3Concluida = ___;
let tarefaSelecionada = ___;
let contador;
```

## Tabela de justificativa

| Variável | Tipo | Justificativa (por que esse tipo é o correto?) |
|---|---|---|
| nomeDoApp | string | |
| tarefa1 | | |
| totalDeTarefas | | |
| tarefa1Concluida | | |
| tarefaSelecionada | | |
| contador | | |

## Pergunta de reflexão

O que mudou no seu Gerenciador de Tarefas agora que você conhece tipos? Antes você criava variáveis "no instinto". Agora você escolhe o tipo conscientemente. Como isso melhora seu código?

**Sua resposta:**
~~~~

---

## Questão 7: Diagnóstico de Tipos — Encontre e Corrija os Erros

**Conceito-chave:** Aula 03, Seções 3, 4 e 5 — Erros comuns de tipo

**Objetivo:** Identificar e corrigir 6 confusões de tipo em um trecho de código fornecido, usando typeof como ferramenta de diagnóstico.

**Passos de Execução:**

1. Analise o código abaixo que contém 6 problemas relacionados a tipos
2. Para cada problema, identifique: a linha aproximada, o que está errado, o que typeof revelaria, a causa e a correção
3. Teste cada correção no console do navegador
4. Escreva a versão final corrigida completa

```javascript
let quantidade = "10";
let total = quantidade + 5;
console.log(total);

let nome = 'Joao;
console.log(nome);

let tarefaConcluida = True;
console.log(tarefaConcluida);

let tarefa;
console.log(tarefa.length);

let altura = "1.75";
let dobro = altura * 2;
console.log(dobro);

let vazio = null;
console.log(typeof vazio);
```

**Entrega:** crie entregas-aula03/07-diagnostico-de-tipos.md:

~~~~
# Questão 7 — Diagnóstico de Tipos

## Tabela de diagnóstico

| Linha (aprox.) | Problema | typeof revelaria | Causa | Correção |
|---|---|---|---|---|
| | | | | |
| | | | | |
| | | | | |
| | | | | |
| | | | | |
| | | | | |

## Código corrigido (versão final)

```javascript
// Escreva aqui o código completo corrigido
```

## O que aprendi

Em 2-3 frases, explique qual destes erros você considera mais fácil de cometer e como o typeof pode ajudar a diagnosticá-lo:

**Sua resposta:**
~~~~

---

## Checklist Final: Pronto para a Próxima Aula?

Marque cada item abaixo só quando conseguir fazê-lo **sem consultar a aula**:

- [ ] **Explicar** o conceito de tipo de dado usando a analogia agua/gelo/vapor
- [ ] **Distinguir** visualmente number (sem aspas), string (com aspas) e boolean (true/false sem aspas)
- [ ] **Usar** o operador typeof para inspecionar o tipo de qualquer valor ou variável
- [ ] **Criar** variáveis do tipo number, string e boolean
- [ ] **Explicar** por que + se comporta diferente com numbers (soma) e strings (concatenação)
- [ ] **Diferenciar** aspas simples de aspas duplas e saber incluir aspas dentro de strings
- [ ] **Diferenciar** null (vazio intencional) de undefined (ausência acidental)
- [ ] **Identificar** o bug histórico do typeof null (retorna 'object')
- [ ] **Diagnosticar** confusões de tipo usando typeof
- [ ] **Aplicar** os tipos corretos (number, string, boolean) às variáveis do Gerenciador de Tarefas

> *Acertou todos? Parabéns! Você está pronto para a próxima aula: Operadores — Aritmética, Comparação e Lógica. Na próxima aula, você vai levar números, strings e booleanos para o próximo nível: vai somar, subtrair, multiplicar, dividir, comparar valores e combinar decisões lógicas. Travou em algum? Releia a seção indicada na questão correspondente antes de avançar.*

---
titulo: "JavaScript — Do Zero ao Profissional — Aula 08 — Questões de Aprendizagem"
modulo: "01"
---

# JavaScript — Do Zero ao Profissional Aula 08 — Questões de Aprendizagem

## Como Usar Este Arquivo

Este arquivo é o **checkpoint de aprendizagem** da Aula 08. As 7 questões abaixo testam se você realmente entendeu os conceitos de loops em JavaScript — for, while, do...while, break, continue, loop infinito e a integração deles no Gerenciador de Tarefas.

**Como proceder:**

1. Crie uma pasta `entregas-aula-08/` na mesma pasta onde você salva seus exercícios.
2. Para cada questão, crie um arquivo separado com o nome indicado (ex: `Q1-fluxograma-loop.md`).
3. Preencha o template de entrega com suas respostas.
4. Só avance para a próxima questão quando completar a anterior.

Cada questão indica qual seção da aula principal você deve consultar se travar. O objetivo é fazer sem consultar — mas se precisar, a referência está lá.

> *"Só avance para a Aula 09 quando conseguir completar todas as questões por conta própria."*

---

## Questão 1: Fluxograma do cotidiano com loop

**Conceito-chave:** Conceito de repetição e fluxogramas (Aula 08, Seções 1-3).

**Objetivo:** Demonstrar que você entendeu o padrão "ação + condição de parada" de um loop, criando um fluxograma textual de uma situação cotidiana.

**Passos de Execução:**

1. Escolha uma atividade repetitiva do seu dia a dia que SIGA UM PADRÃO DE LOOP (ex: escovar os dentes, lavar louça, esperar o ônibus, fazer flexões).
2. Identifique: a ação que se repete, a condição de parada e se é repetição por contador (sabe quantas vezes) ou por condição (não sabe).
3. Descreva o fluxograma usando o formato textual abaixo.

**Entrega:** crie `entregas-aula-08/Q1-fluxograma-loop.md`:

~~~~
## Questão 1 — Fluxograma do Cotidiano

## Atividade escolhida
[Descreva a atividade em 1 frase]

## Elementos do loop
- **Ação que se repete:** [o que você faz repetidamente]
- **Condição de parada:** [quando você para de repetir]
- **Tipo de repetição:** [contador / condição]
- **Se for contador:** [quantas vezes repete]
- **Se for condição:** [o que precisa mudar para parar]

## Fluxograma textual
Descreva o fluxo usando setas → e blocos:

```
INICIO → [AÇÃO: descrição] → PERGUNTA: [condição]?
  Se SIM → [AÇÃO: próxima etapa] → FIM
  Se NÃO → volta para [AÇÃO]
```

## Reflexão
O que aconteceria se a condição de parada nunca fosse alcançada?
[Responda em 2-3 frases]
~~~~

---

## Questão 2: Tabuada interativa com for

**Conceito-chave:** for — repetição com contador (Aula 08, Seção 4).

**Objetivo:** Implementar um loop `for` que gere a tabuada de um número fornecido pelo usuário.

**Passos de Execução:**

1. Crie um arquivo HTML com `<script>` JavaScript.
2. Use `prompt()` para perguntar um número ao usuário.
3. Use `Number()` para converter a entrada.
4. Use um `for` que vá de 1 até 10.
5. Dentro do loop, calcule `numero * i` e exiba no console.
6. Teste com diferentes números.

**Entrega:** crie `entregas-aula-08/Q2-tabuada-for.html` (arquivo HTML completo):

~~~~
## Questão 2 — Tabuada com for

## Código HTML completo
[Cole o código HTML do seu programa aqui]

```html
<!-- Seu codigo aqui -->
```

## Saída do console (exemplo para o número 7)
[Cole a saída que apareceu no console quando você testou com o número 7]

## Pergunta de reflexão
Se você mudasse a condição do `for` de `i <= 10` para `i <= 12`, o que aconteceria?
[Responda em 1-2 frases]
~~~~

---

## Questão 3: Senha com while

**Conceito-chave:** while — repetição condicional (Aula 08, Seção 5).

**Objetivo:** Implementar um programa que pede uma senha ao usuário repetidamente até ele acertar, usando `while`.

**Passos de Execução:**

1. Crie um arquivo HTML com `<script>` JavaScript.
2. Defina uma senha fixa com `const senhaCorreta = "abracadabra"`.
3. Use `let tentativa = ""` para guardar o palpite.
4. Use `while (tentativa !== senhaCorreta)` para repetir.
5. Dentro do loop, use `prompt()` para perguntar a senha.
6. Após o loop, exiba "Acesso permitido!" com `alert()`.
7. Teste errando e depois acertando a senha.

**Entrega:** crie `entregas-aula-08/Q3-senha-while.html` (arquivo HTML completo):

~~~~
## Questão 3 — Senha com while

## Código HTML completo
[Cole o código HTML do seu programa]

```html
<!-- Seu codigo aqui -->
```

## Teste realizado
- Quantas vezes você errou antes de acertar?
- O que acontece se você clicar em "Cancelar" no prompt?

## Pergunta de reflexão
Se você usasse `do...while` em vez de `while`, o que mudaria no código? (Dica: pense no primeiro prompt antes do loop.)
[Responda em 2-3 frases]
~~~~

---

## Questão 4: Validação com do...while

**Conceito-chave:** do...while — executa pelo menos uma vez (Aula 08, Seção 6).

**Objetivo:** Implementar um validador de entrada usando `do...while` que só aceita números entre 1 e 10.

**Passos de Execução:**

1. Crie um arquivo HTML com `<script>` JavaScript.
2. Use `let numero;` (sem valor inicial).
3. Use `do { ... } while (condicao)` para pedir um número.
4. Dentro do bloco, use `prompt()` e `Number()`.
5. A condição do `do...while` deve verificar se o número é inválido (menor que 1, maior que 10, ou `isNaN`).
6. Após o loop, exiba "Número válido: X" com `alert()`.

**Entrega:** crie `entregas-aula-08/Q4-validacao-dowhile.html` (arquivo HTML completo):

~~~~
## Questão 4 — Validação com do...while

## Código HTML completo
[Cole o código HTML do seu programa]

```html
<!-- Seu codigo aqui -->
```

## Teste realizado
Teste com estes valores e anote o que acontece:
- "abc" (letras): [o que o programa fez?]
- "-5" (negativo): [o que o programa fez?]
- "15" (acima do limite): [o que o programa fez?]
- "7" (válido): [o que o programa fez?]

## Pergunta de reflexão
Por que o `do...while` é mais adequado que o `while` para esta validação?
[Responda em 2-3 frases]
~~~~

---

## Questão 5: break e continue na prática

**Conceito-chave:** break e continue (Aula 08, Seção 7).

**Objetivo:** Criar um programa que percorre números de 1 a 20, exibe apenas os pares (usando `continue` para pular ímpares) e para quando encontrar um número maior que 15 (usando `break`).

**Passos de Execução:**

1. Crie um arquivo HTML com `<script>` JavaScript.
2. Use um `for (let i = 1; i <= 20; i++)`.
3. Dentro do loop:
   a. Se `i` for ímpar (`i % 2 !== 0`), use `continue` para pular.
   b. Se `i` for maior que 15, use `break` para sair.
   c. Caso contrário, exiba `i` no console.
4. Execute e veja a saída.

**Entrega:** crie `entregas-aula-08/Q5-break-continue.html` (arquivo HTML completo):

~~~~
## Questão 5 — break e continue

## Código HTML completo
[Cole o código HTML do seu programa]

```html
<!-- Seu codigo aqui -->
```

## Saída do console
[Cole exatamente o que apareceu no console]

## Perguntas de reflexão
1. Por que o número 16 não aparece, mesmo sendo par?
[Responda em 1-2 frases]

2. O que mudaria na saída se você removesse o `continue`?
[Responda em 1-2 frases]

3. O que mudaria na saída se você trocasse `break` por `continue`?
[Responda em 1-2 frases]
~~~~

---

## Questão 6: Caça ao loop infinito

**Conceito-chave:** Loop infinito — diagnóstico e correção (Aula 08, Seção 8).

**Objetivo:** Identificar, diagnosticar e corrigir três loops quebrados, explicando o erro em cada um.

**Passos de Execução:**

1. Analise cada código abaixo e identifique o problema.
2. ⚠️ **Importante:** Antes de testar cada código no Console, salve seu arquivo HTML e feche outras abas importantes. O código B é um loop infinito — o navegador travará e você precisará fechar a aba forçadamente (Ctrl+W ou Cmd+W).
3. Para cada um, escreva: qual o problema, qual o tipo de loop infinito, e o código corrigido.

**Código A:**
```javascript
let contador = 1;
while (contador <= 5) {
    console.log("Volta " + contador);
}
```

**Código B:**
```javascript
for (let i = 0; i < 10; i++) {
    console.log(i);
    i = 0;
}
```

**Código C:**
```javascript
let ativo = true;
while (ativo = true) {
    console.log("Rodando...");
    ativo = false;
}
```

**Entrega:** crie `entregas-aula-08/Q6-caca-ao-loop-infinito.md`:

~~~~
## Questão 6 — Caça ao loop infinito

## Código A

**Problema identificado:**
[Explique por que este loop nunca para]

**Tipo de erro (marque com X):**
[ ] Esqueceu incremento/alteracao
[ ] Condicao sempre verdadeira
[ ] = em vez de ===
[ ] Outro: ______

**Código corrigido:**
```javascript
// Sua correcao aqui
```

---

## Código B

**Problema identificado:**
[Explique por que este loop nunca para]

**Tipo de erro (marque com X):**
[ ] Esqueceu incremento/alteracao
[ ] Condicao sempre verdadeira
[ ] = em vez de ===
[ ] Outro: ______

**Código corrigido:**
```javascript
// Sua correcao aqui
```

---

## Código C

**Problema identificado:**
[Explique por que este loop nunca para]

**Tipo de erro (marque com X):**
[ ] Esqueceu incremento/alteracao
[ ] Condicao sempre verdadeira
[ ] = em vez de ===
[ ] Outro: ______

**Código corrigido:**
```javascript
// Sua correcao aqui
```

---

## Reflexao final
O que voce pode fazer para EVITAR loops infinitos nos seus programas? De pelo menos 3 dicas.
[Responda em 3-5 frases]
~~~~

---

## Questão 7: Gerenciador evolutivo

**Conceito-chave:** Integração de loops no Gerenciador de Tarefas (Aula 08, Seção 9).

**Objetivo:** Evoluir o Gerenciador de Tarefas da Aula 07 adicionando loops — menu repetitivo com `do...while`, adição múltipla com `for`, validação com `do...while` e contador de tarefas.

**Passos de Execução:**

1. Comece com o código do Gerenciador da Aula 07 (menu com switch, categorização de prioridade).
2. Adicione um `do...while` externo para o menu rodar até o usuário escolher "Sair".
3. Adicione outro `do...while` para validar a opção (só aceitar 1, 2 ou 3).
4. Substitua as variáveis separadas (`tarefa1`, `tarefa2`) por uma string acumulada (`listaDeTarefas += ...`).
5. Adicione um `for` para permitir adicionar múltiplas tarefas de uma vez.
6. Adicione um contador de tarefas (`totalTarefas`).
7. Teste o programa completo.

**Entrega:** crie `entregas-aula-08/Q7-gerenciador-evolutivo.html` (arquivo HTML completo):

~~~~
## Questao 7 — Gerenciador Evolutivo

## Codigo HTML completo
[Cole o codigo HTML completo do seu Gerenciador evoluido]

```html
<!-- Seu codigo aqui -->
```

## Testes realizados

| Teste | O que fiz | Resultado esperado | Resultado obtido |
|---|---|---|---|
| 1 | Digitei opcao invalida "4" no menu | Mensagem de erro e volta ao menu | |
| 2 | Adicionei 3 tarefas de uma vez | 3 tarefas processadas | |
| 3 | Adicionei tarefa vazia | Tarefa ignorada | |
| 4 | Adicionei tarefa com "urgente" | Prioridade ALTA | |
| 5 | Visualizei as tarefas | Lista com prioridades | |
| 6 | Saí do programa | Mensagem de despedida | |

## Perguntas de reflexao

1. O que mudou na experiencia do usuario em relacao ao Gerenciador da Aula 07?
[Responda em 2-3 frases]

2. Qual a limitacao da abordagem com concatenacao de string? O que voce espera aprender na Aula 09 para resolver isso?
[Responda em 2-3 frases]

3. Quantas tarefas voce consegue adicionar antes do programa ficar lento? (Teste com 50, 100 tarefas)
[Responda com o resultado do teste]

---

## Checklist Final: Pronto para a Aula 09?

Marque cada item só quando conseguir fazê-lo **sem consultar a aula**:

- [ ] **Explico** o conceito de loop usando uma analogia do cotidiano
- [ ] **Diferencio** repetição por contador (for) de repetição por condição (while)
- [ ] **Implemento** um `for` para repetir um bloco N vezes
- [ ] **Implemento** um `while` para repetir até uma condição mudar
- [ ] **Implemento** um `do...while` para garantir pelo menos uma execução
- [ ] **Uso** `break` para sair de um loop antes da condição normal
- [ ] **Uso** `continue` para pular uma iteração específica
- [ ] **Identifico** loops infinitos e sei corrigi-los
- [ ] **Integro** loops no Gerenciador de Tarefas (menu + adição múltipla + validação)
- [ ] **Entendo** a limitação da concatenação de string e aguardo arrays na Aula 09

> *Acertou todos? Você está pronto para a Aula 09: Arrays — Criando e Manipulando Listas. Na próxima aula, você vai substituir a string acumulada por uma lista de verdade, onde cada tarefa pode ser acessada, removida e modificada individualmente. Travou em algum? Releia a seção indicada na questão correspondente antes de avançar.*

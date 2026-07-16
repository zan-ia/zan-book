---
titulo: "JavaScript — Do Zero ao Profissional"
modulo: "01"
aula: "26"
---

# JavaScript — Do Zero ao Profissional Aula 26 — Questões de Aprendizagem

## Como Usar Este Arquivo

Este arquivo serve como checkpoint do seu aprendizado. Cada questão verifica um conceito específico trabalhado na Aula 26. Crie uma pasta chamada `entregas-aula-26/` no seu ambiente de desenvolvimento e, dentro dela, salve cada questão em ordem.

A pergunta central é: **"Eu realmente entendi Event Loop, setTimeout, microtasks e AbortController?"** Você deve ser capaz de responder cada questão SEM consultar a aula. Se travar, a seção correspondente está indicada em cada questão — volte e releia antes de tentar novamente.

---

## Questão 1: Síncrono vs Assíncrono — Analisar Situações

**Conceito-chave:** Síncrono vs Assíncrono (Aula 26, Seção 1)

**Objetivo:** Classificar situações cotidianas como síncronas ou assíncronas e explicar o critério usando a analogia do restaurante.

**Passos de Execução:**

1. Para cada situação da tabela, classifique como **síncrona** (a pessoa espera parada) ou **assíncrona** (a pessoa inicia e faz outra coisa enquanto espera).
2. Escreva uma justificativa de uma frase usando a analogia do restaurante (garçom que espera vs garçom que atende outro cliente).
3. Explique o que aconteceria com um programa de computador em cada caso.

**Entrega:** crie `entregas-aula-26/01-sincrono-assincrono.md`:

~~~~
| Situação | Síncrono ou Assíncrono? | Justificativa com analogia |
|---|---|---|
| Colocar roupa na máquina de lavar e ficar olhando o ciclo inteiro | | |
| Enviar um email e continuar trabalhando | | |
| Pedir uma pizza e assistir TV até ela chegar | | |
| Fazer um café e ficar parado em frente à cafeteira esperando | | |
| Baixar um arquivo e navegar em outra aba enquanto isso | | |

## Conclusão
Em 2-3 frases: como saber se uma operação em JavaScript será síncrona ou assíncrona?
~~~~

---

## Questão 2: Event Loop — Prever Ordem de Execução

**Conceito-chave:** Event Loop — Call Stack, Macrotask Queue, Microtask Queue (Aula 26, Seções 2, 7, 8)

**Objetivo:** Prever a ordem de execução de 6 instruções misturando código síncrono, setTimeout e queueMicrotask, e justificar cada etapa.

**Passos de Execução:**

1. Analise o código abaixo e determine a ordem exata de execução (linha por linha).
2. Para cada instrução, identifique se ela executa na call stack, na microtask queue ou na macrotask queue.
3. Explique por que a ordem é essa — descreva o ciclo do Event Loop entre cada etapa.

Código para análise:

~~~~javascript
console.log('1');
setTimeout(() => console.log('2'), 0);
queueMicrotask(() => console.log('3'));
console.log('4');
setTimeout(() => console.log('5'), 5);
queueMicrotask(() => console.log('6'));
~~~~

**Entrega:** crie `entregas-aula-26/02-ordem-execucao.md`:

~~~~
## Ordem Prevista
[Escreva aqui a ordem: 1, ?, ?, ?, ?, ?]

## Justificativa Passo a Passo
1. Linha X (`console.log('1')`) — [call stack / microtask / macrotask? Por quê?]
2. Linha Y — ...
3. ...
4. ...
5. ...
6. ...

## Explicação do Event Loop
[Descreva quando a call stack esvazia, quando microtasks são processadas e quando macrotasks são processadas]
~~~~

---

## Questão 3: setTimeout e clearTimeout — Timer Cancelável

**Conceito-chave:** setTimeout e clearTimeout (Aula 26, Seções 6, 7)

**Objetivo:** Escrever um timer que executa uma função após 4 segundos, mas permite cancelamento antes do disparo.

**Passos de Execução:**

1. Crie um `setTimeout` de 4000ms que imprime "Disparou!" no console.
2. Capture o ID retornado pelo `setTimeout`.
3. Crie um segundo `setTimeout` de 2000ms que chama `clearTimeout` com o ID do primeiro timer.
4. Execute e verifique que "Disparou!" NÃO aparece — o timer foi cancelado antes de disparar.
5. Modifique o segundo timer para 5000ms (mais que o primeiro) e verifique que agora "Disparou!" aparece.

**Entrega:** crie `entregas-aula-26/03-timer-cancelavel.md`:

~~~~
## Código do Timer Cancelável

```javascript
// Escreva aqui o código
```

## Resultado Esperado
[O que aparece no console quando o cancelamento acontece antes do disparo?]

## Resultado com Cancelamento Tardio
[O que aparece no console quando o cancelamento acontece DEPOIS do disparo?]

## Reflexão
[Por que `clearTimeout` não gera erro se o timer já disparou?]
~~~~

---

## Questão 4: Microtasks vs Macrotasks — Prioridade de Execução

**Conceito-chave:** Microtasks vs Macrotasks (Aula 26, Seção 8)

**Objetivo:** Prever e justificar a ordem de execução em um cenário com 2 setTimeout + 2 queueMicrotask + 2 console.log, explicitando a regra de processamento do Event Loop.

**Passos de Execução:**

1. Analise o código abaixo e escreva a ordem de execução.
2. Justifique cada etapa referenciando a regra do Event Loop (call stack → TODAS microtasks → UMA macrotask).
3. Explique o que aconteceria se uma das microtasks adicionasse outra microtask.

Código:

~~~~javascript
console.log('A');
queueMicrotask(() => console.log('B'));
setTimeout(() => console.log('C'), 0);
queueMicrotask(() => console.log('D'));
console.log('E');
setTimeout(() => console.log('F'), 0);
~~~~

**Entrega:** crie `entregas-aula-26/04-micro-macro.md`:

~~~~
## Ordem de Execução
[Escreva aqui]

## Justificativa com a Regra do Event Loop

1. Call stack processa: ______ (síncrono) → imprime ____
2. Microtasks são processadas em lote: ______ → imprime ____
3. Macrotasks são processadas uma por vez: ______ → imprime ____

## E se uma microtask adicionar outra microtask?

[Explique o que aconteceria se `console.log('B')` fosse substituído por:
```javascript
queueMicrotask(() => {
  console.log('B');
  queueMicrotask(() => console.log('B2'));
});
```
Qual a nova ordem? Por quê?]
~~~~

---

## Questão 5: AbortController — Criar, Cancelar e Verificar

**Conceito-chave:** AbortController (Aula 26, Seção 9)

**Objetivo:** Criar um AbortController, associar o signal a uma operação longa simulada com setTimeout, cancelar e verificar o estado.

**Passos de Execução:**

1. Crie um `AbortController` e obtenha o `signal`.
2. Crie uma função `operacaoLonga(signal, callback)` que:
   - Verifica `signal.aborted` antes de iniciar.
   - Usa `setTimeout` de 3000ms para simular trabalho.
   - Dentro do setTimeout, verifica `signal.aborted` antes de chamar o callback.
3. Inicie a operação e, após 1000ms, chame `controller.abort('Cancelado pelo teste')`.
4. Adicione um listener ao `signal` que imprime "OPERAÇÃO CANCELADA: [motivo]".
5. Verifique que o callback da operação NÃO é chamado.

**Entrega:** crie `entregas-aula-26/05-abort-controller.md`:

~~~~
## Código Completo

```javascript
// Escreva aqui
```

## Saída do Console (esperada)
[Descreva o que aparece no console]

## Perguntas de Reflexão
1. O que `signal.aborted` retorna se você verificar ANTES de chamar `abort()`? E DEPOIS?
2. Por que a verificação `signal.aborted` dentro do callback do setTimeout é necessária, mesmo já tendo verificado no início?
3. O que acontece se você tentar chamar `abort()` duas vezes no mesmo controller?
~~~~

---

## Questão 6: Callback Hell — Identificar e Reestruturar

**Conceito-chave:** Callback Hell (Aula 26, Seção 10)

**Objetivo:** Identificar o padrão Callback Hell em um trecho de código aninhado e criar uma versão equivalente com comentários descrevendo cada passo de forma linear.

**Passos de Execução:**

1. Analise o código abaixo e identifique quantos níveis de aninhamento existem.
2. Liste cada etapa na ordem em que executa.
3. Crie uma versão "achatada" onde cada callback é uma função nomeada separada.
4. Adicione comentários descritivos explicando o que cada etapa faz.

Código:

~~~~javascript
setTimeout(() => {
  console.log('1. Carregar configurações');
  setTimeout(() => {
    console.log('2. Autenticar usuário');
    setTimeout(() => {
      console.log('3. Buscar dados do servidor');
    }, 1000);
  }, 1500);
}, 2000);
~~~~

**Entrega:** crie `entregas-aula-26/06-callback-hell.md`:

~~~~
## Análise do Callback Hell

Níveis de aninhamento: [N]

Etapas na ordem de execução:
1. [descrição]
2. [descrição]
3. [descrição]

## Versão Achatada com Funções Nomeadas

```javascript
// Escreva aqui a versão com funções separadas
```

## Reflexão
1. Quantas linhas a versão achatada tem a mais que a original?
2. Em qual versão é mais fácil adicionar uma etapa "4. Exibir dados" no meio? Por quê?
3. Em qual versão é mais fácil adicionar tratamento de erro? Por quê?
~~~~

---

## Questão 7: Projeto — Implementar Debounce no Gerenciador

**Conceito-chave:** Debounce (Aula 26, Seção 11)

**Objetivo:** Implementar a função `debounce` e integrá-la ao campo de busca do Gerenciador de Tarefas, verificando que apenas a última digitação dispara a consulta após 300ms de inatividade.

**Passos de Execução:**

1. Crie a função `debounce(fn, delay)` em um arquivo separado ou dentro do `<script>` do Gerenciador.
2. Crie uma função `filtrarTarefas(termo)` que imprime `"Consultando: [termo]"` no console (a consulta real ao IndexedDB pode ser adicionada depois).
3. Conecte o debounce ao evento `input` do campo de busca com delay 300ms.
4. Digite "teste" rapidamente no campo (4 letras).
5. Verifique no console que APENAS UM log aparece — "Consultando: teste" — e não 4 logs (um por letra).

**Entrega:** crie `entregas-aula-26/07-debounce.md`:

~~~~
## Código da Função Debounce

```javascript
// Escreva aqui
```

## Código de Integração

```javascript
// Escreva aqui o código que conecta o debounce ao input
```

## Resultado do Teste

Descreva o que apareceu no console ao digitar "teste" rapidamente:

```
[cole a saída do console aqui]
```

## Perguntas de Reflexão

1. Quantas consultas ao IndexedDB seriam feitas SEM o debounce se o usuário digitasse "tarefa urgente" (15 caracteres)?
2. Qual o papel do `clearTimeout` no padrão debounce?
3. O que acontece com o timer se o usuário nunca parar de digitar (ex: segurar uma tecla)?
~~~~

---

## Questão 8: Projeto — AbortController no Pipeline IndexedDB

**Conceito-chave:** AbortController + IndexedDB (Aula 26, Seção 12)

**Objetivo:** Estender a Questão 7 com AbortController para cancelar consultas obsoletas ao IndexedDB.

**Passos de Execução:**

1. Crie uma variável `let controllerAtual = null;` no escopo do módulo.
2. Modifique `filtrarTarefas(termo)` para abortar o controller anterior e criar um novo.
3. Crie `buscarNoIndexedDB(termo, signal)` com verificação de `signal.aborted` em 3 checkpoints:
   - Checkpoint 1: antes de abrir a transação
   - Checkpoint 2: antes de abrir o cursor
   - Checkpoint 3: dentro do `onsuccess` do cursor, antes de processar cada registro
4. Teste: digite "tar" rapidamente e, antes dos 300ms do debounce, digite mais "efa" (total: "tarefa"). Verifique que apenas a consulta por "tarefa" completa — a consulta por "tar" é cancelada.

**Entrega:** crie `entregas-aula-26/08-abort-indexeddb.md`:

~~~~
## Variável Global

```javascript
let controllerAtual = null;
```

## Função filtrarTarefas Modificada

```javascript
function filtrarTarefas(termo) {
  // Escreva aqui com AbortController
}
```

## Função buscarNoIndexedDB com Checkpoints

```javascript
function buscarNoIndexedDB(termo, signal) {
  // Checkpoint 1
  // Checkpoint 2
  // Checkpoint 3 (dentro do cursor)
}
```

## Saída do Console Durante Teste

Descreva o que apareceu ao digitar "tar" + "efa":

```
[cole a saída do console aqui]
```

## Perguntas de Reflexão

1. Por que o debounce sozinho não resolve o problema de resultados obsoletos?
2. Em que ordem os 3 checkpoints de `signal.aborted` são verificados?
3. O que aconteceria se a verificação de `signal.aborted` estivesse APENAS no início da função, e não dentro do cursor?
4. Debounce e AbortController resolvem problemas diferentes. Qual problema cada um resolve?
~~~~

---

## Checklist Final: Pronto para a Aula 27?

Marque cada item só quando conseguir fazê-lo **sem consultar a aula**:

- [ ] **Explicar** a diferença entre execução síncrona e assíncrona usando a analogia do restaurante (Seção 1)
- [ ] **Descrever** o ciclo do Event Loop: call stack → microtasks (todas) → macrotask (uma) → repete (Seções 2, 7)
- [ ] **Distinguir** macrotarefas (setTimeout, eventos) de microtarefas (queueMicrotask, MutationObserver) e prever qual executa primeiro (Seções 2, 8)
- [ ] **Utilizar** `setTimeout` e `clearTimeout` para agendar e cancelar a execução de um callback (Seção 6)
- [ ] **Utilizar** `setInterval` e `clearInterval` para executar repetidamente com controle de início e parada (Seção 6)
- [ ] **Aplicar** `queueMicrotask` para agendar microtarefas que executam antes da próxima macrotarefa (Seção 8)
- [ ] **Implementar** `AbortController` com `signal.aborted` e evento `abort` (Seção 9)
- [ ] **Identificar** Callback Hell — o aninhamento profundo de callbacks que forma pirâmide (Seção 10)
- [ ] **Construir** o padrão debounce com `setTimeout`/`clearTimeout` no Gerenciador de Tarefas (Seção 11)
- [ ] **Integrar** AbortController ao pipeline IndexedDB com verificação em 3 checkpoints (Seção 12)

> *Acertou todos? Você está pronto para a Aula 27 — Promises e Fetch API. Você vai aprender como transformar Callback Hell em código linear e fazer requisições HTTP. Travou em algum? Releia a seção indicada na questão correspondente antes de avançar.*

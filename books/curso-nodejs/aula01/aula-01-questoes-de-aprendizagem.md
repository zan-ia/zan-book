---
titulo: "Node.js — Do Zero ao Servidor Express — Aula 01 — Questões de Aprendizagem"
modulo: "01"
aula: "01"
---

# Node.js — Do Zero ao Servidor Express Aula 01 — Questões de Aprendizagem

## Como Usar Este Arquivo

Este é o seu checkpoint de aprendizagem. Após concluir a leitura e as práticas da Aula 01, responda a cada questão sem consultar o material. A pergunta central é: "Eu realmente entendi como um runtime funciona e como o event loop opera?" Cada questão indica a seção da aula que verifica.

**Instruções:**
- Crie uma pasta `entregas-aula-01/` dentro da sua pasta de estudos.
- Para cada questão, crie o arquivo indicado no template e preencha.
- Só avance para a Aula 02 quando conseguir completar todas as questões por conta própria.

---

## Questão 1: Anatomia de um Runtime

**Conceito-chave:** Runtime (Aula 01, Seções 1 e 2).

**Objetivo:** Explicar o que é um runtime JavaScript e descrever seus três componentes fundamentais, diferenciando o que permanece e o que muda quando o JavaScript sai do navegador.

**Passos de Execução:**

1. Defina runtime JavaScript com suas próprias palavras.
2. Liste e descreva cada um dos três componentes de um runtime.
3. Explique o que o JavaScript mantém e o que perde ao sair do navegador. Dê pelo menos 3 exemplos de cada lado.

**Entrega:** crie `entregas-aula-01/01-runtime.md`:

~~~~
**Questão 1 — Anatomia de um Runtime**

## Definição de Runtime
[Escreva aqui sua definição de runtime JavaScript em 2-3 frases]

## Os Três Componentes

| Componente | Função | Analogia |
|---|---|---|
| | | |
| | | |
| | | |

## O que Permanece (mínimo 3)
1.
2.
3.

## O que Muda (mínimo 3)
1.
2.
3.

## Conclusão
[Em 2-3 frases: por que o runtime é importante para o JavaScript fora do navegador?]
~~~~

---

## Questão 2: O Event Loop em Detalhe

**Conceito-chave:** Event Loop (Aula 01, Seção 3).

**Objetivo:** Descrever o ciclo do event loop usando a analogia do garçom, identificando Call Stack, Task Queue e o papel do event loop.

**Passos de Execução:**

1. Explique a analogia do garçom com suas próprias palavras.
2. Descreva o papel de cada estrutura: Call Stack, Task Queue, Event Loop.
3. Responda: o que o event loop verifica para decidir se deve executar um item da fila?

**Entrega:** crie `entregas-aula-01/02-event-loop.md`:

~~~~
**Questão 2 — O Event Loop em Detalhe**

## Analogia do Garçom
[Explique a analogia em 3-4 frases. Inclua: o que o garçom representa, o que são os "pedidos", o que é a "cozinha"]

## Estruturas do Event Loop

**Call Stack (Pilha de Chamadas):**
[Tipo de estrutura? O que armazena?]

**Task Queue (Fila de Tarefas):**
[Tipo de estrutura? O que armazena?]

**Event Loop:**
[O que ele faz continuamente?]

## Pergunta-chave
O que o event loop verifica antes de pegar um item da Task Queue?

[Resposta]

## Conclusão
[Em 2-3 frases: qual a importância do event loop para JavaScript ser uma linguagem não bloqueante com thread única?]
~~~~

---

## Questão 3: Single Thread e Delegação ao SO

**Conceito-chave:** Delegação ao Sistema Operacional (Aula 01, Seção 4).

**Objetivo:** Listar pelo menos 4 operações que o runtime JavaScript delega ao sistema operacional e explicar por que essa delegação é necessária.

**Passos de Execução:**

1. Liste 4 operações delegadas ao SO.
2. Explique por que o JavaScript não pode executar essas operações diretamente.
3. Conecte este conceito à analogia do garçom e da cozinha.

**Entrega:** crie `entregas-aula-01/03-delegacao-so.md`:

~~~~
**Questão 3 — Single Thread e Delegação ao SO**

## Operações Delegadas ao SO

| Operação | Exemplo | Por que não pode ser síncrona? |
|---|---|---|
| 1. | | |
| 2. | | |
| 3. | | |
| 4. | | |

## Por que a Delegação é Necessária?
[Explique em 2-3 frases por que um modelo single-thread PRECISA delegar operações demoradas ao SO]

## Conexão com a Analogia
[Explique como a delegação ao SO se conecta com a analogia do garçom e da cozinha. Quem é o quê?]

## Conclusão
[Em 2-3 frases: o que aconteceria com um servidor Node.js se não houvesse delegação ao SO?]
~~~~

---

## Questão 4: Previsão com setTimeout

**Conceito-chave:** setTimeout e Event Loop (Aula 01, Seção 5).

**Objetivo:** Prever a saída de um script com setTimeout e justificar cada etapa com base no funcionamento do event loop.

**Passos de Execução:**

1. Leia o código abaixo.
2. Determine a sequência EXATA da saída.
3. Justifique cada item com: o que está na Call Stack, o que está na Task Queue, e quando cada um executa.

**Código:**

```javascript
console.log('Primeiro');

setTimeout(() => {
    console.log('Segundo');
}, 0);

setTimeout(() => {
    console.log('Terceiro');
}, 50);

console.log('Quarto');

setTimeout(() => {
    console.log('Quinto');
}, 0);
```

**Entrega:** crie `entregas-aula-01/04-previsao-setTimeout.md`:

~~~~
**Questão 4 — Previsão com setTimeout**

## Minha Previsão
[Escreva a sequência completa que você espera]

## Justificativa Passo a Passo

**Linha 1: console.log('Primeiro')**
[Call Stack vazia? O que acontece?]

**Linha 3: setTimeout(..., 0)**
[O que acontece com o callback? Onde ele vai?]

**Linha 8: setTimeout(..., 50)**
[Diferença para o anterior?]

**Linha 12: console.log('Quarto')**
[Síncrono ou assíncrono?]

**Linha 14: setTimeout(..., 0)**
[Já tem callbacks na fila? Qual a ordem?]

**Quando a Call Stack esvazia:**
[Qual a ordem de execução dos callbacks? Por quê?]

## Saída Final Confirmada
[Escreva a saída linha a linha]

## Conclusão
[Em 2-3 frases: o que este exercício ensina sobre setTimeout(0) e a Task Queue?]
~~~~

---

## Questão 5: Instalação e Primeiro Script

**Conceito-chave:** Instalação do Node.js com nvm e execução de scripts (Aula 01, Seções 6 e 7).

**Objetivo:** Instalar o Node.js com nvm, criar um script que use `console.log` e `node --version`, e executá-lo no terminal.

**Passos de Execução:**

1. Instale o Node.js usando nvm (ou verifique se já está instalado).
2. Verifique a versão instalada com `node --version` no terminal.
3. Crie um script `info-sistema.js` que imprime no console:
   - Uma mensagem de boas-vindas com seu nome
   - A data e hora atuais (use `new Date().toLocaleString()`)
   - O resultado de uma operação matemática (ex: `2024 * 5`)
4. Execute o script com `node info-sistema.js` e confira a saída.

**Entrega:** crie `entregas-aula-01/05-info-sistema.md`:

~~~~
**Questão 5 — Instalação e Primeiro Script**

## Verificação da Instalação

**Comando usado para verificar a versão do Node.js:**
```
[node --version ou similar]
```

**Versão instalada:**
```
[v20.x.x ou similar]
```

**nvm está instalado?** [Sim / Não]

## Código do Script — info-sistema.js

```javascript
// Cole aqui o conteúdo do info-sistema.js
// Exemplo:
// console.log("Bem-vindo ao Node.js, [Seu Nome]!");
// console.log("Data e hora:", new Date().toLocaleString());
// console.log("Resultado:", 2024 * 5);

```

## Saída do Terminal

```
[Cole aqui a saída exata do terminal — a linha com a data, a mensagem de boas-vindas e o resultado da operação]
```

## Conclusão
[Em 2-3 frases: qual a diferença entre executar JavaScript no terminal (Node.js) e no Console do DevTools do navegador?]
~~~~

---

## Questão 6: Event Loop na Prática

**Conceito-chave:** Event Loop em Ação (Aula 01, Seções 8 e 9).

**Objetivo:** Criar um script demonstrativo com 4 operações (2 síncronas, 2 assíncronas com setTimeout), prever a ordem e criar uma tabela "previsto vs observado".

**Passos de Execução:**

1. Crie um script `pratica-event-loop.js` com:
   - Pelo menos 2 console.log síncronos.
   - Pelo menos 2 setTimeout com durações diferentes (ex: 0 e 100ms).
   - Pelo menos 1 setTimeout aninhado (um setTimeout dentro do callback de outro).
2. Antes de executar, anote sua previsão em uma tabela.
3. Execute o script e anote a saída observada.
4. Se houver diferenças, explique por que ocorreram.

**Entrega:** crie `entregas-aula-01/06-pratica-event-loop.md`:

~~~~
**Questão 6 — Event Loop na Prática**

## Código do Script

```javascript
// Cole aqui o script pratica-event-loop.js

```

## Tabela Previsto vs Observado

| Ordem | Previsto | Observado | Igual? |
|---|---|---|---|
| 1 | | | |
| 2 | | | |
| 3 | | | |
| 4 | | | |
| 5 | | | |
| 6 | | | |
| 7 | | | |
| 8 | | | |

## Análise de Divergências (se houver)
[Se alguma previsão estiver errada, explique aqui o motivo]

## Conclusão
[Em 2-3 frases: o que este experimento demonstra sobre a relação entre Call Stack, Task Queue e Event Loop?]
~~~~

---

## Questão 7: Ciclo de Vida Completo de node script.js

**Conceito-chave:** Síntese — Runtime, Event Loop e Node.js (Aula 01, todas as seções).

**Objetivo:** Explicar o ciclo de vida completo da execução de `node script.js`, desde o momento em que o comando é digitado até a saída no terminal.

**Passos de Execução:**

1. Considere o script abaixo:

```javascript
console.log('Iniciando...');

setTimeout(() => {
    console.log('Timer executou');
}, 100);

console.log('Finalizando...');
```

2. Descreva cada etapa do ciclo de vida, desde o terminal até a saída.
3. Identifique em cada etapa qual componente do runtime está ativo (motor, APIs, event loop).
4. Inclua: parsing, execução síncrona, agendamento do timer, delegação ao SO, expiração do timer, Call Stack, Task Queue.

**Entrega:** crie `entregas-aula-01/07-ciclo-de-vida.md`:

~~~~
**Questão 7 — Ciclo de Vida Completo de node script.js**

## Script Analisado

```javascript
console.log('Iniciando...');
setTimeout(() => { console.log('Timer executou'); }, 100);
console.log('Finalizando...');
```

## Etapas do Ciclo de Vida

**Etapa 1: [Nome da etapa]**
[Descrição do que acontece. Qual componente do runtime está ativo?]

**Etapa 2: [Nome da etapa]**
[Descrição do que acontece. Qual componente do runtime está ativo?]

**Etapa 3: [Nome da etapa]**
[Descrição do que acontece. Qual componente do runtime está ativo?]

**Etapa 4: [Nome da etapa]**
[Descrição. Qual componente do runtime está ativo?]

**Etapa 5: [Nome da etapa]**
[Descrição. Qual componente do runtime está ativo?]

## Diagrama Textual do Fluxo

[Crie um fluxo textual usando setas. Exemplo:]
Terminal → node script.js → Motor JS (parsing) → ...

## Saída Final
```
[Saída exata do script]
```

## Conclusão
[Em 2-3 frases: o que este ciclo de vida revela sobre a arquitetura do Node.js?]
~~~~

---

## Checklist Final: Pronto para a Aula 02?

Marque cada item só quando conseguir fazê-lo **sem consultar a aula**:

- [ ] Eu consigo explicar o que é um runtime JavaScript e seus três componentes (Seção 2)
- [ ] Eu consigo descrever o papel do event loop e a diferença entre Call Stack e Task Queue (Seção 3)
- [ ] Eu sei quais operações o JavaScript delega ao sistema operacional e por quê (Seção 4)
- [ ] Eu consigo prever a ordem de execução de código com setTimeout (Seção 5)
- [ ] Eu instalei o Node.js com nvm e sei alternar entre versões (Seção 6)
- [ ] Eu criei e executei meu primeiro script Node.js no terminal (Seção 7)
- [ ] Eu verifiquei que setTimeout se comporta da mesma forma no Node.js e no navegador (Seção 8)
- [ ] Eu realizei experimentos práticos para observar o event loop em ação (Seção 9)
- [ ] Eu completei todas as 7 questões de aprendizagem sem consultar a aula
- [ ] Eu criei a pasta `entregas-aula-01/` com todos os arquivos de entrega

> *Acertou todos? Você está pronto para a Aula 02: npm e Gerenciamento de Pacotes — Do Zero ao Primeiro Projeto. Vai descobrir como o ecossistema Node.js se organiza em pacotes, o que é o package.json e como instalar dependências. Travou em algum item? Releia a seção indicada antes de avançar.*

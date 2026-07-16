---
titulo: "JavaScript — Do Zero ao Profissional — Aula 29 — Questões de Aprendizagem"
modulo: "01"
aula: "29"
---

# JavaScript — Do Zero ao Profissional Aula 29 — Questões de Aprendizagem

## Como Usar Este Arquivo

Este arquivo contém as **questões de checkpoint** da Aula 29 (Web Streams API). Cada questão verifica um conceito-chave da aula. O objetivo é responder à pergunta "eu realmente entendi a matéria?".

**Como proceder:**

1. Complete as questões na ordem — elas seguem a progressão da aula (fundamentos → aplicação → projeto)
2. Cada questão tem um **Objetivo** (o que você deve demonstrar), **Passos de Execução** (o que fazer) e uma **Entrega** (template a preencher)
3. Crie uma pasta `entregas-aula-29/` no seu diretório de trabalho e salve cada entrega como um arquivo Markdown separado
4. Só avance para a Aula 30 quando conseguir completar todas as questões **sem consultar a aula**

> *Se travar em alguma questão, a indicação **Conceito-chave** mostra exatamente qual seção da aula revisar.*

---

## Questão 1: Cenários de Streaming vs Batch

**Conceito-chave:** Streaming vs Batch (Aula 29, Seção 1).

**Objetivo:** Classificar corretamente cenários do mundo real como batch ou streaming, justificando quando cada abordagem é adequada.

**Passos de Execução:**

1. Para cada cenário abaixo, classifique como batch, streaming, ou ambos (justificando)
2. Explique em uma frase por que a classificação se aplica
3. Para cada cenário, indique se a memória necessária é fixa ou proporcional ao total de dados

**Cenários:**
- A: Compilar um projeto de software (centenas de arquivos, executável final)
- B: Transmitir áudio ao vivo de um podcast
- C: Processar um arquivo CSV de 2 GB para gerar relatório de vendas
- D: Fazer upload de uma foto para o Instagram

**Entrega:** crie `entregas-aula-29/01-streaming-vs-batch.md`:

~~~~
# Questão 1 — Streaming vs Batch

## Tabela de Classificação

| Cenário | Batch ou Streaming? | Justificativa | Memória |
|---|---|---|---|
| Compilar projeto | | | |
| Áudio ao vivo | | | |
| CSV 2 GB | | | |
| Upload foto | | | |

## Reflexão

Em 2-3 frases: quando o streaming NÃO é a melhor escolha, mesmo para dados grandes?
~~~~

---

## Questão 2: ReadableStream — Consumindo com getReader/read

**Conceito-chave:** ReadableStream, getReader, read, { value, done } (Aula 29, Seção 5).

**Objetivo:** Criar um ReadableStream manual e consumi-lo com o loop de leitura correto, interpretando o objeto `{ value, done }`.

**Passos de Execução:**

1. Crie um ReadableStream que emite os dias da semana (segunda a domingo) em português
2. Consuma o stream com `getReader()` + loop `while(true)` + `await reader.read()`
3. Exiba cada dia no console conforme chega
4. Ao final, exiba "Semana completa!" no console
5. Teste o stream no Console do navegador

**Entrega:** crie `entregas-aula-29/02-readable-stream-semanas.md`:

~~~~
# Questão 2 — ReadableStream dos Dias da Semana

## Código

```javascript
// [Seu código aqui]
```

## Saída do Console

```
[Copie a saída que apareceu no console]
```

## Pergunta de Reflexão

O que acontece se você chamar `reader.read()` uma sexta vez (depois de já ter recebido `done: true`)?
~~~~

---

## Questão 3: Fetch com Streaming + TextDecoder

**Conceito-chave:** Fetch com streaming, response.body, TextDecoder com { stream: true } (Aula 29, Seção 6).

**Objetivo:** Consumir uma resposta HTTP com `response.body.getReader()` em vez de `response.json()`, exibindo progresso do download.

**Passos de Execução:**

1. Crie ou use um arquivo JSON local (`tarefas-backup.json` com pelo menos 100 tarefas)
2. Sirva os arquivos com `npx serve .`
3. Implemente uma função `carregarComProgresso(url)` que:
   - Faz fetch da URL
   - Obtém `response.body.getReader()`
   - Lê chunk por chunk
   - Usa `TextDecoder` com `{ stream: true }`
   - Exibe no console a quantidade de bytes recebidos a cada chunk
   - Ao final, mostra o total de bytes e faz `JSON.parse()`
4. Teste com `await carregarComProgresso('./tarefas-backup.json')`

**Entrega:** crie `entregas-aula-29/03-fetch-streaming.md`:

~~~~
# Questão 3 — Fetch com Streaming

## Código da Função

```javascript
// [Seu código da função carregarComProgresso]
```

## Saída do Console

```
[Exemplo da saída mostrando chunks chegando]
```

## Pergunta de Reflexão

Por que é importante usar `{ stream: true }` no `TextDecoder.decode()` quando se lê chunks incrementalmente? O que aconteceria sem ele com a palavra "navegação" (que tem caracteres acentuados)?
~~~~

---

## Questão 4: Pipeline — Readable, Transform, Writable

**Conceito-chave:** Pipeline com pipeThrough e pipeTo, TransformStream customizado (Aula 29, Seções 7-8).

**Objetivo:** Construir um pipeline completo conectando ReadableStream → TransformStream → WritableStream com pipeThrough e pipeTo.

**Passos de Execução:**

1. Crie um ReadableStream que emite números de 1 a 20
2. Crie um TransformStream que transforma cada número em `"Número: X"` (string)
3. Crie um TransformStream que filtra apenas números cujo valor original era par (dica: extraia o número da string antes de filtrar)
4. Crie um WritableStream que acumula as strings em um array
5. Conecte tudo: `readable.pipeThrough(t1).pipeThrough(t2).pipeTo(writable)`
6. Exiba o array final no console

**Entrega:** crie `entregas-aula-29/04-pipeline.md`:

~~~~
# Questão 4 — Pipeline de Transformação

## Código

```javascript
// [Seu código completo com os 4 componentes e o encadeamento]
```

## Saída do Console

```
[Copie o array final]
```

## Pergunta de Reflexão

O que o método `pipeThrough()` retorna? Como isso permite o encadeamento fluente `readable.pipeThrough(t1).pipeThrough(t2).pipeTo(writable)`?
~~~~

---

## Questão 5: CompressionStream + TextEncoder/TextDecoder

**Conceito-chave:** CompressionStream, DecompressionStream, TextEncoder, TextDecoder (Aula 29, Seção 9).

**Objetivo:** Implementar um pipeline completo de compressão e descompressão, comparando os tamanhos e verificando a integridade dos dados.

**Passos de Execução:**

1. Escreva uma função `comprimir(texto)` que:
   - Converte texto para bytes com TextEncoder
   - Cria um ReadableStream com esses bytes
   - Passa por CompressionStream('gzip')
   - Acumula e retorna o Uint8Array comprimido
2. Escreva uma função `descomprimir(bytes)` que:
   - Cria um ReadableStream com os bytes comprimidos
   - Passa por DecompressionStream('gzip')
   - Decodifica o resultado com TextDecoder e retorna a string
3. Teste com um texto de pelo menos 2000 caracteres (use `.repeat()`)
4. Exiba: tamanho original, tamanho comprimido, taxa de compressão, e se a string restaurada é idêntica à original

**Entrega:** crie `entregas-aula-29/05-compressao.md`:

~~~~
# Questão 5 — Compressão e Descompressão

## Código

```javascript
// Função comprimir
// Função descomprimir
// Teste
```

## Resultados

| Métrica | Valor |
|---|---|
| Tamanho original | X bytes |
| Tamanho comprimido | Y bytes |
| Taxa de compressão | Z.Z% |
| String restaurada idêntica? | Sim/Não |

## Pergunta de Reflexão

Por que o CompressionStream opera sobre Uint8Array e não diretamente sobre strings? Qual o papel do TextEncoder e TextDecoder nesse contexto?
~~~~

---

## Questão 6: Backpressure — Explicacao com Analogia

**Conceito-chave:** Backpressure, pipeTo (Aula 29, Seções 3, 7).

**Objetivo:** Explicar o conceito de backpressure usando uma analogia ORIGINAL (diferente das usadas na aula: correia transportadora, restaurante) e conectar com o funcionamento do `pipeTo()`.

**Passos de Execução:**

1. Crie uma analogia original que explique o conceito de backpressure
2. Na sua analogia, identifique: (a) quem é o produtor, (b) quem é o consumidor, (c) o que acontece sem backpressure, (d) como o backpressure resolve
3. Explique como o `pipeTo()` implementa esse conceito em JavaScript — o que ele faz automaticamente que um loop manual não faria

**Entrega:** crie `entregas-aula-29/06-backpressure.md`:

~~~~
# Questão 6 — Analogia de Backpressure

## Minha Analogia

[Descreva sua analogia em 3-5 frases]

## Elementos

| Elemento | Na minha analogia |
|---|---|
| Produtor | |
| Consumidor | |
| Sem backpressure | |
| Com backpressure | |

## Conexão com pipeTo

Explique como o método `pipeTo()` implementa backpressure automaticamente em JavaScript:
~~~~

---

## Questão 7: Streams + Web Workers — Transferencia entre Threads

**Conceito-chave:** Streams e Web Workers, postMessage com transfer list (Aula 29, Seção 10).

**Objetivo:** Explicar como transferir um ReadableStream para um Web Worker e por que a transferência (não cópia) é necessária.

**Passos de Execução:**

1. Explique em 2-3 frases o que significa "transferir" um stream (em vez de copiar)
2. Descreva o código necessário na thread principal para enviar um stream ao Worker
3. Descreva o código necessário no Worker para receber e consumir o stream
4. Explique por que a transferência é preferível à cópia para streams
5. Descreva uma limitação importante após a transferência

**Entrega:** crie `entregas-aula-29/07-streams-workers.md`:

~~~~
# Questão 7 — Streams e Web Workers

## Explicação

[2-3 frases sobre o que significa transferir um stream]

## Código da Thread Principal

```javascript
// [Código para criar worker e transferir stream]
```

## Código do Worker

```javascript
// [Código do worker recebendo e consumindo o stream]
```

## Por que transferir em vez de copiar?

[Explique em 2-3 frases]

## Limitação

[Explique o que acontece com o stream na thread principal após a transferência]
~~~~

---

## Questão 8: Projeto — Streaming + Compressao no Gerenciador

**Conceito-chave:** Integração de streaming de fetch e compressão no Gerenciador de Tarefas (Aula 29, Seções 5-11).

**Objetivo:** Implementar as duas features de streaming no Gerenciador de Tarefas existente.

**Passos de Execução:**

1. **Feature 1 — Carregar backup remoto com streaming:**
   - Adicione um botão "📥 Carregar Backup Remoto" no HTML
   - Implemente a função que faz fetch com `response.body.getReader()`
   - Exiba uma barra de progresso durante o download
   - Ao final, faça `JSON.parse()` e salve as tarefas no IndexedDB uma a uma
   - As tarefas devem aparecer na UI progressivamente (feed ao vivo)

2. **Feature 2 — Compressão de anotações no IndexedDB:**
   - Modifique `salvarTarefaNoDB()` para comprimir anotações com mais de 500 caracteres
   - Armazene o `ArrayBuffer` comprimido no IndexedDB com flag `anotacoesComprimidas: true`
   - Modifique `carregarTarefaDoDB()` para descomprimir automaticamente ao ler
   - Verifique no DevTools (Application > IndexedDB) que as anotações compridas estão armazenadas como ArrayBuffer com tamanho reduzido

3. **Verificação:**
   - O backup remoto mostra progresso incremental
   - Anotações longas ocupam menos espaço no IndexedDB
   - A descompressão é transparente (o usuário vê o texto normal na UI)
   - O Worker de exportação (da Aula 28) comprime o JSON antes de oferecer download

**Entrega:** crie `entregas-aula-29/08-projeto-gerenciador.md`:

~~~~
# Questão 8 — Projeto: Streaming no Gerenciador de Tarefas

## Feature 1 — Backup Remoto

### HTML Adicionado

```html
<!-- [HTML do botão e barra de progresso] -->
```

### Função de Carregamento

```javascript
// [Função de fetch streaming com progresso]
```

### Print do DevTools (Network)

[Descreva o que você observou na aba Network durante o download — os chunks chegando, o progresso sendo atualizado]

## Feature 2 — Compressão de Anotações

### Função salvarTarefaComCompressão

```javascript
// [Função modificada com compressão]
```

### Função carregarTarefaComDescompressão

```javascript
// [Função modificada com descompressão]
```

### Print do DevTools (IndexedDB)

[Descreva o que você observou na aba Application > IndexedDB — o campo anotações como ArrayBuffer, o tamanho reduzido]

## Reflexão Final

Em 3-5 frases: qual o impacto das duas features na experiência do usuário e na eficiência do Gerenciador? O que mudou desde a Aula 28?
~~~~

---

## Checklist Final: Pronto para a Aula 30?

Marque cada item só quando conseguir fazê-lo **sem consultar a aula**:

- [ ] Explico a diferença entre batch e streaming com minhas próprias analogias
- [ ] Descrevo o modelo de pipeline (fonte → transformação → destino) e dou exemplos
- [ ] Defino backpressure e explico por que o consumidor controla o produtor
- [ ] Crio um ReadableStream manual e o consumo com getReader() + loop + { value, done }
- [ ] Uso response.body.getReader() para processar fetch progressivamente
- [ ] Conecto ReadableStream e WritableStream com pipeTo(), entendendo o backpressure automático
- [ ] Crio um TransformStream e o insiro em pipeline com pipeThrough()
- [ ] Comprimo e descomprimo dados com CompressionStream, TextEncoder e TextDecoder
- [ ] Explico como transferir streams para Web Workers via postMessage com transfer list
- [ ] Integro streaming de fetch e compressão de anotações no Gerenciador de Tarefas

> *Acertou todos? Você está pronto para a Aula 30, onde vai organizar todo o código do Gerenciador em módulos ES e aprender técnicas profissionais de debugging. E no final, o Projeto Final (Aula 31) vai unificar TUDO que você construiu nas 31 aulas em uma PWA completa com deploy real.*

> *Travou em algum? Releia a seção indicada na questão correspondente antes de avançar. As aulas finais são densas — cada conceito precisa estar sólido.*

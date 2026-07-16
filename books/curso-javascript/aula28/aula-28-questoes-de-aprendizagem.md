---
titulo: "JavaScript — Do Zero ao Profissional — Aula 28 — Questões de Aprendizagem"
modulo: "01"
aula: "28"
---

# JavaScript — Do Zero ao Profissional Aula 28 — Questões de Aprendizagem

## Como Usar Este Arquivo

Este arquivo contém as **questões de checkpoint** da Aula 28 (Web Workers + Service Workers). Cada questão verifica um conceito-chave da aula. O objetivo é responder à pergunta "eu realmente entendi a matéria?".

**Como proceder:**

1. Complete as questões na ordem — elas seguem a progressão da aula (fundamentos → aplicação → projeto)
2. Cada questão tem um **Objetivo** (o que você deve demonstrar), **Passos de Execução** (o que fazer) e uma **Entrega** (template a preencher)
3. Crie uma pasta `entregas-aula-28/` no seu diretório de trabalho e salve cada entrega como um arquivo Markdown separado
4. Só avance para a Aula 29 quando conseguir completar todas as questões **sem consultar a aula**

> *Se travar em alguma questão, a indicação **Conceito-chave** mostra exatamente qual seção da aula revisar.*

***

## Questão 1: Paralelismo — Quando Usar um Worker

**Conceito-chave:** Paralelismo e workers — classificar tarefas que exigem threads separadas vs processamento na thread principal (Aula 28, Seção 1).

**Objetivo:** Demonstrar que você sabe identificar quais tarefas devem rodar em um Web Worker (thread separada) e quais podem ficar na thread principal.

**Passos de Execução:**

1. Para cada cenário abaixo, classifique como "Worker" (deve rodar em thread separada) ou "Principal" (pode ficar na thread principal)
2. Justifique sua classificação em 1-2 frases explicando POR QUE
3. Responda: o que acontece com a experiência do usuário se uma tarefa "Worker" rodar na thread principal?

**Cenários:**
- A: Exportar 50 mil tarefas para JSON
- B: Atualizar o texto de uma única tarefa na tela quando o usuário clica em "Concluir"
- C: Processar o upload de 200 fotos (redimensionar, comprimir, gerar thumbnail)
- D: Validar o campo de email quando o usuário digita (mostrar se é válido ou não)

**Entrega:** crie `entregas-aula-28/01-classificacao-workers.md`:

~~~~
# Questão 1 — Classificação de Tarefas

## Classificações

| Cenário | Classificação (Worker / Principal) | Justificativa |
|---|---|---|
| A — Exportar 50 mil tarefas para JSON | [sua resposta] | [justificativa] |
| B — Atualizar texto de tarefa na tela | [sua resposta] | [justificativa] |
| C — Processar upload de 200 fotos | [sua resposta] | [justificativa] |
| D — Validar campo de email | [sua resposta] | [justificativa] |

## Impacto na Experiência do Usuário

Explique o que acontece se uma tarefa classificada como "Worker" for executada na thread principal:

[2-3 frases explicando o impacto]
~~~~

***

## Questão 2: Proxy e Intermediação — O Papel do Service Worker

**Conceito-chave:** Intermediário inteligente (proxy) — Service Worker como garçom entre página e rede (Aula 28, Seção 2).

**Objetivo:** Explicar o papel do Service Worker usando a analogia do garçom, mostrando que você entende o conceito de intermediação programável.

**Passos de Execução:**

1. Releia a analogia do garçom na Seção 2 (se precisar)
2. Crie uma tabela comparando o garçom do restaurante com o Service Worker, mapeando: o que cada um recebe, o que cada um decide, o que cada um serve
3. Explique em 2-3 frases como o AbortController (Aula 26) e o Service Worker são ambos "intermediários programáveis"
4. Dê um exemplo de decisão que o Service Worker pode tomar que o AbortController NÃO pode

**Entrega:** crie `entregas-aula-28/02-analogia-garcom.md`:

~~~~
# Questão 2 — Analogia do Garçom

## Tabela Comparativa

| Aspecto | Garçom do Restaurante | Service Worker |
|---|---|---|
| O que recebe | [o que o garçom recebe do cliente] | [o que o SW recebe da página] |
| O que decide | [o que o garçom decide] | [o que o SW decide] |
| O que serve | [o que o garçom entrega] | [o que o SW retorna] |
| O que acontece se a cozinha está fechada | [como o garçom reage] | [como o SW reage] |

## Intermediários Programáveis

Explique como AbortController e Service Worker são exemplos do mesmo princípio de intermediação:

[2-3 frases comparando os dois]

## Decisão Exclusiva do SW

Descreva uma decisão que o Service Worker pode tomar mas o AbortController não:

[1-2 frases]
~~~~

***

## Questão 3: Web Worker — Dobrar Valores com postMessage

**Conceito-chave:** Comunicação Web Worker com postMessage/onmessage (Aula 28, Seção 4).

**Objetivo:** Criar um Web Worker funcional que recebe um array de números, processa (dobra cada valor) e devolve o resultado, demonstrando domínio do padrão postMessage/onmessage.

**Passos de Execução:**

1. Crie um arquivo `dobrador-worker.js` com o código do Worker
2. Crie um arquivo `pagina.html` que: (a) cria o Worker, (b) envia um array de números, (c) recebe o resultado e exibe no console, (d) trata erros com `onerror`
3. Teste em servidor local (Workers não funcionam com file://)
4. Adicione um tratamento de erro: se o array recebido estiver vazio, o Worker deve retornar uma mensagem de erro

**Entrega:** crie `entregas-aula-28/03-worker-dobrador.md`:

~~~~
# Questão 3 — Worker Dobrador

## Código do Worker (dobrador-worker.js)

```javascript
[cole aqui o código completo do Worker]
```

## Código da Página (pagina.html)

```html
[cole aqui o código HTML + JS da página que usa o Worker]
```

## Teste Realizado

Descreva o teste que você fez:

- Array enviado: [valores]
- Resultado recebido no console: [valores]
- Teste com array vazio: [resultado / mensagem de erro]

## Reflexão

O Worker poderia acessar `document.querySelector()` para modificar a página? Explique:

[1-2 frases]
~~~~

***

## Questão 4: Service Worker — Registro com Install e Activate

**Conceito-chave:** Registro de Service Worker e ciclo de vida — eventos install e activate (Aula 28, Seção 6).

**Objetivo:** Registrar um Service Worker e implementar os listeners de install (pré-cache) e activate (limpeza de caches antigos).

**Passos de Execução:**

1. Crie o arquivo `meu-sw.js` com:
   - Constante `CACHE_NOME` com valor versionado (ex: `'meu-cache-v1'`)
   - Array `ASSETS` com 4 arquivos fictícios (ex: `/`, `/index.html`, `/style.css`, `/app.js`)
   - Evento `install`: pré-cache com `cache.addAll()` dentro de `event.waitUntil()`
   - Evento `activate`: limpa caches que não sejam da versão atual usando `caches.keys()` e `caches.delete()`
2. Crie o código de registro no HTML que verifica suporte a SW e registra com `scope: '/'`
3. Teste: abra no navegador, verifique no DevTools → Application → Cache Storage

**Entrega:** crie `entregas-aula-28/04-sw-install-activate.md`:

~~~~
# Questão 4 — Service Worker Install e Activate

## Código do Service Worker (meu-sw.js)

```javascript
[cole aqui o código completo do SW com install e activate]
```

## Código de Registro (no HTML)

```javascript
[cole aqui o código que registra o SW]
```

## Teste no DevTools

Descreva o que você viu no DevTools:

- Service Worker está "activated and running"? [sim / não]
- Cache Storage aparece com o nome escolhido? [sim / não]
- Quais assets estão listados no cache? [lista]

## Pergunta de Reflexão

O que acontece com a instalação do SW se um dos assets em `cache.addAll()` retornar 404?

[2-3 frases explicando]
~~~~

***

## Questão 5: Cache API — cache.match + fetch + cache.put

**Conceito-chave:** Cache API — cache.match(), fetch(), cache.put() e response.clone() (Aula 28, Seção 7).

**Objetivo:** Implementar o fluxo completo de busca no cache, fetch da rede e armazenamento com clone, demonstrando domínio da Cache API.

**Passos de Execução:**

1. Escreva uma função `async` chamada `buscarOuCachear(request)` que:
   - Tenta encontrar a requisição no cache com `caches.match()`
   - Se encontrou, retorna a resposta do cache
   - Se não encontrou, faz `fetch()` da rede
   - Se o fetch funcionou, clona a resposta com `.clone()`, armazena o clone no cache com `cache.put()`, e retorna a resposta original
   - Se o fetch falhar, retorna um `new Response('Offline', { status: 503 })`
2. Use `async/await` e `try/catch` em toda a função

**Entrega:** crie `entregas-aula-28/05-cache-api.md`:

~~~~
# Questão 5 — Cache API: buscarOuCachear

## Código da Função

```javascript
[cole aqui a função buscarOuCachear completa]
```

## Explicação do response.clone()

Por que o `response.clone()` é necessário neste fluxo? O que aconteceria sem ele?

[2-3 frases explicando o problema do "Body has already been consumed"]
```

## Teste Conceitual

Suponha que a função é chamada duas vezes para a mesma URL:

1. Primeira chamada: [o que acontece? cache hit ou miss?]
2. Segunda chamada: [o que acontece? cache hit ou miss?]

Explique:
~~~~

***

## Questão 6: Cache First — Estratégia para Assets Estáticos

**Conceito-chave:** Cache First — estratégia de cache para assets estáticos (Aula 28, Seção 8).

**Objetivo:** Implementar a estratégia Cache First completa com async/await, try/catch e tratamento de fallback.

**Passos de Execução:**

1. Escreva uma função `async cacheFirst(request)` que:
   - Tenta `caches.match(request)` primeiro
   - Se encontrar no cache, retorna a resposta do cache
   - Se NÃO encontrar, faz `fetch(request)` da rede
   - Se o fetch funcionar, abre o cache com `caches.open()`, armazena com `cache.put(request, resposta.clone())`, retorna a resposta
   - Se o fetch falhar E não tiver cache, retorna um fallback apropriado
2. O fallback para documentos HTML deve ser uma página offline inline
3. O fallback para outros recursos (imagens, CSS) pode ser um Response vazio com status 503

**Entrega:** crie `entregas-aula-28/06-cache-first.md`:

~~~~
# Questão 6 — Cache First

## Código da Função

```javascript
[cole aqui a função cacheFirst completa]
```

## Quando Usar Cache First

Cite 3 tipos de recurso que devem usar Cache First e explique por que:

1. [recurso] → [por que Cache First]
2. [recurso] → [por que Cache First]
3. [recurso] → [por que Cache First]

## Comparação

Qual a principal vantagem do Cache First sobre o Network First? E a principal desvantagem?

| Estratégia | Vantagem principal | Desvantagem principal |
|---|---|---|
| Cache First | [vantagem] | [desvantagem] |
| Network First | [vantagem] | [desvantagem] |
~~~~

***

## Questão 7: Network First — Estratégia para Dados de API

**Conceito-chave:** Network First — estratégia de cache para dados dinâmicos (Aula 28, Seção 8).

**Objetivo:** Implementar a estratégia Network First completa com fallback para cache e tratamento de erro.

**Passos de Execução:**

1. Escreva uma função `async networkFirst(request)` que:
   - Tenta `fetch(request)` da rede primeiro
   - Se o fetch funcionar, abre o cache, armazena com `cache.put(request, resposta.clone())` e retorna a resposta
   - Se o fetch falhar (offline ou erro), tenta `caches.match(request)` como fallback
   - Se também não tiver no cache, retorna um JSON de erro com status 503: `{ erro: "Offline", mensagem: "Sem conexão com a internet" }`
2. Use `async/await` e `try/catch`
3. Dica: o `fetch` dentro de um `try` resolve o caso de erro de rede

**Entrega:** crie `entregas-aula-28/07-network-first.md`:

~~~~
# Questão 7 — Network First

## Código da Função

```javascript
[cole aqui a função networkFirst completa]
```

## Quando Usar Network First

Cite 2 exemplos de recursos que devem usar Network First:

1. [recurso] → [por que Network First]
2. [recurso] → [por que Network First]

## Fluxo Offline

Descreva passo a passo o que acontece quando o usuário está offline e faz uma requisição que usa Network First:

1. [passo 1]
2. [passo 2]
3. [passo 3]
4. [passo 4: resultado final para o usuário]
~~~~

***

## Questão 8: Projeto — Service Worker do Gerenciador Offline

**Conceito-chave:** 🔗 Projeto — Service Worker completo do Gerenciador com Cache First + Network First (Aula 28, Seções 6, 7, 8, 9).

**Objetivo:** Criar o Service Worker completo do Gerenciador de Tarefas que implementa Cache First para assets e Network First para frases motivacionais, e registrar no index.html.

**Passos de Execução:**

1. Crie o arquivo `sw.js` na raiz do seu projeto do Gerenciador
2. Implemente os três eventos: `install` (pré-cache de assets), `activate` (limpeza de caches antigos), `fetch` (roteamento de estratégias)
3. No `fetch`: use Cache First para assets estáticos (mesmo domínio, exceto `/api/`) e Network First para URLs com `/api/`
4. No `install`: cacheie pelo menos 5 assets: `'/'`, `'/index.html'`, `'/estilo.css'`, `'/app.js'`, `'/exportador-worker.js'`
5. Registre o SW no `index.html` com `navigator.serviceWorker.register('/sw.js')`
6. Teste offline: DevTools → Network → Offline → recarregar → verificar que o app funciona

**Entrega:** crie `entregas-aula-28/08-sw-gerenciador.md`:

~~~~
# Questão 8 — Service Worker do Gerenciador

## Código do sw.js

```javascript
[cole aqui o código completo do sw.js]
```

## Código de Registro (no index.html)

```javascript
[cole aqui o código que registra o SW]
```

## Teste Offline

Descreva o resultado do teste offline:

- O app carregou sem internet? [sim / não]
- As tarefas aparecem? [sim / não]
- É possível adicionar nova tarefa? [sim / não]
- A seção de Frases Motivacionais: [funciona / mostra fallback / mostra erro]
- O botão de Exportar JSON funciona? [sim / não]

## Evidência do DevTools

Liste o que você viu em:

- **Application → Cache Storage:** [caches existentes e assets listados]
- **Application → Service Workers:** [status do SW]
- **Network → Offline:** [comportamento da página]

## Pergunta de Reflexão

O que acontece se você modificar o `style.css` e depois recarregar a página estando offline? Como garantir que o usuário veja a versão mais recente?

[2-3 frases explicando o problema da atualização de cache]
~~~~

***

## Questão 9: Projeto — Web Worker de Exportação JSON

**Conceito-chave:** 🔗 Projeto — Web Worker de exportação do Gerenciador (Aula 28, Seções 4, 5).

**Objetivo:** Criar o Web Worker de exportação JSON e integrar ao botão de exportação do Gerenciador, demonstrando que o processamento pesado não trava a UI.

**Passos de Execução:**

1. Crie o arquivo `exportador-worker.js` que:
   - Escuta `self.onmessage` recebendo `{ tarefas }`
   - Processa: adiciona metadados (versão, data, total de tarefas, contagem de concluídas/pendentes)
   - Converte para JSON formatado com `JSON.stringify(..., null, 2)`
   - Retorna com `self.postMessage({ sucesso: true, json, estatisticas })`
   - Em caso de erro: `self.postMessage({ sucesso: false, erro: mensagem })`
2. Modifique o botão de exportação no `index.html` para usar o Worker:
   - Criar Worker com `new Worker('exportador-worker.js')`
   - Buscar tarefas do IndexedDB
   - Enviar para o Worker com `postMessage`
   - Receber resultado com `onmessage`
   - Criar Blob e disparar download
   - Encerrar Worker com `terminate()` após uso
3. Teste com 50+ tarefas: a UI NÃO deve travar durante a exportação
4. Adicione indicador visual de "Processando..." enquanto o Worker trabalha

**Entrega:** crie `entregas-aula-28/09-worker-exportacao.md`:

~~~~
# Questão 9 — Web Worker de Exportação

## Código do exportador-worker.js

```javascript
[cole aqui o código completo do Worker]
```

## Código do Botão de Exportação (no index.html)

```javascript
[cole aqui o código do evento de clique que usa o Worker]
```

## Código do Indicador de Status

```javascript
[cole aqui a função mostrarStatus ou similar]
```

## Teste de Performance

- Número de tarefas usadas no teste: [número]
- A UI travou durante a exportação? [sim / não]
- Você conseguiu scrollar/clicar durante o processamento? [sim / não]
- O download foi disparado corretamente? [sim / não]
- O Worker foi encerrado após uso? [como você verificou]

## Pergunta de Reflexão

Por que o Worker é mais adequado para esta tarefa do que processar diretamente na thread principal? O que muda na experiência do usuário?

[2-3 frases]
~~~~

***

## Checklist Final: Pronto para a Aula 29?

Marque cada item só quando conseguir fazê-lo **sem consultar a aula**:

- [ ] **Explicar** por que JavaScript precisa de threads separadas para tarefas pesadas e o que acontece com a UI quando um cálculo longo roda na thread principal
- [ ] **Descrever** o modelo de comunicação por mensagens (postMessage/onmessage), explicando que workers não compartilham variáveis e que a comunicação é sempre por cópia (Structured Clone)
- [ ] **Diferenciar** Web Workers (threads de computação) de Service Workers (proxy de rede que gerencia cache)
- [ ] **Criar** um Web Worker em arquivo `.js` separado e comunicar-se com ele via `postMessage()` e `onmessage`
- [ ] **Descrever** o ciclo de vida de um Service Worker — register, install, activate, fetch — e o que cada evento possibilita
- [ ] **Registrar** um Service Worker com `navigator.serviceWorker.register()` e implementar os listeners de install, activate e fetch
- [ ] **Utilizar** a Cache API (`caches.open()`, `cache.put()`, `cache.match()`, `cache.addAll()`) para armazenar e recuperar recursos
- [ ] **Implementar** as estratégias Cache First (assets estáticos) e Network First (dados dinâmicos de API) no evento fetch
- [ ] **Construir** um Service Worker que torna o Gerenciador de Tarefas funcional offline
- [ ] **Criar** um Web Worker que exporta tarefas do IndexedDB para JSON sem travar a interface

> *Acertou todos? Você está pronto para a Aula 29, onde vai aprender a Web Streams API — processar dados que chegam aos poucos como água de uma torneira. Travou em algum? Releia a seção indicada na questão correspondente antes de avançar.*

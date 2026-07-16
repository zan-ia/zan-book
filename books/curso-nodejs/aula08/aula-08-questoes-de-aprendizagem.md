---
titulo: "Node.js — Do Zero ao Servidor Express — Aula 08 — Questões de Aprendizagem"
modulo: "01"
aula: "08"
---

# Node.js — Do Zero ao Servidor Express Aula 08 — Questões de Aprendizagem

## Como Usar Este Arquivo

Este arquivo é o **checkpoint de aprendizagem** da Aula 08. A pergunta central é: "eu realmente entendi Middleware a ponto de construir um pipeline de requisição funcional no Express?". Complete as 7 questões na ordem. Cada questão tem um **Objetivo** (o que você precisa demonstrar), **Passos de Execução** (o roteiro para chegar lá) e uma **Entrega** (template para você preencher e salvar). Crie uma pasta `entregas-aula-08/` e salve cada entrega como `Q1-nome-arquivo.md`, `Q2-nome-arquivo.md`, etc.

Se travar em alguma questão, releia a seção indicada no **Conceito-chave** antes de consultar outra fonte.

---

## Questão 1: Desenhando o Pipeline Pattern

**Conceito-chave:** Pipeline Pattern, analogia do aeroporto (Aula 08, Seções 1-2).

**Objetivo:** Demonstrar compreensão do Pipeline Pattern descrevendo a analogia do aeroporto com um diagrama textual e identificando os três desfechos possíveis de um middleware.

**Passos de Execução:**

1. Relembre a analogia dos "filtros de aeroporto": a requisição é o passageiro, cada middleware é um posto de inspeção, e a rota final é o portão de embarque
2. No template de entrega, preencha a descrição completa da analogia, explicando cada estágio
3. Desenhe um diagrama textual com setas (`→`) mostrando o fluxo da requisição passando por cada middleware até a rota
4. Na tabela dos três desfechos, preencha o que acontece em cada caso

**Entrega:** crie `entregas-aula-08/Q1-pipeline-pattern.md`:

~~~~
# Questão 1 — Desenhando o Pipeline Pattern

## Analogia do aeroporto — descrição completa

Explique com suas próprias palavras como a analogia do aeroporto se aplica ao pipeline de middlewares. Identifique:
- O que é o passageiro?
- O que é cada posto de inspeção?
- O que é o portão de embarque?
- O que acontece se um posto retém o passageiro?

**Sua explicação:**

```

```

## Diagrama textual do pipeline

Desenhe um diagrama usando setas (`→`) que mostre uma requisição passando por 3 middlewares antes de chegar à rota final. Inclua uma ramificação para erro.

Exemplo de formato:
```
[Requisição] → [Middleware 1] → [Middleware 2] → [Middleware 3] → [Rota] → [Resposta]
```

**Seu diagrama:**

```

```

## Três desfechos de um middleware

| Desfecho | O que significa | Código JavaScript |
|---|---|---|
| Passar adiante | | `next()` |
| Encerrar a requisição | | |
| Delegar para erro | | |

Preencha a segunda linha da tabela com o que significa "encerrar a requisição" e o código correspondente.

## Pergunta de reflexão

No EventEmitter (Aula 05), um evento pode ter múltiplos ouvintes independentes — todos executam. No Middleware Pattern, a ordem importa e cada middleware decide se o próximo executa. Essa diferença é sutil mas profunda. Em 2-3 frases, explique por que a diferença de "todos executam" (EventEmitter) vs "cada um decide se o próximo executa" (Middleware) muda a forma como você projeta o fluxo de uma requisição.

**Resposta:**

```

```

## Conclusão
Em 2-3 frases, sintetize por que o Pipeline Pattern é útil para processar requisições HTTP antes que elas cheguem ao manipulador final.
~~~~

---

## Questão 2: Middleware de Logging Customizado

**Conceito-chave:** `(req, res, next)`, `app.use()` (Aula 08, Seção 4).

**Objetivo:** Construir um middleware customizado que registre no console o método HTTP, a URL e o timestamp de cada requisição.

**Passos de Execução:**

1. Crie um arquivo `middleware-logger.js` com uma função que recebe `(req, res, next)`
2. A função deve imprimir no console: `[TIMESTAMP] MÉTODO URL`, usando `new Date().toISOString()`
3. Exporte a função com `module.exports`
4. Crie um servidor Express mínimo que importe e use o middleware com `app.use()` antes de qualquer rota
5. Adicione uma rota `GET /ping` que retorna `{ "ok": true }`
6. Execute o servidor e faça 3 requisições com `curl` para verificar o log

**Entrega:** crie `entregas-aula-08/Q2-middleware-logger.md`:

~~~~
# Questão 2 — Middleware de Logging Customizado

## Código do middleware (middleware-logger.js)

```javascript

```

## Código do servidor (server-logger.js)

```javascript

```

## Testes

Execute o servidor e faça 3 requisições:

```bash
curl http://localhost:3000/ping
curl http://localhost:3000/ping
curl http://localhost:3000/ping
```

**Saída do console (cole abaixo o que apareceu no terminal):**

```
Linha 1:
Linha 2:
Linha 3:
```

## Pergunta de reflexão

Se você movesse o `app.use(meuLogger)` para depois da rota `GET /ping`, o que aconteceria? Teste e descreva o resultado.

**Resposta:**

```

```

## Conclusão
Em 2-3 frases, explique qual problema um middleware de logging resolve e por que ele deve vir antes das rotas.
~~~~

---

## Questão 3: express.json() — Antes e Depois

**Conceito-chave:** Internals de `express.json()`, body parsing (Aula 08, Seção 5).

**Objetivo:** Comparar a implementação manual de body parsing (Aula 06) com o middleware `express.json()`, identificando o que ele abstrai.

**Passos de Execução:**

1. Recupere o código da Aula 06 que fazia body parsing manual com `req.on('data')`, `req.on('end')` e `JSON.parse()`
2. Compare com a linha `app.use(express.json())`
3. Preencha a tabela do template mostrando o que cada abordagem faz
4. Responda: o que `express.json()` faz internamente que é idêntico ao código manual?
5. Teste: crie um servidor que usa `express.json()`, faça um POST sem `Content-Type: application/json` e observe o resultado

**Entrega:** crie `entregas-aula-08/Q3-express-json.md`:

~~~~
# Questão 3 — express.json() — Antes e Depois

## Código de body parsing manual (Aula 06)

```javascript
// Cole aqui o trecho de body parsing manual que você usava na Aula 06

```

## Código com express.json() (Aula 07/08)

```javascript

```

## Tabela comparativa

| Aspecto | Body parsing manual (Aula 06) | express.json() (Aula 08) |
|---|---|---|
| Linhas de código | 8+ | 1 |
| Concatena buffers | | |
| Trata erros de JSON inválido | | |
| Define `req.body` | | |
| Verifica Content-Type | | |

Preencha cada célula com "Sim" ou "Não" e um breve comentário.

## Pergunta de reflexão

O que `express.json()` faz internamente que é exatamente igual ao código manual que você escrevia na Aula 06? O que ele faz a mais (que o código manual geralmente não fazia)?

**Resposta:**

```

```

## Conclusão
Em 2-3 frases, explique por que `express.json()` é um exemplo clássico de middleware que abstrai complexidade: ele recebe a `req` bruta (stream de dados) e devolve a `req` transformada (com `req.body` populado).
~~~~

---

## Questão 4: Diagnóstico de Ordem de Middleware

**Conceito-chave:** Ordem de execução, `next()`, pipeline (Aula 08, Seções 3, 4 e 6).

**Objetivo:** Diagnosticar e corrigir 3 cenários onde a ordem de middlewares causa comportamento inesperado.

**Passos de Execução:**

Para cada cenário abaixo:
1. Identifique qual é o bug de ordenação
2. Explique por que o comportamento ocorre — refira-se ao pipeline (qual middleware executa antes, qual depois)
3. Reescreva o código corrigido, movendo ou ajustando os `app.use()` e `app.<método>()` na ordem correta

**Cenário A — Logger silencioso:**

```javascript
const express = require('express');
const app = express();

app.get('/ping', (req, res) => res.json({ ok: true }));

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.listen(3000);
// GET /ping → 200, mas nada é logado
```

**Cenário B — Middleware que "come" a rota:**

```javascript
const express = require('express');
const app = express();

app.use((req, res, next) => {
  res.json({ mensagem: 'middleware interceptou' });
  // next() não foi chamado
});

app.get('/tarefas', (req, res) => {
  res.json([]);
});

app.listen(3000);
// GET /tarefas → { mensagem: 'middleware interceptou' }, nunca chega na rota
```

**Cenário C — Error handler invisível:**

```javascript
const express = require('express');
const app = express();

app.get('/erro', async (req, res) => {
  throw new Error('Algo deu errado');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ erro: err.message });
});

app.listen(3000);
// GET /erro → crash do servidor — Express 4.x não captura erros em handlers assíncronos, é necessário next(err)
```

**Entrega:** crie `entregas-aula-08/Q4-diagnostico-ordem.md`:

~~~~
# Questão 4 — Diagnóstico de Ordem de Middleware

## Cenário A — Logger silencioso

**O que acontece (qual é o bug)?**

```

```

**Por que a ordem causa esse problema?**

```

```

**Código corrigido:**

```javascript

```

---

## Cenário B — Middleware que "come" a rota

**O que acontece (qual é o bug)?**

```

```

**Por que a ordem (ou a falta de `next()`) causa esse problema?**

```

```

**Código corrigido (duas abordagens possíveis — escolha uma):**

```javascript

```

---

## Cenário C — Error handler invisível

**O que acontece (qual é o bug)?**

```

```

**Por que a ordem causa esse problema?** (Dica: error handlers têm 4 parâmetros, mas o Express só os reconhece se estiverem no lugar certo.)

```

```

**Código corrigido:**

```javascript

```

## Conclusão
Em 3-4 frases, sintetize a regra de ouro da ordem de middlewares no Express: quais vêm primeiro, onde ficam os de erro, e o que acontece se a ordem for violada.
~~~~

---

## Questão 5: Error Handler Global

**Conceito-chave:** `(err, req, res, next)`, `next(error)`, middleware de erro (Aula 08, Seção 6).

**Objetivo:** Construir um middleware de erro global que captura exceções e retorna respostas JSON padronizadas.

**Passos de Execução:**

1. Crie um servidor Express com uma rota `GET /tarefas/:id` que valida o ID e lança erros customizados
2. Implemente um middleware de erro com assinatura `(err, req, res, next)`
3. O error handler deve logar o erro no console e retornar `{ erro: err.message }` com status 500
4. O error handler também deve tratar erros de validação com status 400 e erros de "não encontrado" com status 404
5. Teste com `curl` para cada cenário de erro

**Entrega:** crie `entregas-aula-08/Q5-error-handler.md`:

~~~~
# Questão 5 — Error Handler Global

## Código do servidor com error handler

```javascript

```

## Testes com curl

### GET /tarefas/abc (ID inválido)

```bash

```
**Status:**

**Body:**

### GET /tarefas/1 (não encontrado)

```bash

```
**Status:**

**Body:**

## Perguntas de reflexão

1. Qual a diferença entre passar um erro com `next(err)` e lançar uma exceção com `throw` dentro de uma rota Express?

```

```

2. Se você tivesse dois error handlers registrados, o Express executaria os dois ou apenas o primeiro?

```

```

## Conclusão
Em 2-3 frases, explique por que um error handler global é melhor do que colocar try/catch em cada rota individualmente.
~~~~

---

## Questão 6: CORS e Morgan na Prática

**Conceito-chave:** Middleware de terceiros: `cors()` e `morgan()` (Aula 08, Seção 7).

**Objetivo:** Instalar, configurar e testar os middlewares CORS e Morgan em um servidor Express.

**Passos de Execução:**

1. No diretório do projeto, instale `cors` e `morgan` com npm
2. Crie um servidor Express que use ambos os middlewares ANTES das rotas
3. Configure o Morgan para o formato `'dev'` (que mostra método, url, status e tempo)
4. Configure o CORS para permitir requisições de qualquer origem (padrão: `cors()`)
5. Adicione uma rota `GET /publico` que retorna `{ "dado": "acessível via CORS" }`
6. Teste com `curl -v` e observe os headers CORS e o log do Morgan

**Entrega:** crie `entregas-aula-08/Q6-cors-morgan.md`:

~~~~
# Questão 6 — CORS e Morgan na Prática

## Comandos de instalação

```bash

```

## Código do servidor (server-middlewares.js)

```javascript

```

## Teste com curl

Execute e cole o resultado:

```bash
curl -v http://localhost:3000/publico
```

**Headers de resposta relevantes (copie os que começam com `Access-Control-`):**

```

```

**Log do Morgan (copie o que apareceu no console):**

```

```

## Pergunta de reflexão

1. O que aconteceria se você invertesse a ordem: colocasse as rotas antes do `app.use(cors())`? Teste e descreva.

```

```

2. No cenário do Gerenciador de Tarefas (projeto progressivo), por que o middleware CORS é necessário quando o frontend e o backend estão em portas diferentes?

```

```

## Conclusão
Em 2-3 frases, explique qual problema cada um desses middlewares resolve: o Morgan para desenvolvimento, o CORS para integração frontend-backend.
~~~~

---

## Questão 7: Projeto Progressivo — Timestamp no Servidor

**Conceito-chave:** Middleware customizado, integração com projeto existente (Aula 08, Seção 8).

**Objetivo:** Adicionar um middleware de timestamp ao `servidor-express.js` (criado na Aula 07) que registra o horário de cada requisição em um arquivo `requests.log`.

**Passos de Execução:**

1. Recupere o `servidor-express.js` que você criou na Questão 5 da Aula 07
2. Crie um middleware `timestampLogger` que:
   - Gera um timestamp com `new Date().toISOString()`
   - Monta a string: `[timestamp] MÉTODO URL` (ex: `[2026-07-14T10:30:00.000Z] GET /tarefas`)
3. Além de logar no console, ESCREVA cada linha em um arquivo `requests.log` usando `fs.appendFileSync` do módulo `fs`
4. Use `app.use()` para adicionar o middleware ANTES de todas as rotas
5. Teste: faça 3 requisições a diferentes rotas do servidor e verifique que o arquivo `requests.log` foi criado com 3 entradas

**Entrega:** crie `entregas-aula-08/Q7-timestamp-server.md`:

~~~~
# Questão 7 — Projeto Progressivo — Timestamp no Servidor

## Middleware de timestamp

```javascript

```

## Código do servidor-express.js atualizado

Cole aqui o código completo do `servidor-express.js` com o novo middleware integrado (destaque as linhas adicionadas com um comentário `// NOVO`):

```javascript

```

## Teste

Execute 3 requisições com curl:

```bash
curl http://localhost:3000/tarefas
curl http://localhost:3000/tarefas/1
curl http://localhost:3000/tarefas?status=pendente
```

**Conteúdo do arquivo requests.log após os testes:**

```

```

## Perguntas de reflexão

1. Por que usamos `fs.appendFileSync` em vez de `fs.writeFileSync`? O que aconteceria com o log se usássemos `writeFileSync`?

```

```

2. No mundo real, usar `appendFileSync` em cada requisição é eficiente? Que alternativa você imagina para produção?

```

```

## Conclusão
Em 2-3 frases, explique como o servidor Express que começou na Aula 07 evoluiu para ter um pipeline de middlewares com logging, timestamp e, em breve, validação — tudo graças ao Middleware Pattern.
~~~~

---

## Checklist Final: Pronto para a Aula 09?

Marque cada item só quando conseguir fazê-lo **sem consultar a aula**:

- [ ] Explicar o Pipeline Pattern com a analogia do aeroporto (requisição como passageiro, middlewares como postos de inspeção, rota como portão de embarque)
- [ ] Descrever os três desfechos possíveis de um middleware: passar adiante (`next()`), encerrar (responder sem chamar `next()`), delegar para erro (`next(err)`)
- [ ] Comparar o Middleware Pattern com EventEmitter (todos executam vs. cada um decide se o próximo executa)
- [ ] Construir um middleware customizado com assinatura `(req, res, next)` e registrá-lo com `app.use()`
- [ ] Explicar o funcionamento interno de `express.json()` (concatena buffers, faz parse, trata erros, verifica Content-Type)
- [ ] Diagnosticar e corrigir problemas de ordenação de middlewares (logger depois das rotas, error handler antes das rotas, middleware sem `next()`)
- [ ] Criar um error handler global com assinatura `(err, req, res, next)` que captura exceções e retorna JSON padronizado
- [ ] Configurar e testar `cors()` para liberar acesso de origens diferentes e `morgan('dev')` para logging de requisições
- [ ] Implementar um middleware de logging com timestamp que escreve em arquivo usando `fs.appendFileSync`
- [ ] Integrar o novo middleware ao `servidor-express.js` da Aula 07 sem quebrar as rotas existentes

> *Acertou todos? Você está pronto para a Aula 09, onde vai aprender a validar dados de entrada e criar erros customizados com `AppError` — pilares de uma API robusta. Travou em algum? Releia a seção indicada na questão correspondente antes de avançar.*

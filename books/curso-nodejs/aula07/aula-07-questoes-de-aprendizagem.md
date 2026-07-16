---
titulo: "Node.js — Do Zero ao Servidor Express — Aula 07 — Questões de Aprendizagem"
modulo: "01"
aula: "07"
---

# Node.js — Do Zero ao Servidor Express Aula 07 — Questões de Aprendizagem

## Como Usar Este Arquivo

Este arquivo é o **checkpoint de aprendizagem** da Aula 07. A pergunta central é: "eu realmente entendi Express.js ao ponto de construir um servidor funcional sozinho?". Complete as 7 questões na ordem. Cada questão tem um **Objetivo** (o que você precisa demonstrar), **Passos de Execução** (o roteiro para chegar lá) e uma **Entrega** (template para você preencher e salvar). Crie uma pasta `entregas-aula-07/` e salve cada entrega como `Q1-nome-arquivo.md`, `Q2-nome-arquivo.md`, etc.

Se travar em alguma questão, releia a seção indicada no **Conceito-chave** antes de consultar outra fonte.

---

## Questão 1: Instalação e Hello World com Express

**Conceito-chave:** `npm install express`, `express()`, `app.get()`, `app.listen()` (Aula 07, Seção 5).

**Objetivo:** Instalar o Express e criar um servidor mínimo que responda na porta 4000.

**Passos de Execução:**

1. No diretório do seu projeto, execute `npm install express`
2. Crie `hello-express.js` com um servidor Express que escuta na porta 4000
3. O servidor deve ter uma rota `GET /` que retorna o texto `"Express instalado e funcionando!"`
4. Execute o servidor e teste com `curl http://localhost:4000`

**Entrega:** crie `entregas-aula-07/Q1-hello-express.md`:

~~~~
# Questão 1 — Instalação e Hello World Express

## Código do servidor

```javascript
// Cole aqui o conteúdo do hello-express.js

```

## Teste com curl

**Comando executado:**

```bash

```

**Saída do curl:**

```

```

## Verificação

- [ ] O servidor iniciou sem erros
- [ ] `curl http://localhost:4000` retornou o texto esperado
- [ ] O `package.json` contém a dependência `express`

## Conclusão
Em 2-3 frases, descreva o que você observou ao comparar a criação deste servidor Express com o servidor HTTP da Aula 06 usando `http.createServer()`.
~~~~

---

## Questão 2: Roteamento GET com Express

**Conceito-chave:** `app.get()` com múltiplas rotas, `res.json()` e `res.send()` (Aula 07, Seção 6).

**Objetivo:** Criar duas rotas GET em um servidor Express e verificar o Content-Type automático.

**Passos de Execução:**

1. Crie `roteador-express.js` com um servidor na porta 3000
2. Implemente a rota `GET /` que retorna HTML com `res.send()`
3. Implemente a rota `GET /tarefas` que importa `listarTarefas` do `tarefas-repo.js` e retorna JSON com `res.json()`
4. Teste ambas as rotas com `curl`
5. Use `curl -v` para verificar o `Content-Type` retornado em cada rota

**Entrega:** crie `entregas-aula-07/Q2-rotas-get.md`:

~~~~
# Questão 2 — Roteamento GET com Express

## Código do servidor

```javascript
// Cole aqui o conteúdo do roteador-express.js

```

## Testes com curl -v

### Rota GET /
**Comando:**

```bash

```

**Content-Type retornado:**

```

```

### Rota GET /tarefas
**Comando:**

```bash

```

**Content-Type retornado:**

```

```

## Perguntas de reflexão

1. Qual Content-Type o Express usou para `res.send()` com HTML?

2. Qual Content-Type o Express usou para `res.json()`?

3. Na Aula 06, como você precisava definir o Content-Type manualmente?

## Conclusão
Em 2-3 frases, explique como o Express simplifica o envio de respostas com diferentes formatos.
~~~~

---

## Questão 3: Path Params e Query Strings

**Conceito-chave:** `req.params` e `req.query` (Aula 07, Seções 7 e 8).

**Objetivo:** Implementar uma rota com path param e aplicar filtro por query string.

**Passos de Execução:**

1. No mesmo servidor da Questão 2, adicione a rota `GET /tarefas/:id` que retorna a tarefa pelo ID
2. Use `req.params.id` para extrair o ID e `Number()` para converter
3. Se a tarefa não existir, retorne 404 com `res.status(404).json()`
4. Modifique a rota `GET /tarefas` para aceitar `?status=pendente` ou `?status=concluida` via `req.query`
5. Teste todas as variações com curl

**Entrega:** crie `entregas-aula-07/Q3-path-query.md`:

~~~~
# Questão 3 — Path Params e Query Strings

## Código das rotas

```javascript
// Cole aqui apenas as rotas GET /tarefas e GET /tarefas/:id

```

## Testes com curl

### Buscar tarefa por ID existente
**Comando:**

```bash

```
**Saída:**

```

```

### Buscar tarefa por ID inexistente
**Comando:**

```bash

```
**Código de status:**

```

```

### Listar tarefas com query string ?status=pendente
**Comando:**

```bash

```
**Saída:**

```

```

### Listar tarefas sem query string
**Comando:**

```bash

```
**Saída:**

```

```

## Perguntas de reflexão

1. O que `req.params.id` contém? É string ou número?

2. Como você extraía o ID na Aula 06 com `url.split('/')`? Qual abordagem é mais robusta?

## Conclusão
Em 2-3 frases, compare a extração de parâmetros no Express vs a abordagem manual da Aula 06.
~~~~

---

## Questão 4: POST com Body Parsing

**Conceito-chave:** `express.json()`, `req.body`, `res.status().json()` (Aula 07, Seção 9).

**Objetivo:** Implementar a rota `POST /tarefas` com body parsing automático e validação.

**Passos de Execução:**

1. No servidor das questões anteriores, adicione `app.use(express.json())` ANTES das rotas
2. Implemente `POST /tarefas` que lê `titulo` de `req.body`
3. Valide que `titulo` foi fornecido — retorne 400 se não
4. Use `adicionarTarefa(titulo)` importado de `tarefas-repo.js`
5. Retorne 201 com a tarefa criada
6. Teste com curl: POST válido, POST sem `titulo`, POST sem `Content-Type`

**Entrega:** crie `entregas-aula-07/Q4-post-body.md`:

~~~~
# Questão 4 — POST com Body Parsing

## Código das rotas POST

```javascript
// Cole aqui a rota POST /tarefas

```

## Testes com curl

### POST válido (com título)
**Comando:**

```bash

```
**Código de status:**

```
201
```
**Saída:**

```

```

### POST sem campo título
**Comando:**

```bash

```
**Código de status:**

```

```
**Saída:**

```

```

### POST sem Content-Type
**Comando:**

```bash
curl -X POST http://localhost:3000/tarefas -d '{"titulo":"teste"}'
```
**O que aconteceu?**

```

```

## Perguntas de reflexão

1. O que aconteceria se você removesse a linha `app.use(express.json())`? Teste e descreva.

2. Quantas linhas de código o `express.json()` economizou em comparação com o body parsing manual da Aula 06?

## Conclusão
Em 2-3 frases, descreva como o `express.json()` simplifica o tratamento de requisições POST.
~~~~

---

## Questão 5: CRUD Completo com Express (Projeto Progressivo)

**Conceito-chave:** Síntese: GET, POST, PUT, DELETE, `req.params`, `req.query`, `express.json()`, `res.json()`, `res.status()` (Aula 07, Seções 5-11).

**Objetivo:** Reescrever TODO o servidor da Aula 06 (5 rotas) em Express, gerando `servidor-express.js`.

**Passos de Execução:**

1. Crie `servidor-express.js` com todas as 5 rotas do `tarefas-repo.js`:
   - `GET /tarefas` — listar todas (com filtro `?status=`)
   - `GET /tarefas/:id` — buscar por ID (404 se não existir)
   - `POST /tarefas` — criar (valida `titulo`, retorna 201)
   - `PUT /tarefas/:id` — concluir (404 se não existir)
   - `DELETE /tarefas/:id` — remover (404 se não existir)
2. Use `express.json()`, `req.params`, `req.query`, `res.json()`, `res.status()`
3. Execute o servidor e faça TODOS os testes curl do gabarito da Aula 06
4. Verifique que o comportamento é IDÊNTICO ao servidor da Aula 06

**Entrega:** crie `entregas-aula-07/Q5-crud-completo.md`:

~~~~
# Questão 5 — CRUD Completo com Express

## Código do servidor-express.js

```javascript
// Cole aqui o conteúdo completo do servidor-express.js

```

## Testes com curl (reproduza todos)

### Criar duas tarefas
```bash

```

### Listar todas as tarefas
```bash

```

### Buscar tarefa por ID
```bash

```

### Listar por status (concluida/pendente)
```bash

```

### Concluir tarefa (PUT)
```bash

```

### Remover tarefa (DELETE)
```bash

```

### Testar validação (POST sem título)
```bash

```

### Testar 404 em tarefa inexistente
```bash

```

## Comparação Aula 06 vs Aula 07

| Aspecto | Aula 06 (http nativo) | Aula 07 (Express) |
|---|---|---|
| Linhas de código | ~70 | ~20 |
| Body parsing | 8 linhas (data/end/JSON.parse) | 1 linha (express.json) |
| Extração de ID | `url.split('/')[2]` | `req.params.id` |
| Query string | `new URL(url).searchParams` | `req.query` |
| Resposta JSON | `writeHead + JSON.stringify + end` | `res.json()` |
| Fallback 404 | Manual (else final) | Automático |

## Conclusão
Em 3-4 frases, reflita sobre a diferença de produtividade entre as duas abordagens. O que o Express eliminou que fez mais diferença no seu código?
~~~~

---

## Questão 6: Comparação Roteamento Manual vs Express

**Conceito-chave:** Abstração sobre HTTP, roteamento declarativo, convenção sobre configuração (Aula 07, Seções 1-4 e 11).

**Objetivo:** Preencher uma tabela comparativa analisando o que o Express automatiza em relação ao código manual da Aula 06.

**Passos de Execução:**

1. Analise o código do `servidor.js` da Aula 06 (gabarito do Desafio) e compare com o `servidor-express.js` que você criou na Questão 5
2. Para cada linha da tabela abaixo, identifique o que o Express elimina ou simplifica
3. Preencha a coluna "O que o Express faz"

**Entrega:** crie `entregas-aula-07/Q6-comparacao.md`:

~~~~
# Questão 6 — Comparação Roteamento Manual vs Express

## Tabela comparativa

| O que você fazia na Aula 06 | Como o Express resolve | Seção da aula |
|---|---|---|
| `http.createServer((req, res) => { ... })` | | Seção 5 |
| `if (method === 'GET' && url === '/tarefas')` | | Seção 6 |
| `req.on('data')` + `req.on('end')` + `JSON.parse()` | | Seção 9 |
| `url.split('/')[2]` para extrair ID | | Seção 7 |
| `new URL(url, base).searchParams.get('status')` | | Seção 8 |
| `res.writeHead()` + `JSON.stringify()` + `res.end()` | | Seção 6 |
| `else { res.writeHead(404); res.end(...) }` | | Seção 6 |

## Pergunta de reflexão

Das 7 automatizações acima, qual você considera a mais impactante para a produtividade do dia a dia? Por quê?

**Resposta:**

## Conclusão
Em 2-3 frases, sintetize o papel de um framework web usando suas próprias palavras.
~~~~

---

## Questão 7: Diagnóstico de Erros Comuns

**Conceito-chave:** Ordem de rotas, path params, `express.json()` ausente, `req.params` vs `req.query` (Aula 07, Seções 5-10).

**Objetivo:** Corrigir 3 cenários com bugs comuns em código Express, explicando a causa de cada erro.

**Passos de Execução:**

Para cada cenário abaixo:
1. Identifique o erro
2. Explique a causa
3. Forneça o código corrigido

**Cenário A — Rota não encontrada:**

```javascript
const express = require('express');
const app = express();
app.listen(3000);

// Tentativa de acessar GET /tarefas → 404
```

**Cenário B — req.body undefined:**

```javascript
const express = require('express');
const app = express();

app.post('/tarefas', (req, res) => {
  console.log(req.body); // undefined
  res.json({ ok: true });
});

app.listen(3000);
```

**Cenário C — Path param captura rota fixa:**

```javascript
const express = require('express');
const app = express();

app.get('/tarefas/:id', (req, res) => {
  res.json({ tipo: 'por-id', id: req.params.id });
});

app.get('/tarefas/ativas', (req, res) => {
  res.json({ tipo: 'ativas' });
});

app.listen(3000);
// GET /tarefas/ativas retorna { tipo: 'por-id', id: 'ativas' }
```

**Entrega:** crie `entregas-aula-07/Q7-diagnostico.md`:

~~~~
# Questão 7 — Diagnóstico de Erros Comuns

## Cenário A — Rota não encontrada

**Qual é o erro?**

```

```

**Por que isso acontece?**

```

```

**Código corrigido:**

```javascript

```

---

## Cenário B — req.body undefined

**Qual é o erro?**

```

```

**Por que isso acontece?**

```

```

**Código corrigido:**

```javascript

```

---

## Cenário C — Path param captura rota fixa

**Qual é o erro?**

```

```

**Por que isso acontece?**

```

```

**Código corrigido:**

```javascript

```

---

## Conclusão
Em 2-3 frases, liste as 3 lições principais que você aprendeu diagnosticando esses erros.
~~~~

---

## Checklist Final: Pronto para a Aula 08?

Marque cada item só quando conseguir fazê-lo **sem consultar a aula**:

- [ ] Explicar o que é um framework web e como ele se diferencia do módulo HTTP nativo
- [ ] Comparar roteamento declarativo (Express) com roteamento manual (Aula 06) e identificar 3 vantagens
- [ ] Instalar o Express via npm em um projeto existente
- [ ] Construir um servidor com `express()`, `app.get()` e `app.listen()`
- [ ] Extrair parâmetros de rota com `req.params` e query strings com `req.query`
- [ ] Utilizar `res.json()`, `res.status()` e `res.send()` com os status codes apropriados
- [ ] Configurar `express.json()` para body parsing automático
- [ ] Implementar as 5 operações CRUD (GET, POST, PUT, DELETE) com Express
- [ ] Diagnosticar e corrigir erros comuns: ordem de path params, `express.json()` ausente, rotas não registradas
- [ ] Explicar que `express.json()` é um middleware e que o conceito será aprofundado na Aula 08

> *Acertou todos? Você está pronto para a Aula 08, onde vai descobrir que `express.json()` é apenas a ponta do iceberg — o pipeline de middlewares é o coração do Express. Travou em algum? Releia a seção indicada na questão correspondente antes de avançar.*

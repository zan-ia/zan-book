---
titulo: "Node.js — Do Zero ao Servidor Express"
modulo: "01"
aula: "06"
---

# Node.js — Do Zero ao Servidor Express Aula 06 — Questões de Aprendizagem

## Como Usar Este Arquivo

Este é o checkpoint de aprendizagem da Aula 06. Cada questão testa um conceito-chave da aula. Faça na ordem, crie a pasta `entregas-aula-06/` dentro do diretório da aula, e preencha os templates de entrega. Você deve conseguir completar todas as questões sem consultar a aula — se travar, a seção indicada em cada questão ajuda a revisar.

---

## Questão 1: Anatomia de uma Requisição e Resposta HTTP

**Conceito-chave:** Componentes do HTTP — método, URL, status code, headers, Content-Type (Aula 06, Seções 1-2).

**Objetivo:** Demonstrar que você sabe identificar e descrever cada parte de uma requisição e resposta HTTP.

**Passos de Execução:**

1. Inicie o servidor `servidor-tarefas.js` da Seção 9
2. Execute `curl -v http://localhost:3000/tarefas` e capture a saída completa
3. Identifique na saída: método HTTP, URL, headers da requisição, status code, headers da resposta, Content-Type, body
4. Execute `curl -X POST http://localhost:3000/tarefas -H "Content-Type: application/json" -d '{"titulo":"Teste"}' -v` e capture a saída
5. Compare os métodos, status codes e bodies das duas respostas

**Entrega:** crie `entregas-aula-06/q1-http-anatomy.md`:

~~~~
# Questão 1 — Anatomia HTTP

## Saída do GET /tarefas

```
[cole aqui a saída completa do curl -v]
```

## Componentes identificados no GET

| Componente | Valor |
|---|---|
| Método | |
| URL | |
| Status Code | |
| Content-Type | |
| Body | |

## Saída do POST /tarefas

```
[cole aqui a saída completa do curl -v]
```

## Componentes identificados no POST

| Componente | Valor |
|---|---|
| Método | |
| URL | |
| Status Code | |
| Content-Type | |
| Body | |

## Pergunta de reflexão

Qual a diferença principal entre o status code do GET (200) e do POST (201) e por que essa diferença existe?
~~~~

---

## Questão 2: Construindo um Servidor do Zero

**Conceito-chave:** `http.createServer()`, `server.listen()`, callback `(req, res)` (Aula 06, Seção 4).

**Objetivo:** Criar um servidor HTTP básico do zero sem consultar o código da aula.

**Passos de Execução:**

1. Crie um arquivo `servidor-basico.js` na pasta `entregas-aula-06/`
2. Importe o módulo `http`
3. Crie um servidor que responde "Meu servidor Node.js!" para toda requisição
4. Faça o servidor escutar na porta 3030
5. Teste com `curl http://localhost:3030` e verifique a resposta
6. Pare o servidor com Ctrl+C

**Entrega:** crie `entregas-aula-06/q2-servidor-basico.md`:

~~~~
# Questão 2 — Servidor Básico

## Código do servidor

```javascript
[cole aqui o código do seu servidor-basico.js]
```

## Teste com curl

```bash
curl http://localhost:3030
```

## Saída do terminal

```
[cole aqui a saída]
```

## Respostas

1. O que acontece se você remover `server.listen(3030)` do código?
2. O que acontece se você omitir `res.end()` no callback?
~~~~

---

## Questão 3: Servindo HTML e JSON

**Conceito-chave:** `res.writeHead()`, `res.end()`, `Content-Type` (Aula 06, Seção 5).

**Objetivo:** Criar um servidor que serve conteúdo em dois formatos diferentes.

**Passos de Execução:**

1. Crie `servidor-formatos.js` na pasta `entregas-aula-06/`
2. Crie duas rotas:
   - `GET /pagina` → retorna HTML: `<h1>Página Inicial</h1><p>Bem-vindo!</p>` com `Content-Type: text/html`
   - `GET /dados` → retorna JSON: `{ "produto": "Node.js", "preco": 0 }` com `Content-Type: application/json`
3. Teste cada rota com `curl`
4. Teste a diferença entre usar e não usar `Content-Type` no JSON

**Entrega:** crie `entregas-aula-06/q3-formatos.md`:

~~~~
# Questão 3 — Formatos de Resposta

## Código do servidor

```javascript
[cole aqui o código completo]
```

## Testes com curl

### GET /pagina

```bash
curl http://localhost:PORT/pagina
# Saída:
```

### GET /dados

```bash
curl http://localhost:PORT/dados
# Saída:
```

## Experimento: remova o Content-Type da rota /dados e teste novamente

```bash
# Saída sem Content-Type:
```

## Pergunta de reflexão

O que mudou na saída do curl quando você removeu o Content-Type? E se você usasse um navegador, qual seria a diferença no comportamento?
~~~~

---

## Questão 4: Roteamento com Método e URL

**Conceito-chave:** Roteamento manual com `if/else` baseado em `req.method` e `req.url` (Aula 06, Seção 6).

**Objetivo:** Implementar um roteador que diferencia requisições pelo método HTTP e URL, com fallback 404.

**Passos de Execução:**

1. Crie `roteador-completo.js` em `entregas-aula-06/`
2. Implemente as seguintes rotas:
   - `GET /` → HTML "Home"
   - `GET /api/status` → JSON `{ "servico": "API", "versao": "1.0" }`
   - `POST /api/echo` → lê o body e retorna o mesmo JSON recebido
   - Qualquer outra URL → status 404 com JSON `{ "erro": "Rota não encontrada" }`
3. Teste cada rota com `curl`

**Entrega:** crie `entregas-aula-06/q4-roteador.md`:

~~~~
# Questão 4 — Roteador Completo

## Código do servidor

```javascript
[cole aqui o código completo]
```

## Testes

### GET /
```
[comando + saída]
```

### GET /api/status
```
[comando + saída]
```

### POST /api/echo com body
```
[comando + saída]
```

### GET /rota-inexistente
```
[comando + saída]
```

## Respostas

1. Por que cada rota precisa verificar TANTO o método quanto a URL?
2. O que acontece se você inverter a ordem das condições (colocar o fallback 404 antes das rotas)?
~~~~

---

## Questão 5: Query Strings

**Conceito-chave:** `new URL(req.url, base).searchParams.get()` (Aula 06, Seção 7).

**Objetivo:** Construir um servidor que usa query strings para filtrar ou configurar a resposta.

**Passos de Execução:**

1. Crie `servidor-query.js` em `entregas-aula-06/`
2. Crie uma rota `GET /api/saudacao` que:
   - Lê o parâmetro `nome` da query string
   - Lê o parâmetro `idioma` da query string
   - Se `idioma` for `"en"`, retorna `"Hello, {nome}!"`
   - Se `idioma` for `"pt"` ou não informado, retorna `"Olá, {nome}!"`
   - Se `nome` não for informado, usa `"visitante"` como padrão
3. Teste diferentes combinações

**Entrega:** crie `entregas-aula-06/q5-query.md`:

~~~~
# Questão 5 — Query Strings

## Código do servidor

```javascript
[cole aqui o código completo]
```

## Testes

### Saudação em português
```
curl "http://localhost:PORT/api/saudacao?nome=Maria"
# Saída esperada:
```

### Saudação em inglês
```
curl "http://localhost:PORT/api/saudacao?nome=John&idioma=en"
# Saída esperada:
```

### Sem nome (padrão)
```
curl "http://localhost:PORT/api/saudacao"
# Saída esperada:
```

### Parâmetros extras
```
curl "http://localhost:PORT/api/saudacao?nome=Ana&idioma=pt&extra=foo"
# Saída esperada:
```

## Pergunta de reflexão

O que acontece com o parâmetro `extra=foo` no último teste? Ele é ignorado ou quebra algo?
~~~~

---

## Questão 6: Body Parsing com EventEmitter

**Conceito-chave:** `req.on('data')`, `req.on('end')`, EventEmitter (Aula 06, Seção 8).

**Objetivo:** Processar o corpo de uma requisição POST usando o padrão EventEmitter.

**Passos de Execução:**

1. Crie `servidor-calculadora.js` em `entregas-aula-06/`
2. Crie uma rota `POST /api/somar` que:
   - Lê o body JSON: `{ "a": 5, "b": 3 }`
   - Retorna `{ "resultado": 8 }`
3. Trate o caso de JSON inválido com status 400
4. Trate o caso de campos `a` ou `b` ausentes com status 400
5. Teste com `curl`

**Entrega:** crie `entregas-aula-06/q6-body-parsing.md`:

~~~~
# Questão 6 — Body Parsing

## Código do servidor

```javascript
[cole aqui o código completo]
```

## Testes

### Soma válida
```bash
curl -X POST http://localhost:PORT/api/somar \
  -H "Content-Type: application/json" \
  -d '{"a":10,"b":20}'
# Saída:
```

### JSON inválido
```bash
curl -X POST http://localhost:PORT/api/somar \
  -H "Content-Type: application/json" \
  -d 'isso não é json'
# Saída e status code:
```

### Campo ausente
```bash
curl -X POST http://localhost:PORT/api/somar \
  -H "Content-Type: application/json" \
  -d '{"a":5}'
# Saída e status code:
```

## Respostas

1. Explique com suas palavras por que o body não está simplesmente disponível em `req.body` como uma propriedade direta.
2. Como o padrão EventEmitter (Aula 05) se manifesta aqui — quais são o emissor, o evento e o ouvinte?
~~~~

---

## Questão 7: Integração com tarefas-repo

**Conceito-chave:** Conexão entre o servidor HTTP e o módulo de persistência da Aula 04 (Aula 06, Seção 9).

**Objetivo:** Demonstrar que você sabe integrar o servidor HTTP com o `tarefas-repo` para criar uma API funcional.

**Passos de Execução:**

1. Copie o `tarefas-repo.js` (da Aula 04) para `entregas-aula-06/`
2. Crie `servidor-api-tarefas.js` que importa o `tarefas-repo`
3. Implemente as rotas:
   - `GET /tarefas` → lista todas as tarefas
   - `POST /tarefas` → cria uma nova tarefa (lê `titulo` do body JSON)
   - Ambas em JSON
4. Teste: crie 2 tarefas, liste, verifique a persistência

**Entrega:** crie `entregas-aula-06/q7-tarefas-api.md`:

~~~~
# Questão 7 — API de Tarefas

## Código do servidor

```javascript
[cole aqui o código completo]
```

## Testes

### Primeira listagem (vazia)
```
curl http://localhost:PORT/tarefas
# Saída:
```

### Criar tarefa 1
```
curl -X POST http://localhost:PORT/tarefas \
  -H "Content-Type: application/json" \
  -d '{"titulo":"Aprender HTTP"}'
# Saída:
```

### Criar tarefa 2
```
curl -X POST http://localhost:PORT/tarefas \
  -H "Content-Type: application/json" \
  -d '{"titulo":"Construir API REST"}'
# Saída:
```

### Listar novamente
```
curl http://localhost:PORT/tarefas
# Saída:
```

### Sem título (validação)
```
curl -X POST http://localhost:PORT/tarefas \
  -H "Content-Type: application/json" \
  -d '{}'
# Saída e status code:
```

## Respostas

1. Por que o callback do `createServer` precisa ser `async` quando você usa `listarTarefas()`?
2. Se você parar o servidor e reiniciar, as tarefas ainda existem? Por quê?
~~~~

---

## Questão 8: Diagnóstico com curl -v

**Conceito-chave:** Depuração de servidores HTTP com ferramentas de linha de comando (Aula 06, Seções 4-9).

**Objetivo:** Usar `curl -v` para diagnosticar e entender o que está acontecendo em cada requisição HTTP.

**Passos de Execução:**

1. Inicie o `servidor-tarefas.js` da Seção 9
2. Execute `curl -v http://localhost:3000/tarefas` e salve a saída
3. Execute `curl -v -X POST http://localhost:3000/tarefas -H "Content-Type: application/json" -d '{"titulo":"Teste curl"}'` e salve a saída
4. Execute `curl -v http://localhost:3000/nao-existe` e salve a saída
5. Execute `curl -v http://localhost:3000` sem ter um servidor rodando e salve a saída
6. Compare as 4 saídas

**Entrega:** crie `entregas-aula-06/q8-diagnostico.md`:

~~~~
# Questão 8 — Diagnóstico com curl

## Saída 1: GET /tarefas (sucesso)

```
[cole aqui]
```

## Saída 2: POST /tarefas (criação)

```
[cole aqui]
```

## Saída 3: GET /nao-existe (404)

```
[cole aqui]
```

## Saída 4: curl sem servidor rodando (erro de conexão)

```
[cole aqui]
```

## Análise

Preencha a tabela comparativa:

| Cenário | Status Code | Content-Type | Body | Diferença principal |
|---|---|---|---|---|
| GET /tarefas | | | | |
| POST /tarefas | | | | |
| GET /nao-existe | | | | |
| Sem servidor | N/A | N/A | N/A | |

## Pergunta de reflexão

O que o **-v** (verbose) do curl mostra que o curl normal esconde? Por que isso é útil para depuração?
~~~~

---

## Checklist Final: Pronto para a Aula 07?

Marque cada item só quando conseguir fazê-lo **sem consultar a aula**:

- [ ] Explicar o modelo cliente-servidor com suas próprias palavras
- [ ] Identificar os componentes de uma requisição e resposta HTTP
- [ ] Diferenciar GET de POST pelo propósito e presença de body
- [ ] Criar um servidor HTTP com `http.createServer()` e `server.listen()`
- [ ] Servir HTML e JSON com `Content-Type` apropriado
- [ ] Implementar roteamento manual com `if/else` baseado em método e URL
- [ ] Extrair parâmetros de query string com `new URL()` + `searchParams.get()`
- [ ] Ler o body de uma requisição POST com `req.on('data')` e `req.on('end')`
- [ ] Integrar o servidor HTTP com `tarefas-repo.js` para criar uma API funcional
- [ ] Usar `curl` e `curl -v` para testar servidores HTTP

> *Acertou todos? Você está pronto para a Aula 07, onde o Express.js vai transformar todo esse roteamento manual em métodos elegantes como `app.get()` e `app.post()`. Travou em algum? Releia a seção indicada na questão correspondente antes de avançar.*

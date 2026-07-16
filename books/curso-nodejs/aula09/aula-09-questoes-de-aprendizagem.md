---
titulo: "Node.js — Do Zero ao Servidor Express — Aula 09 — Questões de Aprendizagem"
modulo: "01"
aula: "09"
---

# Node.js — Do Zero ao Servidor Express Aula 09 — Questões de Aprendizagem

## Como Usar Este Arquivo

Este arquivo é o checkpoint de aprendizagem da Aula 09. A pergunta central é: "eu realmente entendi validação e tratamento de erros?". Cada questão verifica um conceito-chave da aula. Siga a ordem, leia o Objetivo, execute os Passos e preencha o template de Entrega. Crie a pasta `entregas-aula-09/` para salvar suas respostas. Se travar em alguma questão, releia a seção indicada da aula principal.

---

## Questão 1: Validação como Contrato e Fail Fast

**Conceito-chave:** Validação como contrato de API e princípio de fail fast (Aula 09, Seções 1-2).

**Objetivo:** Demonstrar com suas palavras por que aceitar qualquer JSON no body é perigoso e como o fail fast evita bugs em cascata.

**Passos de Execução:**

1. Explique por que um servidor que aceita qualquer JSON no body está vulnerável a bugs em cascata
2. Descreva o fluxo de uma requisição inválida SEM fail fast: desde a chegada até a resposta final
3. Descreva o fluxo da mesma requisição inválida COM fail fast
4. Compare os dois fluxos: o que muda em termos de tempo de resposta, clareza do erro e impacto no servidor

**Entrega:** crie `entregas-aula-09/01-contrato-failfast.md`:

~~~~
# Questão 1 — Validação e Fail Fast

## Por que aceitar qualquer JSON é perigoso (2-3 frases)

[Escreva aqui]

## Fluxo SEM fail fast (use setas textuais A → B)

[Descreva o caminho da requisição inválida até a resposta]

## Fluxo COM fail fast (use setas textuais A → B)

[Descreva o caminho da requisição inválida até a resposta]

## Comparação: o que muda?

| Aspecto | Sem fail fast | Com fail fast |
|---|---|---|
| Tempo de resposta | | |
| Clareza do erro | | |
| Impacto no servidor | | |

## Conclusão
Em 2-3 frases, explique por que fail fast é a primeira linha de defesa de uma API.
~~~~

---

## Questão 2: Erros como Dados Estruturados

**Conceito-chave:** Erros como objetos estruturados com status, mensagem e detalhes (Aula 09, Seção 3).

**Objetivo:** Construir objetos de erro estruturados para três cenários diferentes de validação.

**Passos de Execução:**

1. Crie um objeto JSON de erro para cada cenário abaixo
2. Cada objeto deve ter os campos: `status` (número), `mensagem` (string descritiva) e `detalhes` (array com informações adicionais)
3. Os três cenários são: campo ausente, tipo inválido, valor fora do intervalo

**Entrega:** crie `entregas-aula-09/02-erros-estruturados.md`:

~~~~
# Questão 2 — Erros como Dados Estruturados

## Cenário 1: Campo ausente

Body recebido: `{}`
Endpoint: POST /tarefas (espera `titulo` obrigatório)

[Preencha o objeto de erro]

## Cenário 2: Tipo inválido

Body recebido: `{ "titulo": 42 }`
Endpoint: POST /tarefas (espera `titulo` como string)

[Preencha o objeto de erro]

## Cenário 3: Valor fora do intervalo

Body recebido: `{ "prioridade": "urgentissima" }`
Endpoint: POST /tarefas (espera "alta", "média" ou "baixa")

[Preencha o objeto de erro]

## Conclusão
Em 2-3 frases, explique por que um objeto de erro estruturado é melhor para o cliente da API do que uma string genérica.
~~~~

---

## Questão 3: Camadas de Erro

**Conceito-chave:** Separação entre detecção do erro (handler) e formatação da resposta (middleware) (Aula 09, Seção 4).

**Objetivo:** Mapear o fluxo de um erro desde a detecção até a resposta HTTP, identificando a responsabilidade de cada camada.

**Passos de Execução:**

1. Descreva o caminho de um erro detectado no handler até a resposta HTTP chegar ao cliente
2. Identifique a responsabilidade de cada camada (handler, middleware)
3. Explique o que acontece se uma camada for omitida — se o handler responder diretamente sem middleware

**Entrega:** crie `entregas-aula-09/03-camadas-erro.md`:

~~~~
# Questão 3 — Camadas de Erro

## Fluxo do erro (use setas A → B: descrição)

[Handler detecta erro] → [o que acontece?] → [o que acontece?] → [o que acontece?]

## Responsabilidades

| Componente | Responsabilidade |
|---|---|
| Handler | [O QUE deu errado] |
| Middleware de erro | [COMO responder] |

## O que acontece se o handler responder diretamente sem middleware?

[Descreva o problema de misturar detecção com formatação]

## Conclusão
Em 2-3 frases, explique por que a separação em camadas melhora a manutenção do código de tratamento de erros.
~~~~

---

## Questão 4: Validação Manual com AppError

**Conceito-chave:** Validação manual de campos com AppError (Aula 09, Seções 5-6).

**Objetivo:** Implementar validação para um endpoint PUT com campo `descricao` usando AppError.

**Passos de Execução:**

1. Crie um servidor Express com rota PUT `/tarefas/:id`
2. Valide o campo `descricao` no body: obrigatório, tipo string, tamanho máximo de 200 caracteres
3. Use a classe AppError para cada falha de validação com status 400
4. Use try/catch com `next(err)` para entregar erros ao middleware

**Entrega:** crie `entregas-aula-09/04-put-descricao.md`:

~~~~
# Questão 4 — PUT com Validação de Descrição

## Código do servidor (classe AppError + rota PUT + middleware de erro)

```javascript
// [Seu código completo aqui]
```

## Testes com curl

```bash
# Cenário 1: PUT válido (descrição com 50 caracteres)
curl -X PUT http://localhost:3000/tarefas/1 \
  -H "Content-Type: application/json" \
  -d '{"descricao":"Estudar Node.js para construir APIs REST"}'

# Cenário 2: PUT sem descrição
# [comando curl e resultado esperado]

# Cenário 3: PUT com descrição numérica
# [comando curl e resultado esperado]

# Cenário 4: PUT com descrição de 300 caracteres (excede máximo)
# [comando curl e resultado esperado]
```

## Conclusão
Em 2-3 frases, descreva como o AppError separou a validação (handler) da resposta (middleware) neste exercício.
~~~~

---

## Questão 5: Middleware de Erro com Switch

**Conceito-chave:** Middleware de erro centralizado com switch por tipo de erro (Aula 09, Seção 7).

**Objetivo:** Escrever o middleware de erro completo que trata AppError, SyntaxError e erros inesperados com status diferentes.

**Passos de Execução:**

1. Escreva um middleware de erro com 4 parâmetros `(err, req, res, next)`
2. Se `err instanceof AppError`, use `err.statusCode` e `err.message`
3. Se `err instanceof SyntaxError` com `err.status === 400` e `'body' in err`, retorne 400 com mensagem de JSON malformado
4. Para outros erros, retorne 500 com mensagem genérica
5. Inclua um log condicional: stack trace apenas se `NODE_ENV` não for "production"

**Entrega:** crie `entregas-aula-09/05-middleware-switch.md`:

~~~~
# Questão 5 — Middleware de Erro com Switch

## Código do middleware de erro

```javascript
// [Middleware completo com os 3 casos + log condicional]
```

## Explicação linha a linha

[Explique cada bloco do middleware: o que cada condição verifica e por que]

## Testes conceituais

| Cenário | Erro lançado | Status esperado | Mensagem esperada |
|---|---|---|---|
| Campo obrigatório faltando | | | |
| JSON malformado no body | | | |
| Erro inesperado (ex: fs.readFile falhou) | | | |

## Conclusão
Em 2-3 frases, explique por que o middleware precisa diferenciar os tipos de erro e não pode simplesmente retornar 500 para tudo.
~~~~

---

## Questão 6: Try/Catch em Handlers Assíncronos

**Conceito-chave:** Try/catch + next(err) em handlers async (Aula 09, Seção 8).

**Objetivo:** Explicar por que throw em async crasha o servidor no Express 4 e refatorar um handler sem try/catch.

**Passos de Execução:**

1. Explique por que `throw` dentro de uma função `async` crasha o servidor Express 4
2. Refatore o handler abaixo para usar try/catch + next(err)
3. Identifique o que muda na assinatura do handler

```javascript
// Handler PROBLEMÁTICO (sem try/catch)
app.get('/tarefas/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) {
    throw new AppError('ID inválido', 400);
  }
  const tarefa = await buscarTarefa(id);
  if (!tarefa) {
    throw new AppError('Tarefa não encontrada', 404);
  }
  res.json(tarefa);
});
```

**Entrega:** crie `entregas-aula-09/06-try-catch.md`:

~~~~
# Questão 6 — Try/Catch em Handlers

## Explicação: por que throw em async crasha o servidor?

[Explique a relação entre async/await, Promises rejeitadas e o Express 4]

## Handler refatorado com try/catch

```javascript
// [Handler corrigido com try/catch + next(err)]
```

## O que mudou na assinatura?

[Compare a assinatura original com a refatorada]

## Conclusão
Em 2-3 frases, resuma quando usar try/catch em handlers Express e qual o papel do `next(err)`.
~~~~

---

## Questão 7 (Projeto Progressivo): POST /tarefas Completo com Validação e Tratamento de Erros

**Conceito-chave:** Integração completa de validação, AppError, try/catch e middleware de erro no projeto (Aula 09, Seção 10).

**Objetivo:** Refatorar o `servidor-express.js` completo adicionando AppError, validação robusta, try/catch e middleware centralizado com switch.

**Passos de Execução:**

1. Adicione a classe AppError no topo do servidor (antes dos middlewares)
2. Valide `titulo` no POST /tarefas: obrigatório, string, não-vazio, mínimo 3 caracteres
3. Envolva o handler em try/catch com `next(err)`
4. Substitua o middleware de erro antigo pelo novo com switch (AppError, SyntaxError, inesperado)
5. Teste com curl os 4 cenários: POST válido (201), POST sem título (400), POST com título vazio (400), JSON malformado (400)

**Entrega:** crie `entregas-aula-09/07-projeto-post-tarefas.md`:

~~~~
# Questão 7 — Projeto: POST /tarefas com Validação

## Código completo do servidor refatorado

```javascript
// [Seu servidor completo com AppError + validação + try/catch + middleware de erro]
```

## Testes com curl

```bash
# Cenário 1: POST válido
curl -X POST http://localhost:3000/tarefas \
  -H "Content-Type: application/json" \
  -d '{"titulo":"Estudar Node.js"}'
# Resultado esperado: [preencha]

# Cenário 2: POST sem título
# [comando curl]
# Resultado esperado: [preencha]

# Cenário 3: POST com título vazio
# [comando curl]
# Resultado esperado: [preencha]

# Cenário 4: JSON malformado no body
# [comando curl]
# Resultado esperado: [preencha]
```

## O que mudou em relação ao servidor da Aula 08?

[Compare os dois servidores: o que foi adicionado, removido e modificado]

## Conclusão
Em 2-3 frases, explique como a combinação de AppError + try/catch + middleware de erro torna o servidor mais robusto e o código mais organizado.
~~~~

---

## Checklist Final: Pronto para a Próxima Aula?

Marque cada item só quando conseguir fazê-lo **sem consultar a aula**:

- [ ] Explicar por que validação de entrada é a primeira linha de defesa de uma API
- [ ] Aplicar fail fast em uma rota nova — validar antes de processar
- [ ] Validar manualmente campos obrigatórios, tipos (`typeof`) e formatos (tamanho mínimo, string não-vazia)
- [ ] Criar uma classe AppError que estende Error com statusCode e message
- [ ] Implementar middleware de erro centralizado com switch por tipo (AppError, SyntaxError, inesperado)
- [ ] Usar try/catch + next(err) em handler assíncrono do Express
- [ ] Comparar validação manual com bibliotecas de schema (joi/zod) — quando cada abordagem é adequada
- [ ] Diagnosticar erro de JSON malformado e retornar 400 em vez de 500
- [ ] Explicar a separação entre handler (o que deu errado) e middleware (como responder)
- [ ] Identificar os 3 tipos de erro que o middleware centralizado deve tratar

> *Acertou todos? Você está pronto para a próxima aula, onde o `servidor-express.js` será organizado em camadas profissionais — rotas, controladores, serviços e repositórios. Travou em algum? Releia a seção indicada na questão correspondente antes de avançar.*

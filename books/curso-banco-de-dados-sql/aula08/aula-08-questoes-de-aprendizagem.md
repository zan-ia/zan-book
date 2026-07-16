---
titulo: "Curso de Banco de Dados SQL — Do SQLite ao PostgreSQL com Knex"
modulo: "01"
aula: "08"
---

# Curso de Banco de Dados SQL Aula 08 — Questões de Aprendizagem

## Como Usar Este Arquivo

Este arquivo é o checkpoint de aprendizagem da Aula 08 — a aula final do módulo. A pergunta central é: "eu realmente entendi autorização, relacionamentos e a arquitetura completa do projeto?". Cada questão verifica um conceito-chave da aula. Siga os passos de execução e preencha o template de entrega para cada questão. Crie a pasta `entregas-aula-08` para salvar suas respostas.

Se travar em alguma questão, releia a seção correspondente na aula principal antes de consultar o gabarito.

---

## Questão 1: Identifique Relacionamentos 1:N

**Conceito-chave:** Relacionamentos 1:N e chave estrangeira (Aula 08, Seção 1).

**Objetivo:** Demonstrar que você sabe identificar relacionamentos 1:N em cenários do mundo real e determinar onde a chave estrangeira deve ficar.

**Passos de Execução:**

1. Leia cada cenário descrito no template
2. Identifique qual entidade está no lado "1" e qual está no lado "N"
3. Determine em qual tabela a chave estrangeira deve ficar
4. Descreva o nome da coluna que seria a chave estrangeira
5. Crie seu próprio exemplo de relacionamento 1:N

**Entrega:** crie `entregas-aula-08/01-relacionamentos-1n.md`:

~~~~
# Questão 1 — Identifique Relacionamentos 1:N

## Cenário A: Escola e Alunos

**Lado "1":** [qual entidade]
**Lado "N":** [qual entidade]
**Chave estrangeira fica em:** [nome da tabela]
**Nome da coluna FK:** [nome da coluna]

## Cenário B: Pedido e Itens do Pedido

**Lado "1":** [qual entidade]
**Lado "N":** [qual entidade]
**Chave estrangeira fica em:** [nome da tabela]
**Nome da coluna FK:** [nome da coluna]

## Cenário C: Clube e Membros

**Lado "1":** [qual entidade]
**Lado "N":** [qual entidade]
**Chave estrangeira fica em:** [nome da tabela]
**Nome da coluna FK:** [nome da coluna]

## Meu Próprio Exemplo

Crie um exemplo de relacionamento 1:N que não foi mencionado na aula:

**Entidade A (1):** [sua escolha]
**Entidade B (N):** [sua escolha]
**Exemplo do mundo real:**
[descreva o exemplo em 2-3 frases]
**Onde fica a FK:** [explique]

## Conclusão

[Em 2-3 frases: qual a regra prática para identificar onde colocar a chave estrangeira em um relacionamento 1:N?]
~~~~

---

## Questão 2: Escolha o Comportamento ON DELETE

**Conceito-chave:** Integridade referencial e ON DELETE (Aula 08, Seção 2).

**Objetivo:** Verificar se você sabe escolher o comportamento ON DELETE adequado para cada cenário, justificando a decisão.

**Passos de Execução:**

1. Leia cada cenário descrito no template
2. Escolha entre CASCADE, RESTRICT ou SET NULL
3. Justifique por que as outras opções são inadequadas
4. Descreva o que acontece no banco ao deletar o registro pai

**Entrega:** crie `entregas-aula-08/02-on-delete.md`:

~~~~
# Questão 2 — Escolha o Comportamento ON DELETE

## Cenário A: Deletar um pedido — os itens do pedido devem sumir junto

**Comportamento escolhido:** [CASCADE / RESTRICT / SET NULL]

**Por que as outras opções são inadequadas:**
- [opção 1 inadequada]: [explique]
- [opção 2 inadequada]: [explique]

**O que acontece no banco:**
[descreva o processo ao deletar o pedido]

## Cenário B: Deletar um usuário que tem tarefas — nada deve ser perdido

**Comportamento escolhido:** [CASCADE / RESTRICT / SET NULL]

**Por que as outras opções são inadequadas:**
- [opção 1 inadequada]: [explique]
- [opção 2 inadequada]: [explique]

**O que acontece no banco:**
[descreva a tentativa de deletar]

## Cenário C: Deletar um vendedor — as vendas devem continuar existindo sem o vendedor

**Comportamento escolhido:** [CASCADE / RESTRICT / SET NULL]

**Por que as outras opções são inadequadas:**
- [opção 1 inadequada]: [explique]
- [opção 2 inadequada]: [explique]

**O que acontece no banco:**
[descreva o processo ao deletar o vendedor]

## Conclusão

[Em 2-3 frases: qual critério usar para escolher entre CASCADE, RESTRICT e SET NULL?]
~~~~

---

## Questão 3: Autenticação vs Autorização — Diagnóstico de Cenários

**Conceito-chave:** Autorização baseada em recursos (Aula 08, Seção 3).

**Objetivo:** Verificar se você sabe distinguir autenticação de autorização e classificar cenários de sistema.

**Passos de Execução:**

1. Leia cada cenário descrito no template
2. Classifique como autenticação, autorização resource-based ou autorização RBAC
3. Justifique sua classificação
4. Explique como o sistema implementaria cada cenário

**Entrega:** crie `entregas-aula-08/03-auth-vs-authz.md`:

~~~~
# Questão 3 — Autenticação vs Autorização: Diagnóstico

## Cenário A: "Usuário faz login com email e senha e recebe um token JWT."

**Classificação:** [Autenticação / Autorização Resource-Based / Autorização RBAC]

**Justificativa:**
[explique em 1-2 frases]

**Como o sistema implementa:**
[descreva brevemente]

## Cenário B: "Usuário só pode editar posts que ele mesmo criou."

**Classificação:** [Autenticação / Autorização Resource-Based / Autorização RBAC]

**Justificativa:**
[explique em 1-2 frases]

**Como o sistema implementa:**
[descreva brevemente]

## Cenário C: "Administradores podem deletar qualquer post. Moderadores só podem editar."

**Classificação:** [Autenticação / Autorização Resource-Based / Autorização RBAC]

**Justificativa:**
[explique em 1-2 frases]

**Como o sistema implementa:**
[descreva brevemente]

## Cenário D: "Middleware verifica se o token JWT é válido e extrai o id do usuário."

**Classificação:** [Autenticação / Autorização Resource-Based / Autorização RBAC]

**Justificativa:**
[explique em 1-2 frases]

**Como o sistema implementa:**
[descreva brevemente]

## Conclusão

[Em 2-3 frases: por que autenticação SEMPRE vem antes de autorização na arquitetura de uma aplicação?]
~~~~

---

## Questão 4: Refatore o Repository com Filtro user_id

**Conceito-chave:** Filtro user_id no repository (Aula 08, Seção 5).

**Objetivo:** Verificar se você sabe modificar cada método do repository de tarefas para receber e filtrar por userId.

**Passos de Execução:**

1. Escreva o código completo do repository refatorado
2. Garanta que cada método receba `userId` como parâmetro
3. Explique como o `criar` associa a tarefa ao usuário correto
4. Verifique que não sobrou nenhum método sem filtro

**Entrega:** crie `entregas-aula-08/04-repository-userid.md`:

~~~~
# Questão 4 — Refatore o Repository com Filtro user_id

## Código Completo do Repository

```javascript
const knex = require('../../knex')

function tarefaRepoKnex() {
  return {
    async listar(userId) {
      // escreva o código aqui
    },
    async buscarPorId(id, userId) {
      // escreva o código aqui
    },
    async criar(dados, userId) {
      // escreva o código aqui
    },
    async atualizar(id, dados, userId) {
      // escreva o código aqui
    },
    async deletar(id, userId) {
      // escreva o código aqui
    }
  }
}

module.exports = tarefaRepoKnex
```

## Perguntas

**1. O que o método `listar` retorna para o usuário A se o banco tem 5 tarefas, sendo 3 do usuário A e 2 do usuário B?**

[explique]

**2. Por que o `userId` no método `criar` NÃO vem do body da requisição?**

[explique em 2-3 frases]

**3. O que acontece se o método `buscarPorId` recebe um `id` que existe mas um `userId` que não é o dono?**

[explique o retorno]

**4. Por que o `WHERE` em `atualizar` e `deletar` usa `{ id, user_id: userId }` em vez de apenas `{ id }`?**

[explique]

## Conclusão

[Em 2-3 frases: por que o filtro no repository é considerado "o coração da autorização no banco"?]
~~~~

---

## Questão 5: Service com Autorização

**Conceito-chave:** Service recebendo e repassando userId (Aula 08, Seção 6).

**Objetivo:** Verificar se você sabe modificar o service de tarefas para receber `userId` e repassar ao repository, incluindo verificação de existência.

**Passos de Execução:**

1. Escreva o código completo do service refatorado
2. Inclua a verificação de existência com status 404 nos métodos de atualizar e deletar
3. Explique por que o service retorna 404 em vez de 403
4. Compare o código antes e depois da refatoração

**Entrega:** crie `entregas-aula-08/05-service-auth.md`:

~~~~
# Questão 5 — Service com Autorização

## Código Completo do Service

```javascript
function tarefaService(tarefaRepo) {
  return {
    async listar(userId) {
      // escreva o código aqui
    },
    async buscarPorId(id, userId) {
      // escreva o código aqui
    },
    async criar(dados, userId) {
      // escreva o código aqui
    },
    async atualizar(id, dados, userId) {
      // escreva o código aqui
    },
    async deletar(id, userId) {
      // escreva o código aqui
    }
  }
}

module.exports = tarefaService
```

## Perguntas

**1. Por que os métodos `atualizar` e `deletar` fazem uma chamada extra a `buscarPorId` antes de executar a operação?**

[explique em 2-3 frases]

**2. O que acontece se o usuário tenta atualizar uma tarefa que não existe? E se tenta atualizar uma tarefa que existe mas não pertence a ele?**

[descreva os dois cenários e os status codes]

**3. Por que o service retorna 404 em vez de 403 quando a tarefa não pertence ao usuário?**

[explique a razão de segurança]

## Antes e Depois

Compare a assinatura do método `atualizar` antes e depois da refatoração:

**Antes:** `async atualizar(id, dados)`
**Depois:** `async atualizar(id, dados, userId)`

Explique por que adicionar `userId` ao service é a consequência natural de adicioná-lo ao repository:

[explique em 2-3 frases]

## Conclusão

[Em 2-3 frases: qual o papel do service na ponte entre controller e repository quando se trata de autorização?]
~~~~

---

## Questão 6: Middleware de Autorização

**Conceito-chave:** Middleware autorizarTarefa (Aula 08, Seção 8).

**Objetivo:** Verificar se você sabe implementar um middleware de autorização que verifica propriedade do recurso e retorna 403.

**Passos de Execução:**

1. Escreva o código completo do middleware `autorizarTarefa`
2. Descreva o fluxo auth + autorização
3. Explique a diferença entre 401 e 403
4. Teste mental com cenários de autorização

**Entrega:** crie `entregas-aula-08/06-middleware-autorizacao.md`:

~~~~
# Questão 6 — Middleware de Autorização

## Código do Middleware

```javascript
// Implemente o middleware autorizarTarefa
// Deve receber tarefaRepo como dependência
// Deve buscar a tarefa com o userId do req.user
// Deve retornar 403 se não pertencer ao usuário
// Deve injetar req.tarefa se pertencer
```

## Fluxo Completo

Descreva o fluxo abaixo em etapas numeradas:

```
Cliente → PUT /tarefas/10 → [Middleware Auth] → [Middleware Autorizar] → [Controller]
```

**Etapa 1:**
[o que o Middleware Auth faz e o que ele injeta em req]

**Etapa 2:**
[o que o Middleware Autorizar faz e o que ele injeta em req]

**Etapa 3:**
[o que o Controller faz com os dados recebidos]

## 401 vs 403

| Situação | Status Code | Middleware | Mensagem |
|---|---|---|---|
| Token ausente | | Auth | |
| Token expirado | | Auth | |
| Tarefa de outro usuário | | Autorizar | |
| Token válido + tarefa própria | | Ambos passam | |

Preencha a tabela com status code, middleware responsável e mensagem de erro.

## Teste Mental

Considere que o usuário A (id=1) tem a tarefa 10 (user_id=1) e o usuário B (id=2) tem a tarefa 20 (user_id=2).

Complete a tabela:

| Requisição | Token de | Status esperado | Motivo |
|---|---|---|---|
| PUT /tarefas/10 | Usuário A | | |
| PUT /tarefas/10 | Usuário B | | |
| DELETE /tarefas/20 | Usuário A | | |
| DELETE /tarefas/20 | Usuário B | | |
| GET /tarefas | Usuário A | | |
| GET /tarefas | Usuário B | | |

## Conclusão

[Em 2-3 frases: por que o middleware de autorização é uma camada extra de segurança e não substitui o filtro no repository?]
~~~~

---

## Questão 7: Fluxo Completo do Sistema Autorizado

**Conceito-chave:** Arquitetura completa com segurança integrada (Aula 08, Seções 7 e 9).

**Objetivo:** Verificar se você entende o fluxo completo de uma requisição autorizada, desde o registro até a resposta, passando por todas as camadas de segurança.

**Passos de Execução:**

1. Descreva o fluxo textual completo de uma requisição POST /tarefas autenticada
2. Identifique cada camada por onde a requisição passa
3. Explique o papel de cada middleware
4. Mapeie onde cada conceito de segurança é aplicado

**Entrega:** crie `entregas-aula-08/07-fluxo-completo.md`:

~~~~
# Questão 7 — Fluxo Completo do Sistema Autorizado

## Fluxo: POST /tarefas (criar nova tarefa)

Preencha a tabela com o caminho completo da requisição:

| Etapa | Componente | O que acontece | Dados |
|---|---|---|---|
| 1 | Cliente | Envia requisição POST /tarefas | Body + Header Authorization |
| 2 | Rota | | |
| 3 | Middleware Auth | | |
| 4 | Controller | | |
| 5 | Service | | |
| 6 | Repository | | |
| 7 | Banco | | |
| 8 | Resposta | | |

## Fluxo: PUT /tarefas/10 (atualizar tarefa de outro usuário — negado)

Preencha onde a requisição é barrada:

| Etapa | Componente | O que acontece | Status |
|---|---|---|---|
| 1 | Cliente | Envia requisição PUT /tarefas/10 | Body + Header Authorization |
| 2 | Rota | | |
| 3 | Middleware Auth | | |
| 4 | Middleware Autorizar | | |
| ... | (barrado aqui) | | |

## Camadas de Segurança

Para cada camada, identifique o que ela protege e contra o quê:

| Camada | O que protege | Contra o quê |
|---|---|---|
| Validação (Joi) | | |
| Autenticação (JWT) | | |
| Autorização (Middleware) | | |
| Autorização (Repository) | | |
| Knex bindings | | |
| FK constraint | | |

## Conclusão

[Em 2-3 frases: o que significa "defesa em profundidade" no contexto de uma API REST?]
~~~~

---

## Questão 8: Síntese do Módulo — A Evolução do Gerenciador de Tarefas

**Conceito-chave:** Evolução do projeto e Repository Pattern (Aula 08, Seção 10).

**Objetivo:** Verificar se você consegue sintetizar a evolução completa do módulo, identificando o papel de cada aula e o valor do Repository Pattern como fio condutor.

**Passos de Execução:**

1. Preencha a tabela de evolução do projeto
2. Explique o que mudou em cada fase sem mudar a interface do repository
3. Identifique o conceito mais importante que você aprendeu
4. Liste os próximos passos que você poderia explorar

**Entrega:** crie `entregas-aula-08/08-sintese-modulo.md`:

~~~~
# Questão 8 — Síntese do Módulo

## Evolução do Gerenciador de Tarefas

Preencha a tabela com o armazenamento, autenticação e autorização de cada fase:

| Fase | Aulas | Armazenamento | Autenticação | Autorização |
|---|---|---|---|---|
| Curso Node.js | Aula 10 | | | |
| Fase 1 | 01-03 | | | |
| Fase 2 | 04-06 | | | |
| Fase 3 | 07 | | | |
| Fase 3 | 08 | | | |

## O Repository Pattern

**Por que a interface do repository (`listar`, `criar`, `atualizar`, `deletar`) nunca mudou durante todo o módulo?**

[explique em 3-4 frases]

**O que mudou na ASSINATURA dos métodos nesta aula (Aula 08)?**

[explique]

## O Conceito Mais Importante

Qual foi o conceito mais importante que você aprendeu neste módulo? Por quê?

[responda em 3-4 frases]

## Próximos Passos

Liste 3 coisas que você gostaria de aprender ou implementar a partir deste projeto:

1. [seu próximo passo]
2. [seu próximo passo]
3. [seu próximo passo]

## Conclusão

[Em 3-4 frases: como você descreveria a sua evolução como desenvolvedor desde a primeira aula até o projeto final?]
~~~~

---

## Checklist Final: Pronto para o Próximo Curso?

Marque cada item só quando conseguir fazê-lo **sem consultar a aula**:

- [ ] Explicar o que é um relacionamento 1:N e dar 3 exemplos do mundo real
- [ ] Definir chave estrangeira e seu papel na integridade referencial
- [ ] Comparar ON DELETE CASCADE, RESTRICT e SET NULL e escolher o adequado
- [ ] Distinguir autenticação de autorização com exemplos de sistema
- [ ] Diferenciar autorização baseada em recursos de RBAC
- [ ] Refatorar o repository de tarefas para filtrar por `user_id` em todos os métodos
- [ ] Modificar o service para receber e repassar `userId`
- [ ] Implementar um middleware de autorização que verifica propriedade do recurso
- [ ] Atualizar controllers e rotas para integrar autorização
- [ ] Explicar o fluxo completo: registro → login → token → middleware auth → middleware autorizar → repository com user_id → banco
- [ ] Verificar que usuário A não acessa tarefas do usuário B
- [ ] Sintetizar a evolução do projeto JSON → SQLite → PostgreSQL → Autenticação → Autorização
- [ ] Explicar o valor do Repository Pattern como fio condutor do módulo

> *Acertou todos? Parabéns — você completou o Curso de Banco de Dados SQL! Do SQLite ao PostgreSQL com Knex, passando por migrations, JOINs, transações, autenticação JWT e autorização. Seu Gerenciador de Tarefas começou como um JSON volátil e terminou como uma API REST profissional com PostgreSQL e segurança em múltiplas camadas. Travou em algum? Releia a seção indicada na questão correspondente antes de encerrar o módulo.*

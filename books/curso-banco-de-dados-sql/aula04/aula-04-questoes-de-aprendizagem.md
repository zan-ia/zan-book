---
titulo: "Curso de Banco de Dados SQL — Do SQLite ao PostgreSQL com Knex"
modulo: "01"
aula: "04"
---

# Curso de Banco de Dados SQL Aula 04 — Questões de Aprendizagem

## Como Usar Este Arquivo

Este arquivo é o checkpoint de aprendizagem da Aula 04. A pergunta central é: "eu realmente entendi por que produção precisa de um banco servidor e como conectar Node.js ao PostgreSQL?". Cada questão verifica um conceito-chave da aula. Siga os passos de execução e preencha o template de entrega para cada questão. Crie a pasta `entregas-aula-04` para salvar suas respostas.

Se travar em alguma questão, releia a seção correspondente na aula principal antes de consultar o gabarito.

---

## Questão 1: Comparando Arquiteturas — Embarcado vs Servidor

**Conceito-chave:** Arquitetura de bancos de dados (Aula 04, Seção 1).

**Objetivo:** Demonstrar que você sabe diferenciar bancos embarcados de bancos servidor, identificando prós e contras de cada arquitetura.

**Passos de Execução:**

1. Liste 3 características de um banco embarcado e 3 de um banco servidor
2. Para cada característica, explique a implicação prática (ex: "não precisa de instalação separada → configuração mais simples")
3. Descreva em que cenário cada arquitetura é a melhor escolha

**Entrega:** crie `entregas-aula-04/01-arquiteturas.md`:

~~~~
# Questão 1 — Bancos Embarcados vs Servidor

## Banco embarcado

| Característica | Implicação prática |
|---|---|
|  |  |
|  |  |
|  |  |

## Banco servidor

| Característica | Implicação prática |
|---|---|
|  |  |
|  |  |
|  |  |

## Qual arquitetura usar?

**Banco embarcado é melhor quando:** [descreva 2 cenários]

**Banco servidor é melhor quando:** [descreva 2 cenários]

## Conclusão

[Em 2-3 frases: resuma a diferença central entre as duas arquiteturas]
~~~~

---

## Questão 2: Desenhando o Fluxo de Concorrência

**Conceito-chave:** Concorrência e MVCC (Aula 04, Seção 2).

**Objetivo:** Demonstrar que você sabe explicar como um banco servidor lida com múltiplos usuários simultâneos.

**Passos de Execução:**

1. Descreva em etapas o que acontece quando dois usuários tentam atualizar a mesma tarefa ao mesmo tempo em um banco servidor
2. Explique o papel do MVCC nesse cenário
3. Compare com o que aconteceria em um banco embarcado

**Entrega:** crie `entregas-aula-04/02-concorrencia.md`:

~~~~
# Questão 2 — Concorrência no Banco Servidor

## Cenário: dois usuários atualizam a mesma tarefa simultaneamente

**Etapas no banco servidor:**

1. [Primeiro evento]
2. [Segundo evento]
3. [Terceiro evento]
4. [Quarto evento]

## O papel do MVCC

[Em 3-4 frases: explique como o MVCC evita que os usuários vejam dados inconsistentes]

## Comparação com banco embarcado

| Aspecto | Banco embarcado | Banco servidor |
|---|---|---|
| Escrita simultânea |  |  |
| Leitura durante escrita |  |  |
| Perda de dados |  |  |

## Conclusão

[Em 2 frases: por que concorrência é um requisito para produção?]
~~~~

---

## Questão 3: Construindo uma Connection String

**Conceito-chave:** Connection string PostgreSQL (Aula 04, Seção 6).

**Objetivo:** Demonstrar que você sabe construir e interpretar uma connection string completa.

**Passos de Execução:**

1. Identifique cada componente da connection string abaixo
2. Explique o que cada parte faz
3. Construa uma nova connection string para um cenário diferente

**Connection string de exemplo:**
`postgresql://admin:minha-senha-super-secreta@db-producao.empresa.com:5432/gerenciador_tarefas`

**Cenário para nova connection string:** usuário `app_user`, senha `Str0ng!Pass`, host `localhost`, porta `5433`, banco `meu_banco_dev`.

**Entrega:** crie `entregas-aula-04/03-connection-string.md`:

~~~~
# Questão 3 — Connection String

## Análise da connection string de exemplo

| Componente | Valor na string | O que significa |
|---|---|---|
| Protocolo |  |  |
| Usuário |  |  |
| Senha |  |  |
| Host |  |  |
| Porta |  |  |
| Banco |  |  |

## Nova connection string

**Cenário:** usuário `app_user`, senha `Str0ng!Pass`, host `localhost`, porta `5433`, banco `meu_banco_dev`

Connection string: [escreva aqui]

## Pergunta

Por que a senha aparece em texto puro na connection string? Isso é seguro?

[Responda em 2-3 frases]
~~~~

---

## Questão 4: Executando PostgreSQL com Docker

**Conceito-chave:** Docker para PostgreSQL (Aula 04, Seção 5).

**Objetivo:** Demonstrar que você sabe iniciar um container PostgreSQL com configuração correta de usuário, senha, porta e volume.

**Passos de Execução:**

1. Escreva o comando `docker run` completo para iniciar PostgreSQL com:
   - Nome do container: `meu-postgres`
   - Usuário: `meu_user`
   - Senha: `minha_senha`
   - Banco inicial: `app_db`
   - Porta local: `5433` (redirecionando para a 5432 do container)
   - Volume: `meu-volume-pg` montado em `/var/lib/postgresql/data`
   - Imagem: `postgres:16`
   - Rodar em background
2. Explique por que cada parte é necessária
3. Escreva o comando para verificar que o container está rodando

**Entrega:** crie `entregas-aula-04/04-docker-postgres.md`:

~~~~
# Questão 4 — PostgreSQL com Docker

## Comando docker run

```
[escreva o comando completo aqui]
```

## Explicação de cada parte

| Parâmetro | Por que é necessário |
|---|---|
| `--name meu-postgres` |  |
| `-e POSTGRES_USER=meu_user` |  |
| `-e POSTGRES_PASSWORD=minha_senha` |  |
| `-e POSTGRES_DB=app_db` |  |
| `-p 5433:5432` |  |
| `-v meu-volume-pg:/var/lib/postgresql/data` |  |
| `-d postgres:16` |  |

## Verificação

Comando para verificar que o container está rodando:

```
[escreva o comando]
```

Saída esperada: [descreva o que deve aparecer]

## Pergunta

O que acontece com os dados se você remover o container com `docker rm` sem antes remover o volume?

[Responda em 1-2 frases]
~~~~

---

## Questão 5: Primeira Conexão com pg

**Conceito-chave:** Driver `pg` e Client (Aula 04, Seção 6).

**Objetivo:** Demonstrar que você sabe escrever um script Node.js que conecta no PostgreSQL, executa uma query e encerra a conexão.

**Passos de Execução:**

1. Escreva um script Node.js que:
   - Importa `Client` do pacote `pg`
   - Cria um client com connection string apontando para o container da Questão 4
   - Conecta ao banco
   - Executa `SELECT 'Olá PostgreSQL' AS mensagem`
   - Exibe o resultado no console
   - Encerra a conexão
2. Identifique o que cada bloco do código faz

**Entrega:** crie `entregas-aula-04/05-conexao-pg.md`:

~~~~
# Questão 5 — Primeira Conexão com pg

## Script completo

```javascript
const { Client } = require('pg')

async function main() {
  // Criar o client com a connection string
  // [implemente aqui]

  // Conectar ao banco
  // [implemente aqui]

  // Executar a query e armazenar o resultado
  // [implemente aqui]

  // Exibir a mensagem do resultado
  // [implemente aqui]

  // Encerrar a conexão
  // [implemente aqui]
}

main().catch(erro => console.error('Erro:', erro))
```

## Explicação

| Linha ou bloco | O que faz |
|---|---|
| `const { Client } = require('pg')` |  |
| `new Client({ connectionString: ... })` |  |
| `await client.connect()` |  |
| `await client.query(...)` |  |
| `resultado.rows[0]` |  |
| `await client.end()` |  |
| `main().catch(...)` |  |

## Pergunta

O que muda se você substituir `Client` por `Pool`?

[Responda em 2-3 frases]
~~~~

---

## Questão 6: CRUD com Parâmetros no PostgreSQL

**Conceito-chave:** Queries SQL com parâmetros no PostgreSQL (Aula 04, Seção 7).

**Objetivo:** Demonstrar que você sabe executar INSERT, SELECT, UPDATE e DELETE no PostgreSQL usando parâmetros (`$1`, `$2`).

**Passos de Execução:**

1. Crie um script que:
   - Cria a tabela `produtos` com: `id` (SERIAL PK), `nome` (VARCHAR NOT NULL), `preco` (NUMERIC), `criado_em` (TIMESTAMPTZ DEFAULT NOW())
   - Insere 3 produtos: "Teclado" (150.00), "Mouse" (80.00), "Monitor" (1200.00)
   - Usa `RETURNING *` no INSERT para exibir cada produto criado
   - Lista produtos com preço acima de 100
   - Atualiza o preço do "Mouse" para 75.00
   - Remove o produto "Teclado"
   - Exibe a lista final
2. Todas as queries devem usar parâmetros

**Entrega:** crie `entregas-aula-04/06-crud-produtos.md`:

~~~~
# Questão 6 — CRUD de Produtos

## Script completo

```javascript
const { Client } = require('pg')

async function main() {
  const client = new Client({
    connectionString: 'postgresql://meu_user:minha_senha@localhost:5433/app_db'
  })

  await client.connect()

  // CREATE TABLE
  // [implemente aqui]

  // INSERT com RETURNING *
  // [implemente aqui]

  // SELECT com filtro
  // [implemente aqui]

  // UPDATE
  // [implemente aqui]

  // DELETE
  // [implemente aqui]

  // SELECT final
  // [implemente aqui]

  await client.end()
}

main().catch(erro => console.error('Erro:', erro))
```

## Resultados esperados

Para cada operação, cole o resultado que você obteve:

**INSERT:** [resultado esperado]

**SELECT (preço > 100):** [quais produtos aparecem]

**UPDATE (Mouse para 75):** [o SELECT final mostra 75?]

**DELETE (Teclado):** [o SELECT final tem 2 ou 3 produtos?]

## Pergunta

Por que você usou `$1`, `$2` em vez de concatenação de string?

[Responda em 2-3 frases]
~~~~

---

## Questão 7: Planejando a Migração para PostgreSQL

**Conceito-chave:** Migração de dados entre bancos (Aula 04, Desafio dos Exercícios Graduados).

**Objetivo:** Demonstrar que você sabe planejar e explicar o processo de migração de dados do SQLite para o PostgreSQL.

**Passos de Execução:**

1. Liste em ordem as etapas para migrar os dados do Gerenciador de Tarefas do SQLite para o PostgreSQL
2. Para cada etapa, identifique possíveis problemas e como resolvê-los
3. Explique por que o Repository Pattern facilita essa migração

**Entrega:** crie `entregas-aula-04/07-planejamento-migracao.md`:

~~~~
# Questão 7 — Migração para PostgreSQL

## Etapas da migração

| Ordem | Etapa | Comando ou ação | Problema potencial |
|---|---|---|---|
| 1 |  |  |  |
| 2 |  |  |  |
| 3 |  |  |  |
| 4 |  |  |  |
| 5 |  |  |  |

## Tipos de dados: SQLite vs PostgreSQL

Para cada coluna da tabela `tarefas`, indique o tipo no SQLite e o equivalente no PostgreSQL:

| Coluna | SQLite | PostgreSQL |
|---|---|---|
| id | INTEGER PRIMARY KEY AUTOINCREMENT |  |
| titulo | TEXT NOT NULL |  |
| concluida | INTEGER DEFAULT 0 |  |
| prioridade | TEXT DEFAULT 'média' |  |
| criada_em | TEXT DEFAULT CURRENT_TIMESTAMP |  |

## O papel do Repository Pattern

[Em 3-4 frases: explique como o Repository Pattern facilita trocar o banco sem alterar a lógica da aplicação]

## Conclusão

[Em 2 frases: o que você aprendeu sobre migração de bancos?]
~~~~

---

## Checklist Final: Pronto para a Próxima Aula?

Marque cada item só quando conseguir fazê-lo **sem consultar a aula**:

- [ ] Explicar a diferença entre banco embarcado e banco servidor com 2 exemplos cada
- [ ] Descrever como o MVCC resolve o problema de concorrência
- [ ] Citar 3 tipos de dados que um banco servidor oferece além dos tipos básicos
- [ ] Construir uma connection string PostgreSQL a partir de parâmetros
- [ ] Executar `docker run` para PostgreSQL com usuário, senha, volume e porta
- [ ] Escrever um script Node.js que conecta com `pg`, executa query e fecha conexão
- [ ] Executar INSERT com `RETURNING *` no PostgreSQL
- [ ] Usar parâmetros `$1`, `$2` em queries SQL no lugar de concatenação
- [ ] Explicar por que o volume Docker é necessário para persistência de dados

> *Acertou todos? Você está pronto para a próxima aula, onde o Knex vai se conectar ao PostgreSQL — e você verá que as migrations da Aula 03 funcionam sem mudar uma linha. Travou em algum? Releia a seção indicada na questão correspondente antes de avançar.*

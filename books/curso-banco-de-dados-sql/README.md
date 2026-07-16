# Plano do Módulo: Banco de Dados SQL — Do SQLite ao PostgreSQL com Knex (8 aulas)

Este módulo é a continuação direta do **curso-nodejs** (10 aulas). O aluno chega aqui dominando Node.js, Express, middleware, validação, e arquitetura em 3 camadas (routes → controllers → services → repositories). Sabe isolar lógica de negócio em services puros e abstrair acesso a dados com o Repository Pattern (implementado com JSON local na Aula 10 do curso-nodejs).

## Público-alvo e ponto de partida

**Público**: desenvolvedores que concluíram `curso-nodejs`. Dominam JavaScript moderno, Express, middleware, validação de requisições, estrutura de projeto em camadas, e Repository Pattern com JSON local. Já implementaram um CRUD completo (Gerenciador de Tarefas) com rotas, controllers, services e repositories — mas os dados morrem quando o servidor reinicia.

**O que o aluno já sabe**: servidores Express, middlewares customizados, validação de body/params, separação routes/controllers/services/repositories, injeção de dependências manual via factory functions, manipulação de JSON com fs.promises.

**O que o aluno NÃO sabe**: SQL (zero), modelagem de tabelas, chaves primárias/estrangeiras, migrations, seeds, connection pools, SQL injection, transações. Não sabe o que é um banco de dados relacional além de "aquilo que guarda dados". Nunca escreveu `SELECT` ou `CREATE TABLE`.

**Compromisso do módulo**: substituir o `JSON.parse(fs.readFileSync(...))` do Repository Pattern por bancos de dados reais — sem mexer em uma linha dos controllers ou services. O aluno descobre que a beleza do Repository Pattern é exatamente esta: a interface não muda, só a implementação.

## Projeto Progressivo: API de Gerenciador de Tarefas com Persistência Real

O aluno pega o Gerenciador de Tarefas do `curso-nodejs` (que salvava em `tarefas.json`) e evolui o repository em 3 estágios:

| Fase | Aulas | Repository |
|---|---|---|
| Fase 1 (01-03) | SQLite + Knex | JSON local → SQLite via Knex |
| Fase 2 (04-06) | PostgreSQL + Produção | SQLite → PostgreSQL (mesmo Knex, connection diferente) |
| Fase 3 (07-08) | Auth + Projeto Final | Adiciona tabela de usuários, JWT, autorização |

## O mecanismo central

`[Repository Interface] → [Knex Query Builder] → [Driver SQL] → [Banco]`

O aluno internaliza que o Repository Pattern desacopla a aplicação do banco. A aplicação chama `tarefaRepo.listar()`. Por baixo, o Knex traduz para `SELECT * FROM tarefas`. O driver (better-sqlite3 ou pg) executa no banco. Trocar SQLite por PostgreSQL é mudar 2 linhas de configuração.

## Sequência das 8 aulas

### FASE 1 — SQLITE + KNEX (Aulas 01-03)

O aluno aprende SQL do zero e conecta ao repository que já existe.

#### Aula 01: Banco de Dados SQL — Conceitos, Tabelas e SQLite

**Conteúdo**: O `tarefas.json` funciona, mas não escala. Banco de dados resolve: persistência real, consultas eficientes, múltiplos usuários simultâneos. O que é SQL? Linguagem para conversar com bancos relacionais. Tabelas como planilhas com colunas tipadas. SQLite: banco leve, sem servidor, arquivo único — perfeito para aprender e para desenvolvimento local. Instalação: `better-sqlite3` (síncrono, simples). Criar tabela: `CREATE TABLE tarefas (id INTEGER PRIMARY KEY AUTOINCREMENT, titulo TEXT NOT NULL, concluida INTEGER DEFAULT 0, criada_em TEXT DEFAULT CURRENT_TIMESTAMP)`. CRUD: INSERT, SELECT, UPDATE, DELETE. Primeiro contato com SQL: `SELECT * FROM tarefas WHERE concluida = 0`.

**Conceitos**: SQL, tabelas, colunas, tipos (INTEGER, TEXT), PRIMARY KEY, SQLite, better-sqlite3, CREATE TABLE, INSERT, SELECT, UPDATE, DELETE.

#### Aula 02: Knex — Query Builder e Por que Não SQL Puro

**Conteúdo**: Escrever SQL como string funciona para 1 query. Para 20 endpoints com filtros dinâmicos, concatenar string é perigoso (SQL injection) e ilegível. Knex resolve: query builder que gera SQL seguro com API encadeável. `knex('tarefas').where('concluida', 0).orderBy('criada_em', 'desc')`. Instalação: `knex` + driver (`better-sqlite3`). Configuração: `knexfile.js` com `client: 'better-sqlite3'`. Primeira query: substituir o `JSON.parse(fs.readFileSync(...))` do repository por `knex('tarefas').select('*')`. O aluno vê que o service continua funcionando idêntico — só o repository mudou.

**Pattern: Query Builder**: não é ORM — você escreve a query, mas em JavaScript, não em string. Knex traduz para o dialeto SQL do banco configurado. Vantagem: trocar SQLite por PostgreSQL depois não exige reescrever queries.

**Conceitos**: Knex, query builder, SQL injection, knexfile.js, `.select()`, `.where()`, `.insert()`, `.update()`, `.delete()`.

#### Aula 03: Migrations e Seeds — Versionando o Banco

**Conteúdo**: Criar tabela rodando `db.exec('CREATE TABLE...')` no código funciona no desenvolvimento. Em produção, o banco evolui: adiciona coluna `prioridade`, renomeia `titulo` para `descricao`, cria tabela `usuarios`. Migrations versionam o esquema do banco em arquivos sequenciais, como Git versiona código. `knex migrate:make criar_tabela_tarefas` → `knex migrate:latest`. Seeds populam dados iniciais: `knex seed:make tarefas_iniciais` → `knex seed:run`. O aluno cria migration para a tabela `tarefas` e seed com 5 tarefas de exemplo.

**Pattern: Repository Pattern formalizado**: agora que o aluno implementou o repository 2 vezes (JSON na aula 10 do curso-nodejs, SQLite/Knex agora), o pattern é nomeado e formalizado. "Repository é uma camada que abstrai o acesso a dados atrás de uma interface. A aplicação nunca sabe se os dados vêm de JSON, SQLite ou PostgreSQL."

**Conceitos**: migrations, seeds, `knex migrate:make`, `knex migrate:latest`, `knex seed:run`, Repository Pattern (formalizado).

### FASE 2 — POSTGRESQL (Aulas 04-06)

O aluno descobre que produção não usa SQLite e migra sem dor.

#### Aula 04: PostgreSQL — Banco de Produção

**Conteúdo**: SQLite é ótimo para desenvolvimento, mas produção exige PostgreSQL. Por quê? Concorrência real (múltiplas conexões simultâneas), tipos avançados (UUID, JSONB, arrays), replicação, backups. Instalação: Docker (`docker run postgres`) ou instalação local. pgAdmin para visualizar tabelas. Criar banco: `CREATE DATABASE tarefas_db`. Conectar com `pg` (node-postgres). Connection string: `postgresql://user:pass@localhost:5432/tarefas_db`. Primeira query com `pg`: `const result = await client.query('SELECT * FROM tarefas')`.

**Conceitos**: PostgreSQL, pg (node-postgres), connection string, Docker (básico), pgAdmin, client.query.

#### Aula 05: Knex com PostgreSQL — Mesmo Código, Banco Diferente

**Conteúdo**: A mágica do Knex: trocar o banco é mudar o `knexfile.js`. `client: 'better-sqlite3'` → `client: 'pg'`. Connection string no lugar do filename. As queries, migrations e seeds continuam idênticas. O aluno roda as mesmas migrations da Aula 03 no PostgreSQL: `knex migrate:latest`. Os mesmos seeds populam o PostgreSQL. O repository não muda uma linha.

**Pattern: Strategy via Knex**: o Knex implementa o Strategy Pattern internamente — mesmo código, dialetos SQL diferentes. O aluno não precisa implementar o pattern; o Knex já faz. Mas entender o conceito prepara para escolher entre `pg` puro (controle total) e Knex (portabilidade).

**Conceitos**: Knex com PostgreSQL, connection pool (`pool: { min: 2, max: 10 }`), dialect switching, variáveis de ambiente (`DATABASE_URL`).

#### Aula 06: Consultas Avançadas, Transações e SQL Injection

**Conteúdo**: Até agora, queries simples. Mas o mundo real pede: JOINs (tarefas + usuários), filtros combinados (`WHERE concluida = 0 AND prioridade = 'alta'`), paginação (`LIMIT 10 OFFSET 20`), agregações (`COUNT`, `AVG`). Transações: operações que ou acontecem todas ou nenhuma — `knex.transaction(trx => { ... })`. Exemplo: criar usuário + criar tarefa inicial na mesma transação. SQL injection: como o Knex protege automaticamente com bindings parametrizados (`where('id', id)` — o `id` nunca é concatenado na string SQL).

**Conceitos**: JOINs (INNER, LEFT), transações, paginação, agregações, SQL injection (prevenção com Knex), bindings parametrizados.

### FASE 3 — AUTENTICAÇÃO E PROJETO FINAL (Aulas 07-08)

O Gerenciador de Tarefas ganha múltiplos usuários.

#### Aula 07: Autenticação JWT — Usuários, Senhas e Tokens

**Conteúdo**: Até agora, qualquer um acessa qualquer tarefa. Autenticação resolve: cada usuário vê só suas tarefas. Nova tabela `usuarios` via migration: `id`, `nome`, `email` (UNIQUE), `senha_hash`. Endpoints: `POST /registro` e `POST /login`. Bcrypt: hash da senha — o banco nunca armazena senha em texto puro. JWT (JSON Web Token): "crachá de acesso" assinado pelo servidor. Fluxo: registro (hash da senha → INSERT) → login (verifica hash → gera token) → requisições seguintes enviam `Authorization: Bearer <token>`. Middleware `auth`: extrai e verifica o token, injeta `req.user`.

**Conceitos**: JWT, bcrypt, hash, token, Authorization Bearer, middleware de autenticação, payload, `jsonwebtoken`.

#### Aula 08: Autorização, Relacionamentos e Projeto Final

**Conteúdo**: Autenticação diz QUEM; autorização diz o que PODE. Relacionamento 1:N: cada tarefa pertence a um usuário. Migration: adicionar `user_id INTEGER REFERENCES usuarios(id)` na tabela `tarefas`. Ao criar tarefa, associar `user_id: req.user.id`. Ao listar, filtrar `WHERE user_id = ?`. O usuário A não pode ver/editar/deletar tarefas do usuário B. Middleware de autorização: verificar se o recurso pertence ao usuário logado.

**Projeto Final**: API REST do Gerenciador de Tarefas completa — PostgreSQL, Knex migrations/seeds, autenticação JWT, autorização por usuário, estrutura profissional em camadas, Repository Pattern com Knex. O mesmo service que começou com `tarefas.json` no curso-nodejs agora persiste em PostgreSQL com autenticação — sem mudar sua interface.

**Conceitos**: autorização, relacionamento 1:N, FOREIGN KEY, REFERENCES, middleware de autorização, `req.user`.

## Convenções didáticas

- **Âncora no curso-nodejs**: todo conceito parte do código que o aluno já tem. O Repository Pattern com JSON da Aula 10 do curso-nodejs é a ponte — "troque esta linha por aquela e o banco é real".
- **SQL incremental**: Aula 01 = SELECT/INSERT/UPDATE/DELETE básicos. Aula 06 = JOINs, transações, paginação. O aluno nunca enfrenta uma query complexa antes de dominar a simples.
- **Knex como aliado, não muleta**: o aluno escreve SQL puro na Aula 01 para entender a linguagem. Depois adota o Knex na Aula 02 para ganhar segurança e portabilidade. Não usa ORM — a abstração é o Repository Pattern, não a ferramenta.
- **Repository Pattern como fio condutor**: o pattern aparece na Aula 10 do curso-nodejs (JSON), é formalizado na Aula 03 deste módulo, e persiste até o projeto final (Aula 08). O aluno vê o mesmo pattern em 3 implementações diferentes — e entende o valor da abstração.
- **Máximo de 1-2 conceitos novos por aula**: SQL é denso. Cada aula introduz no máximo um conceito SQL novo + uma ferramenta.
- **Migrations desde a Aula 03**: o aluno nunca cria tabela "na mão" depois da Aula 03. Migrations são introduzidas cedo como prática profissional.

## Progressão de complexidade

| Fase | Aulas | Complexidade | Palavras-chave |
|---|---|---|---|
| Fase 1 | 01-03 | Iniciante→Intermediário | SQL, SQLite, better-sqlite3, Knex, migrations, seeds, Repository |
| Fase 2 | 04-06 | Intermediário | PostgreSQL, pg, connection pool, dialect switching, JOINs, transações |
| Fase 3 | 07-08 | Intermediário→Avançado | JWT, bcrypt, autenticação, autorização, FOREIGN KEY, projeto final |

## Regras para Manutenção de Coerência

1. **Este README é alterado primeiro.**
2. **Referências nas aulas seguem o README.**
3. **A aula N nunca referencia conceitos ou ferramentas da aula N+1.**
4. **Toda aula que usa banco de dados referencia o Repository Pattern introduzido na Aula 03.**
5. **Migrations são obrigatórias a partir da Aula 03** — nunca `db.exec('CREATE TABLE...')`.

## Referências

### Documentação oficial
- [SQLite Documentation](https://www.sqlite.org/docs.html)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [Knex.js Guide](https://knexjs.org/guide/)
- [better-sqlite3](https://github.com/WiseLibs/better-sqlite3)
- [node-postgres (pg)](https://node-postgres.com/)
- [JWT Introduction](https://jwt.io/introduction)

### Ferramentas
- [DB Browser for SQLite](https://sqlitebrowser.org/)
- [pgAdmin](https://www.pgadmin.org/)
- [Docker](https://docs.docker.com/get-started/)

---
titulo: "Curso de Banco de Dados SQL — Do SQLite ao PostgreSQL com Knex"
modulo: "01"
aula: "05"
duracao_estimada: "80 minutos"
nivel: "intermediário"
tags: [knex, postgresql, sqlite, connection-pool, strategy-pattern, multi-environment, dotenv, repository-pattern]
---

# Curso de Banco de Dados SQL — Aula 05

## Knex com PostgreSQL — Mesmo Código, Banco Diferente

**Duração estimada:** 80 minutos (35 de leitura + 45 de prática)
**Nível:** Intermediário
**Pré-requisitos:** Aula 04 (PostgreSQL, Docker, pg driver, connection string), Aula 03 (Migrations e Seeds com Knex), Aula 02 (Knex Query Builder)

---

## Objetivos de Aprendizagem

Ao final desta aula, você será capaz de:

- [ ] **Explicar** por que portabilidade de banco é importante em aplicações reais
- [ ] **Definir** o Strategy Pattern e relacioná-lo com a troca de bancos via Knex
- [ ] **Identificar** o papel do connection pool no gerenciamento de conexões com o banco
- [ ] **Configurar** o knexfile.js com ambientes `development` (SQLite) e `production` (PostgreSQL)
- [ ] **Instalar** o driver `pg` e conectar o Knex ao PostgreSQL
- [ ] **Executar** migrations e seeds no PostgreSQL usando o mesmo comando que usa no SQLite
- [ ] **Configurar** variáveis de ambiente com `DATABASE_URL` usando dotenv
- [ ] **Configurar** o connection pool do Knex com `pool.min` e `pool.max`
- [ ] **Demonstrar** que o repository não muda uma linha ao trocar de banco
- [ ] **Validar** o Strategy Pattern na prática com Knex multi-ambiente

---

## Como Usar Esta Aula

Esta aula está organizada em duas partes. A **primeira parte** constrói os fundamentos de portabilidade de banco, o padrão de projeto Strategy e connection pools. A **segunda parte** aplica esses conceitos configurando o Knex para funcionar com SQLite em desenvolvimento e PostgreSQL em produção. Ao final, o arquivo separado de Questões de Aprendizagem traz as tarefas de checkpoint.

**Tempo estimado:** 35 minutos de leitura + 45 minutos de prática.

---

## Mapa Mental

```mermaid
mindmap
  root((Knex com PostgreSQL))
    Portabilidade
      Dev vs Prod
      Mesmo código
      Trocar configuração
    Strategy Pattern
      Interface fixa
      Implementação variável
      Troca sem quebrar
    Connection Pool
      Múltiplas conexões
      Min e Max
      Reutilização
    knexfile Multi-Ambiente
      development sqlite3
      production pg
      DATABASE_URL
    Migrations e Seeds
      Mesmo comando
      Banco diferente
      Idempotência
    Repository Invariável
      Zero mudanças
```

> *O mapa mental acima mostra a estrutura da aula. Cada ramo representa um conceito que você vai explorar.*

---

## Recapitulação das Aulas Anteriores

| Aula | Conceito | Onde aparece nesta aula | Como se conecta |
|---|---|---|---|
| Aula 02 | **Knex Query Builder** (seção 3) | Seções 4, 6, 8 | O query builder `.select()`, `.where()`, `.insert()` que você usa no repository é o mesmo — só o driver muda |
| Aula 02 | **knexfile.js** (seção 2) | Seção 4 | O arquivo que antes exportava um objeto único agora exporta `{ development, production }` |
| Aula 03 | **Migrations e Seeds** (seções 3-4) | Seção 6 | As mesmas migrations e seeds que você criou vão rodar no PostgreSQL sem alterações |
| Aula 03 | **Repository Pattern** (seção 5) | Seção 8 | O repository não muda uma linha — prova de que o Pattern isola a aplicação do banco |
| Aula 04 | **PostgreSQL via Docker** (seções 5-6) | Seções 4-6 | O container PostgreSQL que você criou na Aula 04 é o banco de produção desta aula |
| Aula 04 | **Connection string** (seção 6) | Seções 4-5 | A connection string vira `DATABASE_URL` no `.env` — exatamente a mesma string que você usou com `pg` puro |
| Aula 04 | **Driver `pg`** (seção 6) | Seções 4-6 | O Knex usa o mesmo driver `pg` por baixo — você só instala, não importa diretamente |
---

**FUNDAMENTOS: Portabilidade de Banco e o Padrão Strategy**

> *Os conceitos desta seção são universais — valem para qualquer stack de tecnologia, independentemente da ferramenta específica. Portabilidade, Strategy Pattern e connection pool são fundamentos de arquitetura de software. Na segunda parte, você verá como um query builder implementa cada um deles.*

---

## 1. Por que Portabilidade de Banco Importa

Seu Gerenciador de Tarefas funciona com um banco embarcado. O banco é um arquivo, não precisa de servidor, configuração zero. Perfeito para desenvolvimento.

Mas produção é outro mundo. Vários usuários acessam ao mesmo tempo. O banco precisa aceitar múltiplas conexões simultâneas, garantir que dados não sejam perdidos, suportar backups e replicação. Bancos embarcados não foram feitos para isso. Bancos servidor foram.

Agora você tem um problema: precisa de um banco simples em desenvolvimento e um banco servidor em produção. Como resolver?

### A Abordagem Ingênua — Dois Repositórios

```javascript
// repositorio-dev.js — para desenvolvimento (banco embarcado)
const db = criarConexao({ tipo: 'embarcado', arquivo: './dev.db' })

const tarefaRepo = {
  listar: () => db.exec('SELECT * FROM tarefas'),
  // ...
}
```

```javascript
// repositorio-prod.js — para produção (banco servidor)
const db = criarConexao({ tipo: 'servidor', connectionString: process.env.DB_URL })

const tarefaRepo = {
  listar: async () => {
    const result = await db.query('SELECT * FROM tarefas')
    return result.rows
  },
  // ...
}
```

Isso funciona, mas você agora mantém **dois arquivos** que fazem a mesma coisa. Cada nova funcionalidade exige mudanças nos dois. Um bug corrigido no repositório de desenvolvimento precisa ser replicado no de produção. O dobro de código para testar, revisar e manter.

E quando chegar o terceiro banco? Se um cliente exige MySQL, você cria um terceiro repositório? A abordagem não escala.

### O Sonho — Um Código, Dois Bancos

O que você realmente quer é: **um único repositório** que funcione com qualquer banco. O código é o mesmo. A única coisa que muda é a configuração da conexão.

Quando você está desenvolvendo, o repositório aponta para o banco embarcado. Quando faz deploy para produção, ele aponta para o banco servidor. Sem mudar uma linha de código — só a configuração.

Isso é **portabilidade de banco**: a capacidade de trocar o banco de dados subjacente sem alterar a lógica da aplicação. É exatamente para isso que existem ferramentas de query builder com suporte a múltiplos dialetos SQL.

> *Você pode estar pensando: "mas meu projeto é pequeno, nunca vou usar um banco servidor". Boa pergunta. A maioria dos projetos começa pequena. O valor da portabilidade não é trocar de banco hoje — é **poder** trocar quando precisar, sem ter que reescrever tudo do zero.*

### Quick Check 1

**1. Qual o principal problema de manter dois repositórios diferentes (um para banco embarcado, outro para banco servidor)?**
**Resposta:** Dobro de código para escrever, testar e manter. Cada nova funcionalidade ou correção precisa ser replicada nos dois arquivos. A abordagem não escala para três ou mais bancos.

**2. O que significa "portabilidade de banco" no contexto de uma aplicação?**
**Resposta:** É a capacidade de trocar o banco de dados subjacente (de um banco embarcado para um servidor, por exemplo) sem alterar o código da aplicação — apenas a configuração de conexão.

---

## 2. Strategy Pattern — Mesma Interface, Implementações Diferentes

O problema de manter dois repositórios tem uma solução conhecida na engenharia de software. Chama-se **Strategy Pattern**.

### Definição

> Strategy Pattern é um padrão de projeto que define uma família de algoritmos intercambiáveis. O código que usa o algoritmo não sabe qual implementação está sendo usada — só conhece a interface.

Traduzindo: você define **o que** fazer (a interface) e cria **várias formas** de fazer (as implementações). Quem usa o código escolhe qual implementação usar sem mudar a própria lógica.

### Analogia: Plugues e Tomadas

Você viaja para um país com tomadas diferentes. Seu carregador de celular tem um plugue específico. Você não recompra o carregador — compra um adaptador.

O adaptador é a ponte entre o plugue do seu carregador (interface fixa) e a tomada do país (implementação variável). O carregador funciona do mesmo jeito, independente da tomada.

### Exemplos do Mundo Real

**Formas de pagamento:** um sistema de e-commerce processa pagamentos. A interface é `processarPagamento(valor, dados)`. As implementações são: cartão de crédito, boleto, Pix, PayPal. O código que finaliza a compra chama a interface — não sabe qual método está sendo usado.

**Serviços de entrega:** sua loja online precisa calcular frete. A interface é `calcularFrete(origem, destino, peso)`. As implementações são: Correios, FedEx, transportadora local. O carrinho de compras chama a interface — a escolha do serviço é configurável.

**Notificações:** seu sistema precisa notificar usuários. A interface é `enviar(usuario, mensagem)`. As implementações são: e-mail, SMS, notificação push, WhatsApp. A lógica de negócio chama a interface — não sabe qual canal está sendo usado.

### Como o Query Builder Implementa o Strategy Pattern

Um query builder expõe a **mesma interface** (`.select()`, `.where()`, `.insert()`) para todos os bancos. Cada driver de banco é uma **estratégia** diferente. A única coisa que muda é como a ferramenta traduz os métodos para o dialeto SQL correspondente.

- Em um banco embarcado, os bindings usam `?` como placeholder
- Em um banco servidor, os bindings usam `$1`, `$2` como placeholder

O código que você escreve — `.select('*').where('id', 1)` — é exatamente o mesmo. Quem define qual SQL gerar é a configuração do driver, não o código da aplicação.

O Strategy Pattern permite que você escreva o código uma vez e execute em qualquer banco suportado. A troca de estratégia é feita na configuração — não no código.

### Quick Check 2

**1. Qual a ideia central do Strategy Pattern?**
**Resposta:** Definir uma interface comum e criar múltiplas implementações intercambiáveis. O código que usa a interface não precisa saber qual implementação está ativa — ele chama os mesmos métodos.

**2. Como um query builder implementa o Strategy Pattern?**
**Resposta:** Um query builder expõe uma API única (`.select()`, `.where()`, `.insert()`) que gera SQL diferente para cada driver configurado. O driver do banco é a estratégia — a interface é sempre a mesma.

---

## 3. Connection Pool — Gerenciando Conexões com o Banco

Quando sua aplicação precisa conversar com o banco, ela abre uma conexão. Essa conexão é um canal de comunicação entre o servidor da aplicação e o servidor do banco.

Abrir uma conexão tem custo. O banco precisa autenticar, alocar memória, estabelecer o canal. Em um banco embarcado, isso é rápido — é só abrir um arquivo. Em um banco servidor, o custo é maior porque envolve rede, autenticação, negociação de protocolo.

### O Problema — Abrir e Fechar Conexões Toda Hora

Imagine seu Gerenciador de Tarefas com 50 usuários simultâneos. Cada requisição HTTP abre uma conexão com o banco, executa a query e fecha a conexão. Cinquenta requisições = cinquenta aberturas e fechamentos.

Isso é ineficiente por três motivos:

1. **Latência:** cada abertura leva tempo (handshake TCP, autenticação). O usuário espera mais.
2. **Recursos:** o banco gasta memória e CPU para cada conexão. Abrir e fechar o tempo todo gera sobrecarga desnecessária.
3. **Limites:** bancos servidor têm um limite máximo de conexões. Se você abre e fecha sem controle, pode esgotar esse limite.

### A Solução — Connection Pool

Um **connection pool** é um conjunto de conexões mantidas abertas e reutilizáveis. Em vez de abrir uma conexão nova para cada requisição, a aplicação **pega uma conexão do pool** e **devolve** quando termina.

```mermaid
flowchart LR
    subgraph Aplicacao["Aplicação"]
        R1[Requisição 1]
        R2[Requisição 2]
        R3[Requisição 3]
    end
    subgraph Pool["Connection Pool"]
        C1[(Conexão 1)]
        C2[(Conexão 2)]
        C3[(Conexão 3)]
    end
    subgraph Banco["Banco Servidor"]
        DB[(Banco)]
    end
    R1 --> C1
    R2 --> C2
    R3 --> C3
    C1 --> DB
    C2 --> DB
    C3 --> DB
```

> *O connection pool mantém um conjunto de conexões abertas. Cada requisição pega uma do pool e devolve após usar — sem custo de abertura a cada acesso.*

### Min, Max e Dimensionamento

O pool tem duas configurações fundamentais:

- **`min`:** número mínimo de conexões que o pool mantém abertas o tempo todo. Garante que sempre haja conexões disponíveis para requisições rápidas.
- **`max`:** número máximo de conexões que o pool pode abrir. Protege o banco de ser sobrecarregado por muitas conexões simultâneas.

Se `min = 2` e `max = 10`, o pool começa com 2 conexões. Se houver mais de 2 requisições simultâneas, o pool abre novas conexões até o limite de 10. Se a demanda cai, as conexões extras são fechadas, mas as 2 do `min` permanecem.

### Dimensionamento na Prática

| Cenário | min | max | Por quê |
|---|---|---|---|
| Desenvolvimento local | 0 | 1 | Poucas requisições, uma conexão basta |
| API pequena (até 100 req/s) | 2 | 10 | Picos de até 10 conexões simultâneas |
| API média (100-500 req/s) | 5 | 25 | Mais concorrência, mais conexões |
| API grande (500+ req/s) | 10 | 50 | Precisa de tuning com base em métricas |

Não existe fórmula mágica. O dimensionamento ideal depende do hardware do banco, da complexidade das queries e do número de requisições simultâneas. Comece conservador e ajuste com base em monitoramento.

### Pool em Bancos Embarcados vs Servidor

Em bancos embarcados, o connection pool não faz sentido. O banco é um arquivo, não um servidor. Você tem uma única "conexão" (o arquivo aberto) e acesso síncrono.

Em bancos servidor, o pool é essencial. Sem ele, cada requisição abriria uma nova conexão — com custo de handshake TCP, autenticação e alocação de recursos.

### Quick Check 3

**1. Qual a vantagem de usar um connection pool em vez de abrir uma nova conexão a cada requisição?**
**Resposta:** Reutilização de conexões já estabelecidas, reduzindo latência (sem handshake TCP a cada requisição) e uso de recursos no banco. O pool também protege o banco de ultrapassar o limite de conexões simultâneas.

**2. Por que bancos embarcados não precisam de connection pool, mas bancos servidor sim?**
**Resposta:** Bancos embarcados são arquivos locais — não há servidor, rede ou autenticação. Bancos servidor envolvem rede — cada conexão exige handshake TCP, autenticação e alocação de recursos no servidor, tornando a reutilização via pool essencial para performance.

---

**APLICAÇÃO: Knex Multi-Ambiente — SQLite e PostgreSQL com o Mesmo Código**

> *Agora que você entende portabilidade de banco, Strategy Pattern e connection pool, vamos conectá-los à prática com o Knex. Você vai configurar um único knexfile.js que funciona com SQLite em desenvolvimento e PostgreSQL em produção — e ver o repository não mudar uma linha.*

---

## 4. knexfile.js Multi-Ambiente — Um Arquivo, Dois Bancos

O knexfile.js que você configurou na Aula 02 era simples: um objeto plano com `client`, `connection` e opções. Isso funcionava porque você só usava um banco.

Agora você precisa de duas configurações: uma para desenvolvimento (SQLite) e outra para produção (PostgreSQL). O Knex suporta isso nativamente.

### A Estrutura Multi-Ambiente

Em vez de exportar um objeto, o knexfile.js exporta um **objeto com chaves de ambiente**:

```javascript
// knexfile.js — multi-ambiente
module.exports = {

  development: {
    client: 'better-sqlite3',
    connection: {
      filename: './dev.sqlite3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    }
  }

}
```

Repare no que mudou e no que ficou igual:

| Característica | Development (SQLite) | Production (PostgreSQL) |
|---|---|---|
| **client** | `'better-sqlite3'` | `'pg'` |
| **connection** | `{ filename: './dev.sqlite3' }` | `process.env.DATABASE_URL` |
| **pool** | não precisa (SQLite) | `{ min: 2, max: 10 }` |
| **migrations.directory** | `'./migrations'` | `'./migrations'` |
| **seeds.directory** | `'./seeds'` | `'./seeds'` |

As migrations e seeds usam o **mesmo diretório**. Os mesmos arquivos. Zero duplicação.

### Como o Knex Escolhe o Ambiente

Por padrão, o Knex usa o ambiente `development`. Você especifica o ambiente com a variável de ambiente `NODE_ENV` ou com a flag `--env` nos comandos CLI:

```bash
# Usa o ambiente development (padrão)
npx knex migrate:latest

# Usa o ambiente production explicitamente
NODE_ENV=production npx knex migrate:latest

# Ou com a flag --env
npx knex migrate:latest --env production
```

O Knex lê o knexfile.js, localiza a chave `development` ou `production` e usa aquela configuração. Simples e direto.

### A Conexão com a Aula 02

Na Aula 02, seu knexfile.js exportava um objeto único:
```javascript
module.exports = {
  client: 'better-sqlite3',
  connection: { filename: './dev.sqlite3' },
  useNullAsDefault: true
}
```

Na Aula 03, você adicionou `migrations` e `seeds`.

Agora você envolve tudo dentro de `development` e cria o bloco `production`.

**Mão na Massa — Configurar knexfile.js multi-ambiente:**

- [ ] Abra seu `knexfile.js` atual (que tem `migrations` e `seeds` configurados)
- [ ] Envolva toda a configuração atual dentro da chave `development`
- [ ] Adicione a chave `production` com `client: 'pg'`, `connection: process.env.DATABASE_URL` e `pool: { min: 2, max: 10 }`
- [ ] Inclua `migrations` e `seeds` com os mesmos diretórios em ambos os ambientes
- [ ] Verifique que `npx knex migrate:list` ainda funciona (padrão = development)

### Quick Check 4

**1. O que muda no knexfile.js para suportar múltiplos ambientes?**
**Resposta:** Em vez de exportar um objeto de configuração único, o knexfile.js exporta um objeto com chaves nomeadas — `development`, `production`. Cada chave contém a configuração completa para aquele ambiente.

**2. Como o Knex sabe qual configuração usar ao rodar um comando CLI?**
**Resposta:** Por padrão usa `development`. Você pode definir `NODE_ENV=production` ou usar `--env production` nos comandos CLI para usar a configuração de produção.

---

## 5. Variáveis de Ambiente e DATABASE_URL

A connection string do PostgreSQL contém informações sensíveis: usuário, senha, host, nome do banco. Colocar esses valores diretamente no código ou no knexfile.js é uma péssima prática de segurança.

A solução: **variáveis de ambiente**.

### O Problema com Configuração Fixa

```javascript
// ❌ NUNCA FAÇA ISSO — senha e dados no código
production: {
  client: 'pg',
  connection: 'postgresql://tarefas_user:tarefas_secret@localhost:5432/tarefas_db'
}
```

Problemas: a senha aparece no código, vai para o Git, qualquer pessoa com acesso ao repositório vê os dados de conexão, e você não pode ter configurações diferentes por ambiente sem editar o arquivo.

### A Solução — DATABASE_URL no .env

```javascript
// ✅ CORRETO — valores vindos de variáveis de ambiente
production: {
  client: 'pg',
  connection: process.env.DATABASE_URL
}
```

`process.env.DATABASE_URL` é uma variável de ambiente. O Node.js a preenche automaticamente se ela estiver definida no sistema ou em um arquivo `.env`.

### Criando o Arquivo .env

Na raiz do seu projeto, crie um arquivo chamado `.env`:

```bash
# .env — variáveis de ambiente do projeto
DATABASE_URL=postgresql://tarefas_user:tarefas_secret@localhost:5432/tarefas_db
```

### Instalando o dotenv

O Node.js não lê arquivos `.env` automaticamente. Você precisa do pacote `dotenv`:

```bash
npm install dotenv
```

E no ponto de entrada da sua aplicação (geralmente `server.js` ou `index.js`):

```javascript
require('dotenv').config()

// Agora process.env.DATABASE_URL está disponível
```

### .env.example — O Modelo para o Repositório

O arquivo `.env` contém dados sensíveis e **nunca deve ser versionado no Git**. Crie um `.env.example` que serve como modelo:

```bash
# .env.example — copie para .env e preencha
DATABASE_URL=postgresql://usuario:senha@localhost:5432/meu_banco
```

Adicione `.env` ao `.gitignore`:

```bash
# .gitignore
.env
node_modules/
dev.sqlite3
```

Assim, cada desenvolvedor copia `.env.example` para `.env`, preenche com suas credenciais locais, e o repositório nunca expõe senhas.

### O .env Funciona para SQLite Também?

Sim, você poderia colocar o caminho do SQLite no `.env` também. Mas como o SQLite não tem dados sensíveis (é um arquivo local), muitas equipes deixam o `filename` fixo no knexfile.js para simplificar. A escolha é sua.

### A Ordem de Precedência

Quando o Node.js resolve uma variável de ambiente:
1. Variáveis definidas diretamente no terminal (`export DATABASE_URL=...` ou `DATABASE_URL=... node app.js`)
2. Variáveis definidas no arquivo `.env` (via dotenv)
3. Valor padrão no código (se houver)

O `.env` é para desenvolvimento local. Em produção, você define `DATABASE_URL` diretamente no ambiente (Heroku, Railway, Render, Docker, etc.).

**Mão na Massa — Configurar .env e dotenv:**

- [ ] Crie o arquivo `.env` na raiz do projeto com `DATABASE_URL=postgresql://tarefas_user:tarefas_secret@localhost:5432/tarefas_db`
- [ ] Crie o arquivo `.env.example` com o mesmo formato mas sem dados reais
- [ ] Crie ou edite `.gitignore` para incluir `.env` e `dev.sqlite3`
- [ ] Instale `npm install dotenv`
- [ ] Adicione `require('dotenv').config()` no início do `server.js` ou `conexao-knex.js`
- [ ] Teste: execute `node -e "require('dotenv').config(); console.log(process.env.DATABASE_URL)"` e veja a connection string

### Quick Check 5

**1. Por que a connection string não deve ficar fixa no knexfile.js?**
**Resposta:** Porque contém dados sensíveis (usuário, senha) que não devem ser versionados no Git. Além disso, configuração fixa impede que cada ambiente use valores diferentes sem editar o arquivo.

**2. Qual a diferença entre `.env` e `.env.example`?**
**Resposta:** `.env` contém os valores reais e é ignorado pelo Git. `.env.example` é um modelo versionado que serve de referência para outros desenvolvedores saberem quais variáveis de ambiente são necessárias.

---

## 6. Rodando Migrations e Seeds no PostgreSQL

Com o knexfile.js configurado e o PostgreSQL rodando (da Aula 04), é hora de executar as migrations e seeds no PostgreSQL.

### Instalando o Driver pg

O Knex precisa do driver do banco para se conectar. Para PostgreSQL, o driver é o `pg`:

```bash
npm install pg
```

Repare: você não importa o `pg` diretamente. Quem faz isso é o Knex internamente. Você só precisa instalar o pacote.

### Verificando a Conexão

Antes de rodar migrations, confirme que o Knex consegue conectar no PostgreSQL:

```bash
# Usando NODE_ENV
NODE_ENV=production node -e "
const knex = require('knex')(require('./knexfile').production)
knex.raw('SELECT version()').then(r => {
  console.log('Conectado:', r.rows[0].version)
  return knex.destroy()
}).catch(e => console.error('Erro:', e))
"
```

Saída esperada:
```
Conectado: PostgreSQL 16.x on x86_64-pc-linux-gnu
```

### Rodando as Migrations

```bash
# Development (SQLite) — migrations que já existem
npx knex migrate:latest

# Production (PostgreSQL)
NODE_ENV=production npx knex migrate:latest
```

A saída deve ser algo como:
```
Using environment: production
Batch 1 run: 2 migrations
```

As **mesmas duas migrations** que você criou na Aula 03 (`criar_tabela_tarefas` e `adicionar_prioridade`) foram executadas no PostgreSQL. O Knex traduziu cada `knex.schema.createTable` e `knex.schema.alterTable` para o dialeto PostgreSQL automaticamente.

### Verificando as Tabelas no PostgreSQL

Conecte no PostgreSQL e veja o que foi criado:

```bash
docker exec -it tarefas-pg psql -U tarefas_user -d tarefas_db
```

Dentro do terminal PostgreSQL:

```sql
\dt
```

Saída esperada:
```
                List of relations
 Schema |       Name        | Type  |    Owner
--------+-------------------+-------+--------------
 public | knex_migrations   | table | tarefas_user
 public | knex_migrations_lock | table | tarefas_user
 public | tarefas           | table | tarefas_user
```

A tabela `tarefas` está lá, criada pela migration. A tabela `knex_migrations` registrou as duas migrations executadas — exatamente como no SQLite.

### Verificando a Estrutura da Tabela

```sql
\d tarefas
```

Saída esperada:
```
                                      Table "public.tarefas"
   Column    |          Type          | Collation | Nullable |              Default
-------------+------------------------+-----------+----------+-----------------------------------
 id          | integer                |           | not null | nextval('tarefas_id_seq'::regclass)
 titulo      | character varying(255) |           | not null |
 concluida   | boolean                |           |          | false
 criada_em   | timestamp with time zone |           |          | now()
 prioridade  | character varying(255) |           |          | 'média'::character varying
Indexes:
    "tarefas_pkey" PRIMARY KEY, btree (id)
```

Repare como o Knex traduziu os tipos:
- `table.increments('id')` → `integer` com sequence
- `table.string('titulo')` → `character varying(255)`
- `table.boolean('concluida')` → `boolean`
- `table.timestamp('criada_em')` → `timestamp with time zone`

Você escreveu `table.string('prioridade').defaultTo('média')`. O Knex gerou o SQL correto para PostgreSQL.

### Rodando os Seeds

```bash
NODE_ENV=production npx knex seed:run
```

Saída:
```
Using environment: production
Ran 1 seed files
```

Verifique os dados:

```bash
NODE_ENV=production node -e "
const knex = require('knex')(require('./knexfile').production)
knex('tarefas').select('*').then(t => {
  console.log(JSON.stringify(t, null, 2))
  return knex.destroy()
})
"
```

Saída esperada: as mesmas 5 tarefas do seed, agora no PostgreSQL.

### O que Torna Isso Possível

O Knex traduz cada método do schema builder e query builder para o dialeto correto:

| Operação | SQLite gerado | PostgreSQL gerado |
|---|---|---|
| `table.increments('id')` | `id INTEGER PRIMARY KEY AUTOINCREMENT` | `id SERIAL PRIMARY KEY` |
| `table.boolean('concluida')` | `concluida INTEGER DEFAULT 0` | `concluida BOOLEAN DEFAULT false` |
| `table.timestamp('criada_em')` | `criada_em TEXT DEFAULT CURRENT_TIMESTAMP` | `criada_em TIMESTAMPTZ DEFAULT NOW()` |
| `knex('tarefas').where('id', id)` | `SELECT * FROM "tarefas" WHERE "id" = ?` | `SELECT * FROM "tarefas" WHERE "id" = $1` |

Seus arquivos de migration nunca mudaram. O que mudou foi o `client` no knexfile.js.

**Mão na Massa — Rodar migrations e seeds no PostgreSQL:**

- [ ] Confirme que o container PostgreSQL está rodando: `docker ps`
- [ ] Instale o driver: `npm install pg`
- [ ] Rode as migrations no PostgreSQL: `NODE_ENV=production npx knex migrate:latest`
- [ ] Verifique as tabelas: `docker exec -it tarefas-pg psql -U tarefas_user -d tarefas_db -c "\dt"`
- [ ] Rode os seeds: `NODE_ENV=production npx knex seed:run`
- [ ] Verifique os dados: `docker exec -it tarefas-pg psql -U tarefas_user -d tarefas_db -c "SELECT * FROM tarefas"`

### Quick Check 6

**1. O que você precisa instalar no projeto para o Knex funcionar com PostgreSQL?**
**Resposta:** O pacote `pg` (node-postgres). O Knex usa o pg internamente como driver — você não precisa importá-lo diretamente, só instalar.

**2. Por que as migrations da Aula 03 funcionam no PostgreSQL sem nenhuma alteração?**
**Resposta:** Porque o Knex traduz automaticamente o schema builder (`knex.schema.createTable`) para o dialeto SQL do banco configurado. A migration usa `table.increments('id')` e o Knex gera `SERIAL` para PostgreSQL ou `INTEGER PRIMARY KEY AUTOINCREMENT` para SQLite — sem mudar o código da migration.

---

## 7. Connection Pool no Knex — Configurando Pool no knexfile.js

O Knex gerencia o connection pool internamente. Você não precisa criar um pool manualmente como faria com o `pg` puro.

### Configuração Básica

No knexfile.js, dentro do ambiente `production`, você já adicionou `pool`:

```javascript
production: {
  client: 'pg',
  connection: process.env.DATABASE_URL,
  pool: {
    min: 2,
    max: 10
  },
  // ...
}
```

### Como o Pool Funciona no Knex

Quando você cria a instância do Knex com `require('knex')(config)`, ele:
1. Lê a configuração `pool.min` e `pool.max`
2. Inicializa o **pg-pool** (a implementação de pool do pacote `pg`) com esses valores
3. Toda query executada no Knex pega uma conexão do pool automaticamente
4. Quando a query termina, a conexão volta ao pool

```javascript
// Toda query usa o pool automaticamente — você não precisa gerenciar
const knex = require('knex')(require('./knexfile').production)

await knex('tarefas').select('*')  // pega conexão do pool
await knex('tarefas').where('id', 1).first()  // reusa conexão do pool
await knex.destroy()  // fecha todas as conexões do pool
```

### Pool e Destroy

É importante chamar `knex.destroy()` quando a aplicação encerra. Isso fecha todas as conexões do pool de forma ordenada. Sem o destroy, as conexões podem ficar abertas até o timeout do banco.

```javascript
// Em server.js
process.on('SIGTERM', async () => {
  await knex.destroy()
  process.exit(0)
})
```

### Pool no Desenvolvimento

Para SQLite, o pool não se aplica — o `better-sqlite3` é síncrono. Mas você pode deixar o ambiente `development` sem pool:

```javascript
development: {
  client: 'better-sqlite3',
  connection: { filename: './dev.sqlite3' },
  useNullAsDefault: true
  // sem pool — SQLite não precisa
}
```

### O que Acontece se o Pool Esgota?

Se todas as conexões do `max` estiverem ocupadas e uma nova requisição chegar, ela **aguarda na fila** até que uma conexão seja liberada. Se o tempo de espera exceder (configurável com `pool.acquireTimeoutMillis`), o Knex lança um erro.

```javascript
pool: {
  min: 2,
  max: 10,
  acquireTimeoutMillis: 30000  // 30 segundos de timeout
}
```

Esse timeout evita que requisições fiquem esperando indefinidamente se o banco estiver sobrecarregado.

### Recomendações Práticas

| Ambiente | min | max | Observação |
|---|---|---|---|
| Desenvolvimento local | - | - | SQLite, sem pool |
| Produção (API pequena) | 2 | 10 | Comece aqui para a maioria dos casos |
| Produção (API média) | 5 | 25 | Monitore o uso para ajustar |
| Ferramentas/scripts | 0 | 1 | Jobs únicos não precisam de pool grande |

> *Até aqui, você já entendeu portabilidade de banco, Strategy Pattern, connection pool e como configurar o Knex para dois ambientes. Isso é MUITO. Respire. Se algo não ficou claro, releia a seção anterior — não tem problema nenhum voltar.*

**Mão na Massa — Configurar e testar o pool:**

- [ ] No knexfile.js, configure `pool: { min: 2, max: 10 }` no ambiente `production`
- [ ] Crie um script `testar-pool.js`:

```javascript
require('dotenv').config()
const knex = require('knex')(require('./knexfile').production)

async function testar() {
  const resultado = await knex('tarefas').select('*')
  console.log('Tarefas no PostgreSQL:', resultado.length)
  await knex.destroy()
  console.log('Pool fechado.')
}

testar().catch(console.error)
```

- [ ] Execute: `node testar-pool.js`

### Quick Check 7

**1. O que acontece se o número de requisições simultâneas ultrapassar `pool.max`?**
**Resposta:** As requisições excedentes entram em uma fila de espera. Quando uma conexão é liberada, a próxima requisição da fila a utiliza. Se o tempo de espera ultrapassar `acquireTimeoutMillis`, o Knex lança um erro.

**2. Por que o SQLite não precisa de pool no Knex?**
**Resposta:** SQLite é um banco embarcado, síncrono, sem servidor de rede. O driver `better-sqlite3` opera com uma única conexão direta ao arquivo — não há handshake TCP, autenticação ou limite de conexões para gerenciar.

---

## 8. Repository Pattern Validado — Zero Mudanças

Você configurou o knexfile.js para dois ambientes. Instalou o `pg`. Rodou as migrations no PostgreSQL. O banco de produção está pronto.

Agora a pergunta que vale ouro: **o repository da Aula 02 precisa mudar?**

Resposta: **Não. Zero linhas alteradas.**

### O Mesmo Código, Banco Diferente

O repository que você criou na Aula 02:

```javascript
const knex = require('../conexao-knex')

const tarefaRepo = {
  async listar() {
    const rows = await knex('tarefas').select('*')
    return rows.map(converterTarefa)
  },

  async buscarPorId(id) {
    const row = await knex('tarefas').where('id', id).first()
    return converterTarefa(row)
  },

  async criar(dados) {
    const [id] = await knex('tarefas').insert({
      titulo: dados.titulo,
      concluida: dados.concluida ? 1 : 0
    })
    return this.buscarPorId(id)
  },

  async atualizar(id, dados) {
    await knex('tarefas').where('id', id).update({
      titulo: dados.titulo,
      concluida: dados.concluida ? 1 : 0
    })
    return this.buscarPorId(id)
  },

  async remover(id) {
    const removidos = await knex('tarefas').where('id', id).del()
    return removidos > 0
  }
}

module.exports = tarefaRepo
```

Esse código funciona com SQLite. Funciona com PostgreSQL. Funciona com MySQL. Funciona com qualquer banco que o Knex suporte.

### O que Precisa Mudar no Código

**Nada.** Literalmente nada.

A única coisa que muda é:
1. O arquivo `conexao-knex.js` precisa ser atualizado para usar a configuração correta
2. O knexfile.js agora exporta `{ development, production }` em vez de um objeto único

### Atualizando a Factory de Conexão

Na Aula 02, `conexao-knex.js` importava o knexfile.js diretamente:

```javascript
// conexao-knex.js — versão Aula 02
const knex = require('knex')(require('./knexfile'))
module.exports = knex
```

Agora que o knexfile.js exporta `{ development, production }`, você precisa escolher qual ambiente usar:

```javascript
// conexao-knex.js — versão Aula 05 (usa variável de ambiente)
const config = require('./knexfile')
const ambiente = process.env.NODE_ENV || 'development'
const knex = require('knex')(config[ambiente])

module.exports = knex
```

Em desenvolvimento, `NODE_ENV` não está definido → usa `development` → SQLite.

Em produção, você define `NODE_ENV=production` → usa `production` → PostgreSQL.

### Validando o Strategy Pattern

Isso é o Strategy Pattern em ação:

1. **Interface:** o repository expõe `listar()`, `buscarPorId()`, `criar()`, `atualizar()`, `remover()`
2. **Estratégias:** SQLite (development) e PostgreSQL (production)
3. **Troca:** muda a variável de ambiente `NODE_ENV` e o Knex troca de estratégia

O service chama `tarefaRepo.listar()`. O repository chama `knex('tarefas').select('*')`. O Knex gera SQL diferente dependendo do `client` configurado. O banco recebe a query no dialeto correto.

```mermaid
flowchart LR
    subgraph Codigo["Seu Código"]
        Service -->|"listar()"| Repository
        Repository -->|"knex('tarefas').select('*')"| Knex
    end
    subgraph KnexLayer["Knex Query Builder"]
        Knex -->|"traduz para"| SQL
    end
    subgraph Ambiente["Configuração"]
        ENV["NODE_ENV=development"] -->|"client: better-sqlite3"| SQLite[(SQLite)]
        ENV2["NODE_ENV=production"] -->|"client: pg"| PG[(PostgreSQL)]
    end
    SQL --> Ambiente
```

> *O repository chama o Knex. O Knex gera SQL no dialeto do banco configurado. O service não sabe nem se importa qual banco está por baixo.*

### O Valor do Desacoplamento

Três camadas de desacoplamento trabalham juntas:

1. **Repository Pattern:** desacopla a lógica de negócio (services) do acesso a dados
2. **Knex Query Builder:** desacopla a aplicação do dialeto SQL específico
3. **knexfile.js multi-ambiente:** desacopla a configuração do banco do código da aplicação

Cada camada isola uma preocupação diferente. Juntas, elas permitem que você troque de banco **mudando 2 linhas no knexfile.js** — sem tocar no repository, nos services, nas migrations ou nos seeds.

**Mão na Massa — Validar o repository no PostgreSQL:**

- [ ] Atualize `conexao-knex.js` para ler `config[ambiente]` com `NODE_ENV`
- [ ] Execute o script de teste do repository com PostgreSQL: `NODE_ENV=production node testar-repo-knex.js`
- [ ] Confirme que todas as operações (listar, criar, buscar, atualizar, remover) funcionam
- [ ] Execute o mesmo script sem `NODE_ENV` e confirme que funciona com SQLite

### Quick Check 8

**1. Quantas linhas do repository precisam mudar para trocar SQLite por PostgreSQL?**
**Resposta:** Nenhuma. O repository chama `knex('tarefas').select('*')` — quem decide o dialeto SQL é a configuração do Knex (knexfile.js), não o repository.

**2. O que precisa mudar no `conexao-knex.js` quando o knexfile.js passa a exportar objetos de ambiente?**
**Resposta:** Em vez de `require('knex')(require('./knexfile'))`, usa-se `config[process.env.NODE_ENV || 'development']` para selecionar a configuração do ambiente atual.

---

## Autoavaliação: Quiz Rápido

**1. Qual a principal vantagem de usar um knexfile.js multi-ambiente?**
**Resposta:** Um único arquivo de configuração que suporta SQLite para desenvolvimento e PostgreSQL para produção, sem duplicar código de repositório ou queries. A troca de ambiente é feita por variável de ambiente.

**2. O que o Strategy Pattern tem a ver com o Knex?**
**Resposta:** O Knex implementa o Strategy Pattern — a interface (`.select()`, `.where()`, `.insert()`) é a mesma para todos os bancos, e o driver (`better-sqlite3`, `pg`) é a estratégia concreta que gera o SQL no dialeto correto.

**3. Qual a diferença entre `connection` no SQLite e no PostgreSQL no knexfile.js?**
**Resposta:** SQLite usa `connection: { filename: './dev.sqlite3' }`. PostgreSQL usa `connection: process.env.DATABASE_URL` (uma string URI com usuário, senha, host, porta e banco).

**4. Por que o connection pool não é usado no SQLite mas é essencial no PostgreSQL?**
**Resposta:** SQLite é embarcado e síncrono — uma única conexão direta ao arquivo basta. PostgreSQL é servidor remoto — o pool evita o custo de abrir/fechar conexões a cada requisição e gerencia os limites de conexões simultâneas.

**5. O que você precisa instalar para o Knex funcionar com PostgreSQL?**
**Resposta:** O pacote `pg`. O Knex usa o pg internamente como driver — você só instala, não importa.

**6. Como as migrations da Aula 03 rodam no PostgreSQL sem alterações?**
**Resposta:** O Knex traduz automaticamente o schema builder (`knex.schema.createTable`, `table.increments`, `table.string`) para o dialeto SQL do banco configurado. O código da migration não muda — a tradução é feita pelo Knex.

**7. Qual a finalidade de `pool.min` e `pool.max` na configuração do Knex?**
**Resposta:** `pool.min` define quantas conexões o pool mantém abertas o tempo todo (prontas para uso). `pool.max` define o limite máximo de conexões que o pool pode abrir para evitar sobrecarregar o banco.

**8. O repository da Aula 02 funciona com PostgreSQL sem mudanças?**
**Resposta:** Sim. O repository usa `knex('tarefas')` que é independente do driver. Apenas a configuração no knexfile.js muda — o código do repository permanece idêntico.

---

## Mão na Massa: Exercícios Graduados

### Exercício 1 (Fácil) — Verificar Conexão com PostgreSQL via Knex

**Duração estimada:** 10 minutos

Crie um script `verificar-conexao-pg.js` que:
1. Carrega as variáveis de ambiente com `require('dotenv').config()`
2. Cria uma instância do Knex com a configuração `production` do knexfile.js
3. Executa `knex.raw('SELECT current_database() AS banco')` e exibe o nome do banco
4. Executa `knex.raw('SELECT COUNT(*) AS total FROM tarefas')` e exibe o total de tarefas
5. Fecha a conexão com `knex.destroy()`

**Gabarito:**

```javascript
require('dotenv').config()
const config = require('./knexfile')
const knex = require('knex')(config.production)

async function main() {
  const banco = await knex.raw('SELECT current_database() AS banco')
  console.log('Banco atual:', banco.rows[0].banco)

  const total = await knex.raw('SELECT COUNT(*) AS total FROM tarefas')
  console.log('Total de tarefas:', total.rows[0].total)

  await knex.destroy()
}

main().catch(console.error)
```

Execute com:
```bash
node verificar-conexao-pg.js
```

Saída esperada:
```
Banco atual: tarefas_db
Total de tarefas: 5
```

---

### Exercício 2 (Médio) — Alternador de Ambiente no conexao-knex.js

**Duração estimada:** 15 minutos

O arquivo `conexao-knex.js` que você criou na Aula 02 importa o knexfile.js diretamente. Agora que o knexfile.js tem múltiplos ambientes, modifique `conexao-knex.js` para:

1. Usar `NODE_ENV` para determinar o ambiente (padrão: `development`)
2. Criar uma instância do Knex com a configuração correta
3. Exportar a instância

Depois, crie um script `testar-ambiente.js` que exibe qual banco está sendo usado (SQLite ou PostgreSQL) usando `knex.raw('SELECT current_database()')` — e que só funciona no PostgreSQL (trate o erro no SQLite com try/catch).

**Gabarito:**

`conexao-knex.js` modificado:

```javascript
const config = require('./knexfile')
const ambiente = process.env.NODE_ENV || 'development'
const knex = require('knex')(config[ambiente])

console.log(`Knex conectado — ambiente: ${ambiente}`)
module.exports = knex
```

`testar-ambiente.js`:

```javascript
const knex = require('./conexao-knex')

async function main() {
  try {
    const result = await knex.raw('SELECT current_database() AS banco')
    console.log('Banco PostgreSQL:', result.rows[0].banco)
  } catch {
    // SQLite não tem current_database()
    console.log('Banco SQLite (desenvolvimento)')
  }

  const tarefas = await knex('tarefas').select('id', 'titulo').limit(3)
  console.log('Primeiras tarefas:', tarefas)

  await knex.destroy()
}

main().catch(console.error)
```

Teste:
```bash
# SQLite (desenvolvimento)
node testar-ambiente.js

# PostgreSQL (produção)
NODE_ENV=production node testar-ambiente.js
```

---

### Desafio (Difícil) — Script de Deploy Automatizado

**Duração estimada:** 25 minutos

Crie um script `deploy-banco.js` que automatiza a preparação do banco de produção (PostgreSQL):

1. Verifica se a variável `DATABASE_URL` está definida. Se não estiver, exibe erro e aborta.
2. Cria uma instância do Knex com a configuração de produção
3. Testa a conexão com `knex.raw('SELECT 1')`. Se falhar, exibe mensagem amigável com dicas (Docker rodando? Porta correta?)
4. Roda as migrations pendentes com `knex.migrate.latest()`
5. Roda os seeds com `knex.seed.run()`
6. Executa uma query de verificação: lista as tabelas do banco
7. Exibe resumo: "Banco de produção preparado com sucesso!"
8. Fecha a conexão

**Gabarito:**

```javascript
require('dotenv').config()

async function main() {
  // 1. Verificar DATABASE_URL
  if (!process.env.DATABASE_URL) {
    console.error('ERRO: DATABASE_URL não definida.')
    console.error('Crie o arquivo .env com:')
    console.error('  DATABASE_URL=postgresql://usuario:senha@localhost:5432/tarefas_db')
    process.exit(1)
  }

  // 2. Conectar
  const config = require('./knexfile')
  const knex = require('knex')(config.production)

  try {
    // 3. Testar conexão
    await knex.raw('SELECT 1')
    console.log('✓ Conexão com PostgreSQL estabelecida.')
  } catch (erro) {
    console.error('ERRO: Não foi possível conectar ao PostgreSQL.')
    console.error('  - O container Docker está rodando? (docker ps)')
    console.error('  - A porta e credenciais estão corretas?')
    console.error('  - O banco tarefas_db existe?')
    console.error(`  - Detalhes: ${erro.message}`)
    process.exit(1)
  }

  // 4. Rodar migrations
  const [batch, migrations] = await knex.migrate.latest()
  console.log(`✓ Migrations executadas: ${migrations.length} (batch ${batch})`)

  // 5. Rodar seeds
  const [seedResult] = await knex.seed.run()
  console.log(`✓ Seeds executados.`)

  // 6. Verificar tabelas
  const tabelas = await knex.raw(`
    SELECT table_name FROM information_schema.tables
    WHERE table_schema = 'public'
    ORDER BY table_name
  `)
  console.log('✓ Tabelas no banco:')
  tabelas.rows.forEach(row => console.log(`    - ${row.table_name}`))

  // 7. Resumo
  console.log('\n=== Banco de produção preparado com sucesso! ===')

  // 8. Fechar
  await knex.destroy()
}

main().catch(erro => {
  console.error('Falha no deploy:', erro.message)
  process.exit(1)
})
```

Este script pode ser adicionado ao `package.json` como script npm:

```json
{
  "scripts": {
    "deploy:banco": "NODE_ENV=production node deploy-banco.js"
  }
}
```

Execute com:
```bash
npm run deploy:banco
```

---

## Resumo da Aula

### Os 9 Conceitos Fundamentais

1. **Portabilidade de banco**: a capacidade de trocar o banco de dados subjacente sem alterar o código da aplicação — apenas a configuração de conexão.
2. **Strategy Pattern**: interface fixa com implementações intercambiáveis. O Knex expõe a mesma API para todos os bancos; o driver é a estratégia.
3. **Connection pool**: conjunto de conexões reutilizáveis que evita o custo de abrir/fechar conexões a cada requisição. Essencial em bancos servidor.
4. **knexfile.js multi-ambiente**: objeto com chaves `development`, `production` — cada uma com sua configuração de client, connection e pool.
5. **Variáveis de ambiente**: `DATABASE_URL` no `.env` em vez de dados fixos no código. `dotenv` carrega para `process.env`.
6. **Driver `pg`**: instalado mas não importado diretamente — o Knex o usa internamente. Apenas `npm install pg`.
7. **Migrations e seeds idênticas**: as mesmas migrations da Aula 03 rodam no PostgreSQL sem alterações — o Knex traduz o dialeto.
8. **Pool configurável**: `pool.min` e `pool.max` no knexfile.js controlam conexões mínimas e máximas.
9. **Repository invariável**: o repository da Aula 02 funciona sem mudar uma linha — a prova do Strategy Pattern na prática.

### O Que Você Construiu Hoje

- [x] `knexfile.js` com ambientes `development` (SQLite) e `production` (PostgreSQL)
- [x] `.env` com `DATABASE_URL` e `dotenv` configurado
- [x] `pg` instalado — Knex conectado ao PostgreSQL
- [x] Migrations e seeds executados no PostgreSQL (mesmo código, banco diferente)
- [x] Pool configurado com `min: 2, max: 10`
- [x] `conexao-knex.js` atualizado para usar `NODE_ENV`
- [x] Repository validado — zero mudanças necessárias
- [x] Script de deploy automatizado (desafio)

---

## Próxima Aula

**Aula 06: Consultas Avançadas, Transações e SQL Injection**

O mundo real pede mais que CRUD básico. JOINs para relacionar tabelas, transações para operações atômicas, paginação para listas grandes, filtros combinados — e uma revisão definitiva de como o Knex protege contra SQL injection em cenários avançados. Você vai levar seu Gerenciador de Tarefas ao próximo nível.

---

## Referências

### Documentação Oficial

- [Knex Environment Configuration](https://knexjs.org/guide/#environment-configuration)
- [Knex Connection Pool](https://knexjs.org/guide/#pool)
- [node-postgres (pg)](https://node-postgres.com/)
- [dotenv npm package](https://www.npmjs.com/package/dotenv)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)

### Ferramentas

- [Knex.js](https://knexjs.org/)
- [better-sqlite3](https://github.com/WiseLibs/better-sqlite3)
- [Docker](https://www.docker.com/)

### Artigos para Aprofundamento

- [Strategy Pattern — Refactoring Guru](https://refactoring.guru/pt-br/design-patterns/strategy)
- [Martin Fowler — Repository Pattern](https://martinfowler.com/eaaCatalog/repository.html)
- [Connection Pooling Explained](https://www.postgresql.org/docs/current/connect-estab.html)

---

## FAQ

**P: Preciso instalar o `pg` globalmente?**
R: Não. `npm install pg` no projeto é suficiente. O Knex encontra o pacote localmente.

**P: Como sei se estou usando SQLite ou PostgreSQL no momento?**
R: Verifique a variável `NODE_ENV` do seu terminal. Se não estiver definida, você está em `development` (SQLite). Se for `production`, está em PostgreSQL.

**P: Meu migration funcionou no SQLite mas deu erro no PostgreSQL. O que pode ser?**
R: Alguns tipos de dado são específicos de cada banco. Ex: SQLite aceita `table.json('dados')` como TEXT, mas PostgreSQL precisa que o tipo esteja disponível. Revise migrations com tipos ambiguos. Na dúvida, teste no PostgreSQL antes de fazer merge.

**P: Posso ter mais de dois ambientes (staging, homologação)?**
R: Sim. O knexfile.js aceita quantos ambientes você quiser: `development`, `staging`, `homologacao`, `production`. Cada um com sua configuração.

**P: O que acontece se eu esquecer de chamar `knex.destroy()`?**
R: Em scripts curtos, o Node.js encerra e as conexões são fechadas automaticamente. Em servidores (Express), as conexões podem vazar até o timeout do banco. Sempre chame `knex.destroy()` no encerramento do processo para produção.

**P: Posso usar variáveis de ambiente no knexfile.js para outras coisas além da connection string?**
R: Sim. Ex: `client: process.env.DB_CLIENT || 'better-sqlite3'`, `pool.max: parseInt(process.env.POOL_MAX || '10')`. Útil para configurar tudo via ambiente sem editar o knexfile.js.

**P: O pool do Knex funciona com SQLite?**
R: Tecnicamente, o Knex aceita `pool` para SQLite, mas não há benefício. O `better-sqlite3` é síncrono e uma única conexão ao arquivo atende todas as queries. Deixe o pool apenas para PostgreSQL.

**P: Em produção, `.env` funciona?**
R: Em serviços gerenciados (Heroku, Render, Railway), você configura as variáveis pelo painel — não precisa de `.env`. O `.env` é para desenvolvimento local. O `dotenv` simplesmente ignora se a variável já estiver definida.

**P: O que é melhor — um knexfile.js multi-ambiente ou um arquivo por ambiente?**
R: Multi-ambiente em um arquivo é o padrão recomendado pela documentação do Knex. Menos arquivos, configuração centralizada, e a troca de ambiente é trivial (variável de ambiente).

---

## Glossário

| Termo | Definição |
|---|---|
| **Connection pool** | Conjunto de conexões mantidas abertas e reutilizáveis para reduzir latência e recursos. (Ver seção 3) |
| **Estratégia (Strategy)** | Implementação concreta de uma interface no Strategy Pattern. (Ver seção 2) |
| **Multi-ambiente** | Configuração que suporta diferentes bancos e parâmetros para cada ambiente (dev, prod). (Ver seção 4) |
| **Pool.min** | Número mínimo de conexões que o pool mantém abertas. (Ver seção 7) |
| **Pool.max** | Número máximo de conexões que o pool pode abrir. (Ver seção 7) |
| **Portabilidade de banco** | Capacidade de trocar o banco sem alterar o código da aplicação. (Ver seção 1) |
| **Strategy Pattern** | Padrão de projeto que define uma família de algoritmos intercambiáveis atrás de uma interface comum. (Ver seção 2) |
| **Variável de ambiente** | Valor definido fora do código da aplicação, acessível via `process.env`. (Ver seção 5) |
| **DATABASE_URL** | Variável de ambiente padrão para connection string do banco. (Ver seção 5) |
| **dotenv** | Pacote que carrega variáveis de ambiente de um arquivo `.env`. (Ver seção 5) |
| **pg** | Driver oficial do Node.js para PostgreSQL. (Ver seção 6) |
| **NODE_ENV** | Variável de ambiente que indica o ambiente de execução (development, production). (Ver seção 8) |

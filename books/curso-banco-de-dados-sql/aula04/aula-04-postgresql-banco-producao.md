---
titulo: "Curso de Banco de Dados SQL — Do SQLite ao PostgreSQL com Knex"
modulo: "01"
aula: "04"
duracao_estimada: "90 minutos"
nivel: "intermediário"
tags: [postgresql, docker, node-postgres, pg, connection-string, concorrencia, banco-producao, sql]
---

# Curso de Banco de Dados SQL — Aula 04

## PostgreSQL — Banco de Produção

**Duração estimada:** 90 minutos (40 de leitura + 50 de prática)
**Nível:** Intermediário
**Pré-requisitos:** Aula 01 (SQLite, SQL básico), Aula 02 (Knex Query Builder), Aula 03 (Migrations e Seeds com Knex)

---

## Objetivos de Aprendizagem

Ao final desta aula, você será capaz de:

- [ ] **Distinguir** bancos de dados embarcados de bancos com arquitetura cliente-servidor
- [ ] **Explicar** por que concorrência simultânea exige um banco servidor
- [ ] **Comparar** os sistemas de tipos do SQLite e de bancos relacionais completos
- [ ] **Identificar** cenários onde UUID, JSONB e arrays são úteis como tipos de coluna
- [ ] **Executar** PostgreSQL via Docker com configuração de volume persistente
- [ ] **Conectar** Node.js ao PostgreSQL usando o driver `pg`
- [ ] **Construir** uma connection string com todos os componentes obrigatórios
- [ ] **Executar** queries SQL com `client.query()` e interpretar o resultado
- [ ] **Demonstrar** a diferença entre `client.query()` com e sem parâmetros
- [ ] **Conectar** pgAdmin ao PostgreSQL e inspecionar tabelas visualmente

---

## Como Usar Esta Aula

Esta aula está organizada em duas partes. A **primeira parte** constrói os fundamentos de arquitetura de bancos de dados — por que um banco de produção é diferente de um banco de desenvolvimento. A **segunda parte** aplica esses conceitos com PostgreSQL via Docker, o driver `pg` do Node.js, e queries reais. Ao final, o arquivo separado de Questões de Aprendizagem traz as tarefas de checkpoint.

**Tempo estimado:** 40 minutos de leitura + 50 minutos de prática.

---

## Mapa Mental


![Mapa mental da aula](images/diagrama-04-mindmap.png)


> *O mapa mental acima mostra a estrutura da aula. Cada ramo representa um conceito que você vai explorar.*

---

## Recapitulação da Aula 03

| Aula | Conceito | Onde aparece nesta aula | Como se conecta |
|---|---|---|---|
| Aula 03 | **Migrations** (seções 2, 7-8) | Seções 1, 5-7 | As migrations que você criou vão rodar no PostgreSQL — o Knex abstrai o dialeto |
| Aula 03 | **Repository Pattern** (seção 5) | Seções 1-2 | O pattern desacopla a aplicação do banco — você vai trocar o banco sem mexer nos services |
| Aula 02 | **Knex knexfile.js** (seção 5) | Seções 1, 5 | A conexão com PostgreSQL será configurada no knexfile.js com uma nova string de conexão |
| Aula 01 | **SQLite better-sqlite3** (seção 3) | Seções 1-3 | A comparação direta: SQLite é embarcado, PostgreSQL é servidor |

---

**FUNDAMENTOS: Arquitetura de Bancos e o Salto para Produção**

> *Os conceitos desta seção são universais — valem para qualquer banco de dados servidor, independentemente da ferramenta específica. Na segunda parte, você verá como um banco servidor real implementa cada um desses conceitos.*

---

## 1. Bancos Embarcados vs Bancos Servidor — Duas Arquiteturas, Dois Propósitos

Você usou SQLite até aqui. Ele funciona assim: seu programa abre um arquivo `.sqlite3` no disco e lê ou escreve diretamente. Não há um processo separado rodando em segundo plano. Não há senha de conexão. Não há porta de rede. O banco é o arquivo, e o arquivo é o banco.

**Isso é um banco embarcado (embedded database).** A biblioteca do banco vive dentro do seu programa. Tudo acontece no mesmo processo.

Agora pense em um sistema com 50 usuários simultâneos. Cada um abre o Gerenciador de Tarefas e faz uma operação. Com o banco embarcado, todos competem pelo mesmo arquivo. Enquanto um escreve, os outros esperam. O arquivo pode corromper se duas escritas acontecerem ao mesmo tempo.

**Um banco servidor (client-server database) resolve isso.** O banco roda como um processo independente — um serviço — que aceita conexões de vários programas ao mesmo tempo. Cada programa se conecta via rede, mesmo que seja na mesma máquina. O servidor gerencia o acesso concorrente, a segurança e a integridade dos dados.

Veja um exemplo: dois usuários tentam marcar a mesma tarefa como concluída ao mesmo tempo.

No banco embarcado, os dois processos disputam o arquivo. O primeiro consegue ler, alterar e salvar. O segundo lê uma versão desatualizada, altera, e sobrescreve a primeira alteração — o dado do primeiro usuário é perdido.

No banco servidor, as duas requisições chegam ao servidor. Ele processa uma de cada vez, na ordem correta. A segunda requisição vê o estado atualizado deixado pela primeira. Nenhum dado é perdido.

Outro exemplo: seu Gerenciador de Tarefas está em produção. Durante o dia, dezenas de pessoas criam e atualizam tarefas. Você precisa gerar um relatório noturno que varre todas as tarefas.

No banco embarcado, gerar o relatório exige travar o arquivo — ninguém mais consegue usar o sistema durante a geração. No banco servidor, você gera o relatório enquanto os usuários continuam trabalhando. O servidor lida com os dois ao mesmo tempo.

> *Até aqui, você já entendeu a diferença fundamental entre bancos embarcados e bancos servidor. Isso já é MUITO. Respire. Se algo não ficou claro, releia a seção anterior — não tem problema nenhum voltar.*

### Quick Check 1

**1. Qual a diferença essencial entre um banco embarcado e um banco servidor?**
**Resposta:** Um banco embarcado vive dentro do processo do programa (arquivo local). Um banco servidor roda como processo independente e aceita conexões de rede de múltiplos programas simultaneamente.

**2. Em um banco servidor, o que impede que dois usuários sobrescrevam o dado um do outro?**
**Resposta:** O servidor recebe as requisições em fila e processa uma de cada vez. Cada requisição vê o estado atualizado pela anterior — diferente do banco embarcado, onde dois processos podem ler e escrever no mesmo arquivo simultaneamente.

---

## 2. Concorrência — Múltiplos Usuários sem Conflito

Concorrência é a capacidade de um sistema lidar com múltiplas operações ao mesmo tempo. Em banco de dados, isso significa: vários usuários lendo e escrevendo dados simultaneamente, sem que um atrapalhe o outro.

O banco servidor lida com isso através de um mecanismo chamado **MVCC (Multi-Version Concurrency Control)** . O nome é técnico, mas a ideia é simples.

Imagine uma biblioteca com um único livro. Você quer ler o livro. Outra pessoa quer anotar algo no livro. Com um banco embarcado, só um de cada vez pode tocar no livro. Enquanto um anota, o outro espera.

Com MVCC, é como se a biblioteca tirasse uma cópia do livro para cada pessoa. Você lê sua cópia. A outra pessoa anota na cópia dela. Depois, a biblioteca junta as alterações de forma inteligente — se não houver conflito, as duas alterações são incorporadas.

Na prática, o MVCC funciona assim:

- Cada transação (um conjunto de operações) vê uma **foto do banco** no momento em que começou
- Enquanto a transação executa, ela não vê alterações de outras transações que começaram depois
- Quando a transação termina, suas alterações ficam visíveis para as próximas transações

Isso resolve um problema chamado **leitura suja (dirty read)** : imagina que um usuário começa a alterar uma tarefa, outro usuário lê a tarefa parcialmente alterada, e então o primeiro desiste e reverte. O segundo usuário trabalhou com um dado que nunca existiu de fato.

No banco servidor com MVCC, isso não acontece. Cada usuário vê uma versão consistente dos dados. As alterações só ficam visíveis depois de finalizadas.

Outro problema que a concorrência resolve: **escrita simultânea no mesmo registro**. Dois usuários tentam atualizar a mesma tarefa ao mesmo tempo. O banco servidor serializa as operações: uma executa primeiro, a outra depois. A segunda vê o resultado da primeira.

E com dados parciais: um relatório de tarefas concluídas no mês varre milhares de registros. Enquanto isso, novos registros são criados. Sem MVCC, o relatório poderia incluir dados de "meio da operação" e gerar números inconsistentes.

> *Talvez você esteja pensando: "mas meu Gerenciador de Tarefas tem um usuário só — preciso disso?" Boa pergunta. Mais adiante no curso, seu sistema vai ter múltiplos usuários com autenticação e autorização. Seu banco precisa estar pronto para isso desde agora.*

### Quick Check 2

**1. O que significa "concorrência" no contexto de banco de dados?**
**Resposta:** É a capacidade do banco de lidar com múltiplos usuários lendo e escrevendo simultaneamente, sem conflitos, perda de dados ou leituras inconsistentes.

**2. Como o MVCC evita que uma transação veja dados parciais de outra transação?**
**Resposta:** Cada transação vê uma "foto" do banco no momento em que começou. As alterações de outras transações só ficam visíveis depois de finalizadas (committed). Isso elimina leituras sujas e dados inconsistentes.

---

## 3. Tipos de Dados — Além de INTEGER e TEXT

O banco que você usou até agora tem um sistema de tipos enxuto: INTEGER, TEXT, REAL, BLOB — suficiente para começar, mas limitado para aplicações reais.

Um banco servidor oferece um sistema de tipos muito mais rico. Você não precisa de todos hoje, mas saber que eles existem abre portas.

### UUID — Identificadores que Não Colidem

Até agora, suas tarefas usam `id INTEGER PRIMARY KEY AUTOINCREMENT`: 1, 2, 3. Isso funciona enquanto você tem um banco só. Mas em sistemas distribuídos — quando você sincroniza dados entre servidores, quando clientes offline geram IDs, quando você migra dados entre bancos — números sequenciais colidem.

Seu servidor de produção cria a tarefa 42. Ao mesmo tempo, uma réplica em outro datacenter cria a tarefa 42 na mesma tabela. Colisão.

**UUID (Universal Unique Identifier)** resolve isso: é um identificador de 128 bits gerado aleatoriamente. A chance de dois UUIDs colidirem é tão baixa que você pode gerar bilhões por segundo durante séculos sem repetir.

Um UUID se parece com: `550e8400-e29b-41d4-a716-446655440000`.

### JSONB — Dados Semi-Estruturados na Coluna

Sua tabela `tarefas` tem colunas fixas: `id`, `titulo`, `concluida`, `criada_em`, `prioridade`. Mas e se cada tarefa precisar de campos diferentes?

- Tarefa "Comprar leite" tem campo `quantidade: 2`
- Tarefa "Ler artigo" tem campo `url: 'https://...'`
- Tarefa "Ligar para João" tem campo `telefone: '(11) 99999-0000'`

Com colunas fixas, você precisaria criar uma coluna para cada campo possível — ou uma tabela separada de "campos extras".

**JSONB** resolve isso: é uma coluna que armazena um documento JSON num formato binário otimizado. Cada linha pode ter seu próprio conjunto de campos. E você pode consultar campos específicos dentro do JSON com queries SQL.

Exemplo conceitual: "SELECT * FROM tarefas WHERE dados->>'urgencia' = 'alta'"

### Arrays e Enumerações

Alguns bancos servidor suportam **arrays** como tipo de coluna. Uma tarefa pode ter múltiplas etiquetas em uma única coluna: `['trabalho', 'urgente', 'frontend']`. Você consulta com operadores de array: "tarefas que contêm 'urgente'".

**Enumerações (ENUM)** definem um conjunto fixo de valores: prioridade pode ser `'baixa'`, `'média'` ou `'alta'` — e apenas esses. O banco rejeita qualquer valor inválido automaticamente, sem você precisar validar no código.

### Tipos Temporais Avançados

Bancos servidor oferecem tipos para data, hora, timestamp com fuso horário, intervalos de tempo. Diferente de armazenar tudo como TEXT, esses tipos permitem operações nativas: "diferença em dias entre duas datas", "adicionar 3 meses a uma data", "agrupar registros por mês".

> *Se você está se sentindo sobrecarregado com tantos tipos novos, calma. Você não precisa usar todos hoje. Esta aula existe para você SABER que eles existem. Na prática, você vai usar UUID e JSONB com frequência — os outros você descobre quando precisar.*

### A Tabela Comparativa

| Categoria | Tipos Simples | Tipos Avançados | Para que serve |
|---|---|---|---|
| Identificadores | INTEGER | UUID | Evitar colisão em sistemas distribuídos |
| Texto/Estrutura | TEXT, VARCHAR | JSONB | Dados semi-estruturados por linha |
| Listas | (nova tabela) | ARRAY | Múltiplos valores na mesma coluna |
| Valores fixos | (validação manual) | ENUM | Conjunto restrito de valores válidos |
| Datas | TEXT | DATE, TIMESTAMPTZ | Operações temporais nativas |

### Quick Check 3

**1. Em que cenário um UUID é preferível a um INTEGER AUTOINCREMENT?**
**Resposta:** Em sistemas distribuídos onde múltiplos bancos ou servidores geram identificadores independentemente — UUID praticamente elimina colisões, enquanto IDs sequenciais colidiriam.

**2. Que problema o JSONB resolve que colunas fixas não resolvem?**
**Resposta:** JSONB permite que cada linha tenha seu próprio conjunto de campos, ideal para dados semi-estruturados onde o esquema varia por registro — sem precisar criar colunas extras ou tabelas separadas.

---

## 4. Ferramentas de Administração de Banco

Bancos servidor expõem uma superfície de gerenciamento maior que bancos embarcados. Você não só executa queries — você gerencia conexões, usuários, permissões, backups, performance.

Existem duas abordagens para administrar um banco servidor.

### Interface de Linha de Comando (CLI)

O banco servidor vem com um programa de terminal que se conecta ao servidor e permite executar SQL interativamente. É a ferramenta mais direta: você digita comandos SQL e vê o resultado na hora.

Vantagens: está sempre disponível (não precisa instalar nada extra), funciona via SSH em servidores remotos, é rápido para queries simples.

Desvantagens: a visualização de tabelas é textual, não há gráficos, explorar o esquema exige comandos manuais.

### Interface Gráfica (GUI)

Ferramentas visuais conectam no banco servidor e mostram tabelas, colunas, dados e relações em uma interface gráfica. Você navega pelas tabelas como navega em pastas de arquivos.

Vantagens: exploração visual, execução de queries com syntax highlighting, visualização de dados em grade, diagramas de relacionamento.

Desvantagens: nem sempre disponível em servidores remotos, consumo maior de recursos.

### O Padrão de Uso

Na prática, você usa as duas: CLI para operações rápidas e scripts de automação, GUI para exploração e debugging.

### Quick Check 4

**1. Em que situação a interface gráfica é mais útil que o terminal?**
**Resposta:** Quando você precisa explorar a estrutura do banco visualmente, ver dados em grade ou debuggar uma query complexa com syntax highlighting e histórico.

**2. Por que a interface de linha de comando é considerada mais "universal"?**
**Resposta:** Porque está disponível em qualquer servidor via SSH sem instalação adicional, funciona em ambientes sem interface gráfica e pode ser usada em scripts de automação.

---

**APLICAÇÃO: PostgreSQL na Prática — Docker, pg e Primeiras Queries**

> *Agora que você entende os fundamentos de arquitetura cliente-servidor, concorrência e tipos de dados, vamos conectá-los à prática com PostgreSQL. Você vai rodar o banco via Docker, conectar com Node.js e executar queries reais.*

---

## 5. Docker — Rodando PostgreSQL sem Instalação Global

A forma mais rápida de ter PostgreSQL funcionando é via Docker. Você não instala o PostgreSQL diretamente no sistema — ele roda dentro de um container isolado.

### O que é Docker (o mínimo necessário)

Docker é uma ferramenta que empacota software em **containers** — ambientes isolados que rodam na sua máquina. Pense num container como uma máquina virtual leve: ele tem seu próprio sistema de arquivos, suas próprias portas de rede, seus próprios processos. Mas, diferente de uma VM, ele compartilha o kernel do sistema operacional — é mais rápido e leve.

Para esta aula, você precisa do Docker instalado. Se não tem:

- **Linux:** `sudo apt install docker.io` ou o comando da sua distribuição
- **macOS:** instale Docker Desktop em docker.com
- **Windows:** Docker Desktop com WSL2

Verifique a instalação:

```bash
docker --version
```

Saída esperada: `Docker version 24.0.0` ou superior.

### O Comando Mágico

```bash
docker run --name tarefas-pg \
  -e POSTGRES_USER=tarefas_user \
  -e POSTGRES_PASSWORD=tarefas_secret \
  -e POSTGRES_DB=tarefas_db \
  -p 5432:5432 \
  -v tarefas-pg-data:/var/lib/postgresql/data \
  -d postgres:16
```

Vamos decifrar cada parte:

| Parte | O que faz |
|---|---|
| `--name tarefas-pg` | Dá um nome ao container para referenciá-lo depois |
| `-e POSTGRES_USER=tarefas_user` | Define o usuário do banco |
| `-e POSTGRES_PASSWORD=tarefas_secret` | Define a senha do banco |
| `-e POSTGRES_DB=tarefas_db` | Cria um banco inicial com este nome |
| `-p 5432:5432` | Mapeia a porta do container pra sua máquina |
| `-v tarefas-pg-data:/var/lib/postgresql/data` | Volume persistente — dados sobrevivem à destruição do container |
| `-d postgres:16` | Roda em background usando imagem PostgreSQL 16 |

**A porta 5432** é a porta padrão do PostgreSQL. O `-p 5432:5432` faz com que conexões à porta 5432 da sua máquina sejam redirecionadas para a porta 5432 do container.

**O volume `-v`** é crucial. Sem ele, quando você parar e remover o container, todos os dados desaparecem. O volume `tarefas-pg-data` armazena os dados no disco da sua máquina, fora do container. Pare e reinicie o container quantas vezes quiser — os dados persistem.

### Verificando que o Container Está Rodando

```bash
docker ps
```

Saída esperada:

```
CONTAINER ID   IMAGE         COMMAND                  ...   STATUS        PORTS                    NAMES
abc123def456   postgres:16   "docker-entrypoint.s…"   ...   Up 2 minutes  0.0.0.0:5432->5432/tcp   tarefas-pg
```

Se o status for "Up", o PostgreSQL está rodando e aceitando conexões.

### Conectando com CLI do PostgreSQL

O próprio container vem com o cliente PostgreSQL:

```bash
docker exec -it tarefas-pg psql -U tarefas_user -d tarefas_db
```

Você entra no terminal interativo do PostgreSQL. Dentro dele:

```sql
SELECT version();
```

Saída esperada:

```
PostgreSQL 16.x on x86_64-pc-linux-gnu
```

Para sair do terminal: `\q`

### Parando e Reiniciando

```bash
docker stop tarefas-pg    # para o container
docker start tarefas-pg   # reinicia (dados intactos - volume!)
docker rm -v tarefas-pg   # remove o container e o volume (CUIDADO: perde dados!)
```

**Mão na Massa — Rodar PostgreSQL com Docker:**

- [ ] Verifique se Docker está instalado: `docker --version`
- [ ] Execute o comando `docker run` com nome, usuário, senha, banco e volume
- [ ] Confirme com `docker ps` que o container está rodando
- [ ] Conecte com `docker exec -it tarefas-pg psql -U tarefas_user -d tarefas_db`
- [ ] Execute `SELECT version();` e veja a saída
- [ ] Saia com `\q`

### Quick Check 5

**1. O que acontece com os dados do banco se você remover o container sem usar volume?**
**Resposta:** Todos os dados são perdidos. O volume é o mecanismo que persiste os dados fora do container, no disco da máquina host, mesmo após a remoção do container.

**2. O que o parâmetro `-p 5432:5432` faz no comando `docker run`?**
**Resposta:** Mapeia a porta 5432 do container para a porta 5432 da máquina host, permitindo que conexões externas (do Node.js, pgAdmin, etc.) alcancem o PostgreSQL dentro do container.

---

## 6. O Driver pg — Node.js Conecta no PostgreSQL

Com o PostgreSQL rodando no Docker, o próximo passo é conectar seu Node.js a ele. O driver oficial é o pacote `pg` (node-postgres).

### Instalação

```bash
npm install pg
```

### Connection String

A forma mais comum de configurar a conexão é através de uma **connection string** — uma URL que contém todos os dados de conexão:

```
postgresql://tarefas_user:tarefas_secret@localhost:5432/tarefas_db
```

A estrutura da connection string é:

```
postgresql://USUARIO:SENHA@HOST:PORTA/BANCO
```

| Parte | Valor no exemplo | O que é |
|---|---|---|
| `postgresql://` | protocolo | Indica que é uma conexão PostgreSQL |
| `USUARIO` | `tarefas_user` | Nome do usuário definido no Docker |
| `SENHA` | `tarefas_secret` | Senha do usuário |
| `HOST` | `localhost` | Onde o banco está (localhost = sua máquina) |
| `PORTA` | `5432` | Porta (padrão PostgreSQL) |
| `BANCO` | `tarefas_db` | Nome do banco definido no Docker |

### Client vs Pool

O pacote `pg` oferece duas formas de conectar:

- **Client:** uma única conexão, ideal para scripts e queries pontuais
- **Pool:** conjunto de conexões reutilizáveis, ideal para servidores web com múltiplas requisições

Nesta aula, você vai usar **Client** — é mais simples e direto para aprender. Em servidores web com muitas requisições simultâneas, o Pool é essencial — você verá isso nas próximas aulas.

### Conectando e Executando

Crie um arquivo `conectar-pg.js`:

```javascript
const { Client } = require('pg')

async function main() {
  const client = new Client({
    connectionString: 'postgresql://tarefas_user:tarefas_secret@localhost:5432/tarefas_db'
  })

  await client.connect()
  console.log('Conectado ao PostgreSQL!')

  const resultado = await client.query('SELECT version()')
  console.log(resultado.rows[0])

  await client.end()
  console.log('Conexão encerrada.')
}

main().catch(erro => console.error('Erro:', erro))
```

Execute:

```bash
node conectar-pg.js
```

Saída esperada:

```
Conectado ao PostgreSQL!
{ version: 'PostgreSQL 16.x on x86_64-pc-linux-gnu, compiled by ...' }
Conexão encerrada.
```

### Entendendo `client.query()`

O método `client.query()` retorna um objeto com várias propriedades. As mais importantes:

- **`rows`**: array com os registros retornados (cada registro é um objeto)
- **`rowCount`**: número de registros retornados ou afetados
- **`fields`**: informações sobre as colunas do resultado

```javascript
// query retorna { rows, rowCount, fields }
const resultado = await client.query('SELECT 1 AS numero, 2 AS dobro')
console.log(resultado.rows)      // [ { numero: 1, dobro: 2 } ]
console.log(resultado.rowCount)  // 1
```

### Parâmetros na Query

Nunca concatene valores na string SQL. Use **parâmetros** — o `pg` substitui `$1`, `$2`, etc. pelos valores que você passa:

```javascript
const nome = 'Comprar leite'
const resultado = await client.query(
  'SELECT $1::text AS tarefa',
  [nome]
)
// resultado.rows[0].tarefa === 'Comprar leite'
```

O `::text` é uma conversão de tipo do PostgreSQL. O número do parâmetro (`$1`, `$2`) é a posição no array — diferente do SQLite que usa `?`.

**Mão na Massa — Conectar com pg:**

- [ ] No diretório do seu projeto, instale `npm install pg`
- [ ] Crie o arquivo `conectar-pg.js` com Client, connect, query e end
- [ ] Execute `node conectar-pg.js` e veja a versão do PostgreSQL
- [ ] Modifique a query para retornar `SELECT 2 + 2 AS soma` e veja o resultado

### Quick Check 6

**1. Qual a diferença entre Client e Pool no pacote `pg`?**
**Resposta:** Client é uma conexão única — ideal para scripts pontuais. Pool gerencia múltiplas conexões reutilizáveis — ideal para servidores web com requisições simultâneas.

**2. Por que você deve usar `$1`, `$2` em vez de concatenação na query?**
**Resposta:** Parâmetros evitam SQL injection e problemas de formatação. O driver escapa os valores automaticamente para que não sejam interpretados como SQL.

---

## 7. Primeiras Queries com PostgreSQL

Agora você vai criar a tabela `tarefas` no PostgreSQL e executar operações CRUD — exatamente como fez na Aula 01, mas agora em um banco servidor.

### Criando a Tabela

```javascript
const { Client } = require('pg')

async function main() {
  const client = new Client({
    connectionString: 'postgresql://tarefas_user:tarefas_secret@localhost:5432/tarefas_db'
  })

  await client.connect()

  const criarTabela = `
    CREATE TABLE IF NOT EXISTS tarefas (
      id SERIAL PRIMARY KEY,
      titulo VARCHAR(255) NOT NULL,
      concluida BOOLEAN DEFAULT false,
      prioridade VARCHAR(20) DEFAULT 'média',
      criada_em TIMESTAMPTZ DEFAULT NOW()
    )
  `

  await client.query(criarTabela)
  console.log('Tabela criada com sucesso!')

  await client.end()
}

main().catch(erro => console.error('Erro:', erro))
```

Diferenças importantes em relação ao SQLite:

| Característica | SQLite | PostgreSQL |
|---|---|---|
| Auto-incremento | `INTEGER PRIMARY KEY AUTOINCREMENT` | `SERIAL PRIMARY KEY` |
| Texto | `TEXT` | `VARCHAR(255)` ou `TEXT` |
| Booleano | `INTEGER DEFAULT 0` | `BOOLEAN DEFAULT false` |
| Data/hora | `TEXT DEFAULT CURRENT_TIMESTAMP` | `TIMESTAMPTZ DEFAULT NOW()` |

O tipo `SERIAL` é um atalho do PostgreSQL: cria uma coluna INTEGER que é automaticamente incrementada a cada INSERT. É o equivalente ao `AUTOINCREMENT` do SQLite.

O tipo `TIMESTAMPTZ` (timestamp com time zone) armazena data e hora com informação de fuso horário. `NOW()` retorna o momento atual.

### Insert com Parâmetros

```javascript
async function inserirTarefa(client, titulo, prioridade) {
  const query = `
    INSERT INTO tarefas (titulo, prioridade)
    VALUES ($1, $2)
    RETURNING *
  `
  const resultado = await client.query(query, [titulo, prioridade])
  return resultado.rows[0]
}

// Uso:
const tarefa = await inserirTarefa(client, 'Estudar PostgreSQL', 'alta')
console.log('Tarefa criada:', tarefa)
```

O `RETURNING *` é uma funcionalidade do PostgreSQL que retorna os dados inseridos (ou atualizados/deletados). No SQLite, você precisava fazer um SELECT separado para obter o registro criado.

### Select

```javascript
const resultado = await client.query('SELECT * FROM tarefas')
console.log('Tarefas:', resultado.rows)
console.log('Total:', resultado.rowCount)
```

O resultado é exatamente o que você espera: um array de objetos JavaScript, onde cada objeto representa uma linha da tabela.

### Select com Filtro e Parâmetros

```javascript
const resultado = await client.query(
  'SELECT * FROM tarefas WHERE concluida = $1 AND prioridade = $2',
  [false, 'alta']
)
console.log('Tarefas pendentes e importantes:', resultado.rows)
```

### Update e Delete

```javascript
// Update
await client.query(
  'UPDATE tarefas SET concluida = $1 WHERE id = $2',
  [true, 1]
)

// Delete
await client.query(
  'DELETE FROM tarefas WHERE id = $1',
  [1]
)
```

### Erro Comum de Iniciante

Quase todo mundo, ao fazer a primeira query no PostgreSQL, escreve algo como:

```javascript
// ERRADO - NÃO FAÇA ISSO
const titulo = 'Comprar leite'
const query = `INSERT INTO tarefas (titulo) VALUES ('${titulo}')`
await client.query(query)
```

Se o título for `Comprar leite' --`, você acaba de criar uma SQL injection. A aplicação quebra ou, pior, alguém deleta todas as suas tabelas.

Se você está se sentindo tentado a fazer isso, lembre: **sempre parâmetros**. `$1`, `$2` — nunca concatene.

```javascript
// CORRETO
await client.query(
  'INSERT INTO tarefas (titulo) VALUES ($1)',
  [titulo]
)
```

**Mão na Massa — CRUD completo no PostgreSQL:**

- [ ] Crie um arquivo `crud-pg.js` que conecta no PostgreSQL
- [ ] Crie a tabela `tarefas` com `CREATE TABLE IF NOT EXISTS`
- [ ] Insira 3 tarefas com INSERT e RETURNING *
- [ ] Liste todas com SELECT
- [ ] Filtre tarefas pendentes com WHERE
- [ ] Atualize uma tarefa como concluída
- [ ] Delete uma tarefa

### Quick Check 7

**1. Qual a diferença entre `SERIAL` no PostgreSQL e `INTEGER PRIMARY KEY AUTOINCREMENT` no SQLite?**
**Resposta:** Ambos criam uma coluna de auto-incremento. `SERIAL` é específico do PostgreSQL e equivale a criar um INTEGER com uma sequence automática. Na prática, os dois fazem a mesma coisa.

**2. O que o `RETURNING *` faz no INSERT e por que ele é útil?**
**Resposta:** `RETURNING *` retorna os dados completos do registro inserido (incluindo valores gerados como id e criada_em) em uma única operação, sem precisar de um SELECT adicional.

---

## 8. pgAdmin — Interface Gráfica (Opcional)

pgAdmin é a ferramenta gráfica mais popular para PostgreSQL. Você pode conectá-la ao mesmo banco que roda no Docker para inspecionar tabelas visualmente.

### Rodando pgAdmin no Docker

```bash
docker run --name pgadmin \
  -p 8080:80 \
  -e PGADMIN_DEFAULT_EMAIL=admin@admin.com \
  -e PGADMIN_DEFAULT_PASSWORD=admin \
  -d dpage/pgadmin4
```

Acesse no navegador: `http://localhost:8080`

Login: `admin@admin.com` / `admin`

### Conectando ao PostgreSQL

1. Clique com botão direito em **Servers** → **Register** → **Server**
2. Aba **General**: dê um nome (ex: "Tarefas Local")
3. Aba **Connection**:
   - Host: `host.docker.internal` (macOS/Windows) ou `172.17.0.1` (Linux)
   - Port: `5432`
   - Username: `tarefas_user`
   - Password: `tarefas_secret`

**Por que não `localhost`?** O pgAdmin roda dentro de outro container — `localhost` para ele é ele mesmo, não sua máquina. `host.docker.internal` é o endereço especial que aponta para a máquina host.

### Navegando no pgAdmin

Com a conexão estabelecida:

1. Expanda **Servers** → **Tarefas Local** → **Databases** → **tarefas_db**
2. Expanda **Schemas** → **public** → **Tables**
3. Clique com direito em **tarefas** → **View/Edit Data** → **All Rows**

Você vê os dados em grade, como uma planilha. Pode editar diretamente, ordenar colunas, filtrar.

O pgAdmin também tem um **Query Tool** (Tools → Query Tool) onde você escreve SQL com autocomplete e syntax highlighting.

### Alternativas ao pgAdmin

- **DBeaver**: gratuito, multi-banco, interface limpa
- **TablePlus**: pago, bonito, rápido

**Mão na Massa — pgAdmin (Opcional):**

- [ ] Rode o container do pgAdmin com o comando acima
- [ ] Acesse `http://localhost:8080` e faça login
- [ ] Registre o servidor PostgreSQL do container
- [ ] Navegue até a tabela `tarefas` e veja os dados
- [ ] Execute uma query `SELECT * FROM tarefas WHERE prioridade = 'alta'` no Query Tool

### Quick Check 8

**1. Por que o pgAdmin não consegue se conectar ao PostgreSQL usando `localhost` como host?**
**Resposta:** Porque o pgAdmin roda em outro container Docker — `localhost` para ele é o próprio container, não a máquina host. É necessário usar `host.docker.internal` ou o IP da máquina host.

**2. Qual a vantagem de usar uma ferramenta gráfica como pgAdmin em vez do terminal?**
**Resposta:** Visualização em grade dos dados, edição inline, syntax highlighting, autocomplete SQL e exploração visual da estrutura do banco sem digitar comandos.

---

## Autoavaliação: Quiz Rápido

**1. Qual a diferença fundamental entre um banco embarcado e um banco servidor?**
**Resposta:** Banco embarcado roda dentro do mesmo processo da aplicação (arquivo local). Banco servidor roda como processo independente e aceita múltiplas conexões simultâneas via rede.

**2. O que é MVCC e qual problema ele resolve?**
**Resposta:** MVCC (Multi-Version Concurrency Control) permite que múltiplas transações vejam versões consistentes dos dados simultaneamente, resolvendo leituras sujas e conflitos de escrita concorrente.

**3. Cite três tipos de dados que um banco servidor oferece e que um banco simples não oferece nativamente.**
**Resposta:** UUID (identificadores distribuídos), JSONB (dados semi-estruturados), ARRAY (múltiplos valores por coluna).

**4. Qual o comando Docker para rodar PostgreSQL com usuário, senha e volume persistente?**
**Resposta:** `docker run --name tarefas-pg -e POSTGRES_USER=tarefas_user -e POSTGRES_PASSWORD=tarefas_secret -e POSTGRES_DB=tarefas_db -p 5432:5432 -v tarefas-pg-data:/var/lib/postgresql/data -d postgres:16`

**5. Na connection string `postgresql://user:pass@localhost:5432/meubanco`, o que cada parte representa?**
**Resposta:** `user` é o usuário, `pass` é a senha, `localhost` é o host, `5432` é a porta, `meubanco` é o nome do banco.

**6. Como você passa parâmetros seguros para uma query no `pg`?**
**Resposta:** Usando `$1`, `$2` no SQL e passando os valores como array no segundo argumento de `client.query()`.

**7. O que o `RETURNING *` faz em um INSERT no PostgreSQL?**
**Resposta:** Retorna o registro completo recém-inserido (incluindo valores gerados automaticamente) em uma única operação, sem precisar de SELECT posterior.

**8. Por que o volume Docker é essencial ao rodar PostgreSQL?**
**Resposta:** Sem volume, os dados ficam dentro do container e são perdidos ao removê-lo. O volume persiste os dados no disco da máquina host independentemente do ciclo de vida do container.

---

## Mão na Massa: Exercícios Graduados

### Exercício 1 (Fácil) — Conectar e Verificar Versão

**Duração estimada:** 10 minutos

Crie um script `versao-pg.js` que:
1. Conecta ao PostgreSQL usando Client com connection string
2. Executa `SELECT version()` e exibe a versão
3. Executa `SELECT current_database()` e exibe o nome do banco atual
4. Encerra a conexão

**Gabarito:**

```javascript
const { Client } = require('pg')

async function main() {
  const client = new Client({
    connectionString: 'postgresql://tarefas_user:tarefas_secret@localhost:5432/tarefas_db'
  })

  await client.connect()

  const versao = await client.query('SELECT version()')
  console.log('Versão:', versao.rows[0].version)

  const banco = await client.query('SELECT current_database()')
  console.log('Banco atual:', banco.rows[0].current_database)

  await client.end()
}

main().catch(erro => console.error('Erro:', erro))
```

Saída esperada:
```
Versão: PostgreSQL 16.x on x86_64-pc-linux-gnu
Banco atual: tarefas_db
```

---

### Exercício 2 (Médio) — CRUD de Categorias

**Duração estimada:** 20 minutos

Crie um script `categorias-pg.js` que:

1. Cria a tabela `categorias` com colunas: `id` (SERIAL PK), `nome` (VARCHAR(100) NOT NULL), `cor` (VARCHAR(7) DEFAULT '#cccccc')
2. Insere 4 categorias: Trabalho, Pessoal, Estudos, Saúde
3. Lista todas as categorias
4. Atualiza a cor da categoria "Estudos" para '#339af0'
5. Remove a categoria "Saúde"
6. Exibe o resultado final

Use `RETURNING *` no INSERT para exibir cada categoria criada. Use parâmetros (`$1`, `$2`) em todas as queries.

**Gabarito:**

```javascript
const { Client } = require('pg')

async function main() {
  const client = new Client({
    connectionString: 'postgresql://tarefas_user:tarefas_secret@localhost:5432/tarefas_db'
  })

  await client.connect()

  // Criar tabela
  await client.query(`
    CREATE TABLE IF NOT EXISTS categorias (
      id SERIAL PRIMARY KEY,
      nome VARCHAR(100) NOT NULL,
      cor VARCHAR(7) DEFAULT '#cccccc'
    )
  `)
  console.log('Tabela categorias criada.')

  // Inserir categorias
  const categorias = [
    { nome: 'Trabalho', cor: '#ff6b6b' },
    { nome: 'Pessoal', cor: '#51cf66' },
    { nome: 'Estudos', cor: '#f06595' },
    { nome: 'Saúde', cor: '#845ef7' }
  ]

  for (const cat of categorias) {
    const resultado = await client.query(
      'INSERT INTO categorias (nome, cor) VALUES ($1, $2) RETURNING *',
      [cat.nome, cat.cor]
    )
    console.log('Criada:', resultado.rows[0])
  }

  // Atualizar
  await client.query(
    'UPDATE categorias SET cor = $1 WHERE nome = $2',
    ['#339af0', 'Estudos']
  )
  console.log('Cor dos Estudos atualizada.')

  // Remover
  await client.query(
    'DELETE FROM categorias WHERE nome = $1',
    ['Saúde']
  )
  console.log('Categoria Saúde removida.')

  // Listar resultado final
  const resultado = await client.query('SELECT * FROM categorias ORDER BY id')
  console.log('Categorias finais:', resultado.rows)

  await client.end()
}

main().catch(erro => console.error('Erro:', erro))
```

---

### Desafio (Difícil) — Script de Sincronização entre SQLite e PostgreSQL

**Duração estimada:** 25 minutos

Seu Gerenciador de Tarefas tem dados no SQLite (das aulas anteriores). Você quer migrar os dados para o PostgreSQL. Crie um script `migrar-dados.js` que:

1. Conecta simultaneamente no SQLite (com better-sqlite3) e no PostgreSQL (com pg)
2. Lê todas as tarefas do SQLite
3. Recria a tabela `tarefas` no PostgreSQL (DROP IF EXISTS + CREATE)
4. Insere cada tarefa do SQLite no PostgreSQL
5. Exibe um resumo: "X tarefas migradas do SQLite para o PostgreSQL"
6. Encerra ambas as conexões

Dica: você vai precisar instalar `better-sqlite3` e `pg`. O SQLite lê com `db.prepare('SELECT * FROM tarefas').all()`. O PostgreSQL insere com INSERT parametrizado.

**Gabarito:**

```javascript
const Database = require('better-sqlite3')
const { Client } = require('pg')

async function main() {
  // Conectar SQLite
  const dbSqlite = new Database('./dev.sqlite3')
  const tarefas = dbSqlite.prepare('SELECT * FROM tarefas').all()
  console.log(`Encontradas ${tarefas.length} tarefas no SQLite.`)

  // Conectar PostgreSQL
  const client = new Client({
    connectionString: 'postgresql://tarefas_user:tarefas_secret@localhost:5432/tarefas_db'
  })
  await client.connect()

  // Recriar tabela no PostgreSQL
  await client.query('DROP TABLE IF EXISTS tarefas')
  await client.query(`
    CREATE TABLE tarefas (
      id SERIAL PRIMARY KEY,
      titulo VARCHAR(255) NOT NULL,
      concluida BOOLEAN DEFAULT false,
      prioridade VARCHAR(20) DEFAULT 'média',
      criada_em TIMESTAMPTZ DEFAULT NOW()
    )
  `)
  console.log('Tabela recriada no PostgreSQL.')

  // Migrar dados
  for (const t of tarefas) {
    await client.query(
      `INSERT INTO tarefas (titulo, concluida, prioridade, criada_em)
       VALUES ($1, $2, $3, $4)`,
      [t.titulo, !!t.concluida, t.prioridade || 'média', t.criada_em]
    )
  }

  console.log(`${tarefas.length} tarefas migradas do SQLite para o PostgreSQL.`)

  // Verificar
  const resultado = await client.query('SELECT COUNT(*) AS total FROM tarefas')
  console.log(`Total no PostgreSQL: ${resultado.rows[0].total} tarefas.`)

  dbSqlite.close()
  await client.end()
}

main().catch(erro => console.error('Erro:', erro))
```

---

## Resumo da Aula

### Os 8 Conceitos Fundamentais

1. **Arquitetura embarcado vs servidor**: banco embarcado vive no processo da aplicação; banco servidor roda independentemente e aceita múltiplas conexões via rede.
2. **Concorrência e MVCC**: bancos servidor usam controle de concorrência multi-versão para permitir leituras e escritas simultâneas sem conflitos.
3. **Tipos avançados**: UUID (identificadores distribuídos), JSONB (dados semi-estruturados), ARRAY (múltiplos valores), ENUM (valores fixos), tipos temporais nativos.
4. **Docker**: container isolado para rodar PostgreSQL sem instalação global. Volume (`-v`) persiste dados além do ciclo de vida do container.
5. **Connection string**: `postgresql://user:pass@host:port/db` — formato universal de URI para configurar conexão.
6. **Driver `pg`**: pacote Node.js que conecta ao PostgreSQL. `Client` para scripts, `Pool` para servidores.
7. **Parâmetros na query**: use `$1`, `$2` com array de valores — nunca concatene strings SQL para evitar SQL injection.
8. **`RETURNING *`**: funcionalidade do PostgreSQL que retorna o registro completo após INSERT, UPDATE ou DELETE.

### O Que Você Construiu Hoje

- [x] Container Docker com PostgreSQL rodando e volume persistente
- [x] Conexão do Node.js ao PostgreSQL via driver `pg`
- [x] Tabela `tarefas` criada no PostgreSQL com `SERIAL`, `BOOLEAN`, `TIMESTAMPTZ`
- [x] CRUD completo com INSERT, SELECT, UPDATE, DELETE usando parâmetros
- [x] Script de migração de dados do SQLite para o PostgreSQL
- [x] pgAdmin conectado ao banco (opcional)

---

## Próxima Aula

**Aula 05: Knex com PostgreSQL — Mesmo Código, Banco Diferente**

A mágica do Knex: trocar o banco é mudar o `knexfile.js`. `client: 'better-sqlite3'` vira `client: 'pg'`. As migrations, seeds e queries que você escreveu continuam idênticas. Você vai rodar as mesmas migrations da Aula 03 no PostgreSQL — e ver o Repository Pattern em ação.

---

## Referências

### Documentação Oficial

- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [node-postgres (pg)](https://node-postgres.com/)
- [Docker PostgreSQL Image](https://hub.docker.com/_/postgres)
- [pgAdmin Documentation](https://www.pgadmin.org/docs/)

### Ferramentas

- [Docker](https://www.docker.com/)
- [pgAdmin](https://www.pgadmin.org/)
- [DBeaver](https://dbeaver.io/)
- [TablePlus](https://tableplus.com/)

### Artigos para Aprofundamento

- [PostgreSQL MVCC Explained](https://www.postgresql.org/docs/current/mvcc.html)
- [UUID vs Serial — Qual usar?](https://www.cybertec-postgresql.com/en/uuid-serial-or-identity-columns-for-postgresql-auto-generated-primary-keys/)
- [Docker para Desenvolvedores](https://docs.docker.com/get-started/)

---

## FAQ

**P: Preciso do Docker? Não posso instalar PostgreSQL direto no meu sistema?**
R: Pode. Docker é recomendado porque isola a instalação do seu sistema, facilita trocar de versão e não polui sua máquina. Se preferir instalação direta, acesse postgresql.org/download/ e siga para seu sistema operacional.

**P: Meu container PostgreSQL parou. Perdi os dados?**
R: Não, se você usou volume (`-v`). Rode `docker start tarefas-pg` e os dados voltam. Só perde dados se removeu o container com `docker rm -v`.

**P: A connection string com senha no código é segura?**
R: Para desenvolvimento local, sim. Para produção, nunca — use variáveis de ambiente (`process.env.DATABASE_URL`), que veremos nas próximas aulas.

**P: PostgreSQL é o único banco servidor? E MySQL?**
R: PostgreSQL é o mais usado no ecossistema Node.js atualmente. MySQL, MariaDB e SQL Server também são bancos servidor. A escolha é mais cultural e de ecossistema do que técnica.

**P: `SERIAL` e `BIGSERIAL` — qual a diferença?**
R: `SERIAL` usa INTEGER (limite de ~2 bilhões). `BIGSERIAL` usa BIGINT (limite de ~9 quintilhões). Para seu Gerenciador de Tarefas, `SERIAL` é suficiente.

**P: O pgAdmin no Docker é obrigatório?**
R: Não. É uma ferramenta visual opcional. Você pode fazer tudo pelo terminal com `docker exec -it tarefas-pg psql`.

**P: Como faço para o Node.js se reconectar se o PostgreSQL cair?**
R: Automatizar reconexão é feito com Pool (não Client), que gerencia conexões automaticamente. Você verá isso com Knex nas próximas aulas.

**P: Meu `docker run` falou que a porta 5432 já está em uso. O que fazer?**
R: Outro PostgreSQL está rodando na porta 5432. Pare o outro serviço ou use outra porta: mude `-p 5432:5432` para `-p 5433:5432` e ajuste a connection string para porta 5433.

**P: Posso usar UUID desde já no meu projeto?**
R: Sim, PostgreSQL tem suporte nativo a UUID. Basta criar a coluna como `id UUID DEFAULT gen_random_uuid() PRIMARY KEY`. A integração com Knex vem nas próximas aulas.

---

## Glossário

| Termo | Definição |
|---|---|
| **Banco embarcado** | Banco que roda dentro do processo da aplicação, como SQLite. (Ver seção 1) |
| **Banco servidor** | Banco que roda como processo independente e aceita conexões de rede. (Ver seção 1) |
| **Concorrência** | Capacidade de lidar com múltiplas operações simultâneas sem conflito. (Ver seção 2) |
| **MVCC** | *Multi-Version Concurrency Control* — técnica onde cada transação vê uma versão consistente dos dados. (Ver seção 2) |
| **UUID** | *Universal Unique Identifier* — identificador de 128 bits com probabilidade de colisão insignificante. (Ver seção 3) |
| **JSONB** | Tipo de dado binário para JSON, permite consultas a campos internos do documento. (Ver seção 3) |
| **SERIAL** | Atalho do PostgreSQL para coluna INTEGER com auto-incremento automático. (Ver seção 7) |
| **RETURNING** | Cláusula SQL que retorna os dados modificados por INSERT, UPDATE ou DELETE. (Ver seção 7) |
| **Connection string** | URI que contém todos os parâmetros de conexão: `protocolo://user:pass@host:port/db`. (Ver seção 6) |
| **Volume Docker** | Mecanismo de persistência que monta um diretório do host dentro do container. (Ver seção 5) |
| **pg** | Pacote Node.js oficial para conectar e executar queries no PostgreSQL. (Ver seção 6) |
| **Client** | Conexão única do pacote `pg`, ideal para scripts. (Ver seção 6) |
| **Pool** | Conjunto de conexões reutilizáveis do pacote `pg`, ideal para servidores web. (Ver seção 6) |
| **pgAdmin** | Ferramenta gráfica para administração de PostgreSQL. (Ver seção 8) |

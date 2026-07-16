---
titulo: "Curso de Banco de Dados SQL — Do SQLite ao PostgreSQL com Knex"
modulo: "01"
aula: "05"
---

# Curso de Banco de Dados SQL Aula 05 — Questões de Aprendizagem

## Como Usar Este Arquivo

Este arquivo é o checkpoint de aprendizagem da Aula 05. A pergunta central é: "eu realmente entendi como trocar de banco mudando apenas a configuração do Knex?". Cada questão verifica um conceito-chave da aula. Siga os passos de execução e preencha o template de entrega para cada questão. Crie a pasta `entregas-aula-05` para salvar suas respostas.

Se travar em alguma questão, releia a seção correspondente na aula principal antes de consultar o gabarito.

---

## Questão 1: Por que Portabilidade de Banco Importa?

**Conceito-chave:** Portabilidade de banco (Aula 05, Seção 1).

**Objetivo:** Demonstrar que você sabe explicar por que portabilidade de banco é importante e quais problemas ela resolve.

**Passos de Execução:**

1. Explique o que é portabilidade de banco em suas próprias palavras
2. Liste 3 problemas da abordagem de manter dois repositórios diferentes (SQLite + PostgreSQL)
3. Descreva o cenário ideal: o que muda e o que não muda no código quando o banco é trocado

**Entrega:** crie `entregas-aula-05/01-portabilidade.md`:

~~~~
# Questão 1 — Portabilidade de Banco

## Definição
[Em 2-3 frases: o que é portabilidade de banco?]

## Problemas de manter dois repositórios

| Problema | Explicação |
|---|---|
| 1. |  |
| 2. |  |
| 3. |  |

## O cenário ideal

| O que muda | O que NÃO muda |
|---|---|
|  |  |
|  |  |

## Conclusão
[Em 2 frases: por que portabilidade é importante mesmo em projetos pequenos?]
~~~~

---

## Questão 2: Explicando o Strategy Pattern

**Conceito-chave:** Strategy Pattern (Aula 05, Seção 2).

**Objetivo:** Demonstrar que você sabe explicar o Strategy Pattern e relacioná-lo com o Knex.

**Passos de Execução:**

1. Defina o Strategy Pattern em uma frase
2. Dê um exemplo do mundo real (diferente dos mencionados na aula)
3. Explique como o Knex implementa o Strategy Pattern — identifique a interface, as estratégias e como a troca ocorre

**Entrega:** crie `entregas-aula-05/02-strategy-pattern.md`:

~~~~
# Questão 2 — Strategy Pattern

## Definição
[Uma frase: o que é o Strategy Pattern?]

## Exemplo do mundo real (diferente da aula)

**Interface:** [o que é comum entre todas as implementações]

**Implementações:** [liste 2-3 variações]

**Quem escolhe a implementação:** [como a troca acontece]

## Relação com Knex

| Elemento do Strategy | No Knex corresponde a... |
|---|---|
| Interface comum |  |
| Estratégias (implementações) |  |
| Quem usa a interface |  |
| Como a troca acontece |  |

## Conclusão
[Em 2 frases: resuma por que o Knex é uma implementação do Strategy Pattern]
~~~~

---

## Questão 3: Configurando o knexfile.js Multi-Ambiente

**Conceito-chave:** knexfile.js multi-ambiente (Aula 05, Seção 4).

**Objetivo:** Demonstrar que você sabe construir um knexfile.js com dois ambientes.

**Passos de Execução:**

1. Escreva um knexfile.js completo com ambientes `development` (SQLite) e `production` (PostgreSQL)
2. Para cada ambiente, inclua: client, connection, pool (se aplicável), migrations e seeds directory
3. Explique por que o SQLite não precisa de pool

**Entrega:** crie `entregas-aula-05/03-knexfile-multienv.md`:

~~~~
# Questão 3 — knexfile.js Multi-Ambiente

## Arquivo knexfile.js completo

```javascript
module.exports = {
  development: {
    // [preencha aqui]
  },
  production: {
    // [preencha aqui]
  }
}
```

## Comparação entre ambientes

| Aspecto | development | production |
|---|---|---|
| client |  |  |
| connection |  |  |
| pool |  |  |
| migrations.directory |  |  |
| seeds.directory |  |  |

## Por que o SQLite não precisa de pool?

[Responda em 2-3 frases]

## Pergunta
O que acontece se você esquecer de definir `NODE_ENV=production` ao rodar as migrations para o PostgreSQL?

[Responda em 1-2 frases]
~~~~

---

## Questão 4: DATABASE_URL e Variáveis de Ambiente

**Conceito-chave:** Variáveis de ambiente e .env (Aula 05, Seção 5).

**Objetivo:** Demonstrar que você sabe configurar variáveis de ambiente para a conexão com o PostgreSQL.

**Passos de Execução:**

1. Explique por que a connection string não deve ficar fixa no knexfile.js
2. Escreva o conteúdo do arquivo `.env` com a connection string do container PostgreSQL que você criou na Aula 04
3. Escreva o conteúdo do arquivo `.env.example`
4. Explique a diferença entre `.env`, `.env.example` e por que um é versionado e o outro não

**Entrega:** crie `entregas-aula-05/04-dotenv.md`:

~~~~
# Questão 4 — Variáveis de Ambiente

## Por que não colocar a connection string fixa no código?

[Responda em 2-3 frases]

## Arquivo .env

```
# [escreva o conteúdo completo do .env]
```

## Arquivo .env.example

```
# [escreva o conteúdo completo do .env.example]
```

## Diferenças

| Arquivo | Versionado no Git? | Contém dados reais? | Propósito |
|---|---|---|---|
| .env |  |  |  |
| .env.example |  |  |  |

## Instalação do dotenv

Comando npm: [escreva o comando]

Onde adicionar `require('dotenv').config()`: [onde no código?]
~~~~

---

## Questão 5: Rodando Migrations e Seeds no PostgreSQL

**Conceito-chave:** Migrations e seeds no PostgreSQL (Aula 05, Seção 6).

**Objetivo:** Demonstrar que você sabe executar migrations e seeds no PostgreSQL e verificar o resultado.

**Passos de Execução:**

1. Escreva o comando para instalar o driver PostgreSQL
2. Escreva o comando para rodar as migrations no PostgreSQL
3. Escreva o comando para rodar os seeds no PostgreSQL
4. Descreva como verificar que as tabelas foram criadas no PostgreSQL (comando Docker)
5. Explique por que as migrations da Aula 03 funcionam sem alterações no PostgreSQL

**Entrega:** crie `entregas-aula-05/05-migrations-pg.md`:

~~~~
# Questão 5 — Migrations e Seeds no PostgreSQL

## Comandos

**Instalar driver:**
```
[comando]
```

**Rodar migrations (produção):**
```
[comando]
```

**Rodar seeds (produção):**
```
[comando]
```

## Verificação

**Comando para listar tabelas no PostgreSQL via Docker:**
```
[comando]
```

**Tabelas esperadas:**
1. [tabela]
2. [tabela]
3. [tabela]

## Por que as migrations funcionam sem alterações?

[Explique em 3-4 frases — mencione a tradução de dialetos do Knex]

## Pergunta

O que a tabela `knex_migrations` contém no PostgreSQL após rodar as migrations?

[Responda em 1-2 frases]
~~~~

---

## Questão 6: Connection Pool — Configuração e Propósito

**Conceito-chave:** Connection pool (Aula 05, Seções 3 e 7).

**Objetivo:** Demonstrar que você sabe configurar e explicar o connection pool do Knex.

**Passos de Execução:**

1. Explique o que é um connection pool em 2-3 frases
2. Escreva a configuração de pool para o ambiente `production` no knexfile.js (min=2, max=10)
3. Explique o que acontece quando o número de requisições ultrapassa `pool.max`
4. Explique por que o SQLite não precisa de pool

**Entrega:** crie `entregas-aula-05/06-connection-pool.md`:

~~~~
# Questão 6 — Connection Pool

## O que é connection pool?
[2-3 frases]

## Configuração no knexfile.js

```javascript
production: {
  client: 'pg',
  connection: process.env.DATABASE_URL,
  pool: {
    // [preencha]
  },
  migrations: { directory: './migrations' },
  seeds: { directory: './seeds' }
}
```

## O que acontece quando todas as conexões do pool estão ocupadas?

[Responda em 2-3 frases]

## Por que SQLite não precisa de pool?

[Responda em 2-3 frases]

## Dimensionamento

Para uma API pequena (até 100 req/s), quais valores de `min` e `max` você recomenda?

Pool: min = [  ], max = [  ]

Por quê? [explique em 1-2 frases]
~~~~

---

## Questão 7: Repository Invariável — Validando o Strategy Pattern

**Conceito-chave:** Repository Pattern validado (Aula 05, Seção 8).

**Objetivo:** Demonstrar que você entende por que o repository não muda ao trocar de banco.

**Passos de Execução:**

1. Copie o código do `conexao-knex.js` atualizado para ambiente multi-ambiente
2. Explique o que a linha `config[process.env.NODE_ENV || 'development']` faz
3. Liste o que muda e o que não muda no ecossistema da aplicação (repository, migrations, seeds, knexfile.js) quando você troca de SQLite para PostgreSQL

**Entrega:** crie `entregas-aula-05/07-repository-invariavel.md`:

~~~~
# Questão 7 — Repository Invariável

## conexao-knex.js atualizado

```javascript
// [escreva o código completo do conexao-knex.js versão multi-ambiente]
```

## Explicação da linha de seleção de ambiente

[Explique o que `process.env.NODE_ENV || 'development'` faz e por que o padrão é 'development']

## Tabela de mudanças

| Componente | Muda ao trocar de banco? | Por quê? |
|---|---|---|
| knexfile.js |  |  |
| conexao-knex.js |  |  |
| Repository (tarefa-repo-knex.js) |  |  |
| Services |  |  |
| Migrations |  |  |
| Seeds |  |  |

## Conclusão
[Em 2-3 frases: o que esta aula demonstra sobre o valor do desacoplamento?]
~~~~

---

## Questão 8: Planejando a Migração do Projeto para PostgreSQL

**Conceito-chave:** Aplicação prática dos conceitos da aula (Aula 05, Seções 4-8).

**Objetivo:** Demonstrar que você sabe planejar o passo a passo completo para migrar o Gerenciador de Tarefas do SQLite para o PostgreSQL usando Knex.

**Passos de Execução:**

1. Liste em ordem cronológica todos os passos necessários para configurar o projeto para usar PostgreSQL em produção (do zero)
2. Para cada passo, indique o comando ou ação necessária
3. Identifique os pontos de verificação (como saber que cada passo funcionou)

**Entrega:** crie `entregas-aula-05/08-plano-migracao.md`:

~~~~
# Questão 8 — Plano de Migração para PostgreSQL

## Passo a passo

| Ordem | Passo | Comando/Ação | Verificação |
|---|---|---|---|
| 1 |  |  |  |
| 2 |  |  |  |
| 3 |  |  |  |
| 4 |  |  |  |
| 5 |  |  |  |
| 6 |  |  |  |
| 7 |  |  |  |
| 8 |  |  |  |

## Perguntas de reflexão

**1. Se o repository não muda, o que garante que as queries do Knex funcionam nos dois bancos?**

[Responda em 2-3 frases]

**2. Em um time com 5 desenvolvedores, como garantir que todos usam a mesma configuração de banco em desenvolvimento?**

[Responda em 2-3 frases]

## Conclusão

[Em 2-3 frases: o que você aprendeu sobre portabilidade de banco com Knex?]
~~~~

---

## Checklist Final: Pronto para a Aula 06?

Marque cada item só quando conseguir fazê-lo **sem consultar a aula**:

- [ ] Explicar por que portabilidade de banco é importante e o custo de manter repositórios duplicados
- [ ] Definir o Strategy Pattern e dar um exemplo fora do contexto de banco de dados
- [ ] Relacionar o Strategy Pattern com a arquitetura do Knex
- [ ] Explicar o propósito de um connection pool e como dimensioná-lo
- [ ] Escrever um knexfile.js multi-ambiente com development (SQLite) e production (PostgreSQL)
- [ ] Configurar `.env` com `DATABASE_URL` e entender a diferença para `.env.example`
- [ ] Executar migrations e seeds no PostgreSQL usando `NODE_ENV=production`
- [ ] Configurar `pool.min` e `pool.max` no knexfile.js
- [ ] Explicar por que o repository da Aula 02 não precisa de alterações
- [ ] Listar todos os passos para migrar um projeto SQLite para PostgreSQL via Knex

> *Acertou todos? Você está pronto para a Aula 06, onde vai aprender JOINs, transações, paginação e como o Knex protege contra SQL injection em cenários avançados. Travou em algum? Releia a seção indicada na questão correspondente antes de avançar.*

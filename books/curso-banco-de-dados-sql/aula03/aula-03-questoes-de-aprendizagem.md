---
titulo: "Curso de Banco de Dados SQL — Do SQLite ao PostgreSQL com Knex"
modulo: "01"
aula: "03"
---

# Curso de Banco de Dados SQL Aula 03 — Questões de Aprendizagem

## Como Usar Este Arquivo

Este arquivo é o checkpoint de aprendizagem da Aula 03. A pergunta central é: "eu realmente entendi migrations, seeds e versionamento de banco?". Cada questão verifica um conceito-chave da aula. Siga os passos de execução e preencha o template de entrega para cada questão. Crie a pasta `entregas-aula-03` para salvar suas respostas.

Se travar em alguma questão, releia a seção correspondente na aula principal antes de consultar o gabarito.

---

## Questão 1: Identificando os Problemas do `db.exec()` sem Versionamento

**Conceito-chave:** Schema evolution e migrations vs. `db.exec()` (Aula 03, Seções 1 e 3).

**Objetivo:** Demonstrar que você sabe identificar por que criar tabelas com `db.exec()` não escala em equipes com múltiplos ambientes.

**Passos de Execução:**

1. Analise o cenário descrito abaixo
2. Identifique o problema específico e como migrations resolveriam
3. Descreva um plano de ação para substituir a abordagem atual por migrations

**Cenário:** Você trabalha em uma equipe de 4 desenvolvedores que mantêm um sistema de tarefas. Cada desenvolvedor tem seu banco SQLite local. A tabela `tarefas` foi criada com `db.exec('CREATE TABLE IF NOT EXISTS tarefas (...)')`. O Product Manager pediu uma nova coluna: `data_limite` (DATE). O desenvolvedor A adicionou a coluna no código e no banco local. O desenvolvedor B fez pull do código, mas o banco dele não tem a coluna — a aplicação quebra. O deploy para staging também falhou porque o banco de staging não foi atualizado.

**Entrega:** crie `entregas-aula-03/01-dbexec-problemas.md`:

~~~~
# Questão 1 — Problemas do db.exec()

## O problema central

[Em 3-4 frases: descreva por que a abordagem com db.exec() falhou neste cenário]

## Como migrations resolveriam

[Explique como migrations evitariam o problema entre os desenvolvedores e entre ambientes]

## Plano de ação

1. [Primeiro passo concreto]
2. [Segundo passo concreto]
3. [Terceiro passo concreto]

## Conclusão

[Em 2 frases: o que você aprendeu com este exercício]
~~~~

---

## Questão 2: Nomeando a Abstração — Repository Pattern

**Conceito-chave:** Repository Pattern formalizado (Aula 03, Seção 5).

**Objetivo:** Demonstrar que você sabe formalizar o Repository Pattern, descrevendo sua interface e suas implementações.

**Passos de Execução:**

1. Defina o Repository Pattern em suas próprias palavras
2. Liste as 3 implementações que você criou ao longo do curso, incluindo os métodos da interface
3. Explique por que migrations não quebram a interface do repository

**Entrega:** crie `entregas-aula-03/02-repository-pattern.md`:

~~~~
# Questão 2 — Repository Pattern Formalizado

## Definição

[Em 3-4 frases: o que é o Repository Pattern e qual seu principal benefício]

## Implementações ao longo do curso

| Implementação | Onde foi criada | Tecnologia usada |
|---|---|---|
|  | Curso Node.js Aula 10 |  |
|  | Curso BD SQL Aula 01 |  |
|  | Curso BD SQL Aula 02 |  |

## A interface comum

Métodos do repository: [listar], [buscarPorId], [criar], [atualizar], [remover]

[Em 2 frases: explique por que a interface não mudou entre as implementações]

## Migrations e o Repository

[Em 2-3 frases: explique como migrations e o Repository Pattern são complementares e por que um não quebra o outro]
~~~~

---

## Questão 3: Criando uma Migration para Nova Tabela

**Conceito-chave:** Estrutura de arquivo de migration (Aula 03, Seção 7).

**Objetivo:** Demonstrar que você sabe criar um arquivo de migration completo com `up` e `down` para uma nova tabela.

**Passos de Execução:**

1. Crie uma migration chamada `criar_tabela_etiquetas` usando o Knex CLI
2. A tabela `etiquetas` deve ter: `id` (auto-incremento), `nome` (texto, obrigatório), `cor` (texto, default `'#cccccc'`)
3. Preencha `exports.up` com `knex.schema.createTable`
4. Preencha `exports.down` com `knex.schema.dropTable`

**Entrega:** cole o conteúdo completo do arquivo de migration no template abaixo:

~~~~
# Questão 3 — Migration: criar_tabela_etiquetas

## Comando usado

```
[cole o comando npx knex migrate:make...]
```

## Conteúdo do arquivo de migration

```javascript
exports.up = function(knex) {
  // [implemente aqui]
}

exports.down = function(knex) {
  // [implemente aqui]
}
```

## Verificação

Comando usado para rodar a migration: [cole o comando]

Saída esperada: [descreva a saída esperada]

## Reflexão

[Em 2 frases: por que é importante ter sempre o `down` implementado?]
~~~~

---

## Questão 4: Verificando o Estado das Migrations

**Conceito-chave:** Execução e verificação de migrations, tabela `knex_migrations` (Aula 03, Seção 8).

**Objetivo:** Demonstrar que você sabe verificar o estado das migrations no banco e interpretar a tabela de controle.

**Passos de Execução:**

1. Após criar e rodar a migration da Questão 3, consulte a tabela `knex_migrations`
2. Anote quantas migrations estão registradas e quais são
3. Execute `knex('etiquetas').columnInfo()` e anote as colunas
4. Rode `knex migrate:latest` novamente e observe a mensagem

**Entrega:** crie `entregas-aula-03/04-verificando-migrations.md`:

~~~~
# Questão 4 — Verificando Migrations

## Consulta à tabela knex_migrations

Comando usado: [cole o comando node -e ...]

Resultado:

```json
[cole o JSON retornado]
```

## Colunas da tabela etiquetas

Colunas encontradas: [liste as colunas]

## Idempotência

Comando: npx knex migrate:latest

Mensagem de saída: [cole a mensagem]

## Pergunta

Por que o Knex mostra "Already up to date" na segunda execução?

[Explique em 2-3 frases]
~~~~

---

## Questão 5: Seed para Dados de Referência

**Conceito-chave:** Criação e execução de seeds com idempotência (Aula 03, Seção 9).

**Objetivo:** Demonstrar que você sabe criar um seed idempotente com dados de referência.

**Passos de Execução:**

1. Crie um seed `etiquetas_iniciais` usando `npx knex seed:make`
2. A tabela `etiquetas` deve receber 3 etiquetas: "Urgente" (cor `'#ff0000'`), "Importante" (cor `'#ff8800'`), "Normal" (cor `'#00aa00'`)
3. Garanta idempotência com `await knex('etiquetas').del()`
4. Rode `npx knex seed:run` e verifique os dados com `knex('etiquetas').select('*')`

**Entrega:** crie `entregas-aula-03/05-seed-etiquetas.md`:

~~~~
# Questão 5 — Seed para Etiquetas

## Conteúdo do arquivo de seed

```javascript
exports.seed = async function(knex) {
  // [implemente aqui com del() e insert()]
}
```

## Verificação

Comando para executar o seed: [cole o comando]

Resultado da consulta `knex('etiquetas').select('*')`:

```json
[cole o JSON retornado]
```

## Teste de idempotência

Rode `npx knex seed:run` novamente e consulte os dados.

O número de registros mudou? [sim / não] — Por quê?

[Explique em 2-3 frases]
~~~~

---

## Questão 6: Migration de Alteração sem Perda de Dados

**Conceito-chave:** Migration de alteração de esquema com `alterTable` (Aula 03, Seção 10).

**Objetivo:** Demonstrar que você sabe criar uma migration que altera uma tabela existente sem perder dados.

**Passos de Execução:**

1. Crie uma migration `adicionar_descricao_etiquetas` usando `npx knex migrate:make`
2. No `up`, adicione a coluna `descricao` (texto, nullable) à tabela `etiquetas` usando `knex.schema.alterTable`
3. No `down`, remova a coluna `descricao`
4. Rode a migration e verifique que os seeds anteriores continuam intactos
5. Adicione um valor de `descricao` em uma etiqueta existente e confirme que funciona

**Entrega:** crie `entregas-aula-03/06-alteracao-etiquetas.md`:

~~~~
# Questão 6 — Migration de Alteração

## Conteúdo da migration

```javascript
exports.up = function(knex) {
  // [implemente com alterTable adicionando descricao]
}

exports.down = function(knex) {
  // [implemente com alterTable removendo descricao]
}
```

## Verificação

Comando para rodar: [cole o comando]

Colunas da tabela etiquetas após a migration: [liste as colunas]

## Dados preservados

Resultado de `knex('etiquetas').select('*')`:

```json
[cole o JSON — as etiquetas originais continuam lá?]
```

## Atualização

Comando para adicionar descrição a uma etiqueta:

```
[cole o comando knex('etiquetas')...update...]
```

## Reflexão

[Em 2-3 frases: por que `alterTable` é preferível a recriar a tabela quando você precisa adicionar uma coluna?]
~~~~

---

## Checklist Final: Pronto para a próxima aula?

Marque cada item só quando conseguir fazê-lo **sem consultar a aula**:

- [ ] Explicar o que é schema evolution e citar 3 tipos de mudança em um banco
- [ ] Definir migration e comparar com commits do Git
- [ ] Citar 3 problemas de criar tabelas com `db.exec()` em vez de migrations
- [ ] Diferenciar migration de seed quanto ao propósito e à frequência de execução
- [ ] Definir Repository Pattern em uma frase
- [ ] Configurar diretórios de migrations e seeds no `knexfile.js`
- [ ] Criar uma migration com `npx knex migrate:make`, implementar `up` e `down` e executar com `migrate:latest`
- [ ] Criar um seed idempotente e executá-lo com `npx knex seed:run`
- [ ] Criar uma migration de alteração com `knex.schema.alterTable` e aplicar sem perder dados

> *Acertou todos? Você está pronto para a próxima aula, onde vai conhecer o PostgreSQL — o banco que a produção usa de verdade. Travou em algum? Releia a seção indicada na questão correspondente antes de avançar.*

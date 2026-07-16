---
titulo: "Curso de Banco de Dados SQL — Do SQLite ao PostgreSQL com Knex"
modulo: "01"
aula: "02"
---

# Curso de Banco de Dados SQL Aula 02 — Questões de Aprendizagem

## Como Usar Este Arquivo

Este arquivo é o checkpoint de aprendizagem da Aula 02. A pergunta central é: "eu realmente entendi SQL injection, query builders e como usar o Knex?". Cada questão verifica um conceito-chave da aula. Siga os passos de execução e preencha o template de entrega para cada questão. Crie a pasta `entregas-aula-02` para salvar suas respostas.

Se travar em alguma questão, releia a seção correspondente na aula principal antes de consultar o gabarito.

---

## Questão 1: Identificando SQL Injection em Strings SQL

**Conceito-chave:** SQL injection — o perigo da concatenação (Aula 02, Seção 1).

**Objetivo:** Demonstrar que você sabe identificar queries vulneráveis a SQL injection e explicar por que elas são perigosas.

**Passos de Execução:**

1. Analise o código abaixo e identifique a vulnerabilidade
2. Explique como um atacante poderia explorá-la
3. Descreva o que aconteceria com o banco de dados se o ataque fosse bem-sucedido

```javascript
function buscarTarefaPorId(id) {
  const sql = `SELECT * FROM tarefas WHERE id = ${id}`
  return db.prepare(sql).get()
}
```

**Entrega:** crie `entregas-aula-02/01-sql-injection.md`:

~~~~
# Questão 1 — Identificando SQL Injection

## Código vulnerável

```javascript
function buscarTarefaPorId(id) {
  const sql = `SELECT * FROM tarefas WHERE id = ${id}`
  return db.prepare(sql).get()
}
```

## Onde está a vulnerabilidade?

[Explique qual linha ou operação é o problema e por quê]

## Cenário de ataque

Se o usuário chamar `buscarTarefaPorId("1; DROP TABLE tarefas; --")`, o que acontece?

[Explique o SQL resultante e o que ele faz]

## Consequências

[Descreva o impacto no banco de dados e na aplicação]

## Como corrigir

[Escreva a versão segura da função usando bindings]

## Conclusão

[Em 2-3 frases: a lição principal sobre concatenação de SQL]
~~~~

---

## Questão 2: Queries Parametrizadas vs Concatenação

**Conceito-chave:** Proteção com queries parametrizadas (Aula 02, Seção 2).

**Objetivo:** Verificar se você entende como queries parametrizadas protegem contra SQL injection.

**Passos de Execução:**

1. Reescreva a query abaixo no formato parametrizado
2. Explique por que a versão parametrizada é segura mesmo com entrada maliciosa
3. Faça uma analogia própria (diferente da aula) para explicar o conceito

Query vulnerável:

```javascript
const sql = `UPDATE tarefas SET titulo = '${novoTitulo}' WHERE id = ${id}`
db.prepare(sql).run()
```

**Entrega:** crie `entregas-aula-02/02-queries-parametrizadas.md`:

~~~~
# Questão 2 — Queries Parametrizadas vs Concatenação

## Versão parametrizada

```javascript
[Escreva a query segura com bindings]
```

## Por que é seguro?

[Explique o que acontece se o usuário passar "'; DROP TABLE tarefas; --" como título]

## Analogia própria

[Descreva uma analogia que explica por que separar código de dados é importante. Pode ser qualquer coisa — carta, formulário, receita, etc.]

## Conclusão

[Em 2-3 frases: por que usar bindings é melhor do que confiar na própria disciplina]
~~~~

---

## Questão 3: Escolhendo a Abordagem Certa

**Conceito-chave:** Query Builder, ORM e SQL puro (Aula 02, Seção 3).

**Objetivo:** Verificar se você sabe diferenciar as três abordagens e escolher a mais adequada para cada cenário.

**Passos de Execução:**

1. Para cada cenário abaixo, indique qual abordagem (SQL puro, query builder ou ORM) é mais adequada
2. Justifique sua escolha

**Cenários:**

a) Uma aplicação CRUD simples com 5 endpoints e 3 tabelas
b) Um relatório com JOIN de 6 tabelas, funções de janela e CTEs
c) Um projeto que precisa trocar de SQLite para PostgreSQL no futuro
d) Uma query que faz `SELECT * FROM usuarios WHERE email = ?` — apenas uma linha

**Entrega:** crie `entregas-aula-02/03-abordagens.md`:

~~~~
# Questão 3 — Escolhendo a Abordagem Certa

## Cenário A: CRUD simples

**Abordagem escolhida:** [SQL puro / Query Builder / ORM]

**Justificativa:** [Por que esta abordagem é a melhor para este cenário]

## Cenário B: Relatório complexo

**Abordagem escolhida:** [SQL puro / Query Builder / ORM]

**Justificativa:** [Por que esta abordagem é a melhor para este cenário]

## Cenário C: Migração de banco

**Abordagem escolhida:** [SQL puro / Query Builder / ORM]

**Justificativa:** [Por que esta abordagem é a melhor para este cenário]

## Cenário D: Query simples de uma linha

**Abordagem escolhida:** [SQL puro / Query Builder / ORM]

**Justificativa:** [Por que esta abordagem é a melhor para este cenário]

## Conclusão

[Em 2-3 frases: o que determina a escolha entre as três abordagens]
~~~~

---

## Questão 4: Configuração do Knex e knexfile.js

**Conceito-chave:** Instalação e configuração do Knex (Aula 02, Seção 5).

**Objetivo:** Verificar se você sabe configurar o Knex para um projeto SQLite.

**Passos de Execução:**

1. Escreva os comandos para instalar o Knex e o driver SQLite
2. Crie o arquivo `knexfile.js` com as configurações necessárias
3. Crie o arquivo `conexao-knex.js` que exporta a instância do Knex
4. Explique cada campo da configuração

**Entrega:** crie `entregas-aula-02/04-configuracao-knex.md`:

~~~~
# Questão 4 — Configuração do Knex

## Comandos de instalação

```
[Comandos npm]
```

## knexfile.js

```javascript
[Conteúdo completo do knexfile.js]
```

## conexao-knex.js

```javascript
[Conteúdo completo do conexao-knex.js]
```

## Explicação dos campos

| Campo | Valor | O que faz |
|---|---|---|
| client | [valor] | [explicação] |
| connection.filename | [valor] | [explicação] |
| useNullAsDefault | [valor] | [explicação] |

## Comando de teste

```
[Comando para verificar se a conexão funciona]
```

## Conclusão

[Em 2-3 frases: o que você aprendeu sobre a configuração do Knex]
~~~~

---

## Questão 5: Traduzindo SQL para Knex

**Conceito-chave:** Knex na prática — SELECT, INSERT, UPDATE, DELETE (Aula 02, Seção 6).

**Objetivo:** Verificar se você sabe traduzir comandos SQL puros para a sintaxe do Knex.

**Passos de Execução:**

Para cada comando SQL abaixo, escreva o equivalente em Knex:

1. `SELECT * FROM tarefas`
2. `SELECT id, titulo FROM tarefas WHERE concluida = 0`
3. `INSERT INTO tarefas (titulo, concluida) VALUES ('Comprar pão', 0)`
4. `UPDATE tarefas SET concluida = 1 WHERE id = 42`
5. `DELETE FROM tarefas WHERE id = 42`
6. `SELECT * FROM tarefas WHERE concluida = 0 ORDER BY criada_em DESC LIMIT 5`

**Entrega:** crie `entregas-aula-02/05-traduzindo-sql-knex.md`:

~~~~
# Questão 5 — Traduzindo SQL para Knex

## Tabela de equivalência

| SQL puro | Knex |
|---|---|
| `SELECT * FROM tarefas` | [Knex equivalente] |
| `SELECT id, titulo FROM tarefas WHERE concluida = 0` | [Knex equivalente] |
| `INSERT INTO tarefas (titulo, concluida) VALUES ('Comprar pão', 0)` | [Knex equivalente] |
| `UPDATE tarefas SET concluida = 1 WHERE id = 42` | [Knex equivalente] |
| `DELETE FROM tarefas WHERE id = 42` | [Knex equivalente] |
| `SELECT * FROM tarefas WHERE concluida = 0 ORDER BY criada_em DESC LIMIT 5` | [Knex equivalente] |

## Pergunta de reflexão

Em qual das equivalências acima a diferença entre SQL puro e Knex é MAIOR? Por quê?

[Resposta em 2-3 frases]

## Conclusão

[Em 2-3 frases: o que você achou de escrever queries com Knex comparado ao SQL puro]
~~~~

---

## Questão 6: Reescrevendo o Repository com Knex

**Conceito-chave:** Projeto Progressivo — Repository com Knex (Aula 02, Seção 7).

**Objetivo:** Verificar se você consegue reescrever o repository SQLite da Aula 01 usando Knex, mantendo a mesma interface.

**Passos de Execução:**

1. Crie `repositorios/tarefa-repo-knex.js` com o código completo
2. A interface deve ter exatamente os mesmos métodos: listar, buscarPorId, criar, atualizar, remover
3. O método `criar` deve retornar o registro criado com o ID gerado pelo banco
4. A função `converterTarefa` deve continuar convertendo INTEGER para Boolean

**Entrega:** crie `entregas-aula-02/06-repo-knex.md`:

~~~~
# Questão 6 — Reescrevendo o Repository com Knex

## Código completo do tarefa-repo-knex.js

```javascript
[Seu código completo]
```

## Função converterTarefa

```javascript
[Sua função de conversão]
```

## Diferenças para o repository SQL puro

| Característica | tarefa-repo-sqlite.js | tarefa-repo-knex.js |
|---|---|---|
| Conexão | [como era] | [como ficou] |
| SELECT | [como era] | [como ficou] |
| INSERT | [como era] | [como ficou] |
| Síncrono/Assíncrono | [como era] | [como ficou] |
| Bindings | [como era] | [como ficou] |

## Pergunta de reflexão

O controller e o service precisam mudar para usar o novo repository? Por quê?

[Resposta em 2-3 frases]

## Conclusão

[Em 2-3 frases: o que o Repository Pattern proporciona ao permitir trocar a implementação sem mudar a interface]
~~~~

---

## Questão 7: Query com Filtros Dinâmicos

**Conceito-chave:** Método encadeável e queries dinâmicas com Knex (Aula 02, Seções 4 e 6).

**Objetivo:** Verificar se você sabe construir queries dinâmicas com Knex usando encadeamento condicional.

**Passos de Execução:**

1. Crie uma função `listarTarefas(filtros)` que recebe um objeto de filtros
2. Os filtros possíveis são: `{ titulo, concluida, dataInicio, dataFim }`
3. A função deve construir a query dinamicamente — só adiciona `.where()` se o filtro correspondente foi fornecido
4. Os resultados devem vir ordenados por data de criação (mais recentes primeiro)
5. Use método encadeável (como visto na seção 4), NÃO concatene strings SQL

**Entrega:** crie `entregas-aula-02/07-queries-dinamicas.md`:

~~~~
# Questão 7 — Queries Dinâmicas com Knex

## Código da função

```javascript
async function listarTarefas(filtros) {
  // Sua implementação aqui
}
```

## Exemplo de uso

```javascript
// Teste com diferentes combinações de filtros
const resultado1 = await listarTarefas({ concluida: 0 })
const resultado2 = await listarTarefas({ titulo: 'Estudar', dataInicio: '2026-07-01' })
const resultado3 = await listarTarefas({})
```

## Pergunta de reflexão

Por que esta abordagem é mais segura do que concatenar `WHERE` clauses em uma string SQL?

[Resposta em 2-3 frases]

## Conclusão

[Em 2-3 frases: o que o método encadeável do Knex proporciona para queries dinâmicas]
~~~~

---

## Questão 8: Transações com Knex

**Conceito-chave:** Transações com Knex (Aula 02, Desafio do Exercício Graduado).

**Objetivo:** Verificar se você entende o conceito de transações e sabe implementá-las com Knex.

**Passos de Execução:**

1. Crie uma função `criarMultiplas(tarefas)` que recebe um array de tarefas e insere todas dentro de uma transação
2. Se qualquer inserção falhar, nenhuma tarefa deve ser inserida (atomicidade)
3. Use `knex.transaction()` com callback
4. A função deve retornar um array com as tarefas inseridas (com os IDs gerados)

**Entrega:** crie `entregas-aula-02/08-transacoes.md`:

~~~~
# Questão 8 — Transações com Knex

## Código da função

```javascript
async function criarMultiplas(tarefas) {
  // Sua implementação com knex.transaction()
}
```

## Exemplo de uso

```javascript
const tarefas = [
  { titulo: 'Tarefa 1', concluida: false },
  { titulo: 'Tarefa 2', concluida: true },
  { titulo: 'Tarefa 3', concluida: false }
]

const resultado = await criarMultiplas(tarefas)
console.log(resultado)
```

## Pergunta de reflexão

O que acontece se a segunda tarefa falhar por algum motivo (ex: violação de constraint)? As outras tarefas foram inseridas?

[Resposta em 2-3 frases]

## Conclusão

[Em 2-3 frases: quando usar transações e por que elas são importantes]
~~~~

---

## Checklist Final: Pronto para a Aula 03?

Marque cada item só quando conseguir fazê-lo **sem consultar a aula**:

- [ ] Explicar o que é SQL injection com um exemplo concreto
- [ ] Diferenciar query parametrizada de query concatenada
- [ ] Explicar a diferença entre SQL puro, query builder e ORM
- [ ] Instalar e configurar o Knex com knexfile.js
- [ ] Escrever queries SELECT, INSERT, UPDATE e DELETE com Knex
- [ ] Converter uma query SQL pura para a sintaxe do Knex
- [ ] Reescrever o repository SQLite usando Knex com a mesma interface
- [ ] Construir queries dinâmicas com método encadeável
- [ ] Implementar uma transação com knex.transaction()
- [ ] Explicar por que query builders são estruturalmente mais seguros que SQL puro

> *Acertou todos? Você está pronto para a Aula 03, onde vai aprender migrations e seeds — versionando o esquema do banco como Git versiona código. Travou em algum? Releia a seção indicada na questão correspondente antes de avançar.*

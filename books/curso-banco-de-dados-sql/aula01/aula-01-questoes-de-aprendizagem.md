---
titulo: "Curso de Banco de Dados SQL — Do SQLite ao PostgreSQL com Knex"
modulo: "01"
aula: "01"
---

# Curso de Banco de Dados SQL Aula 01 — Questões de Aprendizagem

## Como Usar Este Arquivo

Este arquivo é o checkpoint de aprendizagem da Aula 01. A pergunta central é: "eu realmente entendi os conceitos de banco de dados, SQL e SQLite?". Cada questão verifica um conceito-chave da aula. Siga os passos de execução e preencha o template de entrega para cada questão. Crie a pasta `entregas-aula-01` para salvar suas respostas.

Se travar em alguma questão, releia a seção correspondente na aula principal antes de consultar o gabarito.

---

## Questão 1: Identificando os Problemas do JSON

**Conceito-chave:** Problemas do JSON vs ACID (Aula 01, Seção 1).

**Objetivo:** Demonstrar que você entende os três problemas fatais do armazenamento em JSON e como o ACID os resolve.

**Passos de Execução:**

1. Liste os três problemas do JSON mencionados na aula
2. Para cada problema, escreva um parágrafo explicando POR QUE ele ocorre no Gerenciador de Tarefas
3. Relacione cada problema a uma propriedade ACID que o resolve

**Entrega:** crie `entregas-aula-01/01-problemas-json.md`:

~~~~
# Questão 1 — Problemas do JSON e ACID

## Os Três Problemas do JSON

1. **[Problema 1]:**
   [Explicação de por que ocorre no Gerenciador de Tarefas]

2. **[Problema 2]:**
   [Explicação de por que ocorre no Gerenciador de Tarefas]

3. **[Problema 3]:**
   [Explicação de por que ocorre no Gerenciador de Tarefas]

## Relação com ACID

| Problema do JSON | Propriedade ACID que resolve | Por quê |
|---|---|---|
| [Problema 1] | [Propriedade] | [Explicação] |
| [Problema 2] | [Propriedade] | [Explicação] |
| [Problema 3] | [Propriedade] | [Explicação] |

## Conclusão

[Em 2-3 frases: resumo de por que bancos de dados são superiores a JSON para aplicações reais]
~~~~

---

## Questão 2: Tabelas e Tipos de Dados

**Conceito-chave:** Tabelas, colunas tipadas e PRIMARY KEY (Aula 01, Seção 2).

**Objetivo:** Verificar se você compreende a estrutura de tabelas relacionais e a diferença para JSON.

**Passos de Execução:**

1. Descreva o que é uma tabela em um banco relacional usando a analogia correta
2. Explique por que colunas tipadas são importantes (dê um exemplo de erro que JSON aceitaria mas o banco rejeitaria)
3. Explique o propósito da PRIMARY KEY

**Entrega:** crie `entregas-aula-01/02-tabelas-e-tipos.md`:

~~~~
# Questão 2 — Tabelas e Tipos de Dados

## O que é uma tabela?

[Descrição usando analogia]

## Por que colunas tipadas são importantes?

[Explicação com exemplo concreto]

## Qual o propósito da PRIMARY KEY?

[Explicação concisa]

## Conclusão

[Em 2-3 frases: diferença fundamental entre JSON e tabelas relacionais]
~~~~

---

## Questão 3: SQL e Comandos CRUD

**Conceito-chave:** SQL como linguagem declarativa e comandos CRUD (Aula 01, Seção 3).

**Objetivo:** Verificar se você entende a natureza declarativa do SQL e consegue identificar cada comando CRUD.

**Passos de Execução:**

1. Explique a diferença entre linguagem declarativa (SQL) e imperativa (JavaScript) com suas palavras
2. Para cada comando CRUD, escreva a query SQL correspondente e explique o que ela faz
3. Dê um exemplo de consulta com filtro usando WHERE

**Entrega:** crie `entregas-aula-01/03-sql-crud.md`:

~~~~
# Questão 3 — SQL e Comandos CRUD

## Declarativo vs Imperativo

[Explicação com exemplo próprio, diferente do material]

## Os Quatro Comandos CRUD

| Comando SQL | O que faz | Exemplo |
|---|---|---|
| INSERT | [Descrição] | `INSERT INTO ...` |
| SELECT | [Descrição] | `SELECT ...` |
| UPDATE | [Descrição] | `UPDATE ...` |
| DELETE | [Descrição] | `DELETE ...` |

## Exemplo com WHERE

[Query SQL que filtra resultados e explicação do que ela retorna]

## Conclusão

[Em 2-3 frases: por que SQL é poderoso mesmo sendo composto por apenas 4 comandos principais]
~~~~

---

## Questão 4: Instalação e Configuração do SQLite

**Conceito-chave:** SQLite e better-sqlite3 (Aula 01, Seção 4).

**Objetivo:** Verificar se você consegue instalar e configurar o SQLite em um projeto Node.js.

**Passos de Execução:**

1. Instale o better-sqlite3 no seu projeto do Gerenciador de Tarefas
2. Crie um arquivo `conexao.js` que conecta ao SQLite e ativa o WAL mode
3. Execute o arquivo e verifique se o banco foi criado

**Entrega:** crie `entregas-aula-01/04-conexao-sqlite.md`:

~~~~
# Questão 4 — Instalação e Configuração do SQLite

## Comando de instalação

```
[Comando npm]
```

## Código da conexão (conexao.js)

```javascript
[Seu código]
```

## Resultado da execução

```
[Saída do terminal]
```

## Pergunta de reflexão

O que o WAL mode resolve que era um problema na abordagem com JSON?

[Resposta em 2-3 frases]

## Conclusão

[Em 2-3 frases: o que você aprendeu sobre instalação e configuração]
~~~~

---

## Questão 5: CREATE TABLE e Constraints

**Conceito-chave:** CREATE TABLE com tipos e constraints (Aula 01, Seção 5).

**Objetivo:** Verificar se você sabe criar uma tabela com colunas, tipos, PRIMARY KEY e constraints.

**Passos de Execução:**

1. Escreva o comando CREATE TABLE para a tabela `tarefas` com as colunas: id (inteiro, chave primária, auto incremento), titulo (texto, obrigatório), concluida (inteiro, padrão 0), criada_em (texto, padrão data atual)
2. Explique cada constraint usada (NOT NULL, DEFAULT, PRIMARY KEY, AUTOINCREMENT)
3. Execute o comando via Node.js e verifique se a tabela foi criada

**Entrega:** crie `entregas-aula-01/05-create-table.md`:

~~~~
# Questão 5 — CREATE TABLE e Constraints

## Comando SQL

```sql
[CREATE TABLE completo]
```

## Explicação das constraints

| Constraint | Coluna | O que faz |
|---|---|---|
| PRIMARY KEY | id | [Explicação] |
| AUTOINCREMENT | id | [Explicação] |
| NOT NULL | titulo | [Explicação] |
| DEFAULT 0 | concluida | [Explicação] |
| DEFAULT CURRENT_TIMESTAMP | criada_em | [Explicação] |

## Verificação

[Comando ou código usado para verificar que a tabela foi criada + saída]

## Conclusão

[Em 2-3 frases: o que você aprendeu sobre criação de tabelas]
~~~~

---

## Questão 6: INSERT e SELECT na Prática

**Conceito-chave:** INSERT e SELECT com WHERE e projeção (Aula 01, Seção 6).

**Objetivo:** Verificar se você sabe inserir dados e fazer consultas com filtro e projeção.

**Passos de Execução:**

1. Insira 3 tarefas no banco (duas pendentes e uma concluída)
2. Liste todas as tarefas com SELECT *
3. Liste apenas as tarefas pendentes usando WHERE
4. Liste apenas os títulos das tarefas (projeção)

**Entrega:** crie `entregas-aula-01/06-insert-select.md`:

~~~~
# Questão 6 — INSERT e SELECT

## Código de inserção

```javascript
[Seu código com INSERT]
```

## SELECT * (todas as tarefas)

```
[Saída esperada]
```

## SELECT com WHERE (apenas pendentes)

```
[Saída esperada]
```

## Projeção (apenas títulos)

```
[Saída esperada]
```

## Conclusão

[Em 2-3 frases: diferença entre SELECT com e sem WHERE]
~~~~

---

## Questão 7: UPDATE e DELETE com Segurança

**Conceito-chave:** UPDATE e DELETE com WHERE obrigatório (Aula 01, Seção 7).

**Objetivo:** Verificar se você sabe atualizar e remover registros com segurança.

**Passos de Execução:**

1. Atualize uma tarefa para concluída usando UPDATE com WHERE
2. Remova uma tarefa usando DELETE com WHERE
3. Explique o que aconteceria se você executasse UPDATE sem WHERE

**Entrega:** crie `entregas-aula-01/07-update-delete.md`:

~~~~
# Questão 7 — UPDATE e DELETE

## Código de atualização

```javascript
[Seu código com UPDATE]
```

## Código de remoção

```javascript
[Seu código com DELETE]
```

## Verificação pós-operação

```
[Saída após as operações]
```

## O que aconteceria sem WHERE?

[Explicação do perigo de UPDATE/DELETE sem WHERE]

## Conclusão

[Em 2-3 frases: regra de ouro para UPDATE e DELETE]
~~~~

---

## Questão 8: Projeto Progressivo — Repository SQLite

**Conceito-chave:** Repository Pattern com SQLite e conversão INTEGER para Boolean (Aula 01, Seção 8).

**Objetivo:** Verificar se você consegue implementar o repository SQLite com a mesma interface do repository JSON do Gerenciador de Tarefas.

**Passos de Execução:**

1. Crie `repositorios/tarefa-repo-sqlite.js` com os métodos: listar, buscarPorId, criar, atualizar, remover
2. Implemente a função `converterTarefa` para transformar INTEGER em Boolean
3. Crie um script de teste que executa cada método e exibe os resultados
4. Execute e verifique que todos os métodos funcionam

**Entrega:** crie `entregas-aula-01/08-repo-sqlite.md`:

~~~~
# Questão 8 — Repository SQLite

## Código do repository

```javascript
[Código completo do tarefa-repo-sqlite.js]
```

## Função converterTarefa

```javascript
[Código da função que converte INTEGER para Boolean]
```

## Script de teste

```javascript
[Código do script de teste]
```

## Resultado da execução

```
[Saída completa do terminal]
```

## Comparação com repository JSON

[Em 3-4 frases: quais as diferenças entre o repository JSON e o SQLite? O que muda? O que permanece igual?]

## Conclusão

[Em 2-3 frases: o que o Repository Pattern proporciona ao permitir trocar a implementação sem mudar a interface]
~~~~

---

## Checklist Final: Pronto para a Aula 02?

Marque cada item só quando conseguir fazê-lo **sem consultar a aula**:

- [ ] Explicar os três problemas do JSON e como ACID os resolve
- [ ] Definir tabela, coluna tipada e PRIMARY KEY com exemplos
- [ ] Escrever uma query SQL para cada comando CRUD
- [ ] Instalar e configurar SQLite com better-sqlite3 em um projeto Node.js
- [ ] Criar a tabela `tarefas` com CREATE TABLE usando as constraints corretas
- [ ] Executar INSERT, SELECT (com WHERE), UPDATE e DELETE no SQLite
- [ ] Construir um repository SQLite que preserva a interface do repository JSON
- [ ] Converter INTEGER para Boolean ao ler dados do SQLite

> *Acertou todos? Você está pronto para a Aula 02, onde vai conhecer o Knex — um query builder que gera SQL seguro com uma API encadeável em JavaScript. Travou em algum? Releia a seção indicada na questão correspondente antes de avançar.*

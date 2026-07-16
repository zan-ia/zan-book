---
titulo: "Curso de Banco de Dados SQL — Do SQLite ao PostgreSQL com Knex"
modulo: "01"
aula: "06"
---

# Curso de Banco de Dados SQL Aula 06 — Questões de Aprendizagem

## Como Usar Este Arquivo

Este arquivo é o checkpoint de aprendizagem da Aula 06. A pergunta central é: "eu realmente entendi consultas avançadas, transações e SQL injection?". Cada questão verifica um conceito-chave da aula. Siga os passos de execução e preencha o template de entrega para cada questão. Crie a pasta `entregas-aula-06` para salvar suas respostas.

Se travar em alguma questão, releia a seção correspondente na aula principal antes de consultar o gabarito.

---

## Questão 1: Escolhendo o JOIN Certo

**Conceito-chave:** INNER JOIN vs LEFT JOIN (Aula 06, Seção 1).

**Objetivo:** Demonstrar que você sabe diferenciar INNER JOIN de LEFT JOIN e escolher o correto para cada cenário.

**Passos de Execução:**

1. Leia os três cenários descritos no template de entrega
2. Para cada cenário, identifique qual tipo de JOIN resolve o problema
3. Justifique sua escolha em 2-3 frases por cenário

**Entrega:** crie `entregas-aula-06/01-escolha-join.md`:

~~~~
# Questão 1 — Escolhendo o JOIN Certo

## Cenário A: Lista de Tarefas com Categoria

"Só quero ver tarefas que têm categoria. Tarefas sem categoria não me interessam."

**JOIN escolhido:** [INNER JOIN / LEFT JOIN]

**Justificativa:**

[explique por que este JOIN é o correto]

## Cenário B: Relatório de Categorias

"Quero um relatório que mostre TODAS as categorias, mesmo as que não têm tarefas ainda."

**JOIN escolhido:** [INNER JOIN / LEFT JOIN]

**Justificativa:**

[explique por que este JOIN é o correto]

## Cenário C: Dashboard de Produtividade

"Quero um dashboard que mostre tarefas da semana com seus nomes de categoria. Se uma tarefa não tem categoria, quero que apareça mesmo assim, com 'Sem categoria' no lugar do nome."

**JOIN escolhido:** [INNER JOIN / LEFT JOIN]

**Justificativa:**

[explique por que este JOIN é o correto]

## Conclusão

[Em 2-3 frases: explique a diferença essencial entre os dois JOINs e quando usar cada um]
~~~~

---

## Questão 2: Calculando a Paginação

**Conceito-chave:** Paginação com LIMIT, OFFSET e ORDER BY (Aula 06, Seção 2).

**Objetivo:** Verificar que você sabe calcular corretamente os parâmetros de paginação para qualquer página.

**Passos de Execução:**

1. Para cada cenário, calcule OFFSET, LIMIT e total de páginas
2. Explique por que ORDER BY é necessário
3. Preencha a tabela de previsão de resultados

**Entrega:** crie `entregas-aula-06/02-paginacao.md`:

~~~~
# Questão 2 — Calculando a Paginação

## Cenário

Uma tabela `tarefas` contém 57 registros. Você quer exibir 10 tarefas por página, ordenadas por `id` crescente.

## Cálculos

| Página | OFFSET | LIMIT | Registros esperados |
|---|---|---|---|
| 1 | 0 | 10 | [preencha] |
| 2 | [calcule] | 10 | [preencha] |
| 3 | [calcule] | 10 | [preencha] |
| 4 | [calcule] | 10 | [preencha] |
| 5 | [calcule] | 10 | [preencha] |
| 6 | [calcule] | 10 | [preencha] |

**Total de páginas:** [calcule e mostre a fórmula]

## Por que ORDER BY é obrigatório?

[explique em 2-3 frases]

## Simulação

Se você executar `SELECT * FROM tarefas ORDER BY id LIMIT 10 OFFSET 20`, quais IDs espera ver? (assumindo IDs sequenciais de 1 a 57)

IDs esperados: [liste os IDs]

## Conclusão

[Em 2-3 frases: resuma como a paginação funciona e o que aconteceria sem ORDER BY]
~~~~

---

## Questão 3: Agregações com GROUP BY

**Conceito-chave:** COUNT, GROUP BY e funções de agregação (Aula 06, Seção 3).

**Objetivo:** Demonstrar que você sabe usar COUNT com GROUP BY para resumir dados.

**Passos de Execução:**

1. Analise a tabela `tarefas` com os dados fornecidos
2. Escreva as queries SQL (puras) que respondem a cada pergunta
3. Explique o resultado esperado

**Entrega:** crie `entregas-aula-06/03-agregacoes.md`:

~~~~
# Questão 3 — Agregações com GROUP BY

## Dados da Tabela

```
id | titulo          | concluida | prioridade | categoria_id
1  | Estudar SQL     | true      | alta       | 3
2  | Comprar leite   | false     | baixa      | 2
3  | Revisar código  | false     | alta       | 1
4  | Ler artigo      | true      | média      | 3
5  | Pagar contas    | false     | alta       | NULL
6  | Fazer exercícios| false     | média      | 2
7  | Planejar viagem | true      | baixa      | 4
8  | Estudar Knex    | false     | alta       | 3
9  | Organizar mesa  | true      | baixa      | NULL
10 | Ligar para João | false     | média      | 2
```

## Perguntas

**1. Quantas tarefas existem no total?**

Query SQL:

```

```

Resposta:

[valor numérico]

**2. Quantas tarefas estão concluídas e quantas estão pendentes? (uma consulta só)**

Query SQL:

```

```

Resultado esperado:

[descreva as linhas do resultado]

**3. Quantas tarefas existem em cada prioridade?**

Query SQL:

```

```

Resultado esperado:

[descreva as linhas do resultado]

**4. Quantas tarefas existem em cada categoria? (use JOIN para mostrar o nome da categoria)**

Query SQL:

```

```

Resultado esperado:

[descreva as linhas do resultado]

## Conclusão

[Em 2-3 frases: o que o GROUP BY faz e por que combiná-lo com JOIN é poderoso]
~~~~

---

## Questão 4: Fluxo de uma Transação

**Conceito-chave:** Transações ACID, COMMIT e ROLLBACK (Aula 06, Seção 4).

**Objetivo:** Verificar se você entende o fluxo completo de uma transação e quando ocorre COMMIT ou ROLLBACK.

**Passos de Execução:**

1. Descreva o fluxo de uma transação bem-sucedida
2. Descreva o fluxo de uma transação que falha
3. Preencha a tabela comparativa COMMIT vs ROLLBACK
4. Responda ao cenário prático

**Entrega:** crie `entregas-aula-06/04-transacao.md`:

~~~~
# Questão 4 — Fluxo de uma Transação

## Fluxo da Transação Bem-Sucedida

Descreva em 4-5 passos o que acontece quando uma transação executa com sucesso:

1. [passo 1]
2. [passo 2]
3. [passo 3]
4. [passo 4]
5. [passo 5]

## Fluxo da Transação com Falha

Descreva em 4-5 passos o que acontece quando uma transação encontra um erro:

1. [passo 1]
2. [passo 2]
3. [passo 3]
4. [passo 4]
5. [passo 5]

## COMMIT vs ROLLBACK

| Situação | O que acontece na transação | Estado do banco após |
|---|---|---|
| Todos os INSERTs funcionam | [preencha] | [preencha] |
| O segundo INSERT falha | [preencha] | [preencha] |
| A aplicação cai antes do COMMIT | [preencha] | [preencha] |

## Cenário Prático

Você está implementando um sistema de pedidos. Quando um cliente faz um pedido, você precisa:
1. Inserir o pedido na tabela `pedidos`
2. Inserir os itens do pedido na tabela `itens_pedido`
3. Atualizar o estoque na tabela `produtos`

Explique por que essas três operações devem estar em uma mesma transação e o que acontece se a operação 3 falhar:

[resposta em 4-5 frases]

## Conclusão

[Em 2-3 frases: o que significa "tudo ou nada" em transações e por que isso é importante]
~~~~

---

## Questão 5: SQL Injection — Detecte e Corrija

**Conceito-chave:** SQL injection e bindings parametrizados (Aula 06, Seções 5 e 10).

**Objetivo:** Demonstrar que você sabe identificar código vulnerável a SQL injection e corrigi-lo.

**Passos de Execução:**

1. Analise cada trecho de código e identifique se é vulnerável
2. Explique por que é ou não vulnerável
3. Corrija os trechos vulneráveis

**Entrega:** crie `entregas-aula-06/05-sql-injection.md`:

~~~~
# Questão 5 — SQL Injection: Detecte e Corrija

## Trecho A

```javascript
const id = req.params.id
const tarefas = await knex.raw(`SELECT * FROM tarefas WHERE id = ${id}`)
```

**Vulnerável?** [Sim/Não]

**Por quê?** [explique]

**Correção:** [código corrigido]

## Trecho B

```javascript
const titulo = req.body.titulo
const tarefas = await knex('tarefas').where('titulo', titulo)
```

**Vulnerável?** [Sim/Não]

**Por quê?** [explique]

**Correção (se necessário):** [código corrigido ou "N/A"]

## Trecho C

```javascript
const busca = req.query.q
const resultados = await knex.raw('SELECT * FROM tarefas WHERE titulo LIKE ?', [`%${busca}%`])
```

**Vulnerável?** [Sim/Não]

**Por quê?** [explique]

**Correção (se necessário):** [código corrigido ou "N/A"]

## Trecho D

```javascript
const coluna = req.query.ordenar_por
const tarefas = await knex('tarefas').orderBy(coluna, 'asc')
```

**Vulnerável?** [Sim/Não]

**Por quê?** [explique — dica: orderBy também aceita string direta]

**Correção:** [código corrigido ou explique como validar a coluna antes de usar]

## Regra de Ouro

[Em 2-3 frases: qual a regra fundamental para evitar SQL injection no Knex?]
~~~~

---

## Questão 6: Implementando JOIN e Paginação no Repository

**Conceito-chave:** Aplicação de JOINs e paginação no Repository Pattern (Aula 06, Seções 6 e 7).

**Objetivo:** Verificar se você consegue implementar métodos de consulta avançada no repository usando Knex.

**Passos de Execução:**

1. Escreva o código completo do método `listarTarefasComDetalhes()` no template
2. O método deve usar JOIN para trazer nome da categoria
3. Deve suportar paginação com página e limite
4. Deve retornar também o total de registros para calcular páginas
5. A ordenação deve ser por `criada_em` decrescente

**Entrega:** crie `entregas-aula-06/06-repository-avancado.md`:

~~~~
# Questão 6 — Implementando JOIN e Paginação no Repository

## Código do Método

Implemente o método `listarTarefasComDetalhes(pagina, itensPorPagina)`:

```javascript
// Complete a implementação
async listarTarefasComDetalhes(pagina = 1, itensPorPagina = 10) {




}
```

## Explicação

Explique cada parte do seu método:

**JOIN utilizado:** [qual tipo e por quê]

**Cálculo do OFFSET:** [mostre a fórmula]

**Uso do Promise.all:** [por que usar aqui?]

**Estrutura do retorno:** [quais campos o objeto retornado tem]

## Teste Mental

Considerando 47 tarefas na tabela, itensPorPagina = 10, pagina = 3:

- OFFSET calculado: [valor]
- Total de páginas: [valor]
- Quantos registros na página 3? [valor]

## Conclusão

[Em 2-3 frases: como o Repository Pattern permite adicionar consultas complexas sem quebrar a interface existente?]
~~~~

---

## Questão 7: Transação com Rollback

**Conceito-chave:** Transações com Knex — commit automático e rollback (Aula 06, Seção 9).

**Objetivo:** Demonstrar que você sabe implementar uma transação no Knex e entende o fluxo de commit/rollback automático.

**Passos de Execução:**

1. Complete o código da transação que cria uma categoria e uma tarefa associada
2. Os dois INSERTs devem ser atômicos
3. Explique em que momento ocorre COMMIT e em que momento ocorre ROLLBACK

**Entrega:** crie `entregas-aula-06/07-transacao-knex.md`:

~~~~
# Questão 7 — Transação com Rollback

## Código da Transação

Complete a função `criarCategoriaComTarefa`:

```javascript
async function criarCategoriaComTarefa(knex, dadosCategoria, tituloTarefa) {
  return await knex.transaction(async (trx) => {
    // Passo 1: Inserir a categoria e retornar o registro criado



    // Passo 2: Inserir a tarefa com o categoria_id retornado



    // Passo 3: Retornar os dois objetos



  })
}
```

## Explicação do Fluxo

**Quando ocorre o COMMIT?**

[Em 2-3 frases: explique em que momento exato o COMMIT é executado]

**Quando ocorre o ROLLBACK?**

[Em 2-3 frases: explique em que situação o ROLLBACK é executado]

## Cenário de Erro

Suponha que a categoria foi inserida com sucesso (id = 10), mas a tarefa falhou porque o título é NULL e a coluna tem NOT NULL. O que acontece com a categoria que já foi inserida?

[Explique em 2-3 frases]

## Conclusão

[Em 2-3 frases: por que transações são essenciais para a integridade dos dados?]
~~~~

---

## Questão 8: Diagnóstico de Problema com JOIN

**Conceito-chave:** Diagnóstico de JOINs e GROUP BY (Aula 06, Seções 1, 3 e 8).

**Objetivo:** Verificar se você consegue diagnosticar e corrigir problemas em consultas com JOIN e agregação.

**Passos de Execução:**

1. Analise o cenário problemático descrito
2. Identifique a causa do problema
3. Proponha e implemente a correção

**Entrega:** crie `entregas-aula-06/08-diagnostico-join.md`:

~~~~
# Questão 8 — Diagnóstico de Problema com JOIN

## Cenário

Você recebeu o seguinte relato de um colega:

"Meu método `listarResumoCategorias` está retornando números estranhos. Eu quero ver quantas tarefas cada categoria tem. Usei INNER JOIN, mas categorias novas que ainda não têm tarefas não aparecem. E mais: as contagens estão erradas — uma categoria que tem 3 tarefas está mostrando 6."

Código do colega:

```javascript
async listarResumoCategorias() {
  return await knex('categorias')
    .join('tarefas', 'categorias.id', 'tarefas.categoria_id')
    .select('categorias.nome')
    .count('* as total')
}
```

## Diagnóstico

**Problema 1 — Categorias sem tarefas não aparecem:**

[Causa e correção — qual JOIN usar e por quê]

**Problema 2 — Contagem duplicada (3 tarefas mostrando 6):**

[Causa e explicação do que pode estar causando a duplicação]

## Código Corrigido

```javascript
async listarResumoCategorias() {
  // Sua versão corrigida aqui
}
```

## Prevenção

[Em 2-3 frases: como testar e verificar consultas com JOIN antes de usá-las em produção?]

## Conclusão

[Em 2-3 frases: o que você aprendeu diagnosticando este problema?]
~~~~

---

## Checklist Final: Pronto para a Aula 07?

Marque cada item só quando conseguir fazê-lo **sem consultar a aula**:

- [ ] Explicar a diferença entre INNER JOIN e LEFT JOIN com exemplos
- [ ] Calcular OFFSET e LIMIT para qualquer página
- [ ] Escrever uma query com COUNT e GROUP BY para resumir dados
- [ ] Explicar o que é ACID e por que transações importam
- [ ] Implementar `knex.transaction()` com commit/rollback automáticos
- [ ] Identificar código vulnerável a SQL injection
- [ ] Corrigir código vulnerável usando bindings parametrizados
- [ ] Implementar JOIN e paginação no Repository Pattern sem quebrar a interface
- [ ] Explicar por que `ORDER BY` é obrigatório em paginação
- [ ] Diferenciar quando usar `knex.raw()` com bindings vs quando usar o query builder

> *Acertou todos? Você está pronto para a Aula 07, onde seu Gerenciador de Tarefas ganha autenticação JWT com registro, login e proteção de rotas. Travou em algum? Releia a seção indicada na questão correspondente antes de avançar.*

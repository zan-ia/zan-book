---
titulo: "JavaScript — Do Zero ao Profissional — Aula 17 — Questões de Aprendizagem"
modulo: "01"
aula: "17"
---

# JavaScript — Do Zero ao Profissional Aula 17 — Questões de Aprendizagem

## Como Usar Este Arquivo

Este arquivo é o **checkpoint de aprendizagem** da Aula 17 — Map, Set e Design Patterns. A pergunta central é: *"eu realmente entendi como usar Map, Set, WeakMap, WeakSet e implementar Design Patterns com JavaScript puro?"*

Cada questão abaixo testa um conceito-chave da aula. Você deve:

1. Fazer as questões **na ordem** (da mais simples à mais integrada)
2. Para cada questão, ler o **Objetivo** e os **Passos de Execução**
3. Preencher o **template de entrega** em uma pasta `entregas-aula-17/`
4. Só consultar a aula novamente SE travar em uma questão

Cada questão indica qual seção da aula principal verifica aquele conceito. Se precisar revisar, vá direto na seção indicada.

---

## Questão 1: Map com Chave não-String

**Conceito-chave:** Map aceita qualquer tipo de chave (Aula 17, Seção 5).

**Objetivo:** Comprovar que Map aceita objetos, funções e números como chave, e que a referência (não o valor) é o que identifica cada chave.

**Passos de Execução:**

1. Crie um Map vazio
2. Adicione 4 entradas usando: um objeto `{tipo: "usuario"}`, uma função `function logger() {}`, um número `42` e um array `[1, 2, 3]` como chaves
3. Para cada chave, associe um valor descritivo (ex: "metadados do usuario", "função registrada", "resposta universal", "coordenadas")
4. Tente acessar o valor usando um objeto novo `{tipo: "usuario"}` — o retorno deve ser `undefined`
5. Acesse usando a referência original — o retorno deve ser o valor correto
6. Exiba o tamanho do Map com `.size`

**Entrega:** crie `entregas-aula-17/01-map-chave-nao-string.md`:

~~~~
# Questão 1 — Map com Chave não-String

## Código

[Insira aqui o código JavaScript que você escreveu, com as 4 chaves de tipos diferentes e as tentativas de acesso]

## Resultado do .size

[Qual foi o valor de `.size`? Explique por quê.]

## Pergunta de Reflexão

Por que o acesso com `map.get({tipo: "usuario"})` retornou `undefined`, mesmo tendo adicionado uma entrada com um objeto de mesmo conteúdo?

**Sua resposta:**

[Escreva aqui]
~~~~

---

## Questão 2: Set para Remover Duplicatas

**Conceito-chave:** Set elimina automaticamente valores duplicados (Aula 17, Seção 6).

**Objetivo:** Usar Set para processar uma lista com duplicatas e extrair valores únicos.

**Passos de Execução:**

1. Dado o array abaixo, use Set para remover as duplicatas:

```javascript
const numeros = [3, 7, 3, 2, 9, 7, 5, 3, 2, 1];
```

2. Converta o resultado de volta para array usando spread operator
3. Ordene o array resultante em ordem crescente
4. Exiba o array original (com duplicatas) e o array único (sem duplicatas)
5. Conte quantos elementos foram removidos

**Entrega:** crie `entregas-aula-17/02-set-remover-duplicatas.md`:

~~~~
# Questão 2 — Set para Remover Duplicatas

## Código

[Insira o código que resolve o problema]

## Resultados

- Array original: [3, 7, 3, 2, 9, 7, 5, 3, 2, 1] (10 elementos)
- Array único: [_____________________________] (___ elementos)
- Elementos removidos: ___

## Pergunta de Reflexão

O método `.add()` de Set retorna o próprio Set. Isso permite encadeamento? Dê um exemplo.

**Sua resposta:**

[Escreva aqui]
~~~~

---

## Questão 3: WeakMap para Metadados Temporários

**Conceito-chave:** WeakMap usa referência fraca e aceita apenas objetos como chave (Aula 17, Seção 7).

**Objetivo:** Demonstrar que WeakMap não impede o garbage collector de limpar chaves sem referência externa, e que WeakMap não tem `.size` nem iteração.

**Passos de Execução:**

1. Crie um WeakMap
2. Crie um objeto `alvo` e adicione metadados a ele no WeakMap (`weak.set(alvo, "dados importantes")`)
3. Tente adicionar uma string como chave e documente o erro
4. Tente acessar `.size` no WeakMap e documente o resultado
5. Tente iterar com `for...of` e documente o erro
6. Mostre que `weak.get(alvo)` funciona (retorna "dados importantes")
7. Atribua `null` a `alvo` e explique o que acontece com a entrada no WeakMap

**Entrega:** crie `entregas-aula-17/03-weakmap-metadados.md`:

~~~~
# Questão 3 — WeakMap para Metadados Temporários

## Código

[Insira o código com os passos 1 a 6]

## Observações dos Erros

- Erro ao adicionar string como chave: [insira a mensagem de erro]
- Resultado de `.size`: [o que retornou?]
- Erro ao iterar com `for...of`: [insira a mensagem de erro]

## Pergunta de Reflexão

Após `alvo = null`, o que acontece com o par `alvo -> "dados importantes"` dentro do WeakMap? Por que isso é útil em aplicações reais?

**Sua resposta:**

[Escreva aqui]
~~~~

---

## Questão 4: Enum com Object.freeze()

**Conceito-chave:** Enum via `Object.freeze()` garante imutabilidade (Aula 17, Seção 8).

**Objetivo:** Criar um Enum para categorias de produto e demonstrar que `Object.freeze()` impede modificações acidentais.

**Passos de Execução:**

1. Crie um Enum `CategoriaProduto` com as constantes: `ELETRONICO`, `VESTUARIO`, `ALIMENTO`, `LIVRO`, `OUTRO`
2. Use `Object.freeze()` para torná-lo imutável
3. Exiba o valor de `CategoriaProduto.ELETRONICO`
4. Tente adicionar uma nova categoria: `CategoriaProduto.NOVO = "novo"`
5. Exiba `CategoriaProduto.NOVO` — o que aparece?
6. Tente alterar uma existente: `CategoriaProduto.ELETRONICO = "digital"`
7. Exiba `CategoriaProduto.ELETRONICO` — o valor mudou?
8. Crie uma função `exibirCategoria(categoria)` que recebe um valor do Enum e retorna uma string descritiva (ex: "eletrônico" → "Produto Eletrônico")
9. Teste a função com `CategoriaProduto.VESTUARIO`

**Entrega:** crie `entregas-aula-17/04-enum-object-freeze.md`:

~~~~
# Questão 4 — Enum com Object.freeze()

## Código

[Insira o código completo: Enum + função exibirCategoria + testes]

## Resultados das Tentativas de Modificação

- `CategoriaProduto.NOVO = "novo"` resultou em: [o que aconteceu?]
- `CategoriaProduto.ELETRONICO = "digital"` resultou em: [o valor mudou?]

## Pergunta de Reflexão

O que aconteceria se você removesse `Object.freeze()` do Enum? Dê um exemplo de bug que poderia ocorrer em um projeto com múltiplos arquivos.

**Sua resposta:**

[Escreva aqui]
~~~~

---

## Questão 5: Factory Method para Criação Consistente

**Conceito-chave:** Factory Method centraliza a criação de objetos com validação (Aula 17, Seção 8).

**Objetivo:** Implementar uma Factory que cria objetos `Usuario` com validação e estrutura consistente.

**Passos de Execução:**

1. Crie uma classe `UsuarioFactory` com um método estático `criar(nome, email, idade)`
2. O método deve validar:
   - `nome` é string não vazia
   - `email` contém `@`
   - `idade` é número positivo
3. Se alguma validação falhar, lance um erro com `throw new Error("mensagem específica")`
4. Se passar, retorne um objeto `{ id: Date.now(), nome, email, idade, ativo: true, criadoEm: new Date().toISOString() }`
5. Crie um método estático `criarAdmin(nome, email)` que chama o `criar` e adiciona `admin: true`

**Entrega:** crie `entregas-aula-17/05-factory-method.md`:

~~~~
# Questão 5 — Factory Method para Criação Consistente

## Código

[Insira o código completo de UsuarioFactory]

## Testes

- `UsuarioFactory.criar("João", "joao@email.com", 25)` → [exiba o resultado]
- `UsuarioFactory.criar("", "teste@email.com", 20)` → [qual erro apareceu?]
- `UsuarioFactory.criar("Maria", "email-invalido", 30)` → [qual erro apareceu?]
- `UsuarioFactory.criar("Ana", "ana@email.com", -5)` → [qual erro apareceu?]
- `UsuarioFactory.criarAdmin("Admin", "admin@sistema.com")` → [exiba o resultado]

## Pergunta de Reflexão

Por que usar uma Factory em vez de criar o objeto literal manualmente com `{}` em vários lugares do código?

**Sua resposta:**

[Escreva aqui]
~~~~

---

## Questão 6: Singleton com Campo Privado

**Conceito-chave:** Singleton garante instância única via `#` privado (Aula 17, Seção 8).

**Objetivo:** Implementar um Singleton `Logger` e provar que todas as "instâncias" são o mesmo objeto.

**Passos de Execução:**

1. Crie uma classe `Logger` com campo privado estático `#instancia`
2. No `constructor`, verifique se `#instancia` já existe e retorne-a se sim
3. Adicione um campo privado `#mensagens` que armazena um array de logs
4. Adicione um método `registrar(texto)` que adiciona um objeto `{ timestamp: Date.now(), texto }` ao array
5. Adicione um getter `historico` que retorna uma cópia do array (usando spread)
6. Adicione um getter estático `instancia` que retorna a instância única
7. Teste: crie `const log1 = new Logger()` e `const log2 = new Logger()`
8. Registre mensagens em log1 e log2 alternadamente
9. Verifique se `log1 === log2` (deve ser `true`)
10. Verifique se o histórico de log1 contém as mensagens registradas em log2

**Entrega:** crie `entregas-aula-17/06-singleton-logger.md`:

~~~~
# Questão 6 — Singleton com Campo Privado

## Código

[Insira o código completo do Logger + testes]

## Resultados dos Testes

- `log1 === log2`: [true ou false?]
- Mensagens registradas em log1 e log2:
  - log1.registrar("Iniciou o sistema")
  - log2.registrar("Conectou ao banco")
  - log1.registrar("Carregou configurações")
- `log1.historico` ao final: [exiba o array]
- `log2.historico` ao final: [exiba o array — é igual ao de log1?]

## Pergunta de Reflexão

Em que cenários um Singleton é útil? E em que cenários ele pode ser prejudicial (por que é considerado por alguns um anti-pattern)?

**Sua resposta:**

[Escreva aqui]
~~~~

---

## Questão 7: Projeto Progressivo — Cache de Tarefas com Map

**Conceito-chave:** Map como cache para agrupar tarefas por status (Aula 17, Seção 9).

**Objetivo:** Implementar um sistema que usa Map e Set no Gerenciador de Tarefas para evitar duplicatas e agrupar tarefas por status com cache eficiente.

**Passos de Execução:**

1. Crie um Enum `StatusTarefa` com `PENDENTE`, `CONCLUIDA`, `CANCELADA`
2. Crie uma classe `GerenciadorTarefasV2` com:
   - `#tarefas` (array privado)
   - `#textosExistentes` (Set para evitar duplicatas)
   - `#cacheStatus` (Map: status → array de tarefas)
3. Método `adicionar(texto, status)`:
   - Verifica se texto já existe no Set (rejeita se sim)
   - Cria tarefa com `id: Date.now()`, texto, status, criadaEm
   - Adiciona ao array, ao Set e atualiza o cache
4. Método `buscarPorStatus(status)`:
   - Retorna o array do cache ou `[]` se o status não existir
5. Método `listarTodas()` retorna cópia do array
6. Getter `total`
7. Execute o teste abaixo e documente os resultados

**Entrega:** crie `entregas-aula-17/07-projeto-progressivo-cache.md`:

~~~~
# Questão 7 — Cache de Tarefas com Map

## Código

[Insira o código completo do GerenciadorTarefasV2 — Enum + classe]

## Teste

```javascript
const gerenciador = new GerenciadorTarefasV2();

console.log(gerenciador.adicionar("Estudar Map", StatusTarefa.PENDENTE));
console.log(gerenciador.adicionar("Praticar Set", StatusTarefa.PENDENTE));
console.log(gerenciador.adicionar("Estudar Map", StatusTarefa.PENDENTE));
console.log(gerenciador.adicionar("Ler sobre Factory", StatusTarefa.CONCLUIDA));
console.log(gerenciador.adicionar("Revisar Singleton", StatusTarefa.CONCLUIDA));
console.log(gerenciador.adicionar("Refatorar Gerenciador", StatusTarefa.CANCELADA));

console.log("Total:", gerenciador.total);
console.log("Pendentes:", gerenciador.buscarPorStatus(StatusTarefa.PENDENTE));
console.log("Concluídas:", gerenciador.buscarPorStatus(StatusTarefa.CONCLUIDA));
console.log("Canceladas:", gerenciador.buscarPorStatus(StatusTarefa.CANCELADA));
console.log("Status inexistente:", gerenciador.buscarPorStatus("inexistente"));
```

## Resultados Esperados

[Preencha com o que cada console.log deve exibir]

## Pergunta de Reflexão

Qual a vantagem de usar um Map (`#cacheStatus`) em vez de filtrar o array `#tarefas` toda vez que você precisa buscar por status? Em que situação essa vantagem é mais perceptível?

**Sua resposta:**

[Escreva aqui]
~~~~

---

## Checklist Final: Pronto para a Aula 18?

Marque cada item só quando conseguir fazê-lo **sem consultar a aula**:

- [ ] Explico por que Map aceita qualquer tipo de chave e objetos literais não
- [ ] Crio um Map, adiciono pares com `.set()`, leio com `.get()`, verifico com `.has()` e removo com `.delete()`
- [ ] Itero um Map com `for...of` e `.entries()`
- [ ] Uso `[...new Set(array)]` para remover duplicatas de um array
- [ ] Explico a diferença entre referência forte (Map) e fraca (WeakMap)
- [ ] Implemento um Enum com `Object.freeze()` e explico por que ele é imutável
- [ ] Implemento uma Factory Method com `static` e validação
- [ ] Explico como o Singleton garante uma única instância usando `#instancia`
- [ ] Uso Set para evitar duplicatas em uma coleção
- [ ] Uso Map como cache para acesso rápido a dados agrupados

> *Acertou todos? Você está pronto para a Aula 18, onde vai descobrir o DOM — a árvore de elementos HTML que o JavaScript pode manipular. Você vai criar componentes personalizados com Custom Elements e dar vida às suas páginas web. Travou em algum? Releia a seção indicada na questão correspondente antes de avançar.*

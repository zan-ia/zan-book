---
titulo: "JavaScript — Do Zero ao Profissional"
modulo: "01"
aula: "22"
---

# JavaScript — Do Zero ao Profissional Aula 23 — Questões de Aprendizagem

## Como Usar Este Arquivo

Este arquivo contém as questões de aprendizagem da Aula 23. Cada questão é um checkpoint que verifica se você dominou um conceito específico — **faça sem consultar o conteúdo principal**. Resolva na ordem apresentada, criando uma pasta `entregas-aula-22/` dentro do seu diretório de exercícios. Para cada questão, salve um arquivo separado com o nome sugerido (ex.: `q1-camadas-persistencia.md`). As respostas esperadas estão no arquivo principal da aula — consulte-as após tentar resolver por conta própria. Cada questão inclui o conceito-chave verificado (com referência à seção da aula), objetivo, passos de execução e um template de entrega para você preencher.

---

## Questão 1: Decidindo a Camada de Persistência

**Conceito-chave:** Três camadas de persistência — memória, storage e database (Aula 23, Seção 1).

**Objetivo:** Decidir qual camada de persistência usar para diferentes cenários, justificando cada escolha com base nas características dos dados.

**Passos de Execução:**

1. Leia cada cenário abaixo
2. Decida se a melhor escolha é: memória, localStorage/sessionStorage ou IndexedDB
3. Justifique sua resposta com base nas três perguntas: sobreviver ao F5? dados estruturados com consultas? volume?
4. Preencha o template de entrega

**Entrega:** crie `entregas-aula-22/q1-camadas-persistencia.md`:

~~~~
# Questão 1 — Camadas de Persistência

Preencha a tabela abaixo para cada cenário:

| Cenário | Camada escolhida | Justificativa |
|---|---|---|
| Um app de calculadora que mantém o histórico de contas APENAS enquanto a página está aberta | | |
| Um app de notas com busca por palavra-chave, com previsão de 200 notas | | |
| Uma loja virtual que precisa lembrar o tema (claro/escuro) escolhido pelo usuário | | |
| Um formulário de cadastro com 5 etapas que o usuário preenche na mesma aba | | |
| Um gerenciador de tarefas com consulta por status e data, milhares de registros | | |

## Conclusão

Em 2-3 frases, explique qual critério você considera MAIS importante na hora de escolher entre localStorage e IndexedDB.
~~~~

---

## Questão 2: Configurações do Usuário com localStorage

**Conceito-chave:** localStorage API + JSON.stringify/parse (Aula 23, Seção 2).

**Objetivo:** Implementar uma mini-aplicação que salva e carrega um objeto de configurações do localStorage.

**Passos de Execução:**

1. Crie um arquivo HTML com um `<script>` que declara um objeto `config`
2. O objeto deve ter: `tema` (string), `fonteTamanho` (number), `notificacoes` (boolean), `ultimoAcesso` (string com data atual)
3. Salve o objeto no localStorage com `JSON.stringify`
4. Adicione um botão "Carregar Config" que lê do localStorage, faz `JSON.parse` e exibe no console
5. Teste: carregue a página, clique em "Carregar Config" — veja as configurações no console

**Entrega:** crie `entregas-aula-22/q2-localstorage-config.html`:

~~~~html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Q2 — Configurações com localStorage</title>
</head>
<body>
  <button id="carregar">Carregar Config</button>
  <script>
    // 1. Declare o objeto config (tema, fonteTamanho, notificacoes, ultimoAcesso)
    const config = {
      // Preencha aqui
    };

    // 2. Salve no localStorage
    // localStorage.setItem('config', ...)

    // 3. Ao clicar no botão, carregue e exiba no console
    document.getElementById('carregar').addEventListener('click', () => {
      // localStorage.getItem('config')
      // JSON.parse
      // console.log
    });
  </script>
</body>
</html>
~~~~

**Reflexão:** O que aconteceria se você tentasse salvar o objeto `config` sem usar `JSON.stringify`? Teste (depois corrija) para ver o resultado.

---

## Questão 3: localStorage vs sessionStorage — Cenários Reais

**Conceito-chave:** Comparação entre localStorage e sessionStorage (Aula 23, Seção 2).

**Objetivo:** Explicar a diferença prática entre localStorage e sessionStorage e propor casos de uso adequados para cada um.

**Passos de Execução:**

1. Abra o DevTools e crie um item em localStorage e outro em sessionStorage
2. Aperte F5 e veja qual dos dois persistiu
3. Feche a aba, abra uma nova, e verifique novamente
4. Preencha o template

**Entrega:** crie `entregas-aula-22/q3-storage-comparacao.md`:

~~~~
# Questão 3 — localStorage vs sessionStorage

## Experimento prático

1. Acesse qualquer página e abra o DevTools > Application > Storage
2. Crie um item no localStorage: `localStorage.setItem('teste-local', 'persiste')`
3. Crie um item no sessionStorage: `sessionStorage.setItem('teste-session', 'some')`
4. Aperte F5: o que aconteceu com cada item?
   - localStorage: [   ]
   - sessionStorage: [   ]
5. Feche a aba, abra uma nova e verifique novamente:
   - localStorage: [   ]
   - sessionStorage: [   ]

## Explicação

Em 3-4 frases, explique por que os resultados foram diferentes.

## Casos de uso

Dê um exemplo REAL (diferente dos citados na aula) para:
- localStorage: _______________________________________
- sessionStorage: ______________________________________
~~~~

---

## Questão 4: Abrindo um Banco IndexedDB

**Conceito-chave:** IndexedDB — abrir banco, criar ObjectStore e índices (Aula 23, Seção 3).

**Objetivo:** Escrever o código de abertura de um banco IndexedDB chamado 'biblioteca-db' com ObjectStore 'livros' e índices 'autor' e 'ano', usando apenas callbacks (sem Promises).

**Passos de Execução:**

1. Crie um arquivo HTML com um `<script>`
2. Use `indexedDB.open('biblioteca-db', 1)` para abrir o banco
3. No `onupgradeneeded`: crie ObjectStore 'livros' com `keyPath: 'isbn'`
4. Crie índices 'autor' (campo 'autor') e 'ano' (campo 'ano')
5. No `onsuccess`: exiba "Banco biblioteca aberto com sucesso" no console
6. No `onerror`: exiba o erro no console
7. Teste: abra o HTML, veja se o banco aparece no DevTools > Application > IndexedDB

**Entrega:** crie `entregas-aula-22/q4-abrir-banco.html`:

~~~~html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Q4 — Abrir Banco IndexedDB</title>
</head>
<body>
  <script>
    const request = indexedDB.open(/* nome */, /* versao */);

    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      // Crie a ObjectStore 'livros' com keyPath 'isbn'
      // Crie o índice 'autor'
      // Crie o índice 'ano'
    };

    request.onsuccess = (event) => {
      const db = event.target.result;
      // Exiba mensagem de sucesso no console
    };

    request.onerror = (event) => {
      // Exiba o erro no console
    };
  </script>
</body>
</html>
~~~~

**Verificação:** Abra DevTools > Application > IndexedDB > biblioteca-db. Você deve ver:
- ObjectStore: livros (keyPath: isbn)
- Índices: autor, ano

---

## Questão 5: CRUD com Transações IndexedDB

**Conceito-chave:** Operações CRUD com transações IndexedDB (Aula 23, Seção 4).

**Objetivo:** Implementar funções de adicionar, buscar, atualizar e remover livros usando transações IndexedDB com callbacks.

**Passos de Execução:**

1. Use o banco 'biblioteca-db' criado na questão anterior
2. No `onsuccess` do `indexedDB.open`, atribua `db` a uma variável global
3. Implemente as funções abaixo
4. Teste: adicione 2 livros, busque um, atualize o ano, remova o outro, confira no DevTools

**Entrega:** crie `entregas-aula-22/q5-crud-indexeddb.html`:

~~~~html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Q5 — CRUD IndexedDB</title>
</head>
<body>
  <script>
    let db = null;

    const request = indexedDB.open('biblioteca-db', 1);

    request.onupgradeneeded = (event) => {
      const database = event.target.result;
      if (!database.objectStoreNames.contains('livros')) {
        const store = database.createObjectStore('livros', { keyPath: 'isbn' });
        store.createIndex('autor', 'autor', { unique: false });
        store.createIndex('ano', 'ano', { unique: false });
      }
    };

    request.onsuccess = (event) => {
      db = event.target.result;
      console.log('Banco pronto!');

      // Teste: adicione um livro
      adicionarLivro({ isbn: '978-1', titulo: 'JavaScript Basico', autor: 'Ana', ano: 2023 });
      adicionarLivro({ isbn: '978-2', titulo: 'JavaScript Avancado', autor: 'Carlos', ano: 2024 });
    };

    request.onerror = (event) => {
      console.error('Erro ao abrir banco:', event.target.error);
    };

    function adicionarLivro(livro) {
      // Implemente usando db.transaction(['livros'], 'readwrite')
      // store.add(livro)
      // onsuccess: console.log + event.target.result
      // onerror: console.error
    }

    function buscarLivro(isbn) {
      // Implemente usando db.transaction(['livros'], 'readonly')
      // store.get(isbn)
      // onsuccess: console.log com os dados do livro
    }

    function atualizarLivro(livro) {
      // Implemente usando db.transaction(['livros'], 'readwrite')
      // store.put(livro)
      // onsuccess: console.log
    }

    function removerLivro(isbn) {
      // Implemente usando db.transaction(['livros'], 'readwrite')
      // store.delete(isbn)
      // onsuccess: console.log
    }
  </script>
</body>
</html>
~~~~

**Reflexão:** Qual a diferença entre `store.add()` e `store.put()`? Em que situação você usaria cada um? Responda em um comentário no código.

---

## Questão 6: Consultas com Índices e Cursores

**Conceito-chave:** Consultas com IDBIndex e IDBCursor (Aula 23, Seção 4).

**Objetivo:** Usar `IDBIndex.getAll()` para listar livros de um autor específico e `IDBCursor` com `IDBKeyRange` para listar livros entre dois anos.

**Passos de Execução:**

1. Use o banco 'biblioteca-db' (com alguns livros já inseridos)
2. Implemente `listarPorAutor(autor)` que usa `store.index('autor').getAll(autor)`
3. Implemente `listarPorPeriodo(anoInicio, anoFim)` que usa `index.openCursor(IDBKeyRange.bound(...))`
4. Teste: insira 4+ livros de autores e anos variados, depois execute as consultas

**Entrega:** crie `entregas-aula-22/q6-consultas-indexeddb.html`:

~~~~html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Q6 — Consultas IndexedDB</title>
</head>
<body>
  <script>
    let db = null;

    const request = indexedDB.open('biblioteca-db', 1);

    request.onupgradeneeded = (event) => {
      const database = event.target.result;
      if (!database.objectStoreNames.contains('livros')) {
        const store = database.createObjectStore('livros', { keyPath: 'isbn' });
        store.createIndex('autor', 'autor', { unique: false });
        store.createIndex('ano', 'ano', { unique: false });
      }
    };

    request.onsuccess = (event) => {
      db = event.target.result;
      console.log('Banco pronto!');

      // Insira livros de teste (use adicionarLivro da Q5)
      adicionarLivro({ isbn: '978-A', titulo: 'Fundamentos JS', autor: 'Ana', ano: 2020 });
      adicionarLivro({ isbn: '978-B', titulo: 'DOM na Pratica', autor: 'Ana', ano: 2021 });
      adicionarLivro({ isbn: '978-C', titulo: 'React para Iniciantes', autor: 'Bruno', ano: 2022 });
      adicionarLivro({ isbn: '978-D', titulo: 'Node.js Avancado', autor: 'Bruno', ano: 2023 });
      adicionarLivro({ isbn: '978-E', titulo: 'TypeScript Total', autor: 'Ana', ano: 2024 });

      // Teste as consultas
      setTimeout(() => {
        listarPorAutor('Ana');
        listarPorPeriodo(2021, 2023);
      }, 1000);
    };

    request.onerror = (event) => {
      console.error('Erro ao abrir banco:', event.target.error);
    };

    function adicionarLivro(livro) {
      const transaction = db.transaction(['livros'], 'readwrite');
      const store = transaction.objectStore('livros');
      const req = store.add(livro);
      req.onerror = (e) => console.error('Erro ao adicionar:', e.target.error);
    }

    function listarPorAutor(autor) {
      console.log(`=== Livros de ${autor} ===`);
      // Implemente usando store.index('autor').getAll(autor)
      // onsuccess: percorra event.target.result e exiba cada livro
    }

    function listarPorPeriodo(anoInicio, anoFim) {
      console.log(`=== Livros entre ${anoInicio} e ${anoFim} ===`);
      // Implemente usando store.index('ano').openCursor(IDBKeyRange.bound(...))
      // No onsuccess, percorra com cursor.continue()
      // Exiba cada livro: cursor.value.titulo + " (" + cursor.value.ano + ")"
    }
  </script>
</body>
</html>
~~~~

**Verificação:** O console deve mostrar os livros filtrados corretamente:
- "=== Livros de Ana ===" seguido de 3 livros
- "=== Livros entre 2021 e 2023 ===" seguido dos livros de 2021, 2022 e 2023

---

## Questão 7: Migrar Gerenciador — localStorage para IndexedDB

**Conceito-chave:** Projeto progressivo — migração completa do Gerenciador de Tarefas para IndexedDB (Aula 23, Seções 2-4).

**Objetivo:** Migrar seu Gerenciador de Tarefas do localStorage para IndexedDB, implementando carregamento ao iniciar e salvamento a cada mutação, com filtro por status usando índice.

**Passos de Execução:**

1. **Prepare**: faça backup do seu `index.html` atual (com localStorage)
2. **Abra o banco**: adicione `indexedDB.open('gerenciador-db', 1)` no `connectedCallback`
3. **Crie a estrutura**: no `onupgradeneeded`, crie ObjectStore `tarefas` (keyPath: 'id') com índices `status` (campo `concluida`) e `dataCriacao`
4. **Carregue**: no `onsuccess`, use `store.getAll()` para carregar as tarefas e renderizar a lista
5. **Adicione**: na função `adicionarTarefa()`, use `store.add()` com transação `readwrite`
6. **Alterne**: na função `alternarTarefa(id)`, use `store.get()` seguido de `store.put()`
7. **Remova**: na função `removerTarefa(id)`, use `store.delete()`
8. **Filtre**: implemente um botão "Pendentes" que usa `store.index('status').getAll(false)`
9. **Limpe**: remova TODO o código de localStorage (setItem, getItem, removeItem)
10. **Teste**: adicione 5 tarefas, alterne 2, F5 — tudo deve voltar; filtre por pendentes

**Entrega:** crie `entregas-aula-22/q7-gerenciador-indexeddb.md` com um relatório da migração:

~~~~
# Questão 7 — Migração do Gerenciador para IndexedDB

## Checklist de migração

Marque cada item como concluido [X] ou pendente [ ]:

- [ ] Backup do index.html original salvo
- [ ] `indexedDB.open('gerenciador-db', 1)` implementado no connectedCallback
- [ ] ObjectStore `tarefas` com keyPath 'id' criada no onupgradeneeded
- [ ] Indices `status` (concluida) e `dataCriacao` criados
- [ ] Carregamento com `store.getAll()` no onsuccess
- [ ] `adicionarTarefa()` usa `store.add()` com transacao readwrite
- [ ] `alternarTarefa()` usa `store.get()` + `store.put()` com transacao readwrite
- [ ] `removerTarefa()` usa `store.delete()` com transacao readwrite
- [ ] Filtro por status implementado com `store.index('status').getAll()`
- [ ] Codigo de localStorage removido (sem dupla persistencia)
- [ ] Testado: F5 mantem os dados
- [ ] Testado: filtro por pendentes funciona

## Resultado dos testes

Quantas tarefas voce adicionou: ________
Quantas sobreviveram ao F5: ________
O filtro por status funcionou: [Sim / Nao]

## Reflexao

Em 3-5 frases, descreva a maior dificuldade que voce encontrou durante a migracao e como resolveu (ou planeja resolver).
~~~~

---

## Checklist Final: Pronto para a Aula 24?

Marque cada item só quando conseguir fazê-lo **sem consultar a aula**:

- [ ] Sei explicar a diferença entre memória, localStorage e IndexedDB em termos de ciclo de vida e recursos
- [ ] Sei usar localStorage.setItem/getItem com JSON.stringify/parse
- [ ] Sei quando usar sessionStorage em vez de localStorage
- [ ] Sei abrir um banco IndexedDB e criar ObjectStores e índices no onupgradeneeded
- [ ] Sei executar add, put, get e delete dentro de transações IndexedDB usando callbacks
- [ ] Sei consultar dados com IDBIndex.getAll() e IDBCursor
- [ ] Meu Gerenciador de Tarefas carrega dados do IndexedDB ao iniciar e salva a cada mutação
- [ ] Meu Gerenciador consegue filtrar tarefas por status usando índice IndexedDB
- [ ] Sei decidir entre localStorage e IndexedDB com base no volume, estrutura e necessidade de consultas

> *Acertou todos? Você está pronto para a Aula 24, onde vai aprender sobre Observers — IntersectionObserver, ResizeObserver e MutationObserver — para reagir a mudanças na página sem ficar checando manualmente. Travou em algum? Releia a seção indicada na questão correspondente antes de avançar.*

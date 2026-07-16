---
titulo: "JavaScript — Do Zero ao Profissional"
modulo: "01"
aula: "19"
---

# JavaScript — Do Zero ao Profissional Aula 20 — Questões de Aprendizagem

## Como Usar Este Arquivo

Este arquivo contém as questões de aprendizagem da Aula 20. Cada questão é um checkpoint que verifica se você dominou um conceito específico antes de avançar para o próximo. Resolva na ordem apresentada, criando uma pasta `entregas-aula-19/` dentro do seu diretório de exercícios. Para cada questão, salve um arquivo separado com o nome sugerido (ex.: `q1-createElement.html`, `q5-shadow-dom.html`). As respostas esperadas estão no arquivo principal de conteúdo da aula — consulte-as somente após tentar resolver por conta própria. Se uma questão exigir modificar o projeto do Gerenciador de Tarefas, faça o backup do arquivo original antes de alterar. Cada questão inclui um template HTML inicial, passos de execução detalhados, tabelas para preencher e perguntas de reflexão para aprofundar o aprendizado.

---

## Questão 1: createElement, appendChild e insertBefore

**Conceito-chave:** DOM Manipulation (Aula 20, Seção 3)

**Objetivo:** Criar elementos dinamicamente usando `document.createElement`, inseri-los ao final com `appendChild` e posicionar elementos entre nós existentes com `insertBefore`.

**Passos de Execução:**

1. Declare um array `const nomes = ['Ana', 'Bruno', 'Carla', 'Daniel', 'Eduarda']`.
2. Crie um elemento `<ul>` vazio com `document.createElement('ul')`.
3. Para cada nome no array, crie um `<li>`, defina `textContent` com o nome e insira com `appendChild`.
4. Crie um novo `<li>` com o texto "Bruna" e insira na segunda posição (índice 1) usando `insertBefore` — lembre-se de obter uma referência ao nó de referência (o `<li>` que está atualmente na posição 1).
5. Anexe a `<ul>` completa ao `<body>` ou a uma `<div id="app">`.

**Entrega:** Arquivo `q1-createElement.html` com o código completo.

~~~~html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Q1 - createElement</title>
</head>
<body>
  <div id="app"></div>
  <script>
    // Seu código aqui
  </script>
</body>
</html>
~~~~

Complete a tabela abaixo com os nomes dos métodos e seus parâmetros:

| Operação | Método | Parâmetros |
|---|---|---|
| Criar elemento | `document.createElement` | `'li'` |
| Inserir ao final | | |
| Inserir antes de outro | | |
| Selecionar pai no DOM | | |

**Reflexão:** O que acontece se você chamar `appendChild` em um nó que já está no DOM? Teste movendo o mesmo `<li>` para outro lugar e observe o comportamento no navegador. O nó é copiado ou movido?

---

## Questão 2: cloneNode(true) vs cloneNode(false) e remove()

**Conceito-chave:** Clonagem e remoção (Aula 20, Seção 3)

**Objetivo:** Diferenciar clonagem profunda (`deep: true`) de superficial (`deep: false`) e utilizar `remove()` para eliminar elementos do DOM.

**Passos de Execução:**

1. No HTML, crie uma `<div id="original">` contendo um `<h2>` com "Título" e um `<p>` com "Parágrafo".
2. Use `cloneNode(true)` para criar uma cópia profunda e `cloneNode(false)` para uma cópia superficial.
3. Insira ambas as cópias nos respectivos containers (`#clone-profundo` e `#clone-superficial`) e observe a diferença no navegador.
4. Chame `remove()` no elemento original.
5. Responda as perguntas de reflexão no código como comentários.

**Entrega:** Arquivo `q2-cloneNode.html` com o código e as respostas nos comentários.

~~~~html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Q2 - cloneNode</title>
</head>
<body>
  <div id="original">
    <h2>Título</h2>
    <p>Parágrafo</p>
  </div>
  <div id="clone-profundo"></div>
  <div id="clone-superficial"></div>
  <script>
    // 1. Selecione o elemento original com querySelector
    // 2. Crie clone profundo (true) e clone superficial (false)
    // 3. Insira cada um nos respectivos containers
    // 4. Remova o elemento original
    // 5. Reflexão — responda nos comentários:
    //    a) O clone superficial manteve os filhos? Por quê?
    //    b) Se o original for removido antes da clonagem, o que acontece?
    //    c) Em que cenário prático você usaria cloneNode(false)?
  </script>
</body>
</html>
~~~~

---

## Questão 3: DocumentFragment para inserção em lote

**Conceito-chave:** DocumentFragment (Aula 20, Seção 4)

**Objetivo:** Construir uma lista de 10 itens usando `DocumentFragment`, analisando quantos reflows acontecem com e sem a fragmentação.

**Passos de Execução:**

1. Crie um array com 10 nomes de frutas.
2. Crie uma `<ul id="frutas">` no HTML.
3. Percorra o array construindo `<li>` dentro de um `DocumentFragment` criado com `document.createDocumentFragment()`.
4. Ao final, anexe o fragmento à `<ul>` com um único `appendChild`.
5. Compare mentalmente com a abordagem sem fragmento (appendChild dentro do loop).

**Entrega:** Arquivo `q3-documentFragment.html`.

~~~~html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Q3 - DocumentFragment</title>
</head>
<body>
  <ul id="frutas"></ul>
  <script>
    const frutas = ['Maca', 'Banana', 'Laranja', 'Uva', 'Manga',
                    'Abacaxi', 'Morango', 'Kiwi', 'Pera', 'Melancia'];
    // Seu código aqui (usando DocumentFragment)
  </script>
</body>
</html>
~~~~

Complete a tabela comparativa:

| Abordagem | Quantidade de reflows | Quantidade de appendChild |
|---|---|---|
| Sem fragmento (appendChild no loop) | | |
| Com DocumentFragment | | |

**Reflexão:** Por que o `DocumentFragment` melhora a performance? O que acontece com o fragmento depois que ele é anexado ao DOM? O conteúdo do fragmento ainda existe ou foi movido? Pesquise sobre reflow e repaint no contexto de manipulação DOM.

---

## Questão 4: Template — clonar, preencher e inserir

**Conceito-chave:** HTMLTemplateElement (Aula 20, Seção 5)

**Objetivo:** Utilizar um `<template>` HTML como blueprint para renderizar múltiplos comentários a partir de um array de objetos.

**Passos de Execução:**

1. Defina um `<template id="comentario-template">` com a estrutura: `<div class="comentario">` contendo `<h3 class="nome">` para o nome e `<p class="texto">` para o texto.
2. Crie um array `const comentarios = [...]` com objetos `{ nome, texto }`.
3. Percorra o array: para cada item, clone o conteúdo do template com `template.content.cloneNode(true)`, preencha os elementos com `querySelector` e `textContent`, e insira no container `<div id="comentarios">`.
4. Verifique no DevTools que o template permanece inalterado no markup (ele não some nem é consumido).
5. Teste adicionar um novo comentário ao array e repetir o processo sem recarregar a página.

**Entrega:** Arquivo `q4-template.html`.

~~~~html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Q4 - Template</title>
</head>
<body>
  <!-- Defina o template aqui -->
  <template id="comentario-template">
    <div class="comentario">
      <h3 class="nome"></h3>
      <p class="texto"></p>
    </div>
  </template>

  <div id="comentarios"></div>

  <script>
    const comentarios = [
      { nome: 'Maria', texto: 'Excelente aula!' },
      { nome: 'Joao', texto: 'Conteudo muito rico.' },
      { nome: 'Ana', texto: 'Consegui entender Shadow DOM!' }
    ];
    // Seu código aqui
  </script>
</body>
</html>
~~~~

---

## Questão 5: Shadow DOM — encapsulamento de estilo

**Conceito-chave:** Shadow DOM (Aula 20, Seção 6)

**Objetivo:** Criar um Web Component `<e-botao>` com Shadow DOM que isola estilos internos do CSS global, demonstrando o encapsulamento nos dois sentidos (fora nao entra, dentro nao sai).

**Passos de Execução:**

1. Defina a classe `EBotao` que estende `HTMLElement`.
2. No construtor, chame `this.attachShadow({ mode: 'open' })`.
3. Adicione estilos no shadow root: botão com fundo azul (`#0066cc`), texto branco, bordas arredondadas (`border-radius: 8px`), padding de 12px 24px, sem borda visível, cursor pointer, sem sublinhado.
4. Adicione um `<button>` com texto "Clique aqui" dentro do shadow root.
5. No CSS global, tente sobrescrever o estilo do botão com `!important` em várias propriedades (background, color, font-size, border).
6. Fora do componente, adicione um `<button>Botao comum</button>` para servir como comparação visual.
7. Verifique que o estilo global NÃO afeta o botão encapsulado dentro do `<e-botao>`.
8. Verifique que os estilos definidos dentro do shadow DOM NÃO vazam para o botão normal fora do componente.

**Entrega:** Arquivo `q5-shadow-dom.html`.

~~~~html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Q5 - Shadow DOM</title>
  <style>
    /* Tentativa de estilo global — nao deve afetar o componente */
    button {
      background: red !important;
      color: yellow !important;
      font-size: 30px;
      border: 5px solid green !important;
    }
  </style>
</head>
<body>
  <h2>Componente com Shadow DOM</h2>
  <e-botao></e-botao>

  <h2>Botao normal (fora do shadow)</h2>
  <button>Botao comum</button>

  <script>
    // Defina a classe EBotao e registre com customElements.define('e-botao', EBotao)
  </script>
</body>
</html>
~~~~

**Reflexão (responda como comentários dentro do `<script>`):**

1. O botão dentro do `<e-botao>` ficou vermelho com fundo amarelo? Explique por que o estilo global não o afetou mesmo com `!important`.
2. O `<button>` normal fora do shadow foi afetado pelos estilos definidos dentro do Shadow DOM? Por quê?
3. O que aconteceria se usássemos `mode: 'closed'`? Como você ainda poderia modificar o componente programaticamente?
4. O seletor `:host` dentro do shadow style seleciona qual elemento exatamente?

---

## Questão 6: Slots nomeados e fallback

**Conceito-chave:** Slots (Aula 20, Seção 6)

**Objetivo:** Construir um componente `<e-painel>` com três slots nomeados (`cabecalho`, `corpo`, `rodape`) e conteúdo fallback para cada um.

**Passos de Execução:**

1. Defina a classe `EPainel` que estende `HTMLElement` com Shadow DOM.
2. No shadow root, crie a estrutura com três seções estilizadas:
   - `<header>` contendo `<slot name="cabecalho">Cabecalho padrao</slot>`
   - `<main>` contendo `<slot name="corpo">Corpo padrao</slot>`
   - `<footer>` contendo `<slot name="rodape">Rodape padrao</slot>`
3. Estilize cada seção com bordas, padding e cores de fundo diferentes para diferenciá-las visualmente.
4. Use o componente duas vezes no HTML: uma com conteúdo projetado (atributo `slot`) e outra sem conteúdo para exibir os fallbacks.
5. Verifique no navegador que o conteúdo projetado substitui corretamente o fallback em cada slot nomeado.

**Entrega:** Arquivo `q6-slots.html`.

~~~~html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Q6 - Slots</title>
</head>
<body>
  <!-- Uso com conteudo projetado -->
  <e-painel>
    <span slot="cabecalho">Meu Titulo Personalizado</span>
    <p slot="corpo">Conteudo principal do painel.</p>
    <span slot="rodape">Rodape personalizado</span>
  </e-painel>

  <!-- Uso sem conteudo — deve exibir fallbacks -->
  <e-painel></e-painel>

  <script>
    // Defina a classe EPainel e registre com customElements.define('e-painel', EPainel)
  </script>
</body>
</html>
~~~~

**Reflexão:** O que acontece se você projetar um elemento com `slot="corpo"` mas não projetar nada para `slot="cabecalho"`? E se você usar um nome de slot que não existe no template do componente? O navegador exibe algum erro ou apenas ignora?

---

## Questão 7: Projeto — e-tarefa com Shadow DOM e slot

**Conceito-chave:** Projeto — migracao do e-tarefa (Aula 20, Secao 7.1)

**Objetivo:** Migrar o componente `<e-tarefa>` da implementacao com `innerHTML` para Shadow DOM com slot, mantendo o checkbox funcional e o observer do atributo `concluida`, e garantindo encapsulamento de estilo.

**Passos de Execução:**

1. No arquivo `index.html` do Gerenciador de Tarefas, localize a definicao atual da classe `ETarefa`.
2. Substitua `this.innerHTML` por `this.attachShadow({ mode: 'open' })` no construtor.
3. Use um `<slot>` para projetar o texto da tarefa dentro do shadow root.
4. Substitua `this.querySelector` por `this.shadowRoot.querySelector` onde necessario (checkbox, botao remover).
5. Mantenha o `attributeChangedCallback` para observar o atributo `concluida` e atualizar o estado do checkbox.
6. Use `:host` e `:host([concluida="true"])` em vez de classes CSS para estilizar o estado visual.
7. Remova `texto` de `observedAttributes` — o texto agora vem do slot, nao do atributo.
8. Verifique que o checkbox alterna a aparencia visual da tarefa (texto riscado, fundo verde, opacidade).
9. Teste que os estilos internos nao vazam para o resto da pagina e que estilos globais nao afetam o componente.

**Entrega:** Substitua o código anterior no `index.html` do projeto. Salve uma copia do arquivo original como `index.html.backup`.

~~~~html
<!-- ANTES (innerHTML) -->
<script>
class ETarefa extends HTMLElement {
  constructor() {
    super();
    this.dataset.concluida = 'false';
  }
  connectedCallback() {
    this.innerHTML = `
      <style>
        .tarefa { padding: 8px; margin: 4px; border-radius: 4px; }
        .concluida { background: #d4edda; text-decoration: line-through; }
        .pendente { background: #fff3cd; }
      </style>
      <div class="tarefa pendente">
        <input type="checkbox">
        <span></span>
        <button class="remover">x</button>
      </div>
    `;
    this.render();
    this.querySelector('.remover')
      .addEventListener('click', () => this.remove());
    this.querySelector('input[type="checkbox"]')
      .addEventListener('change', () => this.toggle());
  }
  static get observedAttributes() { return ['texto', 'concluida']; }
  attributeChangedCallback(attr, oldVal, newVal) {
    if (attr === 'texto' || attr === 'concluida') this.render();
  }
  toggle() { /* alterna data-concluida */ }
}
</script>

<!-- DEPOIS (Shadow DOM + slot) -->
<script>
// Escreva a nova implementacao aqui
// Dica: todo o HTML e CSS vao para dentro do shadowRoot
// Lembre-se de usar :host para estilizar o proprio componente
</script>
~~~~

**Checklist de migracao:**

- [ ] O shadow root e anexado com `mode: 'open'` no construtor
- [ ] O `<slot>` projeta o conteudo do elemento (texto da tarefa)
- [ ] O checkbox alterna a aparencia visual da tarefa (riscado/fundo)
- [ ] O atributo `concluida` e observado no `attributeChangedCallback`
- [ ] O estilo usa `:host` e `:host([concluida="true"])` em vez de classes CSS
- [ ] `texto` foi removido de `observedAttributes`
- [ ] Os estilos internos estao encapsulados no shadow DOM
- [ ] O botao "x" de remover ainda funciona apos a migracao
- [ ] O componente continua funcional quando usado dentro de `<e-lista>`

---

## Questão 8: Projeto — e-lista com renderizacao dinamica

**Conceito-chave:** Projeto — e-lista (Aula 20, Secao 7.2)

**Objetivo:** Criar o componente `<e-lista>` que recebe um array de tarefas via metodo e renderiza cada uma usando `<e-tarefa>` dentro de um Shadow DOM com template interno e DocumentFragment.

**Passos de Execução:**

1. Crie a classe `ELista` estendendo `HTMLElement` com Shadow DOM no construtor.
2. No construtor, crie um `<template>` interno no JavaScript contendo:
   - Estilos encapsulados: borda arredondada de 8px, padding de 16px, margem vertical, sem marcadores de lista, fonte sans-serif
   - Um `<h2>` para o titulo (vazio, preenchido via atributo `titulo` no `attributeChangedCallback`)
   - Um `<slot>` com fallback "Nenhuma tarefa cadastrada ainda."
3. Clone o template com `template.content.cloneNode(true)` e insira no shadow root.
4. Implemente `static get observedAttributes()` para `titulo` e `attributeChangedCallback` para atualizar o `<h2>`.
5. Implemente um metodo `render(tarefas)` que:
   - Recebe um array de strings (descricao das tarefas)
   - Cria um `DocumentFragment` com `document.createDocumentFragment()`
   - Para cada tarefa, cria um `<e-tarefa>` com `document.createElement('e-tarefa')`, define o `textContent` e o atributo `concluida`
   - Insere cada `<e-tarefa>` no fragmento e depois anexa o fragmento ao slot do componente
6. Teste com 4 tarefas: as 3 da aula anterior + "Estudar Shadow DOM".
7. Verifique que o fallback desaparece quando tarefas sao adicionadas ao slot.

**Entrega:** Adicione o componente ao `index.html` do projeto ou crie um arquivo `q8-e-lista.html`.

~~~~html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Q8 - e-lista</title>
</head>
<body>
  <e-lista titulo="Minhas Tarefas"></e-lista>

  <script>
    // Definicao de ETarefa (deve estar presente — versao com Shadow DOM)
    // Definicao de ELista com Shadow DOM + template + DocumentFragment + slot

    // Teste com 4 tarefas
    const tarefas = [
      'Finalizar exercicios da Aula 19',
      'Ler documentacao sobre Web Components',
      'Revisar conceitos de Shadow DOM',
      'Estudar Shadow DOM'
    ];

    const lista = document.querySelector('e-lista');
    lista.render(tarefas);
  </script>
</body>
</html>
~~~~

**Reflexao:** Por que usamos `DocumentFragment` dentro do metodo `render`? Quantas insercoes no DOM aconteceriam se inserissemos cada `<e-tarefa>` individualmente dentro do shadow root em vez de usar o fragmento?

---

## Checklist Final: Pronto para a Aula 21?

Antes de seguir para a Aula 21, verifique se voce consegue realizar cada item abaixo de forma autonoma:

- [ ] 1. Criar elementos DOM com `document.createElement` e inseri-los com `appendChild`
- [ ] 2. Posicionar elementos entre nos existentes com `insertBefore`
- [ ] 3. Clonar elementos com `cloneNode(true)` e diferenciar de `cloneNode(false)`
- [ ] 4. Remover elementos do DOM com `remove()`
- [ ] 5. Usar `DocumentFragment` para insercao em lote e explicar o ganho de performance (reflows)
- [ ] 6. Definir e usar um `<template>` HTML como blueprint reutilizavel de renderizacao
- [ ] 7. Criar um Web Component com Shadow DOM usando `attachShadow` e estilos encapsulados
- [ ] 8. Usar slots nomeados com conteudo fallback em um componente customizado
- [ ] 9. Migrar um componente existente de `innerHTML` para Shadow DOM com slot mantendo a funcionalidade
- [ ] 10. Renderizar uma lista dinamica de componentes usando template e DocumentFragment

**Teaser da Aula 21:** Na proxima aula voce aprendera a trabalhar com formularios HTML — capturar dados do usuario, validar campos e processar submissões com JavaScript. Prepare-se para criar interfaces interativas de captura de dados! Voce aplicara os conceitos de manipulacao do DOM e eventos para construir formularios funcionais e validados.

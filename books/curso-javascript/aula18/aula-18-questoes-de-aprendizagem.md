---
titulo: "JavaScript — Do Zero ao Profissional"
modulo: "01"
aula: "17"
---

# JavaScript — Do Zero ao Profissional Aula 18 — Questões de Aprendizagem

## Como Usar Este Arquivo

Este arquivo é o **checkpoint de aprendizagem** da Aula 18. A pergunta central é: *"eu realmente entendi DOM, seletores, manipulação, navegação e Custom Elements?"*

Cada questão abaixo testa um conceito-chave da aula. Você deve:

1. Fazer as questões **na ordem** (da mais simples à mais integrada)
2. Para cada questão, ler o **Objetivo** e os **Passos de Execução**
3. Preencher o **template de entrega** em uma pasta `entregas-aula-17/`
4. Só consultar a aula novamente SE travar em uma questão

Cada questão indica qual seção da aula principal verifica aquele conceito. Se precisar revisar, vá direto na seção indicada.

---

## Questão 1: Identifique as Relações na Árvore DOM

**Conceito-chave:** Árvore de nós, relações pai/filho/irmão (Aula 18, Seções 1-2).

**Objetivo:** Dado um snippet HTML, identificar as relações de parentesco entre os elementos — quem é pai, filho, irmão e folha.

**Passos de Execução:**

1. Analise o HTML abaixo e identifique cada elemento e sua posição na árvore
2. Preencha a tabela no template indicando para cada elemento: quem é seu pai, quantos filhos tem, quem são seus irmãos
3. Identifique quais elementos são folhas (sem filhos)

HTML de análise:

```html
<div id="container">
    <header>
        <h1>Título da Página</h1>
        <nav>
            <a href="/">Home</a>
            <a href="/sobre">Sobre</a>
        </nav>
    </header>
    <main>
        <article>
            <p>Primeiro parágrafo</p>
            <p>Segundo parágrafo</p>
        </article>
    </main>
    <footer>
        <p>Rodapé</p>
    </footer>
</div>
```

**Entrega:** crie `entregas-aula-17/17-relacoes-arvore.md`:

~~~~
# Questão 1 — Relações na Árvore DOM

## Tabela de Relações

Preencha para os elementos principais:

| Elemento | Pai | Filhos | Irmãos | É folha? |
|---|---|---|---|---|
| `<div id="container">` | | | | |
| `<header>` | | | | |
| `<h1>` | | | | |
| `<nav>` | | | | |
| `<a href="/">` | | | | |
| `<main>` | | | | |
| `<article>` | | | | |
| `<p>Primeiro parágrafo</p>` | | | | |
| `<footer>` | | | | |
| `<p>Rodapé</p>` | | | | |

## Pergunta de Reflexão

Qual elemento é a raiz desta árvore? Por que o `<div id="container">` não é a raiz, mesmo sendo o elemento mais externo no snippet?

## Conclusão

Em 2-3 frases: como o modelo de árvore (pai, filho, irmão) se aplica a este HTML?
~~~~

---

## Questão 2: Use os Seletores Corretos

**Conceito-chave:** `getElementById`, `querySelector`, `querySelectorAll` (Aula 18, Seção 4).

**Objetivo:** Escrever código JavaScript para selecionar elementos específicos em uma página, escolhendo o seletor mais adequado para cada caso.

**Passos de Execução:**

1. Com base no HTML da Questão 1, escreva o código JS para cada tarefa abaixo
2. Teste os seletores no console do navegador (crie um HTML similar ou use qualquer página)
3. Preencha o template com o código e a justificativa da escolha

**Entrega:** crie `entregas-aula-17/17-seletores.md`:

~~~~
# Questão 2 — Seletores

## Tabela de Seleção

Para cada tarefa, escreva o seletor e justifique sua escolha:

| Tarefa | Código JS | Por que este seletor? |
|---|---|---|
| Selecionar o elemento com id="container" | | |
| Selecionar o primeiro `<p>` da página | | |
| Selecionar todos os links `<a>` | | |
| Selecionar o `<h1>` dentro de `<header>` | | |
| Selecionar todos os parágrafos dentro do `<article>` | | |

## Pergunta de Reflexão

Em qual situação você usaria `getElementById` em vez de `querySelector`? Quando `querySelector` é mais adequado?

## Conclusão

Em 2-3 frases: qual a diferença prática entre querySelector e querySelectorAll?
~~~~

---

## Questão 3: Manipule Conteúdo e Atributos

**Conceito-chave:** `textContent`, `innerHTML`, `classList`, `setAttribute` (Aula 18, Seção 5).

**Objetivo:** Modificar elementos de uma página usando as propriedades e métodos de manipulação do DOM.

**Passos de Execução:**

1. Dado o HTML abaixo, escreva código JS que realize cada manipulação
2. Teste no console do navegador (crie um HTML temporário)

HTML de teste:

```html
<h1 id="titulo">Bem-vindo ao meu site</h1>
<p class="descricao">Este site é sobre programação.</p>
<img src="antigo.jpg" alt="Imagem antiga">
<button id="botao">Clique aqui</button>
<input type="text" id="campo" value="">
```

Manipulações necessárias:

1. Mudar o título para "Aprendendo DOM"
2. Adicionar a classe "importante" ao parágrafo
3. Trocar o `src` da imagem para "novo.jpg"
4. Definir o valor do input para "JavaScript é demais!"
5. Usando `innerHTML`, adicionar um `<span style="color:red">Novo!</span>` ao final do título

**Entrega:** crie `entregas-aula-17/17-manipulacao.md`:

~~~~
# Questão 3 — Manipulação

## Código das Manipulações

Escreva o código JS completo:

### 1. Mudar o título

```javascript
// Seu código aqui
```

### 2. Adicionar classe ao parágrafo

```javascript
// Seu código aqui
```

### 3. Trocar src da imagem

```javascript
// Seu código aqui
```

### 4. Definir valor do input

```javascript
// Seu código aqui
```

### 5. Adicionar span com innerHTML

```javascript
// Seu código aqui
```

## Pergunta de Reflexão

Em qual das manipulações acima você precisou tomar cuidado com segurança (XSS)? Por quê?

## Conclusão

Em 2-3 frases: qual a diferença entre usar textContent e innerHTML para alterar o conteúdo de um elemento?
~~~~

---

## Questão 4: Navegue na Árvore DOM

**Conceito-chave:** `parentElement`, `children`, `nextElementSibling` (Aula 18, Seção 6).

**Objetivo:** Percorrer relações entre elementos usando as propriedades de navegação da árvore DOM.

**Passos de Execução:**

1. Dado o HTML abaixo, parta do elemento indicado e navegue até os destinos pedidos
2. Escreva UMA linha de código para cada navegação (combinando propriedades se necessário)

HTML:

```html
<ul id="lista">
    <li>Primeiro</li>
    <li id="alvo">Segundo</li>
    <li>Terceiro</li>
</ul>
```

Navegações:

1. Partindo de `#alvo`, encontre o elemento `<ul>` pai
2. Partindo de `#alvo`, encontre o `<li>` anterior
3. Partindo de `#alvo`, encontre o `<li>` seguinte
4. Partindo de `#alvo`, encontre o ÚLTIMO filho da `<ul>` (dica: você pode combinar propriedades)
5. Partindo de `#alvo`, encontre o primeiro filho da `<ul>` (dica: combine parentElement e children)

**Entrega:** crie `entregas-aula-17/17-navegacao.md`:

~~~~
# Questão 4 — Navegação na Árvore DOM

## Código de Navegação

Para cada navegação, escreva UMA linha de código e o resultado esperado:

| # | Navegação | Código | Resultado (o que a expressão retorna) |
|---|---|---|---|
| 1 | De #alvo para a <ul> pai | | |
| 2 | De #alvo para o <li> anterior | | |
| 3 | De #alvo para o <li> seguinte | | |
| 4 | De #alvo para o último filho da <ul> | | |
| 5 | De #alvo para o primeiro filho da <ul> | | |

## Pergunta de Reflexão

O que acontece se você tentar acessar `nextElementSibling` do último `<li>` da lista? Qual o valor retornado?

## Conclusão

Em 2-3 frases: como a navegação na árvore DOM (sobe, desce, lateral) se relaciona com a analogia da árvore genealógica da Seção 1?
~~~~

---

## Questão 5: Diferencie NodeList de HTMLCollection

**Conceito-chave:** NodeList (estática, com `forEach`) vs HTMLCollection (viva, sem `forEach`) (Aula 18, Seção 4).

**Objetivo:** Explicar e demonstrar na prática a diferença entre NodeList e HTMLCollection, especialmente o comportamento "vivo" vs "estático".

**Passos de Execução:**

1. Crie um HTML simples com uma `<ul>` contendo 2 `<li>`
2. No console, selecione os `<li>` com `querySelectorAll` (NodeList) e com `children` (HTMLCollection)
3. Adicione um novo `<li>` via JavaScript usando `document.createElement` e `appendChild` (apenas para teste)
4. Compare as duas coleções — a NodeList mudou? E a HTMLCollection?
5. Preencha o template

**Entrega:** crie `entregas-aula-17/17-nodelist-vs-htmlcollection.md`:

~~~~
# Questão 5 — NodeList vs HTMLCollection

## Experimento Prático

Descreva os passos que você executou e os resultados observados:

### Passo 1: Selecionar inicialmente

NodeList com querySelectorAll:

```javascript
// Cole os comandos que usou
```

HTMLCollection com children:

```javascript
// Cole os comandos que usou
```

### Passo 2: Adicionar novo elemento

```javascript
// Comando usado para adicionar novo <li>
```

### Passo 3: Comparar após a adição

- A NodeList mudou? ( ) Sim ( ) Não
- A HTMLCollection mudou? ( ) Sim ( ) Não

## Perguntas de Reflexão

1. Por que a HTMLCollection é chamada de "viva"?

2. Em qual situação você preferiria usar querySelectorAll em vez de children?

## Conclusão

Em 2-3 frases: explique a diferença entre NodeList e HTMLCollection e quando usar cada uma.
~~~~

---

## Questão 6: Conecte as Web APIs

**Conceito-chave:** `console`, `document`, `alert` como Web APIs do navegador (Aula 18, Seção 3).

**Objetivo:** Explicar o conceito de Web API e identificar quais ferramentas já usadas em aulas anteriores são, na verdade, Web APIs.

**Passos de Execução:**

1. Revise as ferramentas que você usou da Aula 01 até aqui
2. Identifique quais delas são Web APIs (fornecidas pelo navegador)
3. Preencha a tabela classificando cada ferramenta

**Entrega:** crie `entregas-aula-17/17-web-apis.md`:

~~~~
# Questão 6 — Web APIs

## Classificação de Ferramentas

Para cada ferramenta abaixo, marque se é Web API ou JavaScript puro e justifique:

| Ferramenta | Web API? (Sim/Não) | Nome da API (se Web API) | Justificativa |
|---|---|---|---|
| `console.log()` | | | |
| `alert()` | | | |
| `document.getElementById()` | | | |
| `prompt()` | | | |
| `Math.random()` | | | |
| `Array.push()` | | | |
| `document.querySelector()` | | | |

## Pergunta de Reflexão

Por que é importante saber a diferença entre JavaScript puro e Web APIs? O que muda na prática para o desenvolvedor?

## Conclusão

Em 2-3 frases: o que são Web APIs e qual a relação delas com o navegador?
~~~~

---

## Questão 7: Crie um Custom Element Simples

**Conceito-chave:** `customElements.define()`, `extends HTMLElement`, `connectedCallback` (Aula 18, Seção 7).

**Objetivo:** Definir e usar um Custom Element do zero, seguindo os três passos: classe, registro e uso no HTML.

**Passos de Execução:**

1. Crie um Custom Element `<e-mensagem>` que recebe um atributo `tipo` ("sucesso", "erro" ou "aviso")
2. Na `connectedCallback`, renderize uma `<div>` com a classe correspondente ao tipo e o texto do conteúdo do elemento
3. Registre com `customElements.define()`
4. Use no HTML: `<e-mensagem tipo="sucesso">Operação concluída!</e-mensagem>`
5. Adicione CSS básico para cada tipo (fundo verde para sucesso, vermelho para erro, amarelo para aviso)

**Entrega:** crie `entregas-aula-17/17-custom-element.md`:

~~~~
# Questão 7 — Custom Element e-mensagem

## Código completo

### HTML

```html
<!-- Seu HTML com o uso do componente -->
```

### CSS

```css
/* Seus estilos */
```

### JavaScript

```javascript
// Definição da classe e registro
```

## Verificação

O componente renderizou corretamente no navegador? ( ) Sim ( ) Não

## Pergunta de Reflexão

Por que o nome do elemento PRECISA ter hífen? O que aconteceria se você tentasse registrar um elemento sem hífen?

## Conclusão

Em 2-3 frases: quais são os 3 passos para criar um Custom Element e como ele se conecta com o que você aprendeu sobre classes na Aula 16?
~~~~

---

## Questão 8: Renderize Tarefas com e-tarefa (Projeto Progressivo)

**Conceito-chave:** Integração: `GerenciadorTarefas` (Aula 16) + Custom Element + DOM API (Aula 18, Seções 4-7).

**Objetivo:** Conectar a classe `GerenciadorTarefas` (Aula 16) com o componente `<e-tarefa>` (Aula 18) para renderizar a lista de tarefas no DOM.

**Passos de Execução:**

1. Certifique-se de que tem a classe `GerenciadorTarefas` do arquivo da Aula 16 (ou crie uma versão simplificada com métodos `adicionar(texto)`, `listar()` e `marcarConcluida(id)`)
2. Defina o Custom Element `<e-tarefa>` (como na Mão na Massa 4 da Seção 7)
3. Crie uma página HTML com `<div id="app">` e um `<script>` que:
   a. Instancia o `GerenciadorTarefas`
   b. Adiciona 4 tarefas diferentes
   c. Usa `document.querySelector("#app")` para achar o container
   d. Para cada tarefa de `gerenciador.listar()`, usa `document.createElement("e-tarefa")`, configura atributos com `setAttribute` e insere no container com `appendChild`
4. Abra a página no navegador e verifique se as tarefas aparecem

**Entrega:** crie `entregas-aula-17/17-projeto-tarefas.md`:

~~~~
# Questão 8 — Projeto: Renderizar Tarefas com e-tarefa

## Código completo

### HTML completo (index.html)

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Gerenciador de Tarefas</title>
    <style>
        /* Seus estilos */
    </style>
</head>
<body>
    <!-- Seu HTML -->
    <script>
        // Seu código completo aqui
    </script>
</body>
</html>
```

### Explicação do código

Explique o que cada parte do seu script faz:

1. **Instanciar o GerenciadorTarefas:**
   (sua explicação)

2. **Adicionar tarefas:**
   (sua explicação)

3. **Selecionar container:**
   (sua explicação)

4. **Iterar e criar elementos:**
   (sua explicação)

## Verificação

- [ ] As 4 tarefas aparecem na página
- [ ] Cada tarefa mostra o texto correto
- [ ] Se alguma tarefa estiver marcada como concluída, o checkbox aparece marcado
- [ ] O estilo condicional (fundo verde/amarelo) funciona

## Pergunta de Reflexão

O que muda se você chamar `gerenciador.adicionar()` APÓS renderizar a lista? As novas tarefas aparecem automaticamente? Por quê? (Dica: pense em quem controla os dados e quem controla a visualização.)

## Conclusão

Em 3-5 frases: descreva como a Aula 16 (classes, GerenciadorTarefas) e a Aula 18 (DOM, Custom Elements) se integram neste projeto. Qual o papel de cada uma?
~~~~

---

## Checklist Final: Pronto para a Aula 19?

Marque cada item só quando conseguir fazê-lo **sem consultar a aula**:

- [ ] **Explicar** o DOM como uma árvore hierárquica de nós (pai, filho, irmão, raiz, folha)
- [ ] **Identificar** `document` e `console` como Web APIs do navegador
- [ ] **Selecionar** elementos com `getElementById`, `querySelector` e `querySelectorAll`
- [ ] **Distinguir** NodeList (estática) de HTMLCollection (viva)
- [ ] **Manipular** conteúdo com `textContent` e `innerHTML` (sabendo quando usar cada um)
- [ ] **Manipular** atributos com `setAttribute`, `getAttribute` e `classList`
- [ ] **Navegar** na árvore com `parentElement`, `children`, `nextElementSibling`
- [ ] **Definir** um Custom Element com classe `extends HTMLElement`, `connectedCallback` e `customElements.define()`
- [ ] **Construir** o componente `<e-tarefa>` que renderiza uma tarefa no DOM
- [ ] **Integrar** o `GerenciadorTarefas` com o DOM usando seletores e Custom Elements

> *Acertou todos? Você está pronto para a Aula 19, onde vai aprender sobre **eventos** (clique, teclado, formulário) e o **ciclo de vida completo** dos Custom Elements — seu `<e-tarefa>` vai ganhar interatividade! Travou em algum? Releia a seção indicada na questão correspondente antes de avançar.*

---
titulo: "JavaScript — Do Zero ao Profissional"
modulo: "01"
aula: "18"
---

# JavaScript — Do Zero ao Profissional Aula 19 — Questões de Aprendizagem

## Como Usar Este Arquivo

Este arquivo é o **checkpoint de aprendizagem** da Aula 19. A pergunta central é: *"eu realmente entendi eventos, propagação, delegação e ciclo de vida do Custom Element?"*

Cada questão abaixo testa um conceito-chave da aula. Você deve:

1. Fazer as questões **na ordem** (da mais simples à mais integrada)
2. Para cada questão, ler o **Objetivo** e os **Passos de Execução**
3. Preencher o **template de entrega** em uma pasta `entregas-aula-18/`
4. Só consultar a aula novamente SE travar em uma questão

Cada questão indica qual seção da aula principal verifica aquele conceito. Se precisar revisar, vá direto na seção indicada.

---

## Questão 1: Explique o Modelo de Eventos

**Conceito-chave:** Emissor, ouvinte, callback e programação orientada a eventos (Aula 19, Seção 1).

**Objetivo:** Explicar com suas palavras os três papéis do modelo de eventos e dar um exemplo do mundo real diferente dos usados na aula.

**Passos de Execução:**

1. Defina, com suas palavras, o que é programação orientada a eventos
2. Identifique e explique os três papéis: emissor, ouvinte e callback
3. Crie um exemplo do mundo real (diferente de campainha e elevador) que ilustra os três papéis
4. Explique como esse modelo difere da programação sequencial

**Entrega:** crie `entregas-aula-18/18-modelo-eventos.md`:

~~~~
# Questão 1 — Modelo de Eventos

## Definição

Em suas palavras, o que é programação orientada a eventos?

(escreva aqui)

## Os Três Papéis

| Papel | O que é | Exemplo no seu cenário |
|---|---|---|
| Emissor | | |
| Ouvinte | | |
| Callback | | |

## Exemplo do Mundo Real

Descreva um cenário cotidiano (diferente de campainha, elevador ou sensor de mercado) que ilustra os três papéis:

Cenário escolhido: (descreva)

- Qual é o evento?
- Quem é o emissor?
- Quem é o ouvinte?
- Qual é o callback?

## Programação Sequencial vs Orientada a Eventos

Qual a principal diferença entre os dois modelos? Em que situações cada um é mais adequado?

## Conclusão

Em 2-3 frases: por que o modelo de eventos é essencial para criar programas interativos?
~~~~

---

## Questão 2: Pratique addEventListener com 3 Tipos

**Conceito-chave:** Sintaxe do addEventListener e tipos de evento (Aula 19, Seção 2).

**Objetivo:** Criar uma página HTML que usa três tipos diferentes de evento (click, keydown, input) em um único script.

**Passos de Execução:**

1. Crie uma página HTML com um <button>, um <input type="text"> e um <p id="output">
2. Adicione um listener de click no botão que escreva "Botão clicado!" no parágrafo
3. Adicione um listener de keydown no document que, se a tecla for 'Escape', limpe o texto do input
4. Adicione um listener de input no campo de texto que mostre no parágrafo o número de caracteres digitados
5. Teste cada funcionalidade no navegador

**Entrega:** crie `entregas-aula-18/18-tres-eventos.md`:

~~~~
# Questão 2 — Três Tipos de Evento

## Código HTML Completo

```html
<!-- Cole aqui seu HTML completo -->
```

## Código JavaScript

```javascript
// Cole aqui seu JS completo
```

## Testes Realizados

Marque os itens que funcionaram:

- [ ] Clique no botão mostra "Botão clicado!" no parágrafo
- [ ] Pressionar ESC limpa o campo de texto
- [ ] Digitar no input mostra o número de caracteres em tempo real

## Pergunta de Reflexão

Por que o listener de keydown foi adicionado no document e não no input? O que mudaria se você o colocasse no input?

## Conclusão

Em 2-3 frases: qual a utilidade de ter múltiplos tipos de evento no mesmo programa?
~~~~

---

## Questão 3: Use event.target e preventDefault

**Conceito-chave:** Objeto event: target, key, preventDefault (Aula 19, Seção 3).

**Objetivo:** Criar um programa que usa event.target para identificar qual elemento foi clicado E event.preventDefault() para bloquear um link.

**Passos de Execução:**

1. Crie uma página HTML com:
   - Três <button> com textos diferentes (ex: "Ação 1", "Ação 2", "Ação 3")
   - Um <a href="https://example.com"> com texto "Link exemplo"
   - Um <p id="log"> para exibir mensagens
2. Adicione UM listener de click no document
3. Dentro do callback:
   - Se o event.target for um botão, exiba o texto do botão no parágrafo de log
   - Se o event.target for o link, chame event.preventDefault() e exiba "Link bloqueado!" no parágrafo
4. Teste: clique nos botões e no link

**Entrega:** crie `entregas-aula-18/18-target-padrao.md`:

~~~~
# Questão 3 — target e preventDefault

## Código HTML Completo

```html
<!-- Cole aqui seu HTML completo -->
```

## Código JavaScript

```javascript
// Cole aqui seu JS completo
```

## Testes Realizados

Marque os itens que funcionaram:

- [ ] Clique em "Ação 1" mostra "Ação 1" no log
- [ ] Clique em "Ação 2" mostra "Ação 2" no log
- [ ] Clique em "Ação 3" mostra "Ação 3" no log
- [ ] Clique no link mostra "Link bloqueado!" e não navega

## Pergunta de Reflexão

Por que UM listener no document consegue detectar cliques em elementos diferentes? Qual propriedade do objeto event torna isso possível?

## Conclusão

Em 2-3 frases: qual a vantagem de usar event.target em vez de adicionar listeners individuais em cada botão?
~~~~

---

## Questão 4: Demonstre Bubbling

**Conceito-chave:** Propagação — fases de captura e bubbling (Aula 19, Seção 4).

**Objetivo:** Criar elementos HTML aninhados e demonstrar a ordem de execução dos listeners nas fases de captura e bubbling.

**Passos de Execução:**

1. Crie uma página com três divs aninhadas (como na Mão na Massa 3): #externo > #meio > #interno
2. Adicione listeners de click em cada div na fase de bubbling (padrão)
3. Adicione listeners de click em cada div na fase de captura (true)
4. Adicione um listener de click no document também (bubbling)
5. Clique na div mais interna e registre a ordem exata dos console.log

**Entrega:** crie `entregas-aula-18/18-propagacao.md`:

~~~~
# Questão 4 — Propagação de Eventos

## Código HTML Completo

```html
<!-- Cole aqui seu HTML completo com as 3 divs -->
```

## Código JavaScript

```javascript
// Cole aqui seu JS completo com todos os listeners
```

## Ordem Observada

Preencha a ordem dos console.log quando você clica na div #interno:

1. (exemplo: Externo captura)
2.
3.
4.
5.
6.
7.
8. (document bubbling -- se aplicável)

## Análise

Responda:

a) Por que os listeners de captura executam antes dos de bubbling?

b) Se você adicionar event.stopPropagation() no listener de bubbling da div #meio, quais linhas da ordem acima deixam de aparecer?

## Conclusão

Em 2-3 frases: como o conhecimento de bubbling ajuda a entender a delegação de eventos?
~~~~

---

## Questão 5: Implemente Delegação em Lista Dinâmica

**Conceito-chave:** Delegação de eventos — listener no pai, event.target, closest (Aula 19, Seção 5).

**Objetivo:** Criar uma lista onde o clique em cada item é tratado por UM único listener no pai, e novos itens adicionados dinamicamente também funcionam.

**Passos de Execução:**

1. Crie uma página com <ul id="tarefas"> contendo 3 <li> iniciais
2. Crie um <input> e um botão "Adicionar" para adicionar novas tarefas
3. Adicione UM listener de click no <ul> que:
   - Usa event.target.closest('li') para identificar o item clicado
   - Alterna a classe .concluida no item (risca o texto)
   - Mostra no console o texto do item clicado
4. Adicione novas tarefas e verifique que elas também respondem ao clique

**Entrega:** crie `entregas-aula-18/18-delegacao.md`:

~~~~
# Questão 5 — Delegação de Eventos

## Código HTML Completo

```html
<!-- Cole aqui seu HTML completo -->
```

## Código JavaScript

```javascript
// Cole aqui seu JS completo
```

## Testes Realizados

Marque os itens que funcionaram:

- [ ] Clique em um item existente alterna a classe .concluida
- [ ] O console mostra o texto do item clicado
- [ ] Novos itens adicionados também respondem ao clique
- [ ] Ao listar no console os listeners (via DevTools), aparece apenas 1 listener no UL

## Pergunta de Reflexão

Compare com uma abordagem sem delegação (listener em cada li). Quais as desvantagens dessa abordagem e como a delegação resolve cada uma?

## Conclusão

Em 2-3 frases: explique como o bubbling e o event.target trabalham juntos para viabilizar a delegação.
~~~~

---

## Questão 6: Ciclo de Vida — Adicionar e Remover Listeners

**Conceito-chave:** connectedCallback e disconnectedCallback (Aula 19, Seção 6).

**Objetivo:** Demonstrar que listeners são adicionados no connectedCallback e removidos no disconnectedCallback, prevenindo memory leaks.

**Passos de Execução:**

1. Crie um Custom Element <meu-botao> que:
   - Extende HTMLElement
   - No connectedCallback, renderiza um <button> e adiciona um listener de click nele
   - O listener incrementa um contador e atualiza o texto do botão
   - O listener é armazenado como propriedade de classe (_handleClick)
   - No disconnectedCallback, remove o listener com removeEventListener
2. Registre o elemento com customElements.define
3. Na página, tenha um <meu-botao> e um botão "Remover" que chama elemento.remove()
4. Abra o DevTools e verifique que após remover, não há erros e o listener foi removido

**Entrega:** crie `entregas-aula-18/18-ciclo-vida-listeners.md`:

~~~~
# Questão 6 — Adicionar e Remover Listeners

## Código HTML Completo

```html
<!-- Cole aqui seu HTML completo -->
```

## Código JavaScript

```javascript
// Cole aqui a definição completa do Custom Element
```

## Testes Realizados

Marque os itens que funcionaram:

- [ ] Botão aparece e incrementa contador ao clicar
- [ ] Ao clicar "Remover", o elemento some da tela
- [ ] No console do DevTools (Elements > Event Listeners), o listener do botão removido não aparece mais

## Pergunta de Reflexão

O que aconteceria se você NÃO implementasse o disconnectedCallback? Em que tipo de aplicação isso se tornaria um problema grave?

## Conclusão

Em 2-3 frases: por que o par connectedCallback + disconnectedCallback forma um padrão inseparável quando se trabalha com event listeners em Custom Elements?
~~~~

---

## Questão 7: Reatividade com attributeChangedCallback

**Conceito-chave:** observedAttributes e attributeChangedCallback (Aula 19, Seção 6).

**Objetivo:** Criar um Custom Element que reage a mudanças de atributo, atualizando sua aparência automaticamente.

**Passos de Execução:**

1. Crie um Custom Element <meu-card> que:
   - Declara static observedAttributes = ['data-cor', 'data-titulo']
   - No connectedCallback, renderiza um HTML com um título e um fundo colorido
   - No attributeChangedCallback, quando data-cor muda, altera a cor de fundo; quando data-titulo muda, altera o texto do título
2. Na página, tenha um <meu-card> e dois botões: "Mudar Cor" e "Mudar Título"
3. Cada botão chama setAttribute no elemento para mudar o atributo correspondente
4. Verifique que a interface atualiza automaticamente sem recarregar a página

**Entrega:** crie `entregas-aula-18/18-reatividade-atributo.md`:

~~~~
# Questão 7 — Reatividade com attributeChangedCallback

## Código HTML Completo

```html
<!-- Cole aqui seu HTML completo -->
```

## Código JavaScript

```javascript
// Cole aqui a definição completa do Custom Element
```

## Testes Realizados

Marque os itens que funcionaram:

- [ ] O card aparece com a cor e título iniciais
- [ ] Clicar em "Mudar Cor" altera a cor de fundo
- [ ] Clicar em "Mudar Título" altera o texto do título
- [ ] Mudar manualmente pelo console também funciona: document.querySelector('meu-card').setAttribute('data-cor', 'blue')

## Pergunta de Reflexão

Por que o attributeChangedCallback NÃO é chamado quando o elemento é criado com os atributos já presentes no HTML (ex: <meu-card data-cor="red">)?

## Conclusão

Em 2-3 frases: como o attributeChangedCallback resolve o problema de "renderização única" dos Custom Elements que você tinha na Aula 18?
~~~~

---

## Questão 8: Projeto — e-tarefa Interativo (Projeto Progressivo)

**Conceito-chave:** Integração completa do e-tarefa com eventos e ciclo de vida (Aula 19, Seção 6 + Projeto).

**Objetivo:** Transformar o <e-tarefa> estático da Aula 18 em um componente interativo que reage a cliques e a mudanças externas de atributos.

**Passos de Execução:**

1. Parta do código do <e-tarefa> que você criou na Aula 18 (ou use o gabarito do Desafio da Aula 19 como referência)
2. Adicione static observedAttributes = ['data-concluida', 'data-texto']
3. No connectedCallback, renderize o HTML (checkbox + texto) e adicione um listener de change no checkbox que inverte data-concluida
4. Use o padrão de propriedade de classe para o listener (_handleToggle = (event) => { ... }) -- isso permite que o removeEventListener funcione corretamente
5. Implemente attributeChangedCallback: quando data-concluida mudar, atualize a classe CSS; quando data-texto mudar, atualize o texto do span
6. Implemente disconnectedCallback removendo o listener de change do checkbox
7. Crie uma página que tenha 3 <e-tarefa> no HTML e um botão que adiciona mais um via document.createElement
8. Teste no DevTools: selecione um <e-tarefa> e execute $0.setAttribute('data-concluida', 'true') -- a aparência deve atualizar automaticamente

**Entrega:** crie `entregas-aula-18/18-projeto-e-tarefa-interativo.md`:

~~~~
# Questão 8 — Projeto: e-tarefa Interativo

## Código HTML Completo

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>e-tarefa Interativo</title>
    <style>
        /* Seus estilos aqui */
        .concluida span {
            text-decoration: line-through;
            opacity: 0.6;
        }
    </style>
</head>
<body>
    <!-- Seus 3 e-tarefa iniciais + botão Adicionar aqui -->

    <script>
        // Definição completa do ETarefa aqui
    </script>
</body>
</html>
```

## Código do Componente

```javascript
// Cole aqui a definição completa da classe ETarefa
```

## Explicação

Explique o papel de cada método do ciclo de vida:

| Método | Quando é chamado | O que faz no e-tarefa |
|---|---|---|
| connectedCallback | | |
| attributeChangedCallback | | |
| disconnectedCallback | | |

## Testes Realizados

Marque os itens que funcionaram:

- [ ] Os 3 e-tarefa aparecem na página
- [ ] Clicar no checkbox de uma tarefa risca/desrisca o texto
- [ ] Mudar data-concluida via DevTools atualiza a aparência
- [ ] Mudar data-texto via DevTools atualiza o texto
- [ ] "Adicionar Tarefa" cria um novo e-tarefa funcional
- [ ] Remover um e-tarefa não gera erros no console

## Pergunta de Reflexão

Compare o <e-tarefa> da Aula 18 (estático, sem eventos) com o da Aula 19 (interativo, com ciclo de vida). O que exatamente mudou? Liste 3 diferenças concretas.

## Conclusão

Em 3-5 frases: descreva como a combinação de eventos (addEventListener) e ciclo de vida (connectedCallback, attributeChangedCallback, disconnectedCallback) transforma um componente visual estático em um componente interativo e reativo.
~~~~

---

## Checklist Final: Pronto para a Aula 20?

Marque cada item só quando conseguir fazê-lo **sem consultar a aula**:

- [ ] **Explicar** o modelo de eventos com os 3 papéis (emissor, ouvinte, callback) usando uma analogia
- [ ] **Aplicar** addEventListener com diferentes tipos de evento (click, keydown, input, submit, etc.)
- [ ] **Usar** event.target para identificar o elemento que disparou o evento
- [ ] **Usar** event.preventDefault() para cancelar comportamentos padrão do navegador
- [ ] **Descrever** as 3 fases da propagação (captura, target, bubbling) e a ordem de execução
- [ ] **Aplicar** delegação de eventos -- um listener no pai para múltiplos filhos (presentes e futuros)
- [ ] **Implementar** connectedCallback com event listeners em um Custom Element
- [ ] **Implementar** disconnectedCallback com removeEventListener para prevenir memory leaks
- [ ] **Configurar** observedAttributes e attributeChangedCallback para reatividade
- [ ] **Integrar** eventos e ciclo de vida no e-tarefa -- checkbox funcional e reatividade a atributos

> *Acertou todos? Você está pronto para a Aula 20, onde vai aprender sobre Shadow DOM (encapsulamento total da estrutura interna), <template> (conteúdo inerte reutilizável) e document.createElement com appendChild -- seu e-tarefa vai ganhar o encapsulamento que falta para ser um componente profissional. Travou em algum? Releia a seção indicada na questão correspondente antes de avançar.*

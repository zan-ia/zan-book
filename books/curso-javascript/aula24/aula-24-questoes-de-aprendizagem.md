---
titulo: "JavaScript — Do Zero ao Profissional"
modulo: "01"
aula: "24"
---

# JavaScript — Do Zero ao Profissional Aula 24 — Questões de Aprendizagem

## Como Usar Este Arquivo

Este arquivo contém as questões de aprendizagem da Aula 24. Cada questão é um checkpoint que verifica se você dominou um conceito específico — **faça sem consultar o conteúdo principal**. Resolva na ordem apresentada, criando uma pasta `entregas-aula-24/` dentro do seu diretório de exercícios. Para cada questão, salve um arquivo separado com o nome sugerido (ex.: `q1-estrategia-deteccao.md`). As respostas esperadas estão no arquivo principal da aula — consulte-as após tentar resolver por conta própria. Cada questão inclui o conceito-chave verificado (com referência à seção da aula), objetivo, passos de execução e um template de entrega para você preencher.

---

## Questão 1: Decidindo a Estratégia — Polling, Evento ou Observer

**Conceito-chave:** Três estratégias de detecção de mudanças — polling, eventos e observers (Aula 24, Seção 1).

**Objetivo:** Decidir qual estratégia (polling, evento ou observer) usar para cada cenário real e justificar sua escolha com base nas características da detecção.

**Passos de Execução:**

1. Leia cada cenário abaixo
2. Decida se a melhor estratégia é: **polling**, **evento** ou **observer**
3. Justifique sua resposta considerando: o que está sendo detectado, latência esperada e custo computacional
4. Preencha o template de entrega

**Entrega:** crie `entregas-aula-24/q1-estrategia-deteccao.md`:

~~~~
# Questão 1 — Polling, Evento ou Observer

Preencha a tabela abaixo para cada cenário:

| Cenário | Estratégia escolhida | Justificativa |
|---|---|---|
| Chat ao vivo — novas mensagens aparecem sem o usuário fazer nada | | |
| Galeria de fotos — carregar imagem apenas quando o usuário estiver prestes a vê-la | | |
| Botão de "dark mode" — alterna tema e salva preferência | | |
| Editor de texto com contador de palavras — atualizar contagem conforme o usuário digita | | |
| Dashboard de monitoramento — verificar a cada 30s se novos dados chegaram no servidor | | |

## Conclusão

Em 2-3 frases, explique em que situação você escolheria **observer** em vez de **evento**, e vice-versa.
~~~~

---

## Questão 2: Criando um IntersectionObserver Básico

**Conceito-chave:** IntersectionObserver API — observe(), threshold, isIntersecting (Aula 24, Seção 2).

**Objetivo:** Criar um IntersectionObserver que detecta quando um elemento-alvo entra na viewport e exibe uma mensagem no console.

**Passos de Execução:**

1. Crie um HTML com uma div alta (1500px) e um elemento-alvo no final
2. Crie um IntersectionObserver observando o alvo com `threshold: 0`
3. Quando `entry.isIntersecting` for true, exiba "Alvo entrou na viewport!" no console
4. Quando for false, exiba "Alvo saiu da viewport!"
5. Teste: role a página e veja as mensagens no console

**Entrega:** crie `entregas-aula-24/q2-intersection-basico.html`:

~~~~html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Q2 — IntersectionObserver Básico</title>
  <style>
    .espaco { height: 1500px; background: #f0f0f0; display: flex; align-items: center; justify-content: center; }
    #alvo { height: 200px; background: #4caf50; color: white; display: flex; align-items: center; justify-content: center; font-size: 2rem; border-radius: 8px; }
  </style>
</head>
<body>
  <div class="espaco">Role para baixo</div>
  <div id="alvo">Elemento Alvo</div>
  <div class="espaco">Fim da página</div>
  <script>
    const alvo = document.getElementById('alvo');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // Se entry.isIntersecting: console.log('Alvo entrou na viewport!')
        // Senão: console.log('Alvo saiu da viewport!')
      });
    }, { threshold: 0 });
    observer.observe(alvo);
  </script>
</body>
</html>
~~~~

**Reflexão:** O que acontece se você mudar `threshold` para `1` com um elemento mais alto que a viewport? Explique.

---

## Questão 3: Lazy Loading de Imagens com IntersectionObserver

**Conceito-chave:** IntersectionObserver aplicado — lazy loading com data-src (Aula 24, Seção 2).

**Objetivo:** Implementar lazy loading de imagens — carregar a imagem real apenas quando ela entra na viewport, usando `data-src` e `IntersectionObserver`.

**Passos de Execução:**

1. Crie uma galeria com 6 imagens usando `data-src` em vez de `src`
2. Crie um IntersectionObserver com `rootMargin: '200px'`
3. No callback: troque `data-src` por `src` quando `entry.isIntersecting` for true
4. Após carregar, chame `observer.unobserve(entry.target)`
5. Teste: role e veja as imagens carregando sob demanda

**Entrega:** crie `entregas-aula-24/q3-lazy-loading.html`:

~~~~html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Q3 — Lazy Loading de Imagens</title>
  <style>
    body { font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; }
    .galeria { display: flex; flex-direction: column; gap: 20px; }
    img.lazy { width: 100%; height: 300px; object-fit: cover; border-radius: 8px; background: #ddd; }
    img.lazy.carregada { background: none; }
  </style>
</head>
<body>
  <h1>Galeria com Lazy Loading</h1>
  <div class="galeria">
    <img class="lazy" data-src="https://picsum.photos/600/400?random=1" alt="Img 1">
    <img class="lazy" data-src="https://picsum.photos/600/400?random=2" alt="Img 2">
    <img class="lazy" data-src="https://picsum.photos/600/400?random=3" alt="Img 3">
    <img class="lazy" data-src="https://picsum.photos/600/400?random=4" alt="Img 4">
    <img class="lazy" data-src="https://picsum.photos/600/400?random=5" alt="Img 5">
    <img class="lazy" data-src="https://picsum.photos/600/400?random=6" alt="Img 6">
  </div>
  <script>
    const lazyObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // Se entry.isIntersecting:
        //   1. img.src = img.dataset.src
        //   2. img.onload = () => img.classList.add('carregada')
        //   3. lazyObserver.unobserve(img)
      });
    }, { rootMargin: '200px' });
    document.querySelectorAll('img.lazy').forEach((img) => lazyObserver.observe(img));
  </script>
</body>
</html>
~~~~

**Verificação:** DevTools > Network — imagens carregam apenas quando você rola até perto delas (200px antes, graças ao `rootMargin`).

---

## Questão 4: Layout Responsivo com ResizeObserver

**Conceito-chave:** ResizeObserver — detectar mudanças de tamanho e adaptar layout dinamicamente (Aula 24, Seção 3).

**Objetivo:** Criar um card que muda de layout baseado no tamanho do container usando ResizeObserver: se largura > 400px, layout lado a lado; se <= 400px, layout empilhado.

**Passos de Execução:**

1. Crie um card com imagem e texto
2. Crie um ResizeObserver que observa o card
3. Se `contentRect.width > 400px`: adicione `card-horizontal`, remova `card-vertical`
4. Se `width <= 400px`: adicione `card-vertical`, remova `card-horizontal`
5. Teste: redimensione a janela e veja o layout alternar

**Entrega:** crie `entregas-aula-24/q4-resize-card.html`:

~~~~html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Q4 — Card Responsivo com ResizeObserver</title>
  <style>
    body { font-family: Arial, sans-serif; display: flex; justify-content: center; padding: 40px; }
    .container { width: 80%; max-width: 900px; resize: horizontal; overflow: auto; border: 2px dashed #ccc; padding: 16px; }
    .card { display: flex; gap: 16px; background: #f9f9f9; border-radius: 8px; padding: 16px; transition: all 0.3s; }
    .card img { width: 150px; height: 150px; object-fit: cover; border-radius: 8px; }
    .card .texto { flex: 1; }
    .card-horizontal { flex-direction: row; }
    .card-vertical { flex-direction: column; }
    .card-vertical img { width: 100%; height: 200px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="card card-horizontal" id="card">
      <img src="https://picsum.photos/200/200" alt="Card img">
      <div class="texto">
        <h2>Título do Card</h2>
        <p>Redimensione a janela para ver o layout alternar entre horizontal e vertical.</p>
      </div>
    </div>
  </div>
  <script>
    const card = document.getElementById('card');
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width } = entry.contentRect;
        // Se width > 400: card-horizontal, remova card-vertical
        // Senão: card-vertical, remova card-horizontal
      }
    });
    resizeObserver.observe(card);
  </script>
</body>
</html>
~~~~

**Reflexão:** Qual a diferença entre observar o card com ResizeObserver e usar `window.addEventListener('resize', ...)`? Em que cenário o ResizeObserver detecta uma mudança que `window.onresize` não detectaria?

---

## Questão 5: Contador de Itens com MutationObserver

**Conceito-chave:** MutationObserver — childList, addedNodes, removedNodes e prevenção de loop infinito (Aula 24, Seção 4).

**Objetivo:** Criar uma lista onde o MutationObserver conta quantos `<li>` existem e atualiza um contador automaticamente quando itens são adicionados ou removidos, sem cair em loop infinito.

**Passos de Execução:**

1. Crie uma página com `<ul id="lista">` e botões "Adicionar Item" e "Remover Último"
2. Adicione MutationObserver com `{ childList: true }` observando a lista
3. No callback: conte os `<li>` e atualize o contador
4. Use flag `atualizando` para prevenir loop infinito
5. Exiba no console adições e remoções
6. Teste: adicione 3, remova 2 — contador deve refletir exatamente

**Entrega:** crie `entregas-aula-24/q5-mutation-contador.html`:

~~~~html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Q5 — Contador com MutationObserver</title>
  <style>
    body { font-family: Arial, sans-serif; max-width: 500px; margin: 0 auto; padding: 20px; }
    .acoes { display: flex; gap: 8px; margin-bottom: 16px; }
    button { padding: 8px 16px; cursor: pointer; border: none; border-radius: 4px; }
    #btn-adicionar { background: #4caf50; color: white; }
    #btn-remover { background: #f44336; color: white; }
    #contador { font-weight: bold; font-size: 1.2rem; margin-bottom: 16px; }
    ul { list-style: none; padding: 0; }
    li { padding: 8px; background: #e3f2fd; margin-bottom: 4px; border-radius: 4px; }
  </style>
</head>
<body>
  <h1>Lista com Contador Automático</h1>
  <div class="acoes">
    <button id="btn-adicionar">Adicionar Item</button>
    <button id="btn-remover">Remover Último</button>
  </div>
  <div id="contador">0 item(ns)</div>
  <ul id="lista"></ul>
  <script>
    const lista = document.getElementById('lista');
    const contador = document.getElementById('contador');
    let contadorItens = 0;
    let atualizando = false;

    const observer = new MutationObserver((mutations) => {
      if (atualizando) return;
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach((n) => {
            if (n.tagName === 'LI') console.log('Adicionado:', n.textContent);
          });
          mutation.removedNodes.forEach((n) => {
            if (n.tagName === 'LI') console.log('Removido:', n.textContent);
          });
        }
      });
      atualizando = true;
      contador.textContent = lista.querySelectorAll('li').length + ' item(ns)';
      atualizando = false;
    });

    observer.observe(lista, { childList: true });

    document.getElementById('btn-adicionar').addEventListener('click', () => {
      contadorItens++;
      const li = document.createElement('li');
      li.textContent = 'Item ' + contadorItens;
      lista.appendChild(li);
    });

    document.getElementById('btn-remover').addEventListener('click', () => {
      const ultimo = lista.lastElementChild;
      if (ultimo) lista.removeChild(ultimo);
    });
  </script>
</body>
</html>
~~~~

**Verificação:** Adicione 3 itens — console mostra cada adição, contador "3 item(ns)". Remova 1 — console mostra remoção, contador "2 item(ns)". Sem loop infinito.

---

## Questão 6: Scroll Infinito no Gerenciador

**Conceito-chave:** Projeto progressivo — scroll infinito com IntersectionObserver + IndexedDB (Aula 24, Seções 2 e 4).

**Objetivo:** Implementar scroll infinito no Gerenciador de Tarefas usando IntersectionObserver e carregar lotes do IndexedDB sob demanda.

**Passos de Execução:**

1. Abra seu Gerenciador de Tarefas (versão com IndexedDB da Aula 23)
2. Adicione um elemento **sentinela** (1px, transparente) no final da lista
3. Crie um IntersectionObserver observando a sentinela com `threshold: 0`
4. Implemente `#carregarMaisTarefas()` que busca do IndexedDB com cursor, offset e limite (15)
5. Quando a sentinela entrar na viewport e `#temMais` for true, carregue o próximo lote
6. Atualize `#offset` após cada carga; se menos de 15 voltarem, `#temMais = false`
7. Quando não houver mais tarefas, remova a sentinela
8. Desconecte o observer no `disconnectedCallback`
9. Teste com 40+ tarefas

**Entrega:** crie `entregas-aula-24/q6-scroll-infinito.md`:

~~~~
# Questão 6 — Scroll Infinito no Gerenciador

## Checklist de implementação

- [ ] Elemento sentinela criado no final da lista (1px, transparente)
- [ ] Variáveis `#offset`, `#limite` (15) e `#temMais` adicionadas à classe
- [ ] IntersectionObserver criado no `connectedCallback` observando a sentinela
- [ ] `#carregarMaisTarefas()` implementado com `openCursor`, offset e limite
- [ ] Tarefas carregadas inseridas antes da sentinela com `insertBefore`
- [ ] `#offset` atualizado após cada carga
- [ ] `#temMais` = false quando lote tem menos de 15 itens
- [ ] Sentinela removida quando `#temMais` = false
- [ ] `observer.disconnect()` no `disconnectedCallback`
- [ ] Testado com 40+ tarefas

## Teste

Tarefas adicionadas: ________
Primeira carga: ________
Cargas adicionais necessárias: ________
Sentinela removida ao fim: [Sim / Não]
Erro no console: [Sim / Não]

## Reflexão

O que aconteceria se você usasse `threshold: 1` no IntersectionObserver da sentinela? Explique por que `threshold: 0` é a escolha correta aqui.
~~~~

---

## Questão 7: Layout Responsivo + Contador Automático no Gerenciador

**Conceito-chave:** Projeto progressivo — ResizeObserver e MutationObserver no Gerenciador de Tarefas (Aula 24, Seções 3 e 4).

**Objetivo:** Adicionar layout responsivo (alternar entre lista vertical e grid conforme largura) com ResizeObserver e contador automático de tarefas com MutationObserver ao Gerenciador.

**Passos de Execução:**

1. Adicione ResizeObserver ao container da lista de tarefas
2. Se `width > 600px`: classe `layout-grid`; se não: `layout-lista`
3. Crie as classes CSS: grid (auto-fill, minmax 250px) e lista (block, 100%)
4. Adicione MutationObserver com `{ childList: true }` na lista
5. Conte `<e-tarefa>` e atualize um contador no callback
6. Use flag `#atualizandoContador` para prevenir loop
7. Desconecte ambos observers no `disconnectedCallback`
8. Teste: redimensione a janela; adicione/remova tarefas

**Entrega:** crie `entregas-aula-24/q7-gerenciador-observers.md`:

~~~~
# Questão 7 — Layout Responsivo + Contador no Gerenciador

## Checklist de implementação

### ResizeObserver
- [ ] `#resizeObserver` criado no `connectedCallback`
- [ ] Callback lê `entry.contentRect.width`
- [ ] Se > 600px: `layout-grid`, remova `layout-lista`
- [ ] Se <= 600px: `layout-lista`, remova `layout-grid`
- [ ] Classes CSS definidas (grid e lista)
- [ ] `resizeObserver.disconnect()` no `disconnectedCallback`

### MutationObserver
- [ ] `#mutationObserver` criado com `{ childList: true }`
- [ ] Flag `#atualizandoContador` para prevenir loop
- [ ] Callback conta `e-tarefa` e atualiza o contador
- [ ] Elemento contador existe no HTML do Gerenciador
- [ ] `mutationObserver.disconnect()` no `disconnectedCallback`

### Testes
- [ ] Layout alterna ao redimensionar (acima e abaixo de 600px)
- [ ] Contador atualiza ao adicionar tarefa
- [ ] Contador atualiza ao remover tarefa
- [ ] Navegador não trava (sem loop infinito)
- [ ] Nenhum erro no console

## Reflexão

1. Por que usar `resizeObserver.observe(this.#lista)` em vez de `window.addEventListener('resize', ...)`?

2. Explique o papel da flag `#atualizandoContador` — o que aconteceria sem ela?

3. Qual dos três observers (IntersectionObserver, ResizeObserver, MutationObserver) você considera mais útil e por quê?
~~~~

---

## Checklist Final: Pronto para a Aula 25?

Marque cada item só quando conseguir fazê-lo **sem consultar a aula**:

- [ ] Sei explicar a diferença entre polling, eventos e observers — e quando usar cada um
- [ ] Sei criar um IntersectionObserver com `threshold` e `rootMargin` e observar elementos
- [ ] Sei usar `isIntersecting` e `intersectionRatio` para detectar visibilidade
- [ ] Sei criar um ResizeObserver e reagir a mudanças de tamanho com `contentRect.width`
- [ ] Sei configurar MutationObserver com `childList`, `attributes` e `subtree` — observando só o necessário
- [ ] Sei evitar loop infinito no MutationObserver usando flag de controle
- [ ] Meu Gerenciador carrega tarefas sob demanda com scroll infinito (IntersectionObserver + IndexedDB)
- [ ] Meu Gerenciador tem layout responsivo (ResizeObserver) e contador automático (MutationObserver)

> *Acertou todos? Você está pronto para a Aula 25, onde vai aprender sobre Geolocation, Notifications e Speech APIs — seu Gerenciador vai ganhar localização, notificações e fala! Travou em algum? Releia a seção indicada na questão correspondente antes de avançar.*

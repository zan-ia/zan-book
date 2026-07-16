---
titulo: "JavaScript — Do Zero ao Profissional"
modulo: "01"
aula: "25"
---

# JavaScript — Do Zero ao Profissional Aula 25 — Questões de Aprendizagem

## Como Usar Este Arquivo

Este arquivo serve como checkpoint do seu aprendizado. Cada questão verifica um conceito específico trabalhado na Aula 25. Crie uma pasta chamada `entregas-aula-25/` no seu ambiente de desenvolvimento e, dentro dela, salve cada questão em ordem.

## Questão 1: Sensores vs Atuadores — Classificar APIs

**Conceito-chave:** Sensores vs Atuadores (Aula 25, Seção 1)

**Objetivo:** Classificar 4 APIs de dispositivo como sensor, atuador ou ambos, e justificar cada classificação.

**Passos de Execução:**

1. Para cada API da tabela, determine a direção do fluxo de dados (entrada ou saída do navegador).
2. Classifique como **Sensor** (entrada), **Atuador** (saída) ou **Ambos**.
3. Escreva uma justificativa de uma frase explicando o raciocínio.

Complete a tabela abaixo para cada API:



**Entrega:** crie `entregas-aula-25/01-classificacao.md`:

~~~~
| API | Classificação (Sensor / Atuador / Ambos) | Justificativa |
|-----|------------------------------------------|---------------|
| Geolocation | | |
| Notifications | | |
| Speech Synthesis | | |
| Vibration | | |
~~~~

## Questão 2: Feature Detection — Escrever Detectores

**Conceito-chave:** Feature Detection (Aula 25, Seção 5)

**Objetivo:** Escrever funções de detecção para 4 APIs de dispositivo e montar um objeto com os resultados.

**Passos de Execução:**

1. Copie o template HTML abaixo para um arquivo `detect-api.html`.
2. Use o operador `in` para detectar cada API no objeto correto (`navigator` ou `window`).
3. Atribua `true` ou `false` à propriedade correspondente do objeto `recursos`.
4. Abra o arquivo no navegador e verifique o resultado exibido no `<pre>`.

Crie um arquivo `detect-api.html` com a seguinte estrutura:

~~~~
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Detecção de APIs</title>
</head>
<body>
  <h1>Recursos Disponíveis</h1>
  <pre id="saida"></pre>
  <script>
    const recursos = {
      geolocation: null,
      notification: null,
      speechSynthesis: null,
      vibration: null
    };

    // 1. Detecção de Geolocation

    // 2. Detecção de Notifications

    // 3. Detecção de Speech Synthesis

    // 4. Detecção de Vibration

    document.getElementById('saida').textContent =
      JSON.stringify(recursos, null, 2);
  </script>
</body>
</html>
~~~~

Preencha as lacunas para que cada propriedade de `recursos` receba `true` se a API estiver disponível ou `false` caso contrário.

## Questão 3: Geolocation — getCurrentPosition

**Conceito-chave:** Geolocation API (Aula 25, Seção 6)

**Objetivo:** Implementar o método `getCurrentPosition` com callbacks de sucesso e erro, extraindo as coordenadas e exibindo na tela.

**Passos de Execução:**

1. Copie o template HTML abaixo para um arquivo `geolocation.html`.
2. Implemente a chamada a `navigator.geolocation.getCurrentPosition()` no clique do botao, passando as funcoes `sucesso` e `erro` como callbacks.
3. Na funcao `sucesso`, extraia `latitude`, `longitude` e `accuracy` do objeto `posicao.coords` e exiba no `#resultado`.
4. Na funcao `erro`, exiba uma mensagem apropriada usando `switch` sobre `err.code`.
5. Teste no navegador (lembre-se: requer HTTPS ou localhost).

Crie um arquivo `geolocation.html` com a seguinte estrutura:

~~~~
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Geolocalização</title>
</head>
<body>
  <h1>Minha Localização</h1>
  <button id="btn-localizar">Obter Localização</button>
  <div id="resultado"></div>

  <script>
    const resultado = document.getElementById('resultado');

    document.getElementById('btn-localizar').addEventListener('click', () => {
      // Implementar getCurrentPosition com callbacks
    });

    function sucesso(posicao) {
      // Extrair latitude, longitude e precisão
    }

    function erro(err) {
      // Exibir mensagem de erro apropriada
    }
  </script>
</body>
</html>
~~~~

Preencha as funções `sucesso` e `erro`, e a chamada a `getCurrentPosition` no clique do botão.

## Questão 4: Notifications — Verificar Permissão e Notificar

**Conceito-chave:** Notifications API (Aula 25, Seção 7)

**Objetivo:** Verificar o estado atual da permissão, solicitar permissão caso necessário e criar uma notificação com título e corpo.

**Passos de Execução:**

1. Copie o template HTML abaixo para um arquivo `notificacao.html`.
2. Implemente `verificarPermissao()` lendo `Notification.permission` e habilitando o botao se for `'granted'`.
3. No clique do botao, chame `Notification.requestPermission().then()` e, se concedida, dispare a notificacao.
4. Implemente `criarNotificacao()` com `new Notification(titulo, { body: corpo })`.
5. Abra no navegador, clique no botao e observe o dialogo de permissao.

Crie um arquivo `notificacao.html` com a seguinte estrutura:

~~~~
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Notificações</title>
</head>
<body>
  <h1>Notificações do Navegador</h1>
  <button id="btn-notificar" disabled>Ativar Notificações</button>

  <script>
    const btn = document.getElementById('btn-notificar');

    function verificarPermissao() {
      // Verificar estado da permissão e habilitar botão se já concedida
    }

    btn.addEventListener('click', () => {
      // Solicitar permissão e criar notificação
    });

    function criarNotificacao() {
      // Criar e exibir a notificação
    }

    verificarPermissao();
  </script>
</body>
</html>
~~~~

Preencha as funções para que o fluxo completo de permissão e notificação funcione corretamente.

## Questão 5: Speech Synthesis — Falar Texto

**Conceito-chave:** Web Speech API (Aula 25, Seção 8)

**Objetivo:** Criar um utterance em português do Brasil, configurar voz e taxa, executar o speak e controlar a reprodução com pause, resume e cancel.

**Passos de Execução:**

1. Copie o template HTML abaixo para um arquivo `speech.html`.
2. No botao "Falar", crie um `SpeechSynthesisUtterance` com o texto do `<textarea>`, configure `lang = 'pt-BR'` e `rate = 1.0`, e chame `speechSynthesis.speak()`.
3. No botao "Pausar", chame `speechSynthesis.pause()`.
4. No botao "Retomar", chame `speechSynthesis.resume()`.
5. No botao "Cancelar", chame `speechSynthesis.cancel()`.
6. Teste no navegador — verifique se a voz em pt-BR esta disponivel.

Crie um arquivo `speech.html` com a seguinte estrutura:

~~~~
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Síntese de Fala</title>
</head>
<body>
  <h1>Leitor de Voz</h1>
  <textarea id="texto" rows="4" cols="50">
    Olá, bem-vindo à aula sobre Web Speech API.
  </textarea>
  <br>
  <button id="btn-falar">Falar</button>
  <button id="btn-pausar">Pausar</button>
  <button id="btn-retomar">Retomar</button>
  <button id="btn-cancelar">Cancelar</button>

  <script>
    const texto = document.getElementById('texto');
    let utterance = null;

    document.getElementById('btn-falar').addEventListener('click', () => {
      // Criar utterance, configurar idioma pt-BR, definir voz e falar
    });

    document.getElementById('btn-pausar').addEventListener('click', () => {
      // Pausar a fala
    });

    document.getElementById('btn-retomar').addEventListener('click', () => {
      // Retomar a fala
    });

    document.getElementById('btn-cancelar').addEventListener('click', () => {
      // Cancelar a fala
    });
  </script>
</body>
</html>
~~~~

Preencha os eventos de cada botão com as chamadas corretas da Speech Synthesis API.

## Questão 6: Vibration — Padrões de Vibração

**Conceito-chave:** Vibration API (Aula 25, Seção 9)

**Objetivo:** Implementar padrões de vibração para diferentes ações (curta, longa, alerta, S.O.S.) usando a Vibration API com fallback para navegadores que não suportam.

**Passos de Execução:**

1. Copie o template HTML abaixo para um arquivo `vibrar.html`.
2. Implemente a funcao `vibrar(padrao)` com feature detection (`'vibrate' in navigator`) e fallback textual no elemento `#fallback`.
3. Vincule os botoes "Curta" e "Longa" com valores simples (100 e 500).
4. Vincule o botao "Alerta" com o padrao `[200, 100, 200, 100, 200]`.
5. Vincule o botao "S.O.S." com o padrao Morse: 3 curtas (100), 3 longas (300), 3 curtas (100) com pausas de 100ms entre elas e 300ms entre grupos.
6. Teste em um dispositivo movel (em desktop a vibracao sera ignorada silenciosamente).

Crie um arquivo `vibrar.html` com a seguinte estrutura:

~~~~
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Vibração</title>
</head>
<body>
  <h1>Padrões de Vibração</h1>
  <button id="btn-curta">Curta (100ms)</button>
  <button id="btn-longa">Longa (500ms)</button>
  <button id="btn-alerta">Alerta (3x 200ms)</button>
  <button id="btn-sos">S.O.S. (... --- ...)</button>
  <p id="fallback"></p>

  <script>
    const fallback = document.getElementById('fallback');

    function vibrar(padrao) {
      // Verificar suporte e vibrar ou exibir fallback
    }

    document.getElementById('btn-curta').addEventListener('click', () => {
      vibrar(100);
    });

    document.getElementById('btn-longa').addEventListener('click', () => {
      vibrar(500);
    });

    document.getElementById('btn-alerta').addEventListener('click', () => {
      vibrar([200, 100, 200, 100, 200]);
    });

    document.getElementById('btn-sos').addEventListener('click', () => {
      // S.O.S. em código morse vibratório: ... --- ...
    });
  </script>
</body>
</html>
~~~~

Preencha a função `vibrar` com a lógica de detecção e vibração, e implemente o padrão S.O.S. (3 curtas, 3 longas, 3 curtas com pausas).

## Questão 7: Degradação Graciosa — Wrapper Completo

**Conceito-chave:** Degradação Graciosa (Aula 25, Seção 10)

**Objetivo:** Criar um wrapper que integra as 4 APIs trabalhadas (Geolocation, Notifications, Speech Synthesis, Vibration) com feature detection e fallbacks adequados.

**Passos de Execução:**

1. Copie o template do objeto `DeviceAPI` abaixo para um arquivo `wrapper-device.html`.
2. Implemente `DeviceAPI.init()` detectando cada API com o operador `in` e definindo as flags `disponivel`.
3. Implemente cada metodo com feature detection: verifique `disponivel` antes de usar a API; se indisponivel, execute o fallback descrito no comentario.
4. Adicione um `<script>` que chama `DeviceAPI.init()` ao carregar a pagina e exibe o status no console.
5. Teste cada metodo individualmente no console do navegador (`DeviceAPI.geolocation.obterPosicao()`, etc.).

Descreva em um arquivo `wrapper-device.html` a implementação de um objeto `DeviceAPI` com os seguintes métodos, todos protegidos por feature detection:

~~~~
const DeviceAPI = {
  geolocation: {
    disponivel: false,
    obterPosicao: function () {
      // Fallback: exibir mensagem se indisponível
    }
  },
  notification: {
    disponivel: false,
    estado: 'default',
    solicitarPermissao: function () {
      // Fallback: log se indisponível
    },
    notificar: function (titulo, corpo) {
      // Fallback: alert() se indisponível ou sem permissão
    }
  },
  speech: {
    disponivel: false,
    falar: function (texto) {
      // Fallback: console.log se indisponível
    }
  },
  vibration: {
    disponivel: false,
    vibrar: function (padrao) {
      // Fallback: exibir padrão no console se indisponível
    }
  },
  init: function () {
    // Detectar todas as APIs e definir flags disponivel
  }
};
~~~~

Preencha cada método com a lógica apropriada e inicialize o objeto chamando `DeviceAPI.init()`.

## Questão 8: Projeto — Gerenciador com APIs de Dispositivo

**Conceito-chave:** Projeto progressivo — integrar todas as 4 APIs no Gerenciador de Tarefas (Aula 25, Seções 5-10)

**Objetivo:** Estender o Gerenciador de Tarefas com funcionalidades de dispositivo: localização ao criar tarefa, notificação em deadline, leitura em voz alta das tarefas e vibração ao concluir — tudo com degradação graciosa.

**Passos de Execução:**

1. Copie o Gerenciador de Tarefas atual para a pasta `entregas-aula-25/`.
2. Implemente cada API da checklist abaixo, uma por vez, testando no navegador após cada item.
3. Verifique o console para garantir que nenhuma API falha quebra as demais (degradação graciosa).

**Entrega:** Arquivo `gerenciador-com-apis.html` funcional, com todas as APIs integradas e degradação graciosa documentada nos comentários do código.

### Checklist de Implementação

- [ ] **Geolocation:** Ao criar uma tarefa, capturar a localização atual e anexar latitude/longitude aos dados da tarefa. Se indisponível, exibir aviso e criar tarefa sem localização.
- [ ] **Notification:** Ao marcar uma tarefa com deadline, disparar uma notificação 5 segundos antes do prazo (simulado). Se sem permissão, exibir alerta visual na interface.
- [ ] **Speech Synthesis:** Adicionar botão "Ouvir" em cada tarefa que leia o título e a descrição em voz alta. Se indisponível, ocultar o botão.
- [ ] **Vibration:** Ao concluir (riscar) uma tarefa, vibrar com padrão curto. Se indisponível, exibir ✔ no console.
- [ ] **Degradação graciosa:** Cada funcionalidade deve funcionar de forma independente. A falha ou ausência de uma API não deve quebrar as demais.

### Perguntas de Reflexão

1. Qual API foi mais simples de integrar? Qual foi a mais desafiadora? Por quê?
2. Como você testou APIs que dependem de hardware (geolocalização, vibração) sem o dispositivo físico?
3. Em um cenário real, qual seria o impacto para o usuário se uma dessas APIs falhasse silenciosamente?

## Checklist Final: Pronto para a Aula 26?

- [ ] Sei classificar APIs de dispositivo entre sensores e atuadores
- [ ] Sei usar feature detection para verificar disponibilidade de APIs antes de usá-las
- [ ] Sei obter a localização do usuário com a Geolocation API
- [ ] Sei solicitar permissão e disparar notificações com a Notifications API
- [ ] Sei sintetizar voz com a Speech Synthesis API em português
- [ ] Sei controlar a vibração do dispositivo com a Vibration API
- [ ] Sei implementar degradação graciosa com fallbacks para APIs não suportadas
- [ ] Sei integrar múltiplas APIs de dispositivo em um mesmo projeto
- [ ] Completei a Questão 8 estendendo o Gerenciador de Tarefas

**Na Aula 26** vamos mergulhar no coração da assincronicidade em JavaScript: Event Loop, `setTimeout`, `setInterval`, e o mundo das Promises. Até lá!

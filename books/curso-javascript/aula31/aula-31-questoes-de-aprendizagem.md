---
titulo: "JavaScript — Do Zero ao Profissional"
modulo: "01"
aula: "31"
---

# JavaScript — Do Zero ao Profissional Aula 31 — Questoes de Aprendizagem

## Como Usar Este Arquivo

Este arquivo e o **checkpoint de aprendizagem** da Aula 31 — a ultima do modulo. Responda as questoes na ordem, sem consultar a aula principal. Cada questao testa um conceito-chave que voce aprendeu.

**Instrucoes:**

1. Crie uma pasta `entregas-aula-31/` dentro do seu projeto
2. Para cada questao, crie o arquivo indicado na secao "Entrega"
3. Preencha o template com suas respostas
4. Ao final, revise o Checklist Final para confirmar que esta pronto

Cada questao indica a secao da aula que voce pode consultar SE travarem. Mas tente fazer primeiro sem olhar.

> *Esta e a ultima aula. Complete todas as questoes para fechar o modulo com chave de ouro.*

***

## Questao 1: Criando o Manifesto da Aplicacao

**Conceito-chave:** manifest.json e os 3 pilares da PWA (Aula 31, Secao 4).

**Objetivo:** Demonstrar que voce sabe criar um manifest.json completo, explicar cada campo e vincular no HTML.

**Passos de Execucao:**

1. Crie um arquivo `manifest.json` para o Gerenciador de Tarefas com: name, short_name, description, start_url, display, background_color, theme_color e icons (192x192 e 512x512)
2. Explique com suas palavras o que cada campo faz e por que ele existe
3. Adicione o link no HTML e as meta tags recomendadas
4. Teste no DevTools > Application > Manifest e anote se todos os campos aparecem

**Entrega:** crie `entregas-aula-31/questao-01-manifesto.md`:

~~~~
# Questao 1 — Manifesto da Aplicacao

## Meu manifest.json

```json
[Cole aqui o conteudo completo do seu manifest.json]
```

## Explicacao campo a campo

| Campo | Valor usado | O que faz |
|---|---|---|
| name | | |
| short_name | | |
| description | | |
| start_url | | |
| display | | |
| background_color | | |
| theme_color | | |
| icons | | |

## Vinculo no HTML

Cole o codigo adicionado no <head> do index.html:

```html
[Seu codigo aqui]
```

## Teste no DevTools

- [ ] Abri DevTools > Application > Manifest
- [ ] Todos os campos aparecem preenchidos
- [ ] Os icones aparecem sem erro 404

## Reflexao

Qual a diferenca pratica entre display: standalone e display: browser? Em que cenario cada um faz sentido?

~~~~

***

## Questao 2: Instalacao com beforeinstallprompt

**Conceito-chave:** Evento beforeinstallprompt, captura, prompt e fluxo de instalacao (Aula 31, Secao 4).

**Objetivo:** Implementar o fluxo completo de instalacao PWA com botao amigavel, respeitando o ciclo do navegador.

**Passos de Execucao:**

1. Implemente o listener do `beforeinstallprompt` no seu JavaScript principal
2. Crie um botao "Instalar App" no HTML (inicialmente invisivel)
3. Mostre o botao apenas quando o evento disparar e esconda apos a instalacao
4. Chame `prompt()` apenas quando o usuario clicar no botao
5. Adicione a verificacao de `display-mode: standalone` para esconder o botao quando o app ja estiver instalado

**Entrega:** crie `entregas-aula-31/questao-02-instalacao.md`:

~~~~
# Questao 2 — Fluxo de Instalacao PWA

## Codigo do beforeinstallprompt

```javascript
[Cole seu codigo completo de captura e instalacao]
```

## Codigo HTML do botao

```html
[Cole o HTML do botao Instalar App]
```

## Checklist de verificacao

- [ ] beforeinstallprompt foi capturado com event.preventDefault()
- [ ] O evento foi guardado em uma variavel
- [ ] O botao so aparece quando o evento dispara
- [ ] prompt() e chamado apenas no clique do botao
- [ ] Apos instalado, o botao desaparece
- [ ] Em modo standalone, o botao nao aparece

## Perguntas de reflexao

1. Por que o navegador exige que prompt() seja chamado como resposta a um gesto do usuario?
2. O que acontece se o usuario clicar no botao, mas depois cancelar a instalacao no prompt nativo?
3. Por que beforeinstallprompt nunca mais dispara depois que o app esta instalado?

~~~~

***

## Questao 3: Filtros e Estatisticas

**Conceito-chave:** Filtros combinaveis (status + texto + data) e painel de estatisticas (Aula 31, Secao 5).

**Objetivo:** Implementar filtros combinaveis que funcionam em pipeline e um painel de estatisticas que atualiza em tempo real.

**Passos de Execucao:**

1. Crie a interface HTML com tres filtros: status (select), texto (input) e data (select)
2. Implemente a funcao `aplicarFiltros()` que aplica os tres filtros em sequencia
3. Adicione listeners change/input para filtrar em tempo real
4. Crie o painel de estatisticas (total, concluidas, pendentes, taxa, atrasadas)
5. Implemente `atualizarEstatisticas()` para atualizar o painel

**Entrega:** crie `entregas-aula-31/questao-03-filtros.md`:

~~~~
# Questao 3 — Filtros e Estatisticas

## Interface de Filtros (HTML)

```html
[Cole seu HTML dos filtros]
```

## Funcao aplicarFiltros()

```javascript
[Cole sua implementacao completa]
```

## Funcao atualizarEstatisticas()

```javascript
[Cole sua implementacao de estatisticas]
```

## Testes

Descreva o resultado esperado para cada cenario:

| Cenario | Filtros | Resultado esperado |
|---|---|---|
| So pendentes | status=pendentes, texto=, data=todas | |
| Busca texto + pendentes | status=pendentes, texto=comprar, data=todas | |
| Tarefas atrasadas | status=todas, texto=, data=atrasadas | |
| Combinado completo | status=pendentes, texto=estudo, data=hoje | |

## Reflexao

Em que cenario faria sentido usar indices do IndexedDB em vez de filtrar em memoria com .filter()?

~~~~

***

## Questao 4: Exportar e Importar com Merge Inteligente

**Conceito-chave:** Exportacao com Blob, importacao com FileReader, validacao de estrutura e merge inteligente (Aula 31, Secao 6).

**Objetivo:** Implementar exportacao de dados para JSON com download e importacao com validacao e merge inteligente.

**Passos de Execucao:**

1. Implemente a funcao `exportarTarefas()` que busca dados do IndexedDB, cria Blob e dispara download
2. Implemente a funcao `importarTarefas(file)` que le o arquivo com FileReader, faz JSON.parse e valida a estrutura
3. Implemente `mergeTarefas()` com logica de comparacao por data de atualizacao
4. Adicione botoes de exportar e importar no HTML
5. Teste o fluxo completo: exporte, modifique algumas tarefas, importe o arquivo original e veja o merge

**Entrega:** crie `entregas-aula-31/questao-04-export-import.md`:

~~~~
# Questao 4 — Exportar e Importar JSON

## Funcao de exportacao

```javascript
[Cole sua implementacao de exportarTarefas()]
```

## Funcao de importacao com validacao

```javascript
[Cole sua implementacao de importarTarefas()]
```

## Funcao de merge inteligente

```javascript
[Cole sua implementacao de mergeTarefas()]
```

## Estrutura do JSON exportado

Mostre um exemplo de arquivo exportado (com dados ficticios):

```json
[Exemplo do JSON exportado]
```

## Validacoes implementadas

Quais validacoes sua funcao de importacao faz antes de inserir dados no banco?

## Pergunta de reflexao

O que acontece se o usuario importar um arquivo JSON com uma tarefa que tem o mesmo ID de uma existente, mas com data de atualizacao mais antiga? Explique o comportamento esperado do merge inteligente.

~~~~

***

## Questao 5: Tema Claro e Escuro

**Conceito-chave:** CSS custom properties para tema dinamico, toggle com JavaScript e persistencia com localStorage (Aula 31, Secao 7).

**Objetivo:** Implementar tema claro/escuro completo com CSS custom properties, toggle via JavaScript e persistencia da preferencia.

**Passos de Execucao:**

1. Defina as CSS custom properties no `:root` (tema claro) e `[data-tema="escuro"]` (tema escuro)
2. Substitua pelo menos 5 cores fixas do seu CSS por `var(--nome-da-cor)`
3. Implemente a funcao `aplicarTema()` que altera o atributo `data-tema` no HTML e salva no localStorage
4. Implemente a funcao `getTemaInicial()` que verifica: preferencia salva > preferencia do sistema > padrao claro
5. Adicione um botao toggle na interface
6. Adicione transicao CSS de 0.3s para suavizar a mudanca de tema

**Entrega:** crie `entregas-aula-31/questao-05-tema.md`:

~~~~
# Questao 5 — Tema Claro e Escuro

## CSS Custom Properties

```css
/* Tema CLARO — cole aqui suas custom properties do :root */

/* Tema ESCURO — cole aqui suas custom properties do [data-tema="escuro"] */
```

## Funcao aplicarTema()

```javascript
[Cole sua implementacao]
```

## Funcao getTemaInicial()

```javascript
[Cole sua implementacao]
```

## Elementos que usam var()

Liste os elementos que voce alterou para usar var() em vez de cores fixas:

| Seletor CSS | Propriedade | Variavel usada |
|---|---|---|
| body | background-color | --cor-fundo |
| ... | ... | ... |

## Teste de persistencia

- [ ] Alterne para tema escuro
- [ ] Feche e abra o navegador
- [ ] O tema escuro persiste?
- [ ] O botao toggle mostra o estado correto?

## Reflexao

Por que CSS custom properties sao melhores que classes CSS fixas para implementar tema? E por que localStorage e melhor que sessionStorage para persistir essa preferencia?

~~~~

***

## Questao 6: Estrategias de Cache no Service Worker

**Conceito-chave:** Cache First vs Network First no Service Worker, ciclo de vida e atualizacao (Aula 31, Secao 8).

**Objetivo:** Explicar conceitualmente as duas estrategias de cache, quando usar cada uma e como funciona o ciclo de atualizacao do Service Worker.

**Passos de Execucao:**

1. Explique com suas palavras o que e Cache First e em que cenario ele e mais adequado
2. Explique o que e Network First e em que cenario ele e mais adequado
3. Explique o papel de `self.skipWaiting()` e `clients.claim()` no ciclo de vida do Service Worker
4. Descreva o que acontece quando um usuario visita seu app offline com cada estrategia

**Entrega:** crie `entregas-aula-31/questao-06-cache.md`:

~~~~
# Questao 6 — Estrategias de Cache

## Cache First

O que e e quando usar:

[Escreva sua explicacao aqui]

## Network First

O que e e quando usar:

[Escreva sua explicacao aqui]

## Tabela comparativa

| Caracteristica | Cache First | Network First |
|---|---|---|
| Velocidade | | |
| Atualidade dos dados | | |
| Funciona offline? | | |
| Ideal para | | |
| Exemplo no Gerenciador | | |

## skipWaiting e clients.claim

Explique o que cada um faz e por que ambos sao usados juntos:

skipWaiting:
clients.claim:

## Cenario offline

Descreva o que o usuario ve em cada cenario quando esta offline e tenta usar o app:

1. Abrir o app pela primeira vez (nunca visitou antes):
2. Abrir o app depois de ja ter visitado (assets em cache):
3. Tentar adicionar uma nova tarefa:
4. Tentar exportar dados:

~~~~

***


## Questao 7: Deploy no GitHub Pages

**Conceito-chave:** Deploy completo com Git e GitHub Pages, verificacao PWA e Lighthouse (Aula 31, Secao 9).

**Objetivo:** Realizar o deploy completo do Gerenciador de Tarefas no GitHub Pages e verificar todos os criterios de qualidade.

**Passos de Execucao:**

1. Crie um repositorio no GitHub chamado `gerenciador-tarefas`
2. Inicialize o Git no projeto local, adicione os arquivos e faca o primeiro commit
3. Conecte ao repositorio remoto e de push
4. Ative o GitHub Pages em Settings > Pages > main/root
5. Acesse seu app online e verifique se carrega sem erros
6. Rode o Lighthouse (todas as 4 categorias) e anote os scores
7. Teste o fluxo completo: instalacao PWA, offline, tema, filtros, export/import

**Entrega:** crie `entregas-aula-31/questao-07-deploy.md`:

~~~~
# Questao 7 — Deploy no GitHub Pages

## URL do app online

```
[Cole a URL do seu app no GitHub Pages]
```

## Comandos Git utilizados

```bash
[Cole os comandos que voce usou]
```

## Lighthouse Scores

| Categoria | Score | Observacoes |
|---|---|---|
| Performance | | |
| Acessibilidade | | |
| Boas Praticas | | |
| PWA | | |

## Checklist de Verificacao

- [ ] URL comeca com https://
- [ ] App carrega sem erros no console
- [ ] manifest.json valido (DevTools > Application > Manifest)
- [ ] Service Worker registrado e ativo
- [ ] App funciona offline (DevTools > Network > Offline)
- [ ] beforeinstallprompt dispara (em producao)
- [ ] Tema claro/escuro funciona
- [ ] Filtros combinaveis funcionam
- [ ] Exportar/importar JSON funciona
- [ ] Consigo instalar o app na tela inicial

## Captura de tela

Inclua uma captura de tela do Lighthouse report (ou descreva os resultados se nao for possivel anexar).

## Dificuldades encontradas

Descreva qualquer problema que voce enfrentou durante o deploy e como resolveu.

~~~~

***

## Questao 8: Projeto Final — Apresentacao e Autorreflexao

**Conceito-chave:** Integracao completa de tudo que foi construido no modulo, README profissional, portfolio e autorreflexao (Aula 31, Seccoes 4 a 10).

**Objetivo:** Finalizar o modulo com uma apresentacao profissional do projeto, incluindo README.md, capturas de tela e uma reflexao sobre a jornada de 31 aulas.

**Passos de Execucao:**

1. Crie ou refine o README.md do seu repositorio com: descricao, funcionalidades, tecnologias, capturas, link online, como rodar, estrutura do projeto
2. Capture screenshots do app em: desktop claro, desktop escuro, mobile claro
3. Atualize seu perfil do GitHub com o repositorio fixado (pinned)
4. Escreva uma reflexao pessoal sobre sua jornada de aprendizado

**Entrega:** crie `entregas-aula-31/questao-08-projeto-final.md`:

~~~~
# Questao 8 — Projeto Final e Autorreflexao

## Link do repositorio no GitHub

```
[Cole a URL do repositorio]
```

## Link do app online (GitHub Pages)

```
[Cole a URL do app]
```

## README.md

Cole aqui o conteudo COMPLETO do seu README.md:

```markdown
[README.md completo]
```

## Screenshots

Descreva as capturas que voce incluiu no README:

| Arquivo | Conteudo da captura |
|---|---|
| screenshots/claro.png | |
| screenshots/escuro.png | |
| screenshots/mobile.png | |

## Tecnologias utilizadas

Liste TODAS as tecnologias e APIs que seu Gerenciador de Tarefas utiliza:

## Autorreflexao: Sua Jornada em 31 Aulas

Escreva um paragrafo para cada pergunta:

1. **O que mudou em voce desde a Aula 01?** Como voce pensava sobre programacao antes e como pensa agora?

2. **Qual foi o momento mais dificil do curso?** O que quase fez voce desistir e como voce superou?

3. **Qual conceito foi o mais dificil de entender?** E como voce finalmente conseguiu compreende-lo?

4. **O que voce construiu de que mais se orgulha?** Pode ser codigo, um componente, um momento de insight.

5. **Qual seu plano para os proximos 3 meses?** O que voce quer aprender ou construir a seguir?

6. **Que conselho voce daria para alguem que esta comecando a Aula 01 hoje?**

~~~~

***

## Checklist Final: Sua Jornada Continua

Este e o ULTIMO checklist do modulo. Cada item abaixo representa uma habilidade que voce adquiriu ao longo de 31 aulas. Marque apenas os que voce consegue fazer **sem consultar a aula**:

- [ ] Crio um manifest.json completo e explico cada campo do manifesto PWA
- [ ] Implemento o fluxo beforeinstallprompt com botao amigavel e respeitando o ciclo do navegador
- [ ] Implemento filtros combinaveis (status + texto + data) com IndexedDB
- [ ] Crio um painel de estatisticas que atualiza em tempo real
- [ ] Exporto dados do IndexedDB para JSON com Blob e download
- [ ] Importo dados JSON com validacao de estrutura e merge inteligente
- [ ] Implemento tema claro/escuro com CSS custom properties e localStorage
- [ ] Explico a diferenca entre Cache First e Network First no Service Worker
- [ ] Realizo deploy completo no GitHub Pages com verificacao Lighthouse
- [ ] Crio um README.md profissional com descricao, tecnologias e capturas
- [ ] Apresento meu projeto como portfolio profissional com link online

> *PARABENS! Voce completou todas as 31 aulas do modulo JavaScript — Do Zero ao Profissional. Voce comecou sem saber o que era uma variavel e termina com uma PWA completa publicada na internet, com IndexedDB, Service Workers, Custom Elements, tema claro/escuro e deploy no GitHub Pages.*
>
> *Isso nao e pouco. Isso e extraordinario.*
>
> *Sua jornada como desenvolvedor esta apenas comecando. TypeScript, React, Node.js, banco de dados, DevOps — o mundo do desenvolvimento esta aberto para voce. Leve o que aprendeu aqui, construa seus proprios projetos, e nunca pare de aprender.*
>
> **Obrigado por confiar neste modulo. Voce merece celebrar.**

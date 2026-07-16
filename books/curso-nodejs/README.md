# Plano do Módulo: Node.js — Do Zero ao Servidor Express (10 aulas)

Este arquivo é a **fonte única da verdade** sobre a sequência, numeração e escopo das 10 aulas deste módulo. Ensina Node.js para desenvolvedores que concluíram os módulos de JavaScript (28 aulas) e Redes e HTTP (10 aulas). O foco é 100% prático: dominar o runtime, construir servidores HTTP com Express e estruturar projetos profissionais em camadas. Bancos de dados, autenticação e deploy são cobertos em módulos subsequentes.

## Público-alvo e ponto de partida

**Público**: desenvolvedores que concluíram `curso-javascript` (Vanilla JS até módulos ES, fetch, Promises) e `curso-redes` (TCP/IP, HTTP, DNS, REST, CORS). Dominam JavaScript moderno (ES6+), manipulação de arrays/objetos, funções assíncronas (async/await), JSON, e sabem consumir APIs com `fetch()`. Entendem a estrutura de requisições HTTP, status codes, headers, e o modelo request-response. Já usam terminal com fluência e compreendem o que acontece entre digitar uma URL e ver a resposta.

**O que o aluno já sabe**: JavaScript avançado (módulos ES, classes, Promises, async/await, fetch), HTTP (métodos, status, headers, REST), terminal (navegar, executar comandos, instalar pacotes), estruturas de dados (arrays, objetos), e debugging com DevTools.

**O que o aluno NÃO sabe**: JavaScript fora do navegador. Não sabe o que é um runtime, o event loop do Node.js, ou como ler um arquivo do disco com código. Nunca criou um servidor HTTP. Não sabe o que é npm além de "aquilo que instala bibliotecas". Não conhece CommonJS (`require`), o módulo `fs`, streams, ou como conectar um banco de dados. Não sabe o que é middleware, autenticação JWT, ou variáveis de ambiente. Não conhece design patterns aplicados ao backend (Module, Factory, Repository, Middleware) nem boas práticas de arquitetura em camadas.

**Compromisso do módulo**: pegar o JavaScript que o aluno já domina e transplantá-lo para o servidor. Cada conceito do Node.js é ancorado em algo que o aluno já sabe fazer no navegador: `fetch()` → servidor HTTP, `localStorage` → sistema de arquivos, eventos do DOM → EventEmitter, módulos ES → CommonJS.

## Filosofia: cada aula é concreta e treinável

Cada aula entrega:

1. **Conteúdo principal** (`aula-NN-<slug>.md`): explicação com analogias do mundo real + demonstração guiada + prática durante a aula (Mão na Massa inline, Quick Check, Quiz rápido).
2. **Questões de Aprendizagem** (`aula-NN-questoes-de-aprendizagem.md`): checkpoint prático com 4-6 tarefas — o aluno só avança quando consegue completá-las por conta própria.

## Projeto Progressivo: API de Gerenciador de Tarefas

O aluno transforma o To-Do App do módulo de JavaScript (que rodava no navegador com localStorage) em uma API REST completa com banco de dados, autenticação e deploy. O frontend em JavaScript puro é reaproveitado — o foco é construir o backend.

| Fase | Aulas | O que o aluno constrói |
|---|---|---|
| Fase 1 (01-05) | Runtime Node.js | Do "Hello World" no terminal ao primeiro servidor HTTP funcional |
| Fase 2 (06-10) | Express e APIs REST | API REST completa para o Gerenciador de Tarefas com rotas, middleware, validação e arquitetura em camadas |

## O mecanismo central (eixo transversal)

```
[Requisição HTTP] → [Servidor Node.js] → [Roteador Express] → [Middleware] → [Controlador] → [Banco de Dados]
                         ↓
                     [Event Loop] — gerencia tudo com uma única thread
                         ↓
                     [Resposta HTTP] ← [JSON] ← [Controlador]
```

O aluno internaliza que TODO servidor segue este fluxo: recebe requisição → processa (middleware + lógica) → acessa dados → responde. A cada aula, uma nova peça é adicionada.

## Sequência das 10 aulas

### FASE 1 — RUNTIME NODE.JS (Aulas 01-05)

O aluno sai do navegador e descobre que JavaScript roda no terminal. Cada aula introduz um módulo nativo do Node.js.

#### Aula 01: O Que é Node.js? — Runtime, Event Loop e Seu Primeiro Script

**Conteúdo**: JavaScript sempre viveu no navegador. Node.js tira o JavaScript de lá. Analogia: "o navegador é uma casa; Node.js é um apartamento — mesma língua, móveis diferentes". Instalação (nvm para gerenciar versões). `node script.js` no terminal. `console.log` agora aparece no terminal, não no DevTools. O event loop (intuição): fila de tarefas que nunca bloqueia. Single thread, operações assíncronas delegadas ao sistema operacional (libuv). Comparação: `setTimeout` no navegador vs no Node.js — idêntico! 

**Comandos/conceitos**: `node`, nvm, event loop (introdução visual), single thread, libuv.

#### Aula 02: npm e Gerenciamento de Pacotes — Do Zero ao Primeiro Projeto

**Conteúdo**: npm como "o registry de tudo que existe em Node.js". `npm init` (package.json). `npm install` (node_modules, package-lock.json). Dependências vs devDependencies. `npm install -D` para ferramentas de dev. `npm run` (scripts). `npx` para executar pacotes sem instalar. SemVer (^, ~, *). Ponto de alavanca: "npm é o import do Node.js — em vez de importar de um arquivo local, você importa da internet. O package.json é o manifesto do que seu projeto precisa."

**Conceitos**: npm, package.json, node_modules, SemVer, scripts, npx, devDependencies.

#### Aula 03: Módulos CommonJS — require, module.exports e Escopo

**Conteúdo**: No navegador, o aluno usa `import/export` (ES modules). Node.js nasceu com CommonJS: `require()` e `module.exports`. Analogia: "ES modules é português de Portugal; CommonJS é português do Brasil — mesma ideia, sintaxe diferente." `require('./arquivo')` vs `require('pacote')`. Resolução de módulos: pasta node_modules. Escopo de módulo: cada arquivo é isolado (não polui global). `module.exports` (exportar uma coisa) vs `exports.atributo` (exportar várias). 

**Pattern: Revealing Module** — o sistema de módulos do Node.js É um pattern: a closure do arquivo esconde a implementação, o `module.exports` expõe apenas a API pública. Exemplo: `const segredo = 'chave-api'; module.exports = { getDados: () => dados }` — `segredo` é inacessível de fora.

**Pattern: Configuration Object** — em vez de `criarServidor(3000, 'localhost', 'utf8', true)`, usa-se `criarServidor({ porta: 3000, host: 'localhost', encoding: 'utf8', debug: true })`. Objeto literal como argumento: ordem não importa, campos opcionais com default via destructuring, autodocumentado. O aluno já viu isso no navegador — agora entende que é um pattern com nome.

**Conceitos**: require, module.exports, CommonJS vs ES modules, escopo de módulo, resolução de módulos, Revealing Module Pattern, Configuration Object Pattern.

#### Aula 04: Sistema de Arquivos (fs) — Lendo e Escrevendo no Disco

**Conteúdo**: No navegador, o aluno salva dados em `localStorage` (limitado, só strings). Node.js acessa o sistema de arquivos real. Módulo `fs`: `readFileSync` e `writeFileSync` (síncrono — simples, bloqueia). `readFile` e `writeFile` com callbacks (assíncrono — o jeito Node.js). `fs.promises` + async/await (o jeito moderno). Trabalhando com JSON: `JSON.parse(fs.readFileSync(...))`. Criar/remover diretórios (`mkdir`, `rmdir`). Verificar se arquivo existe (`existsSync`). Caminhos relativos vs absolutos. `__dirname` e `__filename`.

**Pattern: Error-first Callback** — toda função assíncrona da stdlib do Node.js segue a convenção `(err, result) => {}`. O primeiro argumento é sempre o erro (ou `null` se sucesso). Exemplo: `fs.readFile('/dados.json', (err, data) => { if (err) return console.error(err); ... })`. Entender essa convenção é chave para ler qualquer código Node.js pré-Promises. O aluno aprende a escrever funções que seguem o mesmo contrato.

**Conceitos**: fs, readFileSync/writeFileSync, fs.promises, async/await com fs, JSON + arquivos, __dirname, Error-first Callback Pattern.

#### Aula 05: Path, OS e Módulos Utilitários — Ferramentas do Dia a Dia

**Conteúdo**: Módulo `path`: `join`, `resolve`, `basename`, `dirname`, `extname` — manipular caminhos sem concatenar strings (Windows usa `\`, Linux usa `/`). Módulo `os`: informações do sistema (CPU, memória, plataforma). Módulo `process`: `process.argv` (argumentos de linha de comando), `process.env` (variáveis de ambiente), `process.exit()`, `process.cwd()`. Módulo `events`: EventEmitter — "o addEventListener do Node.js". 

**Pattern: Factory Pattern** — função que cria e retorna objetos configurados, escondendo a complexidade de inicialização. Exemplo: `function criarApp({ porta, ambiente }) { return { iniciar: () => { ... }, parar: () => { ... } } }`. Diferente de `class` com `new`, a factory permite lógica condicional, validação e defaults. O aluno constrói uma ferramenta CLI simples: `node app.js --arquivo=dados.json` — e a factory `criarCli(config)` encapsula a inicialização.

**Conceitos**: path, os, process.argv, process.env, EventEmitter, CLI com Node.js, Factory Pattern.

### FASE 2 — EXPRESS E APIS REST (Aulas 06-10)

O aluno constrói servidores HTTP profissionais com Express, o framework mais popular do ecossistema Node.js.

#### Aula 06: Criando um Servidor HTTP — Do Zero com o Módulo http

**Conteúdo**: Antes do Express, o aluno constrói um servidor com o módulo nativo `http`. `http.createServer((req, res) => {})`. O objeto `req` (method, url, headers). O objeto `res` (writeHead, end). Servindo HTML simples. Servindo JSON (Content-Type: application/json). Roteamento manual: `if (req.url === '/tarefas')`. Query strings: `new URL(req.url, 'http://localhost').searchParams`. O servidor Express nas próximas aulas vai abstrair tudo isso — mas o aluno precisa entender a fundação.

**Conceitos**: http.createServer, req, res, Content-Type, roteamento manual, URL parsing.

#### Aula 07: Express.js — Primeiro Servidor e Rotas

**Conteúdo**: Express abstrai o módulo `http` e oferece uma API limpa para rotas. `npm install express`. `const app = express()`. `app.get('/tarefas', (req, res) => { res.json([]) })`. `app.post()`, `app.put()`, `app.delete()`. Path params: `/tarefas/:id` → `req.params.id`. Query strings: `req.query.status`. Resposta: `res.json()`, `res.status()`, `res.send()`. `app.listen(3000)`. O aluno reescreve o servidor HTTP da Aula 06 com Express em 10 linhas.

**Conceitos**: express(), app.get/post/put/delete, req.params, req.query, res.json, app.listen.

#### Aula 08: Middleware — O Pipeline de Requisição

**Conteúdo**: Middleware como "filtros de aeroporto" — a requisição passa por eles antes de chegar ao destino. `app.use(express.json())` → parseia JSON automaticamente. Middleware customizado: `(req, res, next) => { console.log(req.method, req.url); next(); }`. Ordem importa! Middleware de erro: `(err, req, res, next)`. Middleware de terceiros: `cors()` (libera CORS), `morgan` (logging). Aplicação: middleware que registra timestamp de cada requisição.

**Pattern: Middleware** — não é só do Express; é um pattern universal. Funções encadeadas em pipeline: `(req, res, next) => { ...; next(); }`. Cada middleware decide: processar e passar adiante, responder e encerrar, ou delegar para erro. O aluno implementa seu próprio middleware e entende que frameworks como Redux, Fastify e Socket.IO usam o mesmo pattern com assinaturas diferentes.

**Conceitos**: middleware, Middleware Pattern, next(), app.use, express.json, ordem de middleware, middleware de erro, cors, morgan.

#### Aula 09: Validação e Tratamento de Erros

**Conteúdo**: Nem toda requisição é válida. Validar body: campos obrigatórios, tipos, formatos (email, tamanho mínimo). Responder com erros claros: 400 com mensagem descritiva. Validação manual vs bibliotecas (`joi`, `zod` — menção). Try/catch em controladores. Middleware centralizado de erro: captura qualquer erro não tratado e responde com 500. Erros customizados: classe `AppError` com status e mensagem.

**Conceitos**: validação, 400 Bad Request, AppError, middleware de erro centralizado, try/catch em Express.

#### Aula 10: Estrutura de Projeto Profissional — Rotas, Controladores, Services e Repositories

**Conteúdo**: O arquivo único `index.js` com 500 linhas não escala. O aluno refatora aplicando 3 patterns em sequência:

**3-Tier Layering (Arquitetura em 3 Camadas)**: Separação em rotas (`routes/tarefas.js`) → controladores (`controllers/tarefasController.js`) → serviços (`services/tarefaService.js`). A diferença crucial: o controller traduz HTTP (req/res) e delega a lógica para o service, que é JavaScript puro — sem `req`, sem `res`, testável isoladamente. Router do Express: `express.Router()`. O service nunca sabe se foi chamado por HTTP, CLI ou teste.

**Repository Pattern**: O service não acessa dados diretamente — usa um repository. Começando com JSON local: `class TarefaRepository { constructor(caminho) { ... } async listar() { return JSON.parse(await fs.readFile(this.caminho)) } }`. A beleza do pattern: quando o aluno migrar para SQLite e PostgreSQL no próximo módulo (Banco de Dados SQL), a interface do repository não muda — `listar()`, `criar()`, `atualizar()`, `deletar()`. Só a implementação interna troca. Sem banco de dados ainda — persistência em arquivo JSON, que o aluno já domina da Aula 04.

**Dependency Injection Manual**: Em vez de o service dar `require('../repos/tarefaRepo')` (acoplamento rígido), as dependências são injetadas via factory: `function criarTarefaService({ repo, logger }) { return { listar: () => repo.listar() } }`. No app real, injeta o repo real; no teste, injeta um mock. Sem frameworks — apenas funções recebendo objetos.

**Estrutura de pastas profissional**: `src/routes/`, `src/controllers/`, `src/services/`, `src/repositories/`, `src/middleware/`.

**Conceitos**: Router, controllers, services, 3-Tier Layering, Repository Pattern (JSON local), Dependency Injection manual, estrutura de pastas, separação de responsabilidades.

---

**Após este módulo**, o aluno está pronto para o módulo **Banco de Dados SQL** — onde aprende SQLite, PostgreSQL, Knex (query builder + migrations + seeds), Repository Pattern (formalizado), autenticação JWT e autorização. A Aula 10 já introduziu o Repository Pattern com JSON local e a arquitetura em 3 camadas — o próximo módulo substitui o JSON por bancos reais sem mudar a interface.

## Convenções didáticas

- **Âncoras no JavaScript do navegador**: todo conceito parte de algo familiar. Ex: `fetch()` → servidor HTTP, `localStorage` → `fs`, `addEventListener` → EventEmitter, `import/export` → `require/module.exports`.
- **Analogias do mundo real**: event loop = garçom que anota pedidos e nunca fica parado; middleware = filtros de aeroporto; JWT = crachá de acesso; connection pool = fila de caixas no banco.
- **Código sempre executável**: todo exemplo pode ser copiado e executado com `node arquivo.js`. O aluno vê o resultado imediatamente no terminal.
- **Máximo de 1-2 conceitos novos por aula**: cada sessão é autocontida e o aluno sai com uma peça funcional.
- **Prática antes da teoria**: o aluno primeiro FAZ (digita o código, vê o servidor responder), depois ENTENDE o mecanismo.
- **Tom**: conversacional e direto. O aluno é desenvolvedor JavaScript experiente — não precisa de introdução à sintaxe, mas é novo no ambiente de servidor.
- **Patterns são nomeados no momento do encontro**: o aluno primeiro escreve o código que implementa o pattern, depois aprende que aquilo tem nome. Ex: escreve `module.exports = { ... }` na Aula 03, depois ouve "isso se chama Revealing Module Pattern". Patterns não são teoria abstrata — são nomes para boas práticas que o aluno já está aplicando.

## Arquitetura de pastas de cada aula

```
modules/curso-nodejs/aulaNN/
├── aula-NN-<slug>.md                       # Conteúdo principal
├── aula-NN-questoes-de-aprendizagem.md     # Tarefas/checkpoint prático (arquivo separado)
├── aula-NN-<slug>.pdf                       # PDF para distribuição (gerado ao final)
└── images/                                  # Diagramas Mermaid renderizados como PNG
```

## Progressão de complexidade

| Fase | Aulas | Complexidade | Palavras-chave |
|---|---|---|---|
| Fase 1 | 01-05 | Iniciante→Intermediário | node, npm, CommonJS, fs, path, event loop |
| Fase 2 | 06-10 | Intermediário | http, Express, rotas, middleware, Repository, 3-Tier Layering, DI manual, validação, estrutura de projeto |

## Regras para Manutenção de Coerência

1. **Este README é alterado primeiro.** Se uma aula for adicionada, removida, mesclada ou reordenada, o README é atualizado **antes** de qualquer arquivo de aula.
2. **Referências nas aulas seguem o README.** O campo "Próxima Aula", menções como "Na Aula 08...", e a "Recapitulação" devem corresponder exatamente a este plano.
3. **Títulos consistentes.** O `titulo` no frontmatter de cada aula deve ser idêntico ao título no plano acima.
4. **A aula N nunca referencia conceitos ou ferramentas da aula N+1.**
5. **Questões de Aprendizagem** sempre têm `tipo: "checkpoint-pratico"` no frontmatter e seguem a estrutura `Conceito-chave → Objetivo → Passos de Execução → Entrega`.
6. **Se uma aula referencia ferramentas/conceitos de outra aula, aquela outra aula realmente cobre esses tópicos.** Verificar antes de publicar.

## Referências

### Documentação oficial
- [Node.js Docs](https://nodejs.org/en/docs/) — documentação oficial
- [npm Docs](https://docs.npmjs.com/) — documentação do npm
- [Express.js Guide](https://expressjs.com/en/guide/routing.html) — guia oficial do Express

### Ferramentas
- [nvm (Node Version Manager)](https://github.com/nvm-sh/nvm)
- [Railway](https://railway.app/) — deploy de aplicações Node.js
- [Postman](https://www.postman.com/) — testar APIs (opcional)

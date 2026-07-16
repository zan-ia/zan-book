---
titulo: "Node.js — Do Zero ao Servidor Express"
modulo: "01"
aula: "05"
---

# Node.js — Do Zero ao Servidor Express Aula 05 — Questões de Aprendizagem

## Como Usar Este Arquivo

Este é o checkpoint de aprendizagem da Aula 05. Cada questão testa um conceito-chave da aula. Faça na ordem, crie a pasta `entregas-aula-05/` dentro do diretório da aula, e preencha os templates de entrega. Você deve conseguir completar todas as questões sem consultar a aula — se travar, a seção indicada em cada questão ajuda a revisar.

---

## Questão 1: Manipulação de Caminhos Multiplataforma

**Conceito-chave:** Módulo `path` — `path.join()`, `path.resolve()`, `path.basename()`, `path.dirname()`, `path.extname()` (Aula 05, Seções 1 e 5).

**Objetivo:** Demonstrar que você sabe construir e decompor caminhos de arquivo de forma multiplataforma.

**Passos de Execução:**

1. Crie um script `caminhos.js` que recebe um nome de arquivo via `--arquivo=nome.json`
2. Use `path.resolve()` para obter o caminho absoluto
3. Extraia o diretório, o nome base e a extensão usando os métodos apropriados
4. Crie um subdiretório `backup` no mesmo diretório do arquivo usando `path.join()`
5. Exiba todas as informações no terminal

**Entrega:** crie `entregas-aula-05/q1-caminhos.md`:

~~~~
# Questão 1 — Manipulação de Caminhos

## Script criado
`caminhos.js`

## Código executado

```javascript
[cole aqui o código completo do seu script]
```

## Saída do terminal

```
[cole aqui a saída do node caminhos.js --arquivo=meu-arquivo.txt]
```

## Respostas

| Pergunta | Resposta |
|---|---|
| Qual método retorna o caminho absoluto? | |
| Qual método retorna apenas o nome do arquivo? | |
| Qual método retorna a extensão? | |
| Qual a diferença entre path.join() e path.resolve()? | |

## Conclusão
Em duas frases: o que você aprendeu sobre manipulação de caminhos e por que não concatenar strings manualmente.
~~~~

---

## Questão 2: Relatório do Sistema com o Módulo os

**Conceito-chave:** Módulo `os` — `os.platform()`, `os.cpus()`, `os.freemem()`, `os.totalmem()`, `os.homedir()` (Aula 05, Seção 5).

**Objetivo:** Extrair e exibir informações do sistema operacional em um formato legível.

**Passos de Execução:**

1. Crie um script `relatorio-sistema.js`
2. Exiba a plataforma, número de CPUs, memória livre e total (em MB), e o diretório home
3. Use `toFixed(2)` para formatar os valores de memória
4. Execute e salve a saída

**Entrega:** crie `entregas-aula-05/q2-relatorio-sistema.md`:

~~~~
# Questão 2 — Relatório do Sistema

## Script criado
`relatorio-sistema.js`

## Código executado

```javascript
[cole aqui o código completo]
```

## Saída do terminal

```
[cole aqui a saída]
```

## Respostas

| Pergunta | Resposta |
|---|---|
| Qual sua plataforma (linux/darwin/win32)? | |
| Quantos núcleos de CPU seu sistema tem? | |
| Quantos MB de memória livre? | |
| Por que dividir freemem() por 1024*1024? | |

## Conclusão
Em uma frase: para que o módulo os é útil no dia a dia de um desenvolvedor Node.js?
~~~~

---

## Questão 3: Parser de Argumentos CLI

**Conceito-chave:** `process.argv` — parsing de flags de linha de comando (Aula 05, Seções 3 e 6).

**Objetivo:** Implementar um parser de argumentos que transforma `process.argv` em um objeto utilizável.

**Passos de Execução:**

1. Crie um script `meu-parser.js`
2. Implemente a função `parseArgs(argv)` que ignora os dois primeiros elementos e processa:
   - Flags com valor: `--chave=valor` → `{ chave: 'valor' }`
   - Flags booleanas: `--flag` → `{ flag: true }`
   - Se a flag `--help` for passada, exiba uma mensagem de ajuda e não parseie
3. Teste com `node meu-parser.js --nome=Maria --verbose --idade=30`

**Entrega:** crie `entregas-aula-05/q3-parser.md`:

~~~~
# Questão 3 — Parser de Argumentos

## Script criado
`meu-parser.js`

## Código implementado

```javascript
[cole aqui a função parseArgs completa]
```

## Teste

Comando executado:
```
node meu-parser.js --nome=Maria --verbose --idade=30
```

Saída obtida:
```
[cole aqui]
```

## Respostas

| Pergunta | Resposta |
|---|---|
| O que contém process.argv[0]? | |
| O que contém process.argv[1]? | |
| A partir de qual índice começam os argumentos do usuário? | |
| Como você trataria --help no seu parser? | |

## Conclusão
Em duas frases: por que process.argv é útil e qual a limitação do parser que você implementou.
~~~~

---

## Questão 4: Variáveis de Ambiente na Prática

**Conceito-chave:** `process.env` — acesso e uso de variáveis de ambiente (Aula 05, Seções 2 e 6).

**Objetivo:** Ler, usar e documentar variáveis de ambiente para configurar um programa.

**Passos de Execução:**

1. Crie um script `env-config.js` que lê `process.env.NODE_ENV` e define um valor padrão `'development'`
2. Leia também `process.env.PORT` com padrão `3000`
3. Exiba uma mensagem: "Servidor rodando na porta PORT no modo NODE_ENV"
4. Execute duas vezes: sem variável e com `set NODE_ENV=production` (Windows) ou `NODE_ENV=production node env-config.js` (Linux/macOS)
5. Adicione uma terceira variável `DB_URL` com fallback e exiba

**Entrega:** crie `entregas-aula-05/q4-env-config.md`:

~~~~
# Questão 4 — Variáveis de Ambiente

## Script criado
`env-config.js`

## Código implementado

```javascript
[cole aqui o código completo]
```

## Testes

### Execução sem variáveis de ambiente
```
[comando executado e saída]
```

### Execução com NODE_ENV=production
```
[comando executado e saída]
```

### Execução com NODE_ENV=production e PORT=5000
```
[comando executado e saída]
```

## Respostas

| Pergunta | Resposta |
|---|---|
| O que acontece se você não define NODE_ENV? | |
| Por que variáveis de ambiente são preferíveis a constantes no código? | |
| O que NUNCA deve estar em variáveis de ambiente hardcodadas no repositório? | |

## Conclusão
Em duas frases: como variáveis de ambiente ajudam a separar configuração de código e qual o risco de não usá-las.
~~~~

---

## Questão 5: Sistema de Notificação com EventEmitter

**Conceito-chave:** `EventEmitter` — `on()`, `emit()`, `once()` (Aula 05, Seções 4 e 7).

**Objetivo:** Criar um sistema de notificação de eventos usando EventEmitter.

**Passos de Execução:**

1. Crie um script `notificador.js`
2. Crie uma função `criarNotificador()` que retorna um objeto com métodos `on()`, `once()` e `notificar()`
3. Internamente, use um `EventEmitter` real
4. O método `notificar(tipo, mensagem)` deve emitir o evento com o tipo e a mensagem
5. Registre dois ouvintes para o evento `'alerta'`: um que exibe no console e outro que conta o número de alertas
6. Registre um ouvinte `once()` para o evento `'inicializacao'`
7. Dispare eventos e verifique o comportamento

**Entrega:** crie `entregas-aula-05/q5-notificador.md`:

~~~~
# Questão 5 — Sistema de Notificação

## Script criado
`notificador.js`

## Código implementado

```javascript
[cole aqui o código completo]
```

## Saída do terminal

```
[cole aqui a saída da execução]
```

## Respostas

| Pergunta | Resposta |
|---|---|
| Quantas vezes o ouvinte de 'inicializacao' executou? Por quê? | |
| O que acontece se você emite um evento que ninguém está ouvindo? | |
| Como o EventEmitter se relaciona com addEventListener do navegador? | |

## Conclusão
Em duas frases: o que o EventEmitter permite fazer que callbacks simples não permitem e um caso de uso real.
~~~~

---

## Questão 6: Factory Pattern com Validação

**Conceito-chave:** Factory Pattern — função que cria objetos configurados com validação e defaults (Aula 05, Seção 8).

**Objetivo:** Implementar uma factory que cria um objeto de configuração com validação de parâmetros e valores padrão.

**Passos de Execução:**

1. Crie um script `factory-config.js`
2. Implemente `criarConfig(opcoes)` que:
   - Define defaults: `{ porta: 3000, host: 'localhost', verbose: false }`
   - Valida que `porta` é um número entre 1024 e 65535
   - Valida que `host` é uma string não vazia
   - Retorna um objeto imutável (use `Object.freeze()`)
3. Teste com configuração válida, porta inválida e campos faltando

**Entrega:** crie `entregas-aula-05/q6-factory.md`:

~~~~
# Questão 6 — Factory Pattern

## Script criado
`factory-config.js`

## Código implementado

```javascript
[cole aqui o código completo]
```

## Testes

### Configuração válida
```
[comando e saída]
```

### Porta inválida (ex: 80)
```
[comando e saída]
```

### Apenas host
```
[comando e saída]
```

## Respostas

| Pergunta | Resposta |
|---|---|
| O que Object.freeze() faz no objeto retornado? | |
| Qual a vantagem da factory sobre new Classe() neste caso? | |
| Como você adicionaria um novo campo com default sem quebrar o código existente? | |

## Conclusão
Em duas frases: quando usar Factory Pattern e qual problema ele resolve na criação de objetos.
~~~~

---

## Questão 7: CLI Integrada — Projeto Progressivo

**Conceito-chave:** Integração de todos os módulos — path, process, events, Factory Pattern e CLI (Aula 05, Seções 5-8).

**Objetivo:** Construir a ferramenta CLI completa que será a base para o servidor HTTP da Aula 06. Esta é a peça do projeto progressivo.

**Passos de Execução:**

1. Crie a pasta `minha-cli/` com os arquivos `parseArgs.js`, `criarCli.js` e `app.js`
2. O `parseArgs.js` deve conter o parser de argumentos (reaproveite da Q3)
3. O `criarCli.js` deve conter a factory que:
   - Valida o argumento `--arquivo`
   - Resolve o caminho com `path.resolve()`
   - Cria um EventEmitter interno
   - Expõe `on()` e o método `iniciar()` que lê o arquivo JSON
4. O `app.js` deve:
   - Parsear os argumentos
   - Criar a CLI via factory
   - Registrar ouvintes para eventos de progresso
   - Executar `iniciar()`
5. Crie um `tarefas.json` de teste com ao menos 5 tarefas
6. Teste com `--verbose`, sem `--arquivo`, com arquivo inexistente

**Entrega:** crie `entregas-aula-05/q7-cli-integrada.md`:

~~~~
# Questão 7 — CLI Integrada

## Estrutura de arquivos

```
minha-cli/
├── parseArgs.js
├── criarCli.js
├── app.js
└── tarefas.json
```

## Conteúdo dos arquivos

### parseArgs.js

```javascript
[cole aqui]
```

### criarCli.js

```javascript
[cole aqui]
```

### app.js

```javascript
[cole aqui]
```

### tarefas.json

```json
[cole aqui]
```

## Testes realizados

### Teste 1 — Execução normal com --verbose
```
[comando e saída]
```

### Teste 2 — Sem --arquivo (deve mostrar erro)
```
[comando e saída]
```

### Teste 3 — Arquivo inexistente
```
[comando e saída]
```

## Respostas

| Pergunta | Resposta |
|---|---|
| O que acontece se você omite o --verbose? | |
| Como a CLI usa o padrão Observer? | |
| Qual o papel da factory criarCli()? | |
| Como esta CLI se conecta com a Aula 04? | |
| O que você precisará modificar para transformar esta CLI em um servidor HTTP? | |

## Conclusão
Em um parágrafo (3-4 frases): o que você construiu, como cada módulo da aula contribuiu e como esta CLI será estendida na próxima aula.
~~~~

---

## Checklist Final: Pronto para a Aula 06?

Marque cada item só quando conseguir fazê-lo **sem consultar a aula**:

- [ ] Explico por que caminhos de arquivo variam entre SO e como path.join() resolve isso
- [ ] Diferencio caminho absoluto de relativo e identifico as partes de um caminho
- [ ] Defino variável de ambiente e dou exemplos do que deve e não deve ir nelas
- [ ] Explico o padrão Observer com minhas palavras, ancorando em addEventListener
- [ ] Construo caminhos com path.join() e path.resolve(), extraio partes com basename/dirname/extname
- [ ] Crio um script que exibe informações do sistema com o módulo os
- [ ] Implemento um parser de argumentos CLI que trata flags com e sem valor
- [ ] Crio um EventEmitter com on(), emit() e once() para notificar eventos
- [ ] Implemento uma factory com validação de parâmetros e valores padrão
- [ ] Construo a CLI completa que lê argumentos, resolve caminhos, emite eventos e carrega JSON

> *Acertou todos? Você está pronto para a Aula 06, onde esta CLI ganhará uma interface HTTP. Travou em algum? Releia a seção indicada na questão correspondente antes de avançar.*

---
titulo: "Node.js — Do Zero ao Servidor Express"
modulo: "01"
aula: "04"
---

# Node.js — Do Zero ao Servidor Express Aula 04 — Questões de Aprendizagem

## Como Usar Este Arquivo

Este arquivo é o **checkpoint de domínio** da Aula 04. Cada questão verifica um conceito-chave da aula. O objetivo é uma pergunta central: *"eu realmente entendi a matéria?"*

**Instruções:**

1. Crie uma pasta `entregas-aula-04/` para guardar suas respostas
2. Faça as questões em ordem — cada uma constrói sobre a anterior
3. Cada questão tem um **Objetivo**, **Passos de Execução** e um template de **Entrega** para você preencher
4. Ao final, marque o **Checklist** — só avance para a Aula 05 se conseguir marcar todos os itens sem consultar a aula
5. Se travar em uma questão, releia a seção indicada em **Conceito-chave**

---

## Questão 1: Lendo Arquivos de Forma Síncrona

**Conceito-chave:** `readFileSync` + encoding (Aula 04, Seção 5).

**Objetivo:** Demonstrar que você sabe ler e exibir o conteúdo de um arquivo de texto usando `readFileSync`, e entende por que o encoding é necessário.

**Passos de Execução:**

1. Crie um arquivo `mensagem.txt` com o texto "Node.js é incrível!"
2. Crie um script `leitor-sync.js` que lê `mensagem.txt` com `readFileSync` e exibe no terminal
3. Execute o script primeiro sem o parâmetro de encoding e observe o resultado
4. Depois execute com `'utf8'` e veja a diferença
5. Analise: por que o resultado muda quando você adiciona o encoding?

**Entrega:** crie `entregas-aula-04/questao-01-leitor-sync.md`:

~~~~
# Questão 1 — Leitor de Arquivos Síncrono

## Código do Script
```js
// Cole aqui seu código
```

## Saída sem Encoding

```
// Cole a saída do terminal aqui
```

## Saída com 'utf8'

```
// Cole a saída do terminal aqui
```

## Análise

Por que o resultado muda quando você adiciona o parâmetro `'utf8'`?

**Sua resposta:**

[Escreva sua explicação em 2-3 frases]

## Conclusão

Em 2-3 frases: o que você aprendeu sobre `readFileSync` e encoding?
~~~~

---

## Questão 2: Aplicando o Padrão Error-first Callback

**Conceito-chave:** Error-first Callback Pattern (Aula 04, Seção 6).

**Objetivo:** Demonstrar que você sabe usar `fs.readFile` com callback seguindo o padrão Error-first, incluindo tratamento de erro para `ENOENT`.

**Passos de Execução:**

1. Crie um script `leitor-callback.js` que tenta ler um arquivo `dados-inexistente.txt` com `fs.readFile`
2. No callback, implemente o padrão Error-first: verifique `err` antes de usar `data`
3. Trate especificamente o código `'ENOENT'` com uma mensagem amigável
4. Crie o arquivo `dados-inexistente.txt` com algum conteúdo e execute novamente para ver o fluxo de sucesso
5. Observe a ordem das mensagens no terminal: o `console.log` após o `readFile` aparece antes do callback?

**Entrega:** crie `entregas-aula-04/questao-02-callback.md`:

~~~~
# Questão 2 — Error-first Callback

## Código do Script
```js
// Cole aqui seu código
```

## Saída com Arquivo Inexistente

```
// Cole a saída do terminal aqui
```

## Saída com Arquivo Existente

```
// Cole a saída do terminal aqui
```

## Análise

1. Qual foi a ordem das mensagens no terminal? O que isso prova?

**Sua resposta:**

2. Por que o Error-first Callback coloca `err` como primeiro argumento?

**Sua resposta:**

## Conclusão

Em 2-3 frases: o que você aprendeu sobre callbacks e tratamento de erro em operações de arquivo?
~~~~

---

## Questão 3: Comparando Síncrono e Assíncrono na Prática

**Conceito-chave:** Bloqueio da thread vs event loop (Aula 04, Seções 5 e 6).

**Objetivo:** Demonstrar que você entende a diferença prática entre operação bloqueante e não bloqueante executando o mesmo cenário nos dois modelos.

**Passos de Execução:**

1. Crie um arquivo `tarefa-demora.txt` com um texto razoavelmente longo (cole um parágrafo de 5 linhas)
2. Crie um script `comparacao.js` que executa as duas abordagens:
   - Primeiro: lê o arquivo com `readFileSync`, registrando `console.time`/`console.timeEnd` ao redor
   - Segundo: lê o arquivo com `readFile`, registrando `console.time`/`console.timeEnd` dentro do callback
3. Em ambos os casos, coloque um `console.log('FIM')` após a chamada de leitura
4. Execute e analise a diferença de comportamento

**Entrega:** crie `entregas-aula-04/questao-03-comparacao.md`:

~~~~
# Questão 3 — Síncrono vs Assíncrono

## Código do Script
```js
// Cole aqui seu código
```

## Saída do Script

```
// Cole a saída completa do terminal aqui
```

## Análise

1. Em qual abordagem o `console.log('FIM')` aparece antes do conteúdo do arquivo? Por quê?

**Sua resposta:**

2. Em um servidor web com 1000 usuários simultâneos, qual abordagem causaria travamento? Explique.

**Sua resposta:**

## Conclusão

Em 2-3 frases: a diferença fundamental entre síncrono e assíncrono em operações de I/O.
~~~~

---

## Questão 4: Reescrevendo Callbacks com async/await

**Conceito-chave:** `fs.promises` + async/await (Aula 04, Seção 7).

**Objetivo:** Demonstrar que você sabe refatorar código com callbacks para o estilo moderno com `fs.promises` e `try/catch`.

**Passos de Execução:**

1. Dado o código com callbacks abaixo, refatore-o para usar `fs.promises` + async/await:

```js
const fs = require('fs');

function processarArquivo(caminho) {
  fs.readFile(caminho, 'utf8', (err, data) => {
    if (err) {
      console.error('Erro:', err.message);
      return;
    }
    const linhas = data.split('\n').length;
    console.log(`O arquivo tem ${linhas} linha(s)`);
  });
}
```

2. Crie uma versão `processarArquivoAsync` usando `const fs = require('fs').promises` e `async/await`
3. O tratamento de erro deve usar `try/catch`
4. Teste com um arquivo existente e com um inexistente

**Entrega:** crie `entregas-aula-04/questao-04-async-await.md`:

~~~~
# Questão 4 — Refatorando para async/await

## Código Refatorado
```js
// Cole aqui seu código com fs.promises + async/await
```

## Saída com Arquivo Existente

```
// Cole a saída do terminal aqui
```

## Saída com Arquivo Inexistente

```
// Cole a saída do terminal aqui
```

## Análise

Compare o código original (callbacks) com o refatorado (async/await). Quais as vantagens do segundo?

**Sua resposta:**

## Conclusão

Em 2-3 frases: por que `fs.promises` + async/await é o padrão recomendado para código novo?
~~~~

---

## Questão 5: Criando um Leitor de Configuração JSON

**Conceito-chave:** JSON + arquivos + `__dirname` (Aula 04, Seção 8).

**Objetivo:** Demonstrar que você sabe ler um arquivo JSON do disco, parseá-lo e acessar suas propriedades usando caminhos seguros com `__dirname`.

**Passos de Execução:**

1. Crie um arquivo `config.json` com o conteúdo:
```json
{
  "app": "Gerenciador",
  "versão": "2.0.0",
  "porta": 8080,
  "debug": false,
  "idioma": "pt-BR"
}
```

2. Crie um script `ler-config.js` que lê `config.json` usando `path.join(__dirname, 'config.json')`
3. Exiba cada propriedade do JSON no terminal no formato: `app: Gerenciador`
4. Teste executando o script de um diretório diferente (ex: `node ~/projeto/ler-config.js`)
5. Verifique que o script funciona independentemente de onde é executado

**Entrega:** crie `entregas-aula-04/questao-05-config.md`:

~~~~
# Questão 5 — Leitor de Configuração JSON

## Código do Script
```js
// Cole aqui seu código
```

## Saída ao Executar da Própria Pasta

```
// Cole a saída do terminal aqui
```

## Saída ao Executar de Outra Pasta

```
// Cole o comando e a saída aqui
// Ex: node /caminho/completo/para/ler-config.js
```

## Análise

Por que `path.join(__dirname, 'config.json')` funciona de qualquer lugar, mas `'./config.json'` quebra?

**Sua resposta:**

## Conclusão

Em 2-3 frases: a importância de `__dirname` e `path.join` para criar caminhos portáveis.
~~~~

---

## Questão 6: Verificando Existência e Criando Diretórios

**Conceito-chave:** `existsSync` + `mkdirSync` (Aula 04, Seção 8).

**Objetivo:** Demonstrar que você sabe verificar se um diretório existe e criá-lo com subdiretórios de forma segura.

**Passos de Execução:**

1. Crie um script `organizador.js` que:
   - Verifica se o diretório `backups/` existe
   - Se não existe, cria `backups/semanais/` com `{ recursive: true }`
   - Cria um arquivo `backups/semanais/backup-1.json` com conteúdo `{"criado": "2024-07-14"}`
   - Exibe uma mensagem de confirmação
2. Execute o script duas vezes
3. Na segunda execução, o diretório já existe — o script não deve lançar erro

**Entrega:** crie `entregas-aula-04/questao-06-diretorios.md`:

~~~~
# Questão 6 — Verificando e Criando Diretórios

## Código do Script
```js
// Cole aqui seu código
```

## Saída da Primeira Execução

```
// Cole a saída do terminal aqui
```

## Saída da Segunda Execução

```
// Cole a saída do terminal aqui
```

## Análise

1. O que aconteceria se você chamasse `mkdirSync('./backups/semanais')` sem `{ recursive: true }` e o diretório `backups/` não existisse?

**Sua resposta:**

2. Por que é seguro executar o script várias vezes?

**Sua resposta:**

## Conclusão

Em 2-3 frases: o que você aprendeu sobre `existsSync` e `mkdirSync` com `recursive`.
~~~~

---

## Questão 7: Implementando Persistência do Gerenciador de Tarefas

**Conceito-chave:** Projeto Progressivo — save/load com JSON (Aula 04, Seção 9).

**Objetivo:** Demonstrar que você sabe implementar as funções de carregamento e salvamento do Gerenciador de Tarefas usando `fs.promises` + async/await e exportar como módulo CommonJS.

**Passos de Execução:**

1. Crie o módulo `gerenciador-tarefas.js` com:
   - `carregarTarefas(caminho)` — lê JSON do arquivo, retorna array (ou `[]` se não existir)
   - `salvarTarefas(caminho, tarefas)` — serializa array como JSON e escreve no disco
   - Use `fs.promises` + async/await com `try/catch`
   - Exporte as funções via `module.exports`
2. Crie um script `teste-gerenciador.js` que:
   - Importa as funções
   - Adiciona 2 tarefas manualmente (objetos com `id`, `titulo`, `concluída`)
   - Salva no arquivo `minhas-tarefas.json`
   - Carrega e exibe no terminal
3. Execute e verifique que o arquivo foi criado com o JSON correto

**Entrega:** crie `entregas-aula-04/questao-07-gerenciador.md`:

~~~~
# Questão 7 — Persistência do Gerenciador de Tarefas

## Código do Módulo (gerenciador-tarefas.js)
```js
// Cole aqui seu código
```

## Código do Script de Teste (teste-gerenciador.js)
```js
// Cole aqui seu código
```

## Saída do Terminal

```
// Cole a saída do terminal aqui
```

## Conteúdo do Arquivo minhas-tarefas.json

```json
// Cole o conteúdo do arquivo gerado aqui
```

## Análise

Por que `carregarTarefas` retorna um array vazio na primeira execução em vez de lançar um erro?

**Sua resposta:**

## Conclusão

Em 2-3 frases: como a persistência em JSON substitui o `localStorage` que você usava no navegador?
~~~~

---

## Questão 8: Diagnosticando Erros Comuns do Módulo fs

**Conceito-chave:** Tratamento de erro em operações de arquivo (Aula 04, Seções 5-8).

**Objetivo:** Demonstrar que você sabe identificar e tratar os erros mais comuns ao trabalhar com o módulo fs.

**Passos de Execução:**

1. Para cada cenário abaixo, crie um pequeno script que produza o erro e o trate adequadamente:
   - **Cenário A**: Tentar ler um arquivo que não existe (`ENOENT`)
   - **Cenário B**: Tentar ler um arquivo JSON vazio e fazer `JSON.parse` (`SyntaxError`)
   - **Cenário C**: Chamar `readFileSync` sem callback nem `try/catch` em um arquivo inexistente
2. Cada script deve exibir uma mensagem amigável em vez de deixar o programa quebrar
3. Explique por que cada erro ocorre

**Entrega:** crie `entregas-aula-04/questao-08-erros.md`:

~~~~
# Questão 8 — Diagnosticando Erros do fs

## Cenário A: Arquivo Inexistente

**Código:**
```js
// Cole aqui
```

**Mensagem de erro que aparece sem tratamento:**

```
// Cole aqui
```

**Tratamento aplicado e saída amigável:**

```
// Cole aqui
```

**Por que ocorre:**

[Sua explicação]

## Cenário B: JSON Vazio ou Inválido

**Código:**
```js
// Cole aqui
```

**Mensagem de erro sem tratamento:**

```
// Cole aqui
```

**Tratamento aplicado e saída amigável:**

```
// Cole aqui
```

**Por que ocorre:**

[Sua explicação]

## Cenário C: readFileSync sem Proteção

**Código:**
```js
// Cole aqui
```

**Mensagem de erro sem tratamento:**

```
// Cole aqui
```

**Tratamento aplicado e saída amigável:**

```
// Cole aqui
```

**Por que ocorre:**

[Sua explicação]

## Conclusão

Em 3-4 frases: qual a importância de tratar erros em operações de arquivo e quais padrões você usará daqui em diante?
~~~~

---

## Checklist Final: Pronto para a Aula 05?

Marque cada item só quando conseguir fazê-lo **sem consultar a aula**:

- [ ] Sei ler um arquivo com `readFileSync` e entendo por que o bloqueio é aceitável em scripts de inicialização (Objetivo #8 — Seção 5)
- [ ] Sei usar `readFile` com callback seguindo o contrato Error-first: `if (err) { ...; return; }` (Objetivo #9 — Seção 6)
- [ ] Sei usar `fs.promises` com async/await e tratar erros com `try/catch` (Objetivo #10 — Seção 7)
- [ ] Sei ler e escrever JSON em arquivos com `JSON.parse` e `JSON.stringify` (Objetivo #11 — Seção 8)
- [ ] Sei criar diretórios com `mkdirSync({ recursive: true })` e verificar existência com `existsSync` (Objetivo #12 — Seção 8)
- [ ] Sei usar `__dirname` com `path.join` para construir caminhos que funcionam de qualquer diretório (Objetivo #13 — Seção 8)
- [ ] Implementei as funções `carregarTarefas()` e `salvarTarefas()` do Gerenciador de Tarefas (Objetivo #14 — Seção 9)
- [ ] Entendo a diferença entre operação bloqueante e não bloqueante e sei escolher entre síncrono, callbacks e async/await
- [ ] Sei o que é um buffer, por que o encoding importa e como o SO gerencia operações de I/O
- [ ] Consigo diagnosticar e tratar erros comuns como `ENOENT` e `SyntaxError` do `JSON.parse`

> *Acertou todos? Você está pronto para a Aula 05: Path, OS e Módulos Utilitários — onde vai aprender a manipular caminhos, criar ferramentas CLI e dominar o EventEmitter. Travou em algum item? Releia a seção indicada na questão correspondente antes de avançar.*

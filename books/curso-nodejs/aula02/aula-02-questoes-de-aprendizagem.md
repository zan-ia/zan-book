---
titulo: "Node.js — Do Zero ao Servidor Express — Aula 02 — Questões de Aprendizagem"
modulo: "01"
aula: "02"
---

# Node.js — Do Zero ao Servidor Express Aula 02 — Questões de Aprendizagem

## Como Usar Este Arquivo

Este é o seu checkpoint de aprendizagem. Após concluir a leitura e as práticas da Aula 02, responda a cada questão sem consultar o material. A pergunta central é: "Eu realmente entendi como funciona o gerenciamento de pacotes com npm?" Cada questão indica a seção da aula que verifica.

**Instruções:**
- Crie uma pasta `entregas-aula-02/` dentro da sua pasta de estudos.
- Para cada questão, crie o arquivo indicado no template e preencha.
- Só avance para a próxima aula quando conseguir completar todas as questões por conta própria.

---

## Questão 1: Criando o Projeto do Gerenciador de Tarefas

**Conceito-chave:** npm init e package.json (Aula 02, Seção 5).

**Objetivo:** Criar um package.json completo para o projeto Gerenciador de Tarefas, com metadados, scripts e configuração mínima.

**Passos de Execução:**

1. Crie uma nova pasta `gerenciador-tarefas-v2/` (não use a da aula — é uma nova versão).
2. Execute `npm init -y` para gerar o package.json com valores padrão.
3. Edite o package.json para incluir: `author` com seu nome, `description` com "API REST para gerenciamento de tarefas", e `license` com "MIT".
4. Crie o arquivo `index.js` com `console.log('Gerenciador de Tarefas v2 iniciado')`.

**Entrega:** crie `entregas-aula-02/01-package-json.md`:

~~~~
**Questão 1 — Criando o Projeto do Gerenciador de Tarefas**

## Comandos Executados

[Liste os comandos que você usou para criar o projeto]

## package.json Final

```json
[Cole aqui o conteúdo completo do seu package.json]
```

## index.js

```javascript
[Cole aqui o conteúdo do index.js]
```

## Verificação

Execute `node index.js` e cole a saída aqui:

```
[Saída do terminal]
```

## Conclusão
[Em 2-3 frases: o que o package.json representa e por que ele é importante para o projeto?]
~~~~

---

## Questão 2: Interpretando Versionamento Semântico

**Conceito-chave:** SemVer (Aula 02, Seção 2).

**Objetivo:** Interpretar 5 cenários de mudança de versão e determinar se são MAJOR, MINOR ou PATCH.

**Passos de Execução:**

1. Analise cada cenário abaixo.
2. Determine se a mudança é MAJOR, MINOR ou PATCH.
3. Explique em uma frase por que.

Cenários:
- a) Um pacote de formatação de data adiciona suporte a novos fusos horários sem remover nada.
- b) Uma biblioteca de UI renomeia o componente principal de `Button` para `PushButton`.
- c) Um cliente HTTP corrige um bug que causava timeout em requisições lentas.
- d) Um validador de email remove uma função que estava marcada como obsoleta há 3 versões.
- e) Uma biblioteca de templates melhora a performance do parser sem mudar a API.

**Entrega:** crie `entregas-aula-02/02-semver.md`:

~~~~
**Questão 2 — Interpretando Versionamento Semântico**

| Cenário | Tipo (MAJOR/MINOR/PATCH) | Justificativa |
|---|---|---|
| a) Adiciona fusos horários | | |
| b) Renomeia Button | | |
| c) Corrige timeout | | |
| d) Remove função obsoleta | | |
| e) Melhora performance | | |

## Conclusão
[Em 2-3 frases: por que o SemVer é importante para quem usa pacotes de terceiros?]
~~~~

---

## Questão 3: Instalando e Inspecionando a Árvore de Dependências

**Conceito-chave:** npm install, dependências diretas e transitórias (Aula 02, Seções 3 e 6).

**Objetivo:** Instalar um pacote, inspecionar a árvore de dependências com `npm ls` e identificar dependências diretas vs transitórias.

**Passos de Execução:**

1. Dentro do projeto `gerenciador-tarefas-v2/`, instale o pacote `is-even` (verifica se um número é par).
2. Execute `npm ls --depth=1` e observe a árvore.
3. Identifique quantas dependências diretas e quantas transitórias aparecem.
4. Abra o `package-lock.json` e encontre a versão EXATA do `is-even` e suas dependências.
5. Execute `npm ls is-even` para ver detalhes específicos do pacote.

**Entrega:** crie `entregas-aula-02/03-arvore-dependencias.md`:

~~~~
**Questão 3 — Instalando e Inspecionando a Árvore**

## Comando de Instalação

```
[Comando usado]
```

## Árvore de Dependências (npm ls)

```
[Cole a saída do npm ls --depth=1]
```

## Análise

**Dependências diretas:** [quantas? Quais?]
**Dependências transitórias:** [quantas? Quais?]

## package-lock.json

**Versão exata do is-even no lock file:** [versão]
**Dependências do is-even no lock file:** [liste]

## Conclusão
[Em 2-3 frases: o que a diferença entre manifesto e lock file significa na prática?]
~~~~

---

## Questão 4: Classificando Dependências

**Conceito-chave:** dependencies vs devDependencies (Aula 02, Seções 4 e 7).

**Objetivo:** Classificar 3 pacotes como `dependency` ou `devDependency` e justificar cada escolha.

**Passos de Execução:**

1. Para cada pacote abaixo, determine se ele deve ser `dependency` ou `devDependency`.
2. Execute o comando de instalação correto.
3. Verifique no `package.json` se o pacote foi para a seção correta.

Pacotes:
- `lodash` — biblioteca de utilitários que seu sistema usa em execução
- `eslint` — linter que analisa seu código durante o desenvolvimento
- `axios` — cliente HTTP que seu servidor usa para fazer requisições
- `vitest` — framework de testes unitários

**Entrega:** crie `entregas-aula-02/04-classificacao-dependencias.md`:

~~~~
**Questão 4 — Classificando Dependências**

## Tabela de Classificação

| Pacote | Tipo | Comando de Instalação | Por quê? |
|---|---|---|---|
| lodash | | | |
| eslint | | | |
| axios | | | |
| vitest | | | |

## Verificação no package.json

[Cole a seção dependencies e devDependencies do seu package.json]

## Conclusão
[Em 2-3 frases: qual critério você usou para decidir onde cada pacote pertence?]
~~~~

---

## Questão 5: Automatizando com Scripts

**Conceito-chave:** npm scripts (Aula 02, Seção 8).

**Objetivo:** Criar scripts start, dev, lint e prestart no package.json, e verificar o ciclo de vida.

**Passos de Execução:**

1. No `package.json` do `gerenciador-tarefas-v2/`, adicione os scripts:
   - `prestart`: exibe "Verificando ambiente..."
   - `start`: executa `node index.js`
   - `dev`: executa `nodemon index.js` (precisa instalar nodemon como devDependency)
   - `lint`: exibe "Executando linter..." (simulação)
2. Execute `npm run` (sem argumentos) e veja a lista de scripts.
3. Execute `npm start` e observe a ordem (prestart antes de start).
4. Execute `npm run lint`.

**Entrega:** crie `entregas-aula-02/05-scripts.md`:

~~~~
**Questão 5 — Automatizando com Scripts**

## Seção scripts do package.json

```json
[Cole a seção scripts do seu package.json]
```

## Lista de Scripts (npm run)

```
[Cole a saída do npm run]
```

## Execução do npm start

[Cole a saída do terminal mostrando prestart e start]

## Conclusão
[Em 2-3 frases: por que scripts no package.json são úteis no dia a dia?]
~~~~

---

## Questão 6: Executando com npx

**Conceito-chave:** npx (Aula 02, Seção 9).

**Objetivo:** Executar 3 pacotes com npx sem instalá-los como dependência, demonstrando o funcionamento do executor temporário.

**Passos de Execução:**

1. Execute `npx cowsay "Testando npx"` — veja a vaquinha sem instalar cowsay.
2. Execute `npx cowsay "Teste rápido"` — veja a vaquinha com uma mensagem personalizada sem instalar nada.
3. Execute `npx figlet "Node.js"` — gere uma arte ASCII ornamental com o texto "Node.js" (figlet transforma texto em arte, sem precisar instalar nada). Se o comando falhar, use o fallback: `npx cowsay "teste"`.
4. Confirme que nenhum desses pacotes aparece no `package.json`.

**Entrega:** crie `entregas-aula-02/06-npx.md`:

~~~~
**Questão 6 — Executando com npx**

## Comandos e Saídas

**npx cowsay "Testando npx"**

```
[Cole a saída]
```

**npx is-even 42**

```
[Cole a saída]
```

**npx figlet "Node.js"** (ou fallback: `npx cowsay "teste"`)

```
[Cole a saída — a arte ASCII gerada pelo figlet ou a vaquinha do cowsay]
```

## Verificação

O `package.json` foi alterado? [Sim / Não]

[Se sim, explique por que. Se não, explique por que não.]

## Conclusão
[Em 2-3 frases: qual a diferença prática entre npm install e npx?]
~~~~

---

## Questão 7: Deletar, Reinstalar e Comparar Versões

**Conceito-chave:** node_modules e lock file (Aula 02, Seções 3 e 6).

**Objetivo:** Executar o experimento completo de deletar `node_modules/`, reinstalar e comparar se as versões são idênticas.

**Passos de Execução:**

1. No projeto `gerenciador-tarefas-v2/`, anote a versão do `is-even` no `package-lock.json`.
2. De-lete a pasta `node_modules/` (pode deletar com a interface do sistema).
3. Execute `npm install` e verifique se a pasta foi recriada.
4. Compare a versão do `is-even` no `package-lock.json` — mudou?
5. Adicione um pacote novo: `npm install chalk`.
6. Verifique como o `package-lock.json` mudou (ficou maior, com mais entradas).

**Entrega:** crie `entregas-aula-02/07-deletar-reinstalar.md`:

~~~~
**Questão 7 — Deletar, Reinstalar e Comparar**

## Versão Antes de Deletar

**Versão do is-even no lock file:** [versão]

## Após Reinstalar

**node_modules/ foi recriada?** [Sim / Não]
**Versão do is-even no lock file mudou?** [Sim / Não — qual era e qual ficou]

## Após Adicionar chalk

**O lock file agora tem quantas linhas (aproximadamente)?** [número]
**O lock file mudou além de adicionar chalk?** [Explique]

## Conclusão
[Em 2-3 frases: por que o lock file garante que a instalação é reproduzível?]
~~~~

---

## Questão 8: Síntese — Mini Projeto Calculadora CLI

**Conceito-chave:** Síntese — npm init, install, scripts, npx (Aula 02, todas as seções).

**Objetivo:** Criar um projeto `calculadora-cli` completo, do zero, aplicando todos os conceitos da aula.

**Passos de Execução:**

1. Crie uma pasta `calculadora-cli/` e execute `npm init -y`.
2. Crie o arquivo `index.js` com o código da calculadora simplificada fornecido abaixo. Instale o `chalk` como dependência de produção: `npm install chalk`.
3. Copie o código do `index.js` fornecido na Dica — ele usa valores fixos para demonstrar as operações aritméticas básicas (soma, subtração, multiplicação, divisão).
4. Adicione scripts: `start` (node index.js), `dev` (nodemon index.js — instale nodemon como devDependency).
5. Execute a calculadora com `node index.js` e veja o resultado das operações no terminal.
6. Teste com npx: `npx is-even 8` para verificar se 8 é par.

Dica: use valores fixos no código para testar cada operação. O código abaixo já faz a soma de 5 + 3 — em aulas futuras você aprenderá a receber valores dinâmicos:

```javascript
const chalk = require('chalk');
const a = 5;
const b = 3;

function calculadora(op, x, y) {
  if (op === 'soma') return x + y;
  if (op === 'sub') return x - y;
  if (op === 'mult') return x * y;
  if (op === 'div') return x / y;
  return 'Operação inválida';
}

console.log(chalk.green('Soma: ' + calculadora('soma', a, b)));
console.log(chalk.blue('Subtração: ' + calculadora('sub', a, b)));
console.log(chalk.yellow('Multiplicação: ' + calculadora('mult', a, b)));
console.log(chalk.red('Divisão: ' + calculadora('div', a, b)));
```

**Entrega:** crie `entregas-aula-02/08-calculadora-cli.md`:

~~~~
**Questão 8 — Síntese — Mini Projeto Calculadora CLI**

## package.json

```json
[Cole o package.json completo com scripts e dependências]
```

## index.js

```javascript
[Cole o código da calculadora — use o código da Dica acima]
```

## Exemplos de Execução

**node index.js**
```
Soma: 8
Subtração: 2
Multiplicação: 15
Divisão: 1.666...
```

**node index.js (após alterar valores fixos para 4 e 5)**
```
Soma: 9
Subtração: -1
Multiplicação: 20
Divisão: 0.8
```

**npx is-even 8**
```
[Saída esperada: true]
```

## Lista de Comandos Utilizados

[Liste todos os comandos npm/npx que você usou para criar e testar este projeto]

## Conclusão
[Em 3-4 frases: o que você aprendeu ao criar um projeto completo do zero?]
~~~~

---

## Checklist Final: Pronto para a Próxima Aula?

Marque cada item só quando conseguir fazê-lo **sem consultar a aula**:

- [ ] Eu consigo explicar o problema que um gerenciador de pacotes resolve (Seção 1)
- [ ] Eu consigo interpretar versões SemVer e sei o que MAJOR, MINOR e PATCH significam (Seção 2)
- [ ] Eu consigo diferenciar dependências diretas de transitórias (Seção 3)
- [ ] Eu consigo explicar a diferença entre manifesto e lock file (Seção 3)
- [ ] Eu criei um projeto com `npm init` e entendo cada campo do `package.json` (Seção 5)
- [ ] Eu instalei pacotes com `npm install` e entendo o que acontece em `node_modules/` (Seção 6)
- [ ] Eu diferencio `dependencies` de `devDependencies` na prática (Seção 7)
- [ ] Eu configurei scripts no `package.json` e usei `npm run`, `npm start`, `npm test` (Seção 8)
- [ ] Eu usei `npx` para executar pacotes sem instalá-los (Seção 9)
- [ ] Eu completei todas as 8 questões de aprendizagem sem consultar a aula (este arquivo)

> *Acertou todos? Você está pronto para a próxima aula: Módulos CommonJS — require, module.exports e Escopo. Vai entender como o Node.js organiza o código em módulos e como conectar seus arquivos. Travou em algum? Releia a seção indicada na questão correspondente antes de avançar.*

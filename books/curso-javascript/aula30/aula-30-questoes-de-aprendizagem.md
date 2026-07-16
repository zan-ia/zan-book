---
titulo: "JavaScript — Do Zero ao Profissional — Aula 30 — Questões de Aprendizagem"
modulo: "01"
aula: "30"
---

# JavaScript — Do Zero ao Profissional Aula 30 — Questões de Aprendizagem

## Como Usar Este Arquivo

Este arquivo é o **checkpoint de aprendizagem** da Aula 30. A pergunta central é: "eu realmente entendi ES Modules, Error Handling, Debugging e Código Limpo?"

Cada questão testa um conceito-chave da aula. Leia atentamente o Objetivo e os Passos de Execução, depois preencha o template de Entrega com suas respostas e código.

**Instruções:**

1. Crie uma pasta `entregas-aula-30/` no diretório do seu projeto
2. Para cada questão, crie um arquivo seguindo o template indicado
3. Responda SEM consultar a aula — se travar, a seção indicada em **Conceito-chave** mostra onde revisar
4. Ao final, marque o **Checklist Final** para verificar se está pronto para a Aula 31

---

## Questão 1: Criando Módulos com import/export

**Conceito-chave:** ES Modules — named exports, default exports e import combinado (Aula 30, Seção 5).

**Objetivo:** Demonstrar que você sabe criar módulos ES com diferentes tipos de export e importá-los em um ponto de entrada.

**Passos de Execução:**

1. Crie o arquivo `utilitarios/matematica.js` com duas funções de named export: `somar(a, b)` e `multiplicar(a, b)`, e uma constante `PI = 3.14159`
2. Crie o arquivo `modelos/calculadora.js` com uma classe `Calculadora` como default export — ela deve ter um método `calcular(operacao, a, b)` que usa as funções importadas de `matematica.js`
3. Crie o arquivo `app.js` que importa a classe Calculadora (default) E as funções matemáticas (named) — use import combinado
4. Use a calculadora para: `somar(10, 20)`, `multiplicar(3, 7)` e exiba `PI`
5. Configure `index.html` com `<script type="module" src="app.js">`

**Entrega:** crie `entregas-aula-30/q1-modulos-es.md`:

~~~~
# Questão 1 — Módulos ES

## Estrutura de arquivos

Liste os arquivos criados (caminhos relativos):

```

```

## Código dos módulos

### utilitarios/matematica.js

```javascript

```

### modelos/calculadora.js

```javascript

```

### app.js

```javascript

```

## index.html (linha do script)

```html

```

## Saída do console

Copie a saída exata que apareceu no console:

```

```

## Reflexão

Por que a classe Calculadora foi exportada como default e as funções matemáticas como named? Justifique em 2-3 frases.

```

```
~~~~

---

## Questão 2: Tratamento de Erros com try/catch/finally e Erros Customizados

**Conceito-chave:** Error Handling — try/catch/finally, throw, erros customizados, finally para limpeza (Aula 30, Seção 6).

**Objetivo:** Demonstrar que você sabe construir blocos try/catch/finally com erros customizados e tratamento específico por tipo de erro.

**Passos de Execução:**

1. Crie a classe `ErroSaldoInsuficiente extends Error` com propriedades `saldoAtual` e `valorSolicitado`
2. Crie a classe `ErroContaInexistente extends Error` com propriedade `numeroConta`
3. Crie a função `sacar(contas, numeroConta, valor)` que:
   - Verifica se a conta existe (throw ErroContaInexistente se não)
   - Verifica se o saldo é suficiente (throw ErroSaldoInsuficiente se não)
   - Deduz o valor do saldo se tudo OK
   - Use try/catch com instanceof para cada tipo de erro
   - No finally, log "Operação finalizada para conta ${numeroConta}"
4. Teste com: (a) conta inexistente, (b) saldo insuficiente, (c) operação bem-sucedida

**Entrega:** crie `entregas-aula-30/q2-try-catch-erros.md`:

~~~~
# Questão 2 — Tratamento de Erros com try/catch/finally

## Classes de erro customizadas

```javascript

```

## Função sacar(contas, numeroConta, valor)

```javascript

```

## Testes executados

Descreva o que aconteceu em cada teste:

**Teste 1 — Conta inexistente:**
```

```

**Teste 2 — Saldo insuficiente:**
```

```

**Teste 3 — Operação bem-sucedida:**
```

```

## Reflexão

Por que o finally é importante mesmo quando a operação deu certo? Dê um exemplo do mundo real (não de código).

```

```
~~~~

---

## Questão 3: Sessão de Debugging com Breakpoints

**Conceito-chave:** Debugging com DevTools — breakpoints, watch, call stack (Aula 30, Seção 7).

**Objetivo:** Demonstrar que você sabe usar o debugger do navegador para investigar um bug, colocando breakpoints estratégicos e interpretando o call stack.

**Passos de Execução:**

Dado o código abaixo que DEVERIA ordenar números mas retorna ordem errada:

```javascript
const numeros = [3, 15, 1, 22, 7];

function ordenar(lista) {
  return lista.sort(); // ❌ Bug: sort sem função de comparação
}

console.log(ordenar(numeros));
// Esperado: [1, 3, 7, 15, 22]
// Real:     [1, 15, 22, 3, 7] ← ordem alfabética (15 vem antes de 3!)
```

1. Copie o código para um arquivo `.js`, carregue com `<script type="module">` e abra no navegador
2. Coloque um breakpoint na linha `return lista.sort();`
3. No Watch, adicione a expressão `lista`
4. Step Into (F11) para entrar dentro do método `sort()` — note que você NÃO consegue ver o código interno do navegador
5. Step Out (Shift+F11) para sair
6. Adicione um breakpoint condicional `lista.length > 5` — veja que nunca dispara (só 4 números)
7. Corrija o código adicionando a função de comparação: `lista.sort((a, b) => a - b)`

**Entrega:** crie `entregas-aula-30/q3-debugging-sessao.md`:

~~~~
# Questão 3 — Sessão de Debugging

## Código original com bug

```javascript

```

## Passos executados

Descreva O QUE você fez em cada passo e O QUE observou:

**Passo 1 — Breakpoint na linha sort():**
```

```

**Passo 2 — Expressão no Watch:**
```

```

**Passo 3 — Step Into (F11):**
```

```

**Passo 4 — Step Out (Shift+F11):**
```

```

**Passo 5 — Breakpoint condicional:**
```

```

## Código corrigido

```javascript

```

## Reflexão

Por que `sort()` sem função de comparação ordena como se fossem strings? Explique o que acontece internamente.

```

```
~~~~

---

## Questão 4: Refatorando Logs com Console Avançado

**Conceito-chave:** Console Avançado — console.table, console.group, console.time (Aula 30, Seção 8).

**Objetivo:** Demonstrar que você sabe transformar console.log esparso em logs estruturados e profissionais.

**Passos de Execução:**

Dado o código abaixo com logs bagunçados:

```javascript
async function buscarProdutos() {
  console.log('iniciando busca...');
  const resposta = await fetch('https://api.exemplo.com/produtos');
  const produtos = await resposta.json();
  console.log('produtos:', produtos);
  console.log('total:', produtos.length);
  console.log('fim da busca');
  return produtos;
}
```

1. Refatore para usar `console.group()` com título descritivo (📦)
2. Use `console.time()` para medir a duração da requisição
3. Use `console.table()` para exibir os produtos com colunas relevantes
4. Use `console.groupCollapsed()` para logs de depuração detalhados (que começam fechados)
5. Coloque o `console.timeEnd()` e `console.groupEnd()` dentro de um `finally`

**Entrega:** crie `entregas-aula-30/q4-console-estruturado.md`:

~~~~
# Questão 4 — Logs Estruturados com Console Avançado

## Código refatorado

```javascript

```

## Saída do console ANTES (bagunçada)

Descreva como era a saída original:

```

```

## Saída do console DEPOIS (estruturada)

Descreva como ficou a saída refatorada:

```

```

## Reflexão

Em que situações você usaria `console.groupCollapsed` em vez de `console.group`? Dê um exemplo.

```

```
~~~~

---

## Questão 5: Análise — Monolito vs Módulos

**Conceito-chave:** Modularização — análise de monolito e proposta de estrutura modular (Aula 30, Seções 1, 5, 10).

**Objetivo:** Demonstrar que você sabe analisar código monolítico e propor uma estrutura modular com justificativas.

**Passos de Execução:**

Dado o arquivo `app.js` monolítico abaixo, que mistura lógica de banco, UI e utilidades:

```javascript
// app.js — MONOLITO
const URL_API = 'https://api.exemplo.com';
const LIMITE = 100;

function salvar(dados) { /* IndexedDB */ }
function carregar() { /* IndexedDB */ }
function renderizar(lista) { /* DOM */ }
function formatarData(data) { return data.toLocaleDateString('pt-BR'); }
function validarEmail(email) { return email.includes('@'); }
function comprimir(texto) { /* CompressionStream */ }
function descomprimir(dados) { /* DecompressionStream */ }
function inicializar() { /* setup */ }
```

1. Analise as funções e agrupe-as por responsabilidade
2. Desenhe (em texto, com setas ->) uma estrutura de diretórios e módulos
3. Para CADA módulo proposto, justifique: (a) qual responsabilidade, (b) por que ele merece um arquivo separado, (c) se usa named ou default export
4. Identifique QUAL função poderia usar dynamic import em vez de static import

**Entrega:** crie `entregas-aula-30/q5-monolito-vs-modulos.md`:

~~~~
# Questão 5 — Monolito vs Módulos

## Agrupamento por responsabilidade

Liste as funções agrupadas por categoria:

| Categoria | Funções |
|---|---|
| (ex: Banco de dados) | (ex: salvar, carregar) |
| | |
| | |
| | |

## Estrutura de diretórios proposta

Desenhe a árvore com setas (->) indicando imports:

```

```

## Justificativa para cada módulo

**Módulo 1 — (nome):**
- Responsabilidade:
- Tipo de export:
- Por que separado:

**Módulo 2 — (nome):**
- Responsabilidade:
- Tipo de export:
- Por que separado:

**Módulo 3 — (nome):**
- Responsabilidade:
- Tipo de export:
- Por que separado:

**Módulo 4 — (nome):**
- Responsabilidade:
- Tipo de export:
- Por que separado:

## Candidato a dynamic import

Qual função poderia usar `import()` dinâmico? Por quê?

```

```
~~~~

---

## Questão 6: Refatoração de Código Limpo

**Conceito-chave:** Código Limpo — nomes descritivos, funções pequenas, early return, números mágicos (Aula 30, Seções 4, 9).

**Objetivo:** Demonstrar que você sabe refatorar código com nomes ruins, aninhamento profundo e números mágicos.

**Passos de Execução:**

Refatore a função abaixo para código limpo:

```javascript
function f(a) {
  let r = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i].s > 100) {
      r.push(a[i]);
    }
  }
  return r.sort((x, y) => x.p - y.p).slice(0, 10);
}
```

1. Renomeie `f`, `a`, `r`, `i`, `s`, `x`, `y`, `p` para nomes descritivos
2. Extraia funções menores com UMA responsabilidade cada (UMA para filtrar, UMA para ordenar, UMA para limitar)
3. Substitua números mágicos (100, 10) por constantes nomeadas
4. Adicione UM comentário útil que explique uma decisão de design
5. Use early return se aplicável

**Entrega:** crie `entregas-aula-30/q6-codigo-limpo.md`:

~~~~
# Questão 6 — Refatoração de Código Limpo

## Código original

```javascript

```

## Código refatorado (funções extraídas)

```javascript

```

## Uso (exemplo de chamada)

```javascript

```

## Comentário explicativo adicionado

Copie o comentário que você adicionou e explique por que ele é útil (e não óbvio):

```
Comentário:
Por que é útil:
```

## Reflexão

Por que extrair funções pequenas é melhor do que uma função grande que faz tudo? Cite pelo menos 2 motivos.

```

```
~~~~

---

## Questão 7: Processo de Investigação de Bug

**Conceito-chave:** Debugging — processo de investigação sistemática (Aula 30, Seções 3, 7).

**Objetivo:** Demonstrar que você sabe planejar uma investigação de bug usando breakpoints, watch e call stack sem precisar de código executável.

**Passos de Execução:**

Dado o seguinte bug report:

> "No Gerenciador de Tarefas, quando eu clico no checkbox de uma tarefa para marcá-la como concluída, a tarefa é marcada visualmente, mas após recarregar a página, ela volta como não concluída. Não aparece nenhum erro no console."

1. Explique qual é a causa MAIS PROVÁVEL para este bug (considere: o visual muda, mas o dado não persiste)
2. Descreva onde você colocaria o PRIMEIRO breakpoint
3. Qual expressão você adicionaria no Watch?
4. Como o Call Stack ajudaria a entender o fluxo?
5. Qual a diferença entre Step Over e Step Into neste cenário?
6. Proponha uma CORREÇÃO para o bug

**Entrega:** crie `entregas-aula-30/q7-investigacao-bug.md`:

~~~~
# Questão 7 — Investigação de Bug

## Diagnóstico inicial

Qual a causa mais provável? Por quê?

```

```

## Primeiro breakpoint

Onde você colocaria o PRIMEIRO breakpoint e por quê?

```

```

## Expressão no Watch

Que expressão você adicionaria no Watch e o que espera observar?

```

```

## Call Stack

Como o Call Stack ajudaria nesta investigação?

```

```

## Step Over vs Step Into

Qual você usaria primeiro neste cenário? Por quê?

```

```

## Correção proposta

Explique o que precisa ser corrigido e em qual arquivo/função.

```

```
~~~~

---

## Questão 8: Modularizar o Gerenciador de Tarefas

**Conceito-chave:** Projeto completo — modularização do Gerenciador em ES modules com try/catch robusto (Aula 30, Seções 5-10).

**Objetivo:** Demonstrar que você sabe aplicar TODOS os conceitos da aula para transformar o Gerenciador de Tarefas monolítico em um projeto profissional modularizado.

**Passos de Execução:**

1. Crie a estrutura de diretórios: `componentes/`, `utilitarios/`, `workers/`
2. Extraia `utilitarios/config.js` com TODAS as constantes do app
3. Extraia `db.js` com operações IndexedDB: cada função é named export COM try/catch/finally e erros customizados (ErroBancoDados)
4. Extraia cada Custom Element para `componentes/*.js` com default export
5. Extraia utilitários de stream para `utilitarios/streams.js`
6. Crie `gerenciador.js` como ponto de entrada que importa TUDO
7. Atualize `index.html` para usar `<script type="module" src="gerenciador.js">`
8. Adicione logs estruturados (console.group, console.table, console.time) nas funções principais
9. Mantenha o Service Worker (`sw.js`) como script clássico

**Entrega:** crie `entregas-aula-30/q8-projeto-modularizado.md`:

~~~~
# Questão 8 — Modularizando o Gerenciador de Tarefas

## Estrutura de diretórios final

Liste todos os arquivos do projeto (use indentação para mostrar hierarquia):

```

```

## Checklist de migração

Marque os itens concluídos:

- [ ] `utilitarios/config.js` — constantes (nome app, versão, banco, limites)
- [ ] `db.js` — named exports + try/catch/finally + ErroBancoDados
- [ ] `componentes/tarefa.js` — default export TarefaComponent
- [ ] `componentes/lista.js` — default export ListaComponent
- [ ] `componentes/form-tarefa.js` — default export FormTarefaComponent
- [ ] `utilitarios/streams.js` — comprimir/descomprimir como named exports
- [ ] `workers/export-worker.js` — adaptado
- [ ] `gerenciador.js` — ponto de entrada com imports e inicialização
- [ ] `index.html` — `<script type="module" src="gerenciador.js">`
- [ ] `sw.js` — mantido como script clássico

## Exemplo de código: gerenciador.js

Copie o conteúdo do seu `gerenciador.js`:

```javascript

```

## Exemplo de código: db.js (função com try/catch)

Copie UMA função de `db.js` que use try/catch/finally:

```javascript

```

## Funcionalidades testadas

Quais funcionalidades você testou e estão funcionando?

- [ ] CRUD completo (adicionar, listar, concluir, remover)
- [ ] Filtros (pendentes, concluídas, todas)
- [ ] Exportar/importar tarefas (JSON)
- [ ] Funcionamento offline (Service Worker)
- [ ] Compressão de anotações
- [ ] Notificações e Speech (se implementado)

## Saída do console profissional

O console mostra logs estruturados? Descreva o que aparece:

```

```

## Reflexão final

Em 3-5 frases: o que mudou na sua percepção sobre organização de código depois desta aula? Como você se sente em relação ao seu Gerenciador de Tarefas agora?

```

```
~~~~

---

## Checklist Final: Pronto para a Aula 31?

Marque cada item só quando conseguir fazê-lo **sem consultar a aula**:

- [ ] **Explicar** por que modularizar código é essencial e como ES Modules resolvem o problema de escopo global
- [ ] **Diferenciar** named exports, default exports e namespace imports — e decidir qual usar em cada situação
- [ ] **Aplicar** `import`/`export` para organizar código com `type="module"` no HTML
- [ ] **Utilizar** `import()` dinâmico para lazy loading e explicar por que retorna uma Promise
- [ ] **Construir** blocos `try/catch/finally` robustos, com `throw` e erros customizados
- [ ] **Identificar** tipos nativos de erro (SyntaxError, ReferenceError, TypeError, RangeError)
- [ ] **Utilizar** breakpoints, step over/in/out, watch expressions e call stack no DevTools
- [ ] **Aplicar** `console.table()`, `console.group()`, `console.time()` e `debugger;` profissionalmente
- [ ] **Praticar** código limpo: nomes descritivos, funções pequenas, early return, sem números mágicos
- [ ] **Modularizar** o Gerenciador de Tarefas em ES modules com try/catch robusto em todas as operações

> *Acertou todos? Você está pronto para a Aula 31 — o **Projeto Final PWA Completa + Portfólio**! Você vai consolidar TUDO que aprendeu em 30 aulas para entregar um aplicativo profissional completo com deploy no GitHub Pages. Travou em algum? Releia a seção indicada na questão correspondente antes de avançar.*


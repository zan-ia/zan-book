---
titulo: "Node.js — Do Zero ao Servidor Express — Aula 03 — Questões de Aprendizagem"
modulo: "01"
aula: "03"
---

# Node.js — Do Zero ao Servidor Express Aula 03 — Questões de Aprendizagem

## Como Usar Este Arquivo

Este arquivo é o checkpoint de aprendizagem da Aula 03. A pergunta central é: "você realmente entendeu CommonJS, require, module.exports e os patterns?" Faça as questões na ordem. Cada questão tem um Conceito-chave (com a seção da aula para consulta), um Objetivo, Passos de Execução e um template de Entrega. Crie a pasta `entregas-aula-03/` para salvar seus arquivos.

**Instruções:** Não consulte a aula enquanto faz as questões. Se travar, releia a seção indicada e tente novamente. Só avance para a Aula 04 quando conseguir completar todas as 8 questões por conta própria.

---

## Questão 1: Criar e Consumir um Módulo Local

**Conceito-chave:** require() e module.exports (Aula 03, Seções 4 e 5).

**Objetivo:** Demonstrar que você sabe criar um módulo que exporta uma função e consumi-lo em outro arquivo com require().

**Passos de Execução:**

1. Crie a pasta `entregas-aula-03/` no diretório da aula
2. Dentro dela, crie `mensagem.js` que exporta uma função `formatarMensagem(nome)` que retorna `"Bem-vindo(a), NOME!"`
3. Adicione uma constante privada (ex: `const PREFIXO = '🎉'`) dentro de `mensagem.js` que NÃO seja exportada.
4. Dentro dela, crie `app.js` que importa o módulo e chama a função com seu nome
5. Execute `node app.js` e confira a saída

**Entrega:** crie `entregas-aula-03/01-modulo-local.md`:

~~~~
# Questão 1 — Módulo Local

## Código do módulo (mensagem.js)

```javascript

```

## Código do consumidor (app.js)

```javascript

```

## Saída do terminal

```
COLE A SAÍDA AQUI
```

## Análise

Por que a variável interna do módulo (se houver) não vaza para o app.js?
~~~~

---

## Questão 2: Prever a Resolução do require()

**Conceito-chave:** Algoritmo de resolução de módulos (Aula 03, Seção 4).

**Objetivo:** Demonstrar que você sabe prever como o Node.js resolve cada tipo de chamada require().

**Passos de Execução:**

1. Analise cada cenário abaixo
2. Preveja se o require() encontra um core module, um arquivo local ou um pacote npm
3. Explique como o Node.js decide em cada caso

**Cenários:**

A) `require('fs')`
B) `require('./utils')` — existe `utils.js` no mesmo diretório
C) `require('../config/dados.json')` — existe `config/dados.json` um nível acima
D) `require('express')` — express está instalado em node_modules/

**Entrega:** crie `entregas-aula-03/02-resolucao.md`:

~~~~
# Questão 2 — Resolução de Módulos

## Cenário A: require('fs')

**Passo do algoritmo:** 

**Resultado:** 

## Cenário B: require('./utils')

**Passo do algoritmo:** 

**Resultado:** 

## Cenário C: require('../config/dados.json')

**Passo do algoritmo:** 

**Resultado:** 

## Cenário D: require('express')

**Passo do algoritmo:** 

**Resultado:** 

## Conclusão

Explique em uma frase a lógica geral que o Node.js segue para resolver qualquer require().
~~~~

---

## Questão 3: Demonstrar Isolamento entre Módulos

**Conceito-chave:** Escopo de módulo como closure (Aula 03, Seção 3).

**Objetivo:** Provar que variáveis de mesmo nome em módulos diferentes não colidem.

**Passos de Execução:**

1. Crie `modulo-a.js` com `const nome = 'Alice';` e exporte uma função `getNome()` que retorna `nome`
2. Crie `modulo-b.js` com `const nome = 'Bob';` e exporte uma função `getNome()` que retorna `nome`
3. Crie `app.js` que importa ambos e chama as duas funções
4. Execute e observe que os valores são independentes
5. Tente acessar `moduloA.nome` diretamente e veja o que acontece

**Entrega:** crie `entregas-aula-03/03-isolamento.md`:

~~~~
# Questão 3 — Isolamento entre Módulos

## Código dos módulos

### modulo-a.js

```javascript

```

### modulo-b.js

```javascript

```

### app.js

```javascript

```

## Saída do terminal

```
COLE A SAÍDA AQUI
```

## Perguntas

1. O que acontece com `console.log(moduloA.nome)`? Por quê?
2. Se os módulos fossem scripts soltos no HTML, o que aconteceria?
~~~~

---

## Questão 4: Corrigir a Pegadinha do exports

**Conceito-chave:** Pegadinha do exports (Aula 03, Seção 5).

**Objetivo:** Identificar e corrigir o erro de reatribuir exports em vez de module.exports.

**Passos de Execução:**

1. Analise o código quebrado abaixo
2. Identifique por que `require('./calculadora')` retorna um objeto vazio
3. Corrija o erro
4. Execute e verifique se as funções funcionam

**Código quebrado:**

```javascript
// calculadora.js
function somar(a, b) { return a + b; }
function subtrair(a, b) { return a - b; }

exports = { somar, subtrair };
```

```javascript
// app.js
const calc = require('./calculadora');
console.log(calc.somar(2, 3)); // TypeError: calc.somar is not a function
```

**Entrega:** crie `entregas-aula-03/04-pegadinha-exports.md`:

~~~~
# Questão 4 — Pegadinha do exports

## Diagnóstico

Por que `calc.somar` é undefined?


## Código corrigido (calculadora.js)

```javascript

```

## Saída do terminal após correção

```
COLE A SAÍDA AQUI
```

## Regra de ouro

Em uma frase: quando usar module.exports = e quando usar exports.atributo?
~~~~

---

## Questão 5: Implementar Revealing Module Pattern

**Conceito-chave:** Revealing Module Pattern (Aula 03, Seção 6).

**Objetivo:** Criar um módulo que mantém dados privados e expõe apenas funções públicas.

**Passos de Execução:**

1. Crie `lib/contador.js` usando Revealing Module Pattern
2. Mantenha `_valor` (number) como variável privada, iniciando em 0
3. Implemente uma função privada `_validar(incremento)` que verifica se incremento é número positivo
4. Exporte funções públicas: `incrementar(qtd)`, `decrementar(qtd)`, `zerar()`, `obterValor()`
5. Crie `app.js` que testa o contador
6. Confirme que `_valor` não é acessível de fora

**Entrega:** crie `entregas-aula-03/05-revealing-module.md`:

~~~~
# Questão 5 — Revealing Module Pattern

## Código do módulo (lib/contador.js)

```javascript

```

## Código do consumidor (app.js)

```javascript

```

## Saída do terminal

```
COLE A SAÍDA AQUI
```

## Verificação

Tente acessar `contador._valor` no app.js. O que acontece? Isso é desejável?
~~~~

---

## Questão 6: Refatorar com Configuration Object Pattern

**Conceito-chave:** Configuration Object Pattern (Aula 03, Seção 6).

**Objetivo:** Refatorar uma função com parâmetros posicionais para usar objeto de configuração.

**Passos de Execução:**

1. Analise a função abaixo com 5 parâmetros posicionais
2. Refatore para usar Configuration Object Pattern com destructuring e valores padrão
3. Crie um arquivo de teste que chama a função refatorada de duas formas: com todos os campos e com apenas alguns

**Função original:**

```javascript
function enviarEmail(para, assunto, corpo, anexos, prioridade, confirmarLeitura) {
  console.log(`Enviando email para ${para}`);
  console.log(`Assunto: ${assunto}`);
  console.log(`Anexos: ${anexos ? anexos.length : 0} arquivo(s)`);
  console.log(`Prioridade: ${prioridade}`);
  console.log(`Confirmar leitura: ${confirmarLeitura}`);
}
```

**Entrega:** crie `entregas-aula-03/06-config-object.md`:

~~~~
# Questão 6 — Configuration Object Pattern

## Função refatorada

```javascript

```

## Chamada com todos os campos

```javascript

```

## Chamada com apenas 2 campos (usando defaults)

```javascript

```

## Vantagens

Liste 3 vantagens do Configuration Object Pattern sobre parâmetros posicionais:

1. 
2. 
3. 
~~~~

---

## Questão 7: Provar que require() é Cacheado

**Conceito-chave:** Cache do require() (Aula 03, Seção 4).

**Objetivo:** Realizar um experimento que demonstre que require() retorna o mesmo objeto em cache, não reexecuta o módulo.

**Passos de Execução:**

1. Crie `cacheado.js` que exporta um objeto `{ contador: 0, incrementar() { this.contador++ } }`
2. Crie `app.js` que importa o módulo DUAS vezes em variáveis diferentes (`mod1` e `mod2`)
3. Chame `mod1.incrementar()` e depois imprima `mod1.contador` e `mod2.contador`
4. Verifique se ambos apontam para o mesmo objeto

**Entrega:** crie `entregas-aula-03/07-cache-require.md`:

~~~~
# Questão 7 — Cache do require()

## Código do módulo (cacheado.js)

```javascript

```

## Código do consumidor (app.js)

```javascript

```

## Saída do terminal

```
COLE A SAÍDA AQUI
```

## Interpretação

Os valores de mod1 e mod2 são iguais depois de incrementar apenas mod1? O que isso prova sobre require()?

## Require.cache

Adicione `console.log(require.cache)` ao final do app.js. O que você observa?
~~~~

---

## Questão 8: Projeto Progressivo — Módulo de Tarefas

**Conceito-chave:** Projeto progressivo + Revealing Module Pattern (Aula 03, Seções 3 e 6).

**Objetivo:** Criar o módulo central do Gerenciador de Tarefas, a peça que você vai expandir nas próximas aulas.

**Passos de Execução:**

1. Crie `lib/tarefas.js` com um array `_tarefas` privado e as seguintes funções públicas:
   - `adicionar(titulo)` — adiciona nova tarefa com id, titulo e concluida: false
   - `listar()` — retorna cópia do array
   - `remover(id)` — remove tarefa por id
   - `buscarPorId(id)` — retorna tarefa específica
   - `alternar(id)` — alterna o status concluida
   - `contar()` — retorna { total, pendentes, concluidas }
2. Use `let _proximoId = 1` para gerar ids sequenciais
3. Crie `app.js` que testa todas as funções do módulo
4. Execute e verifique o funcionamento completo

**Entrega:** crie `entregas-aula-03/08-projeto-tarefas.md`:

~~~~
# Questão 8 — Módulo de Tarefas

## Código do módulo (lib/tarefas.js)

```javascript

```

## Código do consumidor (app.js)

```javascript

```

## Saída do terminal

```
COLE A SAÍDA AQUI
```

## Projeto progressivo

As tarefas criadas sobrevivem se você fechar e reabrir o terminal? Por quê? O que seria necessário para persistir os dados?
~~~~

---

## Checklist Final: Pronto para a Aula 04?

Marque cada item só quando conseguir fazê-lo **sem consultar a aula**:

- [ ] **Explicar** por que scripts soltos causam colisão de nomes (Questão 3)
- [ ] **Distinguir** ES Modules de CommonJS (Questão 2)
- [ ] **Descrever** como o escopo de módulo funciona como closure (Questão 3)
- [ ] **Aplicar** require() para importar módulos locais, nativos e pacotes npm (Questões 1, 2)
- [ ] **Utilizar** module.exports e exports (Questões 1, 4)
- [ ] **Identificar** a pegadinha de reatribuir exports (Questão 4)
- [ ] **Implementar** o Revealing Module Pattern (Questões 5, 8)
- [ ] **Aplicar** o Configuration Object Pattern (Questão 6)
- [ ] **Demonstrar** que require() é cacheado (Questão 7)
- [ ] **Criar** um módulo CRUD em memória com API pública (Questão 8)

> *Acertou todos? Você está pronto para a Aula 04, onde vai aprender a ler e escrever arquivos no disco com o módulo `fs` — e finalmente fazer suas tarefas sobreviverem a reinícios. Travou em algum? Releia a seção indicada na questão correspondente antes de avançar.*

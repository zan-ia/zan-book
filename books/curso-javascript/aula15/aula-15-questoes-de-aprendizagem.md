---
titulo: "JavaScript — Do Zero ao Profissional"
modulo: "01"
aula: "15"
---

# JavaScript — Do Zero ao Profissional Aula 15 — Questões de Aprendizagem

## Como Usar Este Arquivo

Este arquivo é o seu **checkpoint de aprendizagem** da Aula 15: Prototypes e Herança Prototipal. A pergunta central é: *"eu realmente entendi como a herança prototipal funciona em JavaScript?"*

Cada questão verifica um conceito-chave da aula. Você deve fazer cada uma na ordem, pois os conceitos se acumulam. Leia o **Objetivo** da questão, siga os **Passos de Execução** e preencha o template de **Entrega**.

Crie uma pasta `entregas-aula15/` dentro da sua pasta de estudos e salve cada entrega como um arquivo Markdown separado (ex: `entregas-aula15/questao-1-object-create.md`).

Você deve completar todas as 8 questões **sem reler o conteúdo da aula principal**. Se travar, a seção de referência está indicada em cada questão — volte e estude apenas aquela seção antes de tentar novamente.

---

## Questão 1: Criando Herança com Object.create

**Conceito-chave:** Object.create() cria objeto com prototipo especifico; propriedades herdadas estao acessiveis (Aula 15, Secoes 1-5).

**Objetivo:** Demonstrar que voce sabe criar um objeto que HERDA de outro usando `Object.create()` e que propriedades definidas no prototipo estao acessiveis no objeto filho.

**Passos de Execucao:**

1. Crie um objeto `personagem` com as propriedades `classe: 'guerreiro'` e `vida: 100`, e um método `atacar()` que retorna a string `"Ataque basico!"`
2. Crie um objeto `heroi` que herda de `personagem` usando `Object.create()`
3. Adicione a propriedade `nome: 'Aragorn'` diretamente em `heroi`
4. Sobrescreva o método `atacar()` em `heroi` para retornar `"Ataque especial com espada!"`
5. Verifique: `heroi.nome`, `heroi.classe`, `heroi.vida`, `heroi.atacar()`, e `Object.hasOwn(heroi, 'classe')`

**Entrega:** crie `entregas-aula15/questao-1-object-create.md`:

~~~~
# Questao 1 — Criando Heranca com Object.create

## Codigo completo

```javascript
// Seu codigo aqui
```

## Resultados esperados

| Expressao | Resultado esperado |
|---|---|
| `heroi.nome` | |
| `heroi.classe` | |
| `heroi.vida` | |
| `heroi.atacar()` | |
| `Object.hasOwn(heroi, 'classe')` | |
| `Object.hasOwn(heroi, 'nome')` | |
| `'classe' in heroi` | |

## Reflexao

Em 2-3 frases: por que `heroi.classe` funciona mesmo nao sendo uma propriedade propria de `heroi`?
~~~~

---

## Questao 2: proto vs Object.getPrototypeOf

**Conceito-chave:** Diferenca entre acesso legado e moderno ao prototipo (Aula 15, Secao 6).

**Objetivo:** Demonstrar que voce sabe acessar o prototipo de um objeto usando o metodo moderno e entende por que `__proto__` nao e recomendado.

**Passos de Execucao:**

1. Crie um objeto `carro` com propriedade `rodas: 4` e outro objeto `meuCarro` que herda de `carro` usando `Object.create()`
2. Acesse o prototipo de `meuCarro` usando `Object.getPrototypeOf()` e verifique se e igual a `carro`
3. Tente acessar `meuCarro.__proto__` e verifique o resultado
4. Crie um objeto `vazio` com `Object.create(null)` e tente acessar `vazio.__proto__`
5. Compare com `Object.getPrototypeOf(vazio)`

**Entrega:** crie `entregas-aula15/questao-2-proto-vs-getprototypeof.md`:

~~~~
# Questao 2 — proto vs Object.getPrototypeOf

## Codigo completo

```javascript
// Seu codigo aqui
```

## Tabela comparativa

| Forma de acesso | Funciona em `meuCarro`? | Funciona em `vazio`? | Recomendado? |
|---|---|---|---|
| `obj.__proto__` | | | |
| `Object.getPrototypeOf(obj)` | | | |

## Reflexao

Em 2-3 frases: por que `Object.getPrototypeOf()` e considerado superior a `__proto__`?
~~~~

---

## Questao 3: Subindo a Prototype Chain

**Conceito-chave:** Cadeia de prototipos e o caminho percorrido ao buscar uma propriedade (Aula 15, Secao 7).

**Objetivo:** Demonstrar que voce sabe descrever e verificar a prototype chain completa de diferentes tipos de objetos.

**Passos de Execucao:**

1. Crie um array `const nums = [10, 20, 30]`
2. Usando `Object.getPrototypeOf()`, descubra a cadeia completa de `nums`
3. Faca o mesmo para `const texto = Object("ola")`
4. Faca o mesmo para `function minhaFn() {}`
5. Para cada tipo, verifique quando a cadeia termina (encontre o null)

**Entrega:** crie `entregas-aula15/questao-3-prototype-chain.md`:

~~~~
# Questao 3 — Subindo a Prototype Chain

## Cadeia do array nums

```
nums
  → [preencher]
    → [preencher]
      → null
```

## Cadeia da string texto

```
Object("ola")
  → [preencher]
    → [preencher]
      → null
```

## Cadeia da funcao minhaFn

```
minhaFn
  → [preencher]
    → [preencher]
      → null
```

## O que todas as cadeias tem em comum?

[Responda em 2-3 frases]
~~~~

---

## Questao 4: Proprias ou Herdadas

**Conceito-chave:** Object.hasOwn() para distinguir propriedades proprias de herdadas (Aula 15, Secao 8).

**Objetivo:** Classificar corretamente propriedades como proprias ou herdadas em uma cadeia de prototipos.

**Passos de Execucao:**

1. Crie `const nivel1 = { a: 1, b: 2 }`
2. Crie `const nivel2 = Object.create(nivel1)` e adicione `b: 3, c: 4`
3. Crie `const nivel3 = Object.create(nivel2)` e adicione `d: 5`
4. Para cada propriedade em `nivel3`, use `Object.hasOwn()` para classificar como propria ou herdada

**Entrega:** crie `entregas-aula15/questao-4-proprias-ou-herdadas.md`:

~~~~
# Questao 4 — Proprias ou Herdadas

## Estrutura dos objetos

```javascript
// Cole o codigo que voce escreveu aqui
```

## Classificacao das propriedades em nivel3

| Propriedade | Valor em nivel3 | Propria ou herdada? | Se herdada, de qual nivel? |
|---|---|---|---|
| `a` | | | |
| `b` | | | |
| `c` | | | |
| `d` | | | |

## Reflexao

Em 2-3 frases: por que `nivel3.b` retorna 3 em vez de 2, que era o valor original em `nivel1.b`?
~~~~

---

## Questao 5: for...in vs Object.keys

**Conceito-chave:** Diferenca entre iteracao que inclui herdadas e iteracao so de proprias (Aula 15, Secao 8).

**Objetivo:** Demonstrar que voce entende a diferenca pratica entre `for...in` e `Object.keys()` em objetos com heranca.

**Passos de Execucao:**

1. Reuse a estrutura de 3 niveis da Questao 4 (ou recrie-a)
2. Execute `Object.keys(nivel3)` e anote o resultado
3. Execute `for (let chave in nivel3) { console.log(chave); }` e anote o resultado
4. Execute um `for...in` com `Object.hasOwn()` para filtrar apenas as proprias

**Entrega:** crie `entregas-aula15/questao-5-forin-vs-keys.md`:

~~~~
# Questao 5 — for...in vs Object.keys

## Resultados da iteracao

| Metodo | Propriedades retornadas |
|---|---|
| `Object.keys(nivel3)` | |
| `for...in nivel3` | |
| `for...in + hasOwn` | |

## Perguntas

1. Quantas propriedades `Object.keys()` retornou? Por que esse numero?

2. Quantas propriedades `for...in` retornou? De onde vieram as propriedades extras?

3. Qual metodo voce usaria para obter apenas as propriedades que PERTENCEM ao objeto (excluindo herdadas)?
~~~~

---

## Questao 6: Por que tarefas map funciona

**Conceito-chave:** Built-in prototypes: arrays herdam de Array.prototype; conexao com o Gerenciador de Tarefas (Aula 15, Secao 9).

**Objetivo:** Explicar, com suas proprias palavras e usando prototype chain, por que `tarefas.map(t => t.texto)` funciona no Gerenciador de Tarefas.

**Passos de Execucao:**

1. Lembre-se do Gerenciador de Tarefas: `const tarefas = [{ texto: '...', concluida: false }]`
2. Abra o console e verifique que `tarefas.map` existe, mas `Object.hasOwn(tarefas, 'map')` retorna `false`
3. Verifique que `Array.prototype.hasOwnProperty('map')` retorna `true`
4. Verifique que `Object.getPrototypeOf(tarefas) === Array.prototype`
5. Escreva uma explicacao do mecanismo completo

**Entrega:** crie `entregas-aula15/questao-6-tarefas-map.md`:

~~~~
# Questao 6 — Por que tarefas.map funciona

## Verificacoes no console

```javascript
// Cole aqui as verificacoes que voce fez
```

## Explicacao completa

Explique, em 5-7 frases, o caminho que o JavaScript percorre quando encontra `tarefas.map(t => t.texto)`. Use os termos: **prototype chain**, **delegacao**, **Array.prototype**, **Object.getPrototypeOf**, **propriedade propria vs herdada**.

[Sua explicacao aqui]

## Diagrama textual

Descreva a cadeia completa de `tarefas` ate `null`:

```
tarefas → [       ] → [        ] → null
```

## Conexao com o projeto

No Gerenciador de Tarefas, voce tambem usa `tarefas.filter()` e `tarefas.forEach()`. De onde esses metodos vem? Eles estao definidos no mesmo lugar que `.map()`?
~~~~

---

## Questao 7: Construindo uma Mini-Cadeia de 3 Niveis

**Conceito-chave:** Cadeia de prototipos multi-nivel com Object.create() e verificacao com Object.getPrototypeOf e Object.hasOwn (Aula 15, Secoes 5, 7, 8).

**Objetivo:** Construir uma cadeia de 3 niveis de heranca, verificar as ligacoes e classificar as propriedades.

**Passos de Execucao:**

1. Crie `nivel1 = { cor: 'azul', tamanho: 'G' }`
2. Crie `nivel2 = Object.create(nivel1)` e adicione `cor: 'vermelho', material: 'algodao'`
3. Crie `nivel3 = Object.create(nivel2)` e adicione `preco: 49.90`
4. Verifique: `Object.getPrototypeOf(nivel3) === nivel2`
5. Verifique: `Object.getPrototypeOf(nivel2) === nivel1`
6. Verifique: `Object.getPrototypeOf(nivel1) === Object.prototype`
7. Acesse `nivel3.cor` — qual valor retorna? Por que?

**Entrega:** crie `entregas-aula15/questao-7-cadeia-3-niveis.md`:

~~~~
# Questao 7 — Mini-Cadeia de 3 Niveis

## Codigo

```javascript
// Seu codigo aqui
```

## Verificacoes da cadeia

| Verificacao | Resultado |
|---|---|
| `Object.getPrototypeOf(nivel3) === nivel2` | |
| `Object.getPrototypeOf(nivel2) === nivel1` | |
| `Object.getPrototypeOf(nivel1) === Object.prototype` | |
| `Object.getPrototypeOf(Object.prototype)` | |

## Propriedades em nivel3

| Propriedade | Valor | Propria ou herdada? | De qual nivel? |
|---|---|---|---|
| `nivel3.cor` | | | |
| `nivel3.tamanho` | | | |
| `nivel3.material` | | | |
| `nivel3.preco` | | | |

## Pergunta

Por que `nivel3.cor` retorna "vermelho" em vez de "azul", se `nivel1` tem `cor: 'azul'`?
~~~~

---

## Questao 8: Diagnosticando um for...in com Heranca

**Conceito-chave:** Prever a saida de um for...in dado um objeto com propriedades proprias e herdadas (Aula 15, Secao 8).

**Objetivo:** Prever corretamente a saida de `for...in` e diagnosticar quais propriedades sao proprias vs herdadas.

**Passos de Execucao:**

1. Dado o seguinte codigo, SEM EXECUTA-LO, preencha a tabela de saida:

```javascript
const base = { x: 10, y: 20, calcular() { return this.x + this.y; } };
const derivado = Object.create(base);
derivado.y = 50;
derivado.z = 30;
```

2. Preveja: quais propriedades `for...in` vai percorrer em `derivado`? Em que ordem?

3. Preveja: quais `Object.keys(derivado)` retorna?

4. Preveja: `Object.hasOwn(derivado, 'calcular')` retorna?

5. Preveja: `'calcular' in derivado` retorna?

6. DEPOIS de prever tudo, execute o codigo no console e compare.

**Entrega:** crie `entregas-aula15/questao-8-diagnostico-forin.md`:

~~~~
# Questao 8 — Diagnosticando for...in com Heranca

## (ANTES de executar) Minhas previsoes

| Propriedade | for...in inclui? | Object.keys inclui? | Object.hasOwn(derivado, ...) |
|---|---|---|---|
| `x` | | | |
| `y` | | | |
| `z` | | | |
| `calcular` | | | |

## Ordem das propriedades no for...in

1.
2.
3.
4.

## (DEPOIS de executar) Resultados reais

[Cole aqui o resultado que o console mostrou]

## Comparei: acertei tudo? Se errei, qual foi o erro e por que?

[Reflexao em 2-3 frases]
~~~~

---

## Checklist Final: Pronto para a Aula 16?

Marque cada item so quando conseguir faze-lo **sem consultar a aula**:

- [ ] Sei explicar o que e um prototipo e como a heranca funciona em JavaScript (ancestral + descendente, delegação)
- [ ] Sei usar `Object.create()` para criar objetos com prototipo especifico
- [ ] Sei distinguir `__proto__` (legado, nao recomendado) de `Object.getPrototypeOf()` (moderno, recomendado) e sei qual usar em codigo novo
- [ ] Sei descrever a cadeia de prototipos e como o JavaScript sobe nela ao buscar uma propriedade
- [ ] Sei usar `Object.hasOwn()` para verificar se uma propriedade e propria (nao herdada)
- [ ] Sei a diferenca entre `for...in` (proprias + herdadas) e `Object.keys()` (apenas proprias)
- [ ] Sei explicar por que `[1,2,3].map()` funciona — porque arrays herdam de `Array.prototype`, que contem `.map()`
- [ ] Sei identificar os built-in prototypes (Array.prototype, String.prototype, Function.prototype, Object.prototype) e seus metodos principais

> *Acertou todas as questoes? Voce esta pronto para a **Aula 16: Classes — Sintaxe Moderna (ES6+)**. Nela, voce vai aprender a sintaxe `class` — a forma moderna e legivel de trabalhar com heranca em JavaScript, que usa o mesmo sistema de prototypes por baixo. Travou em alguma questao? Releia a secao indicada na questao correspondente antes de avancar.*

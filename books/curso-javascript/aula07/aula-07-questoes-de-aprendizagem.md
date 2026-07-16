---
titulo: "JavaScript — Do Zero ao Profissional — Aula 07 — Questoes de Aprendizagem"
modulo: "01"
---

# JavaScript — Do Zero ao Profissional Aula 07 — Questoes de Aprendizagem

## Questoes de Aprendizagem — Condicionais: if, else if, else e switch

## Como Usar Este Arquivo

Este arquivo contem **questoes de aprendizagem** para a Aula 07. Diferente dos exercicios que voce fez durante a aula, estas questoes funcionam como um **checkpoint de dominio** — voce deve ser capaz de responde-las sem consultar o conteudo principal.

Cada questao tem um **Conceito-chave** (qual secao da aula ela verifica), um **Objetivo** claro, **Passos de Execucao** que voce segue no navegador ou editor, e um **Template de Entrega** que voce copia e preenche.

**Instrucoes:**
1. Leia cada questao com atencao
2. Siga os passos de execucao — todos podem ser feitos no navegador com um arquivo HTML
3. Crie a pasta `entregas-aula-07/` dentro da sua pasta de estudos
4. Para cada questao, crie o arquivo de entrega seguindo o template fornecido
5. So avance para a Aula 08 quando conseguir completar todas as questoes sem reler a aula

> *Lembre-se: cada questao tem um campo **Conceito-chave** que diz exatamente qual secao da aula revisar se voce travar.*

---

## Questao 1: Fluxograma de Decisao — Do Cotidiano ao Codigo

**Conceito-chave:** Aula 07, Secao 3 — Fluxogramas: visualizando decisoes

**Objetivo:** Demonstrar que voce sabe interpretar um cenario cotidiano e traduzi-lo em um fluxograma com diamantes (decisoes), retangulos (acoes) e setas (fluxo), usando os elementos basicos aprendidos na Parte 1.

**Passos de Execucao:**

1. Leia o cenario abaixo com atencao
2. Identifique as DECISOES (perguntas sim/nao)
3. Identifique as ACOES (o que fazer em cada caso)
4. Descreva o fluxograma em texto, indicando claramente cada diamante, retangulo e seta

**Cenario:** "Ana quer saber se vai ao parque hoje. Ela decide: se nao estiver chovendo E se a temperatura for maior que 20 graus, ela vai ao parque. Se estiver chovendo, ela fica em casa. Se nao estiver chovendo mas a temperatura for 20 graus ou menos, ela vai ao shopping."

**Entrega:** crie `entregas-aula-07/01-fluxograma-parque.md`:

~~~~
# Questao 1 — Fluxograma de Decisao

## Cenario

Ana quer saber se vai ao parque hoje. Regras:
- Se NAO estiver chovendo E temperatura > 20: vai ao parque
- Se estiver chovendo: fica em casa
- Se NAO estiver chovendo E temperatura <= 20: vai ao shopping

## Estrutura do fluxograma (descreva em texto)

**Inicio:**

**Diamante 1** (primeira decisao):

  - Seta SIM (se / verdadeiro):

      - Retangulo: 

  - Seta NAO (se / falso):

      - **Diamante 2** (segunda decisao):

          - Seta SIM (se / verdadeiro):

              - Retangulo: 

          - Seta NAO (se / falso):

              - Retangulo: 

**Fim:**

## Perguntas de reflexao

1. Quantos diamantes (decisoes) existem neste fluxograma?

**Sua resposta:**

2. Por que o diamante da temperatura so e alcancado se a resposta do primeiro diamante for "nao"?

**Sua resposta:**

3. Quantos caminhos distintos (resultados finais) este fluxograma produz?

**Sua resposta:**
~~~~

---

## Questao 2: if e if/else no Console — Prevendo o Resultado

**Conceito-chave:** Aula 07, Secoes 4 e 5 — if simples e if/else

**Objetivo:** Demonstrar que voce sabe prever a saida de blocos `if/else` dados valores de variaveis, e que consegue testar suas previsoes no Console.

**Passos de Execucao:**

1. Para cada trecho de codigo abaixo, leia com atencao e escreva o que voce ACHA que vai aparecer no console
2. Em seguida, copie cada trecho para o Console do navegador (F12) e execute
3. Compare o resultado real com sua previsao
4. Se houver diferenca, explique por que voce errou

**Codigo A:**
```javascript
let idade = 16;
if (idade >= 18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}
```

**Codigo B:**
```javascript
let hora = 20;
if (hora < 12) {
    console.log("Bom dia");
} else if (hora < 18) {
    console.log("Boa tarde");
} else {
    console.log("Boa noite");
}
```

**Codigo C:**
```javascript
let valor = 0;
if (valor) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}
```

**Codigo D:**
```javascript
let nome = "Ana";
if (nome === "Ana") {
    console.log("Ola, Ana!");
}
if (nome.length > 3) {
    console.log("Nome longo");
}
```

**Entrega:** crie `entregas-aula-07/02-prevendo-resultados.md`:

~~~~
# Questao 2 — Prevendo Resultados de if/else

## Tabela de previsoes

| Codigo | Minha previsao | Resultado real | Acertou? |
|---|---|---|---|
| Codigo A | | | |
| Codigo B | | | |
| Codigo C | | | |
| Codigo D | | | |

## Explicacao das diferencas (se houver)

**Codigo onde errei:**
**Por que errei:**
**O que aprendi com este erro:**

## Perguntas de reflexao

1. No Codigo C, por que o resultado foi "Falsy" mesmo sendo uma variavel com valor numerico?

**Sua resposta:**

2. No Codigo D, por que AMBAS as mensagens apareceram? (Dica: repare que sao dois `if` separados, nao um `else if`)

**Sua resposta:**
~~~~

---

## Questao 3: Categorizacao com if/else if — Classificador de Idade

**Conceito-chave:** Aula 07, Secao 6 — if/else if/else: multiplos caminhos

**Objetivo:** Construir uma cadeia `if/else if/else` para classificar faixas etarias, demonstrando compreensao da ordem de execucao e mutua exclusividade.

**Passos de Execucao:**

1. Crie um arquivo HTML com um programa que:
   - Pergunta a idade do usuario com `prompt()`
   - Converte para numero com `Number()`
   - Classifica a idade em faixas usando `if/else if/else`:
     - 0 a 12: Crianca
     - 13 a 17: Adolescente
     - 18 a 29: Jovem adulto
     - 30 a 59: Adulto
     - 60 ou mais: Idoso
   - Valida se a idade e um numero valido (maior que 0)
   - Exibe a classificacao com `alert()`
2. Teste com as idades: 5, 15, 25, 40, 70, -5, "abc"

**Entrega:** crie `entregas-aula-07/03-classificador-idade.md`:

~~~~
# Questao 3 — Classificador de Idade

## Codigo completo

```html
<!-- Cole aqui seu codigo HTML completo -->
```

## Tabela de testes

| Entrada | Resultado esperado | Resultado obtido | Funcionou? |
|---|---|---|---|
| 5 | Crianca | | |
| 15 | Adolescente | | |
| 25 | Jovem adulto | | |
| 40 | Adulto | | |
| 70 | Idoso | | |
| -5 | Idade invalida | | |
| "abc" | Idade invalida | | |

## Perguntas de reflexao

1. Por que a ordem das condicoes neste classificador NAO precisa ser do mais especifico para o mais geral (como no exemplo da nota escolar)?

**Sua resposta:**

2. O que acontece se voce inverter a ordem e colocar `idade >= 60` primeiro? Teste com `idade = 70`.

**Sua resposta:**

3. Como voce validou se a entrada e um numero valido? Que condicao voce usou?

**Sua resposta:**
~~~~

---

## Questao 4: Menu Interativo com switch — Calculadora de Dois Numeros

**Conceito-chave:** Aula 07, Secao 7 — switch/case/break/default

**Objetivo:** Implementar um menu com `switch` que oferece operacoes matematicas (somar, subtrair, multiplicar, dividir), demonstrando o uso de `break` e `default`.

**Passos de Execucao:**

1. Crie um arquivo HTML com um programa que:
   - Exibe um menu: "1-Somar, 2-Subtrair, 3-Multiplicar, 4-Dividir, 5-Sair"
   - Pede dois numeros ao usuario (apenas se a opcao for 1, 2, 3 ou 4)
   - Usa `switch` para executar a operacao escolhida
   - Exibe o resultado com `alert()`
   - Trata divisao por zero (se opcao 4 e segundo numero = 0, mostra "Nao pode dividir por zero!")
   - Usa `default` para opcao invalida
2. Teste com cada operacao e com uma opcao invalida

**Entrega:** crie `entregas-aula-07/04-calculadora-switch.md`:

~~~~
# Questao 4 — Calculadora com switch

## Codigo completo

```html
<!-- Cole aqui seu codigo HTML completo -->
```

## Tabela de testes

| Opcao escolhida | Numero 1 | Numero 2 | Resultado esperado | Resultado obtido |
|---|---|---|---|---|
| 1 (Somar) | 10 | 5 | 15 | |
| 2 (Subtrair) | 10 | 5 | 5 | |
| 3 (Multiplicar) | 10 | 5 | 50 | |
| 4 (Dividir) | 10 | 5 | 2 | |
| 4 (Dividir) | 10 | 0 | Erro: divisao por zero | |
| 6 | - | - | Opcao invalida | |

## Perguntas de reflexao

1. Por que voce pede os dois numeros DENTRO do case e nao antes do switch?

**Sua resposta:**

2. O que aconteceria se voce esquecesse o `break` no `case "1"`?

**Sua resposta:**

3. Por que os `case` usam strings (`"1"`, `"2"`) e nao numeros (`1`, `2`)?

**Sua resposta:**
~~~~

---

## Questao 5: Validacao com Truthy/Falsy — Simplificando Condicoes

**Conceito-chave:** Aula 07, Secao 9 — Truthy e Falsy

**Objetivo:** Substituir verificacoes explicitas por verificacoes truthy idiomaticas, demonstrando compreensao dos 6 valores falsy e da coercao booleana.

**Passos de Execucao:**

1. Analise o codigo abaixo (que usa verificacoes explicitas com `!== ""` e `!== null`):

```javascript
let nome = prompt("Digite seu nome:").trim();
let idade = prompt("Digite sua idade:");
idade = Number(idade);

// Verificacoes explicitas (verbosas)
if (nome !== "" && nome !== null && nome !== undefined) {
    console.log("Nome: " + nome);
} else {
    console.log("Nome invalido");
}

if (idade !== 0 && idade !== null && idade !== undefined && !isNaN(idade)) {
    console.log("Idade: " + idade);
} else {
    console.log("Idade invalida");
}
```

2. Reescreva o codigo usando verificacoes truthy/falsy:
   - `if (nome)` em vez de `if (nome !== "" && nome !== null && nome !== undefined)`
   - Cuidado: para `idade`, lembre-se que `0` e `NaN` sao falsy, entao a validacao com truthy/falsy precisa considerar que idade zero pode ser valida
3. Teste com: nome vazio, nome "Ana", idade 0, idade 25, idade NaN

**Entrega:** crie `entregas-aula-07/05-truthy-simplificando.md`:

~~~~
# Questao 5 — Simplificando Condicoes com Truthy/Falsy

## Codigo original (verboso)

```javascript
// (copie o codigo original aqui)
```

## Codigo simplificado (com truthy/falsy)

```javascript
// (cole seu codigo simplificado aqui)
```

## Tabela de testes

| Entrada nome | Entrada idade | Resultado com codigo original | Resultado com codigo simplificado | Sao iguais? |
|---|---|---|---|---|
| (vazio) | 25 | | | |
| "Ana" | 0 | | | |
| "Ana" | 25 | | | |
| "Ana" | "abc" | | | |
| (vazio) | 0 | | | |

## Perguntas de reflexao

1. Por que a verificacao de `idade` com truthy/falsy exige cuidado especial? O que `if (idade)` faz quando idade e 0?

**Sua resposta:**

2. Em que situacao a expressao `if (nome)` e `if (nome !== "" && nome !== null && nome !== undefined)` dariam resultados DIFERENTES?

**Sua resposta:**

3. Qual versao voce prefere usar e por que?

**Sua resposta:**
~~~~

---

## Questao 6: Gerenciador de Tarefas com Menu e Categorizacao (PROJETO PROGRESSIVO)

**Conceito-chave:** Aula 07, Secao 10 — Gerenciador de Tarefas: integracao completa

**Objetivo:** Evoluir o Gerenciador de Tarefas (construido das Aulas 01 a 06) adicionando um menu interativo com `switch` e categorizacao de prioridade com `if/else if`, demonstrando integracao de multiplas estruturas condicionais em um projeto real.

**Passos de Execucao:**

1. Abra seu arquivo `index.html` do Gerenciador de Tarefas (o que voce construiu ate a Aula 06)
2. Substitua o script para incluir:
   - Um menu com `switch` com tres opcoes: 1-Adicionar tarefa, 2-Visualizar, 3-Sair
   - Ao adicionar tarefa: validar com truthy/falsy, categorizar prioridade com `if/else if` (urgente=ALTA, importante=MEDIA, normal=NORMAL)
   - Ao visualizar: mostrar as tarefas adicionadas na sessao atual
   - Ao sair: mensagem de despedida
3. Use ate 3 variaveis (`tarefa1`, `tarefa2`, `tarefa3`) para guardar as tarefas
4. Teste cada caminho: adicionar tarefa vazia, adicionar tarefa urgente, visualizar lista, sair

**Entrega:** crie `entregas-aula-07/06-gerenciador-condicionais.md`:

~~~~
# Questao 6 — Gerenciador de Tarefas com Menu e Categorizacao

## Codigo completo do index.html

```html
<!-- Cole aqui seu codigo HTML completo -->
```

## Testes realizados

### Teste 1: Menu — opcao invalida
**Opcao digitada:**
**Mensagem exibida:**

### Teste 2: Adicionar tarefa vazia
**Opcao digitada:** 1
**Tarefa digitada:** (deixar em branco)
**Mensagem exibida:**

### Teste 3: Adicionar tarefa urgente
**Opcao digitada:** 1
**Tarefa digitada:** Pagar contas URGENTE
**Prioridade exibida:**

### Teste 4: Adicionar tarefa normal
**Opcao digitada:** 1
**Tarefa digitada:** Estudar JavaScript
**Prioridade exibida:**

### Teste 5: Visualizar tarefas
**Opcao digitada:** 2
**O que foi exibido:**

### Teste 6: Sair
**Opcao digitada:** 3
**Mensagem exibida:**

## Perguntas de reflexao

1. Quantas estruturas condicionais diferentes voce usou neste programa? (if, else if, switch, etc.)

**Sua resposta:**

2. O que acontece se o usuario adicionar 4 tarefas? Como voce resolveria essa limitacao? (Dica: a Aula 08 vai ajudar)

**Sua resposta:**

3. Por que usamos strings (`"1"`, `"2"`, `"3"`) nos `case` do switch em vez de numeros?

**Sua resposta:**
~~~~

---

## Questao 7: Condicoes Aninhadas — Regras de Desconto

**Conceito-chave:** Aula 07, Secao 8 — Condicoes aninhadas

**Objetivo:** Implementar logica de desconto com multiplos niveis de decisao, demonstrando compreensao de aninhamento e quando usa-lo em vez de operadores logicos.

**Passos de Execucao:**

1. Crie um arquivo HTML com um programa que calcula desconto seguindo estas regras:
   - Se o cliente for VIP (pergunte ao usuario):
     - Se a compra for acima de R$ 100: desconto de 20%
     - Se a compra for de R$ 50 a R$ 100: desconto de 10%
     - Se a compra for abaixo de R$ 50: desconto de 5%
   - Se o cliente NAO for VIP:
     - Se a compra for acima de R$ 200: desconto de 10%
     - Se a compra for de R$ 100 a R$ 200: desconto de 5%
     - Se a compra for abaixo de R$ 100: sem desconto
2. Use condicoes ANINHADAS (um `if` dentro de outro `if`), nao operadores logicos
3. Exiba o valor original, o percentual de desconto e o valor final com `alert()`

**Entrega:** crie `entregas-aula-07/07-desconto-aninhado.md`:

~~~~
# Questao 7 — Regras de Desconto com Condicoes Aninhadas

## Codigo completo

```html
<!-- Cole aqui seu codigo HTML completo -->
```

## Tabela de testes

| Cliente VIP? | Valor compra | Desconto esperado | Resultado obtido |
|---|---|---|---|
| Sim | R$ 150 | 20% | |
| Sim | R$ 75 | 10% | |
| Sim | R$ 30 | 5% | |
| Nao | R$ 250 | 10% | |
| Nao | R$ 150 | 5% | |
| Nao | R$ 50 | 0% | |

## Perguntas de reflexao

1. Por que usamos aninhamento em vez de `if (vip && compra > 100)`? Qual a vantagem?

**Sua resposta:**

2. Quantos niveis de aninhamento seu codigo tem? Esta legivel?

**Sua resposta:**

3. Reescreva a logica VIP/compra usando operadores logicos (`&&`) em vez de aninhamento. Qual versao voce acha mais clara?

**Sua resposta (codigo com &&):**
~~~~

---

## Questao 8: Debugging de Condicionais — Encontre o Erro

**Conceito-chave:** Aula 07, Secoes 4 a 9 — Todos os conceitos de condicionais

**Objetivo:** Identificar e corrigir 4 erros comuns em condicionais, demonstrando capacidade de diagnosticar e depurar codigo problematico.

**Passos de Execucao:**

1. Para cada trecho abaixo, identifique o erro
2. Explique por que o erro acontece (qual conceito foi violado)
3. Corrija o codigo
4. Teste sua correcao no Console

**Trecho A — Erro de atribuicao:**
```javascript
let nota = 85;
if (nota = 100) {
    console.log("Nota maxima!");
} else {
    console.log("Nota: " + nota);
}
```
Comportamento atual: Sempre exibe "Nota maxima!", mesmo que nota seja 85.

**Trecho B — Break faltando:**
```javascript
let mes = 2;
switch (mes) {
    case 1:
        console.log("Janeiro");
    case 2:
        console.log("Fevereiro");
    case 3:
        console.log("Marco");
    default:
        console.log("Outro mes");
}
```
Comportamento atual: Exibe "Fevereiro", "Marco" e "Outro mes".

**Trecho C — Ordem errada no else if:**
```javascript
let pontos = 95;
if (pontos >= 60) {
    console.log("Conceito C");
} else if (pontos >= 80) {
    console.log("Conceito B");
} else if (pontos >= 95) {
    console.log("Conceito A");
} else {
    console.log("Conceito D");
}
```
Comportamento atual: Exibe "Conceito C" para pontos = 95, mas deveria exibir "Conceito A".

**Trecho D — Truthy/Falsy inesperado:**
```javascript
let texto = "0";
if (texto) {
    console.log("Tem conteudo");
} else {
    console.log("Vazio");
}
```
Comportamento atual: Exibe "Tem conteudo". O programador esperava "Vazio" porque o valor parece ser "zero".

**Entrega:** crie `entregas-aula-07/08-debugging-condicionais.md`:

~~~~
# Questao 8 — Debugging de Condicionais

## Tabela de erros encontrados

| Trecho | Erro identificado | Por que acontece? | Codigo corrigido |
|---|---|---|---|
| Trecho A | | | |
| Trecho B | | | |
| Trecho C | | | |
| Trecho D | | | |

## Explicacao detalhada

**Trecho A — Erro de atribuicao:**

Por que este erro acontece:

Como corrigir:

**Trecho B — Break faltando:**

Por que este erro acontece:

Como corrigir:

**Trecho C — Ordem errada no else if:**

Por que este erro acontece:

Como corrigir:

**Trecho D — Truthy/Falsy inesperado:**

Por que este erro acontece:

Como corrigir:

## Pergunta de reflexao final

Dentre os 4 erros, qual voce acha mais perigoso (mais dificil de perceber)? Por que?

**Sua resposta:**
~~~~

---

## Checklist Final: Pronto para a Aula 08?

Marque cada item abaixo so quando conseguir faze-lo **sem consultar a aula**:

- [ ] **Explicar** o conceito de decisao condicional em programacao usando analogias do cotidiano (semaforo, termostato, bifurcacao na estrada)
- [ ] **Interpretar** fluxogramas de decisao simples com ramificacoes sim/nao e multiplas opcoes, identificando condicoes, acoes e fluxos alternativos
- [ ] **Implementar** decisoes simples com `if` e blocos de codigo `{ }`, conectando a condicao booleana aos operadores de comparacao
- [ ] **Criar** caminhos alternativos com `if/else`, garantindo que exatamente um dos dois blocos seja executado
- [ ] **Construir** cadeias de multiplas condicoes com `if/else if/else`, compreendendo que apenas o primeiro bloco com condicao verdadeira e executado
- [ ] **Aplicar** `switch/case/break/default` para selecionar entre multiplos valores discretos, distinguindo quando usar `switch` vs `if/else if`
- [ ] **Combinar** condicoes com operadores logicos (`&&`, `||`, `!`) dentro de estruturas condicionais para expressar regras complexas
- [ ] **Aninhar** condicionais para decisoes em multiplos niveis, mantendo a legibilidade com indentacao consistente
- [ ] **Distinguir** valores truthy e falsy e prever como JavaScript os avalia em condicoes, substituindo verificacoes explicitas por verificacoes idiomaticas
- [ ] **Integrar** condicionais ao Gerenciador de Tarefas com menu interativo (`switch`) e categorizacao por prioridade (`if/else if`)

> *Acertou todos? Parabens! Voce esta pronto para a **Aula 08: Loops — for, while, do...while**. Na proxima aula, seu programa vai aprender a REPETIR acoes — perguntar tarefas repetidamente, percorrer listas, processar dados em serie. Condicionais (Aula 07) + Loops (Aula 08) formam a base completa de controle de fluxo. Travou em algum? Releia a secao indicada no campo **Conceito-chave** da questao correspondente antes de avancar.*

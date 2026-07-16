---
titulo: "JavaScript — Do Zero ao Profissional — Aula 09 — Questoes de Aprendizagem"
modulo: "01"
aula: "09"
---

# JavaScript — Do Zero ao Profissional Aula 09 — Questoes de Aprendizagem

## Como Usar Este Arquivo

Este arquivo e o seu **checkpoint de aprendizagem** da Aula 09: Arrays. A pergunta central e: *"eu realmente entendi arrays?"*

Cada questao verifica um conceito-chave da aula, na mesma ordem em que os topicos foram apresentados. Voce vai criar arrays, manipular com metodos, percorrer com loops e migrar seu Gerenciador de Tarefas.

**Instrucoes:**

1. Crie uma pasta `entregas-aula-09/` dentro da sua pasta de estudos
2. Responda cada questao na ordem — uma depende da anterior
3. Cada questao tem um template (em `~~~~`) que voce copia para um arquivo `.md` separado
4. Preencha os campos, responda as perguntas de reflexao
5. Nao consulte a aula enquanto faz — se travar, anote onde travou e so entao releia a secao indicada

> *Estas questoes sao o GATE para a proxima aula. So avance para a Aula 10 quando conseguir completar todas por conta propria.*

---

## Questao 1: Criando e acessando sua primeira lista

**Conceito-chave:** Criacao de array com `[]`, acesso por indice, `.length`, indices comecam em 0 (Aula 09, Secoes 3-4).

**Objetivo:** Demonstrar que voce sabe criar um array, acessar elementos por indice e usar `.length` para determinar o tamanho.

**Passos de Execucao:**

1. Crie um array `let frutas` com 5 frutas de sua escolha
2. Acesse e exiba no console: o primeiro elemento, o terceiro elemento e o ultimo elemento (usando `.length`)
3. Exiba o numero total de elementos
4. Modifique o segundo elemento para outra fruta
5. Exiba o array final no console

**Entrega:** crie `entregas-aula-09/01-criando-acessando.md`:

~~~~
# Questao 1 — Criando e acessando array

## Meu array de frutas

```javascript
let frutas = [// complete com 5 frutas];
```

## Acessando por indice

- Primeiro elemento (indice 0): _____________________
- Terceiro elemento (indice 2): _____________________
- Ultimo elemento (usando .length): _____________________
- Total de elementos (.length): _____________________

## Modificacao

```javascript
frutas[1] = "// sua nova fruta";
```

## Array final

O array apos a modificacao: [_____________________]

## Reflexao

O que aconteceria se voce tentasse acessar `frutas[10]`? Por que?

~~~~

---

## Questao 2: Manipulando as pontas — push, pop, shift, unshift

**Conceito-chave:** Metodos de adicao e remocao nas extremidades do array (Aula 09, Secao 4).

**Objetivo:** Executar uma sequencia de operacoes de adicao e remocao e prever o estado final do array.

**Passos de Execucao:**

1. Comece com `let letras = ["C", "D"]`
2. Adicione "A" no inicio com `.unshift()`
3. Adicione "E" no final com `.push()`
4. Adicione "B" no final com `.push()`
5. Remova o ultimo elemento com `.pop()` — guarde o valor removido em uma variavel
6. Remova o primeiro elemento com `.shift()` — guarde o valor removido
7. Exiba o array final e os valores removidos

**Entrega:** crie `entregas-aula-09/02-push-pop-shift-unshift.md`:

~~~~
# Questao 2 — Manipulando as pontas

## Sequencia de operacoes

```javascript
let letras = ["C", "D"];

// Passo 2: unshift("A")
letras.unshift("A");

// Passo 3: push("E")

// Passo 4: push("B")

// Passo 5: pop()

// Passo 6: shift()
```

## Resultados

- Array apos TODAS as operacoes: [_________________]
- Valor removido pelo pop(): _________________
- Valor removido pelo shift(): _________________

## Pergunta de reflexao

Qual metodo — push/pop ou unshift/shift — voce usaria para implementar uma fila de banco (primeiro a chegar, primeiro a sair)? Explique por que.

~~~~

---

## Questao 3: O canivete suico — splice() em acao

**Conceito-chave:** Uso de `.splice()` para remover, inserir e substituir elementos (Aula 09, Secao 5).

**Objetivo:** Executar comandos splice e explicar o que cada um faz e o que retorna.

**Passos de Execucao:**

1. Crie `let letras = ["A", "B", "C", "D", "E", "F"]`
2. Use `splice()` para remover "C" (indice 2) — guarde o retorno
3. Use `splice()` para inserir "X" E "Y" entre "A" e "B" — guarde o retorno
4. Use `splice()` para substituir "F" por "Z" — guarde o retorno
5. Exiba o array final e explique o que cada `splice()` retornou

**Entrega:** crie `entregas-aula-09/03-splice-em-acao.md`:

~~~~
# Questao 3 — splice() em acao

## Array inicial

```javascript
let letras = ["A", "B", "C", "D", "E", "F"];
```

## Operacao 1: Remover "C"

- Comando: letras.splice(______, ______)
- Array apos operacao 1: [_________________]
- Retorno do splice: [_________________]

## Operacao 2: Inserir "X" e "Y" entre "A" e "B"

- Comando: letras.splice(______, ______, "X", "Y")
- Array apos operacao 2: [_________________]
- Retorno do splice: [_________________]

## Operacao 3: Substituir "F" por "Z"

- Comando: letras.splice(______, ______, "Z")
- Array apos operacao 3: [_________________]
- Retorno do splice: [_________________]

## Reflexao

Por que o `splice()` da operacao 2 retornou um array vazio `[]`, enquanto os outros retornaram arrays com elementos?

~~~~

---

## Questao 4: Percorrendo arrays com for

**Conceito-chave:** Iteracao com `for` usando indice — `for (let i = 0; i < array.length; i++)` (Aula 09, Secao 6).

**Objetivo:** Escrever um loop `for` que percorra um array e exiba cada elemento com numeracao.

**Passos de Execucao:**

1. Crie `let convidados = ["Ana", "Bruno", "Carla", "Diego", "Eduarda"]`
2. Escreva um `for` que exiba no console cada convidado com numeracao: "Convidado 1: Ana", "Convidado 2: Bruno"...
3. Modifique o loop para exibir APENAS os convidados cujo nome comeca com a letra "A" (use `startsWith()` da Aula 06)
4. Teste e verifique os resultados

**Entrega:** crie `entregas-aula-09/04-percorrendo-com-for.md`:

~~~~
# Questao 4 — Percorrendo arrays com for

## Array de convidados

```javascript
let convidados = ["Ana", "Bruno", "Carla", "Diego", "Eduarda"];
```

## Loop com numeracao

```javascript
// Complete o codigo
for (let i = ______; i < ____________; i++) {
    console.log("Convidado " + (______) + ": " + ____________);
}
```

## Loop com filtro (apenas nomes comecando com A)

```javascript
// Complete o codigo
for (let i = 0; i < convidados.length; i++) {
    if (____________________) {
        console.log(convidados[i]);
    }
}
```

## Perguntas de reflexao

1. Qual o valor de `i` na primeira iteracao? E na ultima?
2. O que aconteceria se a condicao do `for` fosse `i <= convidados.length` em vez de `i < convidados.length`?

~~~~

---

## Questao 5: Primeiro contato com for...of

**Conceito-chave:** Sintaxe `for...of` e diferenca em relacao ao `for` com indice (Aula 09, Secao 7).

**Objetivo:** Reescrever um `for` com indice como `for...of` e explicar quando usar cada um.

**Passos de Execucao:**

1. Dado o codigo abaixo, reescreva-o usando `for...of`:

```javascript
let numeros = [10, 20, 30, 40, 50];
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i] * 2);
}
```

2. Explique em que situacao voce PREFERIRIA o `for` com indice em vez do `for...of`
3. De um exemplo concreto de cada caso

**Entrega:** crie `entregas-aula-09/05-for-of.md`:

~~~~
# Questao 5 — Primeiro contato com for...of

## Codigo original (for com indice)

```javascript
let numeros = [10, 20, 30, 40, 50];
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i] * 2);
}
```

## Codigo reescrito com for...of

```javascript
// Escreva aqui a versao com for...of

```

## Analise

### Situacao 1: quando o `for` com indice e MELHOR

Exemplo de codigo onde o indice e necessario:

```javascript
// Escreva um exemplo onde voce precisa do indice

```

Explicacao: (explique por que voce precisa do indice neste caso)

### Situacao 2: quando o `for...of` e MELHOR

Exemplo de codigo onde o indice NAO e necessario:

```javascript
// Escreva um exemplo onde o for...of e suficiente

```

Explicacao: (explique por que o for...of e suficiente neste caso)

~~~~

---

## Questao 6: Mutabilidade — o poder que strings nao tem

**Conceito-chave:** Diferenca entre strings (imutaveis) e arrays (mutaveis) — conexao com Aula 06 (Aula 09, Secao 3).

**Objetivo:** Comparar tentativas de modificacao em string vs array e explicar os resultados diferentes.

**Passos de Execucao:**

1. Crie uma string `let nome = "Carlos"` e tente alterar o primeiro caractere para "M"
2. Crie um array `let letras = ["C", "a", "r", "l", "o", "s"]` e altere o primeiro elemento para "M"
3. Exiba ambos no console apos a tentativa de modificacao
4. Explique por que os resultados sao diferentes

**Entrega:** crie `entregas-aula-09/06-mutabilidade.md`:

~~~~
# Questao 6 — Mutabilidade: string vs array

## Experimento com string

```javascript
let nome = "Carlos";
nome[0] = "M";
console.log("String apos tentativa de modificacao:", nome);
```

Resultado observado: _____________________

## Experimento com array

```javascript
let letras = ["C", "a", "r", "l", "o", "s"];
letras[0] = "M";
console.log("Array apos modificacao:", letras);
```

Resultado observado: _____________________

## Explicacao

Por que os resultados sao diferentes?

- A string NAO mudou porque: _____________________________________________
- O array MUDOU porque: _____________________________________________

## Mapa de conexoes

Complete a tabela abaixo usando seus conhecimentos da Aula 06 (strings) e Aula 09 (arrays):

| Caracteristica | String | Array |
|---|---|---|
| Indices comecam em 0? | Sim | ______ |
| Tem .length? | ______ | ______ |
| Mutavel? | ______ | ______ |
| str[0] = "X" funciona? | ______ | ______ |
| str.toUpperCase() modifica a original? | ______ | ______ |

~~~~

---

## Questao 7: Projeto progressivo — Gerenciador com arrays

**Conceito-chave:** Conversao do armazenamento do Gerenciador de string concatenada para array (Aula 09, Secao 8).

**Objetivo:** Migrar o Gerenciador de Tarefas da Aula 08 para usar array em vez de string.

**Passos de Execucao:**

1. Abra seu Gerenciador da Aula 08 (codigo HTML completo)
2. Substitua `let listaDeTarefas = ""` por `let tarefas = []`
3. Substitua `listaDeTarefas += "- " + tarefa + "\n"` por `tarefas.push(tarefa)`
4. Remova `totalTarefas` e substitua todas as referencias por `tarefas.length`
5. Substitua a exibicao de tarefas (case "2") por um `for` com numeracao
6. Substitua `listaDeTarefas === ""` por `tarefas.length === 0`
7. Teste o programa completo — adicione 3 tarefas, liste, saia

**Entrega:** crie `entregas-aula-09/07-gerenciador-com-arrays.md`:

~~~~
# Questao 7 — Gerenciador de Tarefas com arrays

## Codigo completo do Gerenciador migrado

Cole aqui o codigo HTML completo do seu Gerenciador apos a migracao:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Gerenciador de Tarefas — Migrado</title>
</head>
<body>
    <script>
        // Cole seu codigo aqui

    </script>
</body>
</html>
```

## Checklist de migracao

Marque cada item que voce alterou:

- [ ] `let listaDeTarefas = ""` substituido por `let tarefas = []`
- [ ] `totalTarefas` removido (substituido por `.length`)
- [ ] `listaDeTarefas += ...` substituido por `tarefas.push()`
- [ ] Exibicao (case "2") usa `for` com numeracao
- [ ] Verificacao de vazio usa `.length === 0`
- [ ] Menu exibe `tarefas.length`
- [ ] Mensagem de saida usa `tarefas.length`
- [ ] Programa funciona corretamente (testado)

## Perguntas de reflexao

1. Por que `tarefas.length` e melhor que uma variavel `totalTarefas` separada?

2. O que voce perdeu (se e que perdeu algo) ao migrar de string para array?

3. Que nova operacao (antes impossivel com string) agora e possivel com array? Pense em como voce removeria uma tarefa especifica.

~~~~

---

## Checklist Final: Pronto para a Aula 10?

Marque cada item so quando conseguir faze-lo **sem consultar a aula**:

- [ ] Sei criar um array com `[]` e acessar qualquer elemento por indice (indice 0 = primeiro)
- [ ] Sei usar `.length` para saber quantos elementos o array tem
- [ ] Entendo que arrays sao MUTAVEIS — posso modificar elementos depois de criados (diferente de strings)
- [ ] Sei adicionar e remover elementos das pontas com push/pop/shift/unshift
- [ ] Sei usar `.splice()` para remover, inserir ou substituir elementos em qualquer posicao
- [ ] Sei percorrer um array com `for` usando o indice — `for (let i = 0; i < array.length; i++)`
- [ ] Reconheco `for...of` como alternativa de iteracao quando o indice nao e necessario
- [ ] Converti meu Gerenciador de Tarefas para usar array em vez de string
- [ ] Sei explicar por que arrays sao melhores que string concatenada para armazenar listas

> *Acertou todos? Voce esta pronto para a Aula 10: Funcoes — Declaracao, Parametros e Retorno. Seu Gerenciador vai ganhar blocos de codigo reutilizaveis para adicionar, listar e remover tarefas. Travou em algum? Releia a secao indicada na questao correspondente antes de avancar.*

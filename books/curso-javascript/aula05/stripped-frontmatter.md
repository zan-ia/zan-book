# JavaScript — Do Zero ao Profissional Aula 05 — Questões de Aprendizagem

## Questões de Aprendizagem — Entrada e Saída: Interagindo com o Usuário

## Como Usar Este Arquivo

Este arquivo contém **questões de aprendizagem** para a Aula 05. Diferente dos exercícios que você fez durante a aula, estas questões funcionam como um **checkpoint de domínio** — você deve ser capaz de respondê-las sem consultar o conteúdo principal.

Cada questão tem um **Conceito-chave** (qual seção da aula ela verifica), um **Objetivo** claro, **Passos de Execução** que você segue no navegador, e um **Template de Entrega** que você copia e preenche.

**Instruções:**
1. Leia cada questão com atenção
2. Siga os passos de execução — todos podem ser feitos no navegador com um arquivo HTML
3. Crie a pasta `entregas-aula05/` dentro da sua pasta de estudos
4. Para cada questão, crie o arquivo de entrega seguindo o template fornecido
5. Só avance para a Aula 06 quando conseguir completar todas as questões sem reler a aula

> *Lembre-se: cada questão tem um campo **Conceito-chave** que diz exatamente qual seção da aula revisar se você travar.*

---

## Questão 1: alert() na Prática

**Conceito-chave:** Aula 05, Seção 2 — alert() — A Saída que Pula na Tela

**Objetivo:** Demonstrar que você sabe usar alert() para exibir mensagens e entende a diferença entre alert() e console.log().

**Passos de Execução:**

1. Crie um arquivo HTML com um `<script>` que executa 3 alert() em sequência
2. O primeiro alert diz "Bem-vindo à Aula 05!"
3. O segundo alert mostra o resultado de 15 + 7 (use uma expressão dentro)
4. O terceiro alert mostra "Esta é uma mensagem importante!" e usa template literal
5. Abra o console (F12) e adicione um console.log("Mensagem para o desenvolvedor")
6. Observe: qual bloqueia a página? Qual aparece apenas no console?

**Entrega:** crie `entregas-aula05/01-alert-pratica.md`:

~~~~
# Questão 1 — alert() na Prática

## Código utilizado

~~~~html
<!-- Cole aqui seu código HTML completo -->
~~~~

## Perguntas de reflexão

1. O que acontece com a página quando o primeiro alert() é executado?

**Sua resposta:**

2. Qual a diferença entre alert() e console.log() em termos de:

   a) Onde a mensagem aparece:
   b) Quem vê a mensagem:
   c) Bloqueio da página:

3. Por que alert() é considerado uma ferramenta de SAÍDA?

**Sua resposta:**
~~~~

---

## Questão 2: prompt() — A Entrada que Sempre Retorna String

**Conceito-chave:** Aula 05, Seção 3 — prompt() — A Entrada que Pergunta

**Objetivo:** Demonstrar que você sabe usar prompt() para receber dados do usuário e que entende que prompt() SEMPRE retorna string.

**Passos de Execução:**

1. Crie um arquivo HTML com um script que pergunta o nome, a idade e a cor favorita
2. Guarde cada resposta em uma variável separada
3. Use typeof para mostrar no console o tipo de cada variável
4. Tente somar a idade com 5 (ex: `idade + 5`) e veja o resultado no console
5. Explique por que o resultado não é uma soma numérica
6. Teste clicar em Cancelar em um dos prompts e veja o que aparece no console

**Entrega:** crie `entregas-aula05/02-prompt-string.md`:

~~~~
# Questão 2 — prompt() Sempre Retorna String

## Código utilizado

~~~~html
<!-- Cole aqui seu código HTML completo -->
~~~~

## Resultados no console

| Variável | Valor digitado | typeof | idade + 5 |
|---|---|---|---|
| nome | | | — |
| idade | | | |
| corFavorita | | | — |

## Perguntas de reflexão

1. Quando você somou `idade + 5`, qual foi o resultado? Ele está correto?

**Sua resposta:**

2. Por que prompt() SEMPRE retorna string, mesmo quando o usuário digita um número?

**Sua resposta:**

3. O que acontece quando você clica em Cancelar? O que prompt() retorna?

**Sua resposta:**

4. Qual o tipo de null segundo typeof?

**Sua resposta (teste no console antes):**
~~~~

---

## Questão 3: Template Literals — Concatenação Moderna

**Conceito-chave:** Aula 05, Seção 4 — Template Literals

**Objetivo:** Demonstrar que você sabe usar template literals com `${}` para montar mensagens e entende a diferença para concatenação com +.

**Passos de Execução:**

1. Crie um HTML que pergunta: nome, profissão, anos de experiência
2. Monte UMA mensagem com concatenação usando + e exiba no console
3. Monte a MESMA mensagem com template literal e exiba no console
4. No template literal, inclua uma expressão: `${Number(experiencia) + 5}` para projetar experiência futura
5. Use alert com template literal para mostrar "Nome: [nome], Profissão: [profissão]"
6. Crie uma mensagem de múltiplas linhas com template literal

**Entrega:** crie `entregas-aula05/03-template-literals.md`:

~~~~
# Questão 3 — Template Literals

## Código utilizado

~~~~html
<!-- Cole aqui seu código HTML completo -->
~~~~

## Comparação: concatenação vs template literal

| Característica | Concatenação com + | Template literal |
|---|---|---|
| Delimitador | Aspas (" ") | |
| Inserir variável | "..." + variavel + "..." | |
| Múltiplas linhas | Precisa de \n | |
| Expressões | | |

## Resultados no console

**Mensagem com concatenação:**

**Mensagem com template literal:**

**Expressão dentro de `${}`:**
${Number(experiencia) + 5} =

## Perguntas de reflexão

1. Qual dos dois métodos é mais legível? Por quê?

**Sua resposta:**

2. O que acontece se você usar aspas normais em vez de crases com `${}`?

**Sua resposta (teste no console antes):**
~~~~

---

## Questão 4: Conversão com Number() e parseInt()

**Conceito-chave:** Aula 05, Seção 5 — Conversão de Tipos

**Objetivo:** Demonstrar que você sabe converter strings para números usando Number() e parseInt(), entendendo as diferenças entre elas.

**Passos de Execução:**

1. Crie um HTML que pergunta "Quantos anos você tem?" e guarda em idadeString
2. Mostre no console: `idadeString + 5` (sem converter) — veja o resultado
3. Converta com `Number(idadeString)` e mostre `idadeNumber + 5`
4. Pergunte "Qual a largura (em pixels)?" e guarde em larguraString
5. Mostre no console: `Number(larguraString)` e `parseInt(larguraString)`
6. Teste com os valores: "5", "5.5", "5px", "10.5px", "abc"
7. Use typeof para confirmar os tipos
8. Use isNaN() para verificar se a conversão foi bem-sucedida

**Entrega:** crie `entregas-aula05/04-conversao-number.md`:

~~~~
# Questão 4 — Conversão com Number() e parseInt()

## Código utilizado

~~~~html
<!-- Cole aqui o código HTML do seu teste -->
~~~~

## Tabela de conversões

| Valor digitado | Number() | parseInt() | parseInt() + 5 | isNaN(Number()) |
|---|---|---|---|---|
| "5" | | | | |
| "5.5" | | | | |
| "5px" | | | | |
| "10.5px" | | | | |
| "abc" | | | | |

## Perguntas de reflexão

1. Qual a diferença entre Number("5.5") e parseInt("5.5")?

**Sua resposta:**

2. Por que Number("5px") dá NaN mas parseInt("5px") dá 5?

**Sua resposta:**

3. Para que serve isNaN()?

**Sua resposta:**

4. Quando você deve usar parseInt() em vez de Number()?

**Sua resposta:**
~~~~

---

## Questão 5: Conversão com parseFloat() e String()

**Conceito-chave:** Aula 05, Seção 5 — Conversão de Tipos

**Objetivo:** Demonstrar que você sabe usar parseFloat() para decimais e String() para converter número em texto.

**Passos de Execução:**

1. Crie um HTML que testa as seguintes conversões no console
2. Teste parseFloat() com: "5.5", "5.5px", "5", "abc"
3. Teste String() com: 5, 5.5, true, null, 10 + 5
4. Use typeof para confirmar que String() retorna string
5. Crie um cenário: pergunte "Qual o preço do produto?" e "Qual o desconto percentual?"
6. Converta ambos com parseFloat(), calcule o preço com desconto
7. Exiba o resultado com alert usando template literal

**Entrega:** crie `entregas-aula05/05-parsefloat-string.md`:

~~~~
# Questão 5 — parseFloat() e String()

## Resultados das conversões

| Entrada | parseFloat() | typeof | String() | typeof |
|---|---|---|---|---|
| 5.5 | — | — | | |
| "5.5" | | | — | — |
| "5.5px" | | | — | — |
| "abc" | | | — | — |
| true | — | — | | |
| null | — | — | | |
| 10 + 5 | — | — | | |

## Cenário: Cálculo de desconto

Preço digitado:
Desconto digitado:
Preço convertido (parseFloat):
Desconto convertido (parseFloat):
Preço final (preco - preco * desconto / 100):

## Perguntas de reflexão

1. Qual a vantagem de parseFloat() sobre Number()?

**Sua resposta:**

2. Quando você usaria String() no mundo real?

**Sua resposta:**
~~~~

---

## Questão 6: Fluxo E-P-S Completo

**Conceito-chave:** Aula 05, Seções 1 a 5 — Todos os conceitos

**Objetivo:** Demonstrar que você consegue criar um programa completo que usa entrada (prompt), processamento (conversão + cálculo) e saída (alert + console.log + template literals).

**Passos de Execução:**

1. Crie um programa que simula um CADASTRO SIMPLES de usuário
2. Pergunte: nome, email, idade, cidade
3. Converta a idade para número com Number()
4. Calcule o ano aproximado de nascimento (2026 - idade)
5. Mostre um alert com todas as informações usando template literal multilinha
6. Mostre no console um resumo com as variáveis e tipos
7. Teste com seus dados
8. Teste clicando Cancelar em algum campo e veja como o programa se comporta

**Entrega:** crie `entregas-aula05/06-cadastro-simples.md`:

~~~~
# Questão 6 — Cadastro Simples (E-P-S Completo)

## Código HTML completo

~~~~html
<!-- Cole aqui o código HTML completo -->
~~~~

## Dados inseridos

| Campo | Valor digitado | Tipo (typeof) |
|---|---|---|
| Nome | | |
| Email | | |
| Idade | | |
| Cidade | | |

## Resultados

**Idade convertida (number):**

**Ano de nascimento aproximado:**

**Texto do alert exibido:**

~~~~
Cole aqui exatamente o que apareceu no alert:
~~~~

## Perguntas de reflexão

1. Neste programa, qual foi a ENTRADA, o PROCESSAMENTO e a SAÍDA?

**Entrada:**

**Processamento:**

**Saída:**

2. O que acontece se o usuário digitar um texto no campo idade, como "vinte e cinco"? O que Number() retorna?

**Sua resposta (teste no console):**
~~~~

---

## Questão 7: Gerenciador de Tarefas — Versão Interativa

**Conceito-chave:** Aula 05, Seção 6 — Aplicando no Gerenciador de Tarefas

**Objetivo:** Aplicar TODOS os conceitos da aula no Gerenciador de Tarefas, criando um fluxo completo de interação com o usuário.

**Passos de Execução:**

1. Crie o código do Gerenciador de Tarefas que:
   - Dá boas-vindas com alert
   - Pergunta o nome da primeira tarefa (prompt)
   - Pergunta o nome da segunda tarefa (prompt)
   - Pergunta o prazo da primeira tarefa em dias (prompt + parseInt)
   - Pergunta a prioridade da primeira tarefa (1 = Alta, 2 = Média, 3 = Baixa)
   - Converte a prioridade com Number()
   - Mostra um alert confirmando as tarefas com template literal
   - Mostra no console um resumo completo com template literals, incluindo:
     - Nome de cada tarefa
     - Status inicial ("Pendente")
     - Prioridade em texto
     - Prazo em dias
     - Tipo de cada variável
   - Use isNaN() para tratar prioridade inválida

**Entrega:** crie `entregas-aula05/07-gerenciador-interativo.md`:

~~~~
# Questão 7 — Gerenciador de Tarefas Interativo

## Código HTML completo do Gerenciador

~~~~html
<!-- Cole aqui o código completo -->
~~~~

## Dados inseridos no teste

**Tarefa 1:** Nome: , Prazo: , Prioridade (número): , Prioridade (texto):
**Tarefa 2:** Nome:

## O que apareceu no alert de confirmação

~~~~
Cole aqui o texto exato do alert:
~~~~

## Console output

~~~~
Cole aqui tudo que apareceu no console (Ctrl+C no DevTools):
~~~~

## Perguntas de reflexão

1. O que torna este Gerenciador "interativo" em comparação com a versão da Aula 04?

**Sua resposta:**

2. Por que foi necessário converter a prioridade e o prazo para número?

**Sua resposta:**

3. O que acontece se o usuário digitar "urgente" no campo de prioridade (em vez de 1, 2 ou 3)? Como o programa lida com isso?

**Sua resposta:**

4. Qual parte do código você considera mais importante nesta aula? Por quê?

**Sua resposta:**
~~~~

---

## Questão 8: Diagnóstico Final — Caça aos Erros

**Conceito-chave:** Aula 05, Seções 1 a 6 — Todos os conceitos

**Objetivo:** Identificar e corrigir 7 erros relacionados a entrada/saída, template literals e conversão de tipos.

**Passos de Execução:**

1. Analise o código abaixo que contém 7 erros
2. Para cada erro, identifique: o que está errado, por que está errado e a correção
3. Teste cada correção no navegador
4. Reescreva a versão final completa e corrigida

```javascript
let nome = prompt("Qual seu nome?");

// Erro 1 — tipo incorreto de prompt
console.log("O nome é do tipo: " + typeof nome);
// Esperado: "string", mas o aluno colocou typeof incorreto

// Erro 2 — concatenação em vez de template literal
console.log("Olá, " + nome "!");  // Faltou o operador

// Erro 3 — alert com aspas em vez de crases
console.log("Bem-vindo, ${nome}!");  // Não interpola

// Erro 4 — esquecer de converter
let idade = prompt("Sua idade:");
console.log("Ano que vem: " + (idade + 1));

// Erro 5 — parseInt vs Number (perde decimal)
let altura = prompt("Sua altura (ex: 1.75):");
let alturaNum = parseInt(altura);
console.log("Altura: " + alturaNum);

// Erro 6 — NaN não detectado
let valorInvalido = Number("abc");
console.log("Valor inválido é NaN? " + (valorInvalido === NaN));

// Erro 7 — alert bloqueando depuração (uso excessivo)
for (let i = 0; i < 5; i++) {
    alert("Passo " + i);
}
```

**Entrega:** crie `entregas-aula05/08-diagnostico-final.md`:

~~~~
# Questão 8 — Diagnóstico Final

## Tabela de erros

| Erro # | Código com problema | O que está errado? | Por que está errado? | Correção |
|---|---|---|---|---|
| 1 | typeof nome | | | |
| 2 | "Olá, " + nome "!" | | | |
| 3 | "Bem-vindo, ${nome}!" | | | |
| 4 | idade + 1 | | | |
| 5 | parseInt(altura) com 1.75 | | | |
| 6 | valorInvalido === NaN | | | |
| 7 | alert dentro de loop | | | |

## Código corrigido (versão final completa)

```javascript
// Escreva aqui o código completo corrigido com comentários explicativos

```

## O que aprendi

Em 2-3 frases, qual destes erros você considera mais fácil de cometer e como pretende evitá-lo daqui para frente:

**Sua resposta:**
~~~~

---

## Checklist Final: Pronto para a Aula 06?

Marque cada item abaixo só quando conseguir fazê-lo **sem consultar a aula**:

- [ ] **Explicar** o modelo Entrada → Processamento → Saída com exemplos
- [ ] **Usar** `alert()` para exibir mensagens ao usuário
- [ ] **Explicar** que alert() bloqueia a página (e por que isso é útil)
- [ ] **Usar** `prompt()` para receber dados, guardando o valor em uma variável
- [ ] **Explicar** que prompt() SEMPRE retorna string, independentemente do que o usuário digitar
- [ ] **Usar** template literals com `` `${}` `` no lugar da concatenação com `+`
- [ ] **Converter** strings para números com `Number()`, `parseInt()` e `parseFloat()`
- [ ] **Usar** `isNaN()` para verificar se uma conversão produziu NaN
- [ ] **Usar** `String()` para converter valores em string
- [ ] **Aplicar** entrada, saída, template literals e conversão no Gerenciador de Tarefas

> *Acertou todos? Parabéns! Você está pronto para a **Aula 06: Strings em Profundidade**. Na próxima aula, você vai mergulhar em métodos de string: length, maiúsculas/minúsculas, busca, extração e muito mais. Travou em algum? Releia a seção indicada no campo Conceito-chave da questão correspondente antes de avançar.*

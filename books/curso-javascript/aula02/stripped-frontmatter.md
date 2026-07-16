# JavaScript — Do Zero ao Profissional — Aula 02 — Questões de Aprendizagem

## Como Usar Este Arquivo

Este arquivo contém **questões de aprendizagem** para a Aula 02 — "Variáveis e Memória — Do Console para o Arquivo". Diferente dos exercícios que você fez durante a aula, estas questões funcionam como um **checkpoint de domínio** — você deve ser capaz de respondê-las sem consultar o conteúdo principal.

Cada questão tem um **Conceito-chave** (que seção da aula ela verifica), um **Objetivo** claro, **Passos de Execução** que você segue no console ou no seu arquivo HTML, e um **Template de Entrega** que você copia e preenche.

**Instruções:**
1. Leia cada questão com atenção
2. Siga os passos de execução — alguns usam o console, outros usam o arquivo HTML que você criou
3. Crie a pasta `entregas-aula02/` dentro da sua pasta de estudos
4. Para cada questão, crie o arquivo de entrega seguindo o template fornecido
5. Só avance para a próxima aula quando conseguir completar todas as questões sem reler a aula

---

## Questão 1: Nome e Valor — A Caixinha Etiquetada

**Conceito-chave:** Aula 02, Seção 1 — O Que É Memória?

**Objetivo:** Demonstrar que você distingue claramente entre o nome de uma variável (a etiqueta) e o valor que ela armazena (o conteúdo da caixinha).

**Passos de Execução:**

1. Abra o console do navegador (F12)
2. Crie uma variável com `let` chamada `tarefaImportante` com o valor "Estudar JavaScript"
3. Crie uma variável com `let` chamada `prazoDaTarefa` com o valor "30/06/2026"
4. Exiba cada variável com `console.log()` — sem aspas
5. Agora escreva `console.log("tarefaImportante")` — com aspas
6. Compare os resultados: um mostra o valor, o outro mostra o texto

**Entrega:** crie `entregas-aula02/01-nome-e-valor.md`:

~~~~
# Questão 1 — Nome e Valor

## Código executado no console

let tarefaImportante = "Estudar JavaScript";
let prazoDaTarefa = "30/06/2026";
console.log(tarefaImportante);
console.log(prazoDaTarefa);
console.log("tarefaImportante");

## Resultados observados

| Comando | O que apareceu no console |
|---|---|
| console.log(tarefaImportante) | |
| console.log(prazoDaTarefa) | |
| console.log("tarefaImportante") | |

## Pergunta de reflexão

Por que console.log(tarefaImportante) (sem aspas) mostra o valor, enquanto console.log("tarefaImportante") (com aspas) mostra o texto "tarefaImportante"?

**Sua resposta:**
~~~~

---

## Questão 2: Declarar vs Reatribuir

**Conceito-chave:** Aula 02, Seções 2 e 3 — Atribuição, Reatribuição e Declaração com let

**Objetivo:** Demonstrar que você entende a diferença entre declarar uma variável (criar a caixinha) e reatribuir seu valor (trocar o conteúdo).

**Passos de Execução:**

1. Abra o console do navegador
2. Declare: `let meuHobby = "Ler livros";`
3. Exiba: `console.log(meuHobby);`
4. Reatribua: `meuHobby = "Tocar violao";`
5. Exiba de novo: `console.log(meuHobby);`
6. Tente declarar de novo: `let meuHobby = "Correr";` — veja o erro
7. Reatribua sem o `let`: `meuHobby = "Correr";` — funciona
8. Exiba mais uma vez

**Entrega:** crie `entregas-aula02/02-declarar-reatribuir.md`:

~~~~
# Questão 2 — Declarar vs Reatribuir

## Código executado

let meuHobby = "Ler livros";
console.log(meuHobby); // Resultado:
meuHobby = "Tocar violao";
console.log(meuHobby); // Resultado:
let meuHobby = "Correr"; // Resultado (erro):
meuHobby = "Correr";
console.log(meuHobby); // Resultado:

## O que aprendi

Preencha as lacunas:

- Declarar uma variável significa: _________________________________
- Reatribuir uma variável significa: ________________________________
- Na reatribuição, a palavra-chave ______ NÃO é usada novamente
- Se eu usar `let` duas vezes com o mesmo nome, acontece: _________________________________

## Conclusão

Em 2-3 frases, explique com suas palavras a diferença entre declarar e reatribuir:
~~~~

---

## Questão 3: let vs const — Quando Usar Cada Um

**Conceito-chave:** Aula 02, Seções 3 e 4 — let e const

**Objetivo:** Demonstrar que você sabe distinguir situações onde usar `let` de situações onde usar `const`.

**Passos de Execução:**

1. Abra o console do navegador
2. Para cada cenário abaixo, decida se usa `let` ou `const`, crie a variável e tente reatribuir
3. Cenário A: o nome do criador do seu aplicativo (nunca muda)
4. Cenário B: a tarefa que você está fazendo AGORA (pode mudar durante o dia)
5. Cenário C: a data de hoje (não muda, é hoje)
6. Cenário D: o número de tarefas concluídas (aumenta conforme você termina)
7. Para os que usam `const`, tente reatribuir e veja o erro

**Entrega:** crie `entregas-aula02/03-let-const.md`:

~~~~
# Questão 3 — let vs const

## Cenários

| Cenário | Variável | Palavra-chave usada | Valor inicial | Tentativa de reatribuição (funcionou?) |
|---|---|---|---|---|
| A | nomeDoCriador | | "Seu Nome" | |
| B | tarefaAtual | | "Estudar JavaScript" | |
| C | dataDeHoje | | "23/06/2026" | |
| D | tarefasConcluidas | | 0 | |

## Pergunta de reflexão

Explique por que você escolheu `let` ou `const` para cada cenário:

- Cenário A: _________________________________
- Cenário B: _________________________________
- Cenário C: _________________________________
- Cenário D: _________________________________

## Regra de ouro

Complete a frase: "Use _______ quando o valor nunca vai mudar. Use _______ quando o valor precisa ser trocado durante o programa."
~~~~

---

## Questão 4: camelCase e Nomes Descritivos

**Conceito-chave:** Aula 02, Seção 5 — Nomenclatura

**Objetivo:** Demonstrar que você sabe criar nomes de variáveis válidos e descritivos em camelCase português, e que identifica nomes inválidos.

**Passos de Execução:**

1. Analise os 10 nomes abaixo e classifique cada um como VÁLIDO ou INVÁLIDO
2. Para os inválidos, explique o erro e escreva uma correção em camelCase
3. Teste a validade no console do navegador
4. Crie 5 nomes descritivos para as situações dadas

Nomes para analisar:
- `nome`
- `1aTarefa`
- `status-da-tarefa`
- `nomeDaTarefa`
- `preco total`
- `totalDeTarefas`
- `const`
- `dataEntrega`
- `let`
- `statusDaTarefaPrincipal`

**Entrega:** crie `entregas-aula02/04-nomenclatura.md`:

~~~~
# Questão 4 — camelCase e Nomes Descritivos

## Análise dos nomes

| Nome | Válido? | Se inválido: por quê? | Correção sugerida |
|---|---|---|---|
| nome | | | |
| 1aTarefa | | | |
| status-da-tarefa | | | |
| nomeDaTarefa | | | |
| preco total | | | |
| totalDeTarefas | | | |
| const | | | |
| dataEntrega | | | |
| let | | | |
| statusDaTarefaPrincipal | | | |

## Nomes descritivos

Crie nomes camelCase em português para estas situações:

- A data em que uma tarefa foi criada: _______________
- O horário do alarme: _______________
- O endereço de email do usuário: _______________
- O número de tarefas concluídas hoje: _______________
- A prioridade de uma tarefa (alta, média, baixa): _______________

## Pergunta de reflexão

Por que `nomeDaTarefa` é melhor que `n` ou `x` como nome de variável?

**Sua resposta:**
~~~~

---

## Questão 5: Criando um Arquivo HTML com Variáveis

**Conceito-chave:** Aula 02, Seção 6 — Do Console para o Arquivo

**Objetivo:** Demonstrar que você sabe criar um arquivo HTML com a tag `<script>` e executar JavaScript a partir de um arquivo real.

**Passos de Execução:**

1. Crie um arquivo chamado `meu-programa.html`
2. Adicione a estrutura HTML completa: DOCTYPE, html, head, body
3. Coloque um título na página com `<h1>` (o que você quiser)
4. Dentro da tag `<script>`, crie 3 variáveis:
   - Uma `const` para seu nome
   - Uma `let` para seu hobby favorito
   - Uma `let` para sua idade
5. Exiba cada variável com `console.log()`
6. Salve o arquivo e abra no navegador
7. Abra o console com F12 e veja o resultado

**Entrega:** crie `entregas-aula02/05-meu-programa-html.md`:

~~~~
# Questão 5 — Meu Primeiro Arquivo HTML

## Código completo do arquivo

```html
<!DOCTYPE html>
<html>
<head>
    <title>COLE SEU TÍTULO AQUI</title>
</head>
<body>
    <!-- Cole o conteúdo do body -->
    
    <script>
        // Cole seu código JavaScript aqui
        
    </script>
</body>
</html>
```

## Resultado no console

| Variável | Valor exibido |
|---|---|
| (sua const) | |
| (seu let hobby) | |
| (seu let idade) | |

## Pergunta de reflexão

O que muda quando você fecha o navegador e abre o arquivo de novo? O código ainda está lá? Explique por que isso é importante.

**Sua resposta:**
~~~~

---

## Questão 6: Adicionando Comentários ao Arquivo

**Conceito-chave:** Aula 02, Seção 7 — Comentários

**Objetivo:** Demonstrar que você sabe adicionar comentários de linha `//` e de bloco `/* */` para documentar código em um arquivo HTML.

**Passos de Execução:**

1. Abra o arquivo `meu-programa.html` que você criou na Questão 5
2. Adicione no topo, dentro do `<script>`, um comentário de bloco `/* */` com:
   - Seu nome completo
   - A data de hoje
   - O nome do programa: "Meu Primeiro Programa"
3. Adicione um comentário de linha `//` antes de CADA variável, explicando o que ela guarda
4. Adicione um comentário de linha `//` antes de cada `console.log()`, explicando o que vai aparecer
5. Salve o arquivo e atualize o navegador (F5)
6. Confirme que o console mostra as mesmas mensagens de antes

**Entrega:** crie `entregas-aula02/06-comentarios.md`:

~~~~
# Questão 6 — Comentários no Código

## Código completo com comentários

```html
<!DOCTYPE html>
<html>
<head>
    <title>COLE SEU TÍTULO</title>
</head>
<body>
    <script>
        // Cole aqui o conteúdo completo do script com os comentários
        // que você adicionou
        
    </script>
</body>
</html>
```

## Perguntas de reflexão

1. Por que comentários de bloco `/* */` são melhores para o cabeçalho do programa do que comentários de linha `//`?

**Sua resposta:**

2. O que aconteceria se você fechasse o navegador, abrisse o arquivo amanhã, e não tivesse comentários? Como os comentários ajudam nesse cenário?

**Sua resposta:**
~~~~

---

## Questão 7: Gerenciador de Tarefas — Dados em Variáveis

**Conceito-chave:** Aula 02, Seções 3, 4, 5, 6 e 7 — Aplicação Completa

**Objetivo:** Demonstrar que você sabe aplicar todos os conceitos da aula (variáveis, constantes, nomenclatura, arquivo HTML e comentários) para representar dados reais de um Gerenciador de Tarefas.

**Passos de Execução:**

1. Crie um arquivo `gerenciador-tarefas.html`
2. Adicione a estrutura HTML completa
3. Dentro do `<script>`, adicione um comentário de bloco `/* */` no topo com "Gerenciador de Tarefas — Versão 1.0" e seu nome
4. Crie as variáveis:
   - Uma `const` para o nome do aplicativo (ex: "Meu Gerenciador")
   - Uma `let` para a primeira tarefa do dia
   - Uma `let` para o status da primeira tarefa (ex: "Pendente")
   - Uma `let` para a segunda tarefa do dia
   - Uma `let` para o status da segunda tarefa
   - Uma `const` para seu nome como criador
   - Uma `let` para o total de tarefas (2)
5. Adicione comentários de linha `//` explicando cada grupo de variáveis
6. Exiba cada variável com `console.log()`
7. Simule a evolução: reatribua o status da primeira tarefa para "Concluída"
8. Exiba o status atualizado
9. Salve e abra no navegador para verificar

**Entrega:** crie `entregas-aula02/07-gerenciador-de-tarefas.md`:

~~~~
# Questão 7 — Gerenciador de Tarefas

## Estrutura do meu Gerenciador

Preencha com os valores que você usou:

```
/* COMENTÁRIO DE BLOCO:
   Nome do programa: ___________________
   Autor: ___________________
*/

const nomeDoApp = "___________________";
let tarefa1 = "___________________";
let statusTarefa1 = "___________________";
let tarefa2 = "___________________";
let statusTarefa2 = "___________________";
const nomeDoCriador = "___________________";
let totalDeTarefas = ___;
```

## Simulação de evolução

### Antes de concluir a tarefa 1

console.log(nomeDoApp);      // Resultado:
console.log(tarefa1);        // Resultado:
console.log(statusTarefa1);  // Resultado:
console.log(tarefa2);        // Resultado:
console.log(statusTarefa2);  // Resultado:
console.log(totalDeTarefas); // Resultado:

### Depois de concluir a tarefa 1

// Código da reatribuição:
statusTarefa1 = "Concluída";

console.log(statusTarefa1); // Resultado:
console.log(tarefa1);       // O valor de tarefa1 mudou? ( ) Sim ( ) Não. Explique:

## Pergunta de reflexão

Por que algumas informações foram declaradas com `const` e outras com `let`? O que isso diz sobre como cada informação se comporta ao longo do programa?

**Sua resposta:**
~~~~

---

## Questão 8: Diagnóstico de Erros

**Conceito-chave:** Aula 02, Seções 3, 4, 5, 6 e 7 — Todos os erros comuns

**Objetivo:** Identificar e corrigir 6 erros em um trecho de código fornecido, demonstrando domínio dos erros comuns com variáveis, nomenclatura, comentários e HTML.

**Passos de Execução:**

1. Analise o código abaixo que contém 6 erros
2. Para cada erro, identifique: a linha, o tipo de erro, a causa e a correção
3. Teste cada correção no console do navegador
4. Escreva a versão final corrigida completa

```javascript
let nome = "Ana"
const nome = "João"

let 1aTarefa = "Estudar"
let status-da-tarefa = "Pendente"

const pi = 3.14
pi = 3.14159

/* Comentário de bloco sem fechar
let tarefa = "Codar"
console.log(tarefa)
```

**Entrega:** crie `entregas-aula02/08-diagnostico-de-erros.md`:

~~~~
# Questão 8 — Diagnóstico de Erros

## Tabela de diagnóstico

| Linha (aproximada) | Tipo de erro | Causa | Correção |
|---|---|---|---|
| | | | |
| | | | |
| | | | |
| | | | |
| | | | |
| | | | |

## Código corrigido (versão final)

```html
<!DOCTYPE html>
<html>
<head>
    <title>Diagnóstico Corrigido</title>
</head>
<body>
    <script>
        // Escreva aqui o código completo corrigido com comentários
        
    </script>
</body>
</html>
```

## O que aprendi

Em 2-3 frases, explique qual destes erros você considera mais fácil de cometer e como pretende evitá-lo:
~~~~

---

## Checklist Final: Pronto para a Próxima Aula?

Marque cada item abaixo só quando conseguir fazê-lo **sem consultar a aula**:

- [ ] **Explicar** o conceito de memória do computador usando a analogia das caixinhas etiquetadas
- [ ] **Explicar** o que é uma variável como espaço nomeado na memória
- [ ] **Criar** variáveis com `let` e constantes com `const`, usando o operador `=`
- [ ] **Diferenciar** declarar (criar a caixinha) de reatribuir (trocar o conteúdo)
- [ ] **Escolher** entre `let` e `const` dependendo se o valor precisa mudar
- [ ] **Usar** `console.log()` para inspecionar o valor de uma variável, distinguindo o nome da etiqueta do conteúdo
- [ ] **Nomear** variáveis em camelCase descritivo em português
- [ ] **Identificar** erros comuns: nomes começando com número, hifens, espaços, palavras reservadas
- [ ] **Criar** um arquivo HTML com `<script>` e JavaScript funcional
- [ ] **Adicionar** comentários de linha `//` e de bloco `/* */` para documentar código

> *Acertou todos? Parabéns! Você está pronto para a próxima aula: Tipos de Dados Primitivos, onde vai descobrir que os valores dentro das caixinhas têm naturezas diferentes — números, textos, verdadeiro/falso. Travou em algum? Releia a seção indicada na questão correspondente antes de avançar.*

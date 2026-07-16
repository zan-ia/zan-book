# Programador Profissional com Agentes Aula 02 — Questões de Aprendizagem

## Como Usar Este Arquivo

Este arquivo é o seu **checkpoint de aprendizagem**. A pergunta central é: *"eu realmente entendi a matéria?"*

Cada questão verifica um conceito-chave da Aula 02. Você deve:

1. Fazer as questões em ordem (da mais conceitual à mais prática)
2. Ler o **Objetivo** primeiro — ele diz o que você precisa demonstrar
3. Seguir os **Passos de Execução** — são verificáveis e concretos
4. **Não consultar a aula enquanto faz** — se travar, anote onde travou e só então releia a seção indicada
5. Criar os arquivos de entrega na pasta `entregas-aula-02/`

Cada questão indica **qual seção da aula** ela verifica. Se você travar, volte à seção correspondente, estude novamente e tente de novo.

> *Só avance para a Aula 03 quando conseguir completar todas as questões por conta própria.*

---

## Questão 1: Regras Permanentes vs Prompts Sob Demanda

**Conceito-chave:** Regras permanentes e prompts sob demanda (Aula 02, Seção 2).

**Objetivo:** Demonstrar que você sabe diferenciar os dois tipos de instrução e identificar quando usar cada um.

**Passos de Execução:**

1. Leia cada situação abaixo e classifique como "regra permanente" ou "prompt sob demanda"
2. Justifique sua escolha em 1-2 frases
3. Indique em qual nível de escopo (usuário, repositório, organização) cada regra permanente se encaixaria

**Entrega:** crie `entregas-aula-02/q01-classificacao.md`:

~~~~
# Questão 1 — Classificação de Instruções

## Situação A
"O projeto usa Node.js com Express. Nunca use axios para chamadas HTTP."

Classificação: [regra permanente | prompt sob demanda]
Nível de escopo: [usuário | repositório | organização]
Justificativa: [2-3 frases]

## Situação B
"Crie uma rota GET /users que retorna uma lista de usuários do banco."

Classificação: [regra permanente | prompt sob demanda]
Justificativa: [2-3 frases]

## Situação C
"Toda função pública deve ter JSDoc explicando parâmetros e retorno."

Classificação: [regra permanente | prompt sob demanda]
Nível de escopo: [usuário | repositório | organização]
Justificativa: [2-3 frases]

## Situação D
"Explique o que este código faz linha por linha."

Classificação: [regra permanente | prompt sob demanda]
Justificativa: [2-3 frases]

## Situação E
"Responda em português. Use tom profissional."

Classificação: [regra permanente | prompt sob demanda]
Nível de escopo: [usuário | repositório | organização]
Justificativa: [2-3 frases]
~~~~

---

## Questão 2: Categorias e Escopo de Regras

**Conceito-chave:** 6 categorias de regras e 3 níveis de escopo (Aula 02, Seção 2).

**Objetivo:** Demonstrar que você conhece as 6 categorias e consegue classificar regras reais em cada uma.

**Passos de Execução:**

1. Leia cada regra abaixo
2. Identifique a qual das 6 categorias ela pertence (stack, estilo, convenções, comandos, comunicação, restrições)
3. Explique por que ela se encaixa naquela categoria

**Entrega:** crie `entregas-aula-02/q02-categorias.md`:

~~~~
# Questão 2 — Categorias de Regras

## Regra 1
"Use camelCase para variáveis e funções. Constantes em UPPER_SNAKE_CASE."

Categoria: [categoria]
Por quê: [1-2 frases]

## Regra 2
"Para iniciar o servidor em modo dev: npm run dev."

Categoria: [categoria]
Por quê: [1-2 frases]

## Regra 3
"O backend usa Node.js com Express. O banco de dados é PostgreSQL."

Categoria: [categoria]
Por quê: [1-2 frases]

## Regra 4
"NÃO use bibliotecas externas para chamadas HTTP."

Categoria: [categoria]
Por quê: [1-2 frases]

## Regra 5
"Responda em português. Se houver dúvida, peça esclarecimento."

Categoria: [categoria]
Por quê: [1-2 frases]

## Regra 6
"Commits no formato conventional commits: tipo(escopo): descrição."

Categoria: [categoria]
Por quê: [1-2 frases]
~~~~

---

## Questão 3: Criar o copilot-instructions.md

**Conceito-chave:** Estrutura e conteúdo do arquivo de instruções (Aula 02, Seção 3).

**Objetivo:** Criar um arquivo de instruções completo para um projeto diferente do DevFlow, aplicando as boas práticas aprendidas.

**Passos de Execução:**

1. Imagine que você está iniciando um projeto chamado **TaskFlow** — um aplicativo de gerenciamento de tarefas
2. O TaskFlow usa: Node.js, Express, MongoDB, EJS (templates), Jest
3. Crie um arquivo `.github/copilot-instructions.md` para o TaskFlow com pelo menos 4 seções: stack, estilo, commits, restrições
4. Cada seção deve ter no mínimo 3 regras específicas e verificáveis

**Entrega:** crie `entregas-aula-02/q03-taskflow-instructions.md`:

~~~~
# Questão 3 — Instruções do TaskFlow

Crie o arquivo .github/copilot-instructions.md para o projeto TaskFlow:

```markdown
# TaskFlow — Custom Instructions

## Stack do Projeto
- [regra 1]
- [regra 2]
- [regra 3]

## Estilo de Código
- [regra 1]
- [regra 2]
- [regra 3]

## Convenções de Commit
- [regra 1]
- [regra 2]
- [regra 3]

## Restrições
- [regra 1]
- [regra 2]
- [regra 3]
```

## Reflexão
Explique por que cada uma das suas regras de restrição é específica e verificável (não genérica):
[3-5 frases]
~~~~

---

## Questão 4: Identificar Anti-padrões

**Conceito-chave:** Anti-padrões em instruções (Aula 02, Seção 4).

**Objetivo:** Identificar anti-padrões em instruções reais e corrigi-los.

**Passos de Execução:**

1. Leia cada regra abaixo
2. Identifique qual anti-padrão ela representa (contraditória, genérica, longa demais, impossível de verificar, competindo com ferramentas)
3. Reescreva a regra de forma correta

**Entrega:** crie `entregas-aula-02/q04-antipadroes.md`:

~~~~
# Questão 4 — Identificando e Corrigindo Anti-padrões

## Regra A
"Escreva código limpo e bem organizado."

Anti-padrão: [qual?]
Por quê: [1-2 frases]
Reescrita correta: [regra específica e verificável]

## Regra B
"Use 2 espaços para indentação." (na seção de estilo)
"Nunca use espaços para indentação — use tabs." (na seção de restrições)

Anti-padrão: [qual?]
Por quê: [1-2 frases]
Reescrita correta: [regra unificada]

## Regra C
"Nunca introduza bugs no código."

Anti-padrão: [qual?]
Por quê: [1-2 frases]
Reescrita correta: [regra de comportamento, não de resultado]

## Regra D
Documento com 200 linhas de instruções, incluindo histórico do projeto, política de férias da empresa e 150 regras de código.

Anti-padrão: [qual?]
Por quê: [1-2 frases]
Solução: [o que fazer?]
~~~~

---

## Questão 5: Criar um Template de Prompt

**Conceito-chave:** .github/prompts/ como templates reutilizáveis (Aula 02, Seção 5).

**Objetivo:** Criar um template de prompt reutilizável para uma tarefa não coberta nos 3 templates da aula.

**Passos de Execução:**

1. Pense em uma tarefa comum do dia a dia que poderia ser automatizada com um prompt reutilizável
2. Crie o arquivo de template com: título, descrição do objetivo, placeholders identificáveis, regras claras
3. O template deve ter entre 8 e 15 linhas

**Entrega:** crie `entregas-aula-02/q05-template-prompt.md`:

~~~~
# Questão 5 — Template de Prompt

## Qual tarefa este prompt automatiza?
[2-3 frases descrevendo a tarefa e por que ela se repete com frequência]

## Template criado
Crie o conteúdo do arquivo `.github/prompts/meu-template.md`:

```markdown
# Prompt: [TÍTULO DO TEMPLATE]

[DESCRIÇÃO DO OBJETIVO]

- [placeholder 1]: [descrição]
- [placeholder 2]: [descrição]

Regras:
1. [regra 1]
2. [regra 2]
3. [regra 3]
```

## Por que este template é útil?
[2-3 frases explicando como ele economiza tempo e garante consistência]
~~~~

---

## Questão 6: Testar Instruções

**Conceito-chave:** Verificação de que as instruções estão ativas (Aula 02, Seção 6).

**Objetivo:** Executar um protocolo de teste para verificar se as instruções do DevFlow estão funcionando.

**Passos de Execução:**

1. Abra o Chat do Copilot no VS Code (Ctrl+Shift+I)
2. Faça 3 perguntas de teste e registre as respostas
3. Analise se as respostas seguem as regras definidas no `copilot-instructions.md`

**Entrega:** crie `entregas-aula-02/q06-teste-instrucoes.md`:

~~~~
# Questão 6 — Teste de Instruções

## Teste 1 — Stack do Projeto
Pergunta feita: "Qual a stack do DevFlow?"

Resposta do Copilot:
[cole a resposta aqui]

Análise: A resposta corresponde às regras que você definiu na seção de stack?
[sim / não / parcialmente — explique]

## Teste 2 — Geração de Código
Pergunta feita: "Crie uma funcao que valida email"

Resposta do Copilot:
[cole o código gerado aqui]

Verificação:
- [ ] Usa aspas simples? (regra de estilo)
- [ ] Usa 2 espaços de indentação?
- [ ] Nome da função em camelCase?
- [ ] JSDoc em português?
- [ ] Ponto e vírgula no final?
- [ ] NÃO usa var? (restrição)

## Teste 3 — Restrição
Pergunta feita: [escolha uma pergunta que teste uma restrição]

Resposta do Copilot:
[cole a resposta aqui]

Análise: A restrição foi respeitada?
[sim / não — explique]

## Conclusão
Com base nos 3 testes, as instruções do DevFlow estão funcionando corretamente?
[sim / parcialmente / não — 2-3 frases explicando]
~~~~

---

## Questão 7: Refatorar e Expandir Instruções

**Conceito-chave:** Iteração e refinamento de instruções (Aula 02, Seções 3-4).

**Objetivo:** Analisar um conjunto de instruções existente, identificar problemas e propor melhorias.

**Passos de Execução:**

1. Leia as instruções abaixo (elas têm problemas)
2. Identifique pelo menos 3 problemas (anti-padrões, regras faltando, contradições)
3. Reescreva as instruções corrigidas

Instruções originais (com problemas):

```markdown
# Meu Projeto — Custom Instructions

## Stack
- JavaScript

## Estilo
- Código limpo
- Boas práticas

## Geral
- Faça o seu melhor
- Não quebre nada
```

**Entrega:** crie `entregas-aula-02/q07-refatorar-instrucoes.md`:

~~~~
# Questão 7 — Refatoração de Instruções

## Problemas Identificados

1. [Problema 1 — qual anti-padrão?]
   Por que é um problema: [1-2 frases]

2. [Problema 2 — qual anti-padrão?]
   Por que é um problema: [1-2 frases]

3. [Problema 3 — qual anti-padrão?]
   Por que é um problema: [1-2 frases]

## Instruções Refatoradas

Crie a versão corrigida do arquivo:

```markdown
# Meu Projeto — Custom Instructions

(escreva a versão corrigida aqui, com pelo menos 4 seções e 3 regras cada)
```

## Por que sua versão é melhor?
[3-5 frases comparando sua versão com a original]
~~~~

---

## Checklist Final: Pronto para a Aula 03?

Marque cada item só quando conseguir fazê-lo **sem consultar a aula**:

- [ ] **Explico** por que instruções permanentes são essenciais (consistência entre sessões, convenções do time)
- [ ] **Diferencio** regras permanentes de prompts sob demanda e sei quando usar cada um
- [ ] **Listo** pelo menos 4 das 6 categorias de regras de memória
- [ ] **Diferencio** os 3 níveis de escopo (usuário, repositório, organização) com exemplos
- [ ] **Crio** um arquivo `.github/copilot-instructions.md` completo a partir do zero
- [ ] **Identifico** anti-padrões em instruções e os corrijo
- [ ] **Crio** templates reutilizáveis em `.github/prompts/` no formato correto
- [ ] **Testo** se as instruções estão ativas usando o Chat do Copilot

> *Acertou todos? Você está pronto para a Aula 03, onde o Copilot vira um agente autônomo que implementa features completas no DevFlow. Travou em algum? Releia a seção indicada na questão correspondente antes de avançar.*

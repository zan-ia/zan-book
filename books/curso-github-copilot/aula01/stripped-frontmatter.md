# Programador Profissional com Agentes Aula 01 — Questões de Aprendizagem

## Como Usar Este Arquivo

Este arquivo é o seu **checkpoint de domínio**. A pergunta central é: "eu realmente entendi a matéria?". Você só avança para a Aula 02 quando conseguir completar estas questões por conta própria, sem reler a aula a cada passo.

Cada questão tem um formato fixo:
- **Conceito-chave**: o que está sendo verificado (com referência à seção da aula)
- **Objetivo**: o que você deve demonstrar
- **Passos de Execução**: como fazer
- **Entrega**: um template para você preencher

Crie uma pasta `entregas-aula-01/` na raiz do projeto DevFlow e salve cada entrega com o nome indicado.

> *Se travar em alguma questão, releia a seção indicada em **Conceito-chave**. Mas tente fazer sozinho primeiro — o erro faz parte do aprendizado.*

---

## Questão 1: Os 4 Pilares do Ambiente Profissional

**Conceito-chave:** Ambiente de desenvolvimento padronizado (Aula 01, Seção 1).

**Objetivo:** Listar e descrever os 4 pilares de um ambiente profissional, explicando como cada um contribui para a reprodutibilidade do ambiente.

**Passos de Execução:**

1. No arquivo de entrega, liste os 4 pilares do ambiente profissional
2. Para cada pilar, escreva uma frase explicando como ele contribui para a reprodutibilidade
3. Inclua um exemplo concreto de cada pilar no contexto do DevFlow

**Entrega:** crie `entregas-aula-01/01-quatro-pilares.md`:

~~~~
# Questão 1 — Os 4 Pilares do Ambiente Profissional

## Tabela dos Pilares

| Pilar | Como contribui para reprodutibilidade | Exemplo no DevFlow |
|---|---|---|
| **Editor configurado** | [sua resposta] | [seu exemplo] |
| **Terminal integrado** | [sua resposta] | [seu exemplo] |
| **Controle de versão** | [sua resposta] | [seu exemplo] |
| **Ferramentas de qualidade** | [sua resposta] | [seu exemplo] |

## Conclusão

Em 2-3 frases, explique por que um ambiente padronizado é importante mesmo para projetos individuais (não apenas em equipe). Como o DevFlow se beneficiaria disso?
~~~~

---

## Questão 2: Assistente de IA vs Autocompletar Tradicional

**Conceito-chave:** Definição de assistente de código com IA (Aula 01, Seção 2).

**Objetivo:** Decidir, para cada situação de codificação, se um autocompletar tradicional resolveria ou se é necessário um assistente de IA, justificando com base no conceito de context awareness.

**Passos de Execução:**

1. Analise cada situação abaixo
2. Decida: "Autocompletar tradicional" ou "Assistente de IA"
3. Justifique sua decisão mencionando context awareness

**Entrega:** crie `entregas-aula-01/02-assistente-vs-tradicional.md`:

~~~~
# Questão 2 — Assistente de IA vs Autocompletar Tradicional

## Tabela de Classificação

| Situação | Resolveria com? | Justificativa |
|---|---|---|
| Completar o nome de uma variável que já foi declarada há 20 linhas | [Autocompletar tradicional / Assistente de IA] | [justificativa] |
| Gerar uma função completa a partir do comentário `// valida email` | [Autocompletar tradicional / Assistente de IA] | [justificativa] |
| Sugerir parâmetros de uma função que você acabou de chamar | [Autocompletar tradicional / Assistente de IA] | [justificativa] |

## Conclusão

Em 2-3 frases, explique por que o context awareness é o diferencial que permite ao assistente de IA fazer coisas que o autocompletar tradicional não consegue.
~~~~

---

## Questão 3: Autocomplete ou Chat?

**Conceito-chave:** Modos de interação com assistente de IA (Aula 01, Seção 3).

**Objetivo:** Classificar 6 cenários de desenvolvimento como "Autocomplete" ou "Chat", justificando cada escolha.

**Passos de Execução:**

1. Analise cada cenário abaixo
2. Classifique como "Autocomplete" ou "Chat"
3. Justifique sua escolha

**Entrega:** crie `entregas-aula-01/03-autocomplete-ou-chat.md`:

~~~~
# Questão 3 — Autocomplete ou Chat?

## Tabela de Classificação

| Cenário | Modo ideal | Justificativa |
|---|---|---|
| Completar um array de 50 itens com estrutura repetitiva | [Autocomplete / Chat] | [justificativa] |
| Entender por que um erro de CORS está acontecendo | [Autocomplete / Chat] | [justificativa] |
| Escrever um laço for para percorrer um array | [Autocomplete / Chat] | [justificativa] |
| Planejar a estrutura de uma API REST completa | [Autocomplete / Chat] | [justificativa] |
| Adicionar validação de campos em um formulário | [Autocomplete / Chat] | [justificativa] |
| Depurar por que uma variável está undefined | [Autocomplete / Chat] | [justificativa] |

## Conclusão

Qual modo você acha que vai usar mais no seu dia a dia? Por que?
~~~~

---

## Questão 4: Escolhendo o Plano Certo

**Conceito-chave:** Planos do Copilot (Aula 01, Seção 5).

**Objetivo:** Recomendar o plano Copilot mais adequado para 4 perfis de uso, justificando com base nos limites e funcionalidades de cada plano.

**Passos de Execução:**

1. Analise cada perfil abaixo
2. Recomende o plano mais adequado (Free, Pro, Pro+ ou Max)
3. Justifique sua recomendação

**Entrega:** crie `entregas-aula-01/04-plano-certo.md`:

~~~~
# Questão 4 — Escolhendo o Plano Certo

## Tabela de Recomendações

| Perfil | Plano recomendado | Justificativa |
|---|---|---|
| Estudante que programa 2-3 horas por dia em projetos pessoais | [Free / Pro / Pro+ / Max] | [justificativa] |
| Desenvolvedor freelancer que programa 8 horas por dia | [Free / Pro / Pro+ / Max] | [justificativa] |
| Tech lead em startup que usa Chat para arquitetura e código | [Free / Pro / Pro+ / Max] | [justificativa] |
| Engenheiro em big tech que quer preview features e Agent Mode avançado | [Free / Pro / Pro+ / Max] | [justificativa] |

## Conclusão

Com base no seu perfil atual, qual plano você escolheria e por que?
~~~~

---

## Questão 5: Autocomplete na Prática

**Conceito-chave:** Inline suggestions e Next Edit Suggestions (Aula 01, Seção 6).

**Objetivo:** Executar 3 cenários de autocomplete em um arquivo novo e documentar o resultado de cada um.

**Passos de Execução:**

1. Crie um arquivo `teste-autocomplete-pratica.js`
2. Para cada cenário, digite o comentário indicado e aceite a sugestão do Copilot
3. Documente o código gerado e se ele funcionou

**Entrega:** crie `entregas-aula-01/05-autocomplete-pratica.md`:

~~~~
# Questão 5 — Autocomplete na Prática

## Cenário 1: Função de calcular média de array

**Comentário usado:**
```
// funcao que calcula a media de um array de numeros
```

**Código gerado pelo Copilot:**
[cole o código aqui]

**Funcionou?** [Sim / Não / Precisou de ajustes]

---

## Cenário 2: Função de filtrar maiores de idade

**Comentário usado:**
```
// funcao que filtra pessoas maiores de idade
```

**Código gerado pelo Copilot:**
[cole o código aqui]

**Funcionou?** [Sim / Não / Precisou de ajustes]

---

## Cenário 3: Array de usuários

**Comentário usado:**
```
// array de usuarios com nome, email e idade
```

**Código gerado pelo Copilot:**
[cole o código aqui]

**Funcionou?** [Sim / Não / Precisou de ajustes]

---

## Conclusão

Em 2-3 frases, descreva sua experiência: o Copilot entendeu o que você queria? As sugestões foram precisas? Você usou Ctrl+Enter para ver alternativas?
~~~~

---

## Questão 6: DevFlow — Repositório e Health Check

**Conceito-chave:** Setup inicial do DevFlow, Chat do Copilot, primeiro commit (Aula 01, Seções 7 e 8).

**Objetivo:** Criar o repositório DevFlow completo, com servidor Express funcional, endpoint GET /health e primeiro commit com mensagem gerada pelo Copilot.

**Passos de Execução:**

1. Crie o repositório `devflow` no GitHub (público ou privado)
2. Clone localmente e execute `npm init -y` e `npm install express`
3. Use o Chat do Copilot para gerar o `index.js` com GET /health
4. Crie `.gitignore` com `node_modules/`
5. Teste o servidor (node index.js) e verifique o endpoint
6. Faça commit com mensagem gerada pelo Copilot
7. Faça push para o GitHub

**Entrega:** crie `entregas-aula-01/06-devflow-health-check.md`:

~~~~
# Questão 6 — DevFlow: Repositório e Health Check

## Verificação do Projeto

| Item | Feito? | Observação |
|---|---|---|
| Repositório criado no GitHub | [Sim / Não] | Link: [cole o link] |
| `npm init -y` executado | [Sim / Não] | |
| `npm install express` executado | [Sim / Não] | |
| `index.js` com GET /health funcional | [Sim / Não] | |
| `.gitignore` com `node_modules/` | [Sim / Não] | |
| Servidor rodando retorna JSON em /health | [Sim / Não] | |
| Commit realizado com mensagem (gerada pelo Copilot ou manual) | [Sim / Não] | Mensagem: [cole a mensagem] |
| Push para o GitHub | [Sim / Não] | |

## Código do index.js

[cole o código completo do index.js aqui]

## Reflexão

O que você aprendeu sobre o Copilot que não esperava antes desta aula? O que foi mais surpreendente: o autocomplete, o Chat ou a integração de tudo no projeto DevFlow? (3-5 frases)
~~~~

---

## Checklist Final: Pronto para a Aula 02?

Marque cada item só quando conseguir fazê-lo **sem consultar a aula**:

- [ ] Explico por que um ambiente padronizado é importante e cito os 4 pilares
- [ ] Diferencio um assistente de IA de um autocompletar tradicional
- [ ] Explico o conceito de context awareness com minhas próprias palavras
- [ ] Sei quando usar autocomplete e quando usar o Chat
- [ ] Instalei e autentiquei o GitHub Copilot no VS Code
- [ ] Sei as diferenças entre os planos Free, Pro, Pro+ e Max
- [ ] Executei autocomplete com inline suggestions em 3 cenários
- [ ] Usei o Chat para gerar código e apliquei no projeto
- [ ] Criei o repositório DevFlow com GET /health funcional
- [ ] Fiz o primeiro commit com o Copilot como assistente

> *Acertou todos? Você está pronto para a Aula 02, onde vai ensinar suas convenções de código para o Copilot com regras permanentes. Travou em algum? Releia a seção indicada na questão correspondente antes de avançar.*

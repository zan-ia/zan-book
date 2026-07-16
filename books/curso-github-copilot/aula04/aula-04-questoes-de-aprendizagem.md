---
titulo: "Programador Profissional com Agentes — Aula 04 — Questões de Aprendizagem"
modulo: "01"
aula: "04"
---

# Programador Profissional com Agentes Aula 04 — Questões de Aprendizagem

## Como Usar Este Arquivo

Este arquivo é o seu **checkpoint de aprendizagem**. A pergunta central é: *"eu realmente entendi a matéria?"*

Cada questão verifica um conceito-chave da Aula 04. Leia o **Conceito-chave** (que indica qual seção da aula revisitar se travar), o **Objetivo** (o que você deve demonstrar), os **Passos de Execução** (o que fazer) e a **Entrega** (template para preencher e salvar).

Crie uma pasta `entregas-aula-04/` na raiz do DevFlow e salve cada entrega como `Q1.md`, `Q2.md`, etc. Complete todas as 8 questões antes de avançar para a Aula 05.

> *Importante: não consulte a aula enquanto faz as questões. Se travar, anote onde travou, releia a seção indicada e tente novamente. O objetivo é provar para si mesmo que domina o conteúdo.*

---

## Questão 1: Diagnóstico de Contexto Inflado

**Conceito-chave:** Sintomas de sessão longa degradada e quando interromper (Aula 04, Seção 1).

**Objetivo:** Identificar 3 sinais de degradação por contexto inflado em um cenário descrito e propor a ação corretiva.

**Passos de Execução:**

1. Leia o cenário abaixo.
2. Identifique 3 sintomas de contexto inflado presentes.
3. Explique por que cada sintoma ocorre.
4. Proponha a ação corretiva específica.

**Cenário:**

> Um desenvolvedor está na 85ª mensagem de uma sessão de chat. Ele começou implementando um CRUD de usuários, depois pediu para corrigir um bug de autenticação, depois perguntou sobre sintaxe de async/await, depois pediu para refatorar o controller de usuários. Agora ele pede: "Adicione um campo email ao model de usuários." O assistente demora 15 segundos para responder e sugere adicionar o campo `email` mas também sugere renomear `name` para `nomeCompleto` — algo que não foi pedido. A resposta usa `var` em vez de `const`, o que viola as instruções dadas no início da sessão.

**Entrega:** crie `entregas-aula-04/Q1.md`:

~~~~
# Questão 1 — Diagnóstico de Contexto Inflado

## Cenário Analisado
[Sintoma 1: descreva o que você observou]

[Sintoma 2: descreva o que você observou]

[Sintoma 3: descreva o que você observou]

## Por que cada sintoma ocorre
[Sintoma 1 ocorre porque...]

[Sintoma 2 ocorre porque...]

[Sintoma 3 ocorre porque...]

## Ação corretiva
[A ação que o desenvolvedor deveria tomar neste momento]

## Resposta reflexiva
Em 2-3 frases: se você fosse o desenvolvedor, o que faria diferente para evitar chegar a 85 mensagens na mesma sessão?
~~~~

> *Dica: releia a Seção 1 se não lembrar dos 3 sintomas principais do contexto inflado.*

---

## Questão 2: Sessões como Unidade de Trabalho

**Conceito-chave:** Definir escopo atômico de uma sessão (Aula 04, Seção 2).

**Objetivo:** Dados 3 cenários de trabalho, decidir quantas sessões seriam necessárias e justificar a divisão.

**Passos de Execução:**

1. Analise cada cenário abaixo.
2. Determine se deve ser 1 sessão ou múltiplas sessões.
3. Justifique sua decisão com base no conceito de sessão atômica.

**Cenário A:** Um desenvolvedor precisa implementar um novo endpoint GET /api/projects/stats que retorna estatísticas dos projetos. A implementação envolve criar uma nova função no controller e adicionar uma rota.

**Cenário B:** Um desenvolvedor precisa: (1) corrigir um bug no endpoint DELETE de projetos, (2) adicionar um campo `deadline` ao model de tarefas, e (3) pesquisar sobre deploy em produção.

**Cenário C:** Um desenvolvedor inicia a implementação de uma feature de comentários, mas no meio descobre que precisa primeiro refatorar o model de tarefas para suportar comentários.

**Entrega:** crie `entregas-aula-04/Q2.md`:

~~~~
# Questão 2 — Sessões como Unidade de Trabalho

## Cenário A
**Número de sessões:** [1 ou múltiplas?]

**Justificativa:** [Por que esta divisão faz sentido segundo o princípio de sessão atômica?]

## Cenário B
**Número de sessões:** [1 ou múltiplas?]

**Justificativa:** [Por que esta divisão faz sentido?]

## Cenário C
**Número de sessões:** [1 ou múltiplas?]

**Justificativa:** [Como lidar com a descoberta durante a implementação?]

## Reflexão final
Qual padrão você observa entre os cenários que deveriam ser múltiplas sessões?
~~~~

---

## Questão 3: Escrevendo um ADR

**Conceito-chave:** Formato Nygard — Título, Status, Contexto, Decisão, Consequências (Aula 04, Seção 3).

**Objetivo:** Criar um ADR completo no formato Nygard para uma decisão hipotética do DevFlow.

**Passos de Execução:**

1. Leia a decisão hipotética abaixo.
2. Crie um ADR completo com os 5 campos do formato Nygard.
3. Certifique-se de que o Contexto explica o "por que", a Decisão explica o "o quê" e as Consequências listam trade-offs.

**Decisão Hipotética:** O DevFlow precisa escolher entre continuar com validação manual nos controllers OU adotar uma biblioteca de validação (express-validator). A decisão foi: continuar com validação manual porque o projeto ainda é pequeno, as validações são simples e não justificam mais uma dependência. Mas o ADR documenta que esta decisão deve ser revisitada quando o número de campos validados por controller ultrapassar 10.

**Entrega:** crie `entregas-aula-04/Q3.md`:

~~~~
# Questão 3 — ADR para Decisão de Validação

Crie o ADR abaixo seguindo o formato Nygard visto na Seção 3.

## ADR-XXX: [Título no gerúndio]

### Status
[Aceito ou Proposto?]

### Contexto
[Por que esta decisão é necessária? Qual o problema? Quais alternativas foram consideradas?]

### Decisão
[O que foi decidido? Em detalhes.]

### Consequências
[Liste pelo menos 2 positivas e 2 negativas ou trade-offs.]

### Nota sobre revisão futura
[Quando esta decisão deve ser revisitada?]
~~~~

> *Dica: revise a Seção 3 e o template Nygard antes de começar. Um bom ADR tem contexto rico — explique não apenas o que foi decidido, mas por que as alternativas foram descartadas.*

---

## Questão 4: O Protocolo de Ralph Wigguns

**Conceito-chave:** As 4 etapas do protocolo e o que acontece se cada uma for omitida (Aula 04, Seção 4).

**Objetivo:** Descrever cada etapa do protocolo e diagnosticar um cenário onde uma etapa foi pulada.

**Passos de Execução:**

1. Liste as 4 etapas do protocolo de Ralph Wigguns.
2. Para cada etapa, explique o propósito e o que acontece se for omitida.
3. Analise o cenário abaixo e identifique qual etapa foi pulada.

**Cenário:** Um desenvolvedor terminou a feature de autenticação. Ele anotou mentalmente as decisões (vai documentar depois), fechou a sessão, e abriu uma nova sessão para implementar a feature de perfis de usuário. No novo agente, ele passou o prompt da feature de perfis mas não mencionou as decisões da feature anterior. O agente implementou perfis usando um padrão de rotas diferente do que foi usado em autenticação.

**Entrega:** crie `entregas-aula-04/Q4.md`:

~~~~
# Questão 4 — Protocolo de Ralph Wigguns

## As 4 Etapas

1. **[Nome da etapa]**
   Propósito: [explicação]
   O que acontece se for omitida: [consequência]

2. **[Nome da etapa]**
   Propósito: [explicação]
   O que acontece se for omitida: [consequência]

3. **[Nome da etapa]**
   Propósito: [explicação]
   O que acontece se for omitida: [consequência]

4. **[Nome da etapa]**
   Propósito: [explicação]
   O que acontece se for omitida: [consequência]

## Diagnóstico do Cenário

**Etapa omitida:** [Qual etapa foi pulada no cenário?]

**Explicação:** [Por que a ausência desta etapa causou o problema descrito?]

**Como corrigir:** [O que o desenvolvedor deveria fazer agora para remediar a situação?]
~~~~

---

## Questão 5: Criando ADRs no DevFlow (Projeto)

**Conceito-chave:** Criação de ADRs reais versionados no diretório `docs/adr/` (Aula 04, Seção 5).

**Objetivo:** Criar ADR-001 e ADR-002 no repositório DevFlow documentando decisões de stack e armazenamento.

**Passos de Execução:**

1. Crie o diretório `docs/adr/` na raiz do DevFlow.
2. Crie `docs/adr/ADR-001-escolha-de-stack.md` documentando a decisão de usar Node.js com Express.
3. Crie `docs/adr/ADR-002-armazenamento-em-memoria.md` documentando a decisão de usar arrays em memória.
4. Commit os dois ADRs com uma mensagem seguindo o padrão do projeto.

**Entrega:** crie `entregas-aula-04/Q5.md`:

~~~~
# Questão 5 — ADRs no DevFlow

## Verificação

- [ ] Diretório `docs/adr/` existe na raiz do DevFlow
- [ ] `docs/adr/ADR-001-escolha-de-stack.md` existe e tem conteúdo completo
- [ ] `docs/adr/ADR-002-armazenamento-em-memoria.md` existe e tem conteúdo completo

## Estrutura de Diretórios
```
[Cole aqui a saída de: ls -la docs/adr/]
```

## Commit
**Mensagem do commit:** [A mensagem que você usou]

**Hash do commit:** [Cole o hash: git log --oneline -1]

## Pergunta de Reflexão
Os ADRs que você criado documentam decisões que já foram tomadas nas aulas anteriores. Que outras decisões do DevFlow você acha que mereceriam ADRs? Liste pelo menos 2.
~~~~

---

## Questão 6: Documentando o Estado Atual do Projeto

**Conceito-chave:** Auditoria do que foi decidido na feature de Projetos (Aula 04, Seções 5-6).

**Objetivo:** Mapear decisões implícitas do código de Projetos da Aula 03 para ADRs explícitos, identificando o que já está documentado e o que falta documentar.

**Passos de Execução:**

1. Abra o código de Projetos do DevFlow (models, routes, controllers).
2. Analise cada arquivo e identifique decisões implícitas que NÃO estão documentadas nos ADRs-001 e ADR-002.
3. Liste pelo menos 3 decisões implícitas que merecem documentação.
4. Para cada uma, indique se merece um novo ADR ou apenas uma nota em ADR existente.

**Entrega:** crie `entregas-aula-04/Q6.md`:

~~~~
# Questão 6 — Auditoria de Decisões do DevFlow

## Decisões Implícitas Identificadas

### Decisão 1: [Título]
**Onde aparece no código:** [arquivo, linha, trecho relevante]

**Merece ADR novo ou nota em ADR existente?** [Justifique]

### Decisão 2: [Título]
**Onde aparece no código:** [arquivo, linha, trecho relevante]

**Merece ADR novo ou nota em ADR existente?** [Justifique]

### Decisão 3: [Título]
**Onde aparece no código:** [arquivo, linha, trecho relevante]

**Merece ADR novo ou nota em ADR existente?** [Justifique]

## Análise
Qual padrão você observa nas decisões que estão implícitas no código mas não documentadas em ADRs? Isso é um problema? Por que?
~~~~

---

## Questão 7: Handoff Completo — Projetos para Tarefas

**Conceito-chave:** Execução do protocolo completo com novo agente e contexto limpo (Aula 04, Seção 6).

**Objetivo:** Executar o handoff completo da feature de Projetos para a feature de Tarefas usando ADRs como contexto do novo agente.

**Passos de Execução:**

1. Certifique-se de que ADR-001 e ADR-002 existem em `docs/adr/`.
2. Feche a sessão atual do Copilot Chat.
3. Abra uma nova sessão em Agent Mode (Default Approvals).
4. Execute o prompt de handoff que referencia os ADRs e pede implementação do CRUD de Tarefas.
5. Observe as tool calls iniciais — confirme que o agente leu os ADRs primeiro.
6. Teste todos os 5 endpoints de Tarefas.
7. Verifique a consistência entre Tarefas e Projetos (formato de resposta, estrutura, validações).
8. Commit o código.

**Entrega:** crie `entregas-aula-04/Q7.md`:

~~~~
# Questão 7 — Handoff Projetos para Tarefas

## Verificação de Pré-requisitos
- [ ] ADR-001 e ADR-002 existem em `docs/adr/`
- [ ] Sessão anterior foi fechada
- [ ] Nova sessão foi iniciada em Agent Mode

## Tool Calls do Novo Agente
Liste as primeiras 5 tool calls que o agente executou:

1. [Tool call 1]
2. [Tool call 2]
3. [Tool call 3]
4. [Tool call 4]
5. [Tool call 5]

**O agente leu os ADRs antes de escrever código?** [Sim/Não — evidência]

## Testes de Endpoints
- [ ] POST /api/tasks (criar) — retorna 201 com task criada?
- [ ] GET /api/tasks (listar) — retorna 200 com array?
- [ ] GET /api/tasks?projectId=N (filtrar) — retorna apenas tasks do projeto?
- [ ] GET /api/tasks/:id (buscar) — retorna 200 se existe, 404 se não?
- [ ] PUT /api/tasks/:id (atualizar) — retorna 200 com task atualizada?
- [ ] DELETE /api/tasks/:id (deletar) — retorna 200 e remove?
- [ ] Validação: POST sem title retorna 400?
- [ ] Validação: POST sem projectId retorna 400?

## Consistência com Projetos (Responda Sim/Não para cada)
- [ ] Tasks usa a mesma estrutura de resposta JSON que Projetos?
- [ ] Tasks usa a mesma organização de diretórios (models, routes, controllers)?
- [ ] Tasks usa o mesmo padrão de validação (manual, if/else)?
- [ ] Tasks usa o mesmo tratamento de erros (try/catch)?

## Commit
**Mensagem:** [Mensagem do commit]

## Reflexão
Em 3-5 frases: como foi a experiência de ver o agente ler os ADRs antes de implementar? O que você observou de diferente comparado a uma sessão sem ADRs?
~~~~

---

## Questão 8: Artefatos como Ponte — Integração do DevFlow

**Conceito-chave:** Verificação de consistência entre ADRs, instructions e código (Aula 04, Seção 7).

**Objetivo:** Realizar uma auditoria completa dos artefatos do DevFlow e verificar se o projeto está pronto para a Aula 05.

**Passos de Execução:**

1. Liste todos os artefatos do DevFlow (instructions, ADRs, código de Projetos e Tarefas).
2. Verifique cada par de artefatos em busca de inconsistências.
3. Preencha o checklist de prontidão.
4. Identifique pelo menos 1 melhoria que poderia ser feita nos ADRs.

**Entrega:** crie `entregas-aula-04/Q8.md`:

~~~~
# Questão 8 — Auditoria de Integração do DevFlow

## Artefatos do Projeto

| Artefato | Localização | Propósito |
|---|---|---|
| Instructions | `.github/copilot-instructions.md` | Regras de stack, estilo, commits |
| ADR-001 | `docs/adr/ADR-001-escolha-de-stack.md` | Decisão de stack |
| ADR-002 | `docs/adr/ADR-002-armazenamento-em-memoria.md` | Decisão de armazenamento |
| Código Projetos | `models/project.js`, `routes/projects.js`, `controllers/projectController.js` | Feature de Projetos |
| Código Tarefas | `models/task.js`, `routes/tasks.js`, `controllers/taskController.js` | Feature de Tarefas |

## Verificação de Consistência

Verifique cada par:

- [ ] **Instructions → Código Projetos**: o código segue as regras de stack, estilo e restrições?
- [ ] **Instructions → Código Tarefas**: o código segue as mesmas regras?
- [ ] **ADR-001 → Código Projetos**: a stack definida no ADR corresponde ao código?
- [ ] **ADR-001 → Código Tarefas**: Tarefas usa a mesma stack de Projetos?
- [ ] **ADR-002 → Código Projetos**: o armazenamento em memória está implementado como descrito?
- [ ] **ADR-002 → Código Tarefas**: Tarefas usa array separado conforme definido?
- [ ] **Projetos → Tarefas**: os padrões de código são consistentes entre as duas features?

## Melhoria Identificada
[Descreva pelo menos 1 melhoria ou complemento que os ADRs poderiam ter. Ex: "O ADR-001 poderia documentar também a decisão sobre o formato de resposta JSON, que atualmente está implícita no código."]

## Prontidão para a Aula 05
O DevFlow está com artefatos consistentes e prontos para a refatoração da Aula 05? [Sim/Parcialmente/Não — justifique em 2-3 frases]
~~~~

---

## Checklist Final: Pronto para a Aula 05?

Marque cada item só quando conseguir fazê-lo **sem consultar a aula**:

- [ ] **Explicar o problema do contexto inflado** — consigo descrever os 3 sintomas e por que sessões longas degradam a qualidade
- [ ] **Definir sessão como unidade atômica** — consigo justificar por que uma feature = uma sessão e identificar quando dividir
- [ ] **Descrever o formato ADR (Nygard)** — consigo listar os 5 campos e explicar o propósito de cada um
- [ ] **Identificar decisões que merecem ADR** — consigo distinguir entre uma decisão de arquitetura e um detalhe de implementação
- [ ] **Explicar o protocolo de Ralph Wigguns** — consigo descrever as 4 etapas e o que acontece se cada uma for omitida
- [ ] **Distinguir contexto de sessão vs contexto de artefato** — consigo explicar por que artefatos versionados são mais confiáveis que histórico de conversa
- [ ] **Criar ADRs no DevFlow** — criei ADR-001 e ADR-002 no diretório `docs/adr/` e fiz commit
- [ ] **Executar handoff completo** — executei o handoff Projetos para Tarefas com novo agente e contexto limpo
- [ ] **Iniciar novo agente com artefatos** — iniciei uma nova sessão fornecendo apenas ADRs e instructions como contexto
- [ ] **Aplicar o protocolo ao DevFlow** — meu projeto está com artefatos auditáveis conectando as features de Projetos e Tarefas

> *Acertou todos? Você está pronto para a Aula 05, onde vamos refatorar o código do DevFlow com princípios de clean code — eliminando duplicação entre Projetos e Tarefas, extraindo services e aplicando nomes que revelam intenção. Travou em algum item? Releia a seção indicada na questão correspondente antes de avançar.*

---
titulo: "Programador Profissional com Agentes — Aula 05 — Questões de Aprendizagem"
modulo: "01"
aula: "05"
---

# Programador Profissional com Agentes Aula 05 — Questões de Aprendizagem

## Como Usar Este Arquivo

Este arquivo é o seu **checkpoint de aprendizagem**. A pergunta central é: *"eu realmente entendi a matéria?"*

Cada questão testa um conceito-chave da Aula 05. Você deve fazer as questões na ordem, sem consultar a aula principal — se travar, volta na seção indicada e tenta de novo.

**Instruções:**
1. Crie a pasta `entregas-aula-05/` na raiz do seu projeto DevFlow
2. Para cada questão, crie o arquivo de entrega indicado no template
3. Preencha o template com suas respostas e reflexões
4. Ao final, marque o Checklist Final

Só avance para a Aula 06 quando conseguir completar todas as questões por conta própria.

---

## Questão 1: Identificando Code Smells

**Conceito-chave:** Classificação de code smells nas quatro famílias. (Aula 05, Seção 2)

**Objetivo:** Demonstrar que você reconhece os sintomas de cada família de smell em trechos de código hipotéticos.

**Passos de Execução:**

1. Analise os três trechos de código abaixo
2. Para cada trecho, identifique: (a) o(s) smell(s) presente(s), (b) a família a que pertence(m), (c) justifique em uma frase
3. Proponha uma correção para um dos trechos (à sua escolha)

Trecho A:
```
funcao salvar(dados) {
    // Validar
    se dados.nome vazio: retornar erro
    // Salvar
    conectarBanco()
    sql = "INSERT INTO usuarios (nome) VALUES ('" + dados.nome + "')"
    executar(sql)
}
```

Trecho B:
```
funcao calcularTotal(itens) {
    return itens.reduce((acc, item) => acc + item.preco, 0)
}
funcao calcularTotalComDesconto(itens, desconto) {
    return itens.reduce((acc, item) => acc + item.preco, 0) * desconto
}
funcao calcularTotalComFrete(itens, frete) {
    return itens.reduce((acc, item) => acc + item.preco, 0) + frete
}
```

Trecho C:
```
funcao processar(entidade) {
    se entidade.tipo == "A": executarA(entidade)
    senao se entidade.tipo == "B": executarB(entidade)
    senao se entidade.tipo == "C": executarC(entidade)
    senao se entidade.tipo == "D": executarD(entidade)
}
```

**Entrega:** crie `entregas-aula-05/05-q1-code-smells.md`:

~~~~
# Questão 1 — Identificando Code Smells

## Trecho A

**Smells identificados:**
1. [Smell] — Família: [Família] — Justificativa: [Frase]

## Trecho B

**Smells identificados:**
1. [Smell] — Família: [Família] — Justificativa: [Frase]

## Trecho C

**Smells identificados:**
1. [Smell] — Família: [Família] — Justificativa: [Frase]

## Correção escolhida (trecho [A/B/C])

[Código corrigido ou descrição da correção]

## Reflexão

O que este exercício te ensinou sobre como identificar code smells no seu próprio código?
~~~~

---

## Questão 2: Aplicando os Quatro Pilares

**Conceito-chave:** Identificação de violações de SLAP, DRY, KISS, YAGNI. (Aula 05, Seção 3)

**Objetivo:** Demonstrar que você consegue mapear trechos de código para os princípios que eles violam e sugerir correções.

**Passos de Execução:**

1. Analise o trecho abaixo e identifique qual(is) pilar(es) está(ão) sendo violado(s)
2. Reescreva o trecho aplicando as correções dos pilares violados

```
funcao criarUsuario(dados) {
    // Conectar ao banco
    const conexao = conectar("localhost", 5432, "admin", "123456")
    
    // Validar dados
    const erros = []
    if (!dados.nome || dados.nome.trim() === "") erros.push("Nome obrigatorio")
    if (!dados.email || !dados.email.includes("@")) erros.push("Email invalido")
    if (!dados.senha || dados.senha.length < 6) erros.push("Senha deve ter 6+ caracteres")
    if (erros.length > 0) return { erro: erros[0] }
    
    // Verificar duplicidade
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].email === dados.email) {
            return { erro: "Email ja existe" }
        }
    }
    
    // Construir SQL manualmente
    const sql = "INSERT INTO usuarios (nome, email, senha, tipo) VALUES ('" 
        + dados.nome + "', '" 
        + dados.email + "', '" 
        + dados.senha + "', '" 
        + (dados.tipo || "comum") + "')"
    
    // Executar SQL
    const resultado = conexao.executar(sql)
    
    // Montar resposta
    return { 
        sucesso: true, 
        usuario: { 
            id: resultado.id,
            nome_completo: dados.nome,
            endereco_eletronico: dados.email
        }
    }
}
```

**Entrega:** crie `entregas-aula-05/05-q2-quatro-pilares.md`:

~~~~
# Questão 2 — Aplicando os Quatro Pilares

## Pilares violados

- [Pilar] — Justificativa: [Frase]
- [Pilar] — Justificativa: [Frase]

## Código refatorado

```javascript
// Escreva aqui o código corrigido aplicando os pilares
```

## Reflexão

Qual pilar você considera mais fácil de aplicar? E o mais difícil? Por que?
~~~~

---

## Questão 3: Diagnóstico dos Controllers do DevFlow

**Conceito-chave:** Mapeamento de code smells nos controllers reais do DevFlow. (Aula 05, Seção 4)

**Objetivo:** Demonstrar que você consegue aplicar o checklist de diagnóstico ao seu próprio código.

**Passos de Execução:**

1. Abra `controllers/projectController.js` e `controllers/taskController.js` no seu DevFlow
2. Para cada controller, preencha a tabela de diagnóstico
3. Identifique os 3 smells mais críticos no geral

**Entrega:** crie `entregas-aula-05/05-q3-diagnostico-devflow.md`:

~~~~
# Questão 3 — Diagnóstico dos Controllers do DevFlow

## Diagnóstico: projectController.js

| Smell | Presente? (Sim/Não) | Onde? (linha/função) |
|---|---|---|
| Long Method (função > 20 linhas) | | |
| Nomes pouco reveladores (1-2 chars) | | |
| Comments como muleta | | |
| Duplicate Code interno | | |

## Diagnóstico: taskController.js

| Smell | Presente? (Sim/Não) | Onde? (linha/função) |
|---|---|---|
| Long Method (função > 20 linhas) | | |
| Nomes pouco reveladores (1-2 chars) | | |
| Comments como muleta | | |
| Duplicate Code interno | | |

## Duplicação entre controllers

| Bloco duplicado | projectController.js (linha) | taskController.js (linha) |
|---|---|---|
| Validação de campos obrigatórios | | |
| Busca por ID | | |
| Formato de resposta | | |

## Os 3 smells mais críticos

1. [Smell] — [Justificativa]
2. [Smell] — [Justificativa]
3. [Smell] — [Justificativa]

## Reflexão

O diagnóstico confirmou suas expectativas? Algum smell te surpreendeu?
~~~~

---

## Questão 4: Extraindo o Service de Projetos

**Conceito-chave:** Aplicação de SLAP ao `projectController.js` com Agent Mode. (Aula 05, Seção 5.1)

**Objetivo:** Demonstrar que você consegue extrair a lógica de negócio de um controller usando Agent Mode.

**Passos de Execução:**

1. Execute a extração do `services/projectService.js` seguindo o Mão na Massa 1
2. Documente o processo no template de entrega
3. Inclua o conteúdo do controller ANTES e DEPOIS (ou uma amostra representativa)

**Entrega:** crie `entregas-aula-05/05-q4-extracao-service.md`:

~~~~
# Questão 4 — Extraindo o Service de Projetos

## Antes da extração

**Linhas em projectController.js:** [N]

**Estrutura do controller ANTES:** (descreva: quantas funções, o que cada uma fazia, onde estava a validação)

```
[Cole aqui um trecho representativo do controller ANTES]
```

## Depois da extração

**Linhas em projectController.js:** [N]

**Linhas em services/projectService.js:** [N]

**Estrutura do controller DEPOIS:** (descreva: quantas funções, o que cada uma faz agora)

```
[Cole aqui um trecho representativo do controller DEPOIS]
```

## O prompt que você usou

```
[Cole aqui o prompt exato que você passou para o Agent Mode]
```

## Reflexão

O resultado foi exatamente o que você esperava? O que o Agent Mode fez diferente do que você faria manualmente?
~~~~

---

## Questão 5: Eliminando Duplicação entre Features

**Conceito-chave:** Aplicação de DRY entre Projetos e Tarefas. (Aula 05, Seção 5.2)

**Objetivo:** Demonstrar que você elimina duplicação entre dois services usando `/fix`.

**Passos de Execução:**

1. Extraia as funções compartilhadas para `services/helpers.js`
2. Atualize `projectService.js` e `taskService.js` para usar os helpers
3. Documente o processo

**Entrega:** crie `entregas-aula-05/05-q5-eliminando-duplicacao.md`:

~~~~
# Questão 5 — Eliminando Duplicação entre Features

## Funções extraídas para helpers.js

| Função | Propósito | Usada por |
|---|---|---|
| [nome] | [descrição] | projectService, taskService |
| [nome] | [descrição] | projectService, taskService |

## Código de helpers.js

```javascript
[Cole aqui o conteúdo de services/helpers.js]
```

## Antes vs Depois

| Métrica | Antes | Depois | Redução |
|---|---|---|---|
| Linhas duplicadas (validação) | | | |
| Linhas duplicadas (busca por ID) | | | |
| Total de linhas (controllers + services) | | | |

## Reflexão

Como a eliminação de duplicação afeta a manutenção futura do DevFlow?
~~~~

---

## Questão 6: Renomeando com Intenção

**Conceito-chave:** Nomes que revelam intenção nos controllers e services. (Aula 05, Seção 5.3)

**Objetivo:** Demonstrar que você identifica nomes genéricos e os substitui por nomes descritivos.

**Passos de Execução:**

1. Revise os controllers e services do DevFlow
2. Identifique nomes de variáveis, funções e parâmetros que não comunicam intenção
3. Use o comando `/fix` do Copilot para renomear (ou renomeie manualmente)
4. Documente as mudanças

**Entrega:** crie `entregas-aula-05/05-q6-renomeando.md`:

~~~~
# Questão 6 — Renomeando com Intenção

## Variáveis renomeadas

| Arquivo | Nome antigo | Nome novo | Por que o novo nome é melhor |
|---|---|---|---|
| projectService.js | p | project | Comunica que é um objeto do tipo Project |
| | | | |
| | | | |

## Funções renomeadas

| Arquivo | Nome antigo | Nome novo | Por que o novo nome é melhor |
|---|---|---|---|
| | | | |

## Parâmetros renomeados

| Arquivo | Parâmetro antigo | Parâmetro novo | Por que o novo nome é melhor |
|---|---|---|---|

## Verificação

- [ ] Zero variáveis com 1-2 caracteres nos controllers
- [ ] Zero variáveis com 1-2 caracteres nos services
- [ ] Zero variáveis com 1-2 caracteres em helpers.js

## Reflexão

Qual nome genérico você considera mais prejudicial para a legibilidade do código? Por quê?
~~~~

---

## Questão 7: Métricas Antes e Depois

**Conceito-chave:** Comparação objetiva do impacto da refatoração. (Aula 05, Seção 6)

**Objetivo:** Demonstrar que você consegue medir o impacto da refatoração com métricas concretas.

**Passos de Execução:**

1. Execute o comando `wc -l` em cada arquivo refatorado
2. Preencha a tabela de métricas
3. Execute os 10 endpoints do DevFlow e confirme que todos funcionam
4. Faça o commit da refatoração

**Entrega:** crie `entregas-aula-05/05-q7-metricas.md`:

~~~~
# Questão 7 — Métricas Antes e Depois

## Tabela de métricas

| Arquivo | Antes (linhas) | Depois (linhas) | Redução (%) |
|---|---|---|---|
| controllers/projectController.js | | | |
| controllers/taskController.js | | | |
| services/projectService.js | (não existia) | | (novo) |
| services/taskService.js | (não existia) | | (novo) |
| services/helpers.js | (não existia) | | (novo) |
| **Total** | | | |

## Duplicação eliminada

| Bloco duplicado | Antes (ocorrências) | Depois (ocorrências) | Redução |
|---|---|---|---|
| Validação de campos | 2 (controllers) | 1 (helpers) | 50% |
| Busca por ID | | | |

## Validação dos endpoints

- [ ] POST /api/projects — 201
- [ ] GET /api/projects — 200
- [ ] GET /api/projects/:id — 200
- [ ] PUT /api/projects/:id — 200
- [ ] DELETE /api/projects/:id — 200
- [ ] POST /api/tasks — 201
- [ ] GET /api/tasks — 200
- [ ] GET /api/tasks/:id — 200
- [ ] PUT /api/tasks/:id — 200
- [ ] DELETE /api/tasks/:id — 200

## Commit

**Mensagem do commit:** `[cole a mensagem]`

## Reflexão

Qual métrica te surpreendeu mais? O que você esperava que fosse diferente?
~~~~

---

## Questão 8: Síntese — O Que Mudou no DevFlow?

**Conceito-chave:** Reflexão sobre o valor da refatoração no contexto do projeto. (Aula 05, Todas as seções)

**Objetivo:** Sintetizar o aprendizado da aula em uma análise crítica do antes e depois do DevFlow.

**Passos de Execução:**

1. Revise o estado ANTES: os controllers monolíticos com 150+ linhas, duplicação entre features, nomes genéricos
2. Revise o estado DEPOIS: controllers enxutos, services separados, helpers compartilhados, nomes descritivos
3. Responda às perguntas de reflexão no template

**Entrega:** crie `entregas-aula-05/05-q8-sintese.md`:

~~~~
# Questão 8 — Síntese: O Que Mudou no DevFlow?

## Antes da refatoração

Em 3-5 frases, descreva como era o código do DevFlow antes da refatoração. O que você sentia ao abrir os controllers? O que te incomodava?

## Depois da refatoração

Em 3-5 frases, descreva como está o código agora. O que mudou na sua confiança ao mexer no código?

## Os 3 maiores ganhos

1. [Ganho] — [Por que é importante]
2. [Ganho] — [Por que é importante]
3. [Ganho] — [Por que é importante]

## O que você faria diferente

Se você fosse refatorar o DevFlow novamente, o que faria diferente? O que aprendEU com o processo?

## Conexão com a próxima aula

Como a refatoração que você fez hoje (separação controller/service) prepara o terreno para a Aula 06 (TDD)?
~~~~

---

## Checklist Final: Pronto para a Aula 06?

Marque cada item só quando conseguir fazê-lo **sem consultar a aula**:

- [ ] Eu consigo **identificar** um Long Method e explicar por que ele é um problema
- [ ] Eu consigo **explicar** a diferença entre SLAP e DRY com exemplos
- [ ] Eu consigo **classificar** um code smell na sua família correta (Bloaters, Abusers, Dispensables, Change Preventers)
- [ ] Eu consigo **diagnosticar** os smells nos controllers do meu projeto DevFlow
- [ ] Eu consigo **extrair** um service de um controller usando Agent Mode
- [ ] Eu consigo **eliminar** duplicação entre dois services usando `/fix`
- [ ] Eu consigo **renomear** variáveis genéricas para nomes que revelam intenção
- [ ] Eu consigo **comparar** o estado antes e depois da refatoração usando métricas
- [ ] Eu consigo **validar** que a refatoração não quebrou o comportamento testando todos os endpoints
- [ ] Eu completei as 8 questões de aprendizagem na pasta `entregas-aula-05/`

> *Acertou todos? Parabéns! Você está pronto para a Aula 06, onde vai aplicar TDD com Jest e supertest para testar o código refatorado do DevFlow. Travou em algum? Releia a seção indicada na questão correspondente antes de avançar.*

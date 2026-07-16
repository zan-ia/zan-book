# Programador Profissional com Agentes Aula 03 — Questões de Aprendizagem

## Como Usar Este Arquivo

Este arquivo é o seu **checkpoint de domínio**. A pergunta central é: "eu realmente entendi a matéria?". Cada questão testa um conceito-chave da Aula 03 — se você consegue fazer todas sem consultar a aula, está pronto para avançar.

**Como proceder:**

1. Crie a pasta `entregas-aula-03/` dentro do diretório do DevFlow
2. Faça as questões **na ordem** — cada uma constrói sobre a anterior
3. Cada questão tem um **Conceito-chave** (referência à seção da aula), **Objetivo**, **Passos de Execução** e uma **Entrega** com template para preencher
4. Só consulte a aula novamente se travar em uma questão — e depois de destravar, tente fazer a questão inteira de novo sem consultar
5. Ao final, revise o **Checklist Final** para confirmar que está pronto para a Aula 04

---

## Questão 1: Identificando o Loop Understand→Act→Validate

**Conceito-chave:** Loop Understand→Act→Validate (Aula 03, Seção 1).

**Objetivo:** Identificar as três fases do loop agêntico em um log de execução real.

**Passos de Execução:**

1. Leia o log de execução abaixo, que mostra as tool calls de um Agent Mode executando uma tarefa
2. Classifique cada tool call como parte da fase **Understand**, **Act** ou **Validate**
3. Preencha o template de entrega com sua classificação e justificativa

**Log de execução (ordem cronológica):**

```
1. #read package.json
2. #read index.js
3. #read routes/projects.js
4. #todos — planejar passos para adicionar DELETE
5. #edit routes/projects.js — adicionar rota DELETE
6. #execute — npm start
7. #execute — curl -X DELETE http://localhost:3000/api/projects/0
8. #read routes/projects.js — verificar se o DELETE foi inserido corretamente
9. #execute — curl -X DELETE http://localhost:3000/api/projects/999 (testar 404)
```

**Entrega:** crie `entregas-aula-03/01-loop-identificacao.md`:

~~~~
# Questão 1 — Identificando o Loop Agenico

## Classificacao das Tool Calls

| Tool call | Fase (U/A/V) | Justificativa |
|---|---|---|
| 1. #read package.json | | |
| 2. #read index.js | | |
| 3. #read routes/projects.js | | |
| 4. #todos | | |
| 5. #edit routes/projects.js | | |
| 6. #execute npm start | | |
| 7. #execute curl DELETE | | |
| 8. #read routes/projects.js | | |
| 9. #execute curl DELETE 999 | | |

## Pergunta de Reflexao

O que indica que o agente entrou em um novo ciclo do loop (voltou para Understand) apos a tool call 7?
~~~~

---

## Questão 2: Mapeando Tool Sets para Cenários

**Conceito-chave:** Os 9 tool sets universais (Aula 03, Seção 2).

**Objetivo:** Classificar cenários reais de desenvolvimento com o tool set correto que um agente autônomo usaria.

**Passos de Execução:**

1. Leia cada cenário abaixo
2. Identifique qual tool set (#read, #edit, #search, #execute, #terminal, #web, #vscode, #todos, #browser) o agente usaria PRIMEIRO
3. Explique por que escolheu aquele tool set e qual seria o próximo passo

**Cenários:**

- **Cenário A:** O servidor está dando erro 500 e você não sabe onde. O agente precisa descobrir a causa.
- **Cenário B:** Você precisa criar 3 arquivos novos seguindo um padrão existente no projeto.
- **Cenário C:** O agente precisa consultar a documentação oficial de uma biblioteca que você está usando.
- **Cenário D:** Você quer que o agente entenda a estrutura completa do projeto antes de sugerir uma refatoração.

**Entrega:** crie `entregas-aula-03/02-tool-sets-cenarios.md`:

~~~~
# Questao 2 — Mapeando Tool Sets

## Cenarios

| Cenario | Tool set primario | Por que este | Proximo passo |
|---|---|---|---|
| A — Erro 500 no servidor | | | |
| B — Criar 3 arquivos novos | | | |
| C — Consultar documentacao | | | |
| D — Entender estrutura do projeto | | | |

## Pergunta de Reflexao

Em qual cenario o tool set #todos seria util como segundo ou terceiro passo? Por que?
~~~~

---

## Questão 3: Decidindo o Nível de Permissão

**Conceito-chave:** Níveis de autonomia e heurística de decisão (Aula 03, Seção 3).

**Objetivo:** Escolher o nível de permissão correto para 4 cenários diferentes, justificando a decisão com base na heurística de confiança.

**Passos de Execução:**

1. Leia cada cenário abaixo
2. Escolha entre **Default Approvals**, **Bypass Approvals** ou **Autopilot**
3. Justifique sua escolha usando a heurística: "Confio no resultado final sem ver cada passo?"

**Cenários:**

- **Cenário 1:** Refatorar o nome de uma função em 10 arquivos diferentes. O projeto tem 90% de cobertura de testes. Você já editou esses arquivos antes.
- **Cenário 2:** Criar a rota de autenticação com JWT do zero. É a primeira feature de autenticação do projeto. Não há testes de integração ainda.
- **Cenário 3:** Adicionar um campo `email` no modelo de Projetos. O projeto tem instructions sólidas, você confia no agente, e os testes cobrem 80% do código.
- **Cenário 4:** Você está aprendendo a usar o Agent Mode pela primeira vez e quer ver como ele funciona antes de confiar.

**Entrega:** crie `entregas-aula-03/03-nivel-permissao.md`:

~~~~
# Questao 3 — Decidindo o Nivel de Permissao

## Decisoes

| Cenario | Nivel escolhido | Justificativa |
|---|---|---|
| 1 — Refatorar funcao em 10 arquivos | | |
| 2 — Criar autenticacao JWT | | |
| 3 — Adicionar campo email | | |
| 4 — Primeiro contato com Agent Mode | | |

## Pergunta de Reflexao

Em qual cenario o Bypass Approvals seria uma alternativa viavel ao Autopilot? O que mudaria na sua experiencia?
~~~~

---

## Questão 4: Escrevendo um Prompt de Agent Mode

**Conceito-chave:** Prompt de Agent Mode (Aula 03, Seção 4).

**Objetivo:** Construir um prompt de Agent Mode completo para uma feature diferente da que foi feita na aula, demonstrando que você entende os elementos essenciais: contexto, objetivo, critérios de aceitação e restrições.

**Passos de Execução:**

1. Escolha UMA das features abaixo para implementar no DevFlow:
   - **Opção A:** Endpoint `GET /api/projects/stats` que retorna estatísticas: total de projetos, quantos estão em cada status (planejado, em_andamento, concluído)
   - **Opção B:** Endpoint `GET /api/projects/recent?limit=5` que retorna os N projetos mais recentes (últimos criados)
2. Escreva um prompt de Agent Mode completo, incluindo contexto, objetivo, critérios de aceitação e restrições
3. Explique por que cada elemento do seu prompt é importante

**Entrega:** crie `entregas-aula-03/04-prompt-agent-mode.md`:

~~~~
# Questao 4 — Prompt de Agent Mode

## Feature escolhida

[Opcao A ou B]

## Prompt completo

[Escreva aqui o prompt exato que voce usaria no Agent Mode]

## Anatomia do prompt

| Elemento | Texto no prompt | Por que e importante |
|---|---|---|
| Contexto | | |
| Objetivo | | |
| Criterios de aceitacao | | |
| Restricoes | | |

## Pergunta de Reflexao

Se voce removesse os criterios de aceitacao do prompt, o que poderia dar errado na execucao do agente?
~~~~

---

## Questão 5: Executando o CRUD de Projetos de Forma Independente

**Conceito-chave:** Execução autônoma e validação (Aula 03, Seção 5).

**Objetivo:** Executar o CRUD de Projetos por conta própria, sem consultar o passo a passo da aula, demonstrando domínio do fluxo Agent Mode.

**Passos de Execução:**

1. Sem reler a Seção 5 da aula, escreva o prompt de Agent Mode para implementar o CRUD de Projetos no DevFlow
2. Execute no Agent Mode com Default Approvals
3. Documente cada tool call que o agente fez, em ordem
4. Teste cada um dos 5 endpoints com curl
5. Verifique se as validações funcionam (POST sem name, status inválido, ID inexistente)

**Entrega:** crie `entregas-aula-03/05-crud-independente.md`:

~~~~
# Questao 5 — CRUD de Projetos Independente

## Prompt utilizado

[Cole aqui o prompt que voce usou]

## Log de tool calls (ordem cronologica)

[Enumere cada tool call que o agente fez, numerando de 1 a N]

## Testes realizados

| Endpoint | curl usado | Resposta esperada | Resposta obtida | OK? |
|---|---|---|---|---|
| POST /api/projects | | 201 + projeto criado | | |
| GET /api/projects | | 200 + array | | |
| GET /api/projects/:id | | 200 + projeto | | |
| PUT /api/projects/:id | | 200 + projeto atualizado | | |
| DELETE /api/projects/:id | | 200 ou 204 | | |

## Testes de validacao

| Cenario | curl usado | Resposta esperada | Resposta obtida | OK? |
|---|---|---|---|---|
| POST sem name | | 400 | | |
| POST com status invalido | | 400 | | |
| GET de ID inexistente | | 404 | | |

## Pergunta de Reflexao

O que foi diferente entre a sua execucao autonoma e a execucao guiada da aula? O que voce aprendeu com a diferenca?
~~~~

---

## Questão 6: Analisando um Log de Execução e Decidindo Intervenção

**Conceito-chave:** Observabilidade e intervenção (Aula 03, Seção 6).

**Objetivo:** Analisar um log de execução fornecido e identificar os pontos onde um desenvolvedor profissional deveria intervir.

**Passos de Execução:**

1. Leia o log de execução abaixo
2. Identifique pelo menos 2 momentos onde a intervenção seria necessária
3. Para cada momento, explique POR QUE a intervenção é necessária e COMO você interviria (pausar, ajustar prompt, cancelar)

**Log de execução:**

```
1. #read copilot-instructions.md
2. #read package.json
3. #read index.js
4. #edit index.js — adicionar rota POST /api/projects
5. #execute npm start — erro: porta 3000 já em uso
6. #execute kill-port 3000
7. #execute npm start — ok
8. #execute curl -X POST — erro: conexão recusada
9. #execute npm start — (tenta de novo)
10. #read node_modules/.package-lock.json  <-- arquivo não relacionado
11. #read package.json (de novo)
12. #execute curl -X POST — erro: rota não encontrada
13. #edit index.js — (mesma alteração da tool call 4)
14. #execute npm start
15. #execute curl -X POST — erro: rota não encontrada (mesmo erro)
```

**Entrega:** crie `entregas-aula-03/06-analise-intervencao.md`:

~~~~
# Questao 6 — Analise de Intervencao

## Sinais de alerta identificados

| Tool call # | O que aconteceu | Por que e preocupante |
|---|---|---|
| | | |
| | | |

## Decisoes de intervencao

| Tool call # | Intervir? (Sim/Nao) | Por que | Como intervir |
|---|---|---|---|
| | | | |

## Pergunta de Reflexao

Qual habito o desenvolvedor precisaria ter para evitar que o agente chegasse ao estado de loop da tool call 13 a 15? (Dica: envolve o que foi configurado na Aula 02.)
~~~~

---

## Questão 7: Como as Instructions Influenciaram o Código do Agent Mode

**Conceito-chave:** Integração com instructions da Aula 02 (Aula 03, Seções 2 e 5).

**Objetivo:** Explicar como as custom instructions criadas na Aula 02 influenciam diretamente o código gerado pelo Agent Mode na Aula 03.

**Passos de Execução:**

1. Reflita sobre o CRUD de Projetos que você executou na Questão 5 (ou na Seção 5 da aula)
2. Identifique 3 regras específicas do seu `copilot-instructions.md` que o agente seguiu no código gerado
3. Explique como o código seria DIFERENTE se cada uma dessas regras não existisse
4. Proponha uma regra NOVA que você adicionaria às instructions para melhorar o resultado do Agent Mode

**Entrega:** crie `entregas-aula-03/07-influencia-instructions.md`:

~~~~
# Questao 7 — Influencia das Instructions

## Regras que o agente seguiu

| Regra do copilot-instructions.md | Como apareceu no codigo gerado | Como seria sem a regra |
|---|---|---|
| | | |
| | | |
| | | |

## Nova regra proposta

Regra: [escreva a regra em texto claro]

Em qual seção das instructions ela deveria ficar: [stack, estilo, commits, git, PR, restricoes]

Por que esta regra melhoraria o resultado do Agent Mode:

[explique em 2-3 frases]

## Pergunta de Reflexao

Considerando o loop Understand,Act,Validate, em qual fase o agente usa mais as instructions? Por que?
~~~~

---

## Checklist Final: Pronto para a Aula 04?

Marque cada item só quando conseguir fazê-lo **sem consultar a aula**:

- [ ] Explico o loop Understand→Act→Validate para outra pessoa usando a analogia do estagiário
- [ ] Diferencio Chat (single-turn) de Agent Mode (multi-turn autônomo)
- [ ] Listo pelo menos 6 dos 9 tool sets e dou um exemplo de uso para cada um
- [ ] Descrevo os 3 níveis de permissão e os riscos/benefícios de cada um
- [ ] Escolho o nível de permissão certo para uma tarefa baseada na confiança no agente
- [ ] Ativo o Agent Mode e escrevo um prompt completo com contexto, objetivo, critérios de aceitação e restrições
- [ ] Executo uma feature completa (CRUD) com Agent Mode e testo todos os endpoints
- [ ] Monitoro a execução autônoma e sei quando intervir (erro repetido, arquivo errado)
- [ ] Valido o resultado com testes manuais e revisão de código
- [ ] Explico como as custom instructions da Aula 02 influenciam o código gerado pelo Agent Mode

> *Acertou todos? Você está pronto para a Aula 04, onde vai aprender o protocolo de handoff com ADRs — como documentar decisões de arquitetura e passar contexto entre sessões de forma profissional. Travou em algum? Releia a seção indicada na questão correspondente antes de avançar.*

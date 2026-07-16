---
titulo: "Aula 13 — Questões de Aprendizagem"
modulo: "01"
---

# Aula 13 — Questões de Aprendizagem

## Como Usar Este Arquivo

Este é o seu **checkpoint de domínio** da Aula 13. A pergunta que ele responde é: *"eu realmente domino o meta-ciclo com auto-aprendizado?"*

Diferente das aulas anteriores, esta aula não adiciona uma peça nova ao harness — ela ensina o harness a refinar a si mesmo. As questões abaixo testam se você consegue aplicar o meta-ciclo ao seu próprio harness, não apenas entender o conceito.

**Como proceder:**

- Faça as questões na ordem — cada uma constrói sobre a anterior.
- Cada questão tem **Conceito-chave** (seção de referência na aula), **Objetivo**, **Passos de Execução** e **Entrega** (template para preencher).
- Crie uma pasta `entregas-aula-13/` e salve cada entrega como um arquivo `.md` separado.
- As questões 5-8 exigem que você tenha um harness funcional (Aulas 01-12 concluídas).

**Critério de aprovação:** você só está pronto para encerrar o curso quando conseguir completar as questões 1-5 sem reler a aula. As questões 6-8 são opcionais (desafio avançado).

---

## Questão 1: Diagnóstico das Quatro Dimensões

**Conceito-chave:** Métricas de Qualidade do Harness (Aula 13, Seção 2).

**Objetivo:** avaliar o estado atual do seu harness nas quatro dimensões de qualidade usando uma rubrica qualitativa.

**Passos de Execução:**

1. Para cada dimensão (Efetividade, Eficiência, Segurança, Adaptabilidade), avalie seu harness em uma escala de 1 a 5:
   - 1: nunca avaliou / não sabe
   - 2: avalia informalmente, sem dados
   - 3: tem métricas coletadas manualmente
   - 4: tem métricas automatizadas
   - 5: tem meta-ciclo ativo (coleta → analisa → refina)
2. Para cada nota abaixo de 3, descreva o que falta para chegar ao nível 3
3. Identifique a dimensão mais crítica (a que precisa de mais atenção imediata)

**Entrega:** crie `entregas-aula-13/01-diagnostico-quatro-dimensoes.md`:

~~~~markdown
# Questão 1 — Diagnóstico das Quatro Dimensões

## Avaliação atual

| Dimensão | Nota (1-5) | O que tenho hoje | O que falta para chegar ao 3 |
|----------|-----------|-----------------|------------------------------|
| Efetividade | [X] | [descreva] | [descreva] |
| Eficiência | [X] | [descreva] | [descreva] |
| Segurança | [X] | [descreva] | [descreva] |
| Adaptabilidade | [X] | [descreva] | [descreva] |

## Dimensão mais crítica

[Dimensão que precisa de mais atenção imediata e por quê]
~~~~

---

## Questão 2: Definição de 3 Métricas-Chave

**Conceito-chave:** DevFlow Metrics e Instrumentação (Aula 13, Seções 2-3).

**Objetivo:** definir 3 métricas concretas que você vai coletar para alimentar o meta-ciclo, especificando a fonte de dados, o método de coleta e a linha de base.

**Passos de Execução:**

1. Escolha 3 métricas, cada uma de uma dimensão diferente (efetividade, eficiência, segurança)
2. Para cada métrica, defina:
   - Nome e fórmula de cálculo
   - Fonte de dados (log do agente, Git, PR, etc.)
   - Método de coleta (manual, script, hook)
   - Linha de base atual (valor estimado com base na sua experiência)
   - Meta desejada para 30 dias
3. Verifique se as métricas são mensuráveis com as ferramentas que você já tem

**Entrega:** crie `entregas-aula-13/02-tres-metricas.md`:

~~~~markdown
# Questão 2 — Três Métricas-Chave

## Métrica 1: [nome]

- **Dimensão:** [efetividade / eficiência / segurança]
- **Definição:** [o que mede e como calcula]
- **Fonte de dados:** [onde o dado está]
- **Coleta:** [manual / script / hook]
- **Linha de base:** [valor atual estimado]
- **Meta 30 dias:** [valor desejado]

## Métrica 2: [nome]

- **Dimensão:** [efetividade / eficiência / segurança]
- **Definição:** [o que mede e como calcula]
- **Fonte de dados:** [onde o dado está]
- **Coleta:** [manual / script / hook]
- **Linha de base:** [valor atual estimado]
- **Meta 30 dias:** [valor desejado]

## Métrica 3: [nome]

- **Dimensão:** [efetividade / eficiência / segurança]
- **Definição:** [o que mede e como calcula]
- **Fonte de dados:** [onde o dado está]
- **Coleta:** [manual / script / hook]
- **Linha de base:** [valor atual estimado]
- **Meta 30 dias:** [valor desejado]
~~~~

---

## Questão 3: Projetando um Feedback Loop de Primeiro Nível

**Conceito-chave:** Feedback Loops Automáticos (Aula 13, Seção 4).

**Objetivo:** projetar um feedback loop semi-automático que conecta um padrão de erro observado a um refinamento concreto do harness.

**Passos de Execução:**

1. Identifique o padrão de erro mais frequente no seu fluxo de desenvolvimento com o harness
2. Defina a categoria do erro (ex: validacao, tipagem, estilo, testes)
3. Especifique como o erro será detectado (humano marca, script analisa, etc.)
4. Estabeleça o limiar de ação (quantas ocorrências disparam o refinamento)
5. Redija o template de refinamento que será aplicado
6. Defina o método de validação (como saber se o refinamento funcionou)

**Entrega:** crie `entregas-aula-13/03-feedback-loop.md`:

~~~~markdown
# Questão 3 — Feedback Loop de Primeiro Nível

## Padrão de erro identificado

[Descrição do padrão: o que acontece, em que contexto, com que frequência]

## Categoria

[nome da categoria]

## Método de detecção

[Como o erro será detectado: revisão humana, script automático, ambos]

## Limiar de ação

[Após quantas ocorrências o refinamento é acionado? Ex: "3 ocorrências em 10 PRs consecutivos"]

## Template de refinamento

[O texto exato que será adicionado ao AGENTS.md ou à skill relevante]

## Método de validação

[Como saber se o refinamento funcionou: monitorar a categoria por N execuções, comparar antes/depois]
~~~~

---

## Questão 4: Roteiro de Autonomia Progressiva

**Conceito-chave:** Auto-Aprendizado e Progressão de Autonomia (Aula 13, Seção 5).

**Objetivo:** planejar a progressão de autonomia do seu harness para os próximos 4 meses, definindo marcos concretos para cada mês.

**Passos de Execução:**

1. Para cada mês (1 a 4), defina:
   - Qual aspecto do meta-ciclo você vai automatizar
   - Qual métrica específica será afetada
   - Como você saberá que o nível de autonomia foi alcançado (critério de sucesso)
   - Qual o principal risco e como mitigá-lo
2. Certifique-se de que a progressão é incremental (cada mês depende do anterior)
3. Inclua ao menos um ponto de "pedir ajuda humana" no roteiro

**Entrega:** crie `entregas-aula-13/04-autonomia-progressiva.md`:

~~~~markdown
# Questão 4 — Roteiro de Autonomia Progressiva

## Mês 1: Coleta manual / linha de base

- **O que vou automatizar:** [ex: "nada — vou apenas coletar métricas manualmente"]
- **Métrica afetada:** [ex: "taxa de conclusão"]
- **Critério de sucesso:** [ex: "ter 20 tarefas registradas com métricas consistentes"]
- **Risco e mitigação:** [ex: "esquecer de anotar — deixar um template aberto no editor"]

## Mês 2: Coleta automatizada

- **O que vou automatizar:** [ex: "script pós-tarefa que extrai tokens, tool calls e erros do log"]
- **Métrica afetada:** [ex: "tokens por tarefa, tool calls por tarefa"]
- **Critério de sucesso:** [ex: "coleta automática rodando sem falhas por 15 dias"]
- **Risco e mitigação:** [ex: "script quebrar silenciosamente — adicionar notificação"]

## Mês 3: Detecção automatizada

- **O que vou automatizar:** [ex: "alerta quando uma métrica degrada mais de 20% na média móvel"]
- **Métrica afetada:** [ex: "taxa de erros em PR"]
- **Critério de sucesso:** [ex: "receber 3 alertas úteis (não falsos positivos) em 2 semanas"]
- **Risco e mitigação:** [ex: "alerta falso positivo — ajustar limiar gradualmente"]

## Mês 4: Refinamento automatizado (domínio específico)

- **O que vou automatizar:** [ex: "refinamento automático de regras de validação baseado em categorias de erro"]
- **Métrica afetada:** [ex: "comentários de revisão da categoria 'validacao'"]
- **Critério de sucesso:** [ex: "redução de 50% nos comentários de validação em 20 PRs"]
- **Risco e mitigação:** [ex: "refinamento errado degradar qualidade — reverter automático se métrica piorar"]

## Ponto de pedir ajuda humana

[Em que situação você vai interromper a automação e consultar um humano? Ex: "se 3 refinamentos consecutivos não melhorarem a métrica"]
~~~~

---

## Questão 5: Análise de Ponto de Equilíbrio

**Conceito-chave:** O Ciclo Virtuoso e o Ponto de Equilíbrio (Aula 13, Seção 6).

**Objetivo:** analisar um refinamento específico e decidir se ele deve ser automatizado ou mantido manual, aplicando os três fatores de decisão.

**Passos de Execução:**

1. Escolha um refinamento real ou hipotético que você considera automatizar
2. Avalie-o nos três fatores: frequência do padrão, risco do refinamento, custo da automação
3. Para cada fator, atribua uma pontuação de 1 (baixo) a 5 (alto)
4. Calcule a pontuação composta: (frequência × 2) - (risco × 1.5) - (custo × 1)
5. Decida: se > 5, automatize. Se < 3, mantenha manual. Se entre 3 e 5, semi-automatize.
6. Justifique sua decisão

**Entrega:** crie `entregas-aula-13/05-ponto-equilibrio.md`:

~~~~markdown
# Questão 5 — Análise de Ponto de Equilíbrio

## Refinamento analisado

[Nome e descrição do refinamento]

## Avaliação por fator

| Fator | Pontuação (1-5) | Justificativa |
|-------|----------------|---------------|
| Frequência do padrão | [X] | [justifique] |
| Risco do refinamento | [X] | [justifique] |
| Custo da automação | [X] | [justifique] |

## Pontuação composta

- Fórmula: (frequência × 2) - (risco × 1.5) - (custo × 1)
- Resultado: [X]

## Decisão

[automatizar / semi-automatizar / manter manual]

## Justificativa

[Por que esta é a decisão correta, considerando os fatores acima]
~~~~

---

## Questão 6 (Desafio Avançado): Implementação do Coletor de Métricas

**Conceito-chave:** Instrumentação para Coleta de Métricas (Aula 13, Seção 3).

**Objetivo:** implementar um script funcional que extrai métricas de uma sessão do agente e as registra em um arquivo CSV ou JSON para análise posterior.

**Passos de Execução:**

1. Crie um script (shell, Python ou JavaScript) que:
   - Lê o log da última sessão do agente (consulte a documentação do seu harness para localizar o arquivo de log)
   - Extrai: data/hora, número de tool calls, tokens gastos (se disponível), erros encontrados
   - Escreve uma linha em um arquivo CSV com essas métricas
2. Teste o script após executar uma tarefa simples com o agente
3. Execute o script 3 vezes (uma após cada tarefa) e verifique se o CSV está correto
4. Se o log não expõe tokens, use uma aproximação (ex: número de tool calls como proxy de custo)

**Entrega:** crie `entregas-aula-13/06-coletor-metricas/` com:

~~~~markdown
# Questão 6 — Coletor de Métricas

## Script

[Cole o código do script aqui]

## Localização do log

[Caminho do arquivo de log que o script lê]

## CSV gerado (exemplo)

```
data,tarefa,tool_calls,tokens,erros
2026-07-10,criar-card,23,12450,2
2026-07-11,refatorar-filtro,15,8230,0
```

## Dificuldades encontradas

[O que não funcionou de primeira, como você contornou]

## Aproximações usadas

[Se o token count não estava disponível, o que você usou como proxy?]
~~~~

---

## Questão 7 (Desafio Avançado): Detector de Padrões

**Conceito-chave:** Auto-Aprendizado (Aula 13, Seção 5).

**Objetivo:** criar um script que analisa o CSV de métricas coletado na Questão 6 e detecta padrões automaticamente.

**Passos de Execução:**

1. Com base no CSV da Questão 6 (ou um dataset simulado de 20+ linhas), crie um script que:
   - Calcula a média e o desvio padrão de cada métrica
   - Identifica outliers (valores acima de 2 desvios padrão da média)
   - Agrupa por tipo de tarefa e calcula médias por grupo
   - Gera um relatório texto com os padrões encontrados
2. Teste o script com dados reais ou simulados
3. O script deve ser capaz de responder: "qual tipo de tarefa gasta mais tokens?" e "qual métrica tem mais variabilidade?"

**Entrega:** crie `entregas-aula-13/07-detector-padroes/`:

~~~~markdown
# Questão 7 — Detector de Padrões

## Script

[Cole o código do script aqui]

## Dataset usado

[Número de linhas, fonte dos dados (real ou simulado)]

## Relatório gerado

[Cole a saída do script aqui]

## Padrões detectados

[Liste os 3 padrões mais relevantes que o script encontrou]

## Limitações

[O que o script não consegue detectar e por quê]
~~~~

---

## Questão 8 (Desafio Avançado): Ciclo Completo em Miniatura

**Conceito-chave:** Ciclo de Auto-Aprendizado (Aula 13, Seção 5, fluxograma de 7 passos).

**Objetivo:** executar um ciclo completo de auto-aprendizado em miniatura (passos 1-6 do fluxograma) para um domínio bem delimitado.

**Passos de Execução:**

1. Escolha um domínio bem pequeno (ex: "geração de nomes de variáveis" ou "formatação de imports")
2. Execute 3 tarefas no domínio escolhido com o harness no estado atual (Passo 1)
3. Colete as métricas de cada execução (Passo 2) — use o script da Questão 6
4. Identifique um padrão: o que deu errado ou poderia ser melhor (Passo 3)
5. Formule uma hipótese de refinamento específica (Passo 4) — ex: "se eu adicionar esta regra ao AGENTS.md, os nomes de variável serão mais consistentes"
6. Aplique o refinamento manualmente (Passo 5)
7. Execute mais 3 tarefas no mesmo domínio e colete métricas novamente (Passo 6)
8. Compare os resultados antes e depois do refinamento (Passo 6)
9. Decida: o refinamento melhora as métricas? (Passo 6 — mantenha ou reverta)

**Entrega:** crie `entregas-aula-13/08-ciclo-completo.md`:

~~~~markdown
# Questão 8 — Ciclo Completo em Miniatura

## Domínio escolhido

[Ex: "geração de nomes de variáveis em funções de transformação de dados"]

## Passo 1-2: Execução e coleta (antes do refinamento)

| Tarefa | Métrica 1 | Métrica 2 | Métrica 3 |
|--------|----------|----------|----------|
| Tarefa 1 | [X] | [X] | [X] |
| Tarefa 2 | [X] | [X] | [X] |
| Tarefa 3 | [X] | [X] | [X] |
| **Média** | [X] | [X] | [X] |

## Passo 3: Padrão identificado

[O que você observou nas 3 execuções que poderia ser melhor]

## Passo 4: Hipótese de refinamento

[Mudança específica que você fez no harness — texto exato adicionado/removido/modificado]

## Passo 5-6: Execução e coleta (depois do refinamento)

| Tarefa | Métrica 1 | Métrica 2 | Métrica 3 |
|--------|----------|----------|----------|
| Tarefa 4 | [X] | [X] | [X] |
| Tarefa 5 | [X] | [X] | [X] |
| Tarefa 6 | [X] | [X] | [X] |
| **Média** | [X] | [X] | [X] |

## Comparação antes vs. depois

| Métrica | Média antes | Média depois | Variação |
|---------|------------|-------------|----------|
| [Métrica 1] | [X] | [X] | [+/-X%] |
| [Métrica 2] | [X] | [X] | [+/-X%] |
| [Métrica 3] | [X] | [X] | [+/-X%] |

## Decisão

[Manter o refinamento / Reverter o refinamento]

## Justificativa

[Por que o refinamento funcionou ou não funcionou — o que os dados mostram]
~~~~

---

## Checklist Final: Pronto para Encerrar o Curso?

Antes de encerrar, verifique se você domina os conceitos fundamentais do Continual Harness com Auto-Aprendizado:

- [ ] **Questão 1**: fiz o diagnóstico do meu harness nas quatro dimensões e sei onde estou
- [ ] **Questão 2**: defini 3 métricas concretas com fonte de dados, coleta e linha de base
- [ ] **Questão 3**: projetei um feedback loop que conecta erro observado a refinamento
- [ ] **Questão 4**: planejei minha progressão de autonomia para os próximos 4 meses
- [ ] **Questão 5**: analisei o ponto de equilíbrio entre automatizar e manter manual
- [ ] **Questão 6 (desafio)**: implementei um coletor de métricas funcional
- [ ] **Questão 7 (desafio)**: criei um detector de padrões que analisa métricas
- [ ] **Questão 8 (desafio)**: executei um ciclo completo de auto-aprendizado em miniatura

**Se você completou as questões 1-5:** você domina o meta-ciclo conceitualmente e está pronto para aplicar no seu harness. O curso cumpriu seu objetivo.

**Se você completou as questões 1-8:** você não só domina o conceito como já tem ferramentas funcionais de coleta, detecção e ciclo de auto-aprendizado. Você está no nível avançado de Continual Harness.

**Se você não completou as questões 1-5:** não tem problema. Releia as seções correspondentes da Aula 13 e tente novamente. O meta-ciclo é um conceito que se consolida com a prática, não com a leitura.

---

**Parabéns por chegar até aqui.** Você completou o curso de Programação Agêntica — do primeiro modelo mental de LLM ao harness que aprende sozinho. O que você construiu não é apenas um conjunto de ferramentas: é um **sistema vivo** que continuará evoluindo com você.

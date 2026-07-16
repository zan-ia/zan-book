---
título: "Programador Profissional com Agentes — Aula 15 — Questões de Aprendizagem"
módulo: "01"
aula: "15"
---

# Programador Profissional com Agentes Aula 15 — Questões de Aprendizagem

## Como Usar Este Arquivo

Este arquivo é o seu **checkpoint de domínio** sobre design system com agentes — do prompt ao componente React. A pergunta central é: *"eu realmente domino o fluxo completo de design com IA usando módulos de conhecimento especializado?"*

Cada questão abaixo verifica um conceito-chave da aula. Para cada uma, você encontra:

- **Conceito-chave**: qual seção da aula revisitar se travar
- **Objetivo**: o que você precisa demonstrar
- **Passos de Execução**: o que fazer, em ordem
- **Entrega**: um template Markdown para preencher e salvar

**Como proceder:**

1. Crie uma pasta `entregas-aula-15/` na raiz do DevFlow
2. Resolva as 8 questões EM ORDEM
3. Para cada questão, crie o arquivo de entrega indicado
4. Não releia a aula — se travar, volte a seção indicada em "Conceito-chave"
5. Só avance para a próxima questão quando a atual estiver completa

**Dica:** As questões 4, 5 e 6 envolvem usar o Stitch MCP e as Stitch Skills. Tenha o Stitch MCP configurado (Seção 4) e as skills instaladas (Seção 5) antes de começar. A questão 7 requer o Playwright MCP rodando. A questão 8 é o desafio final integrador.

---

## Questão 1: Mapeando as 9 Etapas do Fluxo Prompt-a-Componente

**Conceito-chave:** Workflow Integrado (Aula 15, Seção 3).

**Objetivo:** Listar as 9 etapas do workflow completo e identificar qual artefato cada uma produz.

**Passos de Execução:**

1. Liste as 9 etapas do workflow de prompt a componente validado
2. Organize-as nas 3 fases: Concepção, Documentação, Implementação
3. Para cada etapa, identifique o artefato de entrada e o artefato de saída
4. Crie o arquivo de entrega com a tabela completa

**Entrega:** crie `entregas-aula-15/01-workflow-prompt-componente.md`:

~~~~
## Questao 1 — Workflow Prompt a Componente

### Fase 1: Concepção

| Etapa | Artefato de Entrada | Artefato de Saída |
|-------|---------------------|-------------------|
| 1. Prompt Inicial |  |  |
| 2.  |  |  |
| 3.  |  |  |
| 4.  |  |  |

### Fase 2: Documentação

| Etapa | Artefato de Entrada | Artefato de Saída |
|-------|---------------------|-------------------|
| 5.  |  |  |
| 6.  |  |  |

### Fase 3: Implementação

| Etapa | Artefato de Entrada | Artefato de Saída |
|-------|---------------------|-------------------|
| 7.  |  |  |
| 8.  |  |  |
| 9.  |  |  |
~~~~

---

## Questão 2: Classificando as 7 Skills por Categoria

**Conceito-chave:** Módulos de Conhecimento Especializado (Aula 15, Seção 2).

**Objetivo:** Classificar cada uma das 7 Stitch Skills em sua categoria correspondente e descrever o propósito.

**Passos de Execução:**

1. Liste as 7 skills do repositório stitch-skills
2. Para cada skill, identifique a categoria (criação, refino, documentação, iteração, conversão, integração, walkthrough)
3. Descreva o propósito de cada skill em 1-2 frases
4. Indique em qual etapa do workflow de 9 etapas cada skill é usada

**Entrega:** crie `entregas-aula-15/02-classificação-skills.md`:

~~~~
## Questao 2 — Classificação das Skills

| Skill | Categoria | Proposito | Etapa do Workflow |
|-------|-----------|-----------|-------------------|
| stitch-design |  |  |  |
| enhance-prompt |  |  |  |
| design-md |  |  |  |
| stitch-loop |  |  |  |
| react-components |  |  |  |
| shadcn-ui |  |  |  |
| video-walkthrough |  |  |  |
~~~~

---

## Questão 3: Isolamento de Domínio e Composição

**Conceito-chave:** Módulos de Conhecimento Especializado (Aula 15, Seção 2).

**Objetivo:** Explicar porque o isolamento de domínio entre skills e importante e como as skills se compoem em um pipeline.

**Passos de Execução:**

1. Explique o que é isolamento de domínio no contexto de skills de design
2. Liste 3 beneficios do isolamento de domínio
3. Descreva um cenário onde 3 skills são compostas em sequência para produzir um resultado completo
4. Explique como o princípio de valor incremental se aplica a composição de skills

**Entrega:** crie `entregas-aula-15/03-isolamento-composição.md`:

~~~~
## Questao 3 — Isolamento de Domínio e Composição

### O que é isolamento de domínio?

[Resposta aqui]

### 3 beneficios do isolamento

1. [Beneficio 1]
2. [Beneficio 2]
3. [Beneficio 3]

### Cenário de composição de 3 skills

**Cenário:** [Descrição do cenário]

| Ordem | Skill | O que produz | Consumido por |
|-------|-------|-------------|---------------|
| 1 |  |  |  |
| 2 |  |  |  |
| 3 |  |  |  |

### Como o valor incremental se aplica

[Explicação aqui]
~~~~

---

## Questão 4: Configurar Stitch MCP é validar as 3 ferramentas virtuais

**Conceito-chave:** Stitch MCP — Configuração e Primeiros Passos (Aula 15, Seção 4).

**Objetivo:** Configurar o Stitch MCP no DevFlow, criar um projeto, gerar uma tela e testar as 3 ferramentas virtuais.

**Passos de Execução:**

1. Abra o arquivo `.vscode/mcp.json` do DevFlow e adicione a configuração do Stitch MCP
2. Defina a variável de ambiente `STITCH_API_KEY`
3. Peça ao assistente para criar um projeto "DevFlow-Redesign" e gerar uma tela de "dashboard com métricas para gerenciamento de projetos, dark theme, desktop"
4. Use `get_screen_code` para obter o HTML completo da tela gerada
5. Use `get_screen_image` para obter a screenshot como base64 e salve como `dashboard-design.png`
6. Mapeie a tela para a rota "/dashboard" usando `build_site`
7. Documente cada comando utilizado e o resultado obtido

**Entrega:** crie `entregas-aula-15/04-configuração-stitch-mcp.md`:

~~~~
## Questao 4 — Configuração e Teste do Stitch MCP

### Configuração do .vscode/mcp.json

```json
[Cole aqui o conteúdo do seu arquivo mcp.json]
```

### Projeto e Tela Criados

- **Project ID:** [ID do projeto]
- **Nome do projeto:** [Nome]
- **Screen ID da tela de dashboard:** [ID da tela]
- **Prompt utilizado:** [Prompt que você usou]

### Teste do get_screen_code

**Comando utilizado:**
[Comando ou prompt usado]

**Resultado (primeiras 10 linhas do HTML):**
```html
[Primeiras 10 linhas do HTML retornado]
```

### Teste do get_screen_image

**Comando utilizado:**
[Comando ou prompt usado]

**Resultado:**
[Arquivo dashboard-design.png salvo em entregas-aula-15/]
[Tamanho do arquivo: X KB]

### Teste do build_site

**Comando utilizado:**
[Comando ou prompt usado]

**Mapeamento:**
- Screen ID: [ID] -> Rota: /dashboard

**Resultado:**
[Success: true/false]
[Número de páginas geradas: X]

### Conclusão

[Resumo do que você aprendeu configurando e testando o Stitch MCP]
~~~~

---

## Questão 5: Refinar Prompt e Documentar Design System do DevFlow

**Conceito-chave:** Stitch Skills (Aula 15, Seção 5).

**Objetivo:** Usar as skills enhance-prompt e design-md para refinar um prompt de tela do DevFlow e documentar o design system resultante.

**Passos de Execução:**

1. Instale as skills enhance-prompt, stitch-design e design-md (se já não estiverem instaladas)
2. Crie um prompt inicial para a tela de projetos do DevFlow
3. Use enhance-prompt para refinar o prompt
4. Use stitch-design para gerar o design com o prompt refinado
5. Use design-md para documentar o design system em um arquivo Markdown
6. Salve a documentação em `docs/design/design-system-devflow.md`

**Entrega:** crie `entregas-aula-15/05-refino-documentação.md`:

~~~~
## Questao 5 — Refino de Prompt e Documentação de Design System

### Prompt Inicial

[Prompt original antes do refino]

### Prompt Refinado (apos enhance-prompt)

[Prompt refinado gerado pela skill]

### Design Gerado

- **Screen ID:** [ID da tela gerada]
- **Dispositivo:** [Desktop/Mobile/Tablet]

### Documentação do Design System

**Arquivo gerado:** `docs/design/design-system-devflow.md`

**Resumo da documentação:**

| Categoria | Item | Valor |
|-----------|------|-------|
| Cor Primaria |  |  |
| Cor Secundaria |  |  |
| Cor de Fundo |  |  |
| Cor de Texto |  |  |
| Fonte Principal |  |  |
| Tamanho Base |  |  |
| Espacamento Padrão |  |  |
| Componentes Identificados |  |  |

### Reflexao

[O que você aprendeu sobre como prompts estruturados afetam a qualidade do design gerado?]
~~~~

---

## Questão 6: Converter Design Stitch em Componente React com shadcn/ui

**Conceito-chave:** Componentes React com Stitch é shadcn/ui (Aula 15, Seção 6).

**Objetivo:** Usar as skills react-components e shadcn-ui para converter um design Stitch em componentes React TypeScript integrados com shadcn/ui.

**Passos de Execução:**

1. Instale as skills react-components e shadcn-ui
2. Parta do design da tela de projetos que você documentou na Questão 5
3. Use get_screen_code para obter o HTML da tela
4. Use react-components para converter em componentes React TypeScript
5. Use shadcn-ui para adaptar os componentes para shadcn/ui
6. Verifique que os componentes foram criados na estrutura de pastas correta
7. Execute um teste rápido: importe o componente principal e verifique se ele renderiza sem erros

**Entrega:** crie `entregas-aula-15/06-conversão-react-shadcn.md`:

~~~~
## Questao 6 — Conversao de Design para React com shadcn/ui

### HTML Extraído (get_screen_code)

**Screen ID:** [ID da tela]
**Tamanho do HTML:** [X linhas]

### Componentes Gerados (react-components)

**Lista de arquivos criados:**

```
[Estrutura de pastas dos componentes]
```

**Exemplo de componente gerado (arquivo principal):**

```tsx
[Cole o código do componente principal gerado]
```

### Adaptação para shadcn/ui

**Componentes shadcn/ui utilizados:**

| Elemento HTML Original | Componente shadcn/ui |
|------------------------|----------------------|
| [Elemento] | [Componente] |
| [Elemento] | [Componente] |
| [Elemento] | [Componente] |

**Exemplo de componente após adaptação:**

```tsx
[Cole o código do componente após a adaptação shadcn/ui]
```

### Verificação

- [ ] Componente importado sem erros
- [ ] shadcn/ui componentes renderizam corretamente
- [ ] Props e tipos estão definidos
- [ ] Estrutura de pastas segue o padrão do DevFlow

### Reflexao

[Qual a principal diferença que você notou entre o componente gerado pelo react-components e o componente após a adaptação shadcn-ui?]
~~~~

---

## Questão 7: Validação Visual com Playwright MCP

**Conceito-chave:** Validação Visual com Playwright MCP (Aula 15, Seção 7).

**Objetivo:** Comparar visualmente o componente React implementado com o design original Stitch usando Playwright MCP.

**Passos de Execução:**

1. Inicie o servidor de desenvolvimento do DevFlow (ou suba um servidor estático com o componente)
2. Use get_screen_image no Stitch MCP para obter a screenshot do design original
3. Use o Playwright MCP para navegar até a URL do componente
4. Tire um screenshot do componente implementado
5. Peça ao assistente para comparar os dois screenshots e gerar um relatório de discrepâncias
6. Para cada discrepância encontrada, corrija no código do componente
7. Repita a validação até que a discrepância seja inferior a 2%

**Entrega:** crie `entregas-aula-15/07-validação-visual.md`:

~~~~
## Questao 7 — Validação Visual com Playwright MCP

### Screenshots

- **Design original:** [caminho para a imagem do design]
- **Componente implementado (antes das correções):** [caminho para o screenshot]

### Relatório de Discrepâncias (1a rodada)

```markdown
## Validacao Visual

### Correspondencias
- [ ] [Item que corresponde]
- [ ] [Item que corresponde]

### Discrepancias
- [ ] [Discrepancia 1] -> [Valor no design] vs [Valor no componente]
- [ ] [Discrepancia 2] -> [Valor no design] vs [Valor no componente]

### Diferenca total: [X]% dos pixels
- [ ] Aprovado? [SIM/NAO]
```

### Correções Aplicadas

| Discrepância | Correção aplicada |
|--------------|-------------------|
| [Discrepância 1] | [O que você mudou no código] |
| [Discrepância 2] | [O que você mudou no código] |

### Relatório Final

**Diferença total apos correções:** [X]%

**Status:** [APROVADO / REPROVADO]

### Reflexao

[O que a validação visual revelou que uma revisao de código tradicional não teria capturado?]
~~~~

---

## Questão 8: Redesign Completo de uma Tela do DevFlow (Prompt a Componente Validado)

**Conceito-chave:** Todas as seções da Aula 15.

**Objetivo:** Executar o fluxo completo de 9 etapas para redesenhar a página de detalhes de projeto do DevFlow, do prompt ao componente React validado visualmente.

**Passos de Execução:**

1. **Prompt Inicial**: descreva como você imagina a página de detalhes de projeto (informações, tarefas, membros, gráfico de progresso)
2. **Refino**: use enhance-prompt para refinar o prompt
3. **Geração**: use stitch-design para gerar o design de alta fidelidade
4. **Iteração**: use stitch-loop para fazer pelo menos 2 ajustes no design
5. **Documentação**: use design-md para documentar o design system
6. **Extração**: use get_screen_code para extrair o HTML final
7. **Conversão**: use react-components para converter em componentes React TypeScript
8. **Integração**: use shadcn-ui para adaptar os componentes
9. **Validação**: use Playwright MCP para validar visualmente o resultado final

**Entrega:** crie `entregas-aula-15/08-redesign-completo.md`:

~~~~
## Questao 8 — Redesign Completo: Página de Detalhes do Projeto

### Etapa 1: Prompt Inicial

```
[Prompt inicial]
```

### Etapa 2: Prompt Refinado (enhance-prompt)

```markdown
[Prompt refinado]
```

### Etapa 3: Design Gerado (stitch-design)

- **Projeto Stitch:** [Nome/ID]
- **Screen ID:** [ID da tela]
- **Screenshot:** [Salvo em entregas-aula-15/]

### Etapa 4: Iterações (stitch-loop)

**Iteração 1:** [O que foi ajustado]
**Resultado:** [Descrição]

**Iteração 2:** [O que foi ajustado]
**Resultado:** [Descrição]

**Design final aprovado:** [SIM/NÃO]

### Etapa 5: Documentação (design-md)

**Arquivo gerado:** [caminho]
**Principais elementos do design system:**

| Elemento | Valor |
|----------|-------|
| Paleta de cores |  |
| Tipografia |  |
| Espacamentos |  |
| Componentes |  |

### Etapa 6: Extração (get_screen_code)

**HTML extraído:** [X linhas]
**Resumo da estrutura:** [Descrição dos componentes HTML identificados]

### Etapa 7: Conversao (react-components)

**Componentes criados:**

```
[Estrutura de pastas dos componentes]
```

### Etapa 8: Integração (shadcn-ui)

**Componentes shadcn/ui utilizados:**
[Lista de componentes shadcn/ui]

### Etapa 9: Validação Visual (Playwright MCP)

**Relatório de discrepâncias:**

```markdown
- Diferenca inicial: X%
- Discrepancias encontradas: [lista]
- Correcoes aplicadas: [lista]
- Diferenca final: X%
```

**Status final:** [APROVADO / REPROVADO]

### Resumo do Ciclo

- **Tempo total estimado:** [X minutos]
- **Número de iterações de design:** [X]
- **Número de correções visuais:** [X]
- **Discrepância final:** [X]%

### Liçoes Aprendidas

1. [Lição 1]
2. [Lição 2]
3. [Lição 3]
~~~~

---

## Checklist Final: Pronto para a Próxima Aula?

Antes de seguir em frente, verifique se você consegue fazer cada um dos itens abaixo sem consultar a aula:

- [ ] **Explicar** a arquitetura de design com IA generativa é como prompts se transformam em interfaces de alta fidelidade
- [ ] **Descrever** o papel do MCP como ponte entre a plataforma de design e o ambiente de desenvolvimento
- [ ] **Listar** as 3 ferramentas virtuais principais do Stitch MCP e a função de cada uma
- [ ] **Diferenciar** as 7 categorias de módulos de conhecimento especializado com exemplos
- [ ] **Mapear** as 9 etapas do workflow de prompt a componente, identificando os artefatos de cada etapa
- [ ] **Configurar** o Stitch MCP no arquivo .vscode/mcp.json e testar as ferramentas
- [ ] **Aplicar** as skills enhance-prompt e design-md para refinar prompts e documentar design systems
- [ ] **Converter** designs Stitch em componentes React TypeScript usando react-components
- [ ] **Adaptar** componentes para shadcn/ui com temas, variantes e acessibilidade
- [ ] **Validar** visualmente componentes implementados contra designs originais usando Playwright MCP
- [ ] **Executar** o fluxo completo de 9 etapas para redesenhar uma tela do DevFlow do zero

**Parabéns!** Você completou a Aula 15 — uma extensão avançada do Bloco C que une design com IA, MCPs, skills especializadas e validação visual em um único fluxo integrado. O DevFlow agora não só é codificado e testado por agentes — ele é **projetado** por eles também.

Na próxima aula (se houver), você pode explorar como criar skills de design customizadas para o DevFlow usando o Stitch SDK diretamente, automatizando fluxos de design inteiros sem depender do assistente.

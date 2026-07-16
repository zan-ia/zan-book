---
titulo: "Programador Profissional com Agentes — Aula 10 — Questões de Aprendizagem"
modulo: "01"
aula: "10"
---

# Programador Profissional com Agentes Aula 10 — Questões de Aprendizagem

## Como Usar Este Arquivo

Este arquivo e o seu **checkpoint de aprendizagem** da Aula 10. A pergunta central e: *"eu realmente entendi a materia?"*

Cada questao abaixo verifica um conceito-chave da aula. Para cada uma, voce encontra:

- **Conceito-chave**: qual secao da aula revisitar se travar
- **Objetivo**: o que voce precisa demonstrar
- **Passos de Execucao**: o que fazer, em ordem
- **Entrega**: um template Markdown para preencher e salvar

**Como proceder:**

1. Crie uma pasta `entregas-aula-10/` na raiz do DevFlow
2. Resolva as 7 questoes EM ORDEM
3. Para cada questao, crie o arquivo de entrega indicado
4. Nao releia a aula — se travar, volte a secao indicada em "Conceito-chave"
5. So avance para a Aula 11 quando completar todas as 7 questoes por conta propria

**Dica:** As questoes 3, 4 e 5 envolvem configuracao e uso de MCPs no DevFlow. Tenha o arquivo `.vscode/mcp.json` pronto antes de comecar.

---

## Questão 1: MCP vs Skill — Classificando Ferramentas

**Conceito-chave:** O que e MCP — arquitetura cliente-servidor (Aula 10, Seção 1).

**Objetivo:** Classificar corretamente 6 cenarios como adequados para MCP ou para skill, justificando cada escolha com base na diferenca entre conhecimento e acao.

**Passos de Execução:**

1. Leia cada cenario abaixo
2. Classifique como **MCP** ou **Skill**
3. Justifique sua classificacao em 1-2 frases

**Cenarios:**

```
Cenario A: Consultar a documentacao oficial do React sobre o hook useMemo.

Cenario B: Extrair as cores, fontes e dimensoes de um componente no arquivo de design.

Cenario C: Executar um teste que abre o navegador, tira screenshot e compara com o design original.

Cenario D: Obter exemplos de uso do componente DataGrid do MUI com props e eventos.

Cenario E: Abrir a URL do DevFlow em desenvolvimento, inspecionar um elemento e ver o CSS aplicado.

Cenario F: Saber a sintaxe correta do metodo `array.filter()` com exemplos.
```

**Entrega:** crie `entregas-aula-10/01-mcp-vs-skill.md`:

~~~~
## Questão 1 — MCP vs Skill

## Tabela de Classificacao

| Cenario | Tipo (MCP / Skill) | Justificativa |
|---|---|---|
| Cenário A |  |  |
| Cenário B |  |  |
| Cenário C |  |  |
| Cenário D |  |  |
| Cenário E |  |  |
| Cenário F |  |  |

## Conclusao

Em 2-3 frases: qual criterio principal voce usou para decidir entre MCP e skill em cada cenario?
~~~~

---

## Questão 2: stdio vs HTTP/SSE — Escolhendo o Transporte

**Conceito-chave:** Protocolos de transporte (Aula 10, Seção 2).

**Objetivo:** Decidir o protocolo de transporte adequado para 4 cenarios de MCP, justificando com base em latencia, seguranca e necessidade de acesso remoto.

**Passos de Execução:**

1. Leia cada cenario abaixo
2. Decida: **stdio** ou **HTTP/SSE**
3. Justifique sua escolha

**Cenarios:**

```
Cenario A: Um MCP que roda um interpretador de linha de comando local para executar scripts de build.

Cenario B: Um MCP de banco de dados que precisa ser acessado por todo o time, rodando em um servidor central.

Cenario C: Um MCP de debugging de browser que abre paginas locais em desenvolvimento.

Cenario D: Um MCP de API de terceiros que consulta dados de producao de um servidor remoto.
```

**Entrega:** crie `entregas-aula-10/02-transporte-mcp.md`:

~~~~
## Questão 2 — Transporte MCP

## Tabela de Decisoes

| Cenario | Transporte | Justificativa |
|---|---|---|
| A |  |  |
| B |  |  |
| C |  |  |
| D |  |  |

## Matriz de Decisao

Para cada cenario, responda:

**Cenario A:** Precisa de acesso remoto? [Sim/Nao] | Precisa de maxima seguranca? [Sim/Nao] | Latencia e critica? [Sim/Nao]

**Cenario B:** Precisa de acesso remoto? [Sim/Nao] | Precisa de maxima seguranca? [Sim/Nao] | Latencia e critica? [Sim/Nao]

**Cenario C:** Precisa de acesso remoto? [Sim/Nao] | Precisa de maxima seguranca? [Sim/Nao] | Latencia e critica? [Sim/Nao]

**Cenario D:** Precisa de acesso remoto? [Sim/Nao] | Precisa de maxima seguranca? [Sim/Nao] | Latencia e critica? [Sim/Nao]
~~~~

---

## Questão 3: Configurando .vscode/mcp.json no DevFlow

**Conceito-chave:** Configuracao de MCPs (Aula 10, Seção 4).

**Objetivo:** Criar o arquivo `.vscode/mcp.json` na raiz do DevFlow configurando corretamente 3 MCPs de frontend, cada um com seu tipo, comando e argumentos apropriados.

**Passos de Execução:**

1. Crie o arquivo `.vscode/mcp.json` na raiz do DevFlow
2. Configure os 3 MCPs: Figma MCP (stdio), Playwright MCP (stdio), Browser MCP (stdio)
3. Cada MCP deve ter: nome descritivo, tipo, comando de instalacao, argumentos
4. Verifique que o JSON e valido (use um linter JSON se necessario)

**Entrega:** crie `entregas-aula-10/03-configuracao-mcp.md`:

~~~~
## Questão 3 — Configuração .vscode/mcp.json

## Conteudo do Arquivo

Copie o conteudo completo do arquivo `.vscode/mcp.json` que voce criou:

```json
{
  "servers": {
    "figma": {
      ...
    },
    "playwright": {
      ...
    },
    "browser": {
      ...
    }
  }
}
```

## Verificacao

- [ ] O arquivo `.vscode/mcp.json` existe na raiz do DevFlow
- [ ] O JSON e valido (parseia sem erros)
- [ ] O MCP Figma esta configurado com tipo e comando corretos
- [ ] O MCP Playwright esta configurado com tipo e comando corretos
- [ ] O MCP Browser esta configurado com tipo e comando corretos
- [ ] Cada MCP tem um nome descritivo

## Reflexao

Por que o arquivo de configuracao fica em `.vscode/mcp.json` e nao em `.github/mcp.json`? Explique em 2-3 frases.
~~~~

---

## Questão 4: Extraindo Specs com Figma MCP

**Conceito-chave:** Figma MCP (Aula 10, Seção 5).

**Objetivo:** Usar o Figma MCP para extrair specs de um componente de design e gerar o codigo React correspondente, demonstrando o fluxo completo do design ao codigo.

**Passos de Execução:**

1. No Chat do assistente, peca: "Use o Figma MCP para extrair as specs do componente de card de projeto do arquivo de design do DevFlow"
2. Receba as specs extraidas (cores, dimensoes, fontes, espacamentos)
3. Peca ao assistente: "Com base nas specs extraidas e na skill de React, gere o componente ProjectCard em JSX"
4. Verifique se o componente gerado corresponde as specs (cores, tamanhos, fontes)
5. Salve o componente em `src/components/ProjectCard.tsx`

**Entrega:** crie `entregas-aula-10/04-figma-mcp.md`:

~~~~
## Questão 4 — Figma MCP

## Comando Utilizado

Cole o comando exato que voce usou no Chat:

```
[Seu comando aqui]
```

## Specs Extraidas

Copie as specs que o Figma MCP retornou:

```json
{
  "cores": "...",
  "dimensoes": "...",
  "fontes": "...",
  "espacamentos": "..."
}
```

## Codigo Gerado

Copie o codigo React gerado pelo assistente:

```jsx
// Seu ProjectCard.tsx aqui
```

## Verificacao

- [ ] As specs foram extraidas com sucesso pelo Figma MCP
- [ ] O componente gerado usa as cores exatas das specs
- [ ] O componente gerado usa as dimensoes exatas das specs
- [ ] O componente gerado usa as fontes exatas das specs
- [ ] O componente respeita os espacamentos das specs

## Analise

O codigo gerado corresponde fielmente ao design? O que ficou diferente (se algo)? Responda em 2-3 frases.
~~~~

---

## Questão 5: Validacao Visual com Playwright MCP

**Conceito-chave:** Playwright MCP (Aula 10, Seção 6).

**Objetivo:** Usar o Playwright MCP para validar visualmente se o componente gerado na Questao 4 corresponde ao design original, comparando screenshot com as specs.

**Passos de Execução:**

1. No Chat do assistente, peca: "Use o Playwright MCP para abrir o DevFlow em desenvolvimento, navegar ate a pagina que mostra o ProjectCard, e tirar um screenshot"
2. Peca ao assistente: "Compare o screenshot com as specs extraidas do Figma. As cores, dimensoes e fontes conferem?"
3. Se houver discrepancias, peca ao assistente para corrigir o componente
4. Repita a validacao ate que o componente corresponda ao design

**Entrega:** crie `entregas-aula-10/05-playwright-mcp.md`:

~~~~
## Questão 5 — Playwright MCP

## Comandos Utilizados

Cole os comandos que voce usou no Chat:

```
1. [Primeiro comando]
2. [Segundo comando]
```

## Resultado da Validacao

O Playwright MCP conseguiu abrir a pagina e tirar o screenshot? [Sim/Nao]

## Discrepancias Encontradas

| Item | Spec do Figma | Screenshot | Diferenca? |
|---|---|---|---|
| Cor de fundo |  |  |  |
| Tamanho do card |  |  |  |
| Fonte do titulo |  |  |  |
| Espacamento interno |  |  |  |

## Correcoes Aplicadas

Se houve discrepancias, descreva como voce pediu ao assistente para corrigir:

## Conclusao

Em 2-3 frases: como o Playwright MCP ajuda a garantir que a implementacao corresponde ao design?
~~~~

---

## Questão 6: Debugging de Layout com Browser MCP

**Conceito-chave:** Browser MCP (Aula 10, Seção 7).

**Objetivo:** Usar o Browser MCP para diagnosticar e corrigir um problema de layout no DevFlow, testando responsividade em diferentes viewports.

**Passos de Execução:**

1. No Chat do assistente, peca: "Use o Browser MCP para abrir o DevFlow em viewport de 375px (iPhone). O card de projeto esta quebrado? Inspecione o CSS e me mostre o problema."
2. Receba o diagnostico do assistente (o que esta quebrado e por que)
3. Peca ao assistente para corrigir o CSS
4. Teste novamente com Browser MCP em 375px e em 1024px para confirmar a correcao

**Entrega:** crie `entregas-aula-10/06-browser-mcp.md`:

~~~~
## Questão 6 — Browser MCP

## Comando Utilizado

Cole o comando exato que voce usou no Chat:

```
[Seu comando aqui]
```

## Diagnostico do Problema

Copie o diagnostico que o assistente forneceu:

**Problema identificado:**

**Elemento afetado:**

**CSS atual:**

**Causa raiz:**

## Correcao Aplicada

Copie o CSS corrigido (ou o trecho relevante):

```css
/* CSS corrigido */
```

## Teste de Responsividade

| Viewport | Antes da correcao | Depois da correcao |
|---|---|---|
| 375px (mobile) |  |  |
| 768px (tablet) |  |  |
| 1024px (desktop) |  |  |

## Conclusao

Em 2-3 frases: como o Browser MCP torna o debugging de layout mais eficiente comparado a abrir o DevTools manualmente?
~~~~

---

## Questão 7: Auditoria de MCPs no DevFlow (Projeto Progressivo)

**Conceito-chave:** Auditoria de MCPs (Aula 10, Seção 8).

**Objetivo:** Realizar uma auditoria completa dos MCPs conectados ao DevFlow, avaliando frequencia de uso, custo de tokens e decisoes de manter ou remover cada um, documentando em formato ADR.

**Passos de Execução:**

1. Liste todos os MCPs atualmente configurados no `.vscode/mcp.json`
2. Para cada MCP, avalie:
   - Frequencia de uso (quantas vezes por sessao)
   - Custo estimado de manifesto em tokens
   - Se o custo justifica o beneficio
3. Documente a decisao em formato ADR (seguindo o padrao da Aula 04)
4. Se algum MCP deve ser removido, faca a remocao

**Entrega:** crie `entregas-aula-10/07-auditoria-mcp.md`:

~~~~
## Questão 7 — Auditoria de MCPs

## Tabela de Auditoria

| MCP | Frequencia (uso/sessao) | Manifesto (tokens) | Custo beneficio | Decisao |
|---|---|---|---|---|
| Figma MCP |  |  |  |  |
| Playwright MCP |  |  |  |  |
| Browser MCP |  |  |  |  |
| Outro (se houver) |  |  |  |  |

## ADR de Decisao

Documente a decisao sobre CADA MCP no formato ADR:

```markdown
# ADR-010: Auditoria de MCPs do DevFlow

## Status
[Proposto / Aceito / Rejeitado]

## Contexto
[Dispensa do cenario que levou a esta auditoria]

## Decisao
[Manter / Remover / Substituir] o MCP [nome]

## Justificativa
[Por que esta decisao foi tomada]

## Consequencias
[O que muda com esta decisao]
```

## Plano de Acompanhamento

Defina uma periodicidade para re-auditar os MCPs (ex: a cada 2 semanas, ou a cada milestone). Responda:

**Periodicidade proposta:**

**Gatilho para auditoria extraordinaria:**

## Conclusao

Em 3-4 frases: qual o principal aprendizado desta auditoria? Vale a pena ter os 3 MCPs conectados ou algum deve ser removido?
~~~~

---

## Checklist Final: Pronto para a Aula 11?

Marque cada item so quando conseguir faze-lo **sem consultar a aula**:

- [ ] Sei explicar o que e MCP e qual problema ele resolve (arquitetura cliente-servidor)
- [ ] Sei diferenciar stdio de HTTP/SSE e quando usar cada protocolo
- [ ] Sei analisar o custo de um MCP em tokens, contexto e superficie de ataque
- [ ] Sei configurar MCPs no arquivo `.vscode/mcp.json` do projeto
- [ ] Sei usar o Figma MCP para extrair specs de design e gerar codigo React
- [ ] Sei usar o Playwright MCP para validacao visual de componentes
- [ ] Sei usar o Browser MCP para debugging de layout e responsividade
- [ ] Sei auditar MCPs conectados e decidir quando manter ou remover

> *Acertou todos? Parabens! Voce esta pronto para a **Aula 11: GitHub MCP Nativo no Pipeline**, onde voce vai configurar o GitHub MCP Server com seus 19 toolsets e aprender a gerenciar issues, PRs, actions e revisoes como operacoes nativas do assistente — tudo sem sair do editor. Travou em algum item? Releia a secao indicada na questao correspondente antes de avancar.*

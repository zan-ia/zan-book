---
titulo: "Programador Profissional com Agentes — Aula 16 — Questões de Aprendizagem"
modulo: "01"
aula: "16"
---

# Programador Profissional com Agentes Aula 16 — Questões de Aprendizagem

## Como Usar Este Arquivo

Este arquivo é o seu **checkpoint de domínio** sobre automação de navegador profissional com agentes — do Playwright MCP ao Browser MCP, passando por interceptação de rede, regressão visual e pipeline completo de CI/CD. A pergunta central é: *"eu realmente domino o ecossistema de automação de navegador com agentes de código?"*

Cada questão abaixo verifica um conceito-chave da aula. Para cada uma, você encontra:

- **Conceito-chave**: qual seção da aula revisitar se travar
- **Objetivo**: o que você precisa demonstrar
- **Passos de Execução**: o que fazer, em ordem
- **Entrega**: um template Markdown para preencher e salvar

**Como proceder:**

1. Crie uma pasta `entregas-aula-16/` na raiz do DevFlow
2. Resolva as 8 questões EM ORDEM
3. Para cada questão, crie o arquivo de entrega indicado
4. Não releia a aula — se travar, volte à seção indicada em "Conceito-chave"
5. Só avance para a próxima questão quando a atual estiver completa

**Dica:** As questões 4, 5, 6 e 8 envolvem usar o Playwright MCP. Tenha o servidor configurado (Seção 4) antes de começar. A questão 7 requer o Browser MCP com a extensão do navegador rodando. A questão 8 é o desafio final integrador.

---

## Questão 1: Mapeando as Abordagens MCP vs Framework Direto

**Conceito-chave:** Arquitetura de Automação de Navegador (Aula 16, Seção 1).

**Objetivo:** Listar as diferenças entre as duas abordagens de automação de navegador e identificar quando usar cada uma.

**Passos de Execução:**

1. Liste 5 critérios de comparação entre MCP e Framework Direto
2. Para cada critério, descreva como cada abordagem se comporta
3. Crie um cenário onde cada abordagem seria a escolha ideal
4. Explique o ciclo de interação agente-navegador

**Entrega:** crie `entregas-aula-16/01-mcp-vs-framework-direto.md`:

~~~~
## Questão 1 — Abordagens de Automação de Navegador

### Tabela Comparativa

| Critério | Abordagem MCP | Abordagem Framework Direto |
|----------|---------------|----------------------------|
| Arquitetura |  |  |
| Caso de Uso Ideal |  |  |
| Velocidade de Execução |  |  |
| Gerenciamento de Estado |  |  |
| CI/CD Readiness |  |  |

### Ciclo de Interação Agente-Navegador

Descreva as 4 etapas do ciclo:

1. **[Etapa 1]:** 
2. **[Etapa 2]:** 
3. **[Etapa 3]:** 
4. **[Etapa 4]:** 

### Análise de Cenário: Qual Abordagem Escolher?

**Cenário A — Teste de registro de usuário que precisa rodar a cada deploy em CI:**

**Abordagem escolhida:** 
**Justificativa:** 

**Cenário B — Exploração de uma página dinâmica para debugging de um bug intermitente:**

**Abordagem escolhida:** 
**Justificativa:** 

### Reflexão

[Qual critério você considera mais importante na hora de escolher entre as duas abordagens? Por quê?]
~~~~

---

## Questão 2: Engenharia com Navegador — Capacidades Profissionais

**Conceito-chave:** O Navegador como Ferramenta de Engenharia (Aula 16, Seção 2).

**Objetivo:** Classificar seis capacidades de engenharia de navegador e relacioná-las com ferramentas MCP e cenários de uso.

**Passos de Execução:**

1. Liste as 6 capacidades profissionais de engenharia de navegador
2. Para cada capacidade, descreva sua função em 1-2 frases
3. Identifique qual ferramenta MCP ou API do Playwright se relaciona com cada capacidade
4. Descreva um cenário de uso específico para cada capacidade no contexto do DevFlow

**Entrega:** crie `entregas-aula-16/02-capacidades-engenharia.md`:

~~~~
## Questão 2 — Capacidades de Engenharia de Navegador

### Tabela de Capacidades

| Capacidade | Descrição | Ferramentas MCP Relacionadas | Cenário de Uso no DevFlow |
|------------|-----------|------------------------------|---------------------------|
| Interceptação de Rede |  |  |  |
| Mocking de API |  |  |  |
| Regressão Visual |  |  |  |
| Manipulação de Storage |  |  |  |
| Console Monitoring |  |  |  |
| Tracing |  |  |  |

### Ferramentas de Depuração Profissional

Liste as três ferramentas de depuração profissional oferecidas pelo framework de automação de navegador:

1. **Ferramenta:** | **Descrição:** 
2. **Ferramenta:** | **Descrição:** 
3. **Ferramenta:** | **Descrição:** 

### Reflexão

[Por que a interceptação de rede é considerada uma capacidade crítica para testes com agentes, especialmente em aplicações como o DevFlow que consomem múltiplas APIs?]
~~~~

---

## Questão 3: Pirâmide de Testes com Automação de Navegador

**Conceito-chave:** Estratégias de Teste em Múltiplas Camadas (Aula 16, Seção 3).

**Objetivo:** Mapear onde a automação de navegador se encaixa na pirâmide de testes e identificar as lacunas de cobertura entre as camadas.

**Passos de Execução:**

1. Descreva a pirâmide de testes clássica com suas 4 camadas
2. Identifique quais camadas são cobertas pela automação de navegador
3. Para cada camada, indique a velocidade relativa e a lacuna de cobertura que a camada superior preenche
4. Explique como os agentes atuam em cada camada da pirâmide
5. Descreva como a estratificação em loops de feedback (rápido, médio, lento) otimiza a detecção de bugs

**Entrega:** crie `entregas-aula-16/03-piramide-testes.md`:

~~~~
## Questão 3 — Pirâmide de Testes com Automação de Navegador

### Diagrama da Pirâmide

Descreva a pirâmide de testes de baixo para cima:

```
[Topo]
  Camada: 
  Camada: 
  Camada: 
[Base]
  Camada: 
```

### Tabela de Camadas

| Camada | Coberta por Automação de Navegador? | Velocidade | Lacuna de Cobertura |
|--------|-------------------------------------|------------|---------------------|
| Unitários |  |  |  |
| Integração |  |  |  |
| End-to-End |  |  |  |
| Visual |  |  |  |

### Papel dos Agentes em Cada Camada

| Camada | Como o Agente Contribui |
|--------|------------------------|
| Unitários |  |
| Integração |  |
| End-to-End |  |
| Visual |  |

### Estratégia de Loops de Feedback

- **Loop rápido (a cada commit):** 
- **Loop médio (a cada pull request):** 
- **Loop lento (nightly/pre-release):** 

### Flakiness e Agentes

Explique como os agentes ajudam a mitigar flakiness em testes de navegador:

1. 
2. 
3. 

### Reflexão

[Como você estruturaria a estratégia de testes de uma aplicação como o DevFlow para garantir que uma mudança no CSS do componente TaskCard não quebre o fluxo de criação de tarefas?]
~~~~

---

## Questão 4: Configurar Playwright MCP com Capacidades Avançadas

**Conceito-chave:** Playwright MCP Profissional (Aula 16, Seção 4).

**Objetivo:** Configurar o Playwright MCP com capacidades específicas e testar as 23 ferramentas disponíveis.

**Passos de Execução:**

1. Instale o Playwright MCP globalmente via npm
2. Configure o arquivo `.vscode/mcp.json` com as capacidades `core,network,storage,vision`
3. Verifique se o servidor está rodando no VS Code (MCP: List Servers)
4. Teste a navegação no DevFlow com `browser_navigate` e capture um screenshot
5. Solicite a listagem de todas as 23 ferramentas disponíveis
6. Documente cada etapa com os comandos utilizados e resultados obtidos

**Entrega:** crie `entregas-aula-16/04-configuracao-playwright-mcp.md`:

~~~~
## Questão 4 — Configuração do Playwright MCP

### Instalação

**Comando utilizado:**
```
[Comando de instalação]
```

**Versão instalada:**
```
[Versão do Playwright MCP]
```

### Configuração do .vscode/mcp.json

```json
{
  "servers": {
    "playwright": {
      "command": "npx",
      "args": [
        "@playwright/mcp",
        "--caps",
        "core,network,storage,vision"
      ]
    }
  }
}
```

**Por que essas capacidades foram escolhidas?**
[Explique a função de cada capacidade e por que foram selecionadas juntas]

### Verificação do Servidor

- **Status do servidor no VS Code:** [Running / Stopped]
- **Comando usado para verificar:** [MCP: List Servers ou equivalente]

### Teste de Navegação

**Comando/prompt utilizado:**
```
[Prompt usado para navegar até o DevFlow]
```

**Resultado da navegação:**
- URL acessada: http://localhost:5173
- Screenshot capturado: [Sim/Não]
- Descrição do que o agente retornou: 

### Listagem das 23 Ferramentas

**Comando/prompt utilizado:**
```
[Prompt usado para listar as ferramentas]
```

**Quantidade de ferramentas listadas:** [Número]

**Organização por capacidade:**

| Capacidade | Ferramentas |
|------------|-------------|
| core |  |
| core-navigation |  |
| core-input |  |
| network |  |
| storage |  |
| vision |  |
| pdf |  |
| testing |  |
| devtools |  |
| codegen |  |

### Teste Adicional (Opcional)

Escolha uma ferramenta além de `browser_navigate` e `browser_take_screenshot` e documente o resultado:

**Ferramenta escolhida:** 
**Comando utilizado:** 
**Resultado:** 

### Conclusão

[Resumo do que você aprendeu configurando e testando o Playwright MCP]
~~~~

---

## Questão 5: Interceptação de Rede com Trace Viewer

**Conceito-chave:** Network Interception, API Mocking e Trace Viewer (Aula 16, Seção 5).

**Objetivo:** Implementar interceptação de rede no DevFlow, mockar resposta de API e depurar com Trace Viewer.

**Passos de Execução:**

1. Identifique um endpoint de API do DevFlow (ex: `GET /api/tasks`)
2. Escreva um script usando `page.route()` para interceptar o endpoint e mockar uma resposta de erro 500
3. Capture o trace completo da sessão usando `context.tracing.start()` e `context.tracing.stop()`
4. Abra o trace com `npx playwright show-trace` e analise os detalhes da requisição interceptada
5. Documente o que o Trace Viewer revelou sobre o comportamento da aplicação

**Entrega:** crie `entregas-aula-16/05-interceptacao-trace.md`:

~~~~
## Questão 5 — Interceptação de Rede e Trace Viewer

### Endpoint Identificado

- **URL do endpoint:** 
- **Método HTTP:** 
- **Dados retornados (resposta normal):** 

### Código de Interceptação

```javascript
import { test, expect } from '@playwright/test';

test('deve mostrar mensagem de erro quando API falha', async ({ page, context }) => {
  // Iniciar trace
  await context.tracing.start({ screenshots: true, snapshots: true });

  // Configurar interceptação
  await page.route('**/api/tasks', async route => {
    await route.fulfill({
      status: 500,
      contentType: 'application/json',
      body: JSON.stringify({ message: 'Erro interno do servidor' })
    });
  });

  // Navegar para a página
  await page.goto('http://localhost:5173');

  // Aguardar renderização
  await page.waitForTimeout(2000);

  // Verificar se mensagem de erro apareceu
  const errorVisible = await page.locator('text=Erro').first().isVisible().catch(() => false);
  console.log('Componente de erro visivel:', errorVisible);

  // Capturar screenshot
  await page.screenshot({ path: 'erro-interceptado.png' });

  // Parar e salvar trace
  await context.tracing.stop({ path: 'trace-interceptacao.zip' });
});
```

### Resultado da Execução

**O componente de erro foi exibido?** [Sim / Não / Parcialmente]

**Screenshot do estado:** [Incluir descrição do que aparece na screenshot]

**Se o DevFlow não tratou o erro adequadamente, o que precisaria ser implementado?**
[Descrição do tratamento de erro necessário]

### Análise do Trace Viewer

**Comando para abrir o trace:**
```bash
npx playwright show-trace trace-interceptacao.zip
```

**O que o Trace Viewer revelou:**

| Aspecto | Observação |
|---------|------------|
| Status da requisição interceptada |  |
| Timestamp da interceptação |  |
| DOM antes da requisição |  |
| DOM depois da requisição |  |
| Console errors |  |
| Snapshots disponíveis |  |

**Print screen da análise (opcional):** [Descrição do que foi visto no Trace Viewer]

### Conclusão

[O que a interceptação de rede combinada com Trace Viewer permite diagnosticar que não seria possível apenas com logs no backend?]
~~~~

---

## Questão 6: Regressão Visual com Component Testing

**Conceito-chave:** Visual Regression, Component Testing e Codegen (Aula 16, Seção 6).

**Objetivo:** Criar teste de regressão visual para componente do DevFlow e analisar diff report.

**Passos de Execução:**

1. Crie um screenshot de referência de um componente do DevFlow (ex: TaskCard)
2. Modifique o CSS do componente propositalmente (ex: altere border-radius ou cor de fundo)
3. Execute a comparação pixel a pixel com `expect(page).toHaveScreenshot()`
4. Analise o diff report gerado (referência vs atual vs diff)
5. Use o Codegen para gravar interações e gerar um script de teste automaticamente
6. Configure o threshold de diff apropriado

**Entrega:** crie `entregas-aula-16/06-regressao-visual.md`:

~~~~
## Questão 6 — Regressão Visual com Component Testing

### Screenshot de Referência

**Código do teste de referência:**

```javascript
import { test, expect } from '@playwright/test';

test('TaskCard visual regression', async ({ page }) => {
  await page.goto('http://localhost:5173');
  const card = page.locator('[data-testid="task-card"]').first();
  await expect(card).toHaveScreenshot('taskcard-ref.png');
});
```

**Comando para gerar a referência:**
```bash
npx playwright test --update-snapshots
```

**Caminho da imagem de referência gerada:** `tests/visual/__screenshots__/taskcard-ref.png`

### Modificação no CSS

**O que foi alterado:**

| Propriedade | Valor Original | Novo Valor |
|-------------|----------------|------------|
| [Propriedade CSS] |  |  |

**Arquivo CSS modificado:** 

### Comparação Visual

**Comando para executar a comparação:**
```bash
npx playwright test
```

**Resultado da execução:** [Passou / Falhou]

**Imagens geradas em test-results:**

| Imagem | Caminho | Descrição |
|--------|---------|-----------|
| Referência |  | Screenshot original |
| Atual |  | Screenshot com CSS modificado |
| Diff |  | Diferenças destacadas |

### Análise do Diff Report

**Diferenças encontradas:**

| Região do Componente | Tipo de Diferença | Severidade |
|----------------------|-------------------|------------|
|  |  |  |

**A mudança é intencional ou um bug?** 
[Justificativa]

### Configuração de Threshold

**Threshold atual:** `maxDiffPixelRatio: 0.02`

**Esse threshold é adequado?** [Sim / Não / Precisa de ajuste]

**Se precisa de ajuste, qual valor você usaria e por quê?**

### Teste com Codegen

**Comando para iniciar o Codegen:**
```bash
npx playwright codegen http://localhost:5173
```

**Interações gravadas:**
1. 
2. 
3. 

**Código gerado pelo Codegen:**

```javascript
[Cole aqui o código gerado]
```

**O código gerado foi executado sem erros?** [Sim / Não]

### Reflexão

[O que a regressão visual revela que testes funcionais tradicionais não capturam? Como você decidiria se uma diferença visual é aceitável ou não?]
~~~~

---

## Questão 7: Browser MCP e Fluxos Autenticados

**Conceito-chave:** Browser MCP, Copilot #browser e Pipeline Completo (Aula 16, Seção 7).

**Objetivo:** Configurar o Browser MCP com extensão e testar fluxo autenticado.

**Passos de Execução:**

1. Instale o pacote `@browsermcp/mcp` e configure no `.vscode/mcp.json`
2. Instale a extensão do Browser MCP no navegador (Chrome/Edge)
3. Conecte a extensão ao servidor MCP
4. Faça login no DevFlow manualmente (ou em qualquer serviço que exija autenticação)
5. Use o Browser MCP para executar comandos na sessão autenticada
6. Compare a experiência com o Playwright MCP

**Entrega:** crie `entregas-aula-16/07-browser-mcp-autenticacao.md`:

~~~~
## Questão 7 — Browser MCP e Fluxos Autenticados

### Configuração do Browser MCP

**Configuração no .vscode/mcp.json:**

```json
{
  "servers": {
    "browsermcp": {
      "command": "npx",
      "args": [
        "@browsermcp/mcp"
      ]
    }
  }
}
```

**Comando de instalação:**
```bash
npm install -g @browsermcp/mcp
```

### Extensão do Navegador

**Navegador utilizado:** [Chrome / Edge / Outro]

**Passos para instalar a extensão:**
1. 
2. 
3. 

**A extensão está conectada ao servidor?** [Sim / Não]

**Ícone da extensão aparece conectado?** [Sim / Não — descreva a cor/estado do ícone]

### Teste em Sessão Autenticada

**Serviço onde o login foi feito:** [DevFlow / Outro]

**Comando/prompt utilizado para testar:**
```
[Prompt usado para executar ação na sessão autenticada]
```

**Resultado obtido:**
[Descrição do que o agente conseguiu fazer na sessão autenticada]

### Comparação: Playwright MCP vs Browser MCP

| Aspecto | Playwright MCP | Browser MCP |
|---------|----------------|-------------|
| Inicialização do navegador |  |  |
| Estado da sessão |  |  |
| Ideal para |  |  |
| Autenticação |  |  |
| Uso em CI/CD |  |  |
| Ferramenta #browser do assistente |  |  |

### Quando Usar Cada Ferramenta

Complete a frase para cada cenário:

- **Para testes estruturados e repetíveis, uso:** 
- **Para fluxos autenticados e debugging em sessão real, uso:** 
- **Para verificações rápidas e consultas pontuais, uso:** 

### Reflexão

[Em que cenários do seu dia a dia o Browser MCP seria significativamente mais útil que o Playwright MCP? E em quais cenários o Playwright MCP ainda é insubstituível?]
~~~~

---

## Questão 8: Pipeline Completo de Automação de Navegador

**Conceito-chave:** Playwright MCP, Browser MCP, Network Interception, Visual Regression (Aula 16, Seções 4-7).

**Objetivo:** Integrar Playwright MCP, Browser MCP e testes visuais em um pipeline de CI/CD completo, documentando todo o fluxo.

**Passos de Execução:**

1. Projete um pipeline de CI/CD que integre as três ferramentas (Playwright MCP, Browser MCP, testes visuais)
2. Escreva o arquivo YAML de configuração do GitHub Actions para o pipeline
3. Descreva cada estágio do pipeline e o papel de cada ferramenta
4. Explique como os traces são capturados e armazenados como artefatos
5. Documente a estratégia de escolha de navegadores (Chromium, Firefox, WebKit)
6. Inclua um cenário de falha e como o pipeline reage

**Entrega:** crie `entregas-aula-16/08-pipeline-completo.md`:

~~~~
## Questão 8 — Pipeline Completo de Automação de Navegador

### Estratégia de Combinação de Ferramentas

Descreva como as três ferramentas se complementam em um fluxo de desenvolvimento real:

1. **Playwright MCP:** 
2. **Browser MCP:** 
3. **Ferramenta #browser do assistente de código:** 

**Fluxo típico de desenvolvimento (exemplo com teste de funcionalidade que requer login):**

| Etapa | Ferramenta | Ação |
|-------|------------|------|
| 1 |  |  |
| 2 |  |  |
| 3 |  |  |
| 4 |  |  |

### Pipeline de CI/CD — GitHub Actions

```yaml
name: Automacao de Navegador
on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 18
      - run: npm ci
      - run: npx playwright install --with-deps
      - run: npm run dev &
      - name: Executar testes de navegador
        run: npx playwright test
      - uses: actions/upload-artifact@v4
        if: always()
        with:
          name: playwright-traces
          path: test-results/
          retention-days: 7
```

### Estágios do Pipeline

| Estágio | Descrição | Ferramentas Utilizadas | Artefatos Gerados |
|---------|-----------|------------------------|-------------------|
| 1. Instalação |  |  |  |
| 2. Execução |  |  |  |
| 3. Captura de Traces |  |  |  |
| 4. Análise e Notificação |  |  |  |

### Estratégia de Navegadores

| Navegador | Quando Usar | Vantagem | Desvantagem |
|-----------|-------------|----------|-------------|
| Chromium |  |  |  |
| Firefox |  |  |  |
| WebKit |  |  |  |

### Cenário de Falha

**Descreva um cenário onde o pipeline falha:**

**Causa provável:** 

**Como o pipeline reage:** 

**Como o Trace Viewer ajuda a diagnosticar:** 

### Integração com o Continual Harness

Explique como o resultado dos testes de automação de navegador pode alimentar refinamentos automáticos no harness:

[Resposta aqui]

### Conclusão

[Resumo do que você aprendeu sobre como integrar todo o ecossistema de automação de navegador em um pipeline profissional]
~~~~

---

## Checklist Final: Pronto para a Próxima Aula?

Antes de seguir em frente, verifique se você consegue fazer cada um dos itens abaixo sem consultar a aula:

- [ ] **Distinguir** as duas abordagens de automação de navegador — MCP vs framework direto — e escolher a adequada para cada contexto
- [ ] **Explicar** o ciclo de interação agente-navegador: snapshot, decisão, ação, validação
- [ ] **Listar** as 6 capacidades profissionais de engenharia de navegador (interceptação, mocking, regressão visual, storage, console, tracing)
- [ ] **Mapear** onde a automação de navegador se encaixa na pirâmide de testes (E2E e visual) e as lacunas de cobertura
- [ ] **Configurar** o Playwright MCP no `.vscode/mcp.json` com capacidades específicas via `--caps`
- [ ] **Utilizar** as 23 ferramentas do Playwright MCP para navegação, inspeção, rede e armazenamento
- [ ] **Implementar** interceptação de rede com `page.route()` e mockar respostas de API
- [ ] **Capturar e analisar** traces com o Trace Viewer para depuração profissional
- [ ] **Criar** testes de regressão visual com `expect(page).toHaveScreenshot()` e configurar threshold de diff
- [ ] **Usar** o Codegen para gerar scripts de teste a partir de interações gravadas
- [ ] **Configurar** o Browser MCP com extensão para fluxos autenticados
- [ ] **Comparar** Playwright MCP, Browser MCP e ferramenta `#browser` e escolher a ferramenta certa para cada cenário
- [ ] **Projetar** um pipeline de CI/CD completo que integra automação de navegador, traces e relatórios visuais

**Parabéns!** Você completou a Aula 16 — uma jornada avançada pelo ecossistema de automação de navegador profissional com agentes. Do Playwright MCP ao Browser MCP, passando por interceptação de rede, regressão visual e pipeline completo de CI/CD, você agora domina as ferramentas que separam um programador profissional de um entusiasta.

Na próxima aula, você explorará a criação de servidores MCP customizados para ferramentas específicas do seu domínio e a orquestração multi-agente onde múltiplos agentes controlam navegadores em paralelo. Prepare-se para elevar ainda mais o nível de automação do DevFlow.

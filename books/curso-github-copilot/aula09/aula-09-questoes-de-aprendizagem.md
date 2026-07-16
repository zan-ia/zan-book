---
titulo: "Programador Profissional com Agentes — Aula 09 — Questões de Aprendizagem"
modulo: "01"
aula: "09"
---

# Programador Profissional com Agentes Aula 09 — Questões de Aprendizagem

## Como Usar Este Arquivo

Este arquivo e o seu **checkpoint de aprendizagem** da Aula 09. A pergunta central e: *"eu realmente entendi a materia?"*

Cada questao abaixo verifica um conceito-chave da aula. Para cada uma, voce encontra:

- **Conceito-chave**: qual secao da aula revisitar se travar
- **Objetivo**: o que voce precisa demonstrar
- **Passos de Execucao**: o que fazer, em ordem
- **Entrega**: um template Markdown para preencher e salvar

**Como proceder:**

1. Crie uma pasta `entregas-aula-09/` na raiz do DevFlow
2. Resolva as 8 questoes EM ORDEM
3. Para cada questao, crie o arquivo de entrega indicado
4. Nao releia a aula — se travar, volte a secao indicada em "Conceito-chave"
5. So avance para a Aula 10 quando completar todas as 8 questoes por conta propria

**Dica:** As questoes 2, 5 e 6 envolvem criacao de arquivos no diretorio `.github/skills/` do DevFlow. Crie os arquivos dentro do projeto e verifique que funcionam.

---

## Questão 1: Regras Permanentes vs Skills — Quando Usar Cada Um

**Conceito-chave:** Regras permanentes vs conhecimento sob demanda (Aula 09, Seção 1).

**Objetivo:** Classificar corretamente 6 cenarios como adequados para regras permanentes ou para skills, justificando cada escolha com base no custo de tokens e frequencia de uso.

**Passos de Execução:**

1. Leia cada cenario abaixo
2. Classifique como **Regra Permanente** ou **Skill**
3. Justifique sua classificacao em 1-2 frases

**Cenarios:**

```
Cenário A: A stack tecnologica do projeto (React + Express + MUI + PostgreSQL).

Cenário B: A documentacao completa do metodo `array.sort()` com exemplos de comparator function.

Cenário C: O padrao de commit do time (conventional commits com tipos feat, fix, chore).

Cenário D: A referencia de API do hook `useReducer` com parametros e retorno.

Cenário E: As regras de seguranca do projeto (nunca commitar secrets, usar variaveis de ambiente).

Cenário F: Um guia passo a passo de como configurar o Context7 no projeto.
```

**Entrega:** crie `entregas-aula-09/01-regras-vs-skills.md`:

~~~~
## Questão 1 — Regras Permanentes vs Skills

## Tabela de Classificacao

| Cenario | Tipo (Regra Permanente / Skill) | Justificativa |
|---|---|---|
| Cenário A |  |  |
| Cenário B |  |  |
| Cenário C |  |  |
| Cenário D |  |  |
| Cenário E |  |  |
| Cenário F |  |  |

## Conclusao

Em 2-3 frases: qual criterio principal voce usou para decidir entre regra permanente e skill em cada cenario?
~~~~

---

## Questão 2: Anatomia de uma Skill — Criando do Zero

**Conceito-chave:** Anatomia de uma skill (Aula 09, Seção 2).

**Objetivo:** Criar um arquivo de skill completo com frontmatter YAML valido e corpo markdown, demonstrando que voce entende a estrutura e os campos obrigatorios.

**Passos de Execução:**

1. Crie o diretorio `.github/skills/lodash-docs/` no DevFlow
2. Crie o arquivo `SKILL.md` dentro dele com:
   - Frontmatter YAML com `name` e `description` validos
   - Corpo markdown com documentacao basica da biblioteca Lodash (metodos `_.get`, `_.set`, `_.merge` e `_.debounce`)
3. Verifique que o frontmatter esta formatado corretamente (delimitadores `---`)

**Entrega:** crie `entregas-aula-09/02-anatomia-skill.md`:

~~~~
## Questão 2 — Anatomia de uma Skill

## Conteudo do Arquivo

Copie o conteudo completo do arquivo `.github/skills/lodash-docs/SKILL.md` que voce criou:

```yaml
# Seu arquivo SKILL.md completo aqui
```

## Verificacao

- [ ] O frontmatter contem o campo `name`
- [ ] O frontmatter contem o campo `description`
- [ ] O nome da skill e descritivo e sem espacos
- [ ] A descricao tem ate 200 caracteres e descreve o proposito
- [ ] O corpo markdown cobre os 4 metodos solicitados
- [ ] O arquivo esta no diretorio `.github/skills/lodash-docs/SKILL.md`

## Reflexao

O que aconteceria se voce criasse o arquivo sem o campo `description` no frontmatter? Explique em 1-2 frases.
~~~~

---

## Questão 3: Ciclo de Vida da Skill — Rastreando os Estados

**Conceito-chave:** Ciclo de vida da skill — listada, carregada, ativa e descartada (Aula 09, Seção 3).

**Objetivo:** Simular uma sessao de desenvolvimento e mapear em que estado cada skill se encontra em cada momento, demonstrando entendimento dos quatro estados e do consumo de tokens.

**Passos de Execução:**

1. Leia o cenario abaixo
2. Para cada momento (M1 a M6), identifique em que estado esta cada skill
3. Calcule o consumo relativo de tokens em cada momento

**Cenario:**

```
Voce tem 3 skills no catalogo: react-docs (50 linhas), express-docs (30 linhas), mui-docs (40 linhas).

M1: Inicio da sessao. Nenhuma skill foi solicitada ainda.
M2: Voce pede "Use a skill de React para criar um componente de formulario."
M3: O assistente carrega a skill react-docs e comeca a gerar codigo.
M4: Voce muda de tarefa e pede "Agora crie uma rota no Express usando a skill."
M5: O assistente descarta react-docs e carrega express-docs.
M6: Fim da sessao. Todas as skills voltam ao catalogo.
```

**Entrega:** crie `entregas-aula-09/03-ciclo-vida-skills.md`:

~~~~
## Questão 3 — Ciclo de Vida da Skill

## Tabela de Estados

| Momento | Skill react-docs | Skill express-docs | Skill mui-docs | Tokens consumidos (estimar) |
|---|---|---|---|---|
| M1 |  |  |  |  |
| M2 |  |  |  |  |
| M3 |  |  |  |  |
| M4 |  |  |  |  |
| M5 |  |  |  |  |
| M6 |  |  |  |  |

Legenda: L = Listada, C = Carregada, A = Ativa, D = Descartada

## Estimativa de Tokens

Explique como voce estimou o consumo de tokens em cada momento. O que determina se o consumo e alto ou baixo?

## Conclusao

Em 2-3 frases: por que o ciclo de vida em quatro estados e importante para a eficiencia do assistente?
~~~~

---

## Questão 4: Documentação Viva — Identificando Alucinações

**Conceito-chave:** Documentacao viva e alucinacao de API (Aula 09, Seção 4).

**Objetivo:** Identificar 3 alucinacoes de API em um trecho de codigo gerado sem skill e explicar como a documentacao viva preveniria cada uma.

**Passos de Execução:**

1. Leia o trecho de codigo abaixo
2. Identifique 3 metodos, parametros ou comportamentos que nao existem no React real
3. Para cada uma, explique o que a documentacao viva corrigiria

**Codigo com alucinacoes:**

```jsx
import { useState, useEffect, useLocalStorage } from 'react';

function SettingsPanel() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  const [fontSize] = useState(16);

  useEffect(() => {
    document.title = `Configuracoes - Tema: ${theme}`;
  }, []); // eslint-disable-line

  return (
    <div>
      <p>O tema atual e: {theme}</p>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Alternar Tema
      </button>
    </div>
  );
}
```

**Entrega:** crie `entregas-aula-09/04-documentacao-viva.md`:

~~~~
## Questão 4 — Documentação Viva e Alucinações

## Tabela de Alucinacoes

| # | Alucinacao (o que nao existe) | Por que e uma alucinacao | Como a documentacao viva corrigiria |
|---|---|---|---|
| 1 |  |  |  |
| 2 |  |  |  |
| 3 |  |  |  |

## Codigo Corrigido

Reescreva o trecho acima corrigindo todas as alucinacoes (sem usar a aula):

```jsx
// Seu codigo corrigido aqui
```

## Conclusao

Em 2-3 frases: qual a relacao entre documentacao viva e prevencao de alucinacoes?
~~~~

---

## Questão 5: Context7 — Consultando Documentação Oficial

**Conceito-chave:** Context7 como ferramenta de consulta (Aula 09, Seção 5).

**Objetivo:** Usar o Context7 para consultar a documentacao oficial de duas bibliotecas, extrair um trecho de API especifico e documentar o resultado.

**Passos de Execução:**

1. No terminal do DevFlow, use o Context7 para resolver o ID da biblioteca de formularios React Hook Form
2. Consulte o Context7 sobre como usar `useForm` e `register` do React Hook Form
3. Use o Context7 para consultar a documentacao do componente `Pagination` do MUI
4. Documente os resultados e compare com o que voce sabe da biblioteca

**Entrega:** crie `entregas-aula-09/05-context7-consulta.md`:

~~~~
## Questão 5 — Consulta com Context7

## Consulta 1: React Hook Form

**Comando executado:**

```
npx context7 resolve "React Hook Form"
```

**ID retornado (ou similar encontrado):**

**Consulta a documentacao:**

```
npx context7 query "/ID" "How to use useForm and register"
```

**Resultado obtido (resumo):**

**Trecho de codigo extraido:**

```jsx
// Codigo baseado na documentacao oficial
```

## Consulta 2: MUI Pagination

**Comando executado:**

```
npx context7 query "/mui/material-ui" "Pagination component props and usage"
```

**Resultado obtido (resumo):**

**Props principais do componente Pagination:**

| Prop | Tipo | Descricao |
|---|---|---|
|  |  |  |
|  |  |  |
|  |  |  |

## Comparacao

O resultado do Context7 corresponde ao que voce esperava? Houve alguma surpresa? Responda em 2-3 frases.
~~~~

---

## Questão 6: Skill de Documentação para React Router (Projeto Progressivo)

**Conceito-chave:** Criando skills no DevFlow (Aula 09, Seção 6).

**Objetivo:** Criar uma skill de documentacao para React Router no projeto DevFlow, seguindo o mesmo padrao das skills de React, Express e MUI criadas na aula.

**Passos de Execução:**

1. Crie o diretorio `.github/skills/react-router-docs/` no DevFlow
2. Crie o arquivo `SKILL.md` com frontmatter valido e documentacao cobrindo:
   - Componentes principais: `BrowserRouter`, `Routes`, `Route`, `Link`, `NavLink`
   - Hooks: `useParams`, `useNavigate`, `useLocation`
   - Exemplo de configuracao de rotas com parametros
3. Verifique que a estrutura de diretorios segue o padrao da aula
4. Verifique se o assistente consegue catalogar a skill (frontmatter completo)

**Entrega:** crie `entregas-aula-09/06-skill-react-router.md`:

~~~~
## Questão 6 — Skill de Documentação para React Router

## Conteudo do SKILL.md

Copie o conteudo completo do arquivo `.github/skills/react-router-docs/SKILL.md`:

```yaml
# Seu SKILL.md aqui
```

## Estrutura de Diretorios

```
.github/skills/
├── react-docs/
│   └── SKILL.md
├── express-docs/
│   └── SKILL.md
├── mui-docs/
│   └── SKILL.md
└── react-router-docs/
    └── SKILL.md
```

## Verificacao

- [ ] O diretorio `react-router-docs/` existe dentro de `.github/skills/`
- [ ] O arquivo `SKILL.md` existe dentro de `react-router-docs/`
- [ ] O frontmatter tem `name` e `description` validos
- [ ] A skill cobre os 3 componentes principais (BrowserRouter, Routes, Route)
- [ ] A skill cobre os 3 hooks (useParams, useNavigate, useLocation)
- [ ] Ha pelo menos um exemplo de configuracao de rotas
- [ ] A skill segue o mesmo formato das skills criadas na aula

## Reflexao

Por que cada skill deve ficar em seu proprio subdiretorio em vez de todas em um unico arquivo? Responda em 2-3 frases.
~~~~

---

## Questão 7: Usando Skills para Implementar Navegação entre Projetos

**Conceito-chave:** Implementacao guiada por skills (Aula 09, Seção 7).

**Objetivo:** Usar a skill de React Router (criada na Questao 6) combinada com a skill de React para implementar um componente de navegacao que lista projetos e permite navegar para a pagina de detalhes de cada um.

**Passos de Execução:**

1. No Chat do assistente, peca: "Usando as skills de documentacao do React e do React Router como referencia, crie um componente `ProjectNavigation` que exibe uma lista de links para todos os projetos. Cada link deve usar `Link` do React Router e navegar para `/projetos/:id`."
2. Verifique que o assistente carregou as skills (observe se o codigo gerado usa as APIs exatas da documentacao)
3. Teste o componente no frontend do DevFlow
4. Documente o resultado e analise se o assistente usou as skills corretamente

**Entrega:** crie `entregas-aula-09/07-navegacao-skills.md`:

~~~~
## Questão 7 — Navegação com Skills

## Comando Utilizado

Cole o comando exato que voce usou no Chat:

```
[Seu comando aqui]
```

## Codigo Gerado

Copie o codigo gerado pelo assistente:

```jsx
// Codigo gerado
```

## Analise

O assistente usou as APIs corretas do React Router? [Sim / Nao / Parcialmente]

**Acertos:**

- [item que ficou correto]

**Problemas encontrados (se houver):**

- [item com problema e como corrigiu]

## Teste Manual

O componente funcionou no frontend? [Sim/Nao]

Se nao, o que deu errado e como voce corrigiu?

## Conclusao

Em 2-3 frases: como as skills de documentacao ajudaram (ou deixaram de ajudar) o assistente a gerar codigo correto?
~~~~

---

## Questão 8: Decidindo entre Skill e Instrução Permanente

**Conceito-chave:** Quando criar uma skill vs quando adicionar uma regra permanente (Aula 09, Seções 1 e 7).

**Objetivo:** Analisar 4 cenarios de conhecimento e decidir se cada um deve virar uma skill ou uma instrucao permanente, justificando a decisao com base nos criterios da aula.

**Passos de Execução:**

1. Leia cada cenario de conhecimento abaixo
2. Decida: **Instrucao Permanente** ou **Skill**
3. Justifique com base em: frequencia de uso, estabilidade do conhecimento e custo de tokens

**Cenarios:**

```
Cenario A: A senha do banco de dados de producao e como conectar via SSH.

Cenario B: A documentacao do metodo `fs.readFile` do Node.js (sincrono e assincrono).

Cenario C: A regra de que todo PR deve ter no minimo 1 reviewer aprovado.

Cenario D: A referencia de como configurar autenticacao com JWT no Express, incluindo exemplos de middleware e renovacao de token.
```

**Entrega:** crie `entregas-aula-09/08-decisao-skill-vs-regra.md`:

~~~~
## Questao 8 — Skill vs Instrucao Permanente

## Tabela de Decisoes

| Cenario | Decisao | Frequencia de uso | Estabilidade do conhecimento | Justificativa |
|---|---|---|---|---|
| A |  |  |  |  |
| B |  |  |  |  |
| C |  |  |  |  |
| D |  |  |  |  |

## Matriz de Decisao

Para cada cenario, preencha:

**Cenario A:**

Pergunta: Este conhecimento muda com frequencia? [Sim/Nao]
Pergunta: Este conhecimento e necessario em toda sessao? [Sim/Nao]
Pergunta: E seguro expor este conhecimento ao assistente? [Sim/Nao]
Decisao final:

**Cenario B:**

Pergunta: Este conhecimento muda com frequencia? [Sim/Nao]
Pergunta: Este conhecimento e necessario em toda sessao? [Sim/Nao]
Decisao final:

**Cenario C:**

Pergunta: Este conhecimento muda com frequencia? [Sim/Nao]
Pergunta: Este conhecimento e necessario em toda sessao? [Sim/Nao]
Decisao final:

**Cenario D:**

Pergunta: Este conhecimento muda com frequencia? [Sim/Nao]
Pergunta: Este conhecimento e necessario em toda sessao? [Sim/Nao]
Decisao final:

## Conclusao

Em 2-3 frases: qual o criterio mais importante para decidir entre skill e instrucao permanente?
~~~~

---

## Checklist Final: Pronto para a Aula 10?

Marque cada item so quando conseguir faze-lo **sem consultar a aula**:

- [ ] Sei diferenciar regras permanentes de skills, sabendo quando usar cada uma com base em custo de tokens e frequencia de uso
- [ ] Sei criar um arquivo de skill completo com frontmatter YAML valido (name + description) e corpo markdown
- [ ] Sei explicar os quatro estados do ciclo de vida de uma skill (listada, carregada, ativa, descartada) e o consumo de tokens em cada um
- [ ] Sei identificar alucinacoes de API em codigo gerado e explicar como a documentacao viva as previne
- [ ] Sei usar o Context7 para consultar documentacao oficial de bibliotecas e extrair informacoes de API
- [ ] Sei criar skills de documentacao para bibliotecas no diretorio `.github/skills/` do projeto
- [ ] Sei usar skills como referencia para que o assistente implemente funcionalidades com APIs corretas
- [ ] Sei decidir quando criar uma skill versus quando adicionar uma instrucao permanente

> *Acertou todos? Parabens! Voce esta pronto para a **Aula 10: MCPs para Frontend — Do Prototipo ao Codigo**, onde voce vai conectar ferramentas externas como Figma, Playwright e Browser ao fluxo, permitindo que o assistente extraia specs de design, execute testes visuais e debugue o layout diretamente do editor. Travou em algum item? Releia a secao indicada na questao correspondente antes de avancar.*

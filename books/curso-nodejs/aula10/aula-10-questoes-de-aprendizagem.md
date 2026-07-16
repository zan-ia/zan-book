---
titulo: "Node.js — Do Zero ao Servidor Express — Aula 10 — Questões de Aprendizagem"
modulo: "01"
aula: "10"
---

# Node.js — Do Zero ao Servidor Express Aula 10 — Questões de Aprendizagem

## Como Usar Este Arquivo

Este arquivo é o checkpoint de aprendizagem da Aula 10. Cada questão testa um conceito central da aula. A pergunta que você deve responder é: *"eu realmente entendi a matéria a ponto de aplicar sem consultar?"*

Faça na ordem. Cada questão tem um **Conceito-chave**, um **Objetivo**, os **Passos de Execução** e um template de **Entrega** para você preencher. Crie a pasta `entregas-aula-10/` e salve cada entrega como `10-nome-do-arquivo.md`. Só avance para a questão seguinte quando completar a anterior.

---

## Questão 1: Identificar o Problema do Monolito

**Conceito-chave:** Monolito vs Camadas (Aula 10, Seção 1).

**Objetivo:** Demonstrar que você reconhece os problemas de um arquivo único e por que a separação em camadas é necessária.

**Passos de Execução:**

1. Leia o cenário abaixo.
2. Liste 4 problemas que surgem quando um servidor Express monolítico cresce.
3. Para cada problema, explique como a arquitetura em camadas resolve.

**Cenário:** Um servidor Express com 30 rotas, 15 middlewares, validação inline, lógica de negócio nos handlers e acesso direto a arquivo JSON — tudo no mesmo arquivo de 800 linhas. Dois desenvolvedores precisam trabalhar nele simultaneamente.

**Entrega:** crie `entregas-aula-10/10-monolito-vs-camadas.md`:

~~~~
# Questão 1 — Monolito vs Camadas

## Problemas do Arquivo Único

| # | Problema | Como a arquitetura em camadas resolve |
|---|---|---|
| 1 | | |
| 2 | | |
| 3 | | |
| 4 | | |

## Conclusão
Em 2-3 frases, explique por que a separação em camadas é importante mesmo para projetos pequenos.
~~~~

---

## Questão 2: Mapear Responsabilidades no Restaurante

**Conceito-chave:** Separation of Concerns (Aula 10, Seção 2).

**Objetivo:** Relacionar cada papel do restaurante com a camada correspondente no código e justificar a separação.

**Passos de Execução:**

1. Preencha a tabela relacionando cada papel do restaurante com a camada de código.
2. Para cada par, escreva uma frase explicando o que acontece se a responsabilidade for violada.

**Entrega:** crie `entregas-aula-10/10-separation-of-concerns.md`:

~~~~
# Questão 2 — Separation of Concerns

## Mapeamento Restaurante → Código

| Papel no Restaurante | Camada no Código | Responsabilidade |
|---|---|---|
| Garçom | | |
| Chef | | |
| Despensa | | |

## Violações

**O que acontece se o Controller (garçom) contiver regras de negócio (cozinhar)?**

**O que acontece se o Service (chef) acessar req/res (atender mesas)?**

**O que acontece se o Repository (despensa) decidir o cardápio (lógica de negócio)?**
~~~~

---

## Questão 3: Fluxo da Requisição na Arquitetura 3-Tier

**Conceito-chave:** Arquitetura 3-Tier (Aula 10, Seção 3).

**Objetivo:** Descrever o fluxo completo de uma requisição POST através das três camadas.

**Passos de Execução:**

1. Considere uma requisição `POST /tarefas` com body `{"titulo": "Estudar Node.js"}`.
2. Descreva, em ordem, por quais camadas e arquivos a requisição passa.
3. Para cada camada, especifique o que ela faz com os dados (recebe, transforma, delega, retorna).

**Entrega:** crie `entregas-aula-10/10-fluxo-3-tier.md`:

~~~~
# Questão 3 — Fluxo na Arquitetura 3-Tier

## Requisição: POST /tarefas

| Ordem | Camada | Arquivo | O que faz com os dados |
|---|---|---|---|
| 1 | | | |
| 2 | | | |
| 3 | | | |
| 4 | | | |
| 5 | | | |

## Fluxo textual

Descreva o caminho completo em 4-5 frases, desde a chegada da requisição HTTP até a resposta.
~~~~

---

## Questão 4: Projetar um Router + Controller

**Conceito-chave:** Router + Controller (Aula 10, Seção 5).

**Objetivo:** Projetar as camadas de rota e controller para um novo recurso — Categorias.

**Passos de Execução:**

1. Crie as estruturas de `routes/categorias.js` e `controllers/categoriasController.js`.
2. O recurso Categorias tem 4 operações: listar, criar, atualizar, remover.
3. O router deve usar `express.Router()` com caminhos relativos.
4. O controller deve conter apenas a tradução HTTP — sem lógica de negócio.
5. Em vez de implementar a lógica real, use `res.json({ mensagem: '...' })` como placeholder.

**Entrega:** crie `entregas-aula-10/10-router-controller-categorias.md`:

~~~~
# Questão 4 — Router + Controller para Categorias

## routes/categorias.js

```javascript
// Cole aqui o código do router
```

## controllers/categoriasController.js

```javascript
// Cole aqui o código do controller
```

## Como testar

Explique como montar esse router no app.js e qual URL testar cada operação.
~~~~

---

## Questão 5: Service com Regra de Negócio Pura

**Conceito-chave:** Service Layer (Aula 10, Seção 6).

**Objetivo:** Criar um service para o recurso Categorias que valida e aplica regras de negócio sem depender de HTTP.

**Passos de Execução:**

1. Crie `services/categoriaService.js` com uma factory `criarCategoriaService({ repo })`.
2. Implemente o método `criar(dados)` que valida: nome é obrigatório (string, min 3 caracteres), cor é opcional mas se existir deve ser hexadecimal válido (regex: `/^#[0-9A-Fa-f]{6}$/`).
3. Implemente o método `listar()` que apenas delega para o repo.
4. O service não deve importar HTTP em nenhum lugar.

**Entrega:** crie `entregas-aula-10/10-service-categorias.md`:

~~~~
# Questão 5 — Service para Categorias

## serviços/categoriaService.js

```javascript
// Cole aqui o código completo do service com factory
```

## Teste unitário mental

Descreva como você testaria o método `criar()` sem precisar de HTTP:

1. Que mock você criaria para o repositório?
2. Quais cenários de validação você testaria?
~~~~

---

## Questão 6: Repository com Interface Consistente

**Conceito-chave:** Repository Pattern (Aula 10, Seções 6-8).

**Objetivo:** Implementar um repository para Categorias que gerencia um arquivo JSON com `fs.promises`.

**Passos de Execução:**

1. Crie `repositories/categoriaRepository.js` com uma factory `criarCategoriaRepository()`.
2. O repository deve gerenciar o arquivo `data/categorias.json`.
3. Implemente os métodos: `listar()`, `criar(dados)`, `atualizar(id, dados)`, `remover(id)`.
4. Use `fs.promises` (readFile / writeFile) — sem `readFileSync`.
5. O método `criar` deve gerar um id único baseado no timestamp + Math.random.

**Entrega:** crie `entregas-aula-10/10-repository-categorias.md`:

~~~~
# Questão 6 — Repository para Categorias

## repositories/categoriaRepository.js

```javascript
// Cole aqui o código completo do repository com fs.promises
```

## Contrato da interface

Liste os 4 métodos e suas assinaturas:

| Método | Parâmetros | Retorno |
|---|---|---|
| | | |
| | | |
| | | |
| | | |
~~~~

---

## Questão 7: Montagem com DI Manual

**Conceito-chave:** Dependency Injection Manual (Aula 10, Seção 7).

**Objetivo:** Conectar todas as camadas do recurso Categorias em um app.js, usando injeção manual de dependências.

**Passos de Execução:**

1. Escreva o trecho do `app.js` que conecta repository → service → controller → router para o recurso Categorias.
2. Monte o router em `/categorias`.
3. Explique em uma frase como trocar o repository de JSON para SQLite sem alterar as outras camadas.

**Entrega:** crie `entregas-aula-10/10-di-manual-categorias.md`:

~~~~
# Questão 7 — Injeção Manual para Categorias

## app.js (trecho)

```javascript
// Cole aqui o trecho do app.js que monta o recurso Categorias
```

## Troca de implementação

Explique em 2-3 frases qual única linha do app.js precisa mudar para trocar o armazenamento de JSON para SQLite.

## Diagrama de dependências

Desenhe o fluxo de dependências usando setas textuais (A → B significa "A depende de B"):

(escreva aqui — ex: app.js → Router → Controller → Service → Repository)

---

## Questão 8: Refletir sobre a Jornada do Módulo

**Conceito-chave:** Síntese do módulo (Aula 01 a 10).

**Objetivo:** Sintetizar o que você construiu ao longo das 10 aulas do módulo Node.js.

**Passos de Execução:**

1. Liste os 5 principais marcos do módulo (o que você aprendeu em cada fase).
2. Para cada marco, escreva uma frase sobre como ele se conecta com a arquitetura final desta aula.
3. Escreva um parágrafo sobre o que você pretende aprender no próximo módulo (Banco de Dados SQL).

**Entrega:** crie `entregas-aula-10/10-sintese-modulo.md`:

~~~~
# Questão 8 — Síntese do Módulo Node.js

## 5 Marcos do Módulo

| Aula | Marco | Conexão com a arquitetura em camadas |
|---|---|---|
| Aula 04 | | |
| Aula 06 | | |
| Aula 07 | | |
| Aula 09 | | |
| Aula 10 | | |

## Próximos Passos

O que você espera aprender no módulo Banco de Dados SQL? Como a arquitetura em camadas desta aula prepara o terreno?
~~~~

---

## Checklist Final: Pronto para o Próximo Módulo?

Marque cada item só quando conseguir fazê-lo **sem consultar a aula**:

- [ ] Explicar por que um arquivo único de 150+ linhas não escala e quais problemas surgem
- [ ] Descrever a analogia do restaurante e mapear cada papel para uma camada de código
- [ ] Desenhar mentalmente o fluxo de uma requisição através das 3 camadas (Apresentação → Negócio → Dados)
- [ ] Criar um router com `express.Router()` e conectar a um controller
- [ ] Implementar um service em JavaScript puro com regras de negócio validadas
- [ ] Construir um repository que encapsula acesso a dados com interface Promise-based
- [ ] Aplicar DI manual conectando repository → service → controller → router via factory functions
- [ ] Diferenciar `app.js` (configuração) de `server.js` (inicialização)
- [ ] Explicar como trocar o armazenamento de JSON para SQLite sem alterar service ou controller
- [ ] Listar os 5 principais marcos do módulo Node.js e como eles se conectam

> *Acertou todos? Parabéns — você completou o módulo Node.js — Do Zero ao Servidor Express! Você está pronto para o módulo Banco de Dados SQL, onde vai trocar o JSON por bancos reais mantendo a mesma arquitetura em camadas. Travou em algum? Releia a seção indicada na questão correspondente antes de avançar."

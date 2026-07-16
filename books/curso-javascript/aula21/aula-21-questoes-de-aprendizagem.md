---
titulo: "JavaScript — Do Zero ao Profissional Aula 21 — Questoes de Aprendizagem"
modulo: "01"
aula: "20"
---

# JavaScript — Do Zero ao Profissional Aula 21 — Questoes de Aprendizagem

## Como Usar Este Arquivo

Este arquivo e o checkpoint de dominio da Aula 21. Cada questão testa um conceito-chave da aula. O objetivo e responder a pergunta: "eu realmente entendi a materia?"

**Como proceder:**

1. Complete as questoes NA ORDEM — elas seguem a progressão da aula.
2. Cada questão tem um **Conceito-chave** (seção da aula), **Objetivo**, **Passos de Execução** e um template de **Entrega**.
3. Crie uma pasta `entregas-aula20/` no seu diretorio de estudos.
4. Para cada questão, crie o arquivo de entrega seguindo o template fornecido.
5. Trave em algo? Releia a seção indicada em **Conceito-chave**.
6. So avance para a Aula 22 quando completar TODAS as questoes.

---

## Questao 1: Acessando Formularios com document.forms e FormData

**Conceito-chave:** Acesso a formularios e extracao de dados (Aula 21, Secao 3).

**Objetivo:** Demonstrar que voce sabe acessar um formulario HTML por `document.forms`, extrair dados com `FormData` e iterar os pares nome-valor.

**Passos de Execução:**

1. Crie um arquivo HTML com um formulario `<form name="pedido">` contendo tres campos: `produto` (text), `quantidade` (number), e `observacoes` (textarea).
2. Adicione um `<button type="submit">Enviar Pedido</button>`.
3. No JavaScript, acesse o formulario via `document.forms['pedido']`.
4. No evento `submit`, use `event.preventDefault()` e extraia os dados com `new FormData(form)`.
5. Exiba cada par nome-valor no console com `for...of`.

**Entrega:** crie `entregas-aula20/01-formdata.md`:

~~~~
# Questao 1 — Acessando Formularios com document.forms e FormData

## Codigo HTML

[Cole aqui o conteudo completo do seu arquivo HTML]

## Codigo JavaScript

[Cole aqui o trecho JavaScript de acesso e extracao]

## Saida do Console

[Cole aqui a saida que apareceu no console ao submeter o formulario com dados preenchidos]

## Conclusao

Em 2-3 frases: como `FormData` simplifica a extracao de dados comparado a acessar cada campo individualmente?
~~~~

---

## Questao 2: Validacao Nativa com Atributos HTML

**Conceito-chave:** Atributos de validacao nativa e pseudo-classes CSS (Aula 21, Secao 4).

**Objetivo:** Construir um formulario que use apenas atributos HTML e CSS para validar campos, sem JavaScript.

**Passos de Execução:**

1. Crie um formulario `<form name="cadastro">` com:
   - `nome`: required, minlength="3"
   - `email`: type="email", required
   - `cpf`: pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" (formato XXX.XXX.XXX-XX)
   - `idade`: type="number", min="18", max="120"
2. Adicione CSS com `:valid` (borda verde) e `:invalid` (borda vermelha).
3. Teste a submissao com campos vazios, campo invalido (CPF no formato errado) e campos validos.
4. NAO use JavaScript para validacao — apenas HTML + CSS.

**Entrega:** crie `entregas-aula20/02-validacao-nativa.md`:

~~~~
# Questao 2 — Validacao Nativa com Atributos HTML

## Codigo HTML

[Cole aqui o HTML completo do formulario]

## Codigo CSS

[Cole aqui o CSS com :valid e :invalid]

## Testes Realizados

| Teste | Comportamento Observado |
|---|---|
| Submeter com campos vazios | [descreva] |
| Submeter com CPF invalido "12345678901" | [descreva] |
| Submeter com todos os campos validos | [descreva] |
| Campo idade com valor 15 | [descreva] |

## Conclusao

Em 2-3 frases: qual a vantagem de usar validacao nativa sem JavaScript para casos simples?
~~~~

---

## Questao 3: Validacao Customizada com Constraint Validation API

**Conceito-chave:** `checkValidity`, `reportValidity`, `setCustomValidity` e `ValidityState` (Aula 21, Secao 5).

**Objetivo:** Implementar validacao customizada que depende de dois campos e diagnosticar erros com `ValidityState`.

**Passos de Execução:**

1. Crie um formulario com campos `senha` (password, required, minlength="8") e `confirmar` (password, required).
2. No evento `input` do campo `confirmar`, implemente:
   - Se `confirmar.value !== senha.value`, chame `setCustomValidity('Senhas nao conferem')`
   - Se forem iguais, chame `setCustomValidity('')`
3. A cada `input`, diagnostique com `campo.validity` se o erro e `customError`, `valueMissing` ou `tooShort`.
4. Exiba o diagnostico no console com `console.table(campo.validity)`.

**Entrega:** crie `entregas-aula20/03-validacao-customizada.md`:

~~~~
# Questao 3 — Validacao Customizada com Constraint Validation API

## Codigo HTML

[Cole aqui o HTML do formulario]

## Codigo JavaScript

[Cole aqui o codigo JS de validacao customizada]

## Exemplo de Uso

Preencha os campos conforme a tabela e registre o que aparece no console:

| senha | confirmar | Comportamento / Mensagem |
|---|---|---|
| "12345678" | "12345678" | [descreva] |
| "12345678" | "87654321" | [descreva] |
| (vazio) | (vazio) | [descreva] |

## Conclusao

Em 2-3 frases: qual a funcao de `setCustomValidity('')` com string vazia e por que chama-la apos a correcao?
~~~~

---

## Questao 4: Feedback Visual e Controle de Submissao

**Conceito-chave:** Classes CSS dinamicas, mensagens de erro inline, controll de submissao e serializacao (Aula 21, Secao 6).

**Objetivo:** Criar um formulario completo com feedback visual, controle de submissao e serializacao dos dados para JSON.

**Passos de Execução:**

1. Crie um formulario `<form name="contato">` com:
   - `nome` (text, required, minlength="3")
   - `email` (email, required)
   - `mensagem` (textarea, required, minlength="10")
2. Para cada campo, crie um `<span class="erro">` ao lado para mensagens de erro.
3. Implemente validacao ao digitar (evento `input`):
   - Se valido: classe `valido`, erro oculto
   - Se invalido: classe `invalido`, erro visivel com `validationMessage`
4. No evento `submit`:
   - Use `preventDefault()` para nao recarregar
   - Se todos os campos sao validos, serializa os dados com `JSON.stringify()`
   - Exiba o JSON no console

**Entrega:** crie `entregas-aula20/04-feedback-submissao.md`:

~~~~
# Questao 4 — Feedback Visual e Controle de Submissao

## Codigo HTML + CSS + JS

[Cole aqui o codigo completo do formulario com estilos e script]

## Teste de Serializacao

Preencha o formulario com:
- Nome: "Maria Oliveira"
- Email: "maria@exemplo.com"
- Mensagem: "Gostaria de saber mais sobre o curso."

Cole aqui o JSON exibido no console:

```
[cole o JSON aqui]
```

## Reflexao

Em 2-3 frases: por que `event.preventDefault()` e essencial em formularios que processam dados no proprio navegador (sem enviar ao servidor)?
~~~~

---

## Questao 5: Criando um Form-Associated Custom Element Basico

**Conceito-chave:** `static formAssociated`, `attachInternals`, `setFormValue` (Aula 21, Secao 7).

**Objetivo:** Construir um Custom Element minimo que se associa a formularios e prova que aparece no `FormData`.

**Passos de Execução:**

1. Crie a classe `EMeuCampo` estendendo `HTMLElement` com `static formAssociated = true`.
2. No `constructor()`, chame `this.attachInternals()`.
3. Adicione um `<input>` no Shadow DOM (ou light DOM).
4. No evento `input`, chame `this.internals.setFormValue(input.value)`.
5. Defina o elemento com `customElements.define('e-meu-campo', EMeuCampo)`.
6. Coloque `<e-meu-campo name="teste"></e-meu-campo>` dentro de um `<form>`.
7. Submeta e verifique no console que `FormData` inclui o campo.

**Entrega:** crie `entregas-aula20/05-form-associated-basico.md`:

~~~~
# Questao 5 — Criando um Form-Associated Custom Element Basico

## Codigo da Classe

[Cole aqui a definicao completa de EMeuCampo]

## Codigo HTML de Teste

[Cole aqui o HTML com form + e-meu-campo]

## Saida do Console ao Submeter

[Cole aqui o que apareceu no console mostrando que FormData.get('teste') funciona]

## Conclusao

Em 2-3 frases: o que `static formAssociated = true` habilita que um Custom Element comum nao tem?
~~~~

---

## Questao 6: Componente `<e-input-cep>` com Validacao de Formato

**Conceito-chave:** `setValidity`, regex de CEP, `setFormValue` com dados limpos (Aula 21, Secao 7 — e-input-cep).

**Objetivo:** Construir o componente `<e-input-cep>` completo com validacao em tempo real e participacao em formularios.

**Passos de Execução:**

1. Crie a classe `EInputCep` com `static formAssociated = true`.
2. No constructor: `attachInternals()`, `attachShadow()`, monte o HTML do input + span de erro.
3. No evento `input` do campo interno:
   - Valide o formato com regex `/^\d{5}-?\d{3}$/`
   - Use `setValidity({})` para valido e `setValidity({ customError: true }, msg)` para invalido
   - Use `setFormValue()` para enviar apenas os digitos (sem hifen)
4. Defina o elemento e teste dentro de um `<form>` com `FormData`.

**Entrega:** crie `entregas-aula20/06-input-cep.md`:

~~~~
# Questao 6 — Componente e-input-cep

## Codigo Completo da Classe

[Cole aqui a classe EInputCep completa]

## Teste de Validacao

Preencha a tabela com os resultados:

| Valor digitado | Estado (valido/invalido) | Valor no FormData |
|---|---|---|
| "12345-678" | [valido/invalido] | [valor] |
| "12345678" | [valido/invalido] | [valor] |
| "abcde-fgh" | [valido/invalido] | [valor] |
| (vazio) | [valido/invalido] | [valor] |

## Conclusao

Em 2-3 frases: por que o valor enviado ao `FormData` e apenas os digitos sem o hifen, mesmo que o usuario digite o hifen?
~~~~

---

## Questao 7: Projeto — Integrando `<e-form-tarefa>` ao Gerenciador de Tarefas

**Conceito-chave:** Formulario com validacao, `CustomEvent`, integracao com `<e-lista>` e array `tarefas` (Aula 21, Secao 7 — e-form-tarefa).

**Objetivo:** Integrar o componente `<e-form-tarefa>` ao Gerenciador de Tarefas existente, completando o ciclo: preencher validar adicionar renderizar.

**Passos de Execução:**

1. Copie seu Gerenciador de Tarefas da Aula 20 (ou use o codigo fornecido na aula).
2. Adicione a classe `EFormTarefa` completa (da Aula 21, Secao 7) ao seu script.
3. Adicione o metodo `renderizar(tarefas)` a classe `ELista`.
4. No HTML, adicione `<e-form-tarefa></e-form-tarefa>` antes de `<e-lista>`.
5. No script principal:
   - Crie o array `tarefas` com pelo menos 3 tarefas iniciais
   - Chame `lista.renderizar(tarefas)` para exibir a lista inicial
   - Adicione event listener para `'tarefa-adicionada'` no `<e-form-tarefa>`
   - No handler: adicione `event.detail` ao array e chame `lista.renderizar(tarefas)` novamente
6. Teste o fluxo completo: preencher formulario, submeter, ver tarefa aparecer na lista.
7. Teste a validacao: submeter com texto vazio ou prioridade nao selecionada.

**Entrega:** crie `entregas-aula20/07-form-tarefa-integrado.md`:

~~~~
# Questao 7 — Projeto: Integrando e-form-tarefa ao Gerenciador

## Arquivo HTML Completo

[Cole aqui o conteudo completo do seu HTML + JavaScript]

## Captura de Tela ou Descricao

Descreva o que aparece na tela APOS cada acao:

| Acao | Resultado Visual |
|---|---|
| Pagina carrega | [descreva] |
| Preencho "Praticar exercicios", prioridade "alta", clico em Adicionar | [descreva] |
| Clico em Adicionar com texto vazio | [descreva] |
| Clico em Adicionar com prioridade nao selecionada | [descreva] |
| Adiciono 3 tarefas e verifico a lista | [descreva] |

## Checklist de Funcionamento

- [ ] A pagina NAO recarrega ao adicionar tarefa
- [ ] Campos invalidos mostram mensagem de erro inline
- [ ] A tarefa aparece imediatamente na lista apos submissao valida
- [ ] O array `tarefas` contem as tarefas adicionadas (verifique com console.log)
- [ ] O evento `'tarefa-adicionada'` e disparado corretamente

## Reflexao Final

Em 3-5 frases: descreva o fluxo completo desde o preenchimento do formulario ate a tarefa aparecer na lista. Mencione o papel do `CustomEvent`, do array `tarefas` e do metodo `renderizar()`.
~~~~

---

## Checklist Final: Pronto para a Aula 22?

Marque cada item so quando conseguir faze-lo **sem consultar a aula**:

- [ ] **Explicar** o fluxo Coleta Valida Processa com suas proprias palavras
- [ ] **Acessar** um formulario por `document.forms['nome']` e extrair dados com `FormData`
- [ ] **Aplicar** `required`, `minlength`, `pattern` e `type` para validacao nativa
- [ ] **Diferenciar** `checkValidity()` de `reportValidity()` e explicar quando usar cada
- [ ] **Implementar** `setCustomValidity()` para validacao customizada
- [ ] **Controlar** a submissao com `event.preventDefault()` e serializar dados para JSON
- [ ] **Criar** feedback visual com classes CSS e mensagens de erro inline
- [ ] **Construir** um form-associated Custom Element com `static formAssociated` e `attachInternals()`
- [ ] **Validar** formato de CEP com `setValidity()` e regex
- [ ] **Integrar** `<e-form-tarefa>` ao Gerenciador de Tarefas com `CustomEvent`

> *Acertou todos? Parabens! Voce esta pronto para a Aula 22, onde vai explorar a File API para ler arquivos do computador do usuario e implementar interfaces de arrastar e soltar (Drag & Drop) — abrindo ainda mais possibilidades de interacao no navegador.*

> *Travou em algum item? Releia a secao indicada na questao correspondente antes de avancar. Nao pule etapas — cada conceito e base para o proximo.*

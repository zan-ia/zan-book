---
titulo: "JavaScript — Do Zero ao Profissional"
modulo: "01"
aula: "21"
---

# JavaScript — Do Zero ao Profissional Aula 22 — Questões de Aprendizagem

## Como Usar Este Arquivo

Este arquivo é o seu **checkpoint de aprendizagem**. A pergunta central é: *"eu realmente entendi a matéria?"*

Cada questão abaixo testa um conceito específico da Aula 22. Você deve:

1. Fazer as questões **em ordem** — elas seguem a progressão da aula
2. Ler o **Objetivo** e os **Passos de Execução** antes de começar
3. Copiar o template de **Entrega** para a pasta `entregas-aula-21/` e preencher
4. Completar **sem consultar a aula** — se travar, a seção de referência está indicada

**Importante:** Não existe gabarito aqui. Se você conseguir fazer, você entendeu. Se não conseguir, releia a seção indicada e tente novamente. Só avance para a Aula 23 quando completar todas as questões.

---

## Questão 1: Selecionando e Inspecionando Arquivos

**Conceito-chave:** File API (Aula 22, Seção 3).

**Objetivo:** Demonstrar que você sabe selecionar um arquivo com `<input type="file">` e acessar suas propriedades básicas.

**Passos de Execução:**

1. Crie uma página HTML com um `<input type="file">` que aceite apenas arquivos de imagem
2. Adicione um botão "Inspecionar Arquivo" que, ao ser clicado, mostra as propriedades do arquivo selecionado em um `<pre>`
3. Exiba: nome do arquivo, tamanho em KB (formatado com 1 casa decimal), e tipo MIME

**Entrega:** crie `entregas-aula-21/questao-01-inspecionar-arquivo.md`:

~~~~
# Questão 1 — Inspecionando Arquivos

## Código HTML/JS
[cole aqui seu código completo]

## Captura de tela do resultado
[descreva o que apareceu ao selecionar uma imagem]

## Propriedades exibidas
- Nome do arquivo: [preencha]
- Tamanho: [preencha] KB
- Tipo MIME: [preencha]

## Reflexão
O que acontece se você clicar em "Inspecionar Arquivo" sem ter selecionado nenhum arquivo? Como seu código trata esse caso?
~~~~

---

## Questão 2: Lendo o Conteúdo de um Arquivo de Texto

**Conceito-chave:** FileReader (Aula 22, Seção 4).

**Objetivo:** Demonstrar que você sabe usar `FileReader` com callback `onload` para ler um arquivo de texto.

**Passos de Execução:**

1. Crie uma página HTML com um `<input type="file" accept=".txt">`
2. Quando o usuário selecionar um arquivo, leia o conteúdo com `FileReader.readAsText()`
3. Exiba o conteúdo em um `<pre>` na página
4. Trate o caso de erro: se a leitura falhar, mostre uma mensagem de erro

**Entrega:** crie `entregas-aula-21/questao-02-leitor-texto.md`:

~~~~
# Questão 2 — Lendo Arquivo de Texto

## Código HTML/JS
[cole aqui seu código completo]

## Teste 1: Arquivo com conteúdo simples
- Conteúdo do arquivo: "Olá, mundo!"
- Resultado exibido: [preencha]

## Teste 2: Arquivo vazio
- Resultado exibido: [preencha]

## Pergunta
Em que ordem você deve configurar os callbacks `onload` e `onerror` em relação à chamada de `readAsText()`? Por quê?
~~~~

---

## Questão 3: Download de Dados como Arquivo JSON

**Conceito-chave:** Blob e URL.createObjectURL (Aula 22, Seção 5).

**Objetivo:** Demonstrar que você sabe criar um Blob a partir de dados em memória e gerar um download com `URL.createObjectURL`.

**Passos de Execução:**

1. Crie uma página com um botão "Baixar Dados"
2. Defina um array de objetos (ex: lista de compras com produto e quantidade)
3. Ao clicar no botão, serializa o array como JSON formatado, cria um Blob, gera uma URL com `URL.createObjectURL`, cria um link de download programaticamente e dispara o clique
4. Chame `URL.revokeObjectURL` após o download

**Entrega:** crie `entregas-aula-21/questao-03-download-json.md`:

~~~~
# Questão 3 — Download de JSON

## Código HTML/JS
[cole aqui seu código completo]

## Estrutura dos dados exportados
[cole aqui a estrutura JSON que foi gerada]

## Perguntas
1. O que acontece se você não chamar `URL.revokeObjectURL()` depois do download?
2. Qual a vantagem de usar `createObjectURL` em vez de `readAsDataURL` para gerar um download?
~~~~

---

## Questão 4: Copiando Texto para a Área de Transferência

**Conceito-chave:** Clipboard API (Aula 22, Seção 6).

**Objetivo:** Demonstrar que você sabe usar `navigator.clipboard.writeText()` para copiar texto programaticamente.

**Passos de Execução:**

1. Crie uma página com um campo `<textarea>` e um botão "Copiar"
2. Ao clicar no botão, o conteúdo do textarea é copiado para a área de transferência
3. Exiba um feedback visual: o botão muda para "Copiado!" e fica verde por 2 segundos
4. Se a cópia falhar (ex: permissão negada), mostre um alerta com a mensagem de erro

**Entrega:** crie `entregas-aula-21/questao-04-copiar-clipboard.md`:

~~~~
# Questão 4 — Copiando para o Clipboard

## Código HTML/JS
[cole aqui seu código completo]

## Teste
1. Digite "Teste de clipboard API" no textarea
2. Clique em "Copiar"
3. Cole o conteúdo em um editor de texto (Bloco de Notas, VS Code, etc.)
4. O texto foi colado corretamente? [sim / não]

## Pergunta
Por que a Clipboard API exige que `writeText` seja chamado em resposta a uma ação do usuário (clique) e não pode ser chamada no carregamento da página?
~~~~

---

## Questão 5: Zona de Drop com Arquivos

**Conceito-chave:** Drag & Drop (Aula 22, Seção 7).

**Objetivo:** Demonstrar que você sabe criar uma zona de drop que aceita arquivos arrastados e exibe seus nomes.

**Passos de Execução:**

1. Crie uma página com uma `<div>` que serve como zona de drop (estilo: borda tracejada, padding, texto centralizado)
2. Implemente os eventos `dragover` (com `preventDefault`), `dragleave` e `drop`
3. Quando arquivos forem soltos, exiba uma lista com o nome de cada arquivo
4. Destaque visualmente a zona de drop quando o arquivo estiver sobre ela (mude a cor da borda)

**Entrega:** crie `entregas-aula-21/questao-05-zona-drop.md`:

~~~~
# Questão 5 — Zona de Drop

## Código HTML/JS
[cole aqui seu código completo]

## Teste
1. Arraste 3 arquivos diferentes para a zona de drop
2. Arquivos arrastados: [liste os nomes]

## Perguntas
1. O que acontece se você esquecer `event.preventDefault()` no `dragover`?
2. Como você faria para filtrar apenas imagens (`.png`, `.jpg`) no drop?
~~~~

---

## Questão 6: Componente e-upload com Evento Customizado

**Conceito-chave:** Componente e-upload (Aula 22, Seção 8).

**Objetivo:** Demonstrar que você sabe criar um Custom Element que combina clique e arrasto para selecionar arquivos, e que dispara um evento customizado com os dados.

**Passos de Execução:**

1. Crie o componente `<e-upload>` com Shadow DOM
2. O componente deve aceitar clique (abre seletor de arquivos) e arrasto (drop)
3. Quando arquivos forem selecionados, o componente deve disparar o evento customizado `arquivos-selecionados`
4. Crie uma página que usa `<e-upload>` e escuta o evento para exibir os arquivos selecionados em uma lista

**Entrega:** crie `entregas-aula-21/questao-06-componente-upload.md`:

~~~~
# Questão 6 — Componente e-upload

## Código completo
[cole aqui o código HTML/JS completo, incluindo a definição do componente e a página]

## Como testar
[descreva os passos para testar o componente]

## Perguntas
1. Por que o componente usa `attachShadow({ mode: "open" })`?
2. O que o parâmetro `composed: true` faz no `CustomEvent`?
3. Como você limitaria o componente para aceitar apenas arquivos `.json`?
~~~~

---

## Questão 7: Exportar e Importar no To-Do App

**Conceito-chave:** Integração To-Do App (Aula 22, Seção 8).

**Objetivo:** Demonstrar que você sabe integrar exportação (Blob + download) e importação (FileReader + JSON.parse) de tarefas em uma aplicação funcional.

**Passos de Execução:**

1. Crie uma página com uma lista de tarefas (array de objetos com `id`, `texto`, `concluida`)
2. Adicione um botão "Exportar Tarefas" que baixa a lista como `.json` usando Blob
3. Adicione um `<e-upload>` que aceita `.json` e importa as tarefas, adicionando-as à lista existente
4. A lista deve ser renderizada novamente após a importação

**Entrega:** crie `entregas-aula-21/questao-07-todo-export-import.md`:

~~~~
# Questão 7 — Exportar e Importar no To-Do App

## Código completo
[cole aqui o código completo da página]

## Estrutura inicial das tarefas
[cole a estrutura JSON inicial]

## Teste de exportação
1. Clique em "Exportar Tarefas"
2. O arquivo foi baixado? [sim / não]
3. Abra o arquivo baixado — o JSON está formatado corretamente? [sim / não]

## Teste de importação
1. Modifique o arquivo `.json` baixado (adicione uma tarefa manualmente)
2. Arraste o arquivo modificado para o `<e-upload>`
3. As tarefas foram adicionadas à lista existente? [sim / não]

## Reflexão
Como você lidaria com tarefas duplicadas (mesmo `id`) durante a importação?
~~~~

---

## Questão 8: Galeria de Imagens com Drag & Drop e FileReader

**Conceito-chave:** Combinação de FileReader, Drag & Drop e Blob (Aula 22, Seções 4, 5 e 7).

**Objetivo:** Demonstrar que você sabe combinar múltiplas APIs (Drag & Drop, FileReader, Blob) em uma aplicação coesa.

**Passos de Execução:**

1. Crie uma página com uma zona de drop para imagens
2. Ao soltar imagens na zona, leia cada uma com `readAsDataURL` e exiba como thumbnail
3. Cada thumbnail deve ter um botão "Remover" ao passar o mouse
4. Adicione um botão "Baixar Galeria" que exporta a lista de nomes das imagens como arquivo `.json` usando Blob

**Entrega:** crie `entregas-aula-21/questao-08-galeria-imagens.md`:

~~~~
# Questão 8 — Galeria de Imagens

## Código completo
[cole aqui o código completo da página]

## Teste visual
1. Arraste 3 imagens para a galeria
2. As thumbnails apareceram? [sim / não]
3. Remova uma imagem usando o botão "Remover" — funcionou? [sim / não]
4. Clique em "Baixar Galeria" — o JSON foi baixado? [sim / não]

## Estrutura do JSON exportado
[cole aqui o conteúdo do JSON exportado]

## Pergunta
Por que você usou `readAsDataURL` em vez de `URL.createObjectURL` para exibir as imagens? Em que cenário `createObjectURL` seria melhor?
~~~~

---

## Checklist Final: Pronto para a Aula 23?

Marque cada item só quando conseguir fazê-lo **sem consultar a aula**:

- [ ] **Explicar** a analogia do arquivo como envelope e do Blob como argila bruta
- [ ] **Usar** `<input type="file">` com atributo `accept` para filtrar tipos de arquivo
- [ ] **Ler** o conteúdo de um arquivo com `FileReader.readAsText()` e configurar o callback `onload`
- [ ] **Ler** uma imagem com `FileReader.readAsDataURL()` e exibir como preview
- [ ] **Criar** um Blob a partir de dados em memória e gerar download com `URL.createObjectURL()`
- [ ] **Copiar** texto para a área de transferência com `navigator.clipboard.writeText()`
- [ ] **Implementar** os eventos `dragover` (com `preventDefault`), `dragleave` e `drop`
- [ ] **Construir** o componente `<e-upload>` que aceita clique e arrasto e dispara evento customizado
- [ ] **Exportar** dados do To-Do App como arquivo `.json`
- [ ] **Importar** dados de um arquivo `.json` arrastado, lendo com `FileReader` e fazendo parsing com `JSON.parse`

> *Acertou todos? Você está pronto para a Aula 23, onde seu To-Do App vai ganhar memória permanente com Web Storage e IndexedDB — nunca mais perder dados ao fechar o navegador. Travou em algum? Releia a seção indicada na questão correspondente antes de avançar.*

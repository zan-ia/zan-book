---
titulo: "Curso de Banco de Dados SQL — Do SQLite ao PostgreSQL com Knex"
modulo: "01"
aula: "07"
---

# Curso de Banco de Dados SQL Aula 07 — Questões de Aprendizagem

## Como Usar Este Arquivo

Este arquivo é o checkpoint de aprendizagem da Aula 07. A pergunta central é: "eu realmente entendi autenticação JWT com bcrypt e middleware?". Cada questão verifica um conceito-chave da aula. Siga os passos de execução e preencha o template de entrega para cada questão. Crie a pasta `entregas-aula-07` para salvar suas respostas.

Se travar em alguma questão, releia a seção correspondente na aula principal antes de consultar o gabarito.

---

## Questão 1: Classifique o Cenário — Autenticação ou Autorização?

**Conceito-chave:** Autenticação vs Autorização (Aula 07, Seção 1).

**Objetivo:** Demonstrar que você sabe diferenciar autenticação de autorização e classificar corretamente cenários do mundo real e de sistemas.

**Passos de Execução:**

1. Leia cada cenário descrito no template
2. Identifique se o cenário é de autenticação ou autorização
3. Justifique sua resposta em 1-2 frases
4. Proponha um exemplo complementar para o conceito oposto

**Entrega:** crie `entregas-aula-07/01-auth-vs-authz.md`:

~~~~
# Questão 1 — Classifique o Cenário: Autenticação ou Autorização?

## Cenário A: "O sistema verifica a digital do usuário para liberar a entrada no prédio."

**Classificação:** [Autenticação / Autorização]

**Justificativa:**

[explique por que este cenário se encaixa no conceito]

**Exemplo complementar (conceito oposto):**

[crie um exemplo relacionado que ilustre o conceito oposto]

## Cenário B: "Após o login, o sistema permite que o usuário veja apenas os pedidos que ele mesmo criou."

**Classificação:** [Autenticação / Autorização]

**Justificativa:**

[explique por que este cenário se encaixa no conceito]

**Exemplo complementar (conceito oposto):**

[crie um exemplo relacionado que ilustre o conceito oposto]

## Cenário C: "O funcionário apresenta o crachá na catraca. A catraca libera a entrada."

**Classificação:** [Autenticação / Autorização]

**Justificativa:**

[explique por que este cenário se encaixa no conceito]

**Exemplo complementar (conceito oposto):**

[crie um exemplo relacionado que ilustre o conceito oposto]

## Cenário D: "Um administrador pode deletar qualquer tarefa. Um usuário comum só pode deletar as próprias."

**Classificação:** [Autenticação / Autorização]

**Justificativa:**

[explique por que este cenário se encaixa no conceito]

**Exemplo complementar (conceito oposto):**

[crie um exemplo relacionado que ilustre o conceito oposto]

## Conclusão

[Em 2-3 frases: explique por que é importante manter autenticação e autorização como conceitos separados na arquitetura do sistema]
~~~~

---

## Questão 2: Hash vs Criptografia — Escolha a Abordagem Correta

**Conceito-chave:** Hash de senha vs criptografia (Aula 07, Seção 2).

**Objetivo:** Verificar que você sabe diferenciar hash de criptografia e escolher a abordagem correta para cada cenário de armazenamento.

**Passos de Execução:**

1. Leia cada cenário de armazenamento
2. Identifique se deve usar hash ou criptografia
3. Explique por que a outra abordagem seria inadequada
4. Descreva o que aconteceria se a escolha errada fosse aplicada

**Entrega:** crie `entregas-aula-07/02-hash-vs-criptografia.md`:

~~~~
# Questão 2 — Hash vs Criptografia: Escolha a Abordagem Correta

## Cenário A: Armazenar senhas de usuários para login

**Abordagem correta:** [Hash / Criptografia]

**Por que a outra abordagem é inadequada:**

[explique os riscos de usar a abordagem errada]

**Consequência da escolha errada:**

[descreva o que aconteceria em caso de vazamento]

## Cenário B: Armazenar mensagens privadas que o usuário pode ler depois

**Abordagem correta:** [Hash / Criptografia]

**Por que a outra abordagem é inadequada:**

[explique por que hash não funcionaria aqui]

**Consequência da escolha errada:**

[descreva o que aconteceria se usasse hash]

## Cenário C: Armazenar tokens de refresh que precisam ser validados mas nunca recuperados

**Abordagem correta:** [Hash / Criptografia]

**Por que a outra abordagem é inadequada:**

[explique os riscos de usar a abordagem errada]

**Consequência da escolha errada:**

[descreva o que aconteceria em caso de vazamento]

## Comparação Final

| Característica | Hash | Criptografia |
|---|---|---|
| Direcionalidade | [preencha] | [preencha] |
| Usado para | [preencha] | [preencha] |
| Precisa de chave secreta? | [preencha] | [preencha] |
| Risco se dados vazarem | [preencha] | [preencha] |

## Conclusão

[Em 2-3 frases: qual a regra prática para decidir entre hash e criptografia?]
~~~~

---

## Questão 3: Desenhe o Fluxo de Autenticação com Token

**Conceito-chave:** Fluxo de autenticação stateless com token (Aula 07, Seções 3 e 6).

**Objetivo:** Verificar se você entende o fluxo completo de autenticação stateless, desde o registro até a requisição protegida.

**Passos de Execução:**

1. Descreva em etapas o fluxo completo de autenticação
2. Para cada etapa, identifique quem é o responsável (cliente ou servidor)
3. Explique o que diferencia o fluxo stateless (token) de um fluxo stateful (sessão)

**Entrega:** crie `entregas-aula-07/03-fluxo-autenticacao.md`:

~~~~
# Questão 3 — Fluxo de Autenticação com Token

## Etapas do Fluxo

Preencha a tabela com as etapas do fluxo completo de autenticação stateless:

| Etapa | O que acontece | Responsável | Dados trafegados |
|---|---|---|---|
| 1. Registro | [descreva] | Cliente e Servidor | [dados enviados e recebidos] |
| 2. Login | [descreva] | Cliente e Servidor | [dados enviados e recebidos] |
| 3. Armazenamento do token | [descreva] | [Cliente / Servidor] | [onde o token fica] |
| 4. Requisição protegida | [descreva] | Cliente e Servidor | [como o token é enviado] |
| 5. Verificação do token | [descreva] | [Cliente / Servidor] | [o que o servidor faz] |
| 6. Resposta | [descreva] | Servidor | [dados retornados] |

## Diferença para Sessão Stateful

| Característica | Token (stateless) | Sessão (stateful) |
|---|---|---|
| Onde os dados do usuário ficam? | [preencha] | [preencha] |
| O servidor precisa de armazenamento? | [preencha] | [preencha] |
| O que acontece se adicionar mais servidores? | [preencha] | [preencha] |
| Como o cliente prova identidade? | [preencha] | [preencha] |

## Diagrama Textual do Fluxo

Descreva o fluxo abaixo usando setas textuais:

```
[Cliente] --(1)--> [Servidor]: POST /login (email, senha)
[Servidor] --(2)--> [Cliente]:
[Cliente] --(3)--> [Servidor]:
[Servidor] --(4)--> [Cliente]:
```

Preencha as linhas 2, 3 e 4 com o que acontece em cada etapa.

## Conclusão

[Em 2-3 frases: qual a principal vantagem do fluxo stateless sobre o stateful para aplicações que precisam escalar?]
~~~~

---

## Questão 4: Migration senha_hash

**Conceito-chave:** Migration para adicionar coluna a tabela existente (Aula 07, Seção 4).

**Objetivo:** Verificar se você sabe criar e executar uma migration que adiciona uma coluna a uma tabela existente, lidando com dados já existentes.

**Passos de Execução:**

1. Crie o comando para gerar a migration
2. Escreva o código completo da migration com `exports.up` e `exports.down`
3. Explique o que fazer se a tabela já tiver registros
4. Descreva como verificar se a migration foi aplicada

**Entrega:** crie `entregas-aula-07/04-migration-senha-hash.md`:

~~~~
# Questão 4 — Migration senha_hash

## Comando para Criar a Migration

```
[comando completo]
```

## Código da Migration

```javascript
exports.up = function(knex) {
  // código aqui
}

exports.down = function(knex) {
  // código aqui
}
```

## Problema: Tabela já tem Registros

Suponha que sua tabela `usuarios` já tem 3 usuários cadastrados. O que acontece quando você tenta rodar a migration com `table.string('senha_hash').notNullable()`?

**O que acontece:**

[explique o erro que ocorre]

**Solução alternativa 1 (permitir NULL temporariamente):**

[descreva como modificar a migration e o que fazer depois]

**Solução alternativa 2 (limpar dados):**

[descreva o comando SQL para limpar os dados antes da migration]

## Verificação

**Comando para verificar se a migration foi aplicada:**

```
[comando]
```

**Query SQL para confirmar que a coluna existe:**

```sql
[query SQL]
```

## Conclusão

[Em 2-3 frases: por que migrations são melhores que alterar a tabela manualmente no PostgreSQL?]
~~~~

---

## Questão 5: Hash e Compare com Bcrypt

**Conceito-chave:** bcrypt.hash e bcrypt.compare (Aula 07, Seção 5).

**Objetivo:** Demonstrar que você sabe usar bcrypt para gerar hash de senha e verificar senha contra hash armazenado.

**Passos de Execução:**

1. Escreva um script completo que gera hash de uma senha
2. Adicione verificação com senha correta e senha incorreta
3. Explique o papel do salt e do saltRounds
4. Teste mental: simule o que acontece com diferentes saltRounds

**Entrega:** crie `entregas-aula-07/05-bcrypt.md`:

~~~~
# Questão 5 — Hash e Compare com Bcrypt

## Script Completo

```javascript
const bcrypt = require('bcrypt')

async function testarHash() {
  const senha = 'minhaSenhaSuperSegura'

  // Hash
  const hash = await bcrypt.hash(senha, 10)
  console.log('Hash gerado:', hash)

  // Comparação correta
  const valido = await bcrypt.compare(senha, hash)
  console.log('Senha correta?', valido) // Deve ser true

  // Comparação errada
  const invalido = await bcrypt.compare('senhaErrada', hash)
  console.log('Senha errada?', invalido) // Deve ser false
}

testarHash().catch(console.error)
```

## Perguntas

**1. O que o segundo argumento `10` significa em `bcrypt.hash(senha, 10)`?**

[explique em 2-3 frases]

**2. Como o bcrypt consegue comparar a senha se o hash inclui o salt — o salt não deveria ser secreto?**

[explique em 2-3 frases]

**3. O que mudaria se você usasse saltRounds = 4? E se usasse saltRounds = 14?**

[explique o impacto na segurança e na performance para cada]

**4. Por que o bcrypt é preferível a hashes rápidos como SHA-256 para armazenar senhas?**

[explique em 2-3 frases]

## Simulação

Suponha que dois usuários têm a mesma senha: "123456".

**Os hashes gerados por `bcrypt.hash("123456", 10)` serão iguais?**

[Sim / Não]

**Por quê?**

[explique]

## Conclusão

[Em 2-3 frases: qual a responsabilidade do desenvolvedor ao usar bcrypt em produção?]
~~~~

---

## Questão 6: Gere e Verifique um Token JWT

**Conceito-chave:** jwt.sign e jwt.verify (Aula 07, Seção 6).

**Objetivo:** Verificar se você sabe gerar um token JWT, verificar sua validade e tratar erros de token expirado e assinatura inválida.

**Passos de Execução:**

1. Escreva um script que gera token JWT com payload e expiração
2. Adicione verificação bem-sucedida
3. Adicione verificação com segredo errado
4. Adicione verificação com token expirado
5. Explique o que cada parte do JWT contém

**Entrega:** crie `entregas-aula-07/06-jwt.md`:

~~~~
# Questão 6 — Gere e Verifique um Token JWT

## Script Completo

```javascript
const jwt = require('jsonwebtoken')

const segredo = 'meuSegredoDeTeste'

async function testarToken() {
  // Gerar token com expiração de 10 segundos
  const payload = { id: 1, email: 'teste@teste.com', perfil: 'admin' }
  const token = jwt.sign(payload, segredo, { expiresIn: '10s' })
  console.log('Token:', token)

  // 1. Verificação bem-sucedida
  const dados = jwt.verify(token, segredo)
  console.log('1. Token válido. Dados:', dados)

  // 2. Verificação com segredo errado
  try {
    jwt.verify(token, 'segredoErrado')
  } catch (erro) {
    console.log('2. Erro com segredo errado:', erro.message)
  }

  // 3. Aguardar expiração e verificar
  await new Promise(resolve => setTimeout(resolve, 11000))
  try {
    jwt.verify(token, segredo)
  } catch (erro) {
    console.log('3. Erro com token expirado:', erro.name, '-', erro.message)
  }
}

testarToken().catch(console.error)
```

## Estrutura do JWT

Considere o token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ0ZXN0ZUB0ZXN0ZS5jb20iLCJwZXJmaWwiOiJhZG1pbiIsImlhdCI6MTcxOTAwMDAwMCwiZXhwIjoxNzE5MDAwMDEwfQ.assinatura`

**Parte 1 — Cabeçalho (header):**

Decodifique a primeira parte (`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9`) em base64:

Conteúdo: [decodifique e escreva o JSON]

O que ele contém? [explique]

**Parte 2 — Payload:**

Decodifique a segunda parte (`eyJpZCI6MSwiZW1haWwiOiJ0ZXN0ZUB0ZXN0ZS5jb20iLCJwZXJmaWwiOiJhZG1pbiIsImlhdCI6MTcxOTAwMDAwMCwiZXhwIjoxNzE5MDAwMDEwfQ`) em base64:

Conteúdo: [decodifique e escreva o JSON]

Quais claims estão presentes? [liste e explique cada um]

**Parte 3 — Assinatura:**

O que a assinatura garante? [explique em 2-3 frases]

## Importante

**Por que o payload NÃO deve conter a senha do usuário?**

[explique em 2-3 frases]

## Conclusão

[Em 2-3 frases: qual a diferença entre codificação (base64) e criptografia, e por que isso importa para o JWT?]
~~~~

---

## Questão 7: Implemente POST /registro e POST /login

**Conceito-chave:** Endpoints de registro e login (Aula 07, Seções 7 e 8).

**Objetivo:** Verificar se você consegue implementar os endpoints completos de registro e login com bcrypt e JWT, seguindo a arquitetura em camadas.

**Passos de Execução:**

1. Implemente o repository com `buscarPorEmail` e `criar`
2. Implemente o service com `registrar` e `login`
3. Implemente o controller
4. Explique as decisões de segurança (mensagem de erro, o que retornar)

**Entrega:** crie `entregas-aula-07/07-registro-login.md`:

~~~~
# Questão 7 — Implemente POST /registro e POST /login

## Repository — usuario-repo.js

```javascript
// Implemente os métodos buscarPorEmail e criar
// buscarPorEmail deve retornar o usuário completo (com senha_hash)
// criar deve retornar apenas os dados públicos (sem senha_hash)
```

## Service — auth-service.js

```javascript
// Implemente os métodos registrar e login
// registrar: verificar email único, gerar hash, criar usuário
// login: buscar email, comparar hash, gerar token, retornar { token, usuario }
```

## Controller — auth-controller.js

```javascript
// Implemente os handlers registrar e login
// Tratar erros com status code apropriados
```

## Decisões de Segurança

**1. Por que o `POST /login` retorna a mesma mensagem para email inválido e senha errada?**

[explique em 2-3 frases]

**2. Por que o método `criar` do repository retorna apenas campos selecionados (`['id', 'nome', 'email', 'criado_em']`) em vez de `returning('*')`?**

[explique em 2-3 frases]

**3. O que aconteceria se o service usasse `knex('usuarios')` em vez de `usuarioRepo.buscarPorEmail()`?**

[explique o impacto na arquitetura]

## Teste Mental

Considere a seguinte requisição:

```
POST /registro
Body: { "nome": "João", "email": "joao@email.com", "senha": "123456" }
```

**O que é armazenado no banco na coluna `senha_hash`?**

[A senha "123456" em texto puro / O hash bcrypt da senha / Nada, a coluna fica vazia]

**O que é retornado na resposta?**

[descreva o JSON de resposta]

**E se o email "joao@email.com" já existir no banco?**

[descreva o status code e a mensagem de erro]

## Conclusão

[Em 2-3 frases: por que a separação em repository, service e controller é importante para a segurança?]
~~~~

---

## Questão 8: Implemente o Middleware de Autenticação

**Conceito-chave:** Middleware de autenticação com JWT (Aula 07, Seção 9).

**Objetivo:** Demonstrar que você sabe implementar um middleware de autenticação que extrai, verifica e injeta o token JWT, tratando todos os cenários de erro.

**Passos de Execução:**

1. Implemente o middleware completo
2. Cubra os 4 cenários de erro
3. Crie uma rota protegida de exemplo
4. Teste cada cenário de erro com curl

**Entrega:** crie `entregas-aula-07/08-middleware-auth.md`:

~~~~
# Questão 8 — Middleware de Autenticação

## Código do Middleware

```javascript
// Implemente o middleware auth-middleware.js completo
// Deve cobrir: token ausente, mal formatado, inválido e expirado
// Deve injetar req.user com os dados do payload
```

## Rota Protegida

Crie uma rota `GET /minha-conta` que usa o middleware e retorna os dados do usuário logado:

```javascript
// Implemente a rota protegida
// Deve retornar req.user (id, email) em caso de sucesso
```

## Cenários de Erro

Para cada cenário, descreva o que o middleware deve retornar:

**Cenário 1:** Cliente não envia header `Authorization`.

Status code: [código]
Mensagem: [mensagem de erro]

**Cenário 2:** Cliente envia `Authorization: Bearer` sem o token.

Status code: [código]
Mensagem: [mensagem de erro]

**Cenário 3:** Cliente envia `Authorization: Bearer token.invalido.aqui`.

Status code: [código]
Mensagem: [mensagem de erro]

**Cenário 4:** Cliente envia token que já expirou.

Status code: [código]
Mensagem: [mensagem de erro]

## Curl de Teste

Escreva os comandos curl para testar cada cenário:

**1. Token ausente:**

```
curl ...
```

**2. Token inválido:**

```
curl ...
```

**3. Token válido (substitua TOKEN pelo token real):**

```
curl ...
```

## Conclusão

[Em 2-3 frases: qual a responsabilidade do middleware e por que ele não deve conter lógica de negócio?]
~~~~

---

## Checklist Final: Pronto para a Aula 08?

Marque cada item só quando conseguir fazê-lo **sem consultar a aula**:

- [ ] Explicar a diferença entre autenticação e autorização com exemplos
- [ ] Distinguir hash de criptografia e justificar por que senhas usam hash
- [ ] Comparar autenticação stateless (token) com stateful (sessão)
- [ ] Descrever o fluxo completo: registro, login, token, requisição protegida
- [ ] Criar e executar uma migration que adiciona `senha_hash` à tabela `usuarios`
- [ ] Usar `bcrypt.hash()` para gerar hash e `bcrypt.compare()` para verificar senha
- [ ] Usar `jwt.sign()` para gerar token e `jwt.verify()` para verificar
- [ ] Implementar `POST /registro` com validação de email único e hash de senha
- [ ] Implementar `POST /login` com verificação de credenciais e emissão de token
- [ ] Construir um middleware de autenticação que extrai, verifica e injeta o token
- [ ] Tratar corretamente os 4 erros de token: ausente, mal formatado, inválido, expirado
- [ ] Configurar `JWT_SECRET` como variável de ambiente

> *Acertou todos? Você está pronto para a Aula 08, onde seu Gerenciador de Tarefas ganha autorização por usuário — cada um vê e gerencia apenas suas próprias tarefas, e você finaliza o projeto com uma API completa e segura. Travou em algum? Releia a seção indicada na questão correspondente antes de avançar.*

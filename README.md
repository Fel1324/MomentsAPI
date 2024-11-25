<h1 align="center">📱 Moments API ⚙️</h1>

<p align="center">Esta API foi desenvolvida na vídeo aula de API RESTful com AdonisJS, do canal Matheus Battisti - Hora de Codar, no YouTube.
</p>

<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=49AA26&labelColor=000000">
</p>

<br>

## Tópicos
- [Sobre a API](#sobre)
- [Rotas da API](#routes)
- [Tecnologias utilizadas](#tec)
- [Executando a API](#exec)
- [Créditos](#cred)
- [Status da API](#status)
- [Licença](#license)

<br>

<h2 id="sobre">📸 Sobre o projeto</h2>

<p align="justify">
  API que será consumida por uma página de cadastro de momentos, onde os usuários podem ver e comentar nos momentos de outros.
</p>

<br>

<h2 id="routes">🛠️ Rotas da API</h2>

<h3>GET</h3>

- **/moments**: Retorna todos os momentos.

- **/moments/:momentId**: Retorna um momento específico pelo ID.

- **/moments/:momentId/comments/**: Retorna todos os comentários do momento ao qual eles pertencem.

- **/moments/:momentId/comments/:id**: Retorna um comentário específico, pelo ID, do momento ao qual ele pertence.

- **/uploads/:filename**: Retorna todos os arquivos.

<h3>POST</h3>

- **/moments**: Cria um novo momento.

- **/moments/:momentId/comments/**: Cria um novo comentário em um determinado momento.

<h3>PATCH</h3>

- **/moments/:momentId**: Atualiza um momento específico pelo ID.

- **/moments/:momentId/comments/:id**: Atualiza um comentário específico, pelo ID, do momento ao qual ele pertence.

<h3>DELETE</h3>

- **/moments/:momentId**: Deleta um momento específico pelo ID.

- **/moments/:momentId/comments/:id**: Deleta um comentário específico, pelo ID, do momento ao qual ele pertence.

<br>

<h2 id="tec">❤️‍🔥 Tecnologias utilizadas</h2>

- SQLite
- NodeJs
- AdonisJS
- Git e Github

<br>

<h2 id="exec">🤖 Executando a API</h2>

<h3>Pré-requisito</h3>

- [NodeJS LTS](https://nodejs.org/en/)

<h3>Passo a passo</h3>

```
# Clone este repositório
$ git clone https://github.com/Fel1324/MomentsAPI.git

# Acesse a pasta da API no terminal/cmd
$ cd MomentsAPI
$ cd moments-api

# Instale as dependências da API
$ npm install ou npm i

# Crie arquivo .env
$ copie e cole o arquivo .env.example
$ renomeie o novo arquivo para .env e depois o abra

# Gere a APP_KEY
$ node ace generate:key

# Rode as migrações
$ mkdir tmp && node ace migration:run

# Execute a API
$ node ace serve
```

> A API irá iniciar na porta 3333

<br>

<h2 id="status">🚧 Status da API</h2>

Projeto finalizado ✅

<br>

<h2 id="license">📝 Licença</h2

A API está sob a licença MIT.

# Projeto Blogs API

Este repositório foi criado para colocar em prática os conhecimentos adquiridos no curso de Desenvolvimento Web da Trybe de um projeto do bloco de Back-end.

O objetivo do projeto foi construir uma API de um CRUD posts de blog (com o Sequelize), onde foram desenvolvidos alguns endpoints (seguindo os princípios do REST) que estão conectados ao banco de dados.

# API construida para:
* Criar e manipular um banco de dados MySQL para armazenar todos os dados;
* Criar um novo usuario no banco de dados;
* Criar uma nova categoria de post;
* Criar um novo post;
* Listar todos os usuarios;
* Listar todas as categorias;
* Listar todos os posts com suas respectivas categorias e usuario;
* Editar um post;
* Deletar um usuario;
* Validação do corpo das requisições;
* Autentificar usuario;

# Habilidades adquiridas

Construir um back-end usando `ORM` com o pacote `sequelize` do `npm`, e sendo capaz de:
 - Criar e associar tabelas usando `models` do `sequelize`.
 - Construir endpoints para consumir os models criados. 
 - Fazer um `CRUD` com o `ORM`.

# Instruções para rodar localmente:

1. Clone o repositório
  * `git clone git@github.com:pabloalmeidac/project-blogs-api.git`.
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd sd-015-a-project-blogs-api`

2. Instale as dependências 
  * `npm install`

3. O projeto utiliza biblioteca `dotenv` e precisa ser configurado pra utilizar as variaveis de ambiente.

  * Renomeie o arquivo `env.example` para `.env`
   
  * Preencha os valores das variaveis que estão no arquivo para que a API funcione corretamente.

# Tecnologias utilizadas
  * `Nodejs`
  * `Javascript`
  * `Express`
  * `Sequelize`
  * `Jwt`
  * `MySQL`
  * `Dotenv`
  
# Autor
  Pablo Almeida
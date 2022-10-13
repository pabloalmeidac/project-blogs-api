# Blogs API

Este repositório foi criado para colocar em prática os conhecimentos adquiridos no curso de Desenvolvimento Web da Trybe de um projeto do bloco de Back-end.

# Objetivo do projeto:
O objetivo do projeto foi construir uma API de um CRUD posts de blog (com o Sequelize), onde foram desenvolvidos alguns endpoints (seguindo os princípios do REST) que estão conectados ao banco de dados, sendo responsavel por:

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

# Documentação
Foi utilizado o swagger para fazer a documentação do projeto.

![doc](https://raw.githubusercontent.com/pabloalmeidac/project-blogs-api/pabloalmeidac-sd-015-a-project-blogs-api/doc.png)

![endpoints](https://raw.githubusercontent.com/pabloalmeidac/project-blogs-api/pabloalmeidac-sd-015-a-project-blogs-api/endpoints.png)


# Conhecimentos adquiridos

Construir um back-end usando `ORM` com o pacote `sequelize` do `npm`, e sendo capaz de:
 - Criar e associar tabelas usando `models` do `sequelize`.
 - Construir endpoints para consumir os models criados. 
 - Fazer um `CRUD` com o `ORM`.

# Instruções para rodar localmente:

1. Clone o repositório
  * `git clone git@github.com:pabloalmeidac/project-blogs-api.git`.
  * Entre na pasta do repositório que você acabou de clonar:
    * `project-blogs-api`

2. Instale as dependências 
  * `npm install`


3. Para a api funcionar corretamente, na raiz do projeto **renomeie o arquivo `.env.example` para `.env`** com as variáveis de ambiente. Por exemplo, caso o seu usuário SQL seja `nome` e a senha `1234` seu arquivo ficará desta forma:

```sh
MYSQL_HOSTNAME=localhost
MYSQL_USER=nome
MYSQL_PASSWORD=1234
JWT_SECRET=segredo
```
4. Para iniciar a api é só rodar o comando:
  * `npm run start`
# Tecnologias utilizadas
  * `Nodejs`
  * `Javascript`
  * `Express`
  * `Sequelize`
  * `Jwt`
  * `MySQL`
  * `Joi`
  * `Dotenv`
  
# Autor
  Pablo Almeida
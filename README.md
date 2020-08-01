# API feita para cadastro de laborátórios e exames.

Está APi foi construída usando Node.js, framework Express, PostgreSQL e Knex para conexões com bancos de dados.

# Para iniciar o projeto

 Antes de iniciar o projeto é necessário ter o node.js instalado na máquina (https://nodejs.org/en/download/) junto à biblioteca npm.
 Também é necessário ter o Docker instalado (https://docs.docker.com/)

# Módulos usados:
Docker - O Docker fornece uma camada de abstração e automação para virtualização do sistema operacional no Windows e Linux.

O Cors - CORS é um pacote node.js para fornecer um middleware do Connect / Express que pode ser usado para ativar o CORS com várias opções.

Express - Framework Node.js.

Eslint - Uma ferramenta de linter conectável e configurável para identificar e gerar relatórios sobre padrões em JavaScript. Mantenha a qualidade do seu código com facilidade

Knex - um construtor de consultas SQL para Javascript.

Jest - JavaScript Testing Framework com foco na simplicidade.

Nodemon - Um utilitário que monitora qualquer alteração na sua fonte e reinicia automaticamente o servidor.

Supertest - biblioteca dirigida por super-agente para testar servidores HTTP node.js. usando uma API fluente.

Husky - uma biblioteca que consegue intermediar commits, trazendo validações anterior ao mesmo.

Lint-staged - usado para colocar no stage do github, apenas arquivos que foram alterados, evitando assim demora nos commits.

Git commit msg linter - usado para evitar commits boas práticas

# Base de dados:
`` ``
Neste projeto foi usado o banco de dados PostgreSQL com o query builder knex.

`` ``
# Executando os testes
```
Para iniciar os testes da aplicação, basta executar na linha de comando "npm install" para instalar as dependências e "npm test" antes mesmo de iniciar o servidor.

```
# Baixando as depêndencias
```
Após clonar o projeto, na pasta raiz é necessário rodar o comando "docker-compose up" para baixar todas as dependências necessárias e executar o projeto.
```

# Rotas

`` ``
 URL BASE: http://localhost:3000 => caso esteja rodando na máquina local

 Laboratórios:
  
 GET /laboratory
  
 POST /laboratory
  
 PUT  /laboratory/:id
  
 DELETE /laboratory/:id
   
 Exames:
  
 GET /exam
  
 POST /exam
  
 PUT  /exam/:id
  
 DELETE /exam/:id
  
 Exames ao latoratório
  
 POST /laboratory/:id/exam
  
 DELETE /laboratory/:id/exam

`` ``

# Criar laboratório:

`` ``
Exemplo => / laboratory
Método: POST

{
    "name": "Laboratório teste",
    "address": "teste",
    "status": true
}

`` ``
# Atualizar laboratório:
`` ``
Exemplo => /laboratory/1
Método: PUT

{
    "name": "Laboratório teste novo",
    "address": "teste",
    "status": true
}
`` ``
# Listar todos laboratórios:
`` ``
Exemplo => /laboratory
Método: GET

OBS: é possivel adicionar a paginação do retorno passando um parâmetro page
Exemplo => /laboratory?page=2

Resposta:
{
    "statusCode": 200,
    "body": [
        {
            "id": 1,
            "name": "Leonardo lab2",
            "address": "teste",
            "status": true,
            "available_exams": [
                {
                    "id": 1,
                    "name": "Exame 1",
                    "type": "teste",
                    "status": true,
                    "lab_id": 1,
                    "exam_id": 1
                }
            ]
        },
        {
            "id": 5,
            "name": "Laboratório 2",
            "address": "teste",
            "status": true,
            "available_exams": [
                {
                    "id": 4,
                    "name": "Exame 3",
                    "type": "teste",
                    "status": true,
                    "lab_id": 5,
                    "exam_id": 3
                }
            ]
        },
        {
            "id": 6,
            "name": "Laboratório 3",
            "address": "teste",
            "status": true,
            "available_exams": []
        }
    ]
}

`` ``
# Remover um laboratório logicamente:
`` ``
Exemplo => /laboratory/1
Método: DELETE 

OBS: ao executar o método a aplicação apenas atualiza o status de "true" para "false" fazendo assim com que aquele laboratório não apareça mais na lista, sendo possivel coloca-lo novamente na lista com o metodo de atualizar laboratório.
`` ``
# Criar exame:

`` ``
Exemplo => / exam
Método: POST
{
    "name": "Exame teste",
    "type": "teste",
    "status": true
}

`` ``
# Atualizar exame:
`` ``
Exemplo => /exam/1
Método: PUT
{
    "name": "Exame teste novo",
    "type": "teste",
    "status": true
}

`` ``
# Listar todos exames:
`` ``
Exemplo => /exames
Método: GET

OBS: é possivel adicionar a paginação do retorno passando um parâmetro page
Exemplo => /exam?page=2

Resposta:
{
    "statusCode": 200,
    "body": [
        {
            "id": 1,
            "name": "Exame 1",
            "type": "teste",
            "status": true
        },
        {
            "id": 2,
            "name": "Exame 2",
            "type": "teste",
            "status": true
        },
        {
            "id": 3,
            "name": "Exame 3",
            "type": "teste",
            "status": true
        },
        {
            "id": 4,
            "name": "Exame 4",
            "type": "teste",
            "status": true
        }
    ]
}

`` ``


# Remover um laboratório logicamente:
`` ``
Exemplo => /exam/1
Método: DELETE

OBS: ao executar o método a aplicação apenas atualiza o status de "true" para "false" fazendo assim com que aquele exame não apareça mais na lista, sendo possivel coloca-lo novamente na lista com o método de atualizar exame.
`` ``

# Adicionando um exame a um laboratório:
`` ``
Exemplo => /laboratory/1/exam
Método: POST

{
    "exam_id": "1"
}

OBS: é feita uma validação para que caso este laboratório não existe ou este exame não exista retorne um erro.
`` ``

# Removendo um exame de um laboratório:
`` ``
Exemplo => /laboratory/1/exam
Método: DELETE

{
    "exam_id": "1"
}
`` ``


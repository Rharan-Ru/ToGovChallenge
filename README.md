# Desafio ToGov - Sistema de Gerenciamento de Tarefas
## Objetivo Geral

Medir conhecimentos básicos a respeito das tecnologias utilizadas no projeto SISGP em desenvolvimento pela ToGov.
Objetivo do Desafio

Desenvolver um Sistema básico de Gerenciamento de Tarefas.
Tecnologias Base

    Node.js
    NestJS
    React
    Ant Design

Requisitos do Projeto
Backend (Node.js com NestJS)
Endpoints RESTful

    GET /tasks: Retorna a lista de todas as tarefas.
    POST /tasks: Cria uma nova tarefa.
    PUT /tasks/:id: Atualiza uma tarefa existente pelo ID.
    DELETE /tasks/:id: Remove uma tarefa pelo ID.

Modelo de Dados

    Utilizar um array ou outra estrutura de dados em memória para armazenar as tarefas (não precisa criar um Banco de Dados).
    Tarefa:

    json

    {
      "id": number,
      "title": string,
      "description": string,
      "status": "pending" | "in-progress" | "completed"
    }

Autenticação

    Implementar um sistema de autenticação simples utilizando JWT.

Frontend (React com Ant Design)
Páginas

    Login
    Dashboard de tarefas

Componentes

    Formulário de cadastro de tarefas
    Tabelas de tarefas

Integração

    Consumir a API do backend para todas as operações de CRUD.

Design

    Utilizar o Ant Design para criar os itens previstos de interface.

Como Rodar o Projeto
Pré-requisitos

    Docker
    Docker Compose

Instruções

    Clone o repositório:

git clone https://github.com/Rharan-Ru/ToGovChallenge
cd ToGovChallenge

Crie um arquivo .env na raiz do projeto e configure as seguintes variáveis:

INITIAL_USER_NAME=teste

INITIAL_USER_PASSWORD=teste

INITIAL_USER_EMAIL=teste@teste.com

JWT_SECRET_KEY=YOUR_SECRET_KEY

NODE_ENV=development

Inicie o projeto com Docker Compose:


    docker-compose up --build

    A API estará disponível em http://localhost:3000.

### Como rodar os testes

    npm run test

Tempo Gasto

Tempo total gasto: 6 horas

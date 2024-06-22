import { applyDecorators } from '@nestjs/common';
import { ApiConsumes, ApiOperation, ApiResponse } from '@nestjs/swagger';

export const TodoCreateDecorator = () => {
  return applyDecorators(
    ApiOperation({ summary: 'Cria uma nova tarefa' }),
    ApiResponse({
      status: 201,
      description: 'Tarefa criada com sucesso',
    }),
    ApiConsumes('application/x-www-form-urlencoded'),
    ApiResponse({ status: 500, description: 'Erro ao criar tarefa' }),
  );
};

export const TodoUpdateDecorator = () => {
  return applyDecorators(
    ApiOperation({ summary: 'Atualiza uma tarefa' }),
    ApiResponse({
      status: 200,
      description: 'Tarefa atualizada com sucesso',
    }),
    ApiConsumes('application/x-www-form-urlencoded'),
    ApiResponse({ status: 500, description: 'Erro ao atualizar tarefa' }),
  );
};

export const TodoDeleteDecorator = () => {
  return applyDecorators(
    ApiOperation({ summary: 'Deleta uma tarefa' }),
    ApiResponse({
      status: 200,
      description: 'Tarefa deletada com sucesso',
    }),
    ApiConsumes('application/x-www-form-urlencoded'),
    ApiResponse({ status: 500, description: 'Erro ao deletar tarefa' }),
  );
};

export const TodoGetByIdDecorator = () => {
  return applyDecorators(
    ApiOperation({ summary: 'Busca uma tarefa por ID' }),
    ApiResponse({
      status: 200,
      description: 'Tarefa encontrada com sucesso',
    }),
    ApiConsumes('application/x-www-form-urlencoded'),
    ApiResponse({ status: 500, description: 'Erro ao buscar tarefa por ID' }),
  );
};

export const TodoGetAllDecorator = () => {
  return applyDecorators(
    ApiOperation({ summary: 'Busca todas as tarefas' }),
    ApiResponse({
      status: 200,
      description: 'Tarefas encontradas com sucesso',
    }),
    ApiConsumes('application/x-www-form-urlencoded'),
    ApiResponse({ status: 500, description: 'Erro ao buscar tarefas' }),
  );
};

import { Test, TestingModule } from '@nestjs/testing';
import { TodoController } from '../todo.controller';
import { ToDoService } from '../todo.service';
import { TodoRepository } from '../../../shared/database/repositories/todo.repository';

describe('TodoController', () => {
  let controller: TodoController;
  let service: ToDoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TodoController],
      providers: [ToDoService, TodoRepository],
    }).compile();

    controller = module.get<TodoController>(TodoController);
    service = module.get<ToDoService>(ToDoService);
  });

  describe('getToDos', () => {
    it('deve retornar um array de todos', async () => {
      const todos = [
        {
          id: 1,
          title: 'teste',
          description: 'teste',
          status: 'pending',
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];
      jest.spyOn(service, 'getToDos').mockResolvedValue(todos as never);

      const result = await controller.getToDos({ user: { userId: 1 } });

      expect(result).toEqual(todos);
    });
  });

  describe('getToDoById', () => {
    it('deve retornar um todo pelo id', async () => {
      const todo = {
        id: 1,
        title: 'teste',
        description: 'teste',
        status: 'pending',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      jest.spyOn(service, 'getToDoById').mockResolvedValue(todo as never);

      const result = await controller.getToDoById({ user: { userId: 1 } }, '1');

      expect(result).toEqual(todo);
    });
  });

  describe('createToDo', () => {
    it('deve criar um novo todo', async () => {
      const createToDoDTO = {
        title: 'teste1',
        description: 'teste',
        status: 'pending',
        userId: 1,
      };
      jest
        .spyOn(service, 'createToDo')
        .mockResolvedValue(createToDoDTO as never);

      const result = await controller.createToDo(
        { user: { userId: 1 } },
        createToDoDTO,
      );

      expect(result).toEqual(createToDoDTO);
    });
  });

  describe('updateToDo', () => {
    it('deve atualizar um todo pelo id', async () => {
      const updateToDoDTO = {
        title: 'teste1',
        description: 'teste',
        status: 'pending',
        userId: 1,
      };
      const updatedTodo = {
        title: 'teste1',
        description: 'teste',
        status: 'pending',
        userId: 1,
      };
      jest.spyOn(service, 'updateToDo').mockResolvedValue(updatedTodo as never);

      const result = await controller.updateToDo(
        { user: { userId: 1 } },
        '1',
        updateToDoDTO,
      );

      expect(result).toEqual(updatedTodo);
    });
  });

  describe('deleteToDo', () => {
    it('deve deletar um todo pelo id', async () => {
      jest.spyOn(service, 'deleteToDo').mockResolvedValue(true as never);

      const result = await controller.deleteToDo({ user: { userId: 1 } }, '1');

      expect(result).toEqual(true);
    });
  });
});

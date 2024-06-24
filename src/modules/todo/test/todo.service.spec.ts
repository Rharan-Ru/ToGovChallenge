import { Test } from '@nestjs/testing';
import { ToDoService } from '../todo.service';
import { TodoRepository } from '../../../shared/database/repositories/todo.repository';

describe('ToDoService', () => {
  let toDoService: ToDoService;
  let todoRepository: TodoRepository;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [ToDoService, TodoRepository],
    }).compile();

    toDoService = moduleRef.get<ToDoService>(ToDoService);
    todoRepository = moduleRef.get<TodoRepository>(TodoRepository);
  });

  describe('getToDos', () => {
    it('deve retornar um array de todos para um determinado userId', async () => {
      const userId = 1;
      const expectedTodos = [
        { id: 1, title: 'Todo 1', completed: false, userId: 1 },
        { id: 2, title: 'Todo 2', completed: true, userId: 1 },
      ];

      jest
        .spyOn(todoRepository, 'findAll')
        .mockResolvedValue(expectedTodos as never);

      const todos = await toDoService.getToDos(userId);

      expect(todos).toEqual(expectedTodos);
      expect(todoRepository.findAll).toHaveBeenCalledWith({ userId });
    });
  });

  describe('getToDoById', () => {
    it('deve retornar um todo para um determinado userId e todoId', async () => {
      const userId = 1;
      const todoId = 1;
      const expectedTodo = { id: 1, title: 'Todo 1', completed: false };

      jest
        .spyOn(todoRepository, 'findById')
        .mockResolvedValue(expectedTodo as never);

      const todo = await toDoService.getToDoById(userId, todoId);

      expect(todo).toEqual(expectedTodo);
      expect(todoRepository.findById).toHaveBeenCalledWith(todoId);
    });
  });

  describe('createToDo', () => {
    it('deve criar um novo todo para um determinado userId e createToDoDTO', async () => {
      const userId = 1;
      const createToDoDTO = { title: 'Novo Todo', completed: false };
      const expectedTodo = { id: 1, title: 'Novo Todo', completed: false };

      jest
        .spyOn(todoRepository, 'create')
        .mockResolvedValue(expectedTodo as never);

      const todo = await toDoService.createToDo(userId, createToDoDTO);

      expect(todo).toEqual(expectedTodo);
      expect(todoRepository.create).toHaveBeenCalledWith({
        ...createToDoDTO,
        userId: 1,
      });
    });
  });

  describe('updateToDo', () => {
    it('deve atualizar um todo para um determinado userId, todoId e updateToDoDTO', async () => {
      const userId = 1;
      const todoId = 1;
      const updateToDoDTO = { title: 'Todo Atualizado', completed: true };
      const expectedTodo = { id: 1, title: 'Todo Atualizado', completed: true };

      jest
        .spyOn(todoRepository, 'update')
        .mockResolvedValue(expectedTodo as never);

      const todo = await toDoService.updateToDo(userId, todoId, updateToDoDTO);

      expect(todo).toEqual(expectedTodo);
      expect(todoRepository.update).toHaveBeenCalledWith(todoId, {
        ...updateToDoDTO,
        userId,
      });
    });
  });

  describe('deleteToDo', () => {
    it('deve deletar um todo para um determinado userId e todoId', async () => {
      const userId = 1;
      const todoId = 1;

      jest.spyOn(todoRepository, 'delete').mockResolvedValue(true as never);

      await toDoService.deleteToDo(userId, todoId);

      expect(todoRepository.delete).toHaveBeenCalledWith(todoId);
    });
  });
});

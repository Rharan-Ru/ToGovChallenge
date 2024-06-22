import { ToDo } from '../entities/todo.entity';
import { IMemoryDatabaseRepository } from './interfaces/memoryDatabaseRepository.interface';

export class TodoRepository implements IMemoryDatabaseRepository<ToDo> {
  private todos: ToDo[] = [
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

  findAll(options?: Partial<ToDo>): ToDo[] {
    if (!options) {
      return this.todos;
    }
    return this.todos.filter((todo) =>
      Object.keys(options).every((key) => todo[key] === options[key]),
    );
  }

  findById(id: number): ToDo | null {
    try {
      const todo = this.todos.find((todo) => todo.id === id);
      if (!todo) {
        throw new Error('ToDo not found');
      }
      return todo;
    } catch (error) {
      return null;
    }
  }

  findOne(options: Partial<ToDo>): ToDo | null {
    try {
      const todo = this.todos.find((todo) =>
        Object.keys(options).every((key) => todo[key] === options[key]),
      );

      if (!todo) {
        throw new Error('ToDo not found');
      }
      return todo;
    } catch (error) {
      return null;
    }
  }

  create(todo: Partial<ToDo>): ToDo {
    const newToDo: ToDo = {
      id: this.todos.length + 1,
      title: todo.title,
      description: todo.description,
      status: todo.status,
      userId: todo.userId,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.todos.push(newToDo);
    return newToDo;
  }

  update(id: number, todo: ToDo): ToDo {
    const todoIndex = this.todos.findIndex((todo) => todo.id === id);
    if (todoIndex === -1) {
      throw new Error('ToDo not found');
    }
    const updatedToDo: Partial<ToDo> = { ...todo };
    delete updatedToDo.id;
    updatedToDo.updatedAt = new Date();
    this.todos[todoIndex] = { ...this.todos[todoIndex], ...updatedToDo };
    return updatedToDo as ToDo;
  }

  delete(id: number): boolean {
    const todoIndex = this.todos.findIndex((todo) => todo.id === id);
    if (todoIndex === -1) {
      throw new Error('ToDo not found');
    }
    this.todos.splice(todoIndex, 1);
    return true;
  }
}

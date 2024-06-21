import { ToDo } from '../entities/todo.entity';
import { IMemoryDatabaseRepository } from './interfaces/memoryDatabaseRepository.interface';

export class TodoRepository implements IMemoryDatabaseRepository<ToDo> {
  private todos: ToDo[] = [
    {
      id: 1,
      title: 'teste',
      description: 'teste',
      status: 'pending',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  findAll(): ToDo[] {
    return this.todos;
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

  create(todo: Partial<ToDo>): ToDo {
    const newToDo: ToDo = {
      id: this.todos.length + 1,
      title: todo.title,
      description: todo.description,
      status: todo.status,
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
    this.todos[todoIndex] = updatedToDo as ToDo;
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

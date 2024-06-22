import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { TodoRepository } from 'src/shared/database/repositories/todo.repository';

@Injectable()
export class ToDoService {
  constructor(private readonly toDoRepository: TodoRepository) {}

  getToDos(userId: number) {
    return this.toDoRepository.findAll({
      userId,
    });
  }

  getToDoById(userId: number, todoId: number) {
    const toDo = this.toDoRepository.findById(todoId);
    if (!toDo) {
      throw new HttpException('ToDo not found', HttpStatus.NOT_FOUND);
    }
    return toDo;
  }

  createToDo(userId: number, createToDoDTO: any) {
    return this.toDoRepository.create({
      ...createToDoDTO,
      userId,
    });
  }

  updateToDo(userId: number, todoId: number, updateToDoDTO: any) {
    const toDo = this.toDoRepository.findById(todoId);
    if (!toDo) {
      throw new HttpException('ToDo not found', HttpStatus.NOT_FOUND);
    }

    return this.toDoRepository.update(todoId, {
      ...updateToDoDTO,
      userId,
    });
  }

  deleteToDo(userId: number, todoId: number) {
    const toDo = this.toDoRepository.findById(todoId);
    if (!toDo) {
      throw new HttpException('ToDo not found', HttpStatus.NOT_FOUND);
    }

    return this.toDoRepository.delete(todoId);
  }
}

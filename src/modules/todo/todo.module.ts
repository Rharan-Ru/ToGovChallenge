import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { ToDoService } from './todo.service';
import { TodoRepository } from 'src/shared/database/repositories/todo.repository';

@Module({
  controllers: [TodoController],
  providers: [ToDoService, TodoRepository],
})
export class TodoModule {}

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Request,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ToDoService } from './todo.service';
import { CreateToDoDTO, UpdateToDoDTO } from './dtos/ToDoDTO';
import {
  TodoCreateDecorator,
  TodoDeleteDecorator,
  TodoGetAllDecorator,
  TodoGetByIdDecorator,
  TodoUpdateDecorator,
} from './decorators/ToDo.decorator';

@ApiTags('ToDo')
@ApiBearerAuth()
@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: ToDoService) {}

  @Get('/')
  @TodoGetAllDecorator()
  async getToDos(@Request() req: any) {
    const { userId } = req.user;
    return this.todoService.getToDos(+userId);
  }

  @Get('/:id')
  @TodoGetByIdDecorator()
  async getToDoById(@Request() req: any, @Param('id') id: string) {
    const { userId } = req.user;
    return this.todoService.getToDoById(+userId, +id);
  }

  @Post('/')
  @TodoCreateDecorator()
  async createToDo(@Request() req: any, @Body() createToDoDTO: CreateToDoDTO) {
    const { userId } = req.user;
    return this.todoService.createToDo(+userId, createToDoDTO);
  }

  @Put('/:id')
  @TodoUpdateDecorator()
  async updateToDo(
    @Request() req: any,
    @Param('id') id: string,
    @Body() updateToDoDTO: UpdateToDoDTO,
  ) {
    const { userId } = req.user;
    return this.todoService.updateToDo(+userId, +id, updateToDoDTO);
  }

  @Delete('/:id')
  @TodoDeleteDecorator()
  async deleteToDo(@Request() req: any, @Param('id') id: string) {
    const { userId } = req.user;
    return this.todoService.deleteToDo(+userId, +id);
  }
}

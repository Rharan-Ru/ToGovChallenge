import { ApiProperty } from '@nestjs/swagger';

export class CreateToDoDTO {
  @ApiProperty({
    description: 'O título da tarefa',
    example: 'Estudar para a prova',
  })
  title: string;
  @ApiProperty({
    description: 'A descrição da tarefa',
    example: 'Estudar o conteúdo da prova de matemática',
  })
  description: string;
  @ApiProperty({
    description: 'O status da tarefa',
    example: 'pendente | concluído | cancelado',
  })
  status: string;
}

export class UpdateToDoDTO {
  @ApiProperty({
    description: 'O título da tarefa',
    example: 'Estudar para a prova',
  })
  title: string;
  @ApiProperty({
    description: 'A descrição da tarefa',
    example: 'Estudar o conteúdo da prova de matemática',
  })
  description: string;
  @ApiProperty({
    description: 'O status da tarefa',
    example: 'pendente | concluído | cancelado',
  })
  status: string;
}

import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class LoginDTO {
  @ApiProperty({
    description: 'O email do usuário',
    example: 'teste@gmail.com',
  })
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description: 'A senha do usuário',
    example: '123456',
  })
  @IsNotEmpty()
  password: string;
}

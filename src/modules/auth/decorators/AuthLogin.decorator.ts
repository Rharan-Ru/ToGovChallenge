import { applyDecorators } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiConsumes,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';

export const AuthLoginDecorator = () => {
  return applyDecorators(
    ApiOperation({ summary: 'Realiza Login' }),
    ApiResponse({
      status: 200,
      description: 'Login feito com sucesso',
    }),
    ApiConsumes('application/x-www-form-urlencoded'),
    ApiResponse({ status: 500, description: 'Erro ao fazer login' }),
  );
};

export const AuthProfileDecorator = () => {
  return applyDecorators(
    ApiOperation({ summary: 'Obtém informações de usuário' }),
    ApiResponse({
      status: 200,
      description: 'Informações do usuário obtidas com sucesso',
    }),
    ApiConsumes('application/x-www-form-urlencoded'),
    ApiBearerAuth(),
    ApiResponse({
      status: 500,
      description: 'Erro ao obter informações do usuário',
    }),
  );
};

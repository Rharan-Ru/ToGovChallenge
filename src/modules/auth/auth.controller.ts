import { Controller, Post, Body, Get, Request } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import {
  AuthLoginDecorator,
  AuthProfileDecorator,
} from './decorators/AuthLogin.decorator';
import { LoginDTO } from './dtos/AuthDTO';
import { Public } from 'src/shared/customDecorator';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('/login')
  @AuthLoginDecorator()
  async login(@Body() loginDto: LoginDTO) {
    const { email, password } = loginDto;
    const userLogin = await this.authService.login({ email, password });

    return userLogin;
  }

  @Get('/profile')
  @AuthProfileDecorator()
  async profile(@Request() req) {
    return req.user;
  }
}

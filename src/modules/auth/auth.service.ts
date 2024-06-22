import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { IAuthLogin } from './interfaces/authLogin.interface';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async login({ email, password }: IAuthLogin): Promise<string> {
    const user = await this.userService.findByEmail(email);

    if (!user) {
      throw new HttpException('Usuário/Senha inválidos', HttpStatus.NOT_FOUND);
    }

    if (user.password !== password) {
      throw new HttpException(
        'Usuário/Senha inválidos',
        HttpStatus.UNAUTHORIZED,
      );
    }

    const payload = { userId: user.id, username: user.name };
    const token = this.jwtService.sign(payload);

    return token;
  }
}

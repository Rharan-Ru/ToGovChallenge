import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/shared/database/repositories/user.repository';
import { User } from 'src/shared/database/entities/user.entity';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async findByEmail(email: string): Promise<User> {
    return this.userRepository.findOne({
      email: email,
    });
  }
}

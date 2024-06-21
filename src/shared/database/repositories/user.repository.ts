import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { User } from '../entities/user.entity';
import { IMemoryDatabaseRepository } from './interfaces/memoryDatabaseRepository.interface';

@Injectable()
export class UserRepository implements IMemoryDatabaseRepository<User> {
  private users: User[] = [];

  constructor(private configService: ConfigService) {
    this.initializeUsers();
  }

  private initializeUsers(): void {
    const initialUserName = this.configService.get<string>('INITIAL_USER_NAME');
    const initialUserEmail =
      this.configService.get<string>('INITIAL_USER_EMAIL');
    const initialUserPassword = this.configService.get<string>(
      'INITIAL_USER_PASSWORD',
    );

    if (initialUserName && initialUserEmail && initialUserPassword) {
      const initialUser: Partial<User> = {
        name: initialUserName,
        email: initialUserEmail,
        password: initialUserPassword,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      this.create(initialUser);
    }
  }

  findAll(): User[] {
    return this.users;
  }

  findById(id: number): User | null {
    try {
      const user = this.users.find((user) => user.id === id);
      if (!user) {
        throw new Error('User not found');
      }
      return user;
    } catch (error) {
      return null;
    }
  }

  create(user: Partial<User>): User {
    const newUser: User = {
      id: this.users.length + 1,
      name: user.name,
      email: user.email,
      password: user.password,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.users.push(newUser);
    return newUser;
  }

  update(id: number, user: User): User {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex === -1) {
      throw new Error('User not found');
    }
    const updatedUser: Partial<User> = { ...user };
    delete updatedUser.id;
    updatedUser.updatedAt = new Date();
    this.users[userIndex] = updatedUser as User;
    return updatedUser as User;
  }

  delete(id: number): boolean {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex === -1) {
      throw new Error('User not found');
    }
    this.users.splice(userIndex, 1);
    return true;
  }
}

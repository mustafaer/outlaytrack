import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersRepository } from './users.repository';
import { FilterDto } from '../shared/dto/filter.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersRepository)
    private readonly userRepository: UsersRepository,
  ) {}

  create(createUserDto: CreateUserDto): Promise<User> {
    return this.userRepository.createUser(createUserDto);
  }

  findAll(filterDto: FilterDto): Promise<User[]> {
    return this.userRepository.getUsersWithSearchQuery(filterDto);
  }

  findOne(id: string): Promise<User> {
    return this.userRepository.getUserById(id);
  }

  update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    return this.userRepository.updateUser(id, updateUserDto);
  }

  updateMyUser(user: User, updateUserDto: UpdateUserDto): Promise<User> {
    return this.userRepository.updateUser(user, updateUserDto);
  }

  remove(id: string): Promise<User> {
    return this.userRepository.deleteUser(id);
  }
}

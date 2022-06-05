import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './users.repository';
import { FilterDto } from '../shared/dto/filter.dto';
import { User } from './entities/user.entity';
import { ProjectsService } from '../projects/projects.service';

@Injectable()
export class UsersService {
  constructor(
    private readonly userRepository: UsersRepository,
    private projectsService: ProjectsService,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const projects = await this.projectsService.getUsersWithIdList(
      createUserDto.projects,
    );
    return await this.userRepository.createUser(createUserDto, projects);
  }

  getUsersWithSearchQuery(filterDto: FilterDto): Promise<User[]> {
    return this.userRepository.getUsersWithSearchQuery(filterDto);
  }

  findOne(id: string): Promise<User> {
    return this.userRepository.getUserById(id);
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const projects = await this.projectsService.getUsersWithIdList(
      updateUserDto.projects,
    );

    return await this.userRepository.updateUser(id, updateUserDto, projects);
  }

  updateMyUser(user: User, updateUserDto: UpdateUserDto): Promise<User> {
    return this.userRepository.updateUser(user, updateUserDto);
  }

  remove(id: string): Promise<User> {
    return this.userRepository.deleteUser(id);
  }
}

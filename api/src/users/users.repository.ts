import { EntityRepository, Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { BadRequestException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { FilterDto } from '../shared/dto/filter.dto';
import { GenericFunctions } from '../shared/services/generic-functions';

@EntityRepository(User)
export class UsersRepository extends Repository<User> {
  private genericFunctions = new GenericFunctions();
  async getUsersWithSearchQuery(filterDto: FilterDto): Promise<User[]> {
    const filter = new FilterDto();
    const { search, limit, offset } = { ...filter, ...filterDto };

    const query = this.createQueryBuilder('user');
    if (search !== '') {
      await query
        .where('user.fullName ILIKE :search', { search: `%${search}%` })
        .orWhere('user.username ILIKE :search', { search: `%${search}%` })
        .orWhere('user.email ILIKE :search', { search: `%${search}%` })
        .getMany();
    }

    query.skip(offset * limit);
    query.take(limit);

    return await query.getMany();
  }

  async getUserById(id: string): Promise<User> {
    return await this.findOne({
      where: {
        id,
        isDeleted: false,
      },
    });
  }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const exist = await this.findOne({
      where: {
        email: createUserDto.email,
        isDeleted: false,
      },
    });

    if (exist) {
      throw new BadRequestException('Email already exists');
    }

    const salt = await bcrypt.genSalt();
    let user: User = new User();

    user = Object.assign(user, createUserDto);
    user.salt = salt;
    user.password = await this.genericFunctions.hashPassword(
      createUserDto.password,
      user.salt,
    );

    try {
      return await user.save();
    } catch (error) {
      throw new BadRequestException(error.detail);
    }
  }

  async updateUser(
    user: User | string,
    updateUserDto: UpdateUserDto,
  ): Promise<User> {
    let id: string;
    if (typeof user !== 'string') {
      id = user.id;
    } else {
      id = user;
    }

    const userToUpdate: User = await this.getUserById(id);
    if (!userToUpdate) {
      throw new BadRequestException('User not found');
    }

    userToUpdate.fullName = updateUserDto.fullName;
    userToUpdate.username = updateUserDto.username;
    userToUpdate.email = updateUserDto.email;

    try {
      return await this.save(userToUpdate);
    } catch (error) {
      throw new BadRequestException(error.detail);
    }
  }

  async deleteUser(id: string): Promise<User> {
    const user = await this.getUserById(id);
    if (!user) {
      throw new BadRequestException('User not found');
    }

    user.isDeleted = true;

    return this.save(user);
  }
}

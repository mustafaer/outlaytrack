import { EntityRepository, Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { BadRequestException, Logger } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { FilterDto } from '../shared/dto/filter.dto';
import { GenericFunctions } from '../shared/services/generic-functions';
import { Project } from '../projects/entities/project.entity';

@EntityRepository(User)
export class UsersRepository extends Repository<User> {
  private genericFunctions = new GenericFunctions();
  private logger = new Logger('UsersRepository');

  async getUsersWithSearchQuery(filterDto: FilterDto): Promise<User[]> {
    const filter = new FilterDto();
    let { search, limit, offset, orderBy } = { ...filter, ...filterDto };

    let orderType: any = 'ASC';
    if (orderBy.startsWith('-')) {
      orderType = 'DESC';
      orderBy = orderBy.substring(1);
    }
    orderBy = 'user.' + orderBy;
    console.log('se', orderBy);
    const query = this.createQueryBuilder('user');
    await query
      .where('user.fullName ILIKE :search', { search: `%${search}%` })
      .orWhere('user.username ILIKE :search', { search: `%${search}%` })
      .orWhere('user.email ILIKE :search', { search: `%${search}%` })
      .andWhere('user.isDeleted = false')
      .orderBy(orderBy, orderType)
      .getMany();

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
      relations: ['projects'],
    });
  }

  async createUser(
    createUserDto: CreateUserDto,
    projects: Project[],
  ): Promise<User> {
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
    delete createUserDto.id;
    user = Object.assign(user, createUserDto);
    if (!user.username || user.username === '') {
      user.username = user.email.split('@')[0];
    }
    user.salt = salt;
    user.password = await this.genericFunctions.hashPassword(
      createUserDto.password,
      user.salt,
    );

    user.projects = projects;

    try {
      return await user.save();
    } catch (e) {
      this.logger.error(e);
      throw new BadRequestException('Something went wrong!');
    }
  }

  async updateUser(
    user: User | string,
    updateUserDto: UpdateUserDto,
    projects: Project[] = [],
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

    if (userToUpdate.email !== updateUserDto.email) {
      const exist = await this.findOne({
        where: {
          email: updateUserDto.email,
          isDeleted: false,
        },
      });

      if (exist) {
        throw new BadRequestException('Email already exists');
      }
      userToUpdate.email = updateUserDto.email;
    }

    userToUpdate.fullName = updateUserDto.fullName;
    userToUpdate.username = updateUserDto.username;
    userToUpdate.projects = projects;

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

import { EntityRepository, Repository } from 'typeorm';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { BadRequestException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { User } from '../users/entities/user.entity';
import { GenericFunctions } from '../shared/services/generic-functions';

@EntityRepository(User)
export class AuthRepository extends Repository<User> {
  private genericFunctions = new GenericFunctions();

  async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    const { email, password } = authCredentialsDto;
    const exist = await this.findOne({ email, isDeleted: false });

    if (exist) {
      throw new BadRequestException();
    }

    const salt = await bcrypt.genSalt();
    const user = new User();

    user.email = email;
    user.username = email.split('@')[0];
    user.salt = salt;
    user.password = await this.genericFunctions.hashPassword(
      password,
      user.salt,
    );

    try {
      await user.save();
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async validateUserPassword(
    authCredentialsDto: AuthCredentialsDto,
  ): Promise<User> {
    const { email, password } = authCredentialsDto;
    const user = await this.findOne({ email, isDeleted: false });

    if (user && (await user.validatePassword(password))) {
      delete user.password;
      return user;
    } else {
      return null;
    }
  }
}

import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UsersRepository } from './users.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GenericFunctions } from '../shared/services/generic-functions';
import { AuthModule } from '../auth/auth.module';
import { PassportModule } from '@nestjs/passport';
import { ProjectsRepository } from '../projects/projects.repository';
import { ProjectsService } from '../projects/projects.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([UsersRepository, ProjectsRepository]),
    AuthModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  controllers: [UsersController],
  providers: [UsersService, GenericFunctions, ProjectsService],
})
export class UsersModule {}

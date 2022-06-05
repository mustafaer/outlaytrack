import { EntityRepository, Repository } from 'typeorm';
import { BadRequestException, Inject, Logger } from '@nestjs/common';
import { FilterDto } from '../shared/dto/filter.dto';
import { Project } from './entities/project.entity';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { UsersRepository } from '../users/users.repository';

@EntityRepository(Project)
export class ProjectsRepository extends Repository<Project> {
  private logger = new Logger('ProjectsRepository');

  constructor(
    @Inject(UsersRepository) private readonly usersRepository: UsersRepository,
  ) {
    super();
  }

  async getProjectsWithSearchQuery(filterDto: FilterDto): Promise<Project[]> {
    const filter = new FilterDto();
    let { search, limit, offset, orderBy } = { ...filter, ...filterDto };

    let orderType: any = 'ASC';
    if (orderBy.startsWith('-')) {
      orderType = 'DESC';
      orderBy = orderBy.substring(1);
    }
    orderBy = 'project.' + orderBy;
    const query = this.createQueryBuilder('project');

    // TODO: add isDeleted filter
    await query
      .where('project.name ILIKE :search', { search: `%${search}%` })
      .andWhere('project.isDeleted = false')
      .orderBy(orderBy, orderType)
      .getMany();

    query.skip(offset * limit);
    query.take(limit);

    return await query.getMany();
  }

  async getProjectsWithIdList(idList: string[]): Promise<Project[]> {
    try {
      return await this.findByIds(idList);
    } catch (e) {
      console.log('hata benim: ', e);
    }
  }

  async getProjectById(id: string): Promise<Project> {
    return await this.findOne({
      where: {
        id,
        isDeleted: false,
      },
    });
  }

  async createProject(createProjectDto: CreateProjectDto): Promise<Project> {
    let project: Project = new Project();
    project = Object.assign(project, createProjectDto);

    try {
      return await project.save();
    } catch (e) {
      this.logger.error(e);
      throw new BadRequestException('Something went wrong!');
    }
  }

  async updateProject(
    id: string,
    updateProjectDto: UpdateProjectDto,
  ): Promise<Project> {
    const project: Project = await this.getProjectById(id);
    if (!project) {
      throw new BadRequestException('Project not found');
    }

    project.name = updateProjectDto.name;

    try {
      return await this.save(project);
    } catch (error) {
      throw new BadRequestException(error.detail);
    }
  }

  async deleteProject(id: string): Promise<Project> {
    const project = await this.getProjectById(id);
    if (!project) {
      throw new BadRequestException('Project not found');
    }

    project.isDeleted = true;

    return this.save(project);
  }
}

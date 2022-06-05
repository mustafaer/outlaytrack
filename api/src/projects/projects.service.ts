import { Injectable } from '@nestjs/common';
import { Project } from './entities/project.entity';
import { CreateProjectDto } from './dto/create-project.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateProjectDto } from './dto/update-project.dto';
import { FilterDto } from '../shared/dto/filter.dto';
import { ProjectsRepository } from './projects.repository';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(ProjectsRepository)
    private readonly projectRepository: ProjectsRepository,
  ) {}

  create(createProjectDto: CreateProjectDto): Promise<Project> {
    return this.projectRepository.createProject(createProjectDto);
  }

  getProjectsWithSearchQuery(filterDto: FilterDto): Promise<Project[]> {
    return this.projectRepository.getProjectsWithSearchQuery(filterDto);
  }

  findOne(id: string): Promise<Project> {
    return this.projectRepository.getProjectById(id);
  }

  async update(
    id: string,
    updateProjectDto: UpdateProjectDto,
  ): Promise<Project> {
    return this.projectRepository.updateProject(id, updateProjectDto);
  }

  async getUsersWithIdList(idList: string[]): Promise<Project[]> {
    return await this.projectRepository.getProjectsWithIdList(idList);
  }

  remove(id: string): Promise<Project> {
    return this.projectRepository.deleteProject(id);
  }
}

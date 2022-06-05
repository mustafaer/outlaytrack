import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import * as bcrypt from 'bcrypt';
import { IsEmail, IsEmpty, MinLength } from 'class-validator';
import { Exclude } from 'class-transformer';
import { Project } from '../../projects/entities/project.entity';

@Entity()
@Index(['fullName', 'username', 'email'], { fulltext: true })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 30, nullable: true })
  fullName: string;

  @Column({ nullable: false })
  @IsEmpty()
  username: string;

  @Column({ nullable: false })
  @IsEmail()
  @MinLength(5)
  email: string;

  @Column({ nullable: false })
  @IsEmpty()
  @Exclude()
  password: string;

  @Column({ nullable: false })
  @IsEmpty()
  @Exclude()
  salt: string;

  @Column({ default: false })
  @Exclude()
  isDeleted: boolean;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    readonly: true,
  })
  public createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  public updatedAt: Date;

  @Column({ default: false })
  isAdmin: boolean;

  @ManyToMany(() => Project, (project) => project.users, {
    cascade: true,
  })
  @JoinTable()
  projects: Project[];

  /*
    TODO: add email validation for signup
    @Column({ default: false })
    isActive: boolean;
   */

  async validatePassword(password: string): Promise<boolean> {
    const hash = await bcrypt.hash(password, this.salt);
    return hash === this.password;
  }
}

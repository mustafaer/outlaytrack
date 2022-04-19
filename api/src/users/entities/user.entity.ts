import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import * as bcrypt from 'bcrypt';
import { IsEmail, IsEmpty, MinLength } from 'class-validator';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

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
  password: string;

  @Column({ nullable: false })
  @IsEmpty()
  salt: string;

  @Column({ default: false })
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

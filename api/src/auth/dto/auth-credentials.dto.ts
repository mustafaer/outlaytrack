import {
  IsEmail,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

const matches = Matches(
  /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
  { message: 'password too weak' },
);

export class AuthCredentialsDto {
  @IsString()
  @IsEmail({}, { message: 'Email format incorrect' })
  email: string;

  @IsString()
  // TODO: Make password length bigger than 8 on production
  @MinLength(1, { message: 'The password is required' })
  @MaxLength(20)
  //@matches
  password: string;
}

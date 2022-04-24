import * as bcrypt from 'bcrypt';

export class GenericFunctions {
  async hashPassword(password: string, salt: string): Promise<string> {
    return bcrypt.hash(password, salt);
  }
}

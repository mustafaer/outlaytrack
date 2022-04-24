import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { JwtStrategy } from '../../auth/jwt.strategy';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private jwtStrategy: JwtStrategy) {}

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean | Promise<boolean> | Observable<boolean>> {
    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization;
    if (!token) {
      throw new UnauthorizedException();
    }
    const user: any = await this.jwtStrategy.validate(token);
    //console.log('ff', user);
    if (user.isAdmin) {
      return true;
    }
    throw new UnauthorizedException();
  }
}

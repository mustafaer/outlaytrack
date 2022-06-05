import { Injectable } from "@angular/core";
import { catchError, map, Observable, throwError } from "rxjs";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  UrlTree,
} from "@angular/router";
import { AuthService } from "../../services/auth/auth.service";
import { CustomFunctions } from "../../models/custom-function.model";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  customFunctions: CustomFunctions = new CustomFunctions();
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const token = this.customFunctions.getLocalStorage(
      this.customFunctions.storageItems.token
    );

    return this.authService.verifyToken().pipe(
      map(() => {
        this.customFunctions.setLocalStorage(
          this.customFunctions.storageItems.token,
          token
        );
        return true;
      }),
      catchError((err: any) => {
        console.log('here')
        this.router.navigate(["login"]).then();
        return throwError(err);
      })
    );
  }
}

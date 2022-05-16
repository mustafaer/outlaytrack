import { api } from "../../../../../services/server-connection/api-urls";
import { Injectable } from "@angular/core";
import { ServerConnectionsService } from "../../../../../services/server-connection/server-connections.service";
import { LoginModel } from "./login.model";
import { Router } from "@angular/router";
import { NotificationService } from "../../../../../services/notification/notification.service";
import { TranslatePipe } from "../../../../../pipes/translate/translate.pipe";
import { CustomFunctions } from "../../../../../models/custom-function.model";

@Injectable()
export class LoginService {
  customFunctions: CustomFunctions = new CustomFunctions();

  constructor(
    private serverConnection: ServerConnectionsService,
    private router: Router,
    private notification: NotificationService,
    private translate: TranslatePipe
  ) {}

  login(data: LoginModel): void {
    this.serverConnection
      .ServerPostWithoutLogin(api.login.login, data)
      .subscribe({
        next: (val: any) => {
          this.customFunctions.setLocalStorage(
            this.customFunctions.storageItems.token,
            val.token
          );
        },
        error: (err: any) => {
          this.notification.error(err.error.message);
        },
        complete: () => {
          this.notification.success(this.translate.transform("loginSuccess"));
          this.router.navigate(["/"]);
        },
      });
  }
}

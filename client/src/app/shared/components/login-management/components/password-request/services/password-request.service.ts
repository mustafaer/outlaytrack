import {api} from "../../../../../services/server-connection/api-urls";
import {Injectable} from "@angular/core";
import {ServerConnectionsService} from "../../../../../services/server-connection/server-connections.service";
import {Router} from "@angular/router";
import {NotificationService} from "../../../../../services/notification/notification.service";
import {TranslatePipe} from "../../../../../pipes/translate/translate.pipe";
import {CustomFunctions} from "../../../../../models/custom-function.model";
import {PasswordRequestModel} from "./password-request.model";

@Injectable()
export class PasswordRequestService {

    customFunctions: CustomFunctions = new CustomFunctions();

    constructor(private serverConnection: ServerConnectionsService,
                private router: Router,
                private notification: NotificationService,
                private translate: TranslatePipe) {

    }

    forgotPassword(data: PasswordRequestModel): void {
        this.serverConnection.ServerPostWithoutLogin(api.login.passwordRequest, data).subscribe({
            next: () => {
            },
            error: (err: any) => {
                this.notification.error(err.error.message);
            },
            complete: () => {
                this.notification.success(this.translate.transform('password_request_success'));
                this.router.navigate(['/']);
            }
        })
    }
}
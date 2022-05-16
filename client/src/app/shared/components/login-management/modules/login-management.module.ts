import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {TranslatePipeModule} from "../../../pipes/translate/translate-pipe.module";
import {LoginManagementComponent} from "../login-management.component";
import {LoginModule} from "../components/login/modules/login.module";
import {LoginManagementRoutingModule} from "./login-management-routing.module";
import {PasswordRequestModule} from "../components/password-request/modules/password-request.module";

@NgModule({
    declarations: [
        LoginManagementComponent,
    ],
    imports: [
        CommonModule,
        TranslatePipeModule,
        FormsModule,
        LoginManagementRoutingModule,
        LoginModule,
        PasswordRequestModule
    ],
    exports: [
        LoginManagementComponent
    ]
})
export class LoginManagementModule {
}
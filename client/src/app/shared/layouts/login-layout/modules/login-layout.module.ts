import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {LoginLayoutRoutingModule} from "./login-layout-routing.module";
import {TranslatePipeModule} from "../../../pipes/translate/translate-pipe.module";
import {AuthService} from "../../../services/auth/auth.service";
import {LoginLayoutComponent} from "../login-layout.component";

@NgModule({
    declarations: [
        LoginLayoutComponent
    ],
    imports: [
        CommonModule,
        LoginLayoutRoutingModule,
        FormsModule,
        FormsModule,
        TranslatePipeModule,
    ],
    exports: [
        LoginLayoutComponent,
    ],
    providers: [AuthService]
})
export class LoginLayoutModule {
}

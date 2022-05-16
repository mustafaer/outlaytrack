import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {TranslatePipeModule} from "../../../../../pipes/translate/translate-pipe.module";
import {LoginComponent} from "../login.component";
import {LoginService} from "../services/login.service";

@NgModule({
    declarations: [
        LoginComponent,
    ],
    imports: [
        CommonModule,
        TranslatePipeModule,
        FormsModule,
    ],
    providers: [
        LoginService
    ],
    exports: [
        LoginComponent
    ]
})
export class LoginModule {
}
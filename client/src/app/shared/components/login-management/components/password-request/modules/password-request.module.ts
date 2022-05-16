import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {TranslatePipeModule} from "../../../../../pipes/translate/translate-pipe.module";
import {PasswordRequestComponent} from "../password-request.component";
import {PasswordRequestService} from "../services/password-request.service";

@NgModule({
    declarations: [
        PasswordRequestComponent,
    ],
    imports: [
        CommonModule,
        TranslatePipeModule,
        FormsModule,
    ],
    providers: [
        PasswordRequestService
    ],
    exports: [
        PasswordRequestComponent
    ]
})
export class PasswordRequestModule {
}
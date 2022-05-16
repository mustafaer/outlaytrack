import {HeaderComponent} from "../header.component";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {TranslatePipeModule} from "../../../pipes/translate/translate-pipe.module";

@NgModule({
    declarations: [
        HeaderComponent,
    ],
    imports: [
        CommonModule,
        TranslatePipeModule,
        FormsModule,
        RouterModule,
    ],
    exports: [
        HeaderComponent
    ]
})
export class HeaderModule {
}
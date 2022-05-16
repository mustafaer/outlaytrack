import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {DashboardRoutingModule} from "./dashboard-routing.module";
import {DashboardComponent} from "../dashboard.component";
import {TranslatePipeModule} from "../../../shared/pipes/translate/translate-pipe.module";

@NgModule({
    declarations: [
        DashboardComponent,
    ],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        FormsModule,
        TranslatePipeModule,
    ],
    providers: [],
    exports: [
        DashboardComponent
    ]
})
export class DashboardModule {
}
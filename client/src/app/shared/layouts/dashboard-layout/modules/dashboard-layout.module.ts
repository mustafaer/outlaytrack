import {CommonModule} from "@angular/common";
import {DashboardLayoutComponent} from "../dashboard-layout.component";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {DashboardLayoutRoutingModule} from "./dashboard-layout-routing.module";
import {TranslatePipeModule} from "../../../pipes/translate/translate-pipe.module";
import {AuthService} from "../../../services/auth/auth.service";
import {HeaderModule} from "../../../components/header/modules/header.module";

@NgModule({
    declarations: [
        DashboardLayoutComponent
    ],
    imports: [
        CommonModule,
        DashboardLayoutRoutingModule,
        FormsModule,
        FormsModule,
        TranslatePipeModule,
        HeaderModule
    ],
    exports: [
        DashboardLayoutComponent,
    ],
    providers: [AuthService]
})
export class DashboardLayoutModule {
}

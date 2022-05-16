import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginManagementComponent} from "../login-management.component";

const routes: Routes = [
    {path: '', component: LoginManagementComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LoginManagementRoutingModule {
}
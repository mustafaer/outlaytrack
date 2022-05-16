import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {LoginLayoutComponent} from "../login-layout.component";

const routes: Routes = [
    {
        path: '', component: LoginLayoutComponent,
        children: [
            {
                path: ':page', loadChildren: () => import('../../../components/login-management/modules/login-management.module')
                    .then(m => m.LoginManagementModule),
            },
            {
                path: '',
                loadChildren: () => import('../../../components/login-management/modules/login-management.module')
                    .then(m => m.LoginManagementModule),
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LoginLayoutRoutingModule {
}

import {RouterModule, Routes} from "@angular/router";
import {DashboardLayoutComponent} from "../dashboard-layout.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
    {
        path: '', component: DashboardLayoutComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('../../../../components/dashboard/modules/dashboard.module').then(m => m.DashboardModule)
            }, {
                path: '**',
                redirectTo: '/'
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardLayoutRoutingModule {
}

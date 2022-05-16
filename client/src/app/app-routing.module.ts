import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./shared/guards/auth/auth.guard";
import { LoginGuard } from "./shared/guards/auth/login.guard";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "login",
        loadChildren: () =>
          import(
            "./shared/layouts/login-layout/modules/login-layout.module"
          ).then((m) => m.LoginLayoutModule),
        canActivate: [LoginGuard],
      },
      {
        path: "",
        loadChildren: () =>
          import(
            "./shared/layouts/dashboard-layout/modules/dashboard-layout.module"
          ).then((m) => m.DashboardLayoutModule),
        canActivate: [AuthGuard],
      },
    ],
  },
  {
    path: "**",
    redirectTo: "/dashboard",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

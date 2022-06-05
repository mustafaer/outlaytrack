import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("../components/list/modules/list.module").then(
        (m) => m.UserListModule
      ),
  },
  {
    path: "add",
    loadChildren: () =>
      import("../components/add/modules/add.module").then(
        (m) => m.UserAddModule
      ),
  },
  {
    path: "edit",
    loadChildren: () =>
      import("../components/edit/modules/edit.module").then(
        (m) => m.UserEditModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}

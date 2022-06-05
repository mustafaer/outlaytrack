import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("../components/list/modules/list.module").then(
        (m) => m.ProjectListModule
      ),
  },
  {
    path: "add",
    loadChildren: () =>
      import("../components/add/modules/add.module").then(
        (m) => m.ProjectAddModule
      ),
  },
  {
    path: "edit",
    loadChildren: () =>
      import("../components/edit/modules/edit.module").then(
        (m) => m.ProjectEditModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectRoutingModule {}

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProjectEditComponent } from "../edit.component";

const routes: Routes = [{ path: ":id", component: ProjectEditComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectEditRoutingModule {}

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProjectAddComponent } from "../add.component";

const routes: Routes = [{ path: "", component: ProjectAddComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectAddRoutingModule {}

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserEditComponent } from "../edit.component";

const routes: Routes = [{ path: ":id", component: UserEditComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserEditRoutingModule {}

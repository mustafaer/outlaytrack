import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ProjectEditRoutingModule } from "./edit-routing.module";
import { ProjectEditComponent } from "../edit.component";
import { TranslatePipeModule } from "../../../../../shared/pipes/translate/translate-pipe.module";
import { DeleteModalModule } from "../../../../../shared/components/delete-modal/modules/delete-modal.module";

@NgModule({
  declarations: [ProjectEditComponent],
  imports: [
    CommonModule,
    ProjectEditRoutingModule,
    FormsModule,
    TranslatePipeModule,
    DeleteModalModule,
  ],
  providers: [],
  exports: [ProjectEditComponent],
})
export class ProjectEditModule {}

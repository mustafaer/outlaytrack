import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ProjectAddRoutingModule } from "./add-routing.module";
import { ProjectAddComponent } from "../add.component";
import { TranslatePipeModule } from "../../../../../shared/pipes/translate/translate-pipe.module";

@NgModule({
  declarations: [ProjectAddComponent],
  imports: [
    CommonModule,
    ProjectAddRoutingModule,
    FormsModule,
    TranslatePipeModule,
  ],
  providers: [],
  exports: [ProjectAddComponent],
})
export class ProjectAddModule {}

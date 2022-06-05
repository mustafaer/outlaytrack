import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { TranslatePipeModule } from "../../../shared/pipes/translate/translate-pipe.module";
import { DynamicTableService } from "../../../shared/components/dynamic-table/services/dynamic-table.service";
import { ProjectComponent } from "../project.component";
import { ProjectRoutingModule } from "./project-routing.module";

@NgModule({
  declarations: [ProjectComponent],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    FormsModule,
    TranslatePipeModule,
  ],
  providers: [DynamicTableService],
  exports: [ProjectComponent],
})
export class ProjectModule {}

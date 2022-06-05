import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { TranslatePipeModule } from "../../../../../shared/pipes/translate/translate-pipe.module";
import { ProjectListRoutingModule } from "./list-routing.module";
import { ProjectListComponent } from "../list.component";
import { DynamicTableModule } from "../../../../../shared/components/dynamic-table/modules/dynamic-table.module";
import { DynamicSearchModule } from "../../../../../shared/components/dynamic-search/modules/dynamic-search.module";

@NgModule({
  declarations: [ProjectListComponent],
  imports: [
    CommonModule,
    ProjectListRoutingModule,
    FormsModule,
    TranslatePipeModule,
    DynamicTableModule,
    DynamicSearchModule,
  ],
  providers: [],
  exports: [ProjectListComponent],
})
export class ProjectListModule {}

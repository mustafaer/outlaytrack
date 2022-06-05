import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { DynamicTableRoutingModule } from "./dynamic-table-routing.module";
import { DynamicTableComponent } from "../dynamic-table.component";
import { TranslatePipeModule } from "../../../pipes/translate/translate-pipe.module";
import { DynamicTableService } from "../services/dynamic-table.service";

@NgModule({
  declarations: [DynamicTableComponent],
  imports: [
    CommonModule,
    DynamicTableRoutingModule,
    FormsModule,
    TranslatePipeModule,
  ],
  providers: [DynamicTableService],
  exports: [DynamicTableComponent],
})
export class DynamicTableModule {}

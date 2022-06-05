import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { TranslatePipeModule } from "../../../../../shared/pipes/translate/translate-pipe.module";
import { UserListRoutingModule } from "./list-routing.module";
import { UserListComponent } from "../list.component";
import { DynamicTableModule } from "../../../../../shared/components/dynamic-table/modules/dynamic-table.module";
import { DynamicSearchModule } from "../../../../../shared/components/dynamic-search/modules/dynamic-search.module";

@NgModule({
  declarations: [UserListComponent],
  imports: [
    CommonModule,
    UserListRoutingModule,
    FormsModule,
    TranslatePipeModule,
    DynamicTableModule,
    DynamicSearchModule,
  ],
  providers: [],
  exports: [UserListComponent],
})
export class UserListModule {}

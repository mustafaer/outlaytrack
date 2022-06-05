import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { UserRoutingModule } from "./user-routing.module";
import { UserComponent } from "../user.component";
import { TranslatePipeModule } from "../../../shared/pipes/translate/translate-pipe.module";
import { DynamicTableService } from "../../../shared/components/dynamic-table/services/dynamic-table.service";

@NgModule({
  declarations: [UserComponent],
  imports: [CommonModule, UserRoutingModule, FormsModule, TranslatePipeModule],
  providers: [DynamicTableService],
  exports: [UserComponent],
})
export class UserModule {}

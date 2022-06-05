import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { UserEditRoutingModule } from "./edit-routing.module";
import { UserEditComponent } from "../edit.component";
import { TranslatePipeModule } from "../../../../../shared/pipes/translate/translate-pipe.module";
import { NgSelectModule } from "@ng-select/ng-select";
import { DeleteModalModule } from "../../../../../shared/components/delete-modal/modules/delete-modal.module";

@NgModule({
  declarations: [UserEditComponent],
  imports: [
    CommonModule,
    UserEditRoutingModule,
    FormsModule,
    TranslatePipeModule,
    NgSelectModule,
    DeleteModalModule,
  ],
  providers: [],
  exports: [UserEditComponent],
})
export class UserEditModule {}

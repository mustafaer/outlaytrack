import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { UserAddRoutingModule } from "./add-routing.module";
import { UserAddComponent } from "../add.component";
import { TranslatePipeModule } from "../../../../../shared/pipes/translate/translate-pipe.module";
import { NgSelectModule } from "@ng-select/ng-select";

@NgModule({
  declarations: [UserAddComponent],
  imports: [
    CommonModule,
    UserAddRoutingModule,
    FormsModule,
    TranslatePipeModule,
    NgSelectModule,
  ],
  providers: [],
  exports: [UserAddComponent],
})
export class UserAddModule {}

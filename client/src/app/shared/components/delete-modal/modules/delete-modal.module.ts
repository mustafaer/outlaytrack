import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { TranslatePipeModule } from "../../../pipes/translate/translate-pipe.module";
import { DeleteModalComponent } from "../delete-modal.component";

@NgModule({
  declarations: [DeleteModalComponent],
  imports: [CommonModule, TranslatePipeModule, FormsModule, RouterModule],
  exports: [DeleteModalComponent],
})
export class DeleteModalModule {}

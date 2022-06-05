import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { TranslatePipeModule } from "../../../pipes/translate/translate-pipe.module";
import { DynamicSearchComponent } from "../dynamic-search.component";

@NgModule({
  declarations: [DynamicSearchComponent],
  imports: [CommonModule, TranslatePipeModule, FormsModule, RouterModule],
  exports: [DynamicSearchComponent],
})
export class DynamicSearchModule {}

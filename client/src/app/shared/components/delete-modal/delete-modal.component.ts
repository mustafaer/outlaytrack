import { Component, Input } from "@angular/core";
import { DynamicTableService } from "../dynamic-table/services/dynamic-table.service";

@Component({
  selector: "app-delete-modal",
  templateUrl: "./delete-modal.component.html",
  styleUrls: ["./delete-modal.component.scss"],
})
export class DeleteModalComponent {
  @Input() customizationConfig: any;
  @Input() data: any;

  constructor(private dynamicTableService: DynamicTableService) {}

  confirmDelete(): void {
    this.dynamicTableService.delete(this.customizationConfig, this.data);
  }
}

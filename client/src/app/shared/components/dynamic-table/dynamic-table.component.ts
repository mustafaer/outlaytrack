import { Component, Input, OnInit } from "@angular/core";
import { DynamicTableService } from "./services/dynamic-table.service";

@Component({
  selector: "app-dynamic-table",
  templateUrl: "./dynamic-table.component.html",
  styleUrls: ["./dynamic-table.component.scss"],
})
export class DynamicTableComponent implements OnInit {
  @Input() customizationConfig: any;
  headers: any[] = [];
  tableData: any[] = [];

  constructor(private dynamicTableService: DynamicTableService) {}

  ngOnInit(): void {
    this.headers = this.customizationConfig.headers;
    this.dynamicTableService.loadAll(this.customizationConfig.api);
    this.dynamicTableService.data.subscribe((data: any) => {
      this.tableData = data;
    });
  }
}

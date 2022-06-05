import { Component, Input, OnInit } from "@angular/core";
import { DynamicTableService } from "../dynamic-table/services/dynamic-table.service";

@Component({
  selector: "app-dynamic-search",
  templateUrl: "./dynamic-search.component.html",
  styleUrls: ["./dynamic-search.component.scss"],
})
export class DynamicSearchComponent implements OnInit {
  @Input() customizationConfig: any;
  @Input() customClasses = "";
  @Input() placeholder = "search";
  @Input() searchValue = "";
  delayTimer: any;

  constructor(private dynamicTableService: DynamicTableService) {}

  ngOnInit(): void {}

  search(): void {
    clearTimeout(this.delayTimer);
    this.delayTimer = setTimeout(() => {
      this.dynamicTableService.requestPayload.valueOfSearch = this.searchValue;
      this.dynamicTableService.loadAll(this.customizationConfig.api);
    }, 500); // search if not new value exist in 500ms
  }
}

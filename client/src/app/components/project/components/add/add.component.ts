import { Component, OnDestroy, OnInit } from "@angular/core";
import { customizationConfig, ProjectModel } from "../../project.model";
import { Router } from "@angular/router";
import { DynamicTableService } from "../../../../shared/components/dynamic-table/services/dynamic-table.service";
import { OperationModel } from "../../../../shared/components/dynamic-table/services/dynamic-table.model";

@Component({
  selector: "app-project-add",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.scss"],
})
export class ProjectAddComponent implements OnInit, OnDestroy {
  project: ProjectModel = new ProjectModel();
  customizationConfig = customizationConfig;

  operation$: any;

  constructor(
    private router: Router,
    private dynamicTableService: DynamicTableService
  ) {}

  ngOnInit(): void {
    this.operation$ = this.dynamicTableService.operation.subscribe(
      (operation: OperationModel) => {
        if (operation.isFinished && operation.isSuccess) {
          this.project = new ProjectModel();
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.operation$?.unsubscribe();
  }

  addItem(isOnlySave: boolean = false): void {
    this.dynamicTableService.create(
      this.customizationConfig,
      this.project,
      isOnlySave
    );
  }

  cancel(): void {
    this.router.navigate([this.customizationConfig.urlPath]);
  }
}

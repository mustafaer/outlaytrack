import { Component, OnDestroy, OnInit } from "@angular/core";
import { customizationConfig, ProjectModel } from "../../project.model";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { DynamicTableService } from "../../../../shared/components/dynamic-table/services/dynamic-table.service";
import { OperationModel } from "../../../../shared/components/dynamic-table/services/dynamic-table.model";
import { CustomFunctions } from "../../../../shared/models/custom-function.model";

@Component({
  selector: "app-project-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.scss"],
})
export class ProjectEditComponent implements OnInit, OnDestroy {
  project: ProjectModel = new ProjectModel();
  customizationConfig = customizationConfig;
  projectId: string | null = null;

  operation$: any;
  route$: any;
  customFunctions: CustomFunctions = new CustomFunctions();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dynamicTableService: DynamicTableService
  ) {}

  ngOnInit(): void {
    this.getIdFromUrl();
    this.subscribeOperation();
    this.getSelectedItem();
  }

  ngOnDestroy(): void {
    this.operation$?.unsubscribe();
    this.route$?.unsubscribe();
  }

  getIdFromUrl(): void {
    this.route$ = this.route.params.subscribe((params: Params) => {
      this.projectId = params["id"];
    });
  }

  subscribeOperation(): void {
    this.operation$ = this.dynamicTableService.operation.subscribe(
      (operation: OperationModel) => {
        if (operation.isFinished && operation.isSuccess) {
          this.project = operation.data;
        }
      }
    );
  }

  getSelectedItem(): void {
    this.dynamicTableService.getItemById(
      this.customizationConfig.api,
      this.projectId
    );
  }

  editItem(isOnlySave: boolean = false): void {
    this.dynamicTableService.update(
      this.customizationConfig,
      this.project,
      isOnlySave
    );
  }

  cancel(): void {
    this.router.navigate([this.customizationConfig.urlPath]);
  }

  openDeleteModal(): void {
    this.customFunctions.openModal("#delete-modal");
  }
}

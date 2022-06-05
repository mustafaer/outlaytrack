import { Component, OnDestroy, OnInit } from "@angular/core";
import { customizationConfig, UserModel } from "../../user.model";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { DynamicTableService } from "../../../../shared/components/dynamic-table/services/dynamic-table.service";
import { OperationModel } from "../../../../shared/components/dynamic-table/services/dynamic-table.model";
import { api } from "../../../../shared/services/server-connection/api-urls";
import { CustomFunctions } from "../../../../shared/models/custom-function.model";

@Component({
  selector: "app-user-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.scss"],
})
export class UserEditComponent implements OnInit, OnDestroy {
  user: UserModel = new UserModel();
  customizationConfig = customizationConfig;
  userId: string | null = null;

  projects: any[] = [];
  projects$: any;
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

    this.getAllProjects();
  }

  ngOnDestroy(): void {
    this.operation$.unsubscribe();
    this.route$.unsubscribe();
    this.projects$?.unsubscribe();
  }

  getIdFromUrl(): void {
    this.route$ = this.route.params.subscribe((params: Params) => {
      this.userId = params["id"];
    });
  }

  getAllProjects(): void {
    this.dynamicTableService.loadAll(api.projects.projects);
    this.projects$ = this.dynamicTableService.data.subscribe((data: any) => {
      this.projects = data;
    });
  }

  subscribeOperation(): void {
    this.operation$ = this.dynamicTableService.operation.subscribe(
      (operation: OperationModel) => {
        if (operation.isFinished && operation.isSuccess) {
          this.user = operation.data;
        }
      }
    );
  }

  getSelectedItem(): void {
    this.dynamicTableService.getItemById(
      this.customizationConfig.api,
      this.userId
    );
  }

  editItem(isOnlySave: boolean = false): void {
    this.user.projects = this.user.projects.map((project: any) => {
      return project.id ? project.id : project;
    });

    this.dynamicTableService.update(
      this.customizationConfig,
      this.user,
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

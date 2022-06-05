import { Component, OnDestroy, OnInit } from "@angular/core";
import { customizationConfig, UserModel } from "../../user.model";
import { Router } from "@angular/router";
import { DynamicTableService } from "../../../../shared/components/dynamic-table/services/dynamic-table.service";
import { OperationModel } from "../../../../shared/components/dynamic-table/services/dynamic-table.model";
import { api } from "../../../../shared/services/server-connection/api-urls";

@Component({
  selector: "app-user-add",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.scss"],
})
export class UserAddComponent implements OnInit, OnDestroy {
  user: UserModel = new UserModel();
  customizationConfig = customizationConfig;

  projects: any[] = [];
  projects$: any;
  operation$: any;

  constructor(
    private router: Router,
    private dynamicTableService: DynamicTableService
  ) {}

  ngOnInit(): void {
    this.operation$ = this.dynamicTableService.operation.subscribe(
      (operation: OperationModel) => {
        if (operation.isFinished && operation.isSuccess) {
          this.user = new UserModel();
        }
      }
    );
    this.getAllProjects();
  }

  ngOnDestroy(): void {
    this.operation$?.unsubscribe();
    this.projects$?.unsubscribe();
  }

  getAllProjects(): void {
    this.dynamicTableService.loadAll(api.projects.projects);
    this.projects$ = this.dynamicTableService.data.subscribe((data: any) => {
      this.projects = data;
    });
  }

  addItem(isOnlySave: boolean = false): void {
    console.log(this.user.projects);
    /* const projectIdList = this.user.projects.map((project: any) => {
      return project.id;
    });

    console.log(projectIdList);*/

    this.dynamicTableService.create(
      this.customizationConfig,
      this.user,
      isOnlySave
    );
  }

  setProjects(projects: any[]): void {
    console.log(projects);
  }

  cancel(): void {
    this.router.navigate([this.customizationConfig.urlPath]);
  }
}

import { Injectable } from "@angular/core";
import { ServerConnectionsService } from "../../../services/server-connection/server-connections.service";
import { Router } from "@angular/router";
import { NotificationService } from "../../../services/notification/notification.service";
import { TranslatePipe } from "../../../pipes/translate/translate.pipe";
import { BehaviorSubject } from "rxjs";
import { OperationModel } from "./dynamic-table.model";
import { RequestPayload } from "../../../models/request-payload.model";
import { CustomFunctions } from "../../../models/custom-function.model";

@Injectable()
export class DynamicTableService {
  public requestPayload: RequestPayload = new RequestPayload();

  private _data = new BehaviorSubject<any[]>([]);
  readonly data = this._data.asObservable();
  private _operation = new BehaviorSubject<OperationModel>(
    new OperationModel()
  );
  readonly operation = this._operation.asObservable();
  customFunctions: CustomFunctions = new CustomFunctions();

  constructor(
    private serverConnection: ServerConnectionsService,
    private router: Router,
    private notification: NotificationService,
    private translate: TranslatePipe
  ) {}

  loadAll(api: string): void {
    this.serverConnection
      .ServerGet(api + this.requestPayload.payloadURL(1))
      .subscribe({
        next: (val: any) => {
          this._data.next(val);
        },
        error: (err: any) => {
          this.notification.error(err.error.message);
        },
      });
  }

  getItemById(api: string, id: string | null = null): void {
    let operation = new OperationModel();
    this._operation.next(operation);
    this.serverConnection.ServerGet(api + id).subscribe({
      next: (val: any) => {
        operation.data = val;
        operation.isSuccess = true;
      },
      error: (err: any) => {
        this.notification.error(err.error.message);
      },
      complete: () => {
        operation.isFinished = true;
        this._operation.next(operation);
      },
    });
  }

  create(
    customizationConfig: any,
    data: any,
    isOnlySave: boolean = false
  ): void {
    let operation = new OperationModel();
    this._operation.next(operation);
    this.serverConnection.ServerPost(customizationConfig.api, data).subscribe({
      next: (val: any) => {
        operation.data = val;
        operation.isSuccess = true;
      },
      error: (err: any) => {
        operation.isFinished = true;
        this.notification.error(err.error.message);
      },
      complete: () => {
        operation.isFinished = true;
        this._operation.next(operation);
        this.notification.success(this.translate.transform("createSuccess"));
        if (isOnlySave) {
          this.router.navigate([customizationConfig.urlPath]);
        }
      },
    });
  }

  update(
    customizationConfig: any,
    data: any,
    isOnlySave: boolean = false
  ): void {
    let operation = new OperationModel();
    this._operation.next(operation);
    this.serverConnection
      .ServerPut(customizationConfig.api + data.id, data)
      .subscribe({
        next: (val: any) => {
          operation.data = val;
          operation.isSuccess = true;
        },
        error: (err: any) => {
          operation.isFinished = true;
          this.notification.error(err.error.message);
        },
        complete: () => {
          operation.isFinished = true;
          this._operation.next(operation);
          this.notification.success(this.translate.transform("createSuccess"));

          if (isOnlySave) {
            this.router.navigate([customizationConfig.urlPath]);
          }
        },
      });
  }

  delete(customizationConfig: any, data: any): void {
    this.serverConnection
      .ServerDelete(customizationConfig.api + data.id)
      .subscribe({
        next: () => {},
        error: (err: any) => {
          this.notification.error(err.error.message);
        },
        complete: () => {
          this.customFunctions.closeModal("#delete-modal");
          this.notification.success(this.translate.transform("createSuccess"));
          this.router.navigate([customizationConfig.urlPath]);
        },
      });
  }
}

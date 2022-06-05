export class DynamicTableModel {
  constructor() {}
}

export class OperationModel {
  isFinished: boolean;
  isSuccess: boolean;
  data: any;

  constructor() {
    this.isFinished = false;
    this.isSuccess = false;
  }
}

import { Injectable } from "@angular/core";

declare let iziToast: any;

@Injectable({
  providedIn: "root",
})
export class NotificationService {
  notificationPosition = "bottomLeft"; // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
  constructor() {}

  info(message: string): void {
    iziToast.info({
      position: this.notificationPosition,
      message,
    });
  }

  success(message: any): void {
    iziToast.success({
      position: this.notificationPosition,
      message,
    });
  }

  error(message: string): void {
    iziToast.error({
      position: this.notificationPosition,
      message,
    });
  }

  warning(message: any): void {
    iziToast.warning({
      position: this.notificationPosition,
      message,
    });
  }
}

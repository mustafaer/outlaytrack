import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map, Observable, throwError } from "rxjs";
import { CustomFunctions } from "../../models/custom-function.model";
import { TranslatePipe } from "../../pipes/translate/translate.pipe";
import { TranslateService } from "../translate/translate.service";
import { NotificationService } from "../notification/notification.service";

@Injectable({
  providedIn: "root",
})
export class ServerConnectionsService {
  lang: string;
  customFunctions: CustomFunctions = new CustomFunctions();

  constructor(
    private http: HttpClient,
    private translate: TranslatePipe,
    private translateService: TranslateService,
    private notification: NotificationService
  ) {
    this.lang = translateService.currentLang;
  }

  public setHeadersWithToken(): HttpHeaders {
    const token = this.customFunctions.getLocalStorage(
      this.customFunctions.storageItems.token
    );
    let headersWithToken: HttpHeaders;
    headersWithToken = new HttpHeaders()
      .set("Accept", "application/json")
      .set("Cache-Control", " no-cache")
      .set("Content-Type", "application/json")
      .set("Accept-Language", this.lang)
      .set("Authorization", token);
    return headersWithToken;
  }

  public setHeadersWithoutToken(): HttpHeaders {
    let headerWithoutToken: HttpHeaders;
    headerWithoutToken = new HttpHeaders()
      .set("Accept", "application/json")
      .set("Cache-Control", " no-cache")
      .set("Content-Type", "application/json")
      .set("Accept-Language", this.lang);
    return headerWithoutToken;
  }

  ServerGet(address: string): Observable<any> {
    const headers = this.setHeadersWithToken();
    const options = { headers };
    return this.http.get(address, options).pipe(
      map((res) => res),
      catchError((err) => {
        this.ServerError(err);
        return throwError(err);
      })
    );
  }

  ServerPost(address: string, data: any): Observable<any> {
    const headers = this.setHeadersWithToken();
    const options = { headers };
    return this.http.post(address, data, options).pipe(
      map((res) => res),
      catchError((err) => {
        this.ServerError(err);
        return throwError(err);
      })
    );
  }

  ServerPut(address: string, data: any): Observable<any> {
    const headers = this.setHeadersWithToken();
    const options = { headers };
    return this.http.put(address, data, options).pipe(
      map((res) => res),
      catchError((err) => {
        this.ServerError(err);
        return throwError(err);
      })
    );
  }

  ServerPatch(address: string, data: any): Observable<any> {
    const headers = this.setHeadersWithToken();
    const options = { headers };
    return this.http.patch(address, data, options).pipe(
      map((res) => res),
      catchError((err) => {
        this.ServerError(err);
        return throwError(err);
      })
    );
  }

  ServerDelete(address: string, data = {}): Observable<any> {
    const headers = this.setHeadersWithToken();
    const options = { headers, body: data };
    return this.http.delete(address, options).pipe(
      map((res) => res),
      catchError((err) => {
        this.ServerError(err);
        return throwError(err);
      })
    );
  }

  ServerOption(address: string): Observable<any> {
    const headers = this.setHeadersWithToken();
    const options = { headers };
    return this.http.options(address, options).pipe(
      map((res) => res),
      catchError((err) => {
        this.ServerError(err);
        return throwError(err);
      })
    );
  }

  ServerGetWithoutLogin(address: string): Observable<any> {
    const headers = this.setHeadersWithoutToken();
    const options = { headers };
    return this.http.get(address, options).pipe(
      map((res) => res),
      catchError((err) => {
        this.ServerError(err);
        return throwError(err);
      })
    );
  }

  ServerPostWithoutLogin(address: string, data: any): Observable<any> {
    const headers = this.setHeadersWithoutToken();
    const options = { headers };
    return this.http.post(address, data, options).pipe(
      map((res) => res),
      catchError((err) => {
        this.ServerError(err);
        return throwError(err);
      })
    );
  }

  ServerPutWithoutLogin(address: string, data: any): Observable<any> {
    const headers = this.setHeadersWithoutToken();
    const options = { headers };
    return this.http.put(address, data, options).pipe(
      map((res) => res),
      catchError((err) => {
        this.ServerError(err);
        return throwError(err);
      })
    );
  }

  ServerPatchWithoutLogin(address: string, data: any): Observable<any> {
    const headers = this.setHeadersWithoutToken();
    const options = { headers };
    return this.http.patch(address, data, options).pipe(
      map((res) => res),
      catchError((err) => {
        this.ServerError(err);
        return throwError(err);
      })
    );
  }

  ServerDeleteWithoutLogin(address: string, data = {}): Observable<any> {
    const headers = this.setHeadersWithoutToken();
    const options = { headers, body: data };
    return this.http.delete(address, options).pipe(
      map((res) => res),
      catchError((err) => {
        this.ServerError(err);
        return throwError(err);
      })
    );
  }

  ServerOptionWithoutLogin(address: string): Observable<any> {
    const headers = this.setHeadersWithoutToken();
    const options = { headers };
    return this.http.options(address, options).pipe(
      map((res) => res),
      catchError((err) => {
        this.ServerError(err);
        return throwError(err);
      })
    );
  }

  ClearSession(): void {
    const tempLang = this.translateService.currentLang;
    localStorage.clear();
    sessionStorage.clear();
    this.customFunctions.setLocalStorage(
      this.customFunctions.storageItems.lang,
      tempLang
    );
    window.location.href = window.location.origin + "/login";
  }

  ServerError(err: any): any {
    const error = err.error;
    if (err.status === 401 && error.detail && error.detail === "token.expire") {
      this.notification.error(this.translate.transform("tokenExpire"));
      this.ClearSession();
    } else if (err.status === 401) {
      this.notification.error(this.translate.transform("loginErrorInfo"));
    }
    return error;
  }
}

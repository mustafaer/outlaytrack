import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AuthGuard} from "./shared/guards/auth/auth.guard";
import {AuthService} from "./shared/services/auth/auth.service";
import {NotificationService} from "./shared/services/notification/notification.service";
import {FormsModule} from "@angular/forms";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {TranslatePipeModule} from "./shared/pipes/translate/translate-pipe.module";

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        NoopAnimationsModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule,
        TranslatePipeModule,
    ],
    providers: [
        AuthService,
        AuthGuard,
        NotificationService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

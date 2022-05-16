import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {LoginModel} from "./services/login.model";
import {LoginService} from "./services/login.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    loginModel: LoginModel = new LoginModel();

    constructor(private router: Router, private loginService: LoginService) {
    }

    ngOnInit(): void {
    }

    login(): void {
        this.loginService.login(this.loginModel);
    }

    forgotPassword(): void {
        this.router.navigate(['login/password-request']).then();
    }

}

import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {PasswordRequestModel} from "./services/password-request.model";
import {PasswordRequestService} from "./services/password-request.service";

@Component({
    selector: 'app-password-request',
    templateUrl: './password-request.component.html',
    styleUrls: ['./password-request.component.scss']
})
export class PasswordRequestComponent implements OnInit {

    passwordRequestModel: PasswordRequestModel = new PasswordRequestModel();

    constructor(private router: Router, private passwordRequestService: PasswordRequestService) {
    }

    ngOnInit(): void {
    }

    forgotPassword(): void {
        this.passwordRequestService.forgotPassword(this.passwordRequestModel);
    }

    goLoginPage(): void {
        this.router.navigate(['login']).then();
    }

}

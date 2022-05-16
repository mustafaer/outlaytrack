import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'app-login-management',
    templateUrl: './login-management.component.html',
    styleUrls: ['./login-management.component.scss']
})
export class LoginManagementComponent implements OnInit {

    activeComponent = 'login';
    components: string[] = [
        'login',
        'password-request',
        'set-password',
    ];

    constructor(private route: ActivatedRoute, private router: Router) {
    }

    ngOnInit(): void {
        const page = this.route.snapshot.paramMap.get('page');
        console.log(page)
        if (page && this.components.includes(page)) {
            this.activeComponent = page;
        } else {
            this.router.navigate(['/login']).then();
        }
    }
}
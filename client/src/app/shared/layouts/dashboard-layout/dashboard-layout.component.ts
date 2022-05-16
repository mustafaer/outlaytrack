import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";

@Component({
    selector: 'app-dashboard-layout',
    templateUrl: './dashboard-layout.component.html',
    styleUrls: ['./dashboard-layout.component.scss']
})
export class DashboardLayoutComponent implements OnInit {
    public sidebarIsOpen = false;
    userName = '';
    profilePicture = '';

    constructor(private authService: AuthService) {
    }

    ngOnInit(): void {
    }

    toggleSidebar(): void {
        if (!this.sidebarIsOpen) {
            this.openNav();
            this.sidebarIsOpen = true;
        } else {
            this.closeNav();
            this.sidebarIsOpen = false;
        }
    }

    openNav(): void {
        // @ts-ignore
        document.getElementById('mySidenav').style.width = '250px';
        // @ts-ignore
        document.getElementById('main').style.marginLeft = '250px';
    }

    closeNav(): void {
        // @ts-ignore
        document.getElementById('mySidenav').style.width = '0';
        // @ts-ignore
        document.getElementById('main').style.marginLeft = '0';
    }

    logOut(): void {
        this.authService.serverLogout();
    }

}

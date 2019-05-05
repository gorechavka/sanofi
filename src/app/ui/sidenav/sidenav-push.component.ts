import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-sidenav-push',
    templateUrl: './sidenav-push.component.html',
    styleUrls: ['./sidenav-push.component.css'],
})
export class SidenavPushComponent {
    constructor() {}

    public opened = false;

    onHover(target: HTMLElement) {
        this.opened = true;
    }

    onBlur(target: HTMLElement) {
        this.opened = false;
    }
}

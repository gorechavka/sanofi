import { Component, OnInit } from '@angular/core';
import { menuItems } from './doctor-menu';

@Component({
    selector: 'app-doctor-data',
    templateUrl: './doctor-data.component.html',
    styleUrls: ['./doctor-data.component.css'],
})
export class DoctorDataComponent implements OnInit {
    opened: boolean = true;
    menuItems: { title: string; path: string }[] = menuItems;

    constructor() {}

    ngOnInit() {}
}

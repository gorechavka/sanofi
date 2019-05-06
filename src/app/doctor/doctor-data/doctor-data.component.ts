import { Component, OnInit } from '@angular/core';
import { menuItems } from './doctor-menu';
import { LocalStoreService } from '../../global/local-store.service';

@Component({
    selector: 'app-doctor-data',
    templateUrl: './doctor-data.component.html',
    styleUrls: ['./doctor-data.component.css'],
})
export class DoctorDataComponent implements OnInit {
    opened: boolean = true;
    menuItems: { title: string; path: string }[] = menuItems;
    choosen: string = 'disease';

    constructor(private storeService: LocalStoreService) {}

    ngOnInit() {
        if (this.storeService.has('choosen-doctor')) {
            this.choosen = this.storeService.getData('choosen-doctor');
        }
    }

    onItemChoosen(item: string) {
        this.choosen = item;
        this.storeService.keepData('choosen-doctor', item);
    }
}

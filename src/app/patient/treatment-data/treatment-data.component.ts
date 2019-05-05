import { Component, OnInit } from '@angular/core';
import { treatmentMenuItems } from './treatment-menu';
import { LocalStoreService } from 'src/app/global/local-store.service';

@Component({
    selector: 'app-treatment-data',
    templateUrl: './treatment-data.component.html',
    styleUrls: ['./treatment-data.component.css'],
})
export class TreatmentDataComponent implements OnInit {
    menuItems: {
        title: string;
        path: string;
    }[] = treatmentMenuItems;

    choosen: string = 'methods';

    constructor(private storeService: LocalStoreService) {}

    ngOnInit() {
        if (this.storeService.has('choosen-treatment')) {
            this.choosen = this.storeService.getData('choosen-treatment');
        }
    }

    onItemChoosen(item: string) {
        this.choosen = item;
        this.storeService.keepData('choosen-treatment', item);
    }
}

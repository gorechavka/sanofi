import { Component, OnInit } from '@angular/core';
import { diseaseMenuItems } from './disease-menu';
import { LocalStoreService } from 'src/app/global/local-store.service';

@Component({
    selector: 'app-disease-data',
    templateUrl: './disease-data.component.html',
    styleUrls: ['./disease-data.component.css'],
})
export class DiseaseDataComponent implements OnInit {
    menuItems: {
        title: string;
        path: string;
    }[] = diseaseMenuItems;

    choosen: string = 'disease';

    constructor(private storeService: LocalStoreService) {}

    ngOnInit() {
        if (this.storeService.has('choosen-disease')) {
            this.choosen = this.storeService.getData('choosen-disease');
        }
    }

    onItemChoose(item: string) {
        this.choosen = item;
        localStorage.setItem('choosen-disease', item);
    }
}

import { Component, OnInit } from '@angular/core';
import { Therapy } from 'src/app/models/therapy';
import { therapyItemData } from './therapy-data';

@Component({
    selector: 'app-therapy',
    templateUrl: './therapy.component.html',
    styleUrls: ['./therapy.component.css'],
})
export class TherapyComponent implements OnInit {
    therapies: Therapy[] = therapyItemData;
    current: number = 0;
    get therapy(): Therapy {
        return this.therapies[this.current];
    }
    constructor() {}

    ngOnInit() {}

    onNextClick() {
        if (this.current < this.therapies.length) {
            this.current++;
        }
    }

    onPreviousClick() {
        if (this.current >= 0) {
            this.current--;
        }
    }
}

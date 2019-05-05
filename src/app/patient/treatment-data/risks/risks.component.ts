import { Component, OnInit } from '@angular/core';
import { Risk } from '../../../models/risk';
import { risksData } from './risks-data';

@Component({
    selector: 'app-risks',
    templateUrl: './risks.component.html',
    styleUrls: ['./risks.component.css'],
})
export class RisksComponent implements OnInit {
    risks: Risk[] = risksData;
    current: number = 0;

    get risk(): Risk {
        return this.risks[this.current];
    }

    constructor() {}

    ngOnInit() {}

    onNextClick() {
        if (this.current < this.risks.length) {
            this.current++;
        }
    }

    onPreviousClick() {
        if (this.current >= 0) {
            this.current--;
        }
    }
}

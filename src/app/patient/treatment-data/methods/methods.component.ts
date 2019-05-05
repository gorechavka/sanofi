import { Component, OnInit } from '@angular/core';
import { Method } from '../../../models/method';
import { methodsData } from './methods-data';

@Component({
    selector: 'app-methods',
    templateUrl: './methods.component.html',
    styleUrls: ['./methods.component.css'],
})
export class MethodsComponent implements OnInit {
    methods: Method[] = methodsData;
    current: number = 0;

    get method(): Method {
        return this.methods[this.current];
    }

    constructor() {}

    ngOnInit() {}

    onNextClick() {
        if (this.current < this.methods.length) {
            this.current++;
        }
    }

    onPreviousClick() {
        if (this.current >= 0) {
            this.current--;
        }
    }
}

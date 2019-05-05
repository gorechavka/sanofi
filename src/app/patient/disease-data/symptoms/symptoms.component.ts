import {
    Component,
    OnInit,
    ViewChild,
    AfterViewInit,
    ElementRef,
} from '@angular/core';
import { symptomsData } from './symptoms-data';
import { Symptom } from 'src/app/models/symptom';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-symptoms',
    templateUrl: './symptoms.component.html',
    styleUrls: ['./symptoms.component.css'],
})
export class SymptomsComponent implements AfterViewInit {
    symptoms: Symptom[] = symptomsData;
    current: number = 0;
    get symptom(): Symptom {
        return this.symptoms[this.current];
    }
    private range$ = new Subject<number>();

    @ViewChild('imgs') imgs: ElementRef<HTMLDivElement>;

    ngAfterViewInit() {
        console.log(this.imgs);
        this.range$.subscribe(value => {
            const delta = value * 5;
            const grad = `linear-gradient(to right, transparent ${50 -
                delta}%, rgba(0,0,0,0.9) ${50 -
                delta}%, rgba(0, 0, 0, 0.9) ${100 - delta}%, transparent ${100 -
                delta}%)`;
            this.imgs.nativeElement.style.backgroundImage = grad;
        });
    }

    onNextClick() {
        if (this.current < this.symptoms.length) {
            this.current++;
        }
    }

    onPreviousClick() {
        if (this.current >= 0) {
            this.current--;
        }
    }

    onRangeChange(value: number) {
        this.range$.next(+value);
    }
}

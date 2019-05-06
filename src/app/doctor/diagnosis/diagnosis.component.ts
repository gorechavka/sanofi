import { Component, OnInit } from '@angular/core';
import { Diagnosis } from 'src/app/models/diagnosis';
import { diagnosisItemData } from './diagnosis-data';

@Component({
    selector: 'app-diagnosis',
    templateUrl: './diagnosis.component.html',
    styleUrls: ['./diagnosis.component.css'],
})
export class DiagnosisComponent {
    diagnoses: Diagnosis[] = diagnosisItemData;
    current: number = 0;
    get diagnosis(): Diagnosis {
        return this.diagnoses[this.current];
    }

    onNextClick() {
        if (this.current < this.diagnoses.length) {
            this.current++;
        }
    }

    onPreviousClick() {
        if (this.current >= 0) {
            this.current--;
        }
    }
}

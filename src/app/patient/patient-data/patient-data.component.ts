import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientState } from 'src/app/models/patient-state';
import { LocalStoreService } from '../../global/local-store.service';

@Component({
    selector: 'app-patient-data',
    templateUrl: './patient-data.component.html',
    styleUrls: ['./patient-data.component.css'],
})
export class PatientDataComponent implements OnInit {
    state: PatientState = 'healthy';
    constructor(private storeService: LocalStoreService) {}

    ngOnInit() {
        if (this.storeService.has('patientState')) {
            this.state = this.storeService.getData(
                'patientState'
            ) as PatientState;
        }
    }

    onToggleState(state: PatientState) {
        this.state = state;
        this.storeService.keepData('patientState', state);
    }
}

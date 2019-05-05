import { Component, OnInit, Output, Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { PatientState } from 'src/app/models/patient-state';

@Component({
    selector: 'app-eye',
    templateUrl: './eye.component.html',
    styleUrls: ['./eye.component.css'],
})
export class EyeComponent implements OnInit {
    @Output() toggleState = new EventEmitter<PatientState>();
    @Input() opened: boolean;
    constructor() {}

    ngOnInit() {}

    onClick(eye: HTMLButtonElement) {
        this.toggleEye(eye);
        this.toggleState.emit(this.getState());
    }

    toggleEye(eye: HTMLButtonElement) {
        eye.classList.add('clicked');
        this.opened = !this.opened;
        setTimeout(_ => {
            eye.classList.remove('clicked');
        }, 1000);
    }

    getState(): PatientState {
        return this.opened ? 'healthy' : 'diseased';
    }
}

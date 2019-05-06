import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorDataComponent } from './doctor-data/doctor-data.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { UiModule } from '../ui/ui.module';
import { DiseaseComponent } from './disease/disease.component';
import { TherapyComponent } from './therapy/therapy.component';
import { DiagnosisComponent } from './diagnosis/diagnosis.component';

@NgModule({
    declarations: [
        DoctorDataComponent,
        DiseaseComponent,
        TherapyComponent,
        DiagnosisComponent,
    ],
    imports: [CommonModule, MatSidenavModule, UiModule],
})
export class DoctorModule {}

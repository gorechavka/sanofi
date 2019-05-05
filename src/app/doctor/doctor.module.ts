import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorDataComponent } from './doctor-data/doctor-data.component';
import { PatientDataComponent } from '../patient/patient-data/patient-data.component';
import { TreatmentDataComponent } from '../patient/treatment-data/treatment-data.component';
import { DiseaseDataComponent } from '../patient/disease-data/disease-data.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { UiModule } from '../ui/ui.module';

@NgModule({
    declarations: [DoctorDataComponent],
    imports: [CommonModule, MatSidenavModule, UiModule],
})
export class DoctorModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientRoutingModule } from './patient-routing.module';
import { PatientDataComponent } from './patient-data/patient-data.component';
import { TreatmentDataComponent } from './treatment-data/treatment-data.component';
import { DiseaseDataComponent } from './disease-data/disease-data.component';
import { UiModule } from '../ui/ui.module';
import { MethodsComponent } from './treatment-data/methods/methods.component';
import { GeneTherapyComponent } from './treatment-data/gene-therapy/gene-therapy.component';
import { RisksComponent } from './treatment-data/risks/risks.component';
import { MemoComponent } from './treatment-data/memo/memo.component';
import { DiseaseComponent } from './disease-data/disease/disease.component';
import { SymptomsComponent } from './disease-data/symptoms/symptoms.component';

@NgModule({
    declarations: [
        PatientDataComponent,
        TreatmentDataComponent,
        DiseaseDataComponent,
        MethodsComponent,
        GeneTherapyComponent,
        RisksComponent,
        MemoComponent,
        DiseaseComponent,
        SymptomsComponent,
    ],
    imports: [CommonModule, PatientRoutingModule, UiModule],
})
export class PatientModule {}

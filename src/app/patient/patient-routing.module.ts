import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MethodsComponent } from './treatment-data/methods/methods.component';
import { GeneTherapyComponent } from './treatment-data/gene-therapy/gene-therapy.component';
import { RisksComponent } from './treatment-data/risks/risks.component';
import { MemoComponent } from './treatment-data/memo/memo.component';
import { DiseaseComponent } from './disease-data/disease/disease.component';
import { SymptomsComponent } from './disease-data/symptoms/symptoms.component';
import { TreatmentDataComponent } from './treatment-data/treatment-data.component';
import { DiseaseDataComponent } from './disease-data/disease-data.component';

const routes: Routes = [
    {
        path: 'patient/diseased',
        component: TreatmentDataComponent,
        children: [
            {
                path: 'methods',
                component: MethodsComponent,
            },
            {
                path: 'gene-therapy',
                component: GeneTherapyComponent,
            },
            { path: 'risks', component: RisksComponent },
            { path: 'memo', component: MemoComponent },
        ],
    },
    {
        path: 'patient/healthy',
        component: DiseaseDataComponent,
        children: [
            { path: 'disease', component: DiseaseComponent },
            {
                path: 'symptoms',
                component: SymptomsComponent,
            },
        ],
    },
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PatientRoutingModule {}

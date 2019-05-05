import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoctorDataComponent } from './doctor/doctor-data/doctor-data.component';
import { PatientDataComponent } from './patient/patient-data/patient-data.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {
        path: 'doctor',
        component: DoctorDataComponent,
    },
    {
        path: 'patient',
        component: PatientDataComponent,
    },
    { path: '', component: HomeComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}

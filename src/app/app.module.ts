import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoctorModule } from './doctor/doctor.module';
import { PatientModule } from './patient/patient.module';
import { HomeComponent } from './home/home.component';
import { UiModule } from './ui/ui.module';
import { Location } from '@angular/common';

@NgModule({
    declarations: [AppComponent, HomeComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        DoctorModule,
        PatientModule,
        BrowserAnimationsModule,
        UiModule,
    ],
    providers: [Location],
    bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateDoctorComponent } from './components/create-doctor/create-doctor.component';
import { CreatePatientComponent } from './components/create-patient/create-patient.component';
import { ShowDoctorInformationComponent } from './components/show-doctor-information/show-doctor-information.component';
import { ShowPatientInformationComponent } from './components/show-patient-information/show-patient-information.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateDoctorComponent,
    CreatePatientComponent,
    ShowDoctorInformationComponent,
    ShowPatientInformationComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateDoctorComponent } from './components/create-doctor/create-doctor.component';
import { CreatePatientComponent } from './components/create-patient/create-patient.component';
import { ShowDoctorInformationComponent } from './components/show-doctor-information/show-doctor-information.component';
import { ShowPatientInformationComponent } from './components/show-patient-information/show-patient-information.component';
import { HomeComponent } from './components/home/home.component';
const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "create-doctor",
    component: CreateDoctorComponent
  }, 
  {
    path: "create-patient",
    component: CreatePatientComponent
  },
  {
    path: "show-doctor",
    component: ShowDoctorInformationComponent
  }, 
  {
    path: "show-patient",
    component: ShowPatientInformationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

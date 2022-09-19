import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/models/patient/patient';
import { DoctorserviceService } from '../../services/doctorservice.service';
import { PatientserviceService } from '../../services/patientservice.service';

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css']
})
export class CreatePatientComponent implements OnInit {
  patientModel = new Patient("",25,"","", new Date,"n/a");
  doctors:any = [];

  constructor(private _patientService: PatientserviceService, private _doctorService: DoctorserviceService) { }

  ngOnInit(): void {
    this._doctorService.getDoctorList().subscribe(
      data =>{
       this.doctors = data;
      },
      error => {
        console.log(error);
      }
    )
  }

  onSubmit() {
    console.log(this.patientModel)
    this._patientService.save(this.patientModel).subscribe(
      data =>{
        alert(
          "Patient added succesfully"
        )
      },
      error => {
        alert(
          "error"
        )}
    )
  }

}

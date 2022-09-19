import { Component, OnInit } from '@angular/core';
import { PatientserviceService } from '../../services/patientservice.service';

@Component({
  selector: 'app-show-patient-information',
  templateUrl: './show-patient-information.component.html',
  styleUrls: ['./show-patient-information.component.css']
})
export class ShowPatientInformationComponent implements OnInit {

  constructor(private _patientService: PatientserviceService) { }
  patientId = "";
  patients: any = [];
  selectedPatient: any;
//  selectedPatient= {
//   patientId: "dkfaf",
//   name: "lskdfjlsd",
//   age: 25,
//   doctorName: "dkfjlf",
//   prescription: "kdfj",
//   appointmentDate: "7 dec"
//  }
  ngOnInit(): void {
    this._patientService.getPatientList().subscribe(
      data => {
        this.patients = data;
        console.log(this.patients);
      },
      error => {
        console.log(error);
      }
    )
  }

  changePatientId(event: any): void {
    this.patientId = event.target.value;
  }

  setPatient() {
    console.log(this.patientId);
    
    for(let i=0;i<this.patients.length;i++){
      if(this.patients[i].id == this.patientId){
        this.selectedPatient = this.patients[i];
      }
    }

    console.log(this.selectedPatient,this.patientId);
    // this.selectedPatient = patient[0];
  }
}

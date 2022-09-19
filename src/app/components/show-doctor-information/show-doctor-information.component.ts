import { Component, OnInit } from '@angular/core';
import { DoctorserviceService } from '../../services/doctorservice.service';

@Component({
  selector: 'app-show-doctor-information',
  templateUrl: './show-doctor-information.component.html',
  styleUrls: ['./show-doctor-information.component.css']
})
export class ShowDoctorInformationComponent implements OnInit {
  
  doctorName = ""
  doctors: any =  [];
  selectedDoctor: any;
  // selectedDoctor = {
  //   name: "pankaj",
  //   age: 24,
  //   specialistField: "power",
  //   noOfPatients: 43
  // }
  constructor(private _doctorService: DoctorserviceService) { }

  ngOnInit(): void {
    this._doctorService.getDoctorList().subscribe(
      data => {
        console.log(data);
        this.doctors = data;
      },
      error => {
        console.log(error);
      }
    )
  }

  onSubmit() {
    let doctor =  this.doctors.filter((doc: any) => {
      return  doc.name === this.doctorName
    });

    this.selectedDoctor = doctor[0];
  }
  }

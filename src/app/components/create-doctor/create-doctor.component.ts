import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/models/doctor/doctor';
import { DoctorserviceService } from '../../services/doctorservice.service';

@Component({
  selector: 'app-create-doctor',
  templateUrl: './create-doctor.component.html',
  styleUrls: ['./create-doctor.component.css']
})
export class CreateDoctorComponent implements OnInit {
  doctorModel = new Doctor("",25,"","");

  constructor(private _doctorService: DoctorserviceService) { }

  ngOnInit(): void {
  }

  onGenderChange(event: any) {
    console.log(event);
  }

  onSubmit() {
    this._doctorService.save(this.doctorModel).subscribe(
      data =>{
        alert("Doctor Added !!");
        console.log(data);
      },
      error => {
        alert("Invalid Entry !!");
        console.log(error);
      }
    )
  }
}

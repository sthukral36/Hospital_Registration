import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Doctor } from 'src/app/models/doctor/doctor';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DoctorserviceService {
  
  // baseApi = localhost:3000/
  private _saveDoctorUrl = environment.baseApi + "doctors/doctor";
  private _getDoctorListUrl = environment.baseApi + "doctors";

  constructor(private _http: HttpClient) { }

  save(doctorModel: Doctor) {
   return this._http.post(this._saveDoctorUrl, doctorModel);
  }

  getDoctorList() {
    return this._http.get(this._getDoctorListUrl);
  }
}

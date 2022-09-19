import { Injectable } from '@angular/core';
import { Patient } from 'src/app/models/patient/patient';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PatientserviceService {

  
  private _savePatientrUrl = environment.baseApi + 'patients/patient';
  private _getPatientListUrl = environment.baseApi + 'patients/all';

  constructor(private _http: HttpClient) { }

  save(patientModel: Patient) {
   return this._http.post(this._savePatientrUrl, patientModel);
  }

  getPatientList() {
    return this._http.get(this._getPatientListUrl);
  }
}

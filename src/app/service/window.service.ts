import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WindowService {

  get windowRef(){
    return window;
  }
  baseUrl = 'http://localhost:8080/';


  constructor(private http:HttpClient){}
 

  public getPurposeDropdownList():Observable<any> {
    return this.http.get('http://localhost:8080/deseases/getAllDesease');
  }

  public getRlationDropdownList():Observable<any> {
    return this.http.get('http://localhost:8080/relationwithpatient/relation');
  }
  public getConditionDropdownList():Observable<any> {
    return this.http.get('http://localhost:8080/patient_condition/getpatientcondition');
  }
  public getMedicalConditionDropdownList():Observable<any> {
    return this.http.get('http://localhost:8080/medical_dropdown/get');
  }
  public getGenderDropdownList():Observable<any> {
    return this.http.get('http://localhost:8080/gender/get');
  }
  public getTaxDropdownList():Observable<any> {
    return this.http.get('http://localhost:8080/taxbenifit/tax');
  }
  public getUnderSectionDropdownList():Observable<any> {
    return this.http.get('http://localhost:8080/undersection/sections');
  }
  public getMonthlyHelpDropdownList():Observable<any> {
    return this.http.get('http://localhost:8080/monthlyhelp/help');
  }
  getDonateDropdownList(): Observable<any>{
    return this.http.get('http://localhost:8080/donatefrequency/get');
  }
  public getPlansDropdownList(): Observable<any> {

    
    return this.http.get('http://localhost:8080/donatefrequency/get');
  }

}

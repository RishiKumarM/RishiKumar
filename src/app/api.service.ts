import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { AppConstants } from './AapConstant';

export interface Country {
  flag: string;
  name: string;
}
export interface City {
  flag: string;
  name: string;
}
export interface State {
  flag: string;
  name: string;
}
function _window() :any{
  return window;
} 
@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http:HttpClient) { }

  postOtpSend(data:any){
      return this.http.post(AppConstants.API_BASE_URL+'otpsend/post',data).pipe(map((response: any) => response));
  }

  validateOTP(data:any){
    return this.http.post(AppConstants.API_BASE_URL + 'otpsend/verifyEmail', data).pipe(map((response: any) => response));
  }
  userTypesForm(id:any, data:any){
    return this.http.put(AppConstants.API_BASE_URL + 'adminDetails/update/' + id, data);
  }

  verification(data:any){
    return this.http.post(AppConstants.API_BASE_URL + 'adminDetails/post',data);
  }
  updatePackage(data:any){
    return this.http.post(AppConstants.API_BASE_URL + 'updatePackage/post',data);
  }
  verifications(id:any, data:any){
    return this.http.put(AppConstants.API_BASE_URL + 'adminDetails/update/' + id, data);
  }

  countries: Country[] = [
    {
      name: 'Arkansas',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg',
    },
    {
      name: 'California',
      // https://commons.wikimedia.org/wiki/File:Flag_of_California.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg',
    },  
    {
      name: 'Florida',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg',
    },
    {
      name: 'Texas',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg',
    },
  ];

  private _filterStates(value: string): Country[] {
    const filterValue = value.toLowerCase();

    return this.countries.filter(country => country.name.toLowerCase().includes(filterValue));
  }

  getAdminData(){
    return this.http.get(AppConstants.API_BASE_URL + "adminDetails/get");
  }

  getAllplanInfo(){
  return this.http.get(AppConstants.API_BASE_URL + "planFeature/get");
  }
  getAllPlanInfo(){
  return this.http.get(AppConstants.API_BASE_URL + "selectedPlan/get");
  }
  getClientInfo(){
  return this.http.get(AppConstants.API_BASE_URL + "adminDetails/get");
  }

  get nativeWindow(): any {
    return _window();
  }


  benefit = [
    {id : 1,
    name : "test1"},
    {id: 2,
      name : " test2"}
  ]
}

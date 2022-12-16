import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User } from '../User';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  panDataVerify(pan: import("../User").User[]) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    })
    let options = { headers: headers };
    console.log();
    return this.http.get("http://localhost:8080/").pipe(map((response:any)=>{ return response;}));
  }
  constructor(private http: HttpClient) { }
  adharDataVerify(aadhaar: import("../User").User[]) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
  let options = { headers: headers };
    console.log();
    return this.http.get("http://localhost:8080/").pipe(map((response:any)=>{ return response;}));
  }
  postData(campaigner_email:User): Observable<any>{
    let headers = new HttpHeaders({
      'Content-Type': '*' });
    return this.http.post("http://localhost:8080/sendotp/post",campaigner_email).pipe(map((data:any) => data.json()));
  }
  verifyEmail(otp:User): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': '*'
    })
    return this.http.post('http://localhost:8080/sendotp/verifyEmail',otp).pipe(map((response:any) => response.json()));
  }
  getAllData() {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
  let options = { headers: headers };
    console.log();
    return this.http.get("http://localhost:8080/").pipe(map((response:any)=>{ return response;}));
  }
  signInWithPhoneNumber: any;
  
  donateForm(donate:any):Observable<any>
  {
    let headers = new HttpHeaders({'Content-Type': 'application/json'});
    let options = { headers: headers };
    return this.http.post("http://localhost:8080/donatedata/post",donate,options).pipe(map((data:any)=>{ return data}));
  }

  postUserForm(data:any): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': '*' });
    console.log(data);
    return this.http.post("http://localhost:8080/campaign_details/post",data).pipe(map((data:any) => data.json()));
  }
  
  postMonthelyDetails(donate:User):Observable<any>
  {
    let header = new HttpHeaders({
      'Content-Type': 'application/json'
    })
  let options = { headers: header };
    return this.http.post("http://localhost:8080/monthlyhelpdata/post",donate,options).pipe(map((data:any) => { return data}));
  }

  addCYBData(data:User):Observable<any>{
    let header = new HttpHeaders ({ 'Content-Type':'application/json'})
    return this.http.post("http://localhost:8080/celebrateyourbirthday/post",data).pipe(map((data:any) => { return data; }));
  }
  
}




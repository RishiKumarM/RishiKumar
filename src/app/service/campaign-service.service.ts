import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { User } from '../User';

@Injectable({
  providedIn: 'root'
})
export class CampaignServiceService {
  
baseUrl = 'http://localhost:8080/individualformdetails/post';
  constructor(private http: HttpClient) { }

  public getAllDropdownList():Observable<any> {
    return this.http.get('http://localhost:8080/user-type/get');
  }
  public getAllCampaignData():Observable<any> {
    return this.http.get('http://localhost:8080/campaign_details/get');
  }
  // public getsingleCampaignData():Observable<any> {
  //   return this.http.get('http://localhost:8080/campaign_details/get');
  // }

  postOtpSend(data:any): Observable<any>{
  let Headers = new HttpHeaders({ 'Content-Type':'*' })
    return this.http.post('http://localhost:8080/sendotp/post',data).pipe(map((data:any) => 
     data.json()));
  }

  // verifyOtpSend(otp:any):Observable<any>{
  //   let headers = new Headers({ 'Content-Type':'*' });
  //   return this.http.post('http://localhost:8080/sendotp/verifyEmail',otp).pipe(map((data:any) => data.json()));
  // }

  postCampTypesForm(data:any): Observable<any>{
    let headers = new HttpHeaders({ 'Content-Type': '*' });
     return this.http.post('http://localhost:8080/campaign_details/post',data).pipe(map((data:any) => data.json()));
  }

  postIndividualData(data:User): Observable<any>{
    let headers = new HttpHeaders({ 'Content-Type': '*' });
     return this.http.post('http://localhost:8080/campaign_details/post',data).pipe(map((data:any) => data.json()));
  }

  postNgoData(data:User): Observable<User>{
    let headers = new Headers({ 'Content-Type': '*' });
     return this.http.post<User>('http://localhost:8080/campaign_details/post',data).pipe(map((data:any) => data.json()));
  }
  postSocialData(data:User): Observable<User>{
    let headers = new Headers({ 'Content-Type': '*' });
    return this.http.post<User>('http://localhost:8080/campaign_details/post',data).pipe(map((data:any) => data.json()));
  }


}


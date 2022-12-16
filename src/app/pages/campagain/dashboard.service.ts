import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private  http:HttpClient) { }

  public getDashboardIndividual():Observable<any>{
   let variable = new HttpHeaders({'Content-Type':'*'});
   return this.http.get("http://localhost:8080/campaign_details/get");
  }
  public getDashboardSocialActivist():Observable<any>{
    let variable = new HttpHeaders({'Content-Type':'*'});
    return this.http.get("http://localhost:8080/campaign_details/get");
   }
   public getInputType():Observable<any>{
    let variable = new HttpHeaders({'Content-Type':'*'});
    return this.http.get("http://localhost:8080/campaign.details/get");
   }
   
   public getNgoDashboard():Observable<any>{
    let variable = new HttpHeaders({'content-Type':'*'});
    return this.http.get("http://localhost:8080/campaign.details/get");
   }

  postDashboardIndividual(data:any):Observable<any>{
    return this.http.post("http://localhost:8080/campaign_details/post",data).pipe(map((data:any) => data.json()));
  }
  postDashboardSocialActivist(data:any):Observable<any>{
    return this.http.post("http://localhost:8080/campaign_details/post",data).pipe(map((data:any) => data.json()));
  }
  postDashboardInputName(data:any):Observable<any>{
    return this.http.post("http://localhost:8080/campaign_details/post",data).pipe(map((data:any)=> data.json()));
  }
  postNgoDashboard(data:any):Observable<any>{
    return this.http.post("http://localhost:8080/campaign_details/post",data).pipe(map((data:any)=> data.json()));
  }

}

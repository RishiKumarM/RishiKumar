import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmapaign-page',
  templateUrl: './cmapaign-page.component.html',
  styleUrls: ['./cmapaign-page.component.css']
})
export class CmapaignPageComponent implements OnInit {
  url: any;

  constructor() { }

  ngOnInit(): void {
  }
  onselectFile(event:any){
    if(event.target.files){
     var reader = new FileReader
     reader.readAsDataURL(event.target.files[0]);
     reader.onload=(event:any)=>{
       this.url=event.target.result;
     }
    }
   }
   onselectFile1(event:any){
     if(event.target.files){
      var reader = new FileReader
      reader.readAsDataURL(event.target.files[0]);
      reader.onload=(event:any)=>{
        this.url=event.target.result;
      }
     }
    }
}

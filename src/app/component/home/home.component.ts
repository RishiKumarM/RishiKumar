import { Component, OnInit } from '@angular/core';
import { JQueryStyleEventEmitter } from 'rxjs/internal/observable/fromEvent';
import { CampaignServiceService } from 'src/app/service/campaign-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  

  AllCreatedCampaign = new Array<any>();
  singleCreatedCampaign = new Array<any>();
  constructor(private _campaignService:CampaignServiceService) { }

  ngOnInit(): void {
    
         this._campaignService.getAllCampaignData().subscribe((data:any) => {
           this.AllCreatedCampaign = data;
         });
        //  this._campaignService.getsingleCampaignData().subscribe((data:any) => {
        //    this.singleCreatedCampaign = data;
        //  });


     }
}

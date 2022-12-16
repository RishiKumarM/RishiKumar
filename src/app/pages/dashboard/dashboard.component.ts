import { Component, OnInit} from '@angular/core';
import { FormBuilder,FormControlName,FormGroup, Validators } from '@angular/forms';
import { DashboardService } from '../campagain/dashboard.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [DashboardComponent]
})
export class DashboardComponent implements OnInit {
  

  isNameSelectedEditArea:boolean=false;
  isNameSelectedShowArea:boolean=false;
  isNameSelectedformDetail:boolean=false;
  isNameSelectedDonationDetail:boolean=false;
  isNameSelectedManageBanner:boolean=false;
  isNameSelectedmyCampaign:boolean=false;
  isNameSelectedAccountDetail=false;
  isNameSelectedPatientDocument=false;
  isNameSelectedStory=false;
  isNameSelectedUpdates=false;
  isNameSelectedplans=false;
  isNameSelectedFund=false;
  isNameSelectedDonor=false;
  isNameSelectedDonation=false;
  isNameSelectedpatientDetail=false;
  isNavBarshowandHide=true;
  userIndividualDetail!:FormGroup;
  description=new Array<any>;
  donationfCampaigner!:FormGroup;
  demandDonation=new Array<any>;
  campaignTypeForm!:FormGroup;
  datas = new Array<any>();
  
  
    
    constructor(private fb:FormBuilder, private dashboard:DashboardService){}
     
  ngOnInit()
   {
      this.dashboard.getDashboardIndividual().subscribe((response:any)=>{
           this.description = response;
      });
      this.dashboard.getDashboardIndividual().subscribe((response:any)=>{
           this.datas = response;
      });


      this.userIndividualDetail=this.fb.group({
        description:['',Validators.required]
      })


       this.campaignTypeForm=this.fb.group({
        name:['',Validators.required]
       })
  
  }

  onSubmit(userIndividualDetail:FormGroup){

   this.dashboard.postDashboardIndividual(this.userIndividualDetail.value).subscribe(data=>{
    console.log(data);
    return data;
   });
  }
  detailSubmit(){

  }
  individualNextClick(){
    this.dashboard.postDashboardInputName(this.userIndividualDetail.value).subscribe(data=>{
      console.log(data);
      return data;
     });
  }
  //  onAddUser(userData:any){ 
    
  //  }
   
  //  detailDashboard(){
  // this.editDetailForm=this.fb.group({
  //   text_details:["", Validators.required]
  //  })
  //  }
  //  postDetailedDashboardData(indAddDetails:FormGroup){
  //     this.dropdown.postCampTypesForm(this.indAddDetails.value).subscribe((data:any)=>{
  //       console.log(data);
  //       return data;
  //     })
  //  }

 

  selectedInput(event:any){
    let selected=event.target.value;
    if (selected == "addDetail") {
      this.isNameSelectedEditArea=true;
      this.isNameSelectedShowArea=false;
      this.isNameSelectedformDetail=false;
      this.isNameSelectedManageBanner=false;
      this.isNameSelectedDonationDetail=false;
      this.isNameSelectedmyCampaign=false;
      this.isNameSelectedAccountDetail=false;
      this.isNameSelectedPatientDocument=false;
      this.isNameSelectedStory=false;
      this.isNameSelectedUpdates=false;
      this.isNameSelectedplans=false;
      this.isNameSelectedFund=false;
      this.isNameSelectedDonor=false;
      this.isNameSelectedDonation=false;
      this.isNameSelectedpatientDetail=false;
    }
    else{ 
      this.isNameSelectedEditArea = false;  
    }
    if (selected == "viewDetail") {
      this.isNameSelectedShowArea=true;
      this.isNameSelectedEditArea=false;
      this.isNameSelectedformDetail=false;
      this.isNameSelectedManageBanner=false;
      this.isNameSelectedDonationDetail=false;
      this.isNameSelectedmyCampaign=false;
      this.isNameSelectedAccountDetail=false;
      this.isNameSelectedPatientDocument=false;
      this.isNameSelectedStory=false;
      this.isNameSelectedUpdates=false;
      this.isNameSelectedplans=false;
      this.isNameSelectedFund=false;
      this.isNameSelectedDonor=false;
      this.isNameSelectedDonation=false;
      this.isNameSelectedpatientDetail=false;
    }
    else{ 
      this.isNameSelectedShowArea = false;
    }

    
    
  }
  onClickProfileCamp(){
    if(this.isNameSelectedformDetail!=true){
    this.isNameSelectedformDetail=true;
    this.isNameSelectedEditArea=false;
    this.isNameSelectedShowArea=false;
    this.isNameSelectedDonationDetail=false;
    this.isNameSelectedManageBanner=false;
    this.isNameSelectedmyCampaign=false;
    this.isNameSelectedAccountDetail=false;
    this.isNameSelectedPatientDocument=false;
    this.isNameSelectedStory=false;
    this.isNameSelectedUpdates=false;
    this.isNameSelectedplans=false;
    this.isNameSelectedFund=false;
    this.isNameSelectedDonor=false;
    this.isNameSelectedDonation=false;
    this.isNameSelectedpatientDetail=false;
   }
   else{
    this.isNameSelectedformDetail=false;
   
   }  
 
}
 onClickDonation(){
  if(this.isNameSelectedDonationDetail!=true){
    this.isNameSelectedDonationDetail=true;
    this.isNameSelectedformDetail=false;
    this.isNameSelectedEditArea=false;
    this.isNameSelectedShowArea=false;
    this.isNameSelectedManageBanner=false;
    this.isNameSelectedmyCampaign=false;
    this.isNameSelectedAccountDetail=false;
    this.isNameSelectedPatientDocument=false;
    this.isNameSelectedStory=false;
    this.isNameSelectedUpdates=false;
    this.isNameSelectedplans=false;
    this.isNameSelectedFund=false;
    this.isNameSelectedDonor=false;
    this.isNameSelectedDonation=false;
    this.isNameSelectedpatientDetail=false;
  }
  else{
    this.isNameSelectedDonationDetail=false;
  }

}
onClickManageBanner(){
  if(this.isNameSelectedManageBanner!=true){
    this.isNameSelectedManageBanner=true;
    this.isNameSelectedDonationDetail=false;
    this.isNameSelectedformDetail=false;
    this.isNameSelectedEditArea=false;
    this.isNameSelectedShowArea=false;
    this.isNameSelectedmyCampaign=false;
    this.isNameSelectedAccountDetail=false;
    this.isNameSelectedPatientDocument=false;
    this.isNameSelectedStory=false;
    this.isNameSelectedUpdates=false;
    this.isNameSelectedplans=false;
    this.isNameSelectedFund=false;
    this.isNameSelectedDonor=false;
    this.isNameSelectedDonation=false;
    this.isNameSelectedpatientDetail=false;
  }
  else{
    this.isNameSelectedManageBanner=false;
  }
 
}
onclickmyCampaign(){
 if(this.isNameSelectedmyCampaign!=true){
  this.isNameSelectedmyCampaign=true;
   this.isNameSelectedManageBanner=false;
   this.isNameSelectedManageBanner=false;
   this.isNameSelectedDonationDetail=false;
   this.isNameSelectedformDetail=false;
   this.isNameSelectedEditArea=false;
   this.isNameSelectedShowArea=false;
   this.isNameSelectedAccountDetail=false;
   this.isNameSelectedPatientDocument=false;
   this.isNameSelectedStory=false;
   this.isNameSelectedUpdates=false;
   this.isNameSelectedplans=false;
   this.isNameSelectedFund=false;
   this.isNameSelectedDonor=false;
   this.isNameSelectedDonation=false;
   this.isNameSelectedpatientDetail=false;
 }   
 else{
  this.isNameSelectedmyCampaign=false;
 }
}
onClickAccountDetail(){
  if(this.isNameSelectedAccountDetail!=true){
    this.isNameSelectedAccountDetail=true;
    this.isNameSelectedmyCampaign=false;
    this.isNameSelectedManageBanner=false;
    this.isNameSelectedManageBanner=false;
    this.isNameSelectedDonationDetail=false;
    this.isNameSelectedformDetail=false;
    this.isNameSelectedEditArea=false;
    this.isNameSelectedShowArea=false;
    this.isNameSelectedPatientDocument=false;
    this.isNameSelectedStory=false;
    this.isNameSelectedUpdates=false;
    this.isNameSelectedplans=false;
    this.isNameSelectedFund=false;
    this.isNameSelectedDonor=false;
    this.isNameSelectedDonation=false;
    this.isNameSelectedpatientDetail=false;
  }
  else{
    this.isNameSelectedAccountDetail=false;
  }
}
onClickPatientDetail(){
  if( this.isNameSelectedpatientDetail=true){
    this.isNameSelectedPatientDocument=false;
    this.isNameSelectedAccountDetail=false;
    this.isNameSelectedmyCampaign=false;
    this.isNameSelectedManageBanner=false;
    this.isNameSelectedManageBanner=false;
    this.isNameSelectedDonationDetail=false;
    this.isNameSelectedformDetail=false;
    this.isNameSelectedEditArea=false;
    this.isNameSelectedShowArea=false;
    this.isNameSelectedStory=false;
    this.isNameSelectedUpdates=false;
    this.isNameSelectedplans=false;
    this.isNameSelectedFund=false;
    this.isNameSelectedDonor=false;
    this.isNameSelectedDonation=false;
    this.isNameSelectedpatientDetail=true;
  }
  else{
    this.isNameSelectedPatientDocument=false;
  }
}
onClickPatientDocument(){
  if(this.isNameSelectedPatientDocument!=true){
    this.isNameSelectedPatientDocument=true;
    this.isNameSelectedAccountDetail=false;
    this.isNameSelectedmyCampaign=false;
    this.isNameSelectedManageBanner=false;
    this.isNameSelectedManageBanner=false;
    this.isNameSelectedDonationDetail=false;
    this.isNameSelectedformDetail=false;
    this.isNameSelectedEditArea=false;
    this.isNameSelectedShowArea=false;
    this.isNameSelectedStory=false;
    this.isNameSelectedUpdates=false;
    this.isNameSelectedplans=false;
    this.isNameSelectedFund=false;
    this.isNameSelectedDonor=false;
    this.isNameSelectedDonation=false;
    this.isNameSelectedpatientDetail=false;
  }
  else{
    this.isNameSelectedPatientDocument=false;
  }
}
onClickStory(){
  if(this.isNameSelectedStory!=true){
    this.isNameSelectedStory=true;
    this.isNameSelectedPatientDocument=false;
    this.isNameSelectedAccountDetail=false;
    this.isNameSelectedmyCampaign=false;
    this.isNameSelectedManageBanner=false;
    this.isNameSelectedManageBanner=false;
    this.isNameSelectedDonationDetail=false;
    this.isNameSelectedformDetail=false;
    this.isNameSelectedEditArea=false;
    this.isNameSelectedShowArea=false;
    this.isNameSelectedUpdates=false;
    this.isNameSelectedplans=false;
    this.isNameSelectedFund=false;
    this.isNameSelectedDonor=false;
    this.isNameSelectedDonation=false;
    this.isNameSelectedpatientDetail=false;
  }
  else{
    this.isNameSelectedStory=false;
  }
}
onClickupdates(){
  if(this.isNameSelectedUpdates!=true){
    this.isNameSelectedUpdates=true;
    this.isNameSelectedStory=false;
    this.isNameSelectedPatientDocument=false;
    this.isNameSelectedAccountDetail=false;
    this.isNameSelectedmyCampaign=false;
    this.isNameSelectedManageBanner=false;
    this.isNameSelectedManageBanner=false;
    this.isNameSelectedDonationDetail=false;
    this.isNameSelectedformDetail=false;
    this.isNameSelectedEditArea=false;
    this.isNameSelectedShowArea=false;
    this.isNameSelectedplans=false;
    this.isNameSelectedFund=false;
    this.isNameSelectedDonor=false;
    this.isNameSelectedDonation=false;
    this.isNameSelectedpatientDetail=false;
  }
  else{
    this.isNameSelectedUpdates=false;
  }
}
onClickplans(){
  if(this.isNameSelectedplans!=true){
    this.isNameSelectedplans=true;
    this.isNameSelectedUpdates=false;
    this.isNameSelectedStory=false;
    this.isNameSelectedPatientDocument=false;
    this.isNameSelectedAccountDetail=false;
    this.isNameSelectedmyCampaign=false;
    this.isNameSelectedManageBanner=false;
    this.isNameSelectedManageBanner=false;
    this.isNameSelectedDonationDetail=false;
    this.isNameSelectedformDetail=false;
    this.isNameSelectedEditArea=false;
    this.isNameSelectedShowArea=false;
    this.isNameSelectedFund=false;
    this.isNameSelectedDonor=false;
    this.isNameSelectedDonation=false;
    this.isNameSelectedpatientDetail=false;
  }
  else{
    this.isNameSelectedplans=false;
  }
}
onClickfunds(){
  if(this.isNameSelectedFund!=true){
    this.isNameSelectedFund=true;
    this.isNameSelectedplans=false;
    this.isNameSelectedUpdates=false;
    this.isNameSelectedStory=false;
    this.isNameSelectedPatientDocument=false;
    this.isNameSelectedAccountDetail=false;
    this.isNameSelectedmyCampaign=false;
    this.isNameSelectedManageBanner=false;
    this.isNameSelectedManageBanner=false;
    this.isNameSelectedDonationDetail=false;
    this.isNameSelectedformDetail=false;
    this.isNameSelectedEditArea=false;
    this.isNameSelectedShowArea=false;
    this.isNameSelectedDonor=false;
    this.isNameSelectedDonation=false;
    this.isNameSelectedpatientDetail=false;
  }
  else{
    this.isNameSelectedFund=false;
  }
}
onClickDonor(){
  if(this.isNameSelectedDonor!=true){
    this.isNameSelectedDonor=true;
    this.isNameSelectedFund=false;
    this.isNameSelectedplans=false;
    this.isNameSelectedUpdates=false;
    this.isNameSelectedStory=false;
    this.isNameSelectedPatientDocument=false;
    this.isNameSelectedAccountDetail=false;
    this.isNameSelectedmyCampaign=false;
    this.isNameSelectedManageBanner=false;
    this.isNameSelectedManageBanner=false;
    this.isNameSelectedDonationDetail=false;
    this.isNameSelectedformDetail=false;
    this.isNameSelectedEditArea=false;
    this.isNameSelectedShowArea=false;
    this.isNameSelectedDonation=false;
    this.isNameSelectedpatientDetail=false;
  }
  else{
    this.isNameSelectedDonor=false;
  }
}
onClickListofDonations(){
  if(this.isNameSelectedDonation!=true){
    this.isNameSelectedDonation=true;
    this.isNameSelectedDonor=false;
    this.isNameSelectedFund=false;
    this.isNameSelectedplans=false;
    this.isNameSelectedUpdates=false;
    this.isNameSelectedStory=false;
    this.isNameSelectedPatientDocument=false;
    this.isNameSelectedAccountDetail=false;
    this.isNameSelectedmyCampaign=false;
    this.isNameSelectedManageBanner=false;
    this.isNameSelectedManageBanner=false;
    this.isNameSelectedDonationDetail=false;
    this.isNameSelectedformDetail=false;
    this.isNameSelectedEditArea=false;
    this.isNameSelectedShowArea=false;
    this.isNameSelectedpatientDetail=false;
  }

 
}
onhideShowNavbar(){
   if(this.isNavBarshowandHide!=true){
      this.isNavBarshowandHide=true;
   }
   else{
    this.isNavBarshowandHide=false;
   }
}

}
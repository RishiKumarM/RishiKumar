import { Component, OnInit, Input} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../service/api.service';
import { WindowService } from 'src/app/service/dropdown.service';
import { CampaignServiceService } from 'src/app/service/campaign-service.service'
import { User } from 'src/app/User';
import { Observable, Subscription, throwIfEmpty, timer } from 'rxjs';



@Component({
  selector: 'app-campagain',
  templateUrl: './campagain.component.html',
  styleUrls: ['./campagain.component.css']
})
export class CampagainComponent implements OnInit {

  isIndividualFirstDivVisisble:boolean = true;
  isIndividualSecondDivVisisble:boolean = false;
  isIndividualThirdFormVisible:boolean = false;
  isIndividualFourthDivVisisble:boolean = false;
  isNgoFirstFormVisible:boolean = false;
  isNgoSecondFormVisible:boolean = false;
  isNgoThirdFormVisible:boolean = false;
  isNgoFourthFormVisible:boolean = false;
  isSocialFirstFormVisible:boolean = false;
  isSocialSecondFormVisible:boolean = false;
  isOtpDivVisible:boolean = false;
  isOtpNgoDivVisible:boolean = false;
  isOtpSocialDivVisible:boolean = false;
  
  isIndividualDivVisisble:boolean = true;
  isNgoDivVisisble:boolean = false;
  isSocialDivVisible:boolean = false;
  showLoader:boolean = true;
  isButtonDisabled:boolean = true;
  selectedType = '';
  subscription!: Subscription;
  timer!: Observable<any>;
  userTypeSelect = '';
 
  showOtpComponent = true;
  isDisabled: boolean = true;
  campTypesForm!: FormGroup;
  campagains = new Array<any>();
  user_type = new Array<any>();
  relations = new Array<any>();
  deseases = new Array<any>();
  patients = new Array<any>();
  conditions = new Array<any>();
  genders = new Array<any>();
  sections = new Array<any>();
  taxs = new Array<any>();
  value = new Array<any>();
  

  email: any;
  touched : any;
  number: any;

  message:any;
  

  keyPress(event: any) {
    Validators.pattern(/^[6-9]\d{9}$/)
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
        event.preventDefault();
    }
  }
  letterOnly(event: { which: any; keyCode: any; }) : Boolean{
    const charCode = (event.which) ? event.which : event.keyCode;
    if ((charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 122)) {
      return false;
    }
    return true;
  }

  OnlyNumbersAllowed(event: { which: any; keyCode: any; }):boolean
  {
    const charCode=(event.which)?event.which:event.keyCode;
     if(charCode>31 && (charCode<48 || charCode >57))
    {
      console.log('charCode restricted is'+ charCode);
      
      return false;
    }

    return true;
  }

  constructor(private campaignService:CampaignServiceService, private dropdown:WindowService, public fb:FormBuilder) {
   
  }

  ngOnInit(): void {
  this.setCampaign();
  
  this.dropdown.getAllDropdownList().subscribe((response:any) => {
    this.user_type = response;
  });
  this.dropdown.getPurposeDropdownList().subscribe((response:any) => {
    this.deseases = response;  
  });
  this.dropdown. getRlationDropdownList().subscribe((response:any) => {
    this.relations = response;
  });
  this.dropdown.getConditionDropdownList().subscribe((response:any) => {
    this.conditions = response;
  });
  this.dropdown.getMedicalConditionDropdownList().subscribe((response:any) => {
    this.value = response;
  });
  this.dropdown.getGenderDropdownList().subscribe((response:any) => {
    this.genders = response;
  });
  this.dropdown.getTaxDropdownList().subscribe((response:any) => {
    this.taxs = response;
  });
  this.dropdown.getUnderSectionDropdownList().subscribe((response:any) => {
    this.sections = response;
  });
 
  }

  setCampaign(){
  this.campTypesForm = this.fb.group ({
    user_type:['',Validators.required],
    campaigner_name: ["", [Validators.required, Validators.minLength(3)]],
    campaigner_email: ['', [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    campaigner_number: ["",[Validators.required, Validators.minLength(10),Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
     otp:["", Validators.compose([Validators.required, Validators.maxLength(4)])],
     term_conditions:[false,Validators.required],
     patient_condition:["", Validators.compose([Validators.required])],
     required_amount:["", Validators.compose([Validators.required])],
     available_days:["", Validators.compose([Validators.required])],
     medical_documents:["", Validators.compose([Validators.required])],
     description:["", Validators.compose([Validators.required])],
     campaign_purpose:["", Validators.compose([Validators.required])],
     patient_name:["", [Validators.required, Validators.minLength(3)]],
     patient_email:['', [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
     patient_number:["", Validators.compose([Validators.required, Validators.maxLength(10), Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")])],
     patient_age:["", Validators.required],
     city:["", Validators.compose([Validators.required])],
     gender:["", Validators.compose([Validators.required])],
     patient_relation:["", Validators.compose([Validators.required])],
     disease:["", Validators.compose([Validators.required])],
     target_date:["", Validators.compose([Validators.required])],
     ngo_name:["", [Validators.required, Validators.minLength(3)]],
     ngo_description:["", Validators.compose([Validators.required])],
     tax_benifit:["", Validators.compose([Validators.required])],
     under_section:["", Validators.compose([Validators.required])],
}); 

}

get campaigner_name(){
 return this.campTypesForm.get('campaigner_name');
}
get campaigner_email() {
  return this.campTypesForm.get('campaigner_email');
}
get campaigner_number(){
 return this.campTypesForm.get('campaigner_number');
}
get otp(){
 return this.campTypesForm.get('otp');
}
get textarea(){
 return this.campTypesForm.get('textarea');
}
get required_amount(){
  return this.campTypesForm.get('required_amount');
}
get medical_documents(){
  return this.campTypesForm.get('medical_documents');
}
get description(){
  return this.campTypesForm.get('description');
}
get campaign_purpose(){
  return this.campTypesForm.get('campaign_purpose');
}
get patient_name(){
  return this.campTypesForm.get('patient_name');
}
get patient_email(){
  return this.campTypesForm.get('patient_email');
}
get patient_number(){
  return this.campTypesForm.get('patient_number');
}
get medical_document(){
  return this.campTypesForm.get('medical_document');
}
get patient_age(){
  return this.campTypesForm.get(' patient_age');
}
get city(){
  return this.campTypesForm.get('city');
}
get gender(){
  return this.campTypesForm.get('gender');
}
get patient_relation(){
  return this.campTypesForm.get('patient_relation');
}
get disease(){
  return this.campTypesForm.get('disease');
}
get target_date(){
  return this.campTypesForm.get('target_date');
}
get term_conditions(){
  return this.campTypesForm.get('term_conditions');
}
get ngo_name(){
  return this.campTypesForm.get('ngo_name');
}
get available_days(){
  return this.campTypesForm.get('available_days');
}
get  ngo_description(){
  return this.campTypesForm.get(' ngo_description');
}
get tax_benifit(){
  return this.campTypesForm.get('tax_benifit');
}
get under_section(){
  return this.campTypesForm.get('under_section');
}

startCampaign(campTypesForm:FormGroup){
  this.campaignService.postCampTypesForm(this.campTypesForm.value).subscribe((data:any) => {
    console.log(data)
    return data;
    })
  }
 
sendOTP(){
  console.log(this.campTypesForm.value.campaigner_email)
this.campaignService.postOtpSend(this.campaigner_email).subscribe(data => {
    console.log(data)
    return data;
  });
  this.isOtpDivVisible  = true;
  this.isOtpNgoDivVisible = true;
  this.isOtpSocialDivVisible = true;
}
// verifyOTP(){
//   let otp = this.campTypesForm.value.otp;
//   this.campaignService.verifyOtpSend(this.otp).subscribe(otp => {
//     console.log(otp);
//     return otp;
//   })
// }

onOtpChange(event:any){
event.target.get = 'otp';
console.log(this.otp);

}

  onChange(event:any) {
    this.selectedType = event.target.value;
    console.log(this.selectedType)
    if (this.selectedType == "Individual"){
      this.isButtonDisabled = true;
      this.isNgoFourthFormVisible = false;
      this.isSocialSecondFormVisible = false;
      this.showLoader = false;
      
    }
    if (this.selectedType == "NGO"){
      this.showLoader = false;
      this.isNgoFourthFormVisible = false;
      this.isNgoDivVisisble = true;
      this.isIndividualFirstDivVisisble = false;
      this.isNgoFirstFormVisible = true;
      this.isNgoSecondFormVisible = false;
      this.isNgoThirdFormVisible = false;
      this.isNgoFourthFormVisible = false;
    }
    if (this.selectedType == "Social Activist"){
      this.showLoader = false;
      this.isIndividualFirstDivVisisble = false;
      this.isNgoDivVisisble = false;
      this.isSocialFirstFormVisible = true;
      this.isSocialSecondFormVisible = false;
      this.isSocialDivVisible = true;
    } 
  }

  onClick(event:any) {

    this.selectedType = event.target.value;
    this.isNgoDivVisisble = true;
  }
  onSelect(event:any){

    this.selectedType = event.target.value;
    this.isSocialDivVisible = true;
  }

  individualNextClick(){

    this.isIndividualDivVisisble = false;
    this.isIndividualFirstDivVisisble = false;
    this.isIndividualSecondDivVisisble = true;

  }
  individualSecondNextClick(){

    this.isIndividualSecondDivVisisble = false;
    this.isIndividualThirdFormVisible = true;
    this.isIndividualFourthDivVisisble = false;
  }
  individualThirdNextClick(){

    this.isIndividualSecondDivVisisble = false;
    this.isIndividualThirdFormVisible = false;
    this.isIndividualFourthDivVisisble = true;

  }
  ngoNextClick(){

    this.isNgoFirstFormVisible = false;
    this.isNgoSecondFormVisible = true;
    this.isNgoThirdFormVisible = false;
    this.isNgoFourthFormVisible = false;

  }
  
  ngoSecondNextClick(){
    this.isNgoSecondFormVisible = false;
    this.isNgoThirdFormVisible = true;
    this.isNgoFourthFormVisible = false;
  }
  ngoThirdNextClick(){
    this.isNgoSecondFormVisible = false;
    this.isNgoThirdFormVisible = false;
    this.isNgoFourthFormVisible = true;
  }
  socialNextClick(){
    this.isIndividualDivVisisble = false;
    this.isSocialDivVisible = true;
    this.isSocialFirstFormVisible = false;
    this.isSocialSecondFormVisible = true;

  }
  individualBackClick(){
    this.isIndividualFirstDivVisisble = true;
    this.isIndividualSecondDivVisisble = false;

  }
  individualSecondBackClick(){
    this.isIndividualSecondDivVisisble = true;
    this.isIndividualThirdFormVisible = false;

  }
  individualThirdBackClick(){
    this.isIndividualThirdFormVisible = true;
    this.isIndividualFourthDivVisisble = false;

  }

  ngoBackClick(){
    this.isNgoFirstFormVisible = false;
    this.isNgoSecondFormVisible = false;
    this.isNgoThirdFormVisible = true;
    this.isNgoFourthFormVisible = false;
  }
  ngoFirsrBackClick(){
    this.isNgoFirstFormVisible = false;
    this.isNgoSecondFormVisible = true;
    this.isNgoThirdFormVisible = false;
    this.isNgoFourthFormVisible = false;
  }
  ngosecondBackClick(){
    this.isNgoFirstFormVisible = true;
    this.isNgoSecondFormVisible = false;
    this.isNgoThirdFormVisible = false;
    this.isNgoFourthFormVisible = false;
  }

  socialBackClick(){
    this.isSocialFirstFormVisible = true;
    this.isSocialSecondFormVisible = false;

  }

  actionMethod(event:any) {
    event.target.disabled = true;
}
  

  }

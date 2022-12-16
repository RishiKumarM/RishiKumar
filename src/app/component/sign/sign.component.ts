import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/service/api.service';
import { User } from 'src/app/User';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {
 
  
  isLoggedIn : boolean = true;
  isOtpDivVisible:boolean = false;
@Input() user!: User;
users : User[] = [];
touched : any;
campaigner_email:User;
  message:any;
  groups= new Array<any>();

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

  
  
  constructor(private fb: FormBuilder, private api:ApiService, private client: HttpClient) { }

  ngOnInit(): void {
  }

  userForm = this.fb.group({
    campaigner_name: ["", Validators.compose([Validators.required, Validators.minLength(2)])],
    campaigner_email: ['', [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    campaigner_number: ["", Validators.compose([Validators.required, Validators.maxLength(10)])],
    otp:['',Validators.required, Validators.maxLength(4)]
  });

  onSignupSubmit(){
    console.log(this.userForm);
    if(this.user.name =='' || this.user.email=='' || this.user.number=='' || this.user.otp=='')
    {
      this.client.jsonp("fields cannot be empty !!","OK");
      return;
    }
    this.api.postUserForm(this.user).subscribe(data => {
      console.log(data);
      console.log("Form Submitted");
  });
  }
  
  sendOTP(campaigner_email:any){
    this.api.postData(this.campaigner_email).subscribe(data => {
      console.log("data: "+data)
      return data;
    })
    alert("otp has been send");
    this.isOtpDivVisible = true;
  }

  onOtpChange(event:any){
    event.target.get = 'otp';
    }

}

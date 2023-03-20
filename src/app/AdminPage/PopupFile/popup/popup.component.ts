import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AppConstants } from 'src/app/AapConstant';
import { ApiService } from 'src/app/api.service';
import { RegnSucComponent } from '../regn-suc/regn-suc.component';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
@Output() url = '';
otpForm: any;
flowType = "";
selectedType: any;
userForm: any;
isSendOtpBtnDisabled = true;
isOtpDivVisible: boolean = false;
otpButtonText = "Send OTP";
 


OnlyNumbersAllowed(event: { which: any; keyCode: any; }): boolean {
  const charCode = (event.which) ? event.which : event.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    console.log('charCode restricted is: ' + charCode);

    return false;
  }

  return true;
}

constructor(private api: ApiService, private dialog: MatDialog, private router: Router) { }

ngOnInit(): void {

  this.otpForm = new FormGroup({
    otp: new FormControl("", Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(6)])),
  });
}
public myError = (controlName: string, errorName: string) => {
  return this.otpForm.controls[controlName].hasError(errorName);
}

  sentOTP(event: any, otpForm: FormGroup){
    console.log(localStorage.getItem('businessEmail'))
  var dataofform = JSON.parse(localStorage.getItem('businessEmail') || '{}');
    this.api.postOtpSend(dataofform).subscribe((response: any) => {
    console.log(response)
    })
  }

  verify(event: any, otpForm: FormGroup) {
    console.log(localStorage.getItem('businessEmail'));
    var dataofform = JSON.parse(localStorage.getItem('businessEmail') || '{}');
    dataofform.otp = this.otpForm.value.otp
    console.log("Final Value to send to server : " + dataofform);
    console.log(dataofform)   
    localStorage.setItem('newuserotpdetails', JSON.stringify(dataofform))
    console.log(JSON.stringify(dataofform));
    this.api.validateOTP(dataofform).subscribe((response: any) => {
      if (response.statusCode == "0") {
        this.dialog.open(RegnSucComponent, {
              width: '40%',
              height: '75vh',
            })
      } else if (response.statusCode == "1") {
        window.alert(response.message)
        this.dialog.open(PopupComponent, {
          width: '40%',
          height: '45vh',
        }) 
      } else {
        window.alert(response.message)
        this.dialog.open(PopupComponent, {
          width: '40%',
          height: '45vh',
        }) 
      }
    })
  
  }

}


import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {

  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})

export class AdminLoginComponent implements OnInit {

  matcher = new MyErrorStateMatcher();
  formGroup!: FormGroup;
  FormGroup:any;
  selectedType: any;
  plans = new Array<any>();
  amountPlan = new Array<any>();
  value:any;

  keyPress(event: any) {
    Validators.pattern(/^[6-9]\d{9}$/)
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
      event.preventDefault();
    } 
  }
  restrictZero(event: any) {
    if (event.target.value.length === 0 && event.key === "0") {
      event.preventDefault();
    }
  }
  letterOnly(event: { which: any; keyCode: any; }): Boolean {
    var keyCode = (event.which) ? event.which : event.keyCode
    if ((keyCode < 65 || keyCode > 90) && (keyCode < 97 || keyCode > 123) && keyCode != 32)
      return false;
    return true;
  }

  OnlyNumbersAllowed(event: { which: any; keyCode: any; }): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {

      return false;
    }

    return true;
  }

  constructor(private api: ApiService, 
    private activateRouter: ActivatedRoute, 
    private router: Router,
    private route:ActivatedRoute,
    private formBuilder:FormBuilder) { 
      this.formGroup = formBuilder.group({
        changePlan: [false, Validators.requiredTrue]
      });

  }

  ngOnInit(): void {
    
    
    this.api.getAllplanInfo().subscribe((res:any)=> {
      this.plans = res;
      
    })
    this.api.getAllPlanInfo().subscribe((res:any)=> {
      this.amountPlan = res;
      this.value = res;
      console.log(this.value);
      
    })
  }
  public myError = (controlName: string, errorName: string) => {
    return this.formGroup.controls[controlName].hasError(errorName);
  }

  onClick(event:any,amount:any, value:any){
    localStorage.setItem('Key',value)
    localStorage.setItem('Keys',amount)
    console.log(value,amount);
    if(value === 'monthlyPlan' || 'yearlyPlan' || 'othersPlan'){
    this.router.navigate(['/clientRegistration']);
    }
      
  }

  
  onFormSubmit(formValue: any) {
    alert(JSON.stringify(formValue, null, 2));
  }
 

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { AppConstants } from 'src/app/AapConstant';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';
import { startWith } from 'rxjs/internal/operators/startWith';
import { Subject } from 'rxjs/internal/Subject';
import { ApiService, City, Country, State } from 'src/app/api.service';
import { PopupComponent } from '../PopupFile/popup/popup.component';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { OtpsucssfulComponent } from '../PopupFile/otpsucssful/otpsucssful.component';
import { RegnSucComponent } from '../PopupFile/regn-suc/regn-suc.component';
import { ForloginComponent } from '../PopupFile/forlogin/forlogin.component';

export class MyErrorStateMatcher implements ErrorStateMatcher {

  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-client-register-form',
  templateUrl: './client-register-form.component.html',
  styleUrls: ['./client-register-form.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {showError: true},
    },
  ],
})

export class ClientRegisterFormComponent implements OnInit {
  matcher = new MyErrorStateMatcher();
  SubmitButton = false;
  OTPButton = true;
  clientForm!: FormGroup;
  FormGroup:any;
  selectedType: any;
  user = new Array<any>();
  cities = new Array<any>();
  adminId = new Array<any>();
  filteredCities: Observable<City[]> | undefined;
  states = new Array<any>();
  filteredStates: Observable<State[]> | undefined;
  countries = new Array<any>();
  filteredCountries: Observable<Country[]> | undefined;
  isClientFormVisible = true;
  isContactFormVisible = false;
  planType = localStorage.getItem('Key') 
  otp = localStorage.getItem('') 
  amountPlan = localStorage.getItem('Keys') 
  selectedPlan = this.planType
  
  flowType = "";
  hide = true;
  isLinear = false;
  openDialogAddaccount() {
    this.dialog.open(PopupComponent, {
      width: '300px', height: '200px'
    })
  }

  fileToUpload: any;
  private imageUrl = new Subject<any>();
  stage$ = this.imageUrl.asObservable();

  handleFileInput(file: any) {
    
      this.fileToUpload = file.item(0);
  
      //Show image preview
      let reader = new FileReader();
      reader.onload = (event: any) => {
        this.imageUrl = event.target.result;
        console.log(this.imageUrl)
      }
      reader.readAsDataURL(this.fileToUpload);
      this.imageUrl.next(file);
    }
  

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

  cityCtrl = new FormControl('');
  stateCtrl = new FormControl('');
  Control = new FormControl('', Validators.required);

  constructor(private api: ApiService, private activateRouter: ActivatedRoute, private router: Router, private dialog: MatDialog,private _formBuilder: FormBuilder) {
  
  this.filteredCities = this.cityCtrl.valueChanges.pipe(
    startWith(''),
    map(name => (name ? this._filterCities(name) : this.cities.slice())),
  );

  }

  private _filterCities(value: string) {
    const filterValue = value.toLowerCase();

    return this.cities.filter(cities => cities.name.toLowerCase().includes(filterValue));
  }

  ngOnInit(): void {

    this.api.getAdminData().subscribe((res:any)=>{
      this.adminId = res;
    })

    this.clientForm = new FormGroup({
    
      businessName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(40), Validators.pattern(/[(\[a-zA-Z0-9\])\\1{2,}\\[~`!@#$%^&()_={}[\]:;,.<>+\/?-]/)]),
      businessEmail: new FormControl('', [Validators.required, Validators.email, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]),
      otp: new FormControl(this.otp),
      selectedPlan: new FormControl(this.selectedPlan),
      selectedAmount: new FormControl(this.amountPlan),
      paymentStatus: new FormControl(false, [Validators.required,Validators.pattern("^[1-9][0-9]{5}")]),
      
       }); 
      
  }

  public myError = (controlName: string, errorName: string) => {
    return this.clientForm.controls[controlName].hasError(errorName);
  }

  get businessType() {
    return this.clientForm.get('user');
  } 
  onsubmit(){
    
  }

  sendOTPwithData(clientForm:any){
    localStorage.setItem('businessEmail', JSON.stringify(this.clientForm.getRawValue().businessEmail))  
    this.api.postOtpSend(this.clientForm.value).subscribe((response: any) => { 
      
      if (response.statusCode == AppConstants.NEW_USER_SUCESS_CODE_0) {
        let dialogRef = this.dialog.open(OtpsucssfulComponent, {
          width: '25%',
          height: '25vh',
        })

        dialogRef.afterClosed().subscribe(result => { 
        this.dialog.open(PopupComponent, {
          width: '40%',
          height: '45vh',
        })
      })

        this.OTPButton = false;
        this.SubmitButton = true;
        this.flowType = "FORM_DATA"
        this.router.navigate(['/clientRegistration']);   

      } else if (response.statusCode == AppConstants.USER_VERIFICATION_SUCESS_CODE_1) {
        this.dialog.open(ForloginComponent, {
          width: '40%',
          height: '35vh',
        })
        // window.alert(response.message)
        this.flowType = "DASHBOARD"

      } else if (response.statusCode == AppConstants.USER_DETAILS_INCORRECT_CODE_2) {
        
        window.alert(response.message)
        this.dialog.open(ForloginComponent, {
          width: '40%',
          height: '35vh',
        })
    
      }
    })
  }

    submit(event:any,clientForm:FormGroup){
      this.SubmitButton = true;
      console.log(this.clientForm.value);
      
    this.api.verification(this.clientForm.value).subscribe((response: any) => {  
      console.log(response)
      localStorage.setItem('adminId', response.adminId)
      this.router.navigate(['/clientDetail']);    
      if (response.statusCode == "0") {
        window.alert(response.message)
      } else if (response.statusCode == "1") {
        window.alert(response.message) 
      } else {
        // window.alert(response.message)
      }
      
    this.api.updatePackage(response).subscribe((response: any) => {
      console.log(response);
    })
    })

  }

  
  }

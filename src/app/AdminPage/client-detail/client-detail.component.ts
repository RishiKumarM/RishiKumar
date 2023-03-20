import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';
import { startWith } from 'rxjs/internal/operators/startWith';
import { ApiService, City, Country, State } from 'src/app/api.service';
import { MyErrorStateMatcher } from '../client-register-form/client-register-form.component';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css']
})
export class ClientDetailComponent implements OnInit {
  clientForm!:FormGroup;
  matcher = new MyErrorStateMatcher();
  user = new Array<any>();
  cities = new Array<any>();
  filteredCities: Observable<City[]> | undefined;
  states = new Array<any>();
  filteredStates: Observable<State[]> | undefined;
  countries = new Array<any>();
  filteredCountries: Observable<Country[]> | undefined;
  isClientFormVisible = true;
  isContactFormVisible = true;
  planType = localStorage.getItem('Key') 
  amountPlan = localStorage.getItem('Keys') 
  selectedPlan = this.planType
  adminId = localStorage.getItem('adminId');
  rzp1:any;
  options:any;
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

   
      this.options = {
        "key": "rzp_test_7HdkaZ1xFGPomB", // Enter the Key ID generated from the Dashboard
        "amount": "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        "currency": "INR",
        "name": "Employee Assimilation", //your business name
        "description": "Test Transaction",
           "image": "https://tse2.mm.bing.net/th?id=OIP.Ry9JPhESzGjFAKSBQ2V6hwHaFj&pid=Api&P=0",
        "order_id": "",
        "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
        "prefill": {
          "name": "Gaurav Kumar", //your customer's name
          "email": "gaurav.kumar@example.com",
          "contact": "9000090000"
        },
        "notes": {
          "address": "Razorpay Corporate Office"
        },
        "theme": {
          "color": "#3399cc"
        }
      };

    this.clientForm = new FormGroup({
      adminId: new FormControl(this.adminId, Validators.required),
      clientName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30), Validators.pattern(/[(\[a-zA-Z0-9\])\\1{2,}\\[~`!@#$%^&()_={}[\]:;,.<>+\/?-]/)]),
      clientNumber: new FormControl('', [Validators.required, Validators.minLength(10), Validators.pattern("^((\\+91-?)|0_%+-)?[6,7,8,9][0-9]{0,9}$")]),
      clientAddress: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(40), Validators.pattern(/[(\[a-zA-Z0-9\])\\1{2,}\\[~`!@#$%^&()_={}[\]:;,.<>+\/?-]/)]),
      gstin: new FormControl('', [Validators.required, Validators.minLength(15), Validators.maxLength(15), Validators.pattern(/[(\[a-zA-Z0-9\])\\1{2,}\\[~`!@#$%^&()_={}[\]:;,.<>+\/?-]/)]),
      clientCity: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(40), Validators.pattern(/[(\[a-zA-Z0-9\])\\1{2,}\\[~`!@#$%^&()_={}[\]:;,.<>+\/?-]/)]),
      clientState: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(15), Validators.pattern(/[(\[a-zA-Z0-9\])\\1{2,}\\[~`!@#$%^&()_={}[\]:;,.<>+\/?-]/)]),
      clientCountry: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(15), Validators.pattern(/[(\[a-zA-Z0-9\])\\1{2,}\\[~`!@#$%^&()_={}[\]:;,.<>+\/?-]/)]),
      zipCode: new FormControl('', [Validators.required, Validators.minLength(6), Validators.pattern("^[1-9][0-9]{5}")]),
      paymentStatus: new FormControl(false, )

       }); 
      
  }

  public myError = (controlName: string, errorName: string) => {
    return this.clientForm.controls[controlName].hasError(errorName);
  }
  
  onUpdate(selectedPlan: any, clientForm: FormGroup) {

    this.api.verifications(this.adminId,this.clientForm.value).subscribe((response: any) => {
      console.log(response) 
      if (response.statusCode == "0") {
        window.alert(response.message)
      } else if (response.statusCode == "1") {
        window.alert(response.message)
      } else {
        // window.alert(response.message)
      }
      
    })
    this.rzp1 = this.api.nativeWindow.Razorpay(this.options);
      this.rzp1.open();

  }



}

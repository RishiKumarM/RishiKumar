import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, MaxLengthValidator, MinValidator, Validators } from '@angular/forms';
import { map } from 'rxjs';
import { ApiService } from 'src/app/service/api.service';
import { WindowService } from 'src/app/service/dropdown.service';
@Component({
  selector: 'app-monthlyhelp',
  templateUrl: './monthlyhelp.component.html',
  styleUrls: ['./monthlyhelp.component.css']
})
export class MonthlyhelpComponent implements OnInit {

  purposes = new Array<any>();
  monthlyDonateForm!: FormGroup;
  
  
  constructor(public fb:FormBuilder, private api:ApiService, private dropdown:WindowService) { }

  ngOnInit(): void {
    
    this.dropdown.getMonthlyHelpDropdownList().subscribe((response:any) => {
      this.purposes = response;
    });

    this.monthlyDonateForm = this.fb.group({
      name:['',Validators.required],
      email: ['',Validators.required],
      dob: ['',Validators.required],
      amount:['',Validators.required],
      selectpurpose:['',Validators.required],
        phone: ['',Validators.required,(10)],
     });
  }
  
  onSubmit() {
    console.log(this.monthlyDonateForm.value);
    this.api.postMonthelyDetails(this.monthlyDonateForm.value).subscribe((data:any) => {
      console.log(data)
      return data;
         });
  }

} 
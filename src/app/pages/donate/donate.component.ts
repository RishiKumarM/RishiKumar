import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
import { ApiService } from 'src/app/service/api.service';
import { WindowService } from 'src/app/service/dropdown.service';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})
export class DonateComponent implements OnInit {
  donateTypeForm! : FormGroup;
  form:any;
  donate:any;
  message:any;
  purposes = new Array<any>();
  constructor(public fb:FormBuilder, private api:ApiService, private dropdown:WindowService) { }

  ngOnInit(): void {
    
    this.dropdown.getDonateDropdownList().subscribe((response:any) => {
      this.purposes = response;
    });
  
  this.donateTypeForm = this.fb.group({
    name:['',[Validators.required,Validators.pattern("^[a-zA-Z]+$")]],
    email:['',Validators.required,Validators.email],
    amount:['',Validators.required],
    mobile:['',Validators.required,Validators.maxLength(10)],
    otp:[''] 
  });
  }
  onSubmit() {  
    console.log(this.donateTypeForm.value);
    this.api.donateForm(this.donateTypeForm.value).subscribe(data => {
          console.log(data);
          return data;
    })
  }

}
 
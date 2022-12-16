import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';
import { Validators } from '@angular/forms';
import { WindowService } from 'src/app/service/dropdown.service';

@Component({
  selector: 'app-birthday',
  templateUrl: './birthday.component.html',
  styleUrls: ['./birthday.component.css']
})
export class BirthdayComponent implements OnInit {

    purposes = new Array<any>();
    donateForm!:FormGroup;
  constructor(private api:ApiService, public formBuilder: FormBuilder, private dropdown:WindowService) { }

  ngOnInit(): void {
    this.dropdown.getMonthlyHelpDropdownList().subscribe((response:any) => {
      this.purposes = response;
    });

  this.donateForm = this.formBuilder.group({
    name:['',Validators.required],
    email:['',Validators.required,Validators.email],
    dob:['',Validators.required],
    amount:['',Validators.required],
    number:['',Validators.required,Validators.maxLength(10)],
    selectpurpose:['',Validators.required] 
  });
}

  onSubmit(donateForm:FormGroup){
    this.api.addCYBData(this.donateForm.value).subscribe(data => {
      console.log(data)
      return data;
    })
  }
}
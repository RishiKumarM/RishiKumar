import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forlogin',
  templateUrl: './forlogin.component.html',
  styleUrls: ['./forlogin.component.css']
})
export class ForloginComponent implements OnInit {

  constructor(private router:Router, private matDialog:MatDialog) { }

  ngOnInit(): void {
  }

  onClick(){
    this.matDialog.closeAll();
  }

  login(){
    this.router.navigate([]);
  }
}

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-otpsucssful',
  templateUrl: './otpsucssful.component.html',
  styleUrls: ['./otpsucssful.component.css']
})
export class OtpsucssfulComponent implements OnInit {

  constructor(private matDialog:MatDialog) { }

  ngOnInit(): void {
  }

  onClick(){
    this.matDialog.closeAll();
  }

}

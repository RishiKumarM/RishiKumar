import { Component, OnInit ,Inject} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-regn-suc',
  templateUrl: './regn-suc.component.html',
  styleUrls: ['./regn-suc.component.css']
})

export class RegnSucComponent implements OnInit {

  constructor(private matDialog:MatDialog ,public dialogRef: MatDialogRef<RegnSucComponent>, @Inject(MAT_DIALOG_DATA) data:any) {}
  

    ngOnInit(): void {
    
    }
    ocClick(){
      this.matDialog.closeAll();
    }

}
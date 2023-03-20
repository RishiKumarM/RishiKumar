import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { RegnSucComponent } from '../AdminPage/PopupFile/regn-suc/regn-suc.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router,private dialog:MatDialog) { }

  ngOnInit(): void {
  }

  onClick(event:any){
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    var value = idAttr.nodeValue;
  
    if(value === 'getStarted')
    this.router.navigate(['startRegistration'],{relativeTo: this.route});

    if(value === 'about')
    this.dialog.open(RegnSucComponent, {
      width: '40%',
      height: '75vh',
    })
    
  }
}

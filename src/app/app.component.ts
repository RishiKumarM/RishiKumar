import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BotlieSuperAdmin';
constructor(private router:Router){}

isClick(): boolean {
    if ((this.router.url != '/') 
    && (this.router.url != '/profile')
    &&(this.router.url != '/clientRegistration')
    &&(this.router.url != '/clientDetail')
    ){
      return true;
}
return false;
}
}

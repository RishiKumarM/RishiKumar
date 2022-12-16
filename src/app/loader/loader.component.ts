import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, throwIfEmpty, timer } from 'rxjs';
import { LoaderService } from '../loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
 
  showLoader: boolean = true;      
 imageLoader: boolean = false;      
  subscription!: Subscription;
   timer!: Observable<any>;
  constructor(public _loader: LoaderService) { }

  ngOnInit(): void {
    this.setTimer();

  }
  public setTimer(){

    this.timer = timer(3000);
    this.showLoader = true;
    this.subscription = this.timer.subscribe(() => {
      this.showLoader = false;
    })
  }

     
}
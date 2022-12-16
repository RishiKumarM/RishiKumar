import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import { CampagainComponent } from './pages/campagain/campagain.component';
import { DonateComponent } from './pages/donate/donate.component';
import { MonthlyhelpComponent } from './pages/monthlyhelp/monthlyhelp.component';
import { BirthdayComponent } from './pages/birthday/birthday.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SignComponent } from './component/sign/sign.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from './service/api.service';
import { MatError, MatFormFieldModule, MatHint, MatLabel } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { NgOtpInputModule } from 'ng-otp-input';
import { WindowService } from './service/dropdown.service';
import {enableProdMode} from '@angular/core';
import {DashboardNGOComponent} from './pages/dashboard-ngo/dashboard-ngo.component';
import {DashboardSocialactiveComponent} from './pages/dashboard-socialactive/dashboard-socialactive.component';
import {CmapaignPageComponent} from './pages/cmapaign-page/cmapaign-page.component'
import { LoaderComponent } from './loader/loader.component';
import { MatOptgroup } from '@angular/material/core';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    CampagainComponent,
    DonateComponent,
    MonthlyhelpComponent,
    BirthdayComponent,
    DashboardComponent,
    LoaderComponent,
    SignComponent,
    DashboardNGOComponent,
    DashboardSocialactiveComponent,
    CmapaignPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    HttpClientModule,
    NgOtpInputModule,
    MatSlideToggleModule,
  

  ],
  providers: [HttpClientModule,ApiService,WindowService],
  bootstrap: [AppComponent]
})
export class AppModule { }

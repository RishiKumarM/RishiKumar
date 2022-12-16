import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampagainComponent } from './pages/campagain/campagain.component';
import { DonateComponent } from './pages/donate/donate.component';
import { MonthlyhelpComponent } from './pages/monthlyhelp/monthlyhelp.component';
import { BirthdayComponent } from './pages/birthday/birthday.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SignComponent } from './component/sign/sign.component';
import { AppComponent } from './app.component';
import { DashboardSocialactiveComponent } from './pages/dashboard-socialactive/dashboard-socialactive.component';
import { DashboardNGOComponent } from './pages/dashboard-ngo/dashboard-ngo.component';
import { CmapaignPageComponent } from './pages/cmapaign-page/cmapaign-page.component';

const routes: Routes = [
  {path: 'home', component: AppComponent},
  {path: 'sign', component: SignComponent },
  {path: 'birthday', component: BirthdayComponent },
  {path: 'donate', component: DonateComponent },
  {path: 'monthly', component: MonthlyhelpComponent },
  {path: 'create', component: CampagainComponent},
  {path: 'dashboard', component: DashboardComponent },
  {path: 'dashboard-ngo', component: DashboardNGOComponent},
  {path: 'dashboard-social-activist', component: DashboardSocialactiveComponent },
  {path: 'cmpPage',component:CmapaignPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './AdminPage/admin-login/admin-login.component';
import { ClientDetailComponent } from './AdminPage/client-detail/client-detail.component';
import { ClientRegisterFormComponent } from './AdminPage/client-register-form/client-register-form.component';
import { PaymentGatewayComponent } from './AdminPage/payment-gateway/payment-gateway.component';
import { RegnSucComponent } from './AdminPage/PopupFile/regn-suc/regn-suc.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {path: 'startRegistration', component:AdminLoginComponent},
  {path: 'clientRegistration', component:ClientRegisterFormComponent},
  {path: 'clientDetail', component:ClientDetailComponent},
  {path: 'paymentDetail', component:PaymentGatewayComponent},
  {path: 'regiDetail', component:RegnSucComponent},
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

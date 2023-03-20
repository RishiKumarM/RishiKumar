import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './AdminPage/admin-login/admin-login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';
import {TextFieldModule} from '@angular/cdk/text-field';
import {MatInputModule} from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { RouterModule } from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ClientRegisterFormComponent } from './AdminPage/client-register-form/client-register-form.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PopupComponent } from './AdminPage/PopupFile/popup/popup.component';
// import {StepperErrorsExample} from '../stepper-errors-example';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {MatStepperModule} from '@angular/material/stepper';
import { ClientDetailComponent } from './AdminPage/client-detail/client-detail.component';
import { PaymentGatewayComponent } from './AdminPage/payment-gateway/payment-gateway.component';
import { RegnSucComponent } from './AdminPage/PopupFile/regn-suc/regn-suc.component';
import { OtpsucssfulComponent } from './AdminPage/PopupFile/otpsucssful/otpsucssful.component';
import { ForloginComponent } from './AdminPage/PopupFile/forlogin/forlogin.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    ClientRegisterFormComponent,
    HeaderComponent,
    FooterComponent,
    PopupComponent,
    ClientDetailComponent,
    PaymentGatewayComponent,
    RegnSucComponent,
    OtpsucssfulComponent,
    ForloginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    TextFieldModule,
    MatInputModule,
    MatIconModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatToolbarModule,
     MatButtonModule,
    MatIconModule,
    TextFieldModule,
    MatInputModule,
    HttpClientModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRippleModule,
    MatSlideToggleModule,
    MatTooltipModule,
    ScrollingModule,
    MatCheckboxModule,
    MatDialogModule,
    CdkAccordionModule,
    RouterModule,
    MatTabsModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    CdkStepperModule,
    MatStepperModule
  
  ],
  providers: [],
  bootstrap: [ AppComponent]
})
export class AppModule { }

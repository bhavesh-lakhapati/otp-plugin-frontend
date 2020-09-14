import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { EmailComponent } from './email/email.component';
import { OtpComponent } from './otp/otp.component';

@NgModule({
  declarations: [
    EmailComponent,
    OtpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [EmailComponent]
})
export class AppModule { }

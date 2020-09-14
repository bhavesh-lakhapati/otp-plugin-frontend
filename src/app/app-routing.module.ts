import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmailComponent } from './email/email.component';
import { OtpComponent } from './otp/otp.component';

const routes: Routes = [
  { path: "email", component: EmailComponent },
  { path: "otp", component: OtpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

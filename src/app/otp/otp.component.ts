import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {
  otp: Number;
  token: string;
  otpForm: FormGroup;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.otpForm = new FormGroup({
      otpField: new FormControl(this.otp, [Validators.required])
    });

    this.token = document.cookie.split(";")[1];
    console.log(this.token);
    if(this.token == null)
      this.router.navigate(['/email']);
    else
      this.token = this.token.split("=")[1];
  }

  onFormSubmit(): void {
    console.log(this.token);
    let headers: HttpHeaders = new HttpHeaders({
      "X-Auth-Token" : this.token
    });
    this.http.post("https://boiling-depths-02722.herokuapp.com/otp/verify", { otp: this.otp }, { headers: headers, observe: "response" })
    .subscribe((response: HttpResponse<any>) => {
      document.cookie = "";
      this.router.navigate(['/email']);
    }, (error: HttpResponse<any>) => {
      console.log(error);
      this.otpForm.controls['otpField'].setErrors({'incorrect': true});
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
  email: String;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    
  }

  onFormSubmit(): void {
    this.http.post("https://boiling-depths-02722.herokuapp.com/otp/generate", { email: this.email }, { observe: "response" })
      .subscribe((response: HttpResponse<any>) => {
      console.log(response, response.headers);
      if(response.status == 200) {
        document.cookie = `token=${response.headers.get("X-Auth-Token")}`;
        this.router.navigate(['otp']);
      }
    });
  }
}

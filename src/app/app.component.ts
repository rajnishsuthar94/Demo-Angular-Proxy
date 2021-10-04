import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'test-angular';
  url = 'https://auth.api.free-heads.com/authorize';
  authCode: any;
  error: any;

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    const params = {
      codeChallenge: "ZAGLL7BmcVaT8T27UG31OmDjBidjhzIdjiVqVnIXvuA"
    }
    this.http.post(this.url, params).subscribe(res => {
      this.authCode = res;
    }, err => {
      this.error = err;
    })
  }
}

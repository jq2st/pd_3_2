import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
    if (localStorage.getItem('auth-token') != null) {
      this.auth.setToken(localStorage.getItem('auth-token'))
    }
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loggedIn = true;

  user = {
    name: 'admin',
    icon: '', 
    status: 'administrator',
  };

  constructor() { }

  ngOnInit(): void {
  }

}

﻿import { Component, OnInit } from '@angular/core';
import {AuthService } from '../../services/auth.service';
import {Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  public email: string;
  public password: string;

  constructor(
    public authService: AuthService,
    public router: Router
  ) { }

  ngOnInit() {
  }

  onSubmitLogin() {
    this.authService.loginEmail(this.email, this.password)
    .then( (res) => {
      this.router.navigate(['/admin']);
    }).catch((err) => {
      this.router.navigate(['/login']);
    });
  }

}
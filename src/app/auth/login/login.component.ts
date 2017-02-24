import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService) { }

  ngOnInit() {
    this.authService.logout();
  }

  login(): void {
    this.authService.login().subscribe(() => {
      const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/';
      this.router.navigate([redirect]);
    });
  }

}

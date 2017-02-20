import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title: string;

  constructor(private authService: AuthService, private router: Router) {
    this.title = 'app works!';
  }

  loginCheck(): boolean {
    return this.authService.loginCheck();
  }

  logout(): void {
    this.authService.logout();
  }
}

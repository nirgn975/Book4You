import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../authentication.service';

@Component({
  moduleId: module.id,
  selector: 'bfy-nav',
  templateUrl: 'nav.component.html',
  styleUrls: ['nav.component.css'],
  providers: [AuthenticationService]
})
export class NavComponent {
  private LoginIsVisible: boolean;
  private user = {
    'email': '',
    'password': ''
  };

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  showLogin() {
    this.LoginIsVisible = true;
  }

  hideLogin() {
    this.LoginIsVisible = false;
  }

  login() {
    this.authenticationService.login(this.user.email, this.user.password).subscribe();
  }

  toWishlist() {
    this.router.navigate(['/wishlist']);
  }

  toCart() {
    this.router.navigate(['/cart']);
  }

  toRoot() {
    this.router.navigate(['']);
  }
}

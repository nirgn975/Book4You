import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

import { AuthenticationService } from '../authentication.service';
import { CartService } from '../../cart/shared/cart.service';
import { Cart } from '../../cart/shared/cart.model';

@Component({
  moduleId: module.id,
  selector: 'bfy-nav',
  templateUrl: 'nav.component.html',
  styleUrls: ['nav.component.css'],
  providers: [AuthenticationService, CartService]
})
export class NavComponent implements OnInit {
  private LoginIsVisible: boolean;
  private cart: Cart = new Cart();
  private haveAuth: boolean = false;
  private auth: string;
  private options: any;
  private userId: string;
  private user = {
    'email': '',
    'password': ''
  };

  constructor(
    private authenticationService: AuthenticationService,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit() {
    this.auth = this.authenticationService.getAuth();
    this.options = this.authenticationService.getOptions(this.auth);
    this.userId = this.authenticationService.getUserId();
    this.haveAuth = this.authenticationService.checkAuth();

    // Get cart details only of login.
    if (this.haveAuth) {
      this.cartService.getCart(this.options, this.userId).subscribe(
        (data) => this.cart = data
      );
    }
  }

  showLogin() {
    this.LoginIsVisible = true;
  }

  hideLogin() {
    this.LoginIsVisible = false;
  }

  login() {
    this.authenticationService.login(this.user.email, this.user.password).subscribe(
      (data) => data.ok ? location.reload() : alert("Something went wrong, please try again.")
    );
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['']);
    location.reload();
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

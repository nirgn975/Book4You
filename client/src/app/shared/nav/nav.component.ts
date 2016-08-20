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
    let auth = this.authenticationService.getAuth();
    let options = this.authenticationService.getOptions(auth);
    let userId = this.authenticationService.getUserId();
    this.cartService.getCart(options, userId).subscribe(
      (data) => this.cart = data
    );

    this.haveAuth = this.authenticationService.checkAuth();
  }

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

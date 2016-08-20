import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AuthenticationService } from '../shared/authentication.service';
import { CartService } from './shared/cart.service';
import { Book } from '../content/shared/book.model';

@Component({
  moduleId: module.id,
  selector: 'bfy-cart',
  templateUrl: 'cart.component.html',
  styleUrls: ['cart.component.css'],
  providers: [CartService, AuthenticationService]
})
export class CartComponent implements OnInit {
  cart: Observable<Book[]>;
  totalValue: number;

  constructor(
    private authenticationService: AuthenticationService,
    private cartService: CartService
  ) { }

  ngOnInit() {
    let auth = this.authenticationService.getAuth();
    let options = this.authenticationService.getOptions(auth);
    let userId = this.authenticationService.getUserId();

    this.cart = this.cartService.getCartUser(options, userId);
  }
}

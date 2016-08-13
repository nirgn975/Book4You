import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { CartService } from './shared/cart.service';
import { Book } from '../content/shared/book.model';

@Component({
  moduleId: module.id,
  selector: 'bfy-cart',
  templateUrl: 'cart.component.html',
  styleUrls: ['cart.component.css'],
  providers: [CartService]
})
export class CartComponent implements OnInit {
  cart: Observable<Book[]>;
  totalValue: number;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.cart = this.cartService.getCartUser(46);
  }
}

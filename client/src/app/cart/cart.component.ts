import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AuthenticationService } from '../shared/authentication.service';
import { CartService } from './shared/cart.service';
import { Book } from '../content/shared/book.model';
import { Cart } from './shared/cart.model';

@Component({
  moduleId: module.id,
  selector: 'bfy-cart',
  templateUrl: 'cart.component.html',
  styleUrls: ['cart.component.css'],
  providers: [CartService, AuthenticationService]
})
export class CartComponent implements OnInit {
  private cart: Cart = new Cart();
  books: Observable<Book[]>;
  totalValue: number;
  auth: string;
  options: any;
  userId: string;

  constructor(
    private authenticationService: AuthenticationService,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.auth = this.authenticationService.getAuth();
    this.options = this.authenticationService.getOptions(this.auth);
    this.userId = this.authenticationService.getUserId();

    this.cartService.getCart(this.options, this.userId).subscribe(
      (data) => this.callback(data)
    );
  }

  callback(data) {
    this.cart = data;
    this.books = this.cartService.getCartByUser(this.options, data.id);
  }

  removeBook(bookId: string) {
    console.log(bookId);
    console.log(this.cart);
    this.cartService.removeBookFromCart(this.options, this.cart.id, bookId).subscribe(
      (data) => location.reload()
    );
  }
}

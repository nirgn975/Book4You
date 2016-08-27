import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FormGroup, Validators, FormBuilder,
  REACTIVE_FORM_DIRECTIVES } from '@angular/forms';

import { AuthenticationService } from '../shared/authentication.service';
import { CategoryService } from '../content/shared/category.service';
import { CartService } from './shared/cart.service';
import { Book } from '../content/shared/book.model';
import { Cart } from './shared/cart.model';

@Component({
  moduleId: module.id,
  selector: 'bfy-cart',
  templateUrl: 'cart.component.html',
  styleUrls: ['cart.component.css'],
  directives: [REACTIVE_FORM_DIRECTIVES],
  providers: [CartService, AuthenticationService, CategoryService]
})
export class CartComponent implements OnInit {
  private cart: Cart = new Cart();
  private orderForm: FormGroup;
  books: Observable<Book[]>;
  totalValue: number;
  auth: string;
  options: any;
  userId: string;

  constructor(
    private authenticationService: AuthenticationService,
    private categoryService: CategoryService,
    private cartService: CartService,
    private fb: FormBuilder
  ) {
    this.orderForm = fb.group({
        "fullName": ["", Validators.required],
        "street": ["", Validators.required],
        "houseNumber": ["", Validators.required],
        "city": ["", Validators.required]
    });
  }

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
    this.cartService.removeBookFromCart(this.options, this.cart.id, bookId).subscribe(
      (data) => location.reload()
    );
  }

  onSubmitOrder(event) {
    event.preventDefault();
    let auth = this.authenticationService.getAuth();
    let options = this.authenticationService.getOptions(auth);
    let order = this.orderForm['_value'];

    order['totalAmount'] = this.cart.totalAmount;
    order['username'] = this.authenticationService.getUserName();
    this.books.subscribe(
      (data) => {
        order['books'] = data;
        order['books'] = this.addCategory(order['books']);

        this.cartService.addNewOrder(options, order).subscribe(
          (data) => {
            this.cartService.deleteCart(this.options, this.cart.id).subscribe();
            location.reload();
          }
        );
      }
    );
  }

  addCategory(books: any[]) {
    for(let book of books) {
      let bookUrl = book._links.category.href;
      book['category'] = bookUrl.split('/').slice(-2)[0];
    }
    return books;
  }
}

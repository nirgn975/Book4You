import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AuthenticationService } from '../../shared/authentication.service';
import { WishlistService } from '../../wishlist/shared/wishlist.service';
import { BookService } from '../shared/book.service';
import { CartService } from '../../cart/shared/cart.service';
import { Book } from '../shared/book.model';

@Component({
  moduleId: module.id,
  selector: 'bfy-book-details',
  templateUrl: 'book-details.component.html',
  styleUrls: ['book-details.component.css'],
  providers: [BookService, AuthenticationService, WishlistService, CartService]
})
export class BookDetailsComponent implements OnInit {
  private book: Observable<Book>;
  private wishList: Book[];
  private errorMessage: String;
  private bookId: number;
  private auth: string;
  private options: any;
  private userId: string;

  constructor(
    private wishlistService: WishlistService,
    private authenticationService: AuthenticationService,
    private cartService: CartService,
    private route: ActivatedRoute,
    private router: Router,
    private bookService: BookService
  ) {}

  ngOnInit() {
    this.auth = this.authenticationService.getAuth();
    this.options = this.authenticationService.getOptions(this.auth);
    this.userId = this.authenticationService.getUserId();

    // Get cart details only of login.
    if (this.userId) {
      this.wishlistService.getWishList(this.options, this.userId).subscribe(
        (data) => {
          this.wishList = data;
          this.route.params.subscribe(params => {
            this.bookId = +params['bookId'];
            this.bookService.getBookById(this.options, this.bookId).subscribe(
              (res) => this.book = res
            );
          });
        }
      );
    } else {
      this.route.params.subscribe(params => {
        this.bookId = +params['bookId'];
        this.bookService.getBookById(this.options, this.bookId).subscribe(
          (res) => this.book = res
        );
      });
    }
  }

  deleteBook() {
    this.bookService.deleteBook(this.options, String(this.bookId)).subscribe(
      (data) => data.ok ? this.router.navigate(['']) : alert("Something went wrong, please try again.")
    );
  }

  addBookToWishList(bookId: string) {
    this.wishlistService.addBookToWishList(this.options, this.userId, bookId).subscribe(
      (data) => data.ok ? location.reload() : alert("Something went wrong, please try again.")
    );
  }

  addBookToCart(bookId: string) {
    this.cartService.getCart(this.options, this.userId).subscribe(
      (data) => this.cartService.addBookToCart(this.options, data.id, bookId).subscribe(
        (data) => location.reload()
      )
    );
  }

  checkIfInWishList(bookId: number) {
    for (let item of this.wishList) {
      if (bookId == item.id) {
        return true;
      }
    }
    return false;
  }
}

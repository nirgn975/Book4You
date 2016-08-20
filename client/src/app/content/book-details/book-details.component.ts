import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AuthenticationService } from '../../shared/authentication.service';
import { WishlistService } from '../../wishlist/shared/wishlist.service';
import { BookService } from '../shared/book.service';
import { Book } from '../shared/book.model';

@Component({
  moduleId: module.id,
  selector: 'bfy-book-details',
  templateUrl: 'book-details.component.html',
  styleUrls: ['book-details.component.css'],
  providers: [BookService, AuthenticationService, WishlistService]
})
export class BookDetailsComponent implements OnInit, OnDestroy {
  book: Observable<Book>;
  errorMessage: String;
  bookId: number;
  private sub: any;

  constructor(
    private wishlistService: WishlistService,
    private authenticationService: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router,
    private bookService: BookService
  ) {}

  ngOnInit() {
    let auth = this.authenticationService.getAuth();
    let options = this.authenticationService.getOptions(auth);

    this.sub = this.route.params.subscribe(params => {
      this.bookId = +params['bookId'];
      this.bookService.getBookById(options, this.bookId).subscribe(res => this.book = res);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  deleteBook() {
    let auth = this.authenticationService.getAuth();
    let options = this.authenticationService.getOptions(auth);

    this.bookService.deleteBook(options, String(this.bookId)).subscribe(
      data => function(data) {
        if (data.ok) {
          this.router.navigate(['']);
        } else {
          alert("Something went wrong, please try again.");
        }
      }
    );
  }

  addBookToWishList(book) {
    let auth = this.authenticationService.getAuth();
    let options = this.authenticationService.getOptions(auth);
    delete book._links;
    book.category = "categories/13";

    let foo = {
      "_embedded": {
          "books": [
              book
          ]
      }
  }

    console.log(book);
    this.bookService.addBookToWishList(options, book).subscribe()
  }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { BookService } from '../shared/book.service';
import { Book } from '../shared/book.model';

@Component({
  moduleId: module.id,
  selector: 'bfy-book-details',
  templateUrl: 'book-details.component.html',
  styleUrls: ['book-details.component.css'],
  providers: [BookService]
})
export class BookDetailsComponent implements OnInit, OnDestroy {
  book: Observable<Book>;
  errorMessage: String;
  bookId: number;
  private sub: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookService: BookService) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.bookId = +params['bookId'];
      this.bookService.getBookById(this.bookId).subscribe(res => this.book = res);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  deleteBook() {
    this.bookService.deleteBook(String(this.bookId)).subscribe(
      data => function(data) {
        if (data.ok) {
          this.router.navigate(['']);
        } else {
          alert("Something went wrong, please try again.");
        }
      }
    );
  }
}

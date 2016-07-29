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
  private sub: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookService: BookService) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = +params['bookId'];
      this.bookService.getBook(id).subscribe(res => this.book = res);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

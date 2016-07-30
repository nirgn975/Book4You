import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';

import { BookComponent } from './book/book.component';
import { BookService } from '../shared/book.service';
import { Book } from '../shared/book.model';

@Component({
  moduleId: module.id,
  selector: 'bfy-book-list',
  templateUrl: 'book-list.component.html',
  directives: [BookComponent],
  providers: [BookService]
})
export class BookListComponent implements OnInit, OnDestroy {
  @Input() categoryName: String;

  books: Observable<Book[]>;
  errorMessage: String;
  private sub: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookService: BookService) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = +params['categoryId'];
      this.books = this.bookService.getBooksByCategory(id);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

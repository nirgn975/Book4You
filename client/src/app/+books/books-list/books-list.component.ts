import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';

import { BookComponent } from '../book/book.component';
import { BookService } from '../shared/book.service';
import { Book } from '../shared/book.model';

@Component({
  moduleId: module.id,
  selector: 'app-books-list',
  templateUrl: 'books-list.component.html',
  directives: [BookComponent],
  providers: [BookService]
})

export class BooksListComponent implements OnInit, OnDestroy {
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
      this.books = this.bookService.getBooks(id);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

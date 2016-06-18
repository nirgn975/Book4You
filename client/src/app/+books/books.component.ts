import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { BookComponent } from './book/book.component';
import { BookService } from './shared/book.service';
import { Book } from './shared/book.model';

@Component({
  moduleId: module.id,
  selector: 'app-books',
  templateUrl: 'books.component.html',
  styleUrls: ['books.component.css'],
  directives: [BookComponent],
  providers: [BookService]
})

export class BooksComponent implements OnInit {
  books: Observable<Book[]>;
  errorMessage: String;

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.getBooks();
  }

  getBooks() {
    this.books = this.bookService.getBooks();
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthenticationService } from '../../shared/authentication.service';
import { BookComponent } from './book/book.component';
import { BookService } from '../shared/book.service';
import { Book } from '../shared/book.model';

@Component({
  moduleId: module.id,
  selector: 'bfy-book-list',
  templateUrl: 'book-list.component.html',
  directives: [BookComponent],
  providers: [BookService, AuthenticationService]
})
export class BookListComponent implements OnInit {
  @Input() categoryName: String;

  private books: Observable<Book[]>;
  private errorMessage: String;

  constructor(
    private authenticationService: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router,
    private bookService: BookService
  ) {}

  ngOnInit() {
    let auth = this.authenticationService.getAuth();
    let options = this.authenticationService.getOptions(auth);

    this.route.params.subscribe(params => {
      let id = +params['categoryId'];
      this.books = this.bookService.getBooksByCategory(options, id);
    });
  }
}

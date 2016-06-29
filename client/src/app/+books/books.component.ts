import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { BookService } from './shared/book.service';
import { BooksListComponent } from './books-list/books-list.component';

@Component({
  moduleId: module.id,
  selector: 'app-books',
  template: `<router-outlet></router-outlet>`,
  directives: [ROUTER_DIRECTIVES],
  providers: [BookService]
})

export class BooksComponent {

}

import { Component } from '@angular/core';

import { BooksListComponent } from './books-list/books-list.component';

@Component({
  moduleId: module.id,
  selector: 'app-books',
  template: `<app-books-list></app-books-list>`,
})

export class BooksComponent {

}

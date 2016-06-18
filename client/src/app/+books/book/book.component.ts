import { Component, Input } from '@angular/core';

import { Book } from '../shared/book.model';

@Component({
  moduleId: module.id,
  selector: 'app-book',
  templateUrl: 'book.component.html',
  styleUrls: ['book.component.css']
})

export class BookComponent {
  @Input() book: Book;

  constructor() {}

}

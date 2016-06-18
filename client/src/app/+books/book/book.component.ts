import { Component, OnInit, Input } from '@angular/core';

import { Book } from '../shared/book.model';

@Component({
  moduleId: module.id,
  selector: 'app-book',
  templateUrl: 'book.component.html',
  styleUrls: ['book.component.css']
})

export class BookComponent implements OnInit {
  @Input() book: Book;

  constructor() {}

  ngOnInit() {
  }

}

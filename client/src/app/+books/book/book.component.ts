import { Component, Input } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

import { Book } from '../shared/book.model';

@Component({
  moduleId: module.id,
  selector: 'app-book',
  templateUrl: 'book.component.html',
  styleUrls: ['book.component.css'],
  directives: [ROUTER_DIRECTIVES]
})

export class BookComponent {
  @Input() book: Book;

  constructor(private router: Router) {}

  onSelect(id: number) {
    this.router.navigate(['/book', id]);
  }

}

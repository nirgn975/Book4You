import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Router, ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router';

import { Book } from '../../shared/book.model';

@Component({
  moduleId: module.id,
  selector: 'bfy-book',
  templateUrl: 'book.component.html',
  styleUrls: ['book.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class BookComponent implements OnInit, OnDestroy {
  @Input() book: Book;
  private sub: any;
  private categoryId: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.categoryId = +params['categoryId'];
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onSelect(book: Book) {
    let bookId = book['_links'].self.href.split("/").slice(-1);
    this.router.navigate(['/content/books/' + bookId]);
  }
}

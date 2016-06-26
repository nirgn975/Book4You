import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Router, ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router';

import { Book } from '../shared/book.model';

@Component({
  moduleId: module.id,
  selector: 'app-book',
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
    private router: Router
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.categoryId = +params['categoryId'];
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onSelect(id: number) {
    this.router.navigate(['/category/' + this.categoryId + '/book', id]);
  }

}

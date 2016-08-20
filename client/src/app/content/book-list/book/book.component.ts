import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Router, ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router';

import { AuthenticationService } from '../../../shared/authentication.service';
import { CartService } from '../../../cart/shared/cart.service';
import { Book } from '../../shared/book.model';

@Component({
  moduleId: module.id,
  selector: 'bfy-book',
  templateUrl: 'book.component.html',
  styleUrls: ['book.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [AuthenticationService, CartService]
})
export class BookComponent implements OnInit, OnDestroy {
  @Input() book: Book;
  private sub: any;
  private categoryId: number;

  constructor(
    private authenticationService: AuthenticationService,
    private cartService: CartService,
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

  onSelect(book: Book) {
    let bookId = book['_links'].self.href.split('/').slice(-1);
    this.router.navigate(['/content/books/' + bookId]);
  }

  addBookToCart(bookId: string) {
    let auth = this.authenticationService.getAuth();
    let options = this.authenticationService.getOptions(auth);
    let UserId = this.authenticationService.getUserId();

    this.cartService.getCart(options, UserId).subscribe(
      (data) => this.cartService.addBookToCart(options, data.id, bookId).subscribe(
        (data) => location.reload()
      )
    );
  }
}

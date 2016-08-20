import { Component, OnInit, Input } from '@angular/core';
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
export class BookComponent implements OnInit {
  @Input() book: Book;
  private categoryId: number;
  private auth: string;
  private options: any;
  private userId: string;

  constructor(
    private authenticationService: AuthenticationService,
    private cartService: CartService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.auth = this.authenticationService.getAuth();
    this.options = this.authenticationService.getOptions(this.auth);
    this.userId = this.authenticationService.getUserId();

    this.route.params.subscribe(params => {
      this.categoryId = +params['categoryId'];
    });
  }

  onSelect(book: Book) {
    let bookId = book['_links'].self.href.split('/').slice(-1);
    this.router.navigate(['/content/books/' + bookId]);
  }

  addBookToCart(bookId: string) {
    this.cartService.getCart(this.options, this.userId).subscribe(
      (data) => this.cartService.addBookToCart(this.options, data.id, bookId).subscribe(
        (data) => location.reload()
      )
    );
  }
}

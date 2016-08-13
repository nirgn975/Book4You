import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { WishlistService } from './shared/wishlist.service';
import { Book } from '../content/shared/book.model';

@Component({
  moduleId: module.id,
  selector: 'bfy-wishlist',
  templateUrl: 'wishlist.component.html',
  styleUrls: ['wishlist.component.css'],
  providers: [WishlistService]
})
export class WishlistComponent implements OnInit {
  wishlist: Observable<Book[]>;

  constructor(
    private wishlistService: WishlistService
  ) { }

  ngOnInit() {
    this.wishlist = this.wishlistService.getWishlistByUser(46);
  }

}

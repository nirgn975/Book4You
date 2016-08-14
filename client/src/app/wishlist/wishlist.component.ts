import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AuthenticationService } from '../shared/authentication.service';
import { WishlistService } from './shared/wishlist.service';
import { Book } from '../content/shared/book.model';

@Component({
  moduleId: module.id,
  selector: 'bfy-wishlist',
  templateUrl: 'wishlist.component.html',
  styleUrls: ['wishlist.component.css'],
  providers: [WishlistService, AuthenticationService]
})
export class WishlistComponent implements OnInit {
  wishlist: Observable<Book[]>;

  constructor(
    private authenticationService: AuthenticationService,
    private wishlistService: WishlistService
  ) { }

  ngOnInit() {
    let auth = this.authenticationService.getAuth();
    let options = this.authenticationService.getOptions(auth);

    this.wishlist = this.wishlistService.getWishlistByUser(options, 46);
  }

}

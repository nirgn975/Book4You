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
  wishList: Observable<Book[]>;

  constructor(
    private authenticationService: AuthenticationService,
    private wishlistService: WishlistService
  ) { }

  ngOnInit() {
    let auth = this.authenticationService.getAuth();
    let options = this.authenticationService.getOptions(auth);
    let userId = this.authenticationService.getUserId();

    this.wishList = this.wishlistService.getWishList(options, userId);
  }

  removeBook(bookId: string) {
    let auth = this.authenticationService.getAuth();
    let options = this.authenticationService.getOptions(auth);
    let userId = this.authenticationService.getUserId();

    this.wishlistService.removeBookFromWishList(options, userId, bookId).subscribe(
      (data) => data.ok ? console.log('ok') : alert("Something went wrong, please try again.")
    );
  }
}

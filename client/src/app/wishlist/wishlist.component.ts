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
  auth: string;
  options: any;
  userId: string;

  constructor(
    private authenticationService: AuthenticationService,
    private wishlistService: WishlistService
  ) { }

  ngOnInit() {
    this.auth = this.authenticationService.getAuth();
    this.options = this.authenticationService.getOptions(this.auth);
    this.userId = this.authenticationService.getUserId();

    this.wishList = this.wishlistService.getWishList(this.options, this.userId);
  }

  removeBook(bookId: string) {
    this.wishlistService.removeBookFromWishList(this.options, this.userId, bookId).subscribe(
      (data) => data.ok ? location.reload() : alert("Something went wrong, please try again.")
    );
  }
}

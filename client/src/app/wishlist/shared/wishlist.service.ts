import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { environment } from '../../../app/';
import { Book } from '../../content/shared/book.model';

@Injectable()
export class WishlistService {

  constructor(
    private http: Http
  ) { }

  getWishlistByUser(options, userId: number) {
    return this.http.get(environment.baseUrl + 'users/' + userId + '/wishlist', options)
      .map((res: Response) => <Book[]>res.json()._embedded.books)
      .do((data) => this.toImage(data))
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

  toImage(items: Book[]) {
    for (let item of items) {
      item.picture = 'data:image/png;base64,' + item.picture;
    }
  }
}

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

  getWishList(options, userId: string) {
    return this.http.get(environment.baseUrl + 'users/' + userId + '/wishList', options)
      .map((res: Response) => res.json()._embedded.books)
      .catch(this.handleError);
  }

  removeBookFromWishList(options,  userId: string, bookId: string) {
    return this.http.delete(environment.baseUrl + 'users/' + userId + '/wishList/' + bookId, options)
      .map((res: Response) => res)
      .catch(this.handleError);
  }

  addBookToWishList(options,  userId: string, bookId: string) {
    console.log(environment.baseUrl + 'users/' + userId + '/wishList/' + bookId);
    return this.http.patch(environment.baseUrl + 'users/' + userId + '/wishList/' + bookId, options)
      .map((res: Response) => res)
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}

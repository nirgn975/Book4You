import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { environment } from '../../../app/';
import { Book } from '../../content/shared/book.model';

@Injectable()
export class CartService {

  constructor(
    private http: Http
  ) { }

  getCartUser(options, userId: string) {
    return this.http.get(environment.baseUrl + 'users/' + userId + '/cart', options)
      .map((res: Response) => <Book[]>res.json()._embedded.books)
      .catch(this.handleError);
  }

  getTotalsCart(options, userId: string) {
    return this.http.get(environment.baseUrl + 'users/' + userId + '/cart', options)
      .map((res: Response) => <Book[]>res.json())
      .do(data => console.log(data))
      .catch(this.handleError);

  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}

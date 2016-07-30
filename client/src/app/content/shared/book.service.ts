import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { environment } from '../../../app/';
import { Book } from './book.model';

@Injectable()
export class BookService {

  constructor(
    private http: Http) {}

  getBooksByCategory(categoryId: number) {
    return this.http.get(environment.baseUrl + 'categories/' + categoryId + '/books')
      .map((res: Response) => <Book[]>res.json()._embedded.books)
      .catch(this.handleError);
  }

  getBookById(bookId: number) {
    return this.http.get(environment.baseUrl + 'books/' + bookId)
      .map((res: Response) => <Book>res.json())
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}

import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
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
      .do((data) => this.toImage(data))
      .catch(this.handleError);
  }

  getBookById(bookId: number) {
    return this.http.get(environment.baseUrl + 'books/' + bookId)
      .map((res: Response) => <Book>res.json())
      .do((data) => this.toImage(Array(data)))
      .catch(this.handleError);
  }

  addNewBook(newBook: string) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(environment.baseUrl + 'books', newBook, options)
        .map((res: Response) => res.json())
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

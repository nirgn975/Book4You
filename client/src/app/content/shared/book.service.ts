import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { environment } from '../../../app/';
import { Book } from './book.model';

@Injectable()
export class BookService {
  headers = new Headers();
  options = new RequestOptions({ headers: this.headers });

  constructor(
    private http: Http
  ) {
      this.headers.append('Content-Type', 'application/json');
      this.headers.append('Authorization', 'Basic ' + btoa('nirgn:password'));
    }

  getBooksByCategory(categoryId: number) {
    return this.http.get(environment.baseUrl + 'categories/' + categoryId + '/books', this.options)
      .map((res: Response) => <Book[]>res.json()._embedded.books)
      .do((data) => this.toImage(data))
      .catch(this.handleError);
  }

  getBookById(bookId: number) {
    return this.http.get(environment.baseUrl + 'books/' + bookId, this.options)
      .map((res: Response) => <Book>res.json())
      .do((data) => this.toImage(Array(data)))
      .catch(this.handleError);
  }

  addNewBook(newBook: string) {
    return this.http.post(environment.baseUrl + 'books', newBook, this.options)
        .map((res: Response) => res)
        .catch(this.handleError);
  }

  deleteBook(bookId: string) {
    return this.http.delete(environment.baseUrl + 'books/' + bookId, this.options)
        .map((res: Response) => res)
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

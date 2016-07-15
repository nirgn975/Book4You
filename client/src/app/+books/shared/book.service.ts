import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Book } from './book.model';

@Injectable()
export class BookService {

  constructor(private http: Http) {}

  getBooks(categoryId: number) {
    return this.http.get('http://localhost:8080/api/v1/categories/' + categoryId + '/books')
      .map((res: Response) => <Book[]>res.json()._embedded.books)
      // .do(res => console.log(res))
      .catch(this.handleError);
  }

  getBook(bookId: number) {
    return this.http.get('http://localhost:8080/api/v1/books/' + bookId)
      .map((res: Response) => <Book>res.json())
      // .do(res => console.log(res))
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { environment } from '../../../app/';
import { Book } from './book.model';

@Injectable()
export class BookService {

  constructor(
    private http: Http
  ) {}

  getBooksByCategory(options, categoryId: number) {
    return this.http.get(environment.baseUrl + 'categories/' + categoryId + '/books', options)
      .map((res: Response) => <Book[]>res.json()._embedded.books)
      .catch(this.handleError);
  }

  getBookById(options, bookId: number) {
    return this.http.get(environment.baseUrl + 'books/' + bookId, options)
      .map((res: Response) => <Book>res.json())
      .catch(this.handleError);
  }

  addNewBook(options, newBook: string) {
    return this.http.post(environment.baseUrl + 'books', newBook, options)
        .map((res: Response) => res)
        .catch(this.handleError);
  }

  deleteBook(options, bookId: string) {
    return this.http.delete(environment.baseUrl + 'books/' + bookId, options)
        .map((res: Response) => res)
        .catch(this.handleError);
  }

  addBookToWishList(options, newBook) {
    return this.http.patch('http://localhost:8080/api/v1/users/46/cart', newBook, options)
      .map((res: Response) => res)
      .do(data => console.log(data))
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}

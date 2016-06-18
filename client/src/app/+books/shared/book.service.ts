import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Book } from './book.model';

@Injectable()
export class BookService {

  constructor(private http: Http) {}

  getBooks() {
    return this.http.get('app/data/books.json')
      .map((res: Response) => res.json())
      .do(res => console.log(res))
      .catch(this.handleError);
  }

  getBook(id: number) {
    return this.http.get('app/data/book.json')
      .map((res: Response) => res.json())
      .do(res => console.log(res))
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}

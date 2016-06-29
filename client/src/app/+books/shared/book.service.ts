import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Book } from './book.model';

@Injectable()
export class BookService {

  constructor(private http: Http) {}

  getBooks(categoryId: number) {
    return this.http.get('app/data/books' + categoryId +'.json')
      .map((res: Response) => <Book[]>res.json())
      .do(res => console.log(res))
      .catch(this.handleError);
  }

  getBook(id: number) {
    return this.http.get('app/data/book' + id + '.json')
      .map((res: Response) => <Book>res.json()[0])
      .do(res => console.log(res))
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}

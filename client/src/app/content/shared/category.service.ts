import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Category } from './category.model';

@Injectable()
export class CategoryService {

  constructor(
    private http: Http) {}

  getCategories() {
    return this.http.get('http://localhost:8080/api/v1/categories')
      .map((res: Response) => res.json()._embedded.categories)
      .catch(this.handleError);
  }

  getCategory(categoryId: number) {
    return this.http.get('http://localhost:8080/api/v1/categories/' + categoryId)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  addNewCategory(categoryName: string) {
    let body = JSON.stringify({ name: categoryName });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post('http://localhost:8080/api/v1/categories', body, options)
                .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}

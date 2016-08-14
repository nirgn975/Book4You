import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { environment } from '../../../app/';
import { Category } from './category.model';

@Injectable()
export class CategoryService {

  constructor(
    private http: Http
  ) {}

  getCategories(options) {
    return this.http.get(environment.baseUrl + 'categories', options)
      .map((res: Response) => res.json()._embedded.categories)
      .catch(this.handleError);
  }

  getCategory(options, categoryId: number) {
    return this.http.get(environment.baseUrl + 'categories/' + categoryId, options)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  addNewCategory(options, newCategory: string) {
    return this.http.post(environment.baseUrl + 'categories', newCategory, options)
        .map((res: Response) => res)
        .catch(this.handleError);
  }

  deleteCategory(categoryId: string) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Basic ' + btoa('nirgn:password'));
    let options = new RequestOptions({ headers: headers });

    console.log(categoryId);
    return this.http.delete(environment.baseUrl + 'categories/' + categoryId, options)
        .map((res: Response) => res)
        .catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.json().error || 'Server error');
  }
}

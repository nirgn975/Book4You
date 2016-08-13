import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { environment } from '../../../app/';
import { Category } from './category.model';

@Injectable()
export class CategoryService {
  headers = new Headers();
  options = new RequestOptions({ headers: this.headers });
  token = '';

  constructor(
    private http: Http
  ) {
      this.headers.append('Content-Type', 'application/json');
      this.headers.append('Authorization', 'Basic ' + btoa('nirgn:password'));
    }

  getCategories() {
    return this.http.get(environment.baseUrl + 'categories', this.options)
      .map((res: Response) => res.json()._embedded.categories)
      .catch(this.handleError);
  }

  getCategory(categoryId: number) {
    return this.http.get(environment.baseUrl + 'categories/' + categoryId, this.options)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  addNewCategory(newCategory: string) {
    return this.http.post(environment.baseUrl + 'categories', newCategory, this.options)
        .map((res: Response) => res)
        .catch(this.handleError);
  }

  deleteCategory(categoryId: string) {
    return this.http.delete(environment.baseUrl + 'categories/' + categoryId, this.options)
        .map((res: Response) => res)
        .catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.json().error || 'Server error');
  }
}

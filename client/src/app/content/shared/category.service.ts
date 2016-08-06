import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { environment } from '../../../app/';
import { Category } from './category.model';

@Injectable()
export class CategoryService {
  headers = new Headers();

  constructor(
    private http: Http) {
      this.headers.append('Content-Type', 'application/json');
      this.headers.append('Authorization', 'Basic ' + btoa('nirgn:password'));
    }

  getCategories() {
    return this.http.get(environment.baseUrl + 'categories', { headers: this.headers })
      .map((res: Response) => res.json()._embedded.categories)
      .do((data) => console.log(data))
      .catch(this.handleError);
  }

  getCategory(categoryId: number) {
    return this.http.get(environment.baseUrl + 'categories/' + categoryId)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  addNewCategory(newCategory: string) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(environment.baseUrl + 'categories', newCategory, options)
        .map((res: Response) => res.json())
        .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}

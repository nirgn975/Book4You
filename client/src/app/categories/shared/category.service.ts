import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Category } from './category.model';

@Injectable()
export class CategoryService {

  constructor(private http: Http) {}

  getCategories() {
    return this.http.get('http://localhost:8080/api/v1/categories')
      .map((res: Response) => res.json()._embedded.categories)
      .do(res => console.log(res))
      .catch(this.handleError);
  }

  getCategory(id: number) {
    return this.http.get('app/data/category.json')
      .map((res: Response) => res.json())
      .do(res => console.log(res))
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}

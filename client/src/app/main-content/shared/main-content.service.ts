import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions  } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class MainContentService {

  constructor(
    private http: Http) {}

  addNewCategory(categoryName: string) {
    let body = JSON.stringify({ name: categoryName });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    console.log(body);
    console.log(options);

    return this.http.post('http://localhost:8080/api/v1/categories', body, options)
                .map(this.extractData)
                .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    console.log(body);
    return body.data || { };
  }

  private handleError (error: any) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}

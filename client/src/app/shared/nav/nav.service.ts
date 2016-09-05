import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { environment } from '../../../app/';

@Injectable()
export class NavService {

  constructor(
    private http: Http
  ) {}

  addNewUser(options, newUser: string) {
    return this.http.post(environment.baseUrl + 'users', newUser, options)
        .map((res: Response) => res)
        .catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.json().error || 'Server error');
  }
}

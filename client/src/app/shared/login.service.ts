import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { environment } from '../../app/';

@Injectable()
export class LoginService {
  headers = new Headers();
  options = new RequestOptions({ headers: this.headers });

  constructor(
    private http: Http
  ) { }

  login(userName: string, password: string) {
    // Check if the user is already connected.
    if (localStorage.getItem('token')) {
      return localStorage.getItem('token')
    } else {
      this.headers.append('Content-Type', 'application/json');
      this.headers.append('Authorization', 'Basic ' + btoa(userName + ':' + password));

      return this.http.get(environment.baseUrl, this.options)
        .map((res: Response) => res.json()._embedded.categories)
        .do((data) => localStorage.setItem('token', 'nirGalOn'))
        .do((data) => console.log(data))
        .catch(this.handleError);
    }
  }

  getToken() {
    return localStorage.getItem('token');
  }

  private handleError(error: Response) {
    return Observable.throw(error.json().error || 'Server error');
  }
}

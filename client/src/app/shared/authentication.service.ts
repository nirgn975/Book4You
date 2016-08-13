import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { environment } from '../../app/';

@Injectable()
export class AuthenticationService {

  constructor(
    private http: Http
  ) { }

  login(userName: string, password: string) {
    // Check if the user is already connected.
    if (this.getAuth()) {
      return this.getAuth();
    } else {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Authorization', 'Basic ' + btoa(userName + ':' + password));
      let options = new RequestOptions({ headers: headers });

      return this.http.get(environment.baseUrl, options)
        .map((res: Response) => res)
        .do((data) => this.saveData(data, 'Basic ' + btoa(userName + ':' + password)))
        .catch(this.handleError);
    }
  }

  getAuth() {
    return localStorage.getItem('auth');
  }

  getUserName() {
    return localStorage.getItem('userName');
  }

  logout() {
    localStorage.removeItem('auth');
  }

  checkAuth() {
    if (localStorage.getItem('auth')) {
      return true;
    }
    return false;
  }

  saveData(res: Response, auth: string) {
    if (res.status == 200) {
      localStorage.setItem('auth', auth);
    }
  }

  private handleError(error: Response) {
    return Observable.throw(error.json().error || 'Server error');
  }
}

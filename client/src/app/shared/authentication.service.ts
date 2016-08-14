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
      let options = this.getOptions('Basic ' + btoa(userName + ':' + password));

      return this.http.get(environment.baseUrl, options)
        .map((res: Response) => res)
        .do((data) =>
          this.saveData(
            data,
            'Basic ' + btoa(userName + ':' + password),
            userName
          )
        )
        .do((data) => console.log(data))
        .catch(this.handleError);
    }
  }

  getOptions(authorization: string) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', authorization);
    let options = new RequestOptions({ headers: headers });

    return options;
  }

  getAuth() {
    return localStorage.getItem('auth');
  }

  getUserName() {
    return localStorage.getItem('userName');
  }

  logout() {
    localStorage.removeItem('auth');
    localStorage.removeItem('userName');
  }

  checkAuth() {
    if (localStorage.getItem('auth')) {
      return true;
    }
    return false;
  }

  saveData(res: Response, auth: string, userName: string) {
    if (res.status == 200) {
      localStorage.setItem('auth', auth);
      localStorage.setItem('userName', userName);
    }
  }

  private handleError(error: Response) {
    return Observable.throw(error.json().error || 'Server error');
  }
}

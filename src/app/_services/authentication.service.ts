import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as AppUtils from './../_utils/app-utils';

@Injectable()
export class AuthenticationService {
  url: string = '';
  constructor(private http: Http) { }

  checkLogin(response){
    // login successful if there's a jwt token in the response
    let user = response.json();
    
    if (user && user.token) {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem('currentUser', JSON.stringify(user));
      
    }
    
  }

  login(username: string, password: string) {
    this.url = AppUtils.BACKEND_API_ROOT_URL + AppUtils.BACKEND_API_REGISTER_SERVICE + AppUtils.BACKEND_API_VALIDATE_PATH;
    return this.http.post(this.url, JSON.stringify({ username: username, password: password }))
           .map((response: Response) => this.checkLogin(response));
    }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }

}

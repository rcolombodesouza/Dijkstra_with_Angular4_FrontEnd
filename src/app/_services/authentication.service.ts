import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {

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
    return this.http.post('http://localhost:8080/MailBackEnd/service/register/validate', JSON.stringify({ username: username, password: password }))
           .map((response: Response) => this.checkLogin(response));
    }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }

}

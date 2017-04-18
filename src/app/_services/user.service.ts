import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { User } from '../_models/user';

@Injectable()
export class UserService {
    constructor(private http: Http) { }

    getAll() {
        return this.http.get('http://localhost:8080/MailBackEnd/service/register', this.jwt()).map((response: Response) => response.json());
    }

    getById(id: number) {
        return this.http.get('http://localhost:8080/MailBackEnd/service/register' + id, this.jwt()).map((response: Response) => response.json());
    }

    create(user: User) {
        return this.http.post('http://localhost:8080/MailBackEnd/service/register/create', JSON.stringify(user), this.jwt()).map((response: Response) => response.json());
    }

    update(user: User) {
        return this.http.put('http://localhost:8080/MailBackEnd/service/register' + user.id, user, this.jwt()).map((response: Response) => response.json());
    }

    delete(id: number) {
        return this.http.delete('http://localhost:8080/MailBackEnd/service/register' + id, this.jwt()).map((response: Response) => response.json());
    }

    // private helper methods

    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}
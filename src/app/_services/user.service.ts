import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import * as AppUtils from './../_utils/app-utils';
import { User } from '../_models/user';

@Injectable()
export class UserService {
    url: string = '';
    constructor(private http: Http) { }

    create(user: User) {
        this.url = AppUtils.BACKEND_API_ROOT_URL + AppUtils.BACKEND_API_REGISTER_SERVICE + AppUtils.BACKEND_API_CREATE_PATH;
        return this.http.post(this.url, JSON.stringify(user), this.jwt()).map((response: Response) => response.json());
    }

    update(user: User) {
        this.url = AppUtils.BACKEND_API_ROOT_URL + AppUtils.BACKEND_API_REGISTER_SERVICE + AppUtils.BACKEND_API_CREATE_PATH;
        return this.http.put(this.url + user.id, user, this.jwt()).map((response: Response) => response.json());
    }

    delete(id: number) {
        this.url = AppUtils.BACKEND_API_ROOT_URL + AppUtils.BACKEND_API_REGISTER_SERVICE;
        return this.http.delete(this.url + id, this.jwt()).map((response: Response) => response.json());
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
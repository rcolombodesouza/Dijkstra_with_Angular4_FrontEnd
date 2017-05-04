import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import * as AppUtils from './../_utils/app-utils';

@Injectable()
export class FileSearchService {
  url: string = '';
  constructor(private http: Http) {}

  doPost(fileContent: JSON){
    const content = {fileContent};
    const headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');  
    this.url = AppUtils.BACKEND_API_ROOT_URL + AppUtils.BACKEND_API_DIJKSTRA_SERVICE;  
    return this.http.post(this.url, JSON.stringify(content), headers).map((response:Response) => response.json());
  }  
}
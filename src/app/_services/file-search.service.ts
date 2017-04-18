import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';


@Injectable()
export class FileSearchService {
  constructor(private http: Http) {}

  doPost(fileContent: JSON){
    const content = {fileContent};
    const headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');    
    return this.http.post('http://localhost:8080/MailBackEnd/service/dijkstra', JSON.stringify(content), headers).map((response:Response) => response.json());
  }  
}
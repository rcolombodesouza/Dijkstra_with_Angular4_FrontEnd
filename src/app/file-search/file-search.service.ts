import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class FileSearchService {
  constructor(private _http:Http) {}

   doGet(){
     return this._http.get('http://localhost:8080/MailBackEnd/service/dijkstra').map(response => response.json());
   }

  doPost(fileContent: JSON){
    const content = {fileContent};
    const headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');    
    return this._http.post('http://localhost:8080/MailBackEnd/service/dijkstra', JSON.stringify(content), headers).map(response => response.json());
  }
}
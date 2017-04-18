import { SearchResultComponent } from './../search-result/search-result.component';
import { FileSearchService } from './../_services/file-search.service';
import { Component} from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router'; 


@Component({
  selector: 'app-file-search',
  templateUrl: './file-search.component.html',
  styleUrls: ['./file-search.component.css']
})

/**
 * Component responsible for search the best way with Dijkstra
 */
export class FileSearchComponent  {
  _data: JSON;
  _myReader:FileReader = new FileReader();
  _show:boolean = false;
  _buttonEnabled:boolean = false;
  _errorMessage:string = "";  
  
  
  //Class constructor
  constructor(private router: Router, 
              private fileSearchService: FileSearchService){}


  //Function responsible for validate the file extension
  validateFileName(fileName: string){    
    if(fileName.substring(fileName.indexOf(".") + 1) === "csv"){
      this._buttonEnabled = true;
    } else {
      this._buttonEnabled = false;
    }
    
  }

  //Returns the best path for all items inside the file imported.
  //If data is returned, than calls a function to set the data.
  //If an error is returned, than sends the error to the frontend.
  search(){    
    this.fileSearchService.doPost(this._myReader.result).subscribe(
                                     data => {this.setData(data)},
                                     error => {this._errorMessage = "BackEnd is not running. Details: " + error;},
                                     () => this._show = true);
  }
  
  //set the data received from the backend.
  setData(data){    
    this._data = data.result;
  }


  changeListener($event) : void {    
    this.readThis($event.target);
  }

  readThis(inputValue: any) : void {
    let file:File = inputValue.files[0];     
    this.validateFileName(file.name); 
    this._myReader.readAsText(file);
  }
}

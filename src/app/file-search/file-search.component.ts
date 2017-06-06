import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'; 
import { SearchResultComponent } from './../search-result/search-result.component';
import { FileSearchService } from './../_services/file-search.service';

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
  _title = 'DEXP';
  _titleExp = ' - Delivery Express';
  _username: string;
  

  //Class constructor
  constructor(private router: ActivatedRoute, 
              private fileSearchService: FileSearchService){
    
    //Receives the username from the previous component and sets the variable _username with it
    this.router.queryParams.subscribe(params => {this._username = params["username"];});

  }


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

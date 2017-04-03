import { SearchResultComponent } from './../search-result/search-result.component';
import { FileSearchService } from './file-search.service';
import { Component} from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-file-search',
  templateUrl: './file-search.component.html',
  styleUrls: ['./file-search.component.css']
})
export class FileSearchComponent  {
  getData: JSON;
  myReader:FileReader = new FileReader();
  show:boolean = false;
  buttonEnabled:boolean = false;
  errorMessage:string = "";
  
  constructor(private _fileSearchService: FileSearchService){}
  
  
  changeListener($event) : void {
    this.readThis($event.target);
  }

  

  validateFileName(fileName: string){
    if(fileName.substring(fileName.indexOf(".") + 1) === "csv"){
      this.buttonEnabled = true;
    } else {
      this.buttonEnabled = false;
    }
  }

  readThis(inputValue: any) : void {
    let file:File = inputValue.files[0];    
    this.validateFileName(file.name); 
    this.myReader.readAsText(file);
  }
  
  getAll(){    
      this._fileSearchService.doPost(this.myReader.result).subscribe(
      data => this.editData(data),
      error => this.errorMessage = "BackEnd is not running. Details: " + error,
      () => this.show = true
    );
             
  }
  
  editData(data){
    this.getData = data.result;
  }
  
}

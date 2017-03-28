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
  
  constructor(private _fileSearchService: FileSearchService){}
  
  
  changeListener($event) : void {
    this.readThis($event.target);
  }

  readThis(inputValue: any) : void {
    let file:File = inputValue.files[0]; 
    
    this.myReader.readAsText(file);
  }
  
  
  
  
  getAll(){    
     // this._fileSearchService.doGet().subscribe(
      //data => this.editData(data),
      //error => alert(error),
      //() => console.log("Finished")
    //);    
      this.show = true;
      this._fileSearchService.doPost(this.myReader.result).subscribe(
      data => this.editData(data),
      error => alert(error),
      () => console.log("Finished")
    );  
    
  }
  
  editData(data){
    this.getData = data.result;
  }
  
}

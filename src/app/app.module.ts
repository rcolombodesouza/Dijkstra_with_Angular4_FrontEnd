import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FileSearchComponent } from './file-search/file-search.component';
import { FileSearchService } from './file-search/file-search.service';
import { SearchResultComponent } from './search-result/search-result.component';
import { SearchFooterComponent } from './search-footer/search-footer.component';




@NgModule({
  declarations: [
    AppComponent,
    FileSearchComponent,
    SearchResultComponent,
    SearchFooterComponent
        
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [FileSearchService],
  bootstrap: [AppComponent, FileSearchComponent]
})
export class AppModule { }

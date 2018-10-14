import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PolishDatePipe } from './pipes/polish-date.pipe';
import {FormsModule} from "@angular/forms";
import { SearchGalleriesPipe } from './pipes/search-galleries.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PolishDatePipe,
    SearchGalleriesPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

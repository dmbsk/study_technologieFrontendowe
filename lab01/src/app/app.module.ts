import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PolishDatePipe } from './pipes/polish-date.pipe';
import { FormsModule } from "@angular/forms";
import { SearchGalleriesPipe } from './pipes/search-galleries.pipe';
import { NavComponent } from './components/nav/nav.component';
import { GalleriesComponent } from './components/galleries/galleries/galleries.component';
import { GalleryItemComponent } from './components/galleries/gallery-item/gallery-item.component';
import { GallerySearchComponent } from './components/gallery-search/gallery-search.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { GalleryComponent } from './components/galleries/gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    PolishDatePipe,
    SearchGalleriesPipe,
    NavComponent,
    GalleriesComponent,
    GalleryItemComponent,
    GallerySearchComponent,
    DashboardComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

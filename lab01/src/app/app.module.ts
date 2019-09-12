import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
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
import { GalleryFullItemComponent } from './components/galleries/gallery-full-item/gallery-full-item.component';
import { SpecialDatePipe } from './pipes/special-date.pipe';
import { CommentFormComponent } from './components/comments/comment-form/comment-form.component';
import { CommentBoxComponent } from './components/comments/comment-box/comment-box.component';
import { GalleryAdderComponent } from './components/galleries/gallery-adder/gallery-adder.component';
import { NewsComponent } from './components/news/news/news.component';
import { NewComponent } from './components/news/new/new.component';
import { NewAdderComponent } from './components/news/new-adder/new-adder.component';
import { NewFullItemComponent } from './components/news/new-full-item/new-full-item.component';
import { NewItemComponent } from './components/news/new-item/new-item.component';

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
    GalleryComponent,
    GalleryFullItemComponent,
    SpecialDatePipe,
    CommentFormComponent,
    CommentBoxComponent,
    GalleryAdderComponent,
    NewsComponent,
    NewComponent,
    NewAdderComponent,
    NewFullItemComponent,
    NewItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

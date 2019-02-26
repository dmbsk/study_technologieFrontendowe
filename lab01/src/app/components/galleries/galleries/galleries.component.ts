import {AfterViewInit, Component, HostListener, OnInit} from '@angular/core';
import { IGallery } from "../../../interfaces/IGallery";
import { Galleries } from "../../../constants/galleries.constant";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-galleries',
  templateUrl: './galleries.component.html',
  styleUrls: ['./galleries.component.scss']
})

export class GalleriesComponent implements OnInit, AfterViewInit {

  title: string;
  description: string;
  galleries: IGallery[];
  searchValue: string;
  galleryElements: HTMLCollectionOf<Element>;
  currentGalleryOnView: number;
  lastGalleryOnView: number;
  lastFunctionCall: Date;
  apiButton: Element;
  apiButtonText: string;
  galleriesElement: Element;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'aplication/json',
      'Authorization': '46'
    })
  };

  apiLinks = {
    post: 'http://project.usagi.pl/gallery',
    get: 'http://project.usagi.pl/gallery',
    remove: 'http://project.usagi.pl/gallery/delete/'
  };

  constructor(private http: HttpClient) {
    this.title = 'My trips';
    this.description = 'Photos from my trips around the world!';
    this.searchValue = '';
    this.currentGalleryOnView = 0;
    this.lastGalleryOnView = 0;
    this.lastFunctionCall = new Date();
    this.apiButtonText = "api controller";

    this.galleries = [];
    this.http.get(this.apiLinks.get, this.httpOptions).toPromise().then((response: IGallery[]) => {
      console.log('response', response);
      this.galleries = response;
    });
  }

  ngOnInit(){
  }

  ngAfterViewInit(){
    this.galleryElements = document.getElementsByClassName('single-image');
    this.apiButton = document.getElementsByClassName('hide-buttons')[0];
    this.galleriesElement = document.getElementsByClassName('galleries')[0];
  }

  setSearchValue($event) {
    this.searchValue = $event
  }

  showMoreOptions = () => {
    if(this.apiButton.classList.contains('show-buttons')) {
      this.apiButton.classList.remove('show-buttons');
      this.apiButtonText = "api controller"
    }else {
      this.apiButton.classList.add('show-buttons');
      this.apiButtonText = "hide..."
    }
  };

  @HostListener('mousewheel', ['$event'])
  scrollHandler(event: any): void {
    event.stopPropagation();
    const currentDate = new Date();
    if(this.lastFunctionCall.getTime() + (1000 * 1) < currentDate.getTime()){
      this.lastFunctionCall = new Date();
      (event.deltaX + event.deltaY > 0) ? this.nextImage(): null;
      (event.deltaX + event.deltaY < 0) ? this.prevImage(): null;
    }
  }

  nextImage = () => {
    if(this.currentGalleryOnView < this.galleryElements.length){
      this.currentGalleryOnView =
        this.currentGalleryOnView === this.galleryElements.length - 1
          ? this.galleryElements.length - 1
          : this.currentGalleryOnView + 1
    }
    if(this.currentGalleryOnView != this.lastGalleryOnView) {
      this.lastGalleryOnView = this.currentGalleryOnView;
      this.galleryElements[this.currentGalleryOnView].scrollIntoView( {behavior: "smooth"})
    }
  };

  prevImage = () => {
    if(this.currentGalleryOnView < this.galleryElements.length){
      this.currentGalleryOnView =
        this.currentGalleryOnView === 0
          ? 0
          : this.currentGalleryOnView - 1
    }
    if(this.currentGalleryOnView != this.lastGalleryOnView) {
      this.lastGalleryOnView = this.currentGalleryOnView;
      this.galleryElements[this.currentGalleryOnView].scrollIntoView( {behavior: "smooth"}, )
    }
  };

  exportGalleries(){
    Galleries.forEach((gallery: IGallery) => {
      delete(gallery.galleryId);

      this.http.post(this.apiLinks.post, gallery, this.httpOptions).toPromise().then((response: IGallery) => {
        console.log("success", response);
        this.galleries.push(response)
      }, (errResponse) => {
        console.log("error", errResponse);
      })
    })
  }

  removeGalleries() {
    this.galleries.forEach((gallery: IGallery) => {
      this.http.post(this.apiLinks.remove + gallery.galleryId, {}, this.httpOptions).toPromise().then((response) => {
        this.galleries.splice(0, 1);
        console.log('success', response);
      }, (errResponse) => {
        console.log('error', errResponse);
      })
    })
  }

  removeGallery(galleryId){
    const index = this.galleries.findIndex((gallery: IGallery) => (gallery.galleryId === galleryId) );
    this.http.post(this.apiLinks.remove + galleryId, {}, this.httpOptions).toPromise().then( (response) => {
      this.galleries.splice(index, 1);
      console.log(response)
    }, (errResponse) => {
      console.log(errResponse)
    });
    console.log(index);
  }
}

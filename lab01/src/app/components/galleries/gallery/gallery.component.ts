import {Component, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import {IGallery} from "../../../interfaces/IGallery";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

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

  private galleryId: string;
  public gallery: IGallery[];
  private scrollingElement: Element;
  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.gallery = [];
    this.galleryId = this.route.snapshot.paramMap.get('galleryId');
    this.http.get("http://project.usagi.pl/gallery/" + this.galleryId, this.httpOptions).toPromise().then((response: IGallery[]) => {
      console.log('response', response);
      this.gallery = response;
    });
  }

  ngOnInit

}

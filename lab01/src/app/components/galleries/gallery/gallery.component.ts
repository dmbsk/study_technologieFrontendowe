import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {IGallery} from '../../../interfaces/IGallery';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {IComment} from '../../../interfaces/IComment';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {


  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.galleryId = this.route.snapshot.paramMap.get('galleryId');
    this.http.get(this.apiLinks.get + '/' + this.galleryId, this.httpOptions).toPromise().then((response: IGallery) => {
      console.log('response', response);
      this.gallery = response;
    });
    
    this.commentLinks.post = `http://project.usagi.pl/comment/byGallery/${this.galleryId}`;
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': '46'
    })
  };

  apiLinks = {
    post: 'http://project.usagi.pl/gallery',
    get: 'http://project.usagi.pl/gallery',
    remove: 'http://project.usagi.pl/gallery/delete/'
  };


  public showEditForm: boolean;
  public galleryId: string;
  public gallery: IGallery;
  public comments: IComment[];


  commentLinks = {
    post: 'http://project.usagi.pl/comment/byGallery/'
  };

  commentWasDeleted(commentToDelete: IComment) {
    this.comments = this.comments.filter((comment) => ( comment.commentId !== commentToDelete.commentId ));
  }

  commentWasAdded(commentToAdd: IComment) {
    this.comments.push(commentToAdd);
  }

  ngOnInit() {
    this.http.get(this.commentLinks.post, this.httpOptions).toPromise().then((response: IComment[]) => {
      this.comments = response;
      console.log(response);
    });
  }

  saveGallery = event => {
    event.dateCreated = new Date();
    event.tags = event.tags.split(' ');
    this.http.post(`http://project.usagi.pl/gallery/${this.galleryId}`, event, this.httpOptions).toPromise().then( (response: IGallery) => {
      console.log(response);
      this.gallery = response;
      this.showEditForm = false;
    });
  }

}

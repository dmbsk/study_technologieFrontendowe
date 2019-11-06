import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IComment} from "../../../interfaces/IComment";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss']
})
export class CommentFormComponent implements OnInit {

  @Input() galleryId: any;
  @Output() commentToAdd = new EventEmitter<IComment>();

  public comment: object;

  constructor(private http: HttpClient) {
    console.log(this.galleryId)
  }

  ngOnInit() {
    this.comment = this.setEmptyComment()
  }


  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'aplication/json',
      'Authorization': '46'
    })
  };

  onSubmit = () => {
    console.log(this.comment);
    this.http.post(`http://project.usagi.pl/comment`, this.comment, this.httpOptions).toPromise().then((response: IComment) => {
      this.comment = this.setEmptyComment();
      this.commentToAdd.emit(response);
    });
  };

  private setEmptyComment = () => (
    {
      galleryId: this.galleryId,
      firstName: '',
      lastName: '',
      email: '',
      message: '',
      dateCreated: new Date()
    }
  );

}



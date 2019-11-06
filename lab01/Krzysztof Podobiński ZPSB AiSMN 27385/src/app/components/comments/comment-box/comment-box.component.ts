import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IComment} from "../../../interfaces/IComment";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-comment-box',
  templateUrl: './comment-box.component.html',
  styleUrls: ['./comment-box.component.scss']
})
export class CommentBoxComponent{

  @Input() comment: IComment;
  @Output() commentToDelete = new EventEmitter<IComment>();

  constructor(private http: HttpClient) {}



  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'aplication/json',
      'Authorization': '46'
    })
  };

  deleteComment = () => {
    console.log(this.comment);
    this.http.post(`http://project.usagi.pl/comment/delete/${this.comment.commentId}`,
      this.comment, this.httpOptions).toPromise().then((response: {status: string}) => {
        console.log(response);
        this.commentToDelete.emit(this.comment)
    });
  };

}

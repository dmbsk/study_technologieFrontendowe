import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { INews } from '../../../interfaces/INews';
import { IComment } from '../../../interfaces/IComment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': '46'
    })
  };

  apiLinks = {
    post: 'http://project.usagi.pl/news',
    get: 'http://project.usagi.pl/news',
    remove: 'http://project.usagi.pl/new/delete/'
  };


  public showEditForm: boolean;
  public newId: string;
  public new: INews;


  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.newId = this.route.snapshot.paramMap.get('newsId');
    this.http.get(this.apiLinks.get + '/' + this.newId, this.httpOptions).toPromise().then((response: INews) => {
      console.log('response', response);
      this.new = response;
    });
  }

  saveNew = event => {
    event.dateCreated = new Date();
    event.tags = event.tags.split(' ');
    this.http.post(`http://project.usagi.pl/news/${this.newId}`, event, this.httpOptions).toPromise().then( (response: INews) => {
      console.log(response);
      this.new = response;
      this.showEditForm = false;
    });
  }

}

import {AfterViewInit, Component, OnInit} from '@angular/core';
import { INews } from '../../../interfaces/INews';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})

export class NewsComponent implements OnInit, AfterViewInit {

  showNewsForm: boolean;
  title: string;
  description: string;
  news: INews[];
  searchValue: string;
  newsElements: HTMLCollectionOf<Element>;

  currentAmountOfImages: number;

  lastFunctionCall: Date;
  apiButton: Element;
  apiButtonText: string;
  newsElement: Element;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'aplication/json',
      'Authorization': '46'
    })
  };

  apiLinks = {
    post: 'http://project.usagi.pl/news',
    get: 'http://project.usagi.pl/news',
    remove: 'http://project.usagi.pl/news/delete/'
  };

  constructor(private http: HttpClient) {
    this.title = 'My trips';
    this.description = 'Photos from my trips around the world!';
    this.searchValue = '';
    this.currentAmountOfImages = 2;

    this.lastFunctionCall = new Date();
    this.apiButtonText = 'api controller';

    this.news = [];
    this.http.get(this.apiLinks.get, this.httpOptions).toPromise().then((response: INews[]) => {
      this.news = response;
      console.log('saved response', this.news);
    });
  }

  ngOnInit() {
    this.showNewsForm = false;
  }

  ngAfterViewInit() {
    this.newsElements = document.getElementsByClassName('single-image');
    this.apiButton = document.getElementsByClassName('hide-buttons')[0];
    this.newsElement = document.getElementsByClassName('news')[0];
  }

  setSearchValue($event) {
    this.searchValue = $event;
  }

  showMoreOptions = () => {
    if (this.apiButton.classList.contains('show-buttons')) {
      this.apiButton.classList.remove('show-buttons');
      this.apiButtonText = 'api controller';
    } else {
      this.apiButton.classList.add('show-buttons');
      this.apiButtonText = 'hide...';
    }
  }

  hideForm() {
    this.showNewsForm = false;
  }

  removeNews() {
    this.news.splice(0, 1);

    this.news.forEach((news: INews) => {
      this.http.post(this.apiLinks.remove + news.newsId, {}, this.httpOptions).toPromise().then((response) => {
        this.news.splice(0, 1);
        console.log('success', response);
      }, (errResponse) => {
        console.log('error', errResponse);
      });
    });
  }

  removeSingleNews(newsId) {
    console.log(newsId);
    const index = this.news.findIndex((news: INews) => (news.newsId === newsId) );
    this.http.post(this.apiLinks.remove + newsId, {}, this.httpOptions).toPromise().then( (response) => {
      this.news.splice(index, 1);
      console.log(response);
    }, (errResponse) => {
      console.log(errResponse);
    });
    console.log(index);
  }

  saveSingleNews = event => {
    debugger;
    event.dateCreated = new Date();
    this.http.post('http://project.usagi.pl/news', event, this.httpOptions).toPromise().then( (response: INews) => {
      console.log(response);
      this.news.push(response);
      this.showNewsForm = false;
    });
  }
}

import { Component } from '@angular/core';
import {IGallery} from "./interfaces/IGallery";
import {Galleries} from "./constants/galleries.constant";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title: string;
  description: string;
  galleries: IGallery[];
  searchValue: string;

  constructor() {
    this.title = 'My trips';
    this.description = 'Photos from my trips around the world!';
    this.galleries = Galleries;
    this.searchValue = '';
  }
}

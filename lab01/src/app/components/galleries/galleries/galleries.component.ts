import { Component, OnInit } from '@angular/core';
import {IGallery} from "../../../interfaces/IGallery";
import {Galleries} from "../../../constants/galleries.constant";

@Component({
  selector: 'app-galleries',
  templateUrl: './galleries.component.html',
  styleUrls: ['./galleries.component.scss']
})

export class GalleriesComponent implements OnInit {

  title: string;
  description: string;
  galleries: IGallery[];
  searchValue: string;

  constructor() {
    this.title = 'My trips';
    this.description = 'Photos from my trips around the world!';
    this.galleries = Galleries;
    this.searchValue = ''
  }

  setSearchValue($event) {
    this.searchValue = $event
  }
}

import { Component, OnInit, Input } from '@angular/core';
import {IGallery} from "../../../interfaces/IGallery";

@Component({
  selector: 'app-gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.scss']
})
export class GalleryItemComponent implements OnInit {

  @Input() gallery: IGallery;

  constructor() { }

  ngOnInit() {
  }

}

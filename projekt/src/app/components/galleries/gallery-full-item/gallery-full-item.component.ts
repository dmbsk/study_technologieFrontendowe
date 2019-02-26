import {Component, Input, OnInit} from '@angular/core';
import {IPhoto} from "../../../interfaces/IPhoto";

@Component({
  selector: 'app-gallery-full-item',
  templateUrl: './gallery-full-item.component.html',
  styleUrls: ['./gallery-full-item.component.scss']
})
export class GalleryFullItemComponent implements OnInit {

  @Input() gallery: IPhoto;

  constructor() { }

  ngOnInit() {
  }

}

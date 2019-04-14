import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {IGallery} from "../../../interfaces/IGallery";

@Component({
  selector: 'app-gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.scss']
})
export class GalleryItemComponent implements OnInit {

  @Input() gallery: IGallery;
  @Output() deleteGallery: EventEmitter<string> = new EventEmitter<string>();

  public galleryThumbUrlAsBgImage: string;

  ngOnInit() {
    this.galleryThumbUrlAsBgImage = `url("${this.gallery.thumbURL}")`
  }

  onDelete(galleryId: string) {
    this.deleteGallery.emit(galleryId)
  }
}

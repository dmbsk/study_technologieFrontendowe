import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import * as uuid from 'uuid/v4'
import {IGallery} from "../../../interfaces/IGallery";

@Component({
  selector: 'app-gallery-adder',
  templateUrl: './gallery-adder.component.html',
  styleUrls: ['./gallery-adder.component.scss']
})
export class GalleryAdderComponent implements OnInit {

  @Input() galleryId: any;
  @Output() hide = new EventEmitter<boolean>();
  @Output() saveGallery = new EventEmitter<IGallery>();

  gallery: IGallery;

  constructor() {
    this.gallery = (this.gallery && this.gallery.galleryId) ? this.gallery : this.setEmptyGallery();
  }

  ngOnInit() {
    this.gallery = (this.gallery && this.gallery.galleryId) ? this.gallery : this.setEmptyGallery();
  }


  hideForm = () => {
    this.hide.emit(false)
  };

  addPhoto = (event) => {
    event.preventDefault();
    this.gallery.photos.push(this.setEmptyPhoto())
  };

  removePhoto = index => {
    if(this.gallery.photos.length > 0) {
      this.gallery.photos.slice(index, 1)
    }
  };

  onSubmit = () => {
    this.saveGallery.emit(this.gallery)
  };

  setEmptyGallery() {
    return {
      title: '',
      thumbURL: '',
      dateCreated: '',
      description: '',
      tags: [],
      photos: [this.setEmptyPhoto()],
      bgColor: 'black'
    }
  };

  setEmptyPhoto() {
    return {
      photoId: uuid(),
      thumbUrl: '',
      imgUrl: ''
    }
  }

}



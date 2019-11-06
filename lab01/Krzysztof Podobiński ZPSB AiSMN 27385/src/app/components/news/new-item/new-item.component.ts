import {Component, Input, EventEmitter, Output} from '@angular/core';
import {INews} from '../../../interfaces/INews';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.scss']
})
export class NewItemComponent {

  @Input() new: INews;
  @Output() deleteNew: EventEmitter<string> = new EventEmitter<string>();

  constructor() {

  }

  onCreate() {
    console.log('TCL: NewItemComponent -> onCreate -> this.new', this.new);
  }

  onDelete(newId: string) {
    this.deleteNew.emit(newId);
  }
}

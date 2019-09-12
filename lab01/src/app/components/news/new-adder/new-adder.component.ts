import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {INews} from '../../../interfaces/INews';

@Component({
  selector: 'app-new-adder',
  templateUrl: './new-adder.component.html',
  styleUrls: ['./new-adder.component.scss']
})

export class NewAdderComponent implements OnInit {

  @Input() newId: any;
  @Output() hide = new EventEmitter<boolean>();
  @Output() saveNew = new EventEmitter<INews>();

  new: INews;

  constructor() {
    this.new = (this.new && this.new.newsId) ? this.new : this.setEmptyNew();
  }

  ngOnInit() {
    this.new = (this.new && this.new.newsId) ? this.new : this.setEmptyNew();
  }


  hideForm = () => {
    this.hide.emit(false);
  }

  onSubmit = () => {
    this.saveNew.emit(this.new);
  }

  setEmptyNew() {
    return {
      title: '',
      dateCreated: '',
      description: '',
      tags: [],
    };
  }

}



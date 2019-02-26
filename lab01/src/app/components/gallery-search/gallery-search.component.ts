import {Component, OnInit, Output, EventEmitter, AfterViewInit, HostListener} from '@angular/core';

@Component({
  selector: 'app-gallery-search',
  templateUrl: './gallery-search.component.html',
  styleUrls: ['./gallery-search.component.scss']
})
export class GallerySearchComponent implements OnInit, AfterViewInit {

  @Output()
  searchValue: EventEmitter<string> = new EventEmitter<string>();

  value: string;
  key: string;
  input: Element;
  time: Date;

  constructor() {
    this.value = '';
    this.time = new Date()
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.input = document.getElementsByClassName('search')[0]
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    this.input.classList.add('search-visible');
    if(event.key === 'Backspace'){
      this.value = this.value.slice(0, -1)
    } else {
      (event.keyCode >= 65 && event.keyCode <= 90) || event.keyCode === 32 ? this.value += event.key : null;
    }
    this.searchValue.emit(this.value);
    console.log(this.value);
    setTimeout(() => {this.input.classList.remove('search-visible')}, 1300);
  }

}

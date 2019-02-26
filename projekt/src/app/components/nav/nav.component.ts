import {AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit, AfterViewInit {

  contact: Element;
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.contact = document.getElementsByClassName('contact')[0]
  }

  openContact = () => {
    this.contact.classList.add('contact-visible');
  };

  closeContact = () => {
    this.contact.classList.remove('contact-visible');
  };
}

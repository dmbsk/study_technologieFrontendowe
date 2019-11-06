import {Component, Input, OnInit, AfterViewInit, AfterContentInit} from '@angular/core';
import {INews} from '../../../interfaces/INews';

@Component({
  selector: 'app-new-full-item',
  templateUrl: './new-full-item.component.html',
  styleUrls: ['./new-full-item.component.scss']
})
export class NewFullItemComponent {

  @Input() singleNew: INews;

}

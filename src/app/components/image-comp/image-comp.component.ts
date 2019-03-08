import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IImage } from 'src/app/interfaces/image';

@Component({
  selector: 'app-image-comp',
  templateUrl: './image-comp.component.html',
  styleUrls: ['./image-comp.component.scss']
})
export class ImageCompComponent implements OnInit {

  @Input() image: IImage;
  @Output() imageChange: EventEmitter<IImage> = new EventEmitter<IImage>();

  add = 'Add to Favourite';
  remove = 'Remove from Favourite';

  constructor() { }

  ngOnInit() {
  }

  showChecked() {
    this.imageChange.emit(this.image);
  }

}

import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-single-item-carousel',
  templateUrl: './single-item-carousel.component.html',
  styleUrls: ['./single-item-carousel.component.scss'],
})
export class SingleItemCarouselComponent implements OnInit, AfterViewInit {

  @Input('items') items: any[] = [];
  @Input('start-index') startIndex = 0;
  @Output('valueChange') onValueChange = new EventEmitter<any>();
  currentIndex: number;

  constructor() {
  }

  ngOnInit() {
    if (this.startIndex < 0) {
      throw Error('startIndex should be equal or greater to 0');
    }
    if (this.startIndex >= this.items.length && this.startIndex !== 0) {
      throw Error('startIndex is out ouf items length bound');
    }
    this.currentIndex = this.startIndex;
  }

  ngAfterViewInit(): void {
    this.emitCurrentValue();
  }

  nex() {
    if ((this.currentIndex + 1) >= this.items.length) {
      this.currentIndex = 0;
    } else {
      this.currentIndex++;
    }
    this.emitCurrentValue();
  }

  prev() {
    if ((this.currentIndex - 1) < 0) {
      this.currentIndex = this.items.length - 1;
    } else {
      this.currentIndex--;
    }
    this.emitCurrentValue();
  }

  emitCurrentValue() {
    this.onValueChange.emit(this.items[this.currentIndex]);
  }

}

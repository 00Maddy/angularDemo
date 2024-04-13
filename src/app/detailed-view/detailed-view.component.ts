import { AfterContentInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Product } from '../Modal/Product';

@Component({
  selector: 'demo-detailed-view',
  templateUrl: './detailed-view.component.html',
  styleUrl: './detailed-view.component.css',
})
export class DetailedViewComponent {
 
  counter = 0;
  tems = [];
  @Input() viewProduct: Product;
  @Output() close: EventEmitter<string> = new EventEmitter();

  
  curBtn: ElementRef;

  onClose() {
    console.log('close');
    this.close.emit('close');
    // this.viewProduct = undefined;
  }

  next() {}
}

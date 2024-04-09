import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../Modal/Product';

@Component({
  selector: 'demo-detailed-view',
  templateUrl: './detailed-view.component.html',
  styleUrl: './detailed-view.component.css',
})
export class DetailedViewComponent {
  @Input() viewProduct: Product;
  @Output() close:EventEmitter<string> = new EventEmitter();
  onClose(){
    console.log('close');
    this.close.emit('close');
    // this.viewProduct = undefined;
  }
}

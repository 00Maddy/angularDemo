import { AfterContentInit, AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild, ViewEncapsulation, viewChild } from '@angular/core';
import { Product } from '../Modal/Product';

@Component({
  selector: 'demo-detailed-view',
  templateUrl: './detailed-view.component.html',
  styleUrl: './detailed-view.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class DetailedViewComponent implements OnInit, AfterViewInit {
  @ViewChild('notifyme') template: TemplateRef<any>;
  counter = 0;
  tems = [];
  @Input() viewProduct: Product;
  @Output() close: EventEmitter<string> = new EventEmitter();
  ngOnInit() {
    console.log('detailed view Component ngOnInit called');
    console.log(this.template);
  }
  ngAfterViewInit(): void {
    console.log('detailed view Component ngAfterViewInit called');
    console.log(this.template);
  }

  curBtn: ElementRef;

  onClose() {
    // console.log('close');
    this.close.emit('close');
    // this.viewProduct = undefined;
  }

  next() {}
}

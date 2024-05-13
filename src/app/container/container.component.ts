import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation,} from '@angular/core';

@Component({
  selector: 'demo-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.css',
  encapsulation: ViewEncapsulation.None
})
// emulated,none,shawdowdom
export class ContainerComponent implements OnChanges, OnInit, DoCheck {
  @Input() title: string[];
  constructor() {
    // console.log(this.title);
    console.log('Container Component Constructor called');

  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Container Component ngOnChanges called');

    console.log(changes);
    // console.log(this.title);
  }
  ngOnInit() {
    console.log('Container Component ngOnInit called');
    console.log(this.title);
  }
  ngDoCheck(): void {
    console.log('Container Component ngDoCheck called');
    console.log(this.title);
  }
  ngOnDestroy() {
    console.log('Container Component ngOnDestroy called');
    console.log(this.title);
  }
}

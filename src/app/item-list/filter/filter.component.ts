import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'demo-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css',
})
export class FilterComponent {
  @Input() filtervalue: string;
  @Input() allcount: number;
  @Input() availbleproducts: number;
  @Input() unavailbleproducts: number;

  @Output()
  filterChange: EventEmitter<string> = new EventEmitter<string>();

  onfilterCahnge() {
    console.log(this.filtervalue);

    this.filterChange.emit(this.filtervalue);
  }

  submit(event){
    console.log(event);
    
  }
}

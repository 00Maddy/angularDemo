import { Component, Input } from '@angular/core';

@Component({
  selector: 'demo-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css',
})
export class FilterComponent {
  @Input() filtervalue:string;
  @Input() allcount: number;
  @Input() availbleproducts: number;
  @Input() unavailbleproducts: number;
}

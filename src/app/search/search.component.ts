import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'demo-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
@Output()
onSearch: EventEmitter<string> = new EventEmitter<string>();

onInput(value){
  console.log(value);
  
  this.onSearch.emit(value);
}
}

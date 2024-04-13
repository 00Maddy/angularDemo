import { Component, ElementRef, EventEmitter, Output, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'demo-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  @Output()
  onSearch: EventEmitter<string> = new EventEmitter<string>();

  @ViewChildren('productname')  
  productnameInputs: QueryList<ElementRef>;
  onInput(value) {
    // console.log(value);
    // console.log(this.productnameInput.nativeElement);
    this.productnameInputs.forEach((element)=>{
      console.log(element.nativeElement.value);
      
    })
    
    // this.onSearch.emit(value);
  }
}

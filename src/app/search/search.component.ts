import { Component, ElementRef, EventEmitter, Output, QueryList, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { LoginService } from '../service/loginService.service';
@Component({
  selector: 'demo-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {

  @Output()
  onSearch: EventEmitter<string> = new EventEmitter<string>();
  seraarchItem: string[] = []; // pointing @34567 = @45678
  @ViewChildren('productname')
  productnameInputs: QueryList<ElementRef>;
constructor(public loginservice: LoginService){

}
  // loginservice = new LoginService();
  
  onInput(value) {
    // let temp = []; // pointing @234567
    // temp.push(value);
    // this.seraarchItem = temp;
    this.seraarchItem.push(value);
    // console.log(this.seraarchItem);
    // console.log(this.productnameInput.nativeElement);
    this.productnameInputs.forEach((element) => {
      // console.log(element.nativeElement.value);
    });

    // this.onSearch.emit(value);
  }
}

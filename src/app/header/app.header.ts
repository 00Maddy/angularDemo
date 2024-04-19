import { Component, viewChild } from "@angular/core";
import { SearchComponent } from "../search/search.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})

export class headerComponent {
  searchItem: string = '';
  constructor(){
    // console.log('header component constructor called');
  }
  onSearchEmit(event) {
    // console.log(event);
    this.searchItem = event;
  }
  
}

//create a new ts class and export it
//declare as @Component decorator
//import it in main module
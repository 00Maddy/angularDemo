import { Component, viewChild } from "@angular/core";
import { SearchComponent } from "../search/search.component";
import { LoginService } from "../service/loginService.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  providers: [LoginService]
})
export class headerComponent {
  searchItem: string = '';
  constructor(public loginservice: LoginService) {
    // console.log('header component constructor called');
  }
  // loginservice = new LoginService();
  onSearchEmit(event) {
    // console.log(event);
    this.searchItem = event;
  }
 
}

//create a new ts class and export it
//declare as @Component decorator
//import it in main module
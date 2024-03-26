import { Component } from '@angular/core';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Hello World!';
  notShow = true;

  OnClick():void{
    this.notShow =!this.notShow;
  }
}

import { Component } from '@angular/core';
import { LoginService } from '../../service/loginService.service';

@Component({
  selector: '#demo-topheader',
  templateUrl: './topheader.component.html',
  styleUrl: './topheader.component.css',
  providers: [LoginService],
})
export class TopheaderComponent {
  constructor(public loginservice: LoginService) {}
}

import { Component, SimpleChanges } from '@angular/core';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(){
    // console.log('App Component constructor called');
  }
  title = 'Hello World!';
  isLogin = true;
  isSubmited = false;
  logininput = {
    username: '',
    password: '',
    btncolor: 'red',
  };
  signininput = {
    username: '',
    mobilenumber: '',
    password: '',
    confirmPassword: '',
    btncolor: 'red',
  };

  listofusers = ['mani', 'siva', 'chayan', 'tanggal'];
  onSubmit(type: string): void {
    if (type == 'login') {
      // console.log(this.logininput, 'Submit');
      this.logininput.btncolor = 'green';
      this.isSubmited = true;
    } else {
      // console.log(this.signininput, 'Submit');
      this.signininput.btncolor = 'yellow';
    }
  }

  ngOnInit() {
    this.logininput.btncolor = 'blue'
  }
  ngAfterViewInit() {
    this.logininput.btncolor = 'green';
  }
  ngOnChanges(changes: SimpleChanges) {
    this.logininput.btncolor = 'violet'
  }
  ngOnDestroy() {
    this.logininput.btncolor ='red'
  }
}

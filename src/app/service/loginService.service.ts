import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})
export class LoginService {
    loginCounter: number = 0;
    // constructor(public username: string, password: string){

    // }

    onlogin(whichComponent) {
    //uername
    //paswword
    //validation
        this.loginCounter++
    alert('login Successfully, Congratss, alert from  ' + whichComponent);
  }
}
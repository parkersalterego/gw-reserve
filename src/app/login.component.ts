import { Component } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
    selector: 'gw-login',
    templateUrl: 'login.html',
    styleUrls: ['login.css']
})

export class LogInComponent {

constructor(private loginService: LoginService) { }

    public logIn() {
      this.loginService.logIn();
    }

    public logOut() {
      this.loginService.logOut();
    }

    get username() {
// push user name to array and bind
      return this.loginService.getLoggedInUser();
    }
}

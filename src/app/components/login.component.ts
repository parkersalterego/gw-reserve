import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
    selector: 'gw-login',
    templateUrl: '../html/login.html',
    styleUrls: ['../css/login.css']
})

export class LogInComponent {
  public loggedInUser;

constructor(private _loginService: LoginService, private _router: Router) {
  this._loginService.getLoggedInUser ()
    .map(user => {
      if(!user) return;

      return {
        displayName: user.displayName,
        pictureUrl: user.photoURL
      };
    })
    .subscribe(user => {
      this.loggedInUser = user;
    });
 }

    public logIn() {
      this._loginService.logIn();
    }

    public logOut() {
      this._loginService.logOut();
    }

    get username() {
// push user name to array and bind
      return this._loginService.getLoggedInUser();
    }
}

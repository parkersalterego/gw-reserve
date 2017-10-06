import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
  private _loggedInUser;

  constructor() {
    this._loggedInUser = null;
  }

  public logIn() {
    this._loggedInUser = {
      name: 'A. Weaver'
    };
  }

  public logOut() {
    this._loggedInUser = null;
  }

  public getLoggedInUser() {
    // give caller of method a copy of logged in user
    return this._loggedInUser ? Object.assign({ }, this._loggedInUser) : null;
  }
}

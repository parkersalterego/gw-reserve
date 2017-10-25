import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class LoginService {
  private _loggedInUser: Observable<firebase.User>;

  constructor(private _authService: AngularFireAuth) {
    this._loggedInUser = _authService.authState;
  }

  public getLoggedInUser(): Observable<firebase.User> {
    // give caller of method a copy of logged in user
    return this._loggedInUser;
  }

  public logIn(): Promise<any> {
    return this._authService.auth.signInWithPopup(new firebase.auth.GithubAuthProvider())
      .catch(error => alert(error.message));
  }

  public logOut(): Promise<any> {
    return this._authService.auth.signOut();
  }
}

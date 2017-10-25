import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterModule, ActivatedRoute } from '@angular/router';

import { LoginService } from './login.service';


@Injectable()

export class LoginGuardService implements CanActivate {

  constructor( private _loginService: LoginService, private _router: Router, private _route: ActivatedRoute) {

  }

   canActivate() {
     return this._loginService.getLoggedInUser().map(
       loggedInUser => {
         console.log('test');
         if (loggedInUser) return true;

         this._router.navigate(['home'], {fragment: 'warning'});

         return false;
       }
     );
    }
 }

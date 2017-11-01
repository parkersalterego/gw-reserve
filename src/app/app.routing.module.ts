import { Routes, RouterModule, CanActivate} from '@angular/router';
import { NgModule } from '@angular/core';

import { NavComponent} from './navigation.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';
import { RoomsComponent } from './rooms.component';

import { LoginGuardService} from './services/login.guard.service';
import { CanDeactivateService } from './services/can-deactivate.guard.service';

 const routes: Routes = [
   {
     path: 'rooms',
     component: RoomsComponent,
     canActivate: [ LoginGuardService ],
     canDeactivate: [ CanDeactivateService ]
   },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '**' ,
    component: HomeComponent
  }
];

export const routedComponents = [ HomeComponent, AboutComponent, RoomsComponent ];

@NgModule({
  imports: [
      RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    LoginGuardService,
    CanDeactivateService
  ]
})

export class AppRoutingModule {}




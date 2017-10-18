import { Routes, RouterModule, CanActivate} from '@angular/router';
import { NgModule } from '@angular/core';

import { NavComponent} from './components/navigation.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { AboutComponent } from './components/about.component';
import { RoomsComponent } from './components/rooms.component';
import { ReservationListComponent } from './components/reservation-list.component';

import { LoginGuardService} from './services/login.guard.service';
import { CanDeactivateService } from './services/can-deactivate.guard.service';

 const routes: Routes = [
   {
     path: 'rooms/:id',
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
    path: 'reservations',
    component: ReservationListComponent
  },
  {
    path: '**' ,
    component: HomeComponent
  }
];

export const routedComponents = [ HomeComponent, AboutComponent, RoomsComponent, ReservationListComponent ];

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




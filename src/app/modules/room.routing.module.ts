import { Routes, RouterModule, CanActivate} from '@angular/router';
import { NgModule } from '@angular/core';

import { CanDeactivateService } from '../services/can-deactivate.guard.service';
import { LoginGuardService } from '../services/login.guard.service';

import { RoomsComponent } from '../components/rooms.component';
import { RoomFormComponent } from '../components/room.form.component';
import { ReservationListComponent } from '../components/reservation-list.component';

const routes: Routes = [
  {
    path: 'rooms/:id',
    component: RoomsComponent,
    canActivate: [ LoginGuardService ],
    children: [
      {
        path: 'form',
        component: RoomFormComponent,
      },
      {
        path: 'list',
        component: ReservationListComponent,
      },
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule ({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    CanDeactivateService,
    LoginGuardService
  ]
})
export class RoomRoutingModule {}

export const routedComponents = [RoomsComponent, RoomFormComponent, ReservationListComponent];

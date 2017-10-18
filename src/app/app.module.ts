import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routedComponents } from './app.routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { RoomFormComponent } from './components/room.form.component';
import { NavComponent} from './components/navigation.component';
import { LogInComponent } from './components/login.component';
import { AppComponent } from './app.component';
import { RoomOneComponent } from './components/room-one.component';
import { RoomTwoComponent } from './components/room-two.component';
import { RoomThreeComponent } from './components/room-three.component';
import { ReservationListComponent } from './components/reservation-list.component';


import { LoginService } from './services/login.service';
import { LoginGuardService } from './services/login.guard.service';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        FormsModule
    ],
    declarations: [
        NavComponent,
        LogInComponent,
        AppComponent,
        routedComponents,
        RoomFormComponent,
        ReservationListComponent
      ],
    providers: [
        LoginGuardService,
        LoginService
      ],
      bootstrap: [
          AppComponent
      ]
})
export class AppModule {}

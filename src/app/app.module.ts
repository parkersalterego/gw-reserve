import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routedComponents } from './app.routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoomModule } from './modules/room.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from './../environments/environment';

import { NavComponent} from './components/navigation.component';
import { LogInComponent } from './components/login.component';
import { AppComponent } from './app.component';
import { RoomOneComponent } from './components/room-one.component';
import { RoomTwoComponent } from './components/room-two.component';
import { RoomThreeComponent } from './components/room-three.component';

import { LoginService } from './services/login.service';
import { LoginGuardService } from './services/login.guard.service';
import { FormListService } from './services/form.list.service';
import { RoomService } from './services/room.service';
@NgModule({
    imports: [
        BrowserModule,
        AngularFireModule.initializeApp(environment.firebaseConfiguration),
        AngularFireAuthModule,
        AngularFireDatabaseModule,
        BrowserAnimationsModule,
        RoomModule,
        AppRoutingModule,
    ],
    declarations: [
        NavComponent,
        LogInComponent,
        AppComponent,
        routedComponents
      ],
    providers: [
        LoginGuardService,
        LoginService,
        FormListService,
        RoomService
      ],
      bootstrap: [
          AppComponent
      ]
})
export class AppModule {}

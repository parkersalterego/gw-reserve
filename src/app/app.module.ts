import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routedComponents } from './app.routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RoomFormComponent } from './components/room.form.component';
import { NavComponent} from './components/navigation.component';
import { LogInComponent } from './components/login.component';
import { AppComponent } from './app.component';

import { LoginService } from './services/login.service';
import { LoginGuardService } from './services/login.guard.service';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule
    ],
    declarations: [
        NavComponent,
        LogInComponent,
        AppComponent,
        routedComponents
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

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routedComponents } from './app.routing.module';

import { NavComponent} from './navigation.component';
import { LogInComponent } from './login.component';
import { AppComponent } from './app.component';

import { LoginService } from './services/login.service';
import { ActivationService} from './services/activation.service';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    declarations: [
        NavComponent,
        LogInComponent,
        AppComponent,
        routedComponents
      ],
    providers: [
        ActivationService,
        LoginService
      ],
      bootstrap: [
          AppComponent
      ]
})
export class AppModule {}

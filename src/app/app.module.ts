import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routedComponents } from './app.routing.module';

import { NavComponent} from './navigation.component';
import { AppComponent } from './app.component';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    declarations: [
        NavComponent,
        AppComponent,
        routedComponents
      ],
      bootstrap: [
          AppComponent
      ]
})
export class AppModule {}

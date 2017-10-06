import { Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';

import { NavComponent} from './navigation.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';
import { RoomsComponent } from './rooms.component';

 const routes: Routes = [
   {
     path: 'rooms',
     component: RoomsComponent
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
  ]
})

export class AppRoutingModule {}




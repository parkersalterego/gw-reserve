import { Routes, RouterModule, CanActivate} from '@angular/router';
import { NgModule } from '@angular/core';

import { NavComponent} from './components/navigation.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';

 const basicRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '**' ,
    redirectTo: 'home',
    pathMatch: 'full',
  }
];

export const routedComponents = [ HomeComponent ];

@NgModule({
  imports: [
      RouterModule.forRoot(basicRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
  ]
})

export class AppRoutingModule {}

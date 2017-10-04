import { Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';

import { NavComponent} from './navigation.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';

 const routes: Routes = [
   {
     path: 'home/:id',
     component: HomeComponent
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

export const routedComponents = [ HomeComponent, AboutComponent ];

@NgModule({
  imports: [
      RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}




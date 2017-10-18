import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

interface NavigationItems {
  name: string;
  url: string;
}

@Component({
  selector: 'gw-nav',
  templateUrl: '../html/navigation.html',
  styleUrls: ['../css/navigation.css'],
  // animations: [
  //   trigger('myTrigger', [
  //     state('inactive', style({
  //       backgroundColor: 'rgba(0,0,0,.5)'
  //     })),
  //     state('active', style({
  //       backgroundColor: 'rgba(255,255,255,.5)'
  //     })),
  //     transition('inactive => active', animate('100ms ease-in')),
  //     transition('active => inactive', animate('100ms ease-out'))
  //   ])
  // ]

})
export class NavComponent {

  public items: NavigationItems[];

  constructor() {
    this.items = [
      {
        name: 'Home',
        url: '/home'
      },
      {
        name: 'Rooms',
        url: '/rooms/1'
      },
      {
        name: 'About',
        url: '/about'

      },
      {
        name: 'Contact',
        url: '/contact'

      },
      {
        name: 'Reservations',
        url: '/reservations'
      }
    ];
  }
}






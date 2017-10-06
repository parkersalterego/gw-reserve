import { Component } from '@angular/core';



interface NavigationItems {
  name: string;
  url: string;
}

@Component({
  selector: 'gw-nav',
  templateUrl: 'navigation.html',
  styleUrls: ['navigation.css']

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
        url: '/rooms'
      },
      {
        name: 'About',
        url: '/about'

      },
      {
        name: 'Contact',
        url: '/contact'

      }
    ];
  }
}






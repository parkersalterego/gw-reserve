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
        name: 'just do it',
        url: 'home/9001'
      },
      {
        name: 'Home',
        url: 'home'
      },
      {
        name: 'About',
        url: 'about'

      },
      {
        name: 'Contact',
        url: 'contact'

      }
    ];
  }
}






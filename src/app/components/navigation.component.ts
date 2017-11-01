import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { INavigationItem } from '../interfaces/INavigationItem';

import { RoomService } from '../services/room.service';

import 'rxjs/add/operator/do';

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
export class NavComponent implements OnInit {

  public navigationItems: INavigationItem [];

  constructor(private _roomService: RoomService) {}

  ngOnInit() {

    this._roomService.roomsObservable
      .do(rooms => {
        this.navigationItems = [];

        this.navigationItems.push({
          color: 'blue',
          title: 'Home',
          url: 'home'
        });

        return rooms;
      })
      .map(rooms => {
        return rooms.map(room => {
          const navigationItem: INavigationItem = {
            color: 'green',
            title: room.name,
            url: 'rooms/' + room.id
          };

          return navigationItem;
        });
      })
      .subscribe(rooms => {

        this.navigationItems = this.navigationItems.concat(rooms);

        console.log(rooms);
      });
    }
}


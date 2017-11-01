import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ICanDeactivate } from '../services/can-deactivate.guard.service';
import { RoomService } from '../services/room.service';

@Component({
    selector: 'gw-rooms',
    templateUrl: '../html/rooms.html',
    styleUrls: ['../css/rooms.css']
})

export class RoomsComponent implements OnInit {

  public room;

  constructor(private _activatedRoute: ActivatedRoute, private _roomService: RoomService) {
    console.log('loaded');
  }
  public ngOnInit() {
    this._activatedRoute.paramMap.subscribe(route => this._switchRoom(route.get('id')));
  }

  private _switchRoom(id: string) {
    this._roomService.getRoomById(id).subscribe(room => { this.room = room; });
  }
}


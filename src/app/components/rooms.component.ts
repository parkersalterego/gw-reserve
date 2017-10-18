import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ICanDeactivate } from '../services/can-deactivate.guard.service';

@Component({
    selector: 'gw-rooms',
    templateUrl: '../html/rooms.html',
    styleUrls: ['../css/rooms.css']
})

export class RoomsComponent implements OnInit {
  public canThisDeactivate: boolean;

  public roomId;

  constructor(private _activatedRoute: ActivatedRoute) {
  }
  public ngOnInit() {
    this._activatedRoute.paramMap.subscribe(route => {
      this.roomId = route.get('id');
    });
  }
}


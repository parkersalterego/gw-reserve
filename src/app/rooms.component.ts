import { Component } from '@angular/core';

import { ICanDeactivate } from './services/can-deactivate.guard.service';

@Component({
    selector: 'gw-rooms',
    templateUrl: 'rooms.html',
    styleUrls: ['rooms.css']
})

export class RoomsComponent implements ICanDeactivate {
  public canThisDeactivate: boolean;

  constructor() {
    this.canThisDeactivate = true;

  }

  toggleCanDeactivate() {
    this.canThisDeactivate = !this.canThisDeactivate;

  }

  canDeactivate() {
    return this.canThisDeactivate;

  }
}

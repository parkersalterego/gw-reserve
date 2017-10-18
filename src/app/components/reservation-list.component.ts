import { Component, OnInit } from '@angular/core';
import { RoomFormComponent } from './room.form.component';

import { FormListService } from '../services/form.list.service';

@Component({
    selector: 'gw-reservation-list',
    templateUrl: '../html/reservation-list.html',
    styleUrls: ['../css/reservation-list.css']
})


export class ReservationListComponent implements OnInit {
  public roomOneList = [];
  public roomTwoList = [];
  public roomThreeList = [];

  roomData: any;

  constructor(private formService: FormListService) { }

  ngOnInit() {
    this.roomData = this.formService.roomsReserved;
    console.log(this.roomData);
  }
}

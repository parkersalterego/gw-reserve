import { Component } from '@angular/core';

@Component({
    selector: 'gw-reservation-list',
    templateUrl: '../html/reservation-list.html',
    styleUrls: ['../css/reservation-list.css']
})
export class ReservationListComponent {
  public roomOneList = [];
  public roomTwoList = [];
  public roomThreeList = [];

}

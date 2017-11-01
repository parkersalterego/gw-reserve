import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';

import { IRoom } from '../interfaces/IRoom';

@Injectable()

export class RoomService {

  public roomsObservable: Observable<IRoom[]>;

  constructor(private _database: AngularFireDatabase) {
    this.roomsObservable = this._database.list('rooms').valueChanges();
  }

  getRoomById(id): Observable<IRoom> {
    return this.roomsObservable
    .map((rooms: IRoom[]) => rooms.find(room => room.id === id))
    .map((room: IRoom) => {
      const reservations = [];
      for (let reservationKey in room.reservations) {
        const reservation = room.reservations[reservationKey];
        reservation.id = reservationKey;
        reservations.push(reservation);
      }

      return room;
    });
  }

  writeRoomReservation(roomId, reservation) {
    return this._database.list('rooms/' + roomId + '/reservations').push(reservation);
  }
  deleteRoomReservation(roomId, reservationId) {
    return this._database.list('rooms/' + roomId + '/reservations').remove(reservationId);
  }
}

import { Component, ViewChild, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component ({
  selector: 'gw-room-form',
  templateUrl: '../html/room.form.html',
  styleUrls: ['../css/room.form.css'],
})

export class RoomFormComponent {
  @ViewChild('roomForm')
  private roomForm: NgForm;

  @Input()
  public roomId: string;

  public reasons = ['Business Meeting', 'Cleint Meeting'];

  onSubmit() {
    console.log(this.roomForm.value);
  }
}

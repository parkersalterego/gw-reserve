import { Component, ViewChild, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

import { FormListService } from '../services/form.list.service';
@Component ({
  selector: 'gw-room-form',
  templateUrl: '../html/room.form.html',
  styleUrls: ['../css/room.form.css'],
})

export class RoomFormComponent {
  constructor(private formService: FormListService) {}
  @ViewChild('roomForm')
  private roomForm: NgForm;

  @Input()
  public roomId: string;

  public reasons = ['Business Meeting', 'Cleint Meeting'];

  onSubmit() {
    this.formService.roomsReserved.push(this.roomForm.value);
    this.formService.formData = this.roomForm.value;
  }
}



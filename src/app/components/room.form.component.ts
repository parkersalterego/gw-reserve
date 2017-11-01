import { Component, ViewChild, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { RoomService } from '../services/room.service';
import { FormListService } from '../services/form.list.service';
@Component ({
  selector: 'gw-room-form',
  templateUrl: '../html/room.form.html',
  styleUrls: ['../css/room.form.css'],
})

export class RoomFormComponent {
  constructor(private formService: FormListService, private roomService: RoomService) {}
  @ViewChild('roomForm')
  private roomForm: NgForm;

  @Input()
  public roomId: string;



  public reasons = ['Business Meeting', 'Cleint Meeting'];
}



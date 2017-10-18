import { Injectable, OnInit } from '@angular/core';

@Injectable()
export class FormListService implements OnInit {
  formData: any;
  roomsReserved: any[] = [];

  constructor() {
    console.log('Service loaded!');
  }
  ngOnInit() {
    console.log('Service loaded!');
  }
}

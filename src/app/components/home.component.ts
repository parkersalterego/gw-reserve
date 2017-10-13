import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector: 'gw-home',
    templateUrl: '../html/home.html',
    styleUrls: ['../css/home.css']
})
export class HomeComponent implements OnInit {

  public homeMap;

  constructor(
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this._activatedRoute.fragment.subscribe({
      next: data => {
        console.log(data);
      },
      error: error => {
        console.log(error);
      },
      complete: () => {
        console.log('Im done');
      }
    });
  }
}

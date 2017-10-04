import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector: 'gw-home',
    templateUrl: 'home.html',
    styleUrls: ['home.css']
})
export class HomeComponent implements OnInit {

  public homeMap;

  constructor(
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe((parameters: ParamMap) => {
      console.log(parameters.get('id'));
      this.homeMap = parameters.get('id');
    });
  }
}

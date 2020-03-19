import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
@Component({
  selector: 'ngx-steps-detail',
  templateUrl: './steps-detail.component.html',
  styleUrls: ['./steps-detail.component.scss']
})
export class StepsDetailComponent implements OnInit {

  constructor(private _location: Location, private router: Router) { }
  back() {
    this._location.back();
  }
  next(){
    this.router.navigateByUrl('/pages/projects/steps-detail');
  }
  ngOnInit() {
  }

}

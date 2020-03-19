import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PagesRouteService {

  constructor(private _location: Location, private router: Router) { }
  back() {
    this._location.back();
  }
}

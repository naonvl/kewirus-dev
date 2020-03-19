import { PagesRouteService } from './../pages-route.service';
import { Component, OnInit } from '@angular/core';
import { LIST_MATERI } from './courses-list';
@Component({
  selector: 'ngx-courses',
  template: `
  <nb-layout>
    <nb-layout-header>
      <ngx-mat-header></ngx-mat-header>
    </nb-layout-header>
    <nb-layout-column class='layoutColumn'>
     <router-outlet></router-outlet>
    </nb-layout-column>
  </nb-layout>
`,
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  list = LIST_MATERI;
  constructor(public route: PagesRouteService) { }

  ngOnInit() {
  }

}

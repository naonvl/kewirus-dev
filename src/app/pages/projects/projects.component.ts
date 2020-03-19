import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-projects',
  template: `
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

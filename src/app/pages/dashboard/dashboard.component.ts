import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NbMenuService, NbSidebarService } from '@nebular/theme';
@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  user: any;
  loggedIn: boolean;
  constructor(private router: Router, private sidebarService: NbSidebarService, private menuSevice: NbMenuService) { }
  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    return false;
  }
  ngOnInit(){
    this.sidebarService.toggle();
  }
}

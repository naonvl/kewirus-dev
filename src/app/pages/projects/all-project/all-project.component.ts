import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'ngx-all-project',
  templateUrl: './all-project.component.html',
  styleUrls: ['./all-project.component.scss']
})
export class AllProjectComponent implements OnInit {
  projects: string;
  user:any;
  constructor(private router: Router, public auth: AuthService) { }

  ngOnInit() {
    this.projects = JSON.parse(localStorage.getItem('projects'));
    console.log(this.projects);
  }
  deleteData(){
    this.user = this.auth.user$;
    if(this.projects){
      localStorage.clear();
    } else {
      console.log('create project');
    }
  }
}

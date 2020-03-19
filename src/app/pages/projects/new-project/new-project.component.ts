import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';
import { EmbedVideoService } from 'ngx-embed-video';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'ngx-new-project',
  styleUrls: ['./new-project.component.scss'],
  templateUrl: './new-project.component.html',
})
export class NewProjectComponent implements OnInit {
  // vimeoUrl = 'https://vimeo.com/197933516';
  // youtubeUrl = 'https://www.youtube.com/watch?v=iHhcHTlGtRs';
  // dailymotionUrl = 'https://www.dailymotion.com/video/x20qnej_red-bull-presents-wild-ride-bmx-mtb-dirt_sport';
  projectName: any;
  selectedCategory: any;
  projectDesc: any;
  newProjectForm: FormGroup;
  newProject: any;
  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    return false;
  }

  constructor(private sidebarService: NbSidebarService, private embedService: EmbedVideoService, private router : Router) {
    // console.log(this.embedService.embed(this.vimeoUrl));
    // console.log(this.embedService.embed(this.youtubeUrl));
    // console.log(this.embedService.embed(this.dailymotionUrl));
    this.newProjectForm = new FormGroup({
      projectName: new FormControl(),
      selectedCategory: new FormControl(),
      projectDesc: new FormControl()
    });
  }
  saveProject() {
    this.newProject = this.newProjectForm.value;
    localStorage.setItem('projects', JSON.stringify(this.newProject));
    console.log(this.newProject);
    this.router.navigateByUrl('/pages/projects/all-project');
  }
  ngOnInit() {

    this.toggleSidebar();
  }

}


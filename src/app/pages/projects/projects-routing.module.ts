import { StepsDetailComponent } from './steps-detail/steps-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewProjectComponent } from './new-project/new-project.component';
import { ProjectsComponent } from './projects.component';
import { AllProjectComponent } from './all-project/all-project.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';

const routes: Routes = [{
    path: '',
    component: ProjectsComponent,
    children: [
      {
        path: 'new-project',
        component: NewProjectComponent,
      },
      {
        path: 'all-project',
        component: AllProjectComponent,
      },
      {
        path: 'project-detail',
        component: ProjectDetailComponent,
      },
      {
        path: 'steps-detail',
        component: StepsDetailComponent,
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class ProjectsRoutingModule {
}


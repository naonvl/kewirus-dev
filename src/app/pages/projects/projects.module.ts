import { ProjectsComponent } from './projects.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { NgModule } from '@angular/core';
import { ProjectsRoutingModule } from './projects-routing.module';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbRadioModule,
  NbInputModule,
  NbIconModule,
  NbCheckboxModule,
  NbTooltipModule
} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { HttpClientModule } from '@angular/common/http';
import { AllProjectComponent } from './all-project/all-project.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { EmbedVideo } from 'ngx-embed-video';
import { StepsDetailComponent } from './steps-detail/steps-detail.component';
@NgModule({
  imports: [
    ThemeModule,
    ProjectsRoutingModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbRadioModule,
    NbInputModule,
    NbIconModule,
    HttpClientModule,
    ReactiveFormsModule,
    NbTooltipModule,
    NbCheckboxModule,
    EmbedVideo.forRoot()
  ],
  declarations: [
    NewProjectComponent,
    ProjectsComponent,
    AllProjectComponent,
    ProjectDetailComponent,
    StepsDetailComponent
  ],
})
export class ProjectsModule { }

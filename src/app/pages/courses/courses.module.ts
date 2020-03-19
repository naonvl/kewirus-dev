import { CoursesComponent } from './courses.component';
import { MateriComponent } from './materi/materi.component';
import { NgModule } from '@angular/core';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbRadioModule,
  NbInputModule,
  NbIconModule,
  NbCheckboxModule,
  NbTooltipModule,
  NbLayoutModule,
  NbSidebarModule,
  NbMenuModule,
  NbUserModule, 
  NbListModule
} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { EmbedVideo } from 'ngx-embed-video';
import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesListComponent } from './courses-list/courses-list.component';
@NgModule({
  imports: [
    ThemeModule,
    NbUserModule,
    NbListModule,
    CoursesRoutingModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbRadioModule,
    NbInputModule,
    NbIconModule,
    HttpClientModule,
    ReactiveFormsModule,
    NbTooltipModule,
    NbLayoutModule,
    NbCheckboxModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    EmbedVideo.forRoot()
  ],
  declarations: [
    CoursesComponent,
    MateriComponent,
    CoursesListComponent
  ],
})
export class CoursesModule { }

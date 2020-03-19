import { NgModule, OnInit } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { NbCardModule, NbUserModule} from '@nebular/theme';
@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    NbUserModule
  ],
  declarations: [
    DashboardComponent,
  ],
})
export class DashboardModule {}
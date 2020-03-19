import { CoursesComponent } from './courses.component';
import { MateriComponent } from './materi/materi.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesListComponent } from './courses-list/courses-list.component';
const routes: Routes = [{
    path: '',
    component: CoursesComponent,
    children: [
        {
            path: 'materi',
            component: MateriComponent,
        },
        {
            path: 'courses-list',
            component: CoursesListComponent,
        },
    ],
},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CoursesRoutingModule {
}


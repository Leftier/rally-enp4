import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './component/login/index';
import { InicioComponent } from './component/inicio/index';
import { AddTasksComponent } from './component/add-tasks/add-tasks.component';
import { TasksComponent } from './component/tasks/tasks.component';

import { AuthGuard } from './guards/auth.guard';

const appRoutes: Routes = [
    { path: 'admin', component: TasksComponent, canActivate: [AuthGuard]},
    { path: 'login', component: LoginComponent },
    { path: 'registro', component: AddTasksComponent },
    { path: '', component: InicioComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
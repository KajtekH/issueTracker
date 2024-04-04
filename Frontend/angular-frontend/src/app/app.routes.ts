import { Routes, RouterModule} from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { UpdateProjectComponent } from './update-project/update-project.component';
import { CreateProjectComponent } from './create-project/create-project.component';

export const routes: Routes = [
    {path: 'users', component: UserListComponent},
    {path: 'create-users', component: CreateUserComponent},
    {path: 'create-project', component: CreateProjectComponent},
    {path: 'update-user/:id', component: UpdateUserComponent},
    {path: 'update-project/:id', component: UpdateProjectComponent},
    {path: 'projects', component: ProjectListComponent},
    {path: '', redirectTo: 'projects', pathMatch: 'full'}
];

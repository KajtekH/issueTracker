import { Routes, RouterModule} from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { ProjectListComponent } from './project-list/project-list.component';

export const routes: Routes = [
    {path: 'users', component: UserListComponent},
    {path: 'create-users', component: CreateUserComponent},
    {path: 'update-user/:id', component: UpdateUserComponent},
    {path: 'projects', component: ProjectListComponent},
    {path: '', redirectTo: 'projects', pathMatch: 'full'}
];

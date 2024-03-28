import { Routes, RouterModule} from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';

export const routes: Routes = [
    {path: 'users', component: UserListComponent},
    {path: 'create-users', component: CreateUserComponent},
    {path: 'update-user/:id', component: UpdateUserComponent},
    {path: '', redirectTo: 'users', pathMatch: 'full'}
];

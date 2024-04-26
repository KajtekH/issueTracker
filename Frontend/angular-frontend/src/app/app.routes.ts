import { Routes, RouterModule} from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { UpdateProjectComponent } from './update-project/update-project.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { IssueListComponent } from './issue-list/issue-list.component';
import { UpdateIssueComponent } from './update-issue/update-issue.component';
import { CreateIssueComponent } from './create-issue/create-issue.component';

export const routes: Routes = [
    {path: 'users', component: UserListComponent},
    {path: 'create-users', component: CreateUserComponent},
    {path: 'create-project', component: CreateProjectComponent},
    {path: 'update-user/:id', component: UpdateUserComponent},
    {path: 'update-project/:id', component: UpdateProjectComponent},
    {path: 'projects', component: ProjectListComponent},
    {path: 'issues', component: IssueListComponent},
    {path: 'projects/:projectId/issues', component: IssueListComponent},
    {path: ':projectId/update-issue/:id', component: UpdateIssueComponent},
    {path: ':projectId/create-issue', component: CreateIssueComponent},
    {path: '', redirectTo: 'projects', pathMatch: 'full'}
];

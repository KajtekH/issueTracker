import { Component, OnInit } from '@angular/core';
import { Issue } from '../issue';
import { UserService } from '../user.service';
import { User } from '../user';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProjectService } from '../project.service';
import { IssueService } from '../issue.service';

@Component({
  selector: 'app-create-issue',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './create-issue.component.html',
  styleUrl: './create-issue.component.css'
})
export class CreateIssueComponent implements OnInit {

  issue: Issue = new Issue();
  projectId: Number;
  errorMessage: String;

  constructor(private issueService: IssueService,
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private router: Router){}

    ngOnInit(): void {
      this.route.params.subscribe(params => {
        this.projectId = +params['projectId']});
    }
  
    onSubmit() {
      this.projectService.getProjectById(this.projectId).subscribe({
         next: (project) => {
           this.issue.project = project;
           console.log(this.issue);
           this.saveIssue();
         },
         error: (error) => {
           console.error('Error fetching user', error);
           this.errorMessage = 'User not found. Please enter a valid user ID.';
         }
      });
     }

     saveIssue(){
      this.issueService.createIssue(this.issue).subscribe(data=>{
        console.log(data);
        this.errorMessage = '';
        this.router.navigate(['projects',this.projectId,'issues'])
      })
    }
}

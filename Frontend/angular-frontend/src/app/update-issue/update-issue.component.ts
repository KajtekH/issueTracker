import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Project } from '../project';
import { ProjectService } from '../project.service';
import { OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Issue } from '../issue';
import { IssueService } from '../issue.service';

@Component({
  selector: 'app-update-issue',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './update-issue.component.html',
  styleUrl: './update-issue.component.css'
})
export class UpdateIssueComponent implements OnInit {

  id:Number;
  issue: Issue = new Issue();
  errorMessage: String;
  projectId: Number;

  constructor(private issueService: IssueService,
    private route: ActivatedRoute,
    private router: Router){}

    ngOnInit(): void {
      this.projectId = Number(this.route.snapshot.paramMap.get('projectId'));
      this.id = Number(this.route.snapshot.paramMap.get('id'));
      console.log('Project ID:', this.projectId); // Should log the correct project ID
      console.log('Issue ID:', this.id); // Should log the correct issue ID
    
      this.issueService.getIssueById(this.id).subscribe(data => {
        this.issue = data;
      });
    }
      
    updateIssue(){
        this.issueService.updateIssue(this.id, this.issue).subscribe({
          next: (data) =>{
          console.log(data);
          this.issue = new Issue();
          this.issue.project = new Project()
          this.issue.project.id = this.projectId;
          this.router.navigate(['/issues'])
          }
        })
    }

    onSubmit(){
      this.updateIssue();
    }

}

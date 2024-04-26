import { Component } from '@angular/core';
import { Issue } from '../issue';
import { NgForOf } from '@angular/common';
import { OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { IssueService } from '../issue.service';
import { CommonModule } from '@angular/common';
import { Router,RouterModule, NavigationEnd, ActivatedRoute, RouterLinkActive, RouterOutlet, RouteConfigLoadEnd, ROUTES} from '@angular/router';
@Component({
  selector: 'app-issue-list',
  standalone: true,
  imports: [NgForOf, RouterModule, RouterLinkActive, RouterOutlet, CommonModule],
  templateUrl: './issue-list.component.html',
  styleUrl: './issue-list.component.css'
})
export class IssueListComponent implements OnInit{

  issues: Issue[];
  private routeSubsciption: Subscription;
  projectId: number;

  constructor(private issueService: IssueService,
     private router: Router,
     private route: ActivatedRoute){}

     ngOnInit(): void {
      this.route.params.subscribe(params => {
        this.projectId = +params['projectId']; // Convert to number
        console.log('Project ID:', this.projectId);
  
        if (this.projectId) {
          this.fetchIssuesByProject(this.projectId);
        } else {
          console.error('Project ID is undefined.');
        }
      });
    }
  
    fetchIssuesByProject(projectId: number): void {
      this.issueService.getIssueListByProject(projectId).subscribe( data =>{
        this.issues = data;
      },
        error => {
          console.error('Error fetching issues:', error);
        }
      );
    }
   
    deleteIssue(id: Number){
      this.issueService.deleteIssue(id).subscribe(data=>{
        this.fetchIssuesByProject(this.projectId);
      })
    }

    updateIssue(id:Number){
      this.router.navigate([this.projectId,'update-issue', id]);
    }

    createIssue(){
      this.router.navigate([this.projectId,'create-issue']);
    }
}

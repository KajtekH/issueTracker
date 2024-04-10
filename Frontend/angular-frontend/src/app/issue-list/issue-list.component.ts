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

  issues: Observable<Issue[]>;
  private routeSubsciption: Subscription;

  constructor(private issueServise: IssueService, private router: Router){}

  ngOnInit(): void {
    this.getIssues();
  }

  private getIssues(){
    this.issues = this.issueServise.getIssueList()
  }

}

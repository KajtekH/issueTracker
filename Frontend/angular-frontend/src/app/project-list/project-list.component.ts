import { Component } from '@angular/core';
import { Project } from '../project';
import { NgForOf } from '@angular/common';
import { OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProjectService } from '../project.service';
import { Router,RouterModule, NavigationEnd, ActivatedRoute, RouterLinkActive, RouterOutlet, RouteConfigLoadEnd, ROUTES} from '@angular/router';
@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [NgForOf, RouterModule,RouterLinkActive, RouterOutlet],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css'
})
export class ProjectListComponent implements OnInit {
  projects: Project[];
  private routeSubscription: Subscription;

  constructor(private projectService: ProjectService, private router:Router){}

  ngOnInit(): void {
    this.getProjects();
  }

  private getProjects(){
    this.projectService.getProjectList().subscribe(data=>{
      this.projects = data;
    })
  }

  updateProject(id: Number){
    this.router.navigate(['update-project',id]);
  }
}

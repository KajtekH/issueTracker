import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Project } from '../project';
import { ProjectService } from '../project.service';
import { OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-update-project',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './update-project.component.html',
  styleUrl: './update-project.component.css'
})
export class UpdateProjectComponent implements OnInit {
    id: Number;
    project: Project = new Project()
    errorMessage: String;
    constructor(private projectService:ProjectService,
      private route: ActivatedRoute,
      private router: Router){}

    ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];

      this.projectService.getProjectById(this.id).subscribe(
          (data)=>{
          this.project = data;
       }, error =>{
          console.error('Error fetching user',error);
          this.errorMessage = 'User not found. Please enter a valid user ID.';
        })
    }
    
    updateProject(){
      this.projectService.updateProject(this.id, this.project).subscribe({
        next: (data) =>{
        console.log(data);
        this.project = new Project();
        this.gotoProjectList();
        },
        error: (error) => {
          console.error('Error fetching user', error);
          this.errorMessage = 'User not found. Please enter a valid user ID.';
        }
      })
    }
    
    onSubmit(){
      this.updateProject();
    }

    gotoProjectList(){
      this.router.navigate(['/projects']);
    }
}

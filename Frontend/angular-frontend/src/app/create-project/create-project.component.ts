import { Component, OnInit } from '@angular/core';
import { Project } from '../project';
import { UserService } from '../user.service';
import { User } from '../user';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProjectService } from '../project.service';
@Component({
  selector: 'app-create-project',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './create-project.component.html',
  styleUrl: './create-project.component.css'
})
export class CreateProjectComponent implements OnInit {

  project: Project = new Project();
  managerId: number;
  errorMessage: String;
  constructor(private projectService: ProjectService, private userService: UserService,
    private router: Router){
      this.project.manager = {id: null, email: null, username:null};
    };

  ngOnInit(): void {
   
  }

  onSubmit() {
    this.userService.getUserById(this.managerId).subscribe({
       next: (user) => {
         this.project.manager = user;
         console.log(this.project);
         this.saveProject();
         this.goToProjectList();
       },
       error: (error) => {
         console.error('Error fetching user', error);
         this.errorMessage = 'User not found. Please enter a valid user ID.';
       }
    });
   }
  
  goToProjectList(){
    this.router.navigate(['/projects']);
  }

  saveProject(){
    this.projectService.createProject(this.project).subscribe(data=>{
      console.log(data);
      this.errorMessage = '';
      this.goToProjectList();
    })
  }
  
}

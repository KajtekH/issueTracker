import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../user.service';
import { User } from '../user';
import { OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-update-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.css'
})
export class UpdateUserComponent implements OnInit {
    id: number;
    user: User = new User();

    constructor(private userService: UserService,
      private route: ActivatedRoute,
      private router: Router){}

      ngOnInit(): void {
        this.id = this.route.snapshot.params['id'];
        
        this.userService.getUserById(this.id).subscribe(data=>{
          this.user = data;
        }, 
        error => console.log(error));
      }

      updateUser(){
        this.userService.updateUser(this.id, this.user).subscribe(data=>{
          console.log(data);
          this.user = new User();
          this.gotoUserList();
        })
      }
      
      onSubmit(){
        this.updateUser();
      }

      gotoUserList(){
        this.router.navigate(['/users']);
      }
}

import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserService } from '../user.service';
import { error } from 'console';
@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent implements OnInit {

  user: User = new User();

  constructor(private userService: UserService,
    private router: Router){};

  ngOnInit(): void {
    
  }

  onSubmit(){
    console.log(this.user);
    this.saveUser();
  }

  goToUserList(){
    this.router.navigate(['/users']);
  }

  saveUser(){
    this.userService.createUser(this.user).subscribe(data=>{
      console.log(data);
      this.goToUserList();
    },
    error => console.log(error));
  }
}

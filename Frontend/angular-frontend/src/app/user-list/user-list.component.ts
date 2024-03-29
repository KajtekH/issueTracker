import { Component, OnInit} from '@angular/core';
import { User } from '../user';
import { NgForOf } from '@angular/common';
import { UserService } from '../user.service';
import { UpdateUserComponent } from '../update-user/update-user.component';
import { Router,RouterModule, NavigationEnd, ActivatedRoute, RouterLinkActive, RouterOutlet, RouteConfigLoadEnd, ROUTES} from '@angular/router';
import { filter, startWith } from 'rxjs';
import { Subscription } from 'rxjs';
import { Route } from '@angular/router';
@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [NgForOf,UpdateUserComponent, RouterModule,RouterLinkActive, RouterOutlet],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit{
  
  users: User[];
  private routeSubscription: Subscription;

  constructor(private userService: UserService, private router: Router) {}

 ngOnInit(): void {
      this.getUsers();
 }
 

  private getUsers(){
    this.userService.getUserList().subscribe(data=>{
      this.users = data;
    });
  }

updateUser(id: number){
  this.router.navigate(['update-user',id]);
}

deleteUser(id:number){
  this.userService.deleteUser(id).subscribe(data=>{
    this.getUsers();
  })
}
}

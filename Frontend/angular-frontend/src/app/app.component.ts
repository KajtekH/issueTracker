import { Component} from '@angular/core';
import { RouterOutlet, provideRouter, RouterModule, RouterLink, RouterLinkActive } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, RouterOutlet, UserListComponent, RouterModule, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Issue Tracker';
}

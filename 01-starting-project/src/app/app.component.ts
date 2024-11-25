import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS, User } from './user.data';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUser!: string;

  onUserSelect(id: string) {
    this.selectedUser = id;
  }

  get userDetails(): User {
    return this.users.find((user: User) => user.id === this.selectedUser)!;
  }
}

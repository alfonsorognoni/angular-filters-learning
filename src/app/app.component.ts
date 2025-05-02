import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MiComponenteComponent } from './mi-componente/mi-componente.component';
import { User, UserCardComponent } from './user-card/user-card.component';
import { CommonModule } from '@angular/common';
import { TaskManagementService } from './services/task-management.service';
import { FormsModule } from '@angular/forms';
import { UserInformationService } from './services/user-information/user-information.service';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CommonModule,
    MiComponenteComponent,
    UserCardComponent,
    FormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'filters';
  messageFromChild: string = '';
  showTasks: boolean = true;
  taskDescription: string = '';

  daysOfTheWeek: string[] = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  tasks: { id: number; description: string; done: boolean }[] = [];

  users: User[] = [];

  constructor(
    private tasksService: TaskManagementService,
    private userInformationService: UserInformationService
  ) {}

  ngOnInit(): void {
    this.tasks = this.tasksService.getTasks();
    this.users = this.userInformationService.getUsers();
  }

  childEventHandler(messageFromChild: string) {
    console.log(`Message from child: ${messageFromChild}`);
    this.messageFromChild = messageFromChild;
  }

  userSelectedHandler(user: User) {
    console.log(`User selected email: ${user.email}`);
  }

  toggleShowTasks() {
    this.showTasks = !this.showTasks;
  }

  createNewTask(description: string) {
    if (description) {
      this.tasksService.addTask(description);
    }
  }
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MiComponenteComponent } from './mi-componente/mi-componente.component';
import { User, UserCardComponent } from './user-card/user-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CommonModule,
    MiComponenteComponent,
    UserCardComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'filters';
  messageFromChild: string = '';
  showTasks: boolean = false;

  users: User[] = [
    { name: 'John', email: 'john@example.com' },
    { name: 'Jane', email: 'jane@example.com' },
    { name: 'Bob', email: 'bob@example.com' },
  ];

  daysOfTheWeek: string[] = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  tasks: { id: number; description: string; done: boolean }[] = [
    { id: 1, description: 'Aprender Componentes', done: true },
    { id: 2, description: 'Aprender Directivas', done: false },
    { id: 3, description: 'Practicar Data Binding', done: false },
  ];

  childEventHandler(messageFromChild: string) {
    console.log(`Message from child: ${messageFromChild}`);
    this.messageFromChild = messageFromChild;
  }

  userSelectedHandler(userEmail: User['email']) {
    console.log(`User selected email: ${userEmail}`);
  }

  toggleShowTasks() {
    this.showTasks = !this.showTasks;
  }
}

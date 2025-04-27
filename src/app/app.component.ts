import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MiComponenteComponent } from './mi-componente/mi-componente.component';
import { User, UserCardComponent } from './user-card/user-card.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MiComponenteComponent, UserCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'filters';
  messageFromChild: string = '';

  users: User[] = [
    { name: 'John', email: 'john@example.com' },
    { name: 'Jane', email: 'jane@example.com' },
    { name: 'Bob', email: 'bob@example.com' },
  ];

  childEventHandler(messageFromChild: string) {
    console.log(`Message from child: ${messageFromChild}`);
    this.messageFromChild = messageFromChild;
  }

  userSelectedHandler(userEmail: User['email']) {
    console.log(`User selected email: ${userEmail}`);
  }
}

import { Component, Input, Output, EventEmitter } from '@angular/core';

export interface User {
  name: string;
  email: string;
}

@Component({
  selector: 'app-user-card',
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
})
export class UserCardComponent {
  @Input() user: User | null = null;
  @Output() userSelected = new EventEmitter<User['email']>();
}

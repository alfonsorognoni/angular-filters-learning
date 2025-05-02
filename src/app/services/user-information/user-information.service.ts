import { Injectable } from '@angular/core';
import { User } from '../../user-card/user-card.component';

@Injectable({
  providedIn: 'root',
})
export class UserInformationService {
  users: User[] = [
    { name: 'John', email: 'john@example.com' },
    { name: 'Jane', email: 'jane@example.com' },
    { name: 'Bob', email: 'bob@example.com' },
  ];

  constructor() {}

  getUsers() {
    return this.users;
  }

  getUserNameByIndex(index: number) {
    if (!this.users[index]) return;
    return this.users[index];
  }
}

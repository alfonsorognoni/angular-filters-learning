import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TaskManagementService {
  tasks: { id: number; description: string; done: boolean }[] = [
    { id: 1, description: 'Aprender Componentes', done: true },
    { id: 2, description: 'Aprender Directivas', done: false },
    { id: 3, description: 'Practicar Data Binding', done: false },
  ];
  constructor() {}

  getTasks() {
    return this.tasks;
  }

  addTask(description: string) {
    this.tasks.push({
      id: this.generateId(),
      description,
      done: false,
    });
  }

  generateId() {
    const lastIndex = this.tasks.length - 1;
    const lastId = this.tasks[lastIndex].id;
    return lastId + 1;
  }
}

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mi-componente',
  imports: [],
  templateUrl: './mi-componente.component.html',
  styleUrl: './mi-componente.component.scss',
})
export class MiComponenteComponent {
  @Input() parentMessage: string = '';
  @Output() childEvent = new EventEmitter<string>();

  title: string = 'Mi Componente';
  isDisabled: boolean = true;
  counter: number = 0;

  ngOnInit(): void {
    console.log('Mi Componente is initialized ngOnInit');
    console.log(`Parent message: ${this.parentMessage}`);
  }

  increment() {
    this.counter++;
    console.log(`Counter: ${this.counter}`);
  }

  incrementAndNotify() {
    this.counter++;
    const messageToParent = `The counter of ${this.title} has been incremented to ${this.counter}`;
    this.childEvent.emit(messageToParent);
  }
}

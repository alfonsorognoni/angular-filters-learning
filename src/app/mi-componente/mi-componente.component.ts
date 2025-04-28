import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mi-componente',
  imports: [CommonModule],
  templateUrl: './mi-componente.component.html',
  styleUrl: './mi-componente.component.scss',
})
export class MiComponenteComponent {
  @Input() parentMessage: string = '';
  @Output() childEvent = new EventEmitter<string>();

  title: string = 'Mi Componente';
  isDisabled: boolean = true;
  counter: number = 0;
  showSecretMessage: boolean = false;
  important: boolean = true;
  hasError: boolean = true;
  divClassNames: object = {
    'text-xl': this.important,
    'bg-error': this.hasError,
    border: true,
  };
  textColor: string = 'green';
  fontSize: number = 20;
  paragraphStyle: object = {
    color: this.textColor,
    'font-size.px': this.fontSize,
    'font-weight': 'bold',
    'margin-top': '10px',
  };

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

  toggleSecretMessage() {
    this.showSecretMessage = !this.showSecretMessage;
  }
}

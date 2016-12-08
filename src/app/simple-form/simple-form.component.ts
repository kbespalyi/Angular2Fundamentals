import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  //encapsulation: ViewEncapsulation.Native,
  selector: 'app-simple-form',
  template: `
    <input
      #myInput
      type="text"
      [(ngModel)]="message"
      [ngClass]="{mousedown: isMousedown}"
      (mousedown)="isMousedown = true"
      (mouseup)="isMousedown = false"
      (mouseleave)="isMousedown = false"
      />
    <button (click)="onClick(myInput.value)">Click me!</button>
    <button (mouseup)="onTouch($event, myInput.value)">Touch me!</button>
    <button
      class="white bg-black code"
      (click)="update.emit({text: message})">Update me!</button>
  `,
  styles: [
    `
    :host {
      display: flex;
      flex-direction: column;
    }

    .mousedown {
      border: 2px solid green;
    }

    input:focus {
      font-weight: bold;
      outline: none;
    }

    button {
      border: none;
    }

    * {
      font-family: monospace;
    }
    `
  ],
  //styleUrls: ['./../app.component.css']
})
export class SimpleFormComponent implements OnInit {

  @Input() message;
  @Output() update = new EventEmitter();

  isMousedown = false;

  constructor() {
    setInterval(() => this.message = Math.random().toString(), 1000);
  }

  ngOnInit() {
  }

  onClick(value) {
    alert(value);
  }

  onTouch(event, value) {
    console.dir(event);
    console.log(value);
  }

}

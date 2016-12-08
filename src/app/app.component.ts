import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <hr>
      {{api}}
      <hr>
      <ul>
        <li *ngFor="let message of mail.messages">{{message.text}}</li>
      </ul>
      <app-simple-form
        *ngFor="let message of mail.messages"
        [message]="message.text"
        (update)="onUpdate(message.id, $event.text)"
      >

      </app-simple-form>
    </div>
  `,
  styles: [
    `app-simple-form {
      margin-bottom: 10px;
    }`
  ]
  //templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'Otolane app works!';

  constructor(
    @Inject('mail') private mail,
    @Inject('api') private api) {

  }

  onUpdate(id, text) {
    this.mail.update(id, text);
  }
}

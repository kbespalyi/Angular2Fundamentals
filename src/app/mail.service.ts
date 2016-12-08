import { Injectable } from '@angular/core';

@Injectable()
export class MailService {

  messages = [
    {id: 0, text: `You've got mail`},
    {id: 1, text: `You're now friends with John`},
    {id: 2, text: `John liked your tweet`},
    {id: 3, text: `You'll never believe what John said...`}
  ];

  constructor() { }

  update(id, text) {
    this.messages = this.messages.map(item => item.id === id ? {id, text} : item);
  }
}

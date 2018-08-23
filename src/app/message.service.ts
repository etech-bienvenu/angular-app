import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages:string[] = [];

  addMessage(message:string):void{
    this.messages.push(message);
  }

  clearMessage():void {
    this.messages = [];
  }

  constructor() { }

}

import { Component, OnInit } from '@angular/core';
import { ChatService } from './chatapp.service';

@Component({
  selector: 'app-chatapp',
  templateUrl: './chatapp.component.html',
  styleUrls: ['./chatapp.component.css'],
  providers : [ChatService]
})

export class ChatappComponent implements OnInit {

  msg : string;
  username : string;
  messages =[];

  constructor(private chatService : ChatService) {
    //this.username = null;
  }

  ngOnInit() {
     this.chatService
        .getMessage()
        //.onMessage()
        .subscribe((data: string) => {
          var username = (data['username'] == this.username) ? 'You' : data['username'];
          //this.msg =  username+ " says: "+ data['message'];
          this.pushMessage(data['message'], username);
        });
  }
  setUsername(username){
    username = this.fixDirtyUsername(username);
    this.username = username;
  }

  sendMsg(msg){
    if(msg == null || msg =='' || msg.length > 160) return;
    this.chatService.sendMessage(msg, this.username);
     //this.pushMessage(msg, this.username);
     //this.msg = msg;
  }

  pushMessage(msg, username){
    this.messages.splice(0,0,{message: msg, username: username});    
    if(this.messages.length >= 10)
    {
      //this.messages.shift();
      this.messages.pop();
    }
  }

  fixDirtyUsername(username){
    username = username.toUpperCase();
    //if(username == 'NUMAIR' || username == 'NUMAIR QADIR') return 'FLATRON';
    username = username.replace('NUMAIR', 'FLATRON');
    return username;
  }
}
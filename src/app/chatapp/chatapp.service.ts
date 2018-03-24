import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'; 
import { Socket } from 'ng-socket-io';

@Injectable()
export class ChatService {

    constructor(private socket: Socket) {}

    getMessage() {
         /*this.socket.on('msg', function (data) {
            console.log(data);
        });*/

        return this.socket
            .fromEvent<any>('msg')
            .map((data:any) : any=>{return data;});
    }
    
    /*public onMessage(): Observable<string> {
        return new Observable<string>(observer => {
            //console.log('From Observable ');
            this.socket.on('msg', (data: string) => observer.next(data));
        });
    }*/
    sendMessage(msg: string, uname: string) {
        this.socket
            .emit('msg', {message: msg, username: uname});
    }
}
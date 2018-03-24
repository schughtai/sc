import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';

import { AppComponent } from './app.component';
import { ChatappComponent } from './chatapp/chatapp.component';
import { HomeComponent } from './home/home.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
//const config: SocketIoConfig = { url: 'http://localhost:5001', options: {} };
const config: SocketIoConfig = { url: 'https://sc-chatserver.herokuapp.com', options: {} };


@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    ChatappComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    SocketIoModule.forRoot(config), 
    RouterModule.forRoot([
      {path:'', component:ChatappComponent},
      {path:'chat', component: ChatappComponent},
      {path:'shurl', component: SignupFormComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Http } from '@angular/http';
import { Component } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms'

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  
  urlGenerateShortLink = 'https://jsonplaceholder.typicode.com/posts/1';
  http: Http;
  form = new FormGroup({
    customKey: new FormControl(),
    url: new FormControl(),
  });
  constructor(http:Http){
    this.http = http;
  }

  responseGenerate: any;
  generateTinyUrl(){
    let value = this.form.get('customKey').value;
    console.log(value);
    this.generateWebService(value);
  }
  generateWebService(value: string){
     this.http.get(this.urlGenerateShortLink)
    .subscribe(response =>{
      if(value == 'salik'){
        this.responseGenerate = {
          error: 1,
          message: '\"'+value+'\"'+' already in use.',
          body: '',
        }
      }
      else{
        this.responseGenerate = {
          error: 0,
          message: 'Success',
          body: 'http://sc.com/'+value,
        }
      }
    });
  }
}

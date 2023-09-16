import { Component } from '@angular/core';
import { AuthService } from "src/app/services/auth.service";
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  templateUser:any ;

  constructor(public authS:AuthService) {
    this.t();
    this.templateUser = {
      name: faker.person.firstName(),
      email: faker.internet.email(),
      idNumber: faker.number.int({min:10000000,max:19999999}),
      optionDetail:{
        profile:faker.person.bio(),
        city:faker.location.city(),
        country:faker.location.city(),
      },
    }
  }
  login(){
    this.authS.googleSignin();
  }

  isRegisterValidate(content:{email:string}){
    const validateEmail = (email:string) => {
      return String(content.email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
      };
      console.warn(validateEmail);
      
  }
  async t(){
    const user = this.authS.authState$;
  }
}

import { Component } from '@angular/core';
import { AuthService } from "src/app/services/auth.service";
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  
  constructor(public authS:AuthService) {
    this.t();
  }
  login(){
    this.authS.googleSignin();
  }
  async t(){
    await console.log(this.authS.authState$)
    await console.log(this.authS.user$)
    const user = this.authS.authState$;

  }
}
import { Injectable, inject } from '@angular/core';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, User } from "firebase/auth";

import { Auth, user, authState } from '@angular/fire/auth';
import { Subscription } from 'rxjs/internal/Subscription';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth: Auth = inject(Auth);
  user$ = user(this.auth);

  userSubscription: Subscription;
  authState$ = authState(this.auth);
  
  constructor() {
    
    this.userSubscription = this.user$.subscribe((aUser: User | null) => {
      console.log(aUser);
      if(aUser!=null){
        console.log(aUser.email);
      };
    })


  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  googleSignin() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(this.auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const user = result.user;
        // ...
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  }
  googleSignout() {
    const auth = getAuth();
    signOut(auth).then(() => {
    }).catch((error) => {
    });
  }
}

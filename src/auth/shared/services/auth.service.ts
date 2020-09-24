import { User } from './../../../interfaces/user';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
import { tap } from 'rxjs/operators';
import { Store } from 'store';

@Injectable()
export class AuthService {

  auth$ = this.af.authState.pipe(
    tap(next => {
      if(!next) {
        this.store.set("user", null);
        return;
      }
      const user: User = {
        email: next.email,
        uid: next.uid,
        name: next.displayName,
        authenticated: true
      };
      this.store.set("user", user)
    })
      );

  constructor(private af: AngularFireAuth, private store: Store) {}

  createUser(email:string, password: string){
    return this.af.auth.createUserWithEmailAndPassword(email,password);
  }

  login(email: string, password: string){
    return this.af.auth.signInWithEmailAndPassword(email, password);
  }

  GoogleAuth() {
    return this.alternateAuthLogin(new auth.GoogleAuthProvider());
  }

  GitHubAuth() {
    return this.alternateAuthLogin(new auth.GithubAuthProvider());
  }

  // Auth logic to run auth providers
  alternateAuthLogin(provider: any) {
    return this.af.auth.signInWithPopup(provider)
  }

  logout(){
    return this.af.auth.signOut();
  }


}

import { AuthService } from './../../shared/services/auth.service';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  styleUrls: ['./login.component.scss'],
  template: `
      <auth-form (submitted)="loginUser($event)">
        <h1>login</h1>
        <a routerLink="/auth/register">Not registered?</a>
        <button type="submit">Login</button>
        <div class="error" *ngIf="error">{{ error }}</div>
        <span>
          <div><img src="./img/google-auth.jpeg" alt="Sign-in with Google" (click)="alternateLogin('Google')" width="20" height="20" ></div>
          <div><img src="./img/github-auth.jpeg" alt="Sign-in with Github" (click)="alternateLogin('Github')" width="20" height="20" ></div>
        </span>
      </auth-form>
  `
})
export class LoginComponent {
  error: string;
  constructor(private authService: AuthService, private router: Router) {}

  async loginUser(event: FormGroup){
    const { email, password } = event.value;
    try{
      await this.authService.login(email, password);
      this.router.navigate(['/']);
    }catch(err){
      this.error = err;
    }finally{
      console.log("ended login")
    }
  }

async alternateLogin(provider: any){
    switch(provider){
      case 'Google': {
        await this.handleAuth(this.authService.GoogleAuth());
      }
      case 'Github': {
        await this.handleAuth(this.authService.GitHubAuth());
      }
    }
  }

   async handleAuth(provider: Promise<firebase.auth.UserCredential>) {
    try{
      await provider;
      this.router.navigate(['/']);
    } catch(err){
      this.error = err;
      console.error("ERROR", err);
    } finally{
      console.log("ended");
    }
  }

}



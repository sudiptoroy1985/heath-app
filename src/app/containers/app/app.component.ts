import { User } from './../../../interfaces/user';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './../../../auth/shared/services/auth.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Route, Router } from '@angular/router';
import { Store } from 'store';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class=wrapper>
      <app-header [user]="user$ | async" (logout)="logout()"></app-header>
      <app-nav *ngIf="(user$ | async)?.authenticated"></app-nav>
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent implements OnInit, OnDestroy{

  user$: Observable<User>;

  subscription: Subscription;

  constructor(private store: Store, private authService: AuthService, private router: Router){}

  ngOnInit(): void {
    this.subscription = this.authService.auth$.subscribe();
    this.user$ = this.store.select<User>("user");
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  async logout() {
    await this.authService.logout();
    this.router.navigate(['/auth/login']);
  }
}


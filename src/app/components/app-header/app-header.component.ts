import { User } from './../../../interfaces/user';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  styleUrls: ['./app-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="app-header">
      <div class="wrapper">
       <img src="/img/logo.svg">
       <div class="app-header__user-info" *ngIf="user?.authenticated">
        <label>{{ user.name }} | </label>
        <span (click)="logoutUser()"></span>
       </div>
      </div>
    </div>
  `
})
export class AppHeaderComponent {

  @Output()
  logout: EventEmitter<any> = new EventEmitter();

  @Input()
  user: User

  constructor() {}

  logoutUser() {
    this.logout.emit();
  }
}

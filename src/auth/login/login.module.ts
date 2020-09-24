import { SharedModule } from './../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './containers/login.component';
import { CommonModule } from '@angular/common';


export const routes: Routes = [
  {path: '', component: LoginComponent}
]


@NgModule({
  imports: [SharedModule, CommonModule, RouterModule.forChild(routes)],
  declarations: [LoginComponent],
  providers: []
})
export class LoginModule {}

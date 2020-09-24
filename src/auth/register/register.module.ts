import { SharedModule } from './../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './containers/register.component';
import { CommonModule } from '@angular/common';


export const routes: Routes = [
  {path: '', component: RegisterComponent}
]


@NgModule({
  imports: [SharedModule, CommonModule, RouterModule.forChild(routes)],
  declarations: [RegisterComponent],
  providers: []
})
export class RegisterModule {}

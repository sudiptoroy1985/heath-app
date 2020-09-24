import { MealsComponent } from './containers/meals/meals.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';


const routes: Routes = [
 { path:'', component: MealsComponent }
]

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [MealsComponent],
  providers: []
})
export class MealsModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'meals', loadChildren: () => import('./meals/meals.module').then(m => m.MealsModule) },
  { path: 'schedules', loadChildren: () => import('./schedules/schedules.module').then(m => m.SchedulesModule)},
  { path: 'workouts', loadChildren: () => import('./workouts/workout.module').then(m => m.WorkoutsModule) },
]


@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class HealthModule {}

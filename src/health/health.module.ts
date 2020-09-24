
import { AuthGuard } from './../auth/guards/auth.guard';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './shared/shared.module';

const routes: Routes = [
  { path: 'meals', canActivate: [AuthGuard], loadChildren: () => import('./meals/meals.module').then(m => m.MealsModule) },
  { path: 'schedules', canActivate: [AuthGuard], loadChildren: () => import('./schedules/schedules.module').then(m => m.SchedulesModule)},
  { path: 'workouts', canActivate: [AuthGuard], loadChildren: () => import('./workouts/workout.module').then(m => m.WorkoutsModule) },
]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule.forRoot()],
})
export class HealthModule {}

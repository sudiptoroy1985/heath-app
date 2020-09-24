import { WorkoutsComponent } from './containers/workouts/workouts.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 { path: '', component: WorkoutsComponent}
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [WorkoutsComponent],
  providers: []
})
export class WorkoutsModule {}

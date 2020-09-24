import { SchedulesComponent } from './containers/schedules/schedules.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 { path: '', component: SchedulesComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [SchedulesComponent],
  providers: []
})
export class SchedulesModule {}

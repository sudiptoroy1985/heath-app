import { AngularFireDatabaseModule } from '@angular/fire/database';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MealsService } from './services/meals/meals.service';

@NgModule({
  imports: [CommonModule, RouterModule, AngularFireDatabaseModule],
  declarations: [],
})
export class SharedModule {
   static forRoot() : ModuleWithProviders {
      return {
        ngModule: SharedModule,
        providers: [MealsService]
      }
   }
}

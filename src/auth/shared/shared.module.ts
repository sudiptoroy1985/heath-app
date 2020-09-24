
import { AuthService } from './services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { Routes } from '@angular/router';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [ReactiveFormsModule, CommonModule],
  declarations: [AuthFormComponent],
  providers: [AuthService],
  exports: [AuthFormComponent]
})
export class SharedModule {
   static forRoot(): ModuleWithProviders {
    return  {
      ngModule: SharedModule,
      providers: [
        AuthService
      ]
    }
  }
}


import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

//third-party modules

import { AngularFireModule, FirebaseAppConfig } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';

//shared modules
import { SharedModule } from './shared/shared.module';

export const routes: Routes = [
  {
    path: 'auth',
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'login'},
      { path: 'login', loadChildren: () => import('./login/login.module')
                                                  .then(m => m.LoginModule)},
      { path: 'register', loadChildren: () => import('./register/register.module')
                                                  .then(m => m.RegisterModule)},
      { path: 'shared', loadChildren: () => import('./shared/shared.module')
                                                  .then(m => m.SharedModule)},
    ]
  }
]

export const firebaseConfig: FirebaseAppConfig =  {
  apiKey: "AIzaSyAiBXNIbpEnzqD4nMJV5HQu3wtzobW2cBE",
  authDomain: "fitness-app-5bbab.firebaseapp.com",
  databaseURL: "https://fitness-app-5bbab.firebaseio.com",
  projectId: "fitness-app-5bbab",
  storageBucket: "fitness-app-5bbab.appspot.com",
  messagingSenderId: "274541944348",
  appId: "1:274541944348:web:806dd6776c3361f5ab49d9"
};

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    SharedModule.forRoot()
  ],
  declarations: [],
  providers: []
})
export class AuthModule {}

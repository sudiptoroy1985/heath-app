import { AuthService } from './../shared/services/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate{
  constructor(
    private router: Router,
    private authService: AuthService
    ) {}

  canActivate(): Observable<boolean> {
    return this.authService.auth$.pipe(
      map((user) => {
        if(!user){
          this.router.navigate(['/auth/login']);
        }
        return !!user;
      })
    )
  }
}

import { Injectable } from '@angular/core';
import {
  Router,
  RouterStateSnapshot,
  CanActivate,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '@core/services/auth.service';
import { NotificationService } from '@core/services/notification.service';

@Injectable()
export class AuthGuard implements CanActivate {
  isLoggedIn: boolean = null;

  constructor(
    private authService: AuthService,
    private ns: NotificationService
  ) {
    this.authService.isLoggedIn$.subscribe((data) => {
      this.isLoggedIn = data;
    });
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    if (!this.isLoggedIn) {
      this.ns.show('Access denied!');
      console.error('Access denied!');
      return this.isLoggedIn;
    }
    return this.isLoggedIn;
  }
}

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
import { LoginResponse } from '@core/interfaces/login.response.interface';

@Injectable()
export class RolesGuard implements CanActivate {
  auth: LoginResponse = null;

  constructor(
    private router: Router,
    private authService: AuthService,
    private ns: NotificationService
  ) {
    this.authService.auth$.subscribe((data) => {
      this.auth = data;
    });
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    const expectedRole = next.data.expectedRole;
    if (this.auth.payload.role !== expectedRole) {
      this.ns.show('Access denied!');
      console.error('Access denied!');
      return false;
    }
    return true;
  }
}

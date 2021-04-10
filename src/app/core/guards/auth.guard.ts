/*
import { Injectable } from '@angular/core';
import { Router, RouterStateSnapshot, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';

import { AuthService } from '@core/services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
	constructor(
		private router: Router,
		private auth: AuthService
	) { }
	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): boolean | Observable<boolean> | Promise<boolean> {
			return this.auth.user$.pipe(
				take(1),
				map(user => !!user),
				tap(loggedIn => {
					if (!loggedIn) {
						this.router.navigate(['/']);
						console.error('Access denied!');
					}
				})
			);
		}
}
*/

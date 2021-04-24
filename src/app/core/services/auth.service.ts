import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AuthSelectors } from '@core/selectors';
import { Router } from '@angular/router';
import { NotificationService } from '@core/services/notification.service';
import { User } from '@core/interfaces/user.interface';
import { Auth } from '@core/interfaces/login.response.interface';
import { select, Store } from '@ngrx/store';
import { AppState } from '@core/states/app.state';
import { AuthActions } from '@core/actions';

const baseUrl = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isLoggedIn$: Observable<boolean>;

  constructor(
    private http: HttpClient,
    private router: Router,
    private ns: NotificationService,
    public store: Store<AppState>
  ) {
    this.isLoggedIn$ = store.pipe(select(AuthSelectors.selectIsLoggedIn));
  }

  signup(user: User): void {
    this.http.post<User>(`${baseUrl}/auth/signup`, user).subscribe(
      (data) => {
        // this.router.navigate(['address']);
        this.ns.show('Sikeres regisztráció!');
        console.log(data);
      },
      (error) => {
        this.ns.show('HIBA! Regisztráció sikertelen!');
        console.error(error);
      }
    );
  }

  signin(user: User): void {
    this.http.post<Auth>(`${baseUrl}/auth/signin`, user).subscribe(
      (data) => {
        this.store.dispatch(AuthActions.login({ auth: data }));
        this.ns.show('Sikeres bejelentkezés!');
        this.router.navigate(['']);
      },
      (error) => {
        this.ns.show('HIBA! Bejelentkezés sikertelen!');
        console.error(error);
      }
    );
  }

  signout(): void {
    this.store.dispatch(AuthActions.logout());
  }

  //   logout(): void {
  //     localStorage.removeItem('token');
  //     this.isLogin$.next(false);
  //     this.ns.show('Sikeres kijelentkezés!');
  //     this.router.navigate(['/']);
  //   }

  //   protected hasToken(): boolean {
  //     return !!localStorage.getItem('token');
  //   }
}

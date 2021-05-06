import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AuthSelectors } from '@core/selectors';
import { Router } from '@angular/router';
import { NotificationService } from '@core/services/notification.service';
import { LoginUser } from '@core/interfaces/login.user.interface';
import { LoginResponse } from '@core/interfaces/login.response.interface';
import { select, Store } from '@ngrx/store';
import { AppState } from '@core/states/app.state';
import { AuthActions } from '@core/actions';
import { CartService } from './cart.service';

const baseUrl = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isLoggedIn$: Observable<boolean>;
  public auth$: Observable<LoginResponse>;

  constructor(
    private http: HttpClient,
    private router: Router,
    private ns: NotificationService,
    private cartService: CartService,
    public store: Store<AppState>
  ) {
    this.isLoggedIn$ = store.pipe(select(AuthSelectors.selectIsLoggedIn));
    this.auth$ = store.pipe(select(AuthSelectors.selectAuth));
  }

  signup(loginUser: LoginUser): void {
    this.http.post<LoginUser>(`${baseUrl}/auth/signup`, loginUser).subscribe(
      (data) => {
        // this.router.navigate(['address']);
        this.ns.show('Sikeres regisztráció!');
        this.signin(loginUser);
        console.log(data);
      },
      (error) => {
        this.ns.show('HIBA! Regisztráció sikertelen!');
        console.error(error);
      }
    );
  }

  signin(loginUser: LoginUser): void {
    this.http.post<LoginResponse>(`${baseUrl}/auth/signin`, loginUser).subscribe(
      (data) => {
        this.store.dispatch(AuthActions.login({ auth: data }));
        this.ns.show('Sikeres bejelentkezés!');
        // this.router.navigate(['']);
      },
      (error) => {
        this.ns.show('HIBA! Bejelentkezés sikertelen!');
        console.error(error);
      }
    );
  }

  signout(): void {
    this.router.navigate(['']);
    this.store.dispatch(AuthActions.logout());
    this.cartService.clearCart();
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

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

import { NotificationService } from '@core/services/notification.service';

import { User } from '@core/interfaces/user.interface';
import { LoginResponseInterface } from '@core/interfaces/login.response.interface';

const baseUrl = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  //   isLogin$ = new BehaviorSubject<boolean>(this.hasToken());

  constructor(
    private http: HttpClient,
    private router: Router,
    private ns: NotificationService
  ) {}

  //   isLoggedIn(): Observable<boolean> {
  //     return this.isLogin$.asObservable();
  //   }

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
    this.http.post<LoginResponseInterface>(`${baseUrl}/auth/signin`, user).subscribe(
      (data) => {
        localStorage.setItem('access_token', data.access_token);
        localStorage.setItem('expires_in', data.expires_in);
        localStorage.setItem('id', data.payload.id);
        localStorage.setItem('email', data.payload.email);
        localStorage.setItem('role', data.payload.role);
        // this.isLogin$.next(true);
        console.log(data);
        this.ns.show('Sikeres bejelentkezés!');
        // this.router.navigate(['']);
      },
      (error) => {
        this.ns.show('HIBA! Bejelentkezés sikertelen!');
        console.error(error);
      }
    );
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

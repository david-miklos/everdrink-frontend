import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserActions } from '@core/actions';
import { User } from '@core/interfaces/user.interface';
import { UserSelectors } from '@core/selectors';
import { AppState } from '@core/states/app.state';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { NotificationService } from './notification.service';

const baseUrl = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public users$: Observable<User[]>;
  private token: string = null;

  constructor(
    private http: HttpClient,
    private ns: NotificationService,
    private router: Router,
    private authService: AuthService,
    public store: Store<AppState>
  ) {
    this.users$ = store.pipe(select(UserSelectors.selectUsers));
    this.authService.auth$.subscribe((data) => {
      this.token = data.access_token;
    });
  }

  getUsers(): void {
    const header = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.token}`
    );
    this.http
      .get<User[]>(`${baseUrl}/user/guests`, { headers: header })
      .subscribe(
        (data) => {
          console.log(data);
          this.store.dispatch(UserActions.addUsers({ users: data }));
        },
        (error) => {
          this.authService.signout();
          this.router.navigate(['']);
          this.ns.show('Login again, your session exipred!');
        }
      );
  }

  approveUser(id: string): void {
    const header = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.token}`
    );
    this.http
      .put<User>(`${baseUrl}/user/${id}/approve`, null, { headers: header })
      .subscribe(
        (data) => {
          this.ns.show('User approved!');
          console.log(data);
          this.store.dispatch(UserActions.approveUser({ user: data }));
        },
        (error) => {
          console.log(error);
        }
      );
  }
}

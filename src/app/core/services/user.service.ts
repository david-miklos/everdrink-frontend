import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UsersActions } from '@core/actions';
import { User } from '@core/interfaces/user.interface';
import { UsersSelectors } from '@core/selectors';
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
  // users: User[];
  public users$: Observable<User[]>;
  private token: string = null;

  constructor(
    private http: HttpClient,
    private ns: NotificationService,
    private router: Router,
    private authService: AuthService,
    public store: Store<AppState>,
  ) {
    this.users$ = store.pipe(select(UsersSelectors.selectUsers));
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
      .subscribe((data) => {
        console.log(data);
        this.store.dispatch(UsersActions.addUsers({ users: data }));
      },
        (error) => {
          this.authService.signout();
          this.router.navigate(['']);
          this.ns.show('Jelentkezzen újra be, lejárt az érvényesség!');
        });
  }

  approveUser(id: string): void {
    const header = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.token}`
    );
    this.http
      .put<User>(`${baseUrl}/user/${id}/update_role`, { headers: header })
      .subscribe((data) => {
        this.ns.show('Felhasználó jóváhagyva!');
        console.log(data);
        this.store.dispatch(UsersActions.approveUser({ user: data }));
      });
  }
}

import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartSelectors } from '@core/selectors';
import { AuthService } from '@core/services/auth.service';
import { AppState } from '@core/states/app.state';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, DoCheck {
  @Input('matBadge') content: string | number | undefined | null;
  @Input('matBadgeHidden') hidden = true;
  public count$: Observable<number>;
  role: string;

  constructor(
    public store: Store<AppState>,
    private router: Router,
    public authService: AuthService
  ) {
    this.count$ = store.pipe(select(CartSelectors.selectCount));
    this.authService.auth$.subscribe(
      (data) => {
        this.role = data.payload.role;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit(): void {}

  ngDoCheck(): void {
    this.count$.subscribe((data) => {
      this.content = data;
    });
    if (this.content > 0) {
      this.hidden = false;
    } else {
      this.hidden = true;
    }
  }
}

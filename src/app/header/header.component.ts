import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartSelectors } from '@core/selectors';
import { AppState } from '@core/states/app.state';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, DoCheck {
  // tslint:disable-next-line:no-input-rename
  @Input('matBadge') content: string | number | undefined | null;
  // tslint:disable-next-line:no-input-rename
  @Input('matBadgeHidden') hidden = true;
  public count$: Observable<number>;

  constructor(public store: Store<AppState>, private router: Router) {
    this.count$ = store.pipe(select(CartSelectors.selectCount));
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

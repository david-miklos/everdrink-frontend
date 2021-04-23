import { Component, OnInit } from '@angular/core';
import { Product } from '@core/interfaces/product.interface';
import { CartSelectors } from '@core/selectors';
import { AppState } from '@core/states/app.state';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.scss'],
})
export class CartDetailComponent implements OnInit {
  public count$: Observable<number>;
  public total$: Observable<number>;
  public products$: Observable<Product[]>;

  constructor(public store: Store<AppState>) {
    this.count$ = store.pipe(select(CartSelectors.selectCount));
    this.products$ = store.pipe(select(CartSelectors.selectProducts));
    this.total$ = store.pipe(select(CartSelectors.selectTotal));
  }

  ngOnInit(): void {}
}

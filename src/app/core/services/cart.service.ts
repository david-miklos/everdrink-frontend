import { Injectable } from '@angular/core';
import { CartActions } from '@core/actions';
import { Order } from '@core/interfaces/order.interface';
import { Product } from '@core/interfaces/product.interface';
import { CartSelectors } from '@core/selectors';
import { AppState } from '@core/states/app.state';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public orders$: Observable<Order[]>;
  public count$: Observable<number>;
  public total$: Observable<number>;
  public shipping$: Observable<string>;

  constructor(public store: Store<AppState>) {
    this.orders$ = store.pipe(select(CartSelectors.selectOrders));
    this.count$ = store.pipe(select(CartSelectors.selectCount));
    this.total$ = store.pipe(select(CartSelectors.selectTotal));
  }

  addOrder(orderToAdd: Order): void {
    this.store.dispatch(CartActions.addToCart({ order: orderToAdd }));
  }

  removeOrder(orderToRemove: Order): void {
    this.store.dispatch(CartActions.removeFromCart({ order: orderToRemove }));
  }

  clearCart(): void {
    this.store.dispatch(CartActions.clearCart());
  }
}

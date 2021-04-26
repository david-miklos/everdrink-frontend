import { Injectable } from '@angular/core';
import { CartActions } from '@core/actions';
import { Product } from '@core/interfaces/product.interface';
import { CartSelectors } from '@core/selectors';
import { AppState } from '@core/states/app.state';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public products$: Observable<Product[]>;
  public count$: Observable<number>;
  public total$: Observable<number>;

  constructor(public store: Store<AppState>) {
    this.products$ = store.pipe(select(CartSelectors.selectProducts));
    this.count$ = store.pipe(select(CartSelectors.selectCount));
    this.total$ = store.pipe(select(CartSelectors.selectTotal));
  }

  addProduct(productToAdd: Product): void {
    this.store.dispatch(CartActions.addToCart({ product: productToAdd }));
  }

  removeProduct(productToRemove: Product): void {
    this.store.dispatch(
      CartActions.removeFromCart({ product: productToRemove })
    );
  }
}

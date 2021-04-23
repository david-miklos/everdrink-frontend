import { Component, OnInit } from '@angular/core';
import { Product } from '@core/interfaces/product.interface';
import { CartSelectors } from '@core/selectors';
import { AppState } from '@core/states/app.state';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products-in-cart',
  templateUrl: './products-in-cart.component.html',
  styleUrls: ['./products-in-cart.component.scss'],
})
export class ProductsInCartComponent implements OnInit {
  public products$: Observable<Product[]>;

  constructor(public store: Store<AppState>) {
    this.products$ = store.pipe(select(CartSelectors.selectProducts));
  }

  ngOnInit(): void {}
}

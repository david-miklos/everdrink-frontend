import { Component, Input, OnInit } from '@angular/core';
import { CartActions } from '@core/actions';
import { Product } from '@core/interfaces/product.interface';
import { AppState } from '@core/states/app.state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-product-in-cart',
  templateUrl: './product-in-cart.component.html',
  styleUrls: ['./product-in-cart.component.scss'],
})
export class ProductInCartComponent implements OnInit {
  @Input() product: Product = null;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  removeFromCart(): void {
    this.store.dispatch(CartActions.removeFromCart({ product: this.product }));
  }
}

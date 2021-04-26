import { Component, Input, OnInit } from '@angular/core';
import { CartActions } from '@core/actions';
import { Product } from '@core/interfaces/product.interface';
import { CartService } from '@core/services/cart.service';
import { AppState } from '@core/states/app.state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-product-in-cart',
  templateUrl: './product-in-cart.component.html',
  styleUrls: ['./product-in-cart.component.scss'],
})
export class ProductInCartComponent implements OnInit {
  @Input() product: Product = null;
  constructor(public cartService: CartService) {}

  ngOnInit(): void {}

  removeFromCart(): void {
    this.cartService.removeProduct(this.product);
  }
}

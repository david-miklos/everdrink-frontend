import { Component, Input, OnInit } from '@angular/core';
import { CartActions } from '@core/actions';
import { Order } from '@core/interfaces/order.interface';
import { Product } from '@core/interfaces/product.interface';
import { CartService } from '@core/services/cart.service';
import { AppState } from '@core/states/app.state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-order-in-cart',
  templateUrl: './order-in-cart.component.html',
  styleUrls: ['./order-in-cart.component.scss'],
})
export class OrderInCartComponent implements OnInit {
  @Input() order: Order = null;
  constructor(public cartService: CartService) {}

  ngOnInit(): void {}

  removeFromCart(): void {
    this.cartService.removeFromCart(this.order);
  }

  increment(): void {
    this.cartService.incrementQuantity(this.order);
  }

  decrement(): void {
    this.cartService.decrementQuantity(this.order);
  }
}

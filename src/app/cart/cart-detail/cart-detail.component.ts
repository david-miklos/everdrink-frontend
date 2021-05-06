import {
  ChangeDetectorRef,
  Component,
  DoCheck,
  OnChanges,
  OnInit,
} from '@angular/core';
import { Order } from '@core/interfaces/order.interface';
import { Product } from '@core/interfaces/product.interface';
import { CartSelectors } from '@core/selectors';
import { CartService } from '@core/services/cart.service';
import { CheckoutService } from '@core/services/checkout.service';
import { OrderService } from '@core/services/order.service';
import { AppState } from '@core/states/app.state';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.scss'],
})
export class CartDetailComponent implements OnInit {

  chosenShipping = 'delivery';
  constructor(
    public cartService: CartService,
    public orderService: OrderService,
    public checkoutService: CheckoutService
  ) {

  }

  onSelectChange(): void {
    console.log(this.chosenShipping);
  }

  ngOnInit(): void {}

  checkout(): void {
    // this.orders.forEach((order) => {
    //   console.log(order);
    //   this.orderService.addOrder(order);
    // });
    // this.checkoutService.addCheckout();
    // this.checkoutService.addCheckout(this.chosenShipping);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddressResponse } from '@core/interfaces/address.response.interface';
import { AuthSelectors } from '@core/selectors';
import { AddressService } from '@core/services/address.service';
import { CartService } from '@core/services/cart.service';
import { CheckoutService } from '@core/services/checkout.service';
import { OrderService } from '@core/services/order.service';
import { AppState } from '@core/states/app.state';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  chosenAddress: AddressResponse;
  chosenShipping = 'delivery';
  errorMsg = 'Your cart has no products!';
  public isLoggedIn$: Observable<boolean>;
  
  constructor(
    public cartService: CartService,
    public orderService: OrderService,
    public addressService: AddressService,
    private router: Router,
    public checkoutService: CheckoutService,
    public store: Store<AppState>
  ) {
    this.isLoggedIn$ = store.pipe(select(AuthSelectors.selectIsLoggedIn));
    this.isLoggedIn$.subscribe(data => console.log('am i logged in ', data))
  }

  ngOnInit(): void {
    this.addressService.getUserAddresses();
    this.addressService.getAdminAddresses();
  }

  checkout(): void {
    this.checkoutService.addCheckout(
      this.chosenShipping,
      this.chosenAddress.id
    );
    this.router.navigate(['']);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddressResponse } from '@core/interfaces/address.response.interface';
import { AddressService } from '@core/services/address.service';
import { CartService } from '@core/services/cart.service';
import { CheckoutService } from '@core/services/checkout.service';
import { OrderService } from '@core/services/order.service';
import { select } from '@ngrx/store';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  chosenAddress: AddressResponse;
  chosenShipping = 'delivery';
  constructor(
    public cartService: CartService,
    public orderService: OrderService,
    public addressService: AddressService,
    private router: Router,
    public checkoutService: CheckoutService
  ) {}

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

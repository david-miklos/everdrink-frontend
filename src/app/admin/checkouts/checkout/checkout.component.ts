import { Component, Input, OnInit } from '@angular/core';
import { Checkout } from '@core/interfaces/checkout.interface';
import { CheckoutResponse } from '@core/interfaces/checkout.response.interface';
import { Order } from '@core/interfaces/order.interface';
import { User } from '@core/interfaces/user.interface';
import { AddressService } from '@core/services/address.service';
import { CheckoutService } from '@core/services/checkout.service';
import { OrderService } from '@core/services/order.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  @Input() checkout: CheckoutResponse;

  constructor(
    public orderService: OrderService,
    public addressService: AddressService,
    public checkoutService: CheckoutService
  ) {}

  ngOnInit(): void {}

  finalize(): void {
    this.checkoutService.finalizeCheckout(this.checkout.id);
  }
}

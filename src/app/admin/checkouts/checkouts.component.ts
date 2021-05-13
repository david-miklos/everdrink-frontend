import {Component, OnInit} from '@angular/core';
import { CheckoutService } from '@core/services/checkout.service';

@Component({
  selector: 'app-checkouts',
  templateUrl: './checkouts.component.html',
  styleUrls: ['./checkouts.component.scss']
})
export class CheckoutsComponent implements OnInit {
  errorMsg = 'Nincs leadott rendelés.';
  constructor(public checkoutService: CheckoutService) {
  }

  ngOnInit(): void {
    this.checkoutService.getCheckouts();
  }

}

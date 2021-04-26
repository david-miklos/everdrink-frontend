import { Component, OnInit } from '@angular/core';
import { Product } from '@core/interfaces/product.interface';
import { CartSelectors } from '@core/selectors';
import { CartService } from '@core/services/cart.service';
import { AppState } from '@core/states/app.state';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.scss'],
})
export class CartDetailComponent implements OnInit {

  constructor(public cartService: CartService) {

  }

  ngOnInit(): void {}
}

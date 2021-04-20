import { Component, OnInit } from '@angular/core';
import { CartService } from '@core/services/cart.service';

@Component({
  selector: 'app-products-in-cart',
  templateUrl: './products-in-cart.component.html',
  styleUrls: ['./products-in-cart.component.scss']
})
export class ProductsInCartComponent implements OnInit {

  constructor(public cartService: CartService) { }

  ngOnInit(): void {
  }

}

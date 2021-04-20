import { Component, Input, OnInit } from '@angular/core';
import { Product } from '@core/interfaces/product.interface';
import { CartService } from '@core/services/cart.service';

@Component({
  selector: 'app-product-in-cart',
  templateUrl: './product-in-cart.component.html',
  styleUrls: ['./product-in-cart.component.scss']
})
export class ProductInCartComponent implements OnInit {
  @Input() product: Product = null;
  panelOpenState = false;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  removeFromCart(): void {
    this.cartService.removeProduct(this.product);
  }
}

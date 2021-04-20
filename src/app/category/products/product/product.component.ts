import { Component, Input, OnInit } from '@angular/core';
import { Product } from '@core/interfaces/product.interface';
import { CartService } from '@core/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() product: Product = null;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  addToCart(): void {
    this.cartService.addProduct(this.product);
  }
}

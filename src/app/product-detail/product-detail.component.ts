import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthSelectors } from '@core/selectors';
import { CartService } from '@core/services/cart.service';
import { ProductService } from '@core/services/product.service';
import { select, Store } from '@ngrx/store';
import { AppState } from '@core/states/app.state';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  public quantity = 1;

  constructor(
    private route: ActivatedRoute,
    public productService: ProductService,
    public cartService: CartService,
    public store: Store<AppState>
  ) {

  }

  ngOnInit(): void {
    this.route.params.subscribe((routeParams) => {
      this.productService.getProduct(routeParams.id);
    });
  }

  addToCart(): void {
    const order = {
      product: this.productService.product,
      quantity: this.quantity,
    };
    this.cartService.addToCart(order);
  }

  increment(): void {
    this.quantity = this.quantity + 1;
  }
  decrement(): void {
    this.quantity = this.quantity - 1;
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from '@core/interfaces/order.interface';
import { Product } from '@core/interfaces/product.interface';
import { CartService } from '@core/services/cart.service';
import { NotificationService } from '@core/services/notification.service';
import { ProductService } from '@core/services/product.service';

const RegExpValidator = {
  digit: RegExp(/^[1-9]\d*$/),
};

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  public quantityForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    public productService: ProductService,
    private ns: NotificationService,
    public cartService: CartService
  ) {
    this.quantityForm = this.formBuilder.group({
      quantity: [null, [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((routeParams) => {
      this.productService.getProduct(routeParams.id);
    });
  }

  quantity(form: FormGroup): void {
    if (form.valid) {
      // this.ns.show('RENDBEN! Adatok megfelelőek!');
      const order = {
        product: this.productService.product,
        quantity: form.value.quantity,
      };
      this.cartService.addOrder(order);
    } else {
      this.ns.show('HIBA! Adatok nem megfelelőek!');
    }
  }
}

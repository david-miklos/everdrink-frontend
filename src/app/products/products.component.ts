import { Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '@core/services/category.service';
import { ProductService } from '@core/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  checked = false;
  constructor(
    private route: ActivatedRoute,
    public productService: ProductService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(routeParams => {
      this.productService.getProducts(routeParams.id);
      // this.productService.getProductBrands(routeParams.id);
    });
  }


}

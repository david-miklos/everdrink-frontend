import { Component, DoCheck, OnInit } from '@angular/core';
import { FlexStyleBuilder } from '@angular/flex-layout';
import { ActivatedRoute } from '@angular/router';
import { Filter } from '@core/interfaces/filter.interface';
import { CategoryService } from '@core/services/category.service';
import { ProductService } from '@core/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  errorMsg = 'Jelenleg nincsenek termékeink a választott kategóriában.';

  constructor(
    private route: ActivatedRoute,
    public productService: ProductService,
    public categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((routeParams) => {
      this.productService.getProducts(routeParams.id);
      this.categoryService.getOne(routeParams.id);
    });
  }
}

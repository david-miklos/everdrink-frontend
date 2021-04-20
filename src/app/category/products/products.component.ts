import { Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '@core/services/category.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    public categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(routeParams => {
      this.categoryService.getProducts(routeParams.name);
    });
  }

}

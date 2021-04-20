import {Component, OnInit} from '@angular/core';
import { CategoryService } from '@core/services/category.service';

@Component({
  selector: 'app-products',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.categoryService.getCategories();
  }

}

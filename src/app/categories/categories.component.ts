import {Component, OnInit} from '@angular/core';
import { CategoryService } from '@core/services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  constructor(public categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.categoryService.getAll();
  }

}

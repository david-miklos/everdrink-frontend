import { Component, OnInit } from '@angular/core';
import { Category } from '@core/interfaces/category.interface';
import { CategoryService } from '@core/services/category.service';

@Component({
  selector: 'app-productbar',
  templateUrl: './productbar.component.html',
  styleUrls: ['./productbar.component.scss']
})
export class ProductbarComponent implements OnInit {

  constructor(public categoryService: CategoryService) { }

  ngOnInit(): void {
  }

}

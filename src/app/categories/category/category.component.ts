import { Component, Input, OnInit } from '@angular/core';
import { Category } from '@core/interfaces/category.interface';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  @Input() category: Category = null;

  constructor() { }

  ngOnInit(): void {
  }

}

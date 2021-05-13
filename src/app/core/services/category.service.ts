import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '@core/interfaces/category.interface';
import { Product } from '@core/interfaces/product.interface';
import { NotificationService } from './notification.service';

const baseUrl = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  categories: Category[];
  category: Category;

  constructor(private http: HttpClient, private ns: NotificationService) {}

  getAll(): void {
    this.http.get<Category[]>(`${baseUrl}/category`).subscribe(
      (data) => {
        this.categories = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getOne(id: string): void {
    this.http.get<Category>(`${baseUrl}/category/${id}/get`).subscribe(
      (data) => {
        this.category = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}

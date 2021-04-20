import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '@core/interfaces/category.interface';
import { Product } from '@core/interfaces/product.interface';
import { BehaviorSubject } from 'rxjs';
import { NotificationService } from './notification.service';

const baseUrl = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
    // products$ = new BehaviorSubject<Product[]>([]);
  categories: Category[];
  products: Product[];
  constructor(private http: HttpClient, private ns: NotificationService) {}

  getCategories(): void {
    // const header = new HttpHeaders().set(
    //     'Authorization', `Bearer ${localStorage.getItem('access_token')}`
    // );
    this.http.get<Category[]>(`${baseUrl}/category`).subscribe((data) => {
      this.categories = data;
    });
  }

  getProducts(categoryName: string): void {
    this.http
      .get<Product[]>(`${baseUrl}/category/${categoryName}`)
      .subscribe(data => {
        this.products = data;
      });
  }

  // getProducts(categoryName: string): void {
  //   this.http
  //     .get<Product[]>(`${baseUrl}/category/${categoryName}`)
  //     .subscribe(i => {
  //       this.products$.next(i);
  //       console.log(this.products$);
  //     });
  // }
}

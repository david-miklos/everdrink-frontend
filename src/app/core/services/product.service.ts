import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '@core/interfaces/product.interface';
import { NotificationService } from './notification.service';

const baseUrl = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[] = null;
  product: Product = null;
  constructor(private http: HttpClient, private ns: NotificationService) {}

  getProducts(categoryId: string): void {
    this.http
      .get<Product[]>(`${baseUrl}/product/${categoryId}/category`)
      .subscribe((data) => {
        this.products = data;
      });
  }

  getProduct(id: string): void {
    this.http.get<Product>(`${baseUrl}/product/${id}/get`).subscribe((data) => {
      this.product = data;
    });
  }
}

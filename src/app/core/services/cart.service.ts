import { Injectable } from '@angular/core';
import { Product } from '@core/interfaces/product.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  // category: Product[] = [];
  products$ = new BehaviorSubject<Product[]>([]);
  constructor() {}

  addProduct(product: Product): void {
    this.products$.next(this.products$.getValue().concat([product]));
    console.log(this.products$);
    console.log(this.products$.getValue().length);
  }

  getProductCount(): number {
    return this.products$.getValue().length;
   }


  getProducts(): void {
    this.products$.subscribe((data) => {
      console.log(data);
    });
  }

  removeProduct(productToRemove): void {
    // console.log(productToRemove);
    // console.log(this.category);
    // console.log(this.category.filter((product) => product !== productToRemove));
    // // return this.category.filter((product) => product !== productToRemove);
    this.products$.next(this.products$.getValue().filter((product) => product !== productToRemove));
    console.log(this.products$);
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '@core/interfaces/order.interface';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { CartService } from './cart.service';
import { NotificationService } from './notification.service';

const baseUrl = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private token: string = null;
  private orders: Order[] = null;

  constructor(
    private http: HttpClient,
    private ns: NotificationService,
    private cartService: CartService,
    private authService: AuthService
  ) {
    this.authService.auth$.subscribe((data) => {
      this.token = data.access_token;
    });
    this.cartService.orders$.subscribe((data) => {
      this.orders = data;
    });
  }

  addOrders(checkoutId: string): void {
    this.orders.forEach((order) => {
      const header = new HttpHeaders().set(
        'Authorization',
        `Bearer ${this.token}`
      );

      const orderReq = {
        quantity: order.quantity,
        product_id: order.product.id,
        checkout_id: checkoutId,
      };
      this.http
        .post(`${baseUrl}/order/create`, orderReq, { headers: header })
        .subscribe(
          (data) => {},
          (error) => {
            this.ns.show('HIBA! rendles leadas sikertelen!');
            console.error(error);
          }
        );
    });
    this.cartService.clearCart();
  }

  // getOrders(checkoutId: string): Observable<Order[]> {
  //   const header = new HttpHeaders().set(
  //     'Authorization',
  //     `Bearer ${this.token}`
  //   );
  //   return this.http.get<Order[]>(`${baseUrl}/order/${checkoutId}/checkout`, {
  //     headers: header,
  //   });
  //   // .subscribe(
  //   //   (data) => {
  //   //     this.orders = data;
  //   //   },
  //   //   (error) => {
  //   //     this.ns.show('HIBA! rendelés lekerese sikertelen!');
  //   //     console.error(error);
  //   //   }
  //   // );
  // }
}

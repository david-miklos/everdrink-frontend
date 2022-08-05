import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CheckoutActions } from '@core/actions';
import { Checkout } from '@core/interfaces/checkout.interface';
import { CheckoutResponse } from '@core/interfaces/checkout.response.interface';
import { Order } from '@core/interfaces/order.interface';
import { CheckoutSelectors } from '@core/selectors';
import { AppState } from '@core/states/app.state';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { CartService } from './cart.service';
import { NotificationService } from './notification.service';
import { OrderService } from './order.service';

const baseUrl = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  private token: string = null;
  public checkouts$: Observable<CheckoutResponse[]>;

  constructor(
    private http: HttpClient,
    private ns: NotificationService,
    private authService: AuthService,
    private cartService: CartService,
    private orderService: OrderService,
    public store: Store<AppState>
  ) {
    this.checkouts$ = store.pipe(select(CheckoutSelectors.selectCheckouts));
    this.authService.auth$.subscribe((data) => {
      this.token = data.access_token;
    });
  }

  getCheckouts(): void {
    const header = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.token}`
    );
    this.http
      .get<CheckoutResponse[]>(`${baseUrl}/checkout`, {
        headers: header,
      })
      .subscribe(
        (data) => {
          this.store.dispatch(CheckoutActions.addCheckout({ checkouts: data }));
        },
        (error) => {
          this.ns.show("ERROR! Couldn't get confirmed order!");
          console.error(error);
        }
      );
  }

  finalizeCheckout(id: string): void {
    const header = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.token}`
    );
    this.http
      .delete<CheckoutResponse>(`${baseUrl}/checkout/${id}/delete`, {
        headers: header,
      })
      .subscribe(
        (data) => {
          this.store.dispatch(
            CheckoutActions.finalizeCheckout({ checkout: data })
          );
          this.ns.show('Order confirm successful!');
        },
        (error) => {
          this.ns.show('ERROR! Order confirm successful!');
          console.error(error);
        }
      );
  }

  addCheckout(chosenShipping: string, chosenAddressId: string): void {
    const header = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.token}`
    );
    const checkoutReq = {
      shipping: chosenShipping,
      addressId: chosenAddressId,
    };
    this.http
      .post<Checkout>(`${baseUrl}/checkout/create`, checkoutReq, {
        headers: header,
      })
      .subscribe(
        (data) => {
          const checkoutId = data.id;
          this.orderService.addOrders(checkoutId);
          this.ns.show('Order confirm successful!');
        },
        (error) => {
          this.ns.show('ERROR! Order confirm unsuccessful!');
          console.error(error);
        }
      );
  }
}

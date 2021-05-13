import * as fromRouter from '@ngrx/router-store';
import { CartState, initialCartState } from './cart.state';
import { AuthState, initialAuthState } from './auth.state';
import { UserState } from './user.state';
import { CheckoutState } from './checkout.state';

export interface AppState {
  cart: CartState;
  auth: AuthState;
  user: UserState;
  checkout: CheckoutState;
  router: fromRouter.RouterReducerState<any>;
}

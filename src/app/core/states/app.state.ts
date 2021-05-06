import * as fromRouter from '@ngrx/router-store';
import { CartState, initialCartState } from './cart.state';
import { AuthState, initialAuthState } from './auth.state';
import { initialUsersState, UsersState } from './users.state';
import { CheckoutState } from './checkout.state';

export interface AppState {
  cart: CartState;
  auth: AuthState;
  users: UsersState;
  checkout: CheckoutState;
  router: fromRouter.RouterReducerState<any>;
}

import { InjectionToken } from '@angular/core';
import { Action, ActionReducerMap } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import { cartReducer } from '@core/reducers/cart.reducer';
import { AppState } from '@core/states/app.state';
import { authReducer } from '@core/reducers/auth.reducer';

/**
 * Our state is composed of a map of action reducer functions.
 * These reducer functions are called with each dispatched action
 * and the current or initial state and return a new immutable state.
 */
export const ROOT_REDUCERS = new InjectionToken<
  ActionReducerMap<AppState, Action>
>('Root reducers token', {
  factory: () => ({
    cart: cartReducer,
    auth: authReducer,
    router: fromRouter.routerReducer,
  }),
});

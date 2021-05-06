import { InjectionToken } from '@angular/core';
import { Action, ActionReducerMap } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import { cartReducer } from '@core/reducers/cart.reducer';
import { AppState } from '@core/states/app.state';
import { authReducer } from '@core/reducers/auth.reducer';
import { usersReducer } from '@core/reducers/users.reducer';
import { checkoutReducer } from '@core/reducers/checkout.reducer';

export const ROOT_REDUCERS = new InjectionToken<
  ActionReducerMap<AppState, Action>
>('Root reducers token', {
  factory: () => ({
    cart: cartReducer,
    auth: authReducer,
    users: usersReducer,
    checkout: checkoutReducer,
    router: fromRouter.routerReducer,
  }),
});

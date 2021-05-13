import { CheckoutActions } from '@core/actions';
import {
  CheckoutState,
  initialCheckoutState,
} from '@core/states/checkout.state';
import { createReducer, on } from '@ngrx/store';

export const checkoutReducer = createReducer(
  initialCheckoutState,
  on(CheckoutActions.addCheckout, (state: CheckoutState, { checkouts }) => ({
    checkouts,
  })),
  on(
    CheckoutActions.finalizeCheckout,
    (state: CheckoutState, { checkout }) => ({
      checkouts: state.checkouts.filter((stateCheckout) => stateCheckout.id !== checkout.id),
    })
  )
);

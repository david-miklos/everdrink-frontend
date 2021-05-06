import { CheckoutResponse } from '@core/interfaces/checkout.response.interface';
import { createAction, props } from '@ngrx/store';

export const addCheckout = createAction(
  '[Checkout] Add Checkouts',
  props<{ checkouts: CheckoutResponse[] }>()
);

export const finalizeCheckout = createAction(
  '[Checkout] Finalize Checkout',
  props<{ checkout: CheckoutResponse }>()
);

import { AppState } from '@core/states/app.state';
import { checkoutFeatureKey, CheckoutState } from '@core/states/checkout.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const selectStateCheckouts = (state: CheckoutState) => state.checkouts;

const checkoutFeatureSelector = createFeatureSelector<AppState, CheckoutState>(
  checkoutFeatureKey
);

export const selectCheckouts = createSelector(
  checkoutFeatureSelector,
  selectStateCheckouts
);

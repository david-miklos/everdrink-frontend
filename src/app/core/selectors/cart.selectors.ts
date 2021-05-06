import { AppState } from '@core/states/app.state';
import { cartFeatureKey, CartState } from '@core/states/cart.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const selectStateCount = (state: CartState) => state.count;

const selectStateOrders = (state: CartState) => state.orders;

const selectStateTotal = (state: CartState) => state.total;

const cartFeatureSelector = createFeatureSelector<AppState, CartState>(
  cartFeatureKey
);

export const selectOrders = createSelector(
  cartFeatureSelector,
  selectStateOrders,
);

export const selectCount = createSelector(
  cartFeatureSelector,
  selectStateCount,
);

export const selectTotal = createSelector(
  cartFeatureSelector,
  selectStateTotal,
);

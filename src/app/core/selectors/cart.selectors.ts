import { AppState } from '@core/states/app.state';
import { cartFeatureKey, CartState } from '@core/states/cart.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const selectStateCount = (state: CartState) => state.count;

const selectStateProducts = (state: CartState) => state.products;

const selectStateTotal = (state: CartState) => state.total;

const cartFeatureSelector = createFeatureSelector<AppState, CartState>(
  cartFeatureKey
);

export const selectProducts = createSelector(
  cartFeatureSelector,
  selectStateProducts,
);

export const selectCount = createSelector(
  cartFeatureSelector,
  selectStateCount,
);

export const selectTotal = createSelector(
  cartFeatureSelector,
  selectStateTotal,
);

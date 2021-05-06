import { Order } from '@core/interfaces/order.interface';
import { Product } from '@core/interfaces/product.interface';
import { createAction, props } from '@ngrx/store';

export const addToCart = createAction(
  '[Cart] Add To Cart',
  props<{ order: Order }>()
);

export const removeFromCart = createAction(
  '[Cart] Remove From Cart',
  props<{ order: Order }>()
);

export const clearCart = createAction('[Cart] Clear Cart');

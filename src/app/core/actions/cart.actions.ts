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

export const updateOrder = createAction(
  '[Cart] Change Order',
  props<{ order: Order }>()
);

export const incrementQuantity = createAction(
  '[Cart] Increment Quantity',
  props<{ order: Order }>()
);

export const descrementQuantity = createAction(
  '[Cart] Decrement Quantity',
  props<{ order: Order }>()
);

export const clearCart = createAction('[Cart] Clear Cart');

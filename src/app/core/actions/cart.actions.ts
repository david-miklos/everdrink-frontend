import { Product } from '@core/interfaces/product.interface';
import { createAction, props } from '@ngrx/store';

export const addToCart = createAction(
  '[Cart] Add To Cart',
  props<{ product: Product }>()
);

export const removeFromCart = createAction(
  '[Cart] Remove From Cart',
  props<{ product: Product }>()
);

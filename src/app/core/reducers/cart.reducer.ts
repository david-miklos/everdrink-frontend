import { CartActions } from '@core/actions';
import { CartState, initialCartState } from '@core/states/cart.state';
import { createReducer, on } from '@ngrx/store';

export const cartReducer = createReducer(
  initialCartState,
  on(CartActions.addToCart, (state: CartState, { product }) => ({
    count: state.count + 1,
    total: state.total + (product.gross_price + product.wrappage_gross_price),
    products: [...state.products, product],
  })),
  on(CartActions.removeFromCart, (state: CartState, { product }) => ({
    count: state.count - 1,
    total: state.total - (product.gross_price + product.wrappage_gross_price),
    products: state.products.filter((item) => item !== product),
  }))
);

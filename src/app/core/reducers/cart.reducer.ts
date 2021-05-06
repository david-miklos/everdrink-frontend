import { CartActions } from '@core/actions';
import { CartState, initialCartState } from '@core/states/cart.state';
import { createReducer, on } from '@ngrx/store';


export const cartReducer = createReducer(
  initialCartState,
  on(CartActions.addToCart, (state: CartState, { order }) => ({
    count: state.count + 1,
    total:
      state.total +
      (order.product.gross_price + order.product.wrappage_gross_price) *
        order.quantity,
    orders: [...state.orders, order],
  })),
  on(CartActions.removeFromCart, (state: CartState, { order }) => ({
    count: state.count - 1,
    total:
      state.total -
      (order.product.gross_price + order.product.wrappage_gross_price) *
        order.quantity,
    orders: state.orders.filter((item) => item !== order),
  })),
  on(CartActions.clearCart, (state: CartState) => (initialCartState)),
);

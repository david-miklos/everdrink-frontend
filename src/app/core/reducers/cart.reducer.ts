import { CartActions } from '@core/actions';
import { Order } from '@core/interfaces/order.interface';
import { Product } from '@core/interfaces/product.interface';
import { CartState, initialCartState } from '@core/states/cart.state';
import { createReducer, on } from '@ngrx/store';
import * as _ from 'lodash';

export const cartReducer = createReducer(
  initialCartState,
  on(CartActions.addToCart, (state: CartState, { order }) => {
    const products: Product[] = _.map(state.orders, 'product');
    const isInCart: boolean = _.some(products, order.product);
    if (isInCart) {
      const newCount = state.count;
      const newTotal =
        state.total +
        (order.product.gross_price + order.product.wrappage_gross_price) *
          order.quantity;
      const newOrders = state.orders.map<Order>(
        (stateOrder): Order => {
          if (stateOrder.product.id === order.product.id) {
            stateOrder = {
              product: order.product,
              quantity: stateOrder.quantity + order.quantity,
            };
          }
          return stateOrder;
        }
      );

      return {
        count: newCount,
        total: newTotal,
        orders: newOrders,
      };
    } else {
      const newCount = state.count + 1;
      const newTotal =
        state.total +
        (order.product.gross_price + order.product.wrappage_gross_price) *
          order.quantity;
      const newOrders = [...state.orders, order];

      return {
        count: newCount,
        total: newTotal,
        orders: newOrders,
      };
    }
  }),
  on(CartActions.removeFromCart, (state: CartState, { order }) => ({
    count: state.count - 1,
    total:
      state.total -
      (order.product.gross_price + order.product.wrappage_gross_price) *
        order.quantity,
    orders: state.orders.filter((stateOrder) => stateOrder !== order),
  })),
  on(CartActions.incrementQuantity, (state: CartState, { order }) => {
    const newCount = state.count;
    const newTotal =
      state.total +
      (order.product.gross_price + order.product.wrappage_gross_price);
    const newOrders = state.orders.map<Order>(
      (stateOrder): Order => {
        if (stateOrder.product.id === order.product.id) {
          stateOrder = {
            product: order.product,
            quantity: stateOrder.quantity + 1,
          };
        }
        return stateOrder;
      }
    );
    return {
      count: newCount,
      total: newTotal,
      orders: newOrders,
    };
  }),
  on(CartActions.descrementQuantity, (state: CartState, { order }) => {
    const newCount = state.count;
    const newTotal =
      state.total -
      (order.product.gross_price + order.product.wrappage_gross_price);
    const newOrders = state.orders.map<Order>(
      (stateOrder): Order => {
        if (stateOrder.product.id === order.product.id) {
          stateOrder = {
            product: order.product,
            quantity: stateOrder.quantity - 1,
          };
        }
        return stateOrder;
      }
    );
    return {
      count: newCount,
      total: newTotal,
      orders: newOrders,
    };
  }),
  on(CartActions.clearCart, (state: CartState) => initialCartState)
);

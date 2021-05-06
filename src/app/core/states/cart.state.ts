import { Order } from '@core/interfaces/order.interface';

export interface CartState {
  count: number;
  total: number;
  orders: Order[];
}

export const initialCartState: CartState = {
  count: 0,
  total: 0,
  orders: [] as Order[],
};

export const cartFeatureKey = 'cart';

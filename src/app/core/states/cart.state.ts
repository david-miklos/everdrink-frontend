import { Product } from '@core/interfaces/product.interface';

export interface CartState {
  count: number;
  total: number;
  products: Product[];
}

export const initialCartState: CartState = {
  count: 0,
  total: 0,
  products: [] as Product[],
};

export const cartFeatureKey = 'cart';

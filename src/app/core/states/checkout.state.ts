import { CheckoutResponse } from '@core/interfaces/checkout.response.interface';

export interface CheckoutState {
  checkouts: CheckoutResponse[];
}

export const initialCheckoutState: CheckoutState = {
  checkouts: [] as CheckoutResponse[],
};

export const checkoutFeatureKey = 'checkout';

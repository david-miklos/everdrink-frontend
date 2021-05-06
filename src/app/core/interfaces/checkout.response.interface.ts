import { Address } from './address.interface';
import { Order } from './order.interface';
import { User } from './user.interface';

export interface CheckoutResponse {
  id: string;
  shipping: string;
  user: User;
  address: Address;
  orders: Order[];
}

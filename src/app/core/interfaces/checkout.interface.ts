import { User } from './user.interface';

export interface Checkout {
  id: string;
  shipping: string;
  user: User;
}

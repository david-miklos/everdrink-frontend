import { Role } from './login.response.interface';

export interface User {
  id: string;
  email: string;
  role: Role;
}

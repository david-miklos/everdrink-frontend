import { Auth } from '@core/interfaces/login.response.interface';

export interface AuthState {
  isLoggedIn: boolean;
  auth: Auth;
}

export const initialAuthState: AuthState = {
  isLoggedIn: false,
  auth: {} as Auth,
};

export const authFeatureKey = 'auth';

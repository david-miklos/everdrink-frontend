import { LoginResponse, Role } from '@core/interfaces/login.response.interface';

export interface AuthState {
  isLoggedIn: boolean;
  auth: LoginResponse;
}

export const initialAuthState: AuthState = {
  isLoggedIn: false,
  auth: {
    payload: {
      id: undefined,
      email: undefined,
      role: Role.GUEST,
    },
    access_token: undefined,
    expires_in: undefined,
  },
};

export const authFeatureKey = 'auth';

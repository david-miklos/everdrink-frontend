import { AuthActions } from '@core/actions';
import { Auth } from '@core/interfaces/login.response.interface';
import { AuthState, initialAuthState } from '@core/states/auth.state';
import { createReducer, on } from '@ngrx/store';

export const authReducer = createReducer(
  initialAuthState,
  on(AuthActions.login, (state: AuthState, { auth }) => ({
    isLoggedIn: true,
    auth,
  })),
  on(AuthActions.logout, (state: AuthState) => ({
    isLoggedIn: false,
    auth: {} as Auth,
  }))
);

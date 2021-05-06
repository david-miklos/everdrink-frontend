import { AuthActions } from '@core/actions';
import { AuthState, initialAuthState } from '@core/states/auth.state';
import { createReducer, on } from '@ngrx/store';

export const authReducer = createReducer(
  initialAuthState,
  on(AuthActions.login, (state: AuthState, { auth }) => ({
    isLoggedIn: true,
    auth,
  })),
  on(AuthActions.logout, (state: AuthState) => (initialAuthState))
);

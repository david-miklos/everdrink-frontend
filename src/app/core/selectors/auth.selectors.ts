import { AppState } from '@core/states/app.state';
import { authFeatureKey, AuthState } from '@core/states/auth.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const selectStateIsLoggedIn = (state: AuthState) => state.isLoggedIn;

const selectStateAuth = (state: AuthState) => state.auth;

const authFeatureSelector = createFeatureSelector<AppState, AuthState>(
  authFeatureKey
);

export const selectIsLoggedIn = createSelector(
  authFeatureSelector,
  selectStateIsLoggedIn
);

export const selectAuth = createSelector(authFeatureSelector, selectStateAuth);

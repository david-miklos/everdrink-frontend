import { AppState } from '@core/states/app.state';
import { userFeatureKey, UserState } from '@core/states/user.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const selectStateUsers = (state: UserState) => state.users;

const usersFeatureSelector = createFeatureSelector<AppState, UserState>(
  userFeatureKey
);

export const selectUsers = createSelector(
  usersFeatureSelector,
  selectStateUsers
);

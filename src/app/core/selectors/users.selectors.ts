import { AppState } from '@core/states/app.state';
import { usersFeatureKey, UsersState } from '@core/states/users.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const selectStateUsers = (state: UsersState) => state.users;

const usersFeatureSelector = createFeatureSelector<AppState, UsersState>(
  usersFeatureKey
);

export const selectUsers = createSelector(
  usersFeatureSelector,
  selectStateUsers
);

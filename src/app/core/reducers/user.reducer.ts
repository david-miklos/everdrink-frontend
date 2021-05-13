import { UserActions } from '@core/actions';
import { initialUsersState, UserState } from '@core/states/user.state';
import { createReducer, on } from '@ngrx/store';

export const userReducer = createReducer(
  initialUsersState,
  on(UserActions.addUsers, (state: UserState, { users }) => ({
    users,
  })),
  on(UserActions.approveUser, (state: UserState, { user }) => ({
    users: state.users.filter((stateUser) => stateUser.id !== user.id),
  }))
);

import { UsersActions } from '@core/actions';
import { initialUsersState, UsersState } from '@core/states/users.state';
import { createReducer, on } from '@ngrx/store';

export const usersReducer = createReducer(
  initialUsersState,
  on(UsersActions.addUsers, (state: UsersState, { users }) => ({
    users,
  })),
  on(UsersActions.approveUser, (state: UsersState, { user }) => ({
    users: state.users.filter((item) => item.id !== user.id),
  }))
);

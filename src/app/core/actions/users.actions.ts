import { User } from '@core/interfaces/user.interface';
import { createAction, props } from '@ngrx/store';

export const addUsers = createAction(
  '[Users] Add Users',
  props<{ users: User[] }>()
);

export const approveUser = createAction(
  '[Users] Approve User',
  props<{ user: User }>()
);

import { User } from '@core/interfaces/user.interface';

export interface UsersState {
  users: User[];
}

export const initialUsersState: UsersState = {
  users: [] as User[],
};

export const usersFeatureKey = 'users';

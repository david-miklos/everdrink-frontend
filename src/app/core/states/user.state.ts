import { User } from '@core/interfaces/user.interface';

export interface UserState {
  users: User[];
}

export const initialUsersState: UserState = {
  users: [] as User[],
};

export const userFeatureKey = 'user';

import { Auth } from '@core/interfaces/login.response.interface';
import { createAction, props } from '@ngrx/store';

export const login = createAction('[Auth] Login', props<{ auth: Auth }>());

export const logout = createAction('[Auth] Logout');

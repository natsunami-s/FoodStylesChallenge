import * as types from './actionTypes';
import { User, UserData } from 'types/user';

export const setToken = (payload: string) => ({
  type: types.SET_TOKEN,
  payload,
});

export const setUser = (payload: User) => ({
  type: types.SET_USER,
  payload,
});

export const setUserData = (payload: UserData) => ({
  type: types.SET_USER_DATA,
  payload,
});

export const resetAppState = () => ({
  type: types.RESET_APP_STATE,
});

export type Actions = ReturnType<
  typeof setToken | typeof setUser | typeof resetAppState | typeof setUserData
>;

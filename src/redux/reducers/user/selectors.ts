import get from 'lodash/get';

import { AppState } from 'redux/config/rootReducer';

import { User } from 'types/user';

export const getAccessToken = (state: AppState): string =>
  get(state, 'user.accessToken', null);

export const getUserID = (state: AppState): string =>
  get(state, 'user.user.id', null);

export const getUser = (state: AppState): User => get(state, 'user.user', {});

export const getUserName = (state: AppState): User =>
  get(state, 'user.user.name', {});

export const getUserEmail = (state: AppState): User =>
  get(state, 'user.user.email', {});

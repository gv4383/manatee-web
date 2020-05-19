import { createSelector } from 'reselect';

import { AppState } from '../reducers';

export const usersState = (state: AppState) => state.users;

export const users = createSelector(
  usersState,
  ({ data }) => data?.data,
);

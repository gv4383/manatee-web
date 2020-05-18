import { createSelector } from 'reselect';

import { AppState } from '../reducers';

export const usersState = (state: AppState) => state.users;

export const fetchUsersState = createSelector(
  usersState,
  ({ fetchUsers }) => fetchUsers,
);

export const users = createSelector(
  fetchUsersState,
  ({ data }) => data?.data,
);

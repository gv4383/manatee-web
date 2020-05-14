import { createSelector } from 'reselect';

import { AppState } from '..';

export const usersState = (state: AppState) => state.users;

export const fetchUsersState = createSelector(
  usersState,
  (usersState) => usersState.fetchUsers,
);

export const users = createSelector(
  fetchUsersState,
  (fetchUsersState) => fetchUsersState.data,
);

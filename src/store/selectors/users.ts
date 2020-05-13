import { createSelector } from 'reselect';

export const usersState = (state: any) => state.users;

export const fetchUsersState = createSelector(
  usersState,
  ({ fetchReducer }) => fetchReducer,
);

export const users = createSelector(
  fetchUsersState,
  ({ data }) => data,
);

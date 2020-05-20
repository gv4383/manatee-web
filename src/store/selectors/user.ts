import { createSelector } from 'reselect';

import { AppState } from '../reducers';

export const userState = (state: AppState) => state.user;

export const user = createSelector(
  userState,
  ({ data }) => data?.data,
);

export const skills = createSelector(
  userState,
  ({ data }) => data?.included,
);

import { createSelector } from 'reselect';

import { AppState } from '../reducers';

export const searchSkillState = (state: AppState) => state.searchSkill;

export const skills = createSelector(
  searchSkillState,
  ({ data }) => data?.data,
);

export const users = createSelector(
  searchSkillState,
  ({ data }) => data?.included,
);

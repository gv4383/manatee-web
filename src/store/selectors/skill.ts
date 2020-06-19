import { createSelector } from 'reselect';

import { AppState } from '../reducers';

export const createSkillState = (state: AppState) => state.skill.create;

export const createSkillStatus = createSelector(
  createSkillState,
  ({ status }) => status.trim(),
);

export const createSkillError = createSelector(
  createSkillState,
  ({ error }) => error?.trim(),
);

import { DestroySkillEvent, DestroySkillState } from './types';

export const initialDestroySkillState: DestroySkillState = {
  status: 'IDLE',
  error: null,
};

const idleReducer = (
  state: DestroySkillState = initialDestroySkillState,
  event: DestroySkillEvent,
) => {
  const { type } = event;

  switch (type) {
    case 'DESTROY_SKILL/FETCH':
      return {
        ...state,
        status: 'LOADING',
        error: null,
      };
    default:
      return state;
  }
};

const loadingReducer = (
  state: DestroySkillState = initialDestroySkillState,
  event: DestroySkillEvent,
) => {
  const { error, type } = event;

  switch (type) {
    case 'DESTROY_SKILL/RESOLVE':
      return {
        status: 'SUCCESS',
        error: null,
      };
    case 'DESTROY_SKILL/REJECT':
      return {
        ...state,
        status: 'FAILURE',
        error,
      };
    default:
      return state;
  }
};

const successFailureReducer = (
  state: DestroySkillState = initialDestroySkillState,
  event: DestroySkillEvent,
) => {
  const { type } = event;

  switch (type) {
    case 'DESTROY_SKILL/FETCH':
      return {
        ...state,
        status: 'LOADING',
        error: null,
      };
    default:
      return state;
  }
};

const destroy = (
  state: DestroySkillState = initialDestroySkillState,
  event: DestroySkillEvent,
) => {
  const { status } = state;

  switch (status) {
    case 'IDLE':
      return idleReducer(state, event);
    case 'LOADING':
      return loadingReducer(state, event);
    case 'SUCCESS':
    case 'FAILURE':
      return successFailureReducer(state, event);
    default:
      return state;
  }
};

export default destroy;

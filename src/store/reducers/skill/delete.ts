import { DestroySkillEvent, DestroySkillState } from './types';
import { EVENTS, STATUSES } from '../../lib/constants';

export const initialDestroySkillState: DestroySkillState = {
  status: STATUSES.IDLE,
  error: null,
};

const idleReducer = (
  state: DestroySkillState = initialDestroySkillState,
  event: DestroySkillEvent,
) => {
  const { type } = event;

  switch (type) {
    case `DESTROY_SKILL/${EVENTS.FETCH}`:
      return {
        ...state,
        status: STATUSES.LOADING,
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
    case `DESTROY_SKILL/${EVENTS.RESOLVE}`:
      return {
        status: STATUSES.SUCCESS,
        error: null,
      };
    case `DESTROY_SKILL/${EVENTS.REJECT}`:
      return {
        ...state,
        status: STATUSES.FAILURE,
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
    case `DESTROY_SKILL/${EVENTS.FETCH}`:
      return {
        ...state,
        status: STATUSES.LOADING,
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
    case STATUSES.IDLE:
      return idleReducer(state, event);
    case STATUSES.LOADING:
      return loadingReducer(state, event);
    case STATUSES.SUCCESS:
    case STATUSES.FAILURE:
      return successFailureReducer(state, event);
    default:
      return state;
  }
};

export default destroy;

import { CreateSkillEvent, CreateSkillState } from './types';
import { CREATE_SKILL } from '../../actions/skill/constants';
import { EVENTS, STATUSES } from '../../lib/constants';

export const initialCreateSkillState: CreateSkillState = {
  status: STATUSES.IDLE,
  error: null,
};

const idleReducer = (
  state: CreateSkillState = initialCreateSkillState,
  event: CreateSkillEvent,
) => {
  const { type } = event;

  switch (type) {
    case `${CREATE_SKILL}/${EVENTS.FETCH}`:
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
  state: CreateSkillState = initialCreateSkillState,
  event: CreateSkillEvent,
) => {
  const { error, type } = event;

  switch (type) {
    case `${CREATE_SKILL}/${EVENTS.RESOLVE}`:
      return {
        status: STATUSES.SUCCESS,
        error: null,
      };
    case `${CREATE_SKILL}/${EVENTS.REJECT}`:
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
  state: CreateSkillState = initialCreateSkillState,
  event: CreateSkillEvent,
) => {
  const { type } = event;

  switch (type) {
    case `${CREATE_SKILL}/${EVENTS.FETCH}`:
      return {
        ...state,
        status: STATUSES.LOADING,
        error: null,
      };
    default:
      return state;
  }
};

const create = (
  state: CreateSkillState = initialCreateSkillState,
  event: CreateSkillEvent,
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

export default create;

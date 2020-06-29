import { UpdateSkillEvent, UpdateSkillState } from './types';
import { UPDATE_SKILL } from '../../actions/skill/constants';
import { EVENTS, STATUSES } from '../../lib/constants';

export const initialUpdateSkillState: UpdateSkillState = {
  status: STATUSES.IDLE,
  data: null,
  error: null,
};

const idleReducer = (
  state: UpdateSkillState,
  event: UpdateSkillEvent,
) => {
  const { type } = event;

  switch (type) {
    case `${UPDATE_SKILL}/${EVENTS.FETCH}`:
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
  state: UpdateSkillState,
  event: UpdateSkillEvent,
) => {
  const {
    data,
    error,
    type,
  } = event;

  switch (type) {
    case `${UPDATE_SKILL}/${EVENTS.RESOLVE}`:
      return {
        status: STATUSES.SUCCESS,
        data,
        error: null,
      };
    case `${UPDATE_SKILL}/${EVENTS.REJECT}`:
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
  state: UpdateSkillState,
  event: UpdateSkillEvent,
) => {
  const { type } = event;

  switch (type) {
    case `${UPDATE_SKILL}/${EVENTS.FETCH}`:
      return {
        ...state,
        status: STATUSES.LOADING,
        error: null,
      };
    default:
      return state;
  }
};

const update = (
  state: UpdateSkillState = initialUpdateSkillState,
  event: UpdateSkillEvent,
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

export default update;
